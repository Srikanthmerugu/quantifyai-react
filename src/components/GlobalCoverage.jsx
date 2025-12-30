import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { motion } from "framer-motion";
import { FiMapPin, FiGlobe, FiChevronDown, FiChevronUp, FiCheckCircle, FiUsers, FiTrendingUp } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const GlobalCoverage = () => {
  const [options, setOptions] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedRegion, setExpandedRegion] = useState(["Americas", "APAC", "EMEA"]);

  useEffect(() => {
    const loadMap = async () => {
      const topology = await fetch(
        "https://code.highcharts.com/mapdata/custom/world.topo.json"
      ).then((res) => res.json());

      // Country data by region
      const americas = [
        ["us", "Americas"], ["ca", "Americas"], ["mx", "Americas"],
        ["ar", "Americas"], ["br", "Americas"], ["co", "Americas"], ["cl", "Americas"],
        ["pe", "Americas"], ["ve", "Americas"], ["cr", "Americas"]
      ];

      const apac = [
        ["au", "APAC"], ["cn", "APAC"], ["hk", "APAC"], ["in", "APAC"],
        ["id", "APAC"], ["jp", "APAC"], ["my", "APAC"], ["nz", "APAC"],
        ["ph", "APAC"], ["kr", "APAC"], ["sg", "APAC"], ["tw", "APAC"],
        ["th", "APAC"], ["vn", "APAC"], ["pk", "APAC"], ["bd", "APAC"]
      ];

      const emea = [
        ["at", "EMEA"], ["be", "EMEA"], ["bg", "EMEA"], ["cz", "EMEA"],
        ["dk", "EMEA"], ["fi", "EMEA"], ["fr", "EMEA"], ["de", "EMEA"],
        ["gr", "EMEA"], ["hu", "EMEA"], ["ie", "EMEA"], ["it", "EMEA"],
        ["nl", "EMEA"], ["no", "EMEA"], ["pl", "EMEA"], ["pt", "EMEA"],
        ["ro", "EMEA"], ["sk", "EMEA"], ["za", "EMEA"], ["es", "EMEA"],
        ["se", "EMEA"], ["ch", "EMEA"], ["tr", "EMEA"], ["ae", "EMEA"],
        ["gb", "EMEA"], ["sa", "EMEA"], ["qa", "EMEA"], ["eg", "EMEA"]
      ];

      const mapData = [...americas, ...apac, ...emea].map(([key, region]) => ({
        "hc-key": key,
        region,
        value: Math.floor(Math.random() * 100) + 50
      }));

      setOptions({
        chart: {
          map: topology,
          backgroundColor: "transparent",
          spacing: [10, 10, 10, 10],
          height: 450
        },

        title: {
          text: null
        },

        credits: {
          enabled: false
        },

        mapNavigation: {
          enabled: false
        },

        tooltip: {
          useHTML: true,
          backgroundColor: "rgba(15, 23, 42, 0.98)",
          borderWidth: 0,
          borderRadius: 12,
          shadow: true,
          padding: 16,
          style: {
            color: "#ffffff",
            fontSize: "14px",
            lineHeight: "1.4"
          },
          formatter() {
            return `
              <div style="min-width: 200px">
                <div style="display: flex; align-items: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <div style="width: 8px; height: 8px; border-radius: 50%; background: ${this.point.color}; margin-right: 10px;"></div>
                  <div style="font-size: 16px; font-weight: 600; color: #fff;">${this.point.name}</div>
                </div>
                <div style="display: flex; align-items: center; margin: 8px 0;">
                  <div style="color: #94a3b8; margin-right: 8px; font-size: 12px;">REGION:</div>
                  <div style="font-weight: 500; color: #60a5fa; font-size: 13px;">${this.point.region}</div>
                </div>
                <div style="display: flex; align-items: center; margin: 8px 0;">
                  <div style="color: #94a3b8; margin-right: 8px; font-size: 12px;">STATUS:</div>
                  <div style="font-weight: 500; color: #34d399; font-size: 13px; display: flex; align-items: center;">
                    <span style="width: 6px; height: 6px; background: #34d399; border-radius: 50%; margin-right: 6px;"></span>
                    Active Coverage
                  </div>
                </div>
                <div style="display: flex; align-items: center; margin: 8px 0;">
                  <div style="color: #94a3b8; margin-right: 8px; font-size: 12px;">PANEL SIZE:</div>
                  <div style="font-weight: 500; color: #f59e0b; font-size: 13px;">${Math.floor(Math.random() * 50) + 5}K+ Verified</div>
                </div>
              </div>
            `;
          }
        },

        plotOptions: {
          series: {
            borderColor: "#1e293b",
            borderWidth: 1,
            states: {
              hover: {
                color: "#3b82f6",
                borderColor: "#60a5fa",
                borderWidth: 2
              }
            },
            point: {
              events: {
                mouseOver() {
                  setSelectedCountry(this.name);
                },
                mouseOut() {
                  setSelectedCountry(null);
                }
              }
            }
          }
        },

        series: [{
          name: "Global Coverage",
          data: mapData,
          joinBy: "hc-key",
          color: "#3b82f6",
          nullColor: "#1e293b",
          dataLabels: { enabled: false },
          allowPointSelect: false
        }],

        mapView: {
          projection: { name: "EqualEarth" },
          zooming: {
            mouseWheel: false,
            pinchType: false,
            singleTouch: false,
            doubleTouch: false
          }
        }
      });
    };

    loadMap();
  }, []);

  const regionData = {
    "Americas": {
      color: "from-blue-500 to-blue-600",
      icon: <FiUsers className="text-blue-400" />,
      countries: {
        "NORTH": ["United States", "Canada", "Mexico"],
        "SOUTH": ["Argentina", "Brazil", "Colombia", "Chile", "Peru", "Venezuela", "Costa Rica"]
      }
    },
    "APAC": {
      color: "from-teal-500 to-teal-600",
      icon: <FiTrendingUp className="text-teal-400" />,
      countries: {
        "ASIA PACIFIC": ["Australia", "China", "Hong Kong", "India", "Indonesia", "Japan", "Malaysia", "New Zealand", "Philippines", "South Korea", "Singapore", "Taiwan", "Thailand", "Vietnam", "Pakistan", "Bangladesh"]
      }
    },
    "EMEA": {
      color: "from-indigo-500 to-indigo-600",
      icon: <MdLocationOn className="text-indigo-400" />,
      countries: {
        "EUROPE": ["Austria", "Belgium", "Bulgaria", "Czech Republic", "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Spain", "Sweden", "Switzerland", "Turkey", "United Kingdom"],
        "MIDDLE EAST & AFRICA": ["United Arab Emirates", "Saudi Arabia", "Qatar", "Egypt", "South Africa"]
      }
    }
  };

  const toggleRegion = (region) => {
    setExpandedRegion(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  if (!options) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px]">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400">Loading global coverage map...</p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 border border-blue-500/20 mb-4 animate-fadeIn">
            <FiGlobe className="text-blue-400 mr-2" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider">GLOBAL REACH</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Global <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Coverage</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            48 Markets Worldwide • Local Expertise • Global Standards
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Coverage</h3>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                <FiGlobe className="text-white text-sm" />
              </div>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">48</div>
            <p className="text-sm text-gray-400">Countries Worldwide</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Verified Panel</h3>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                <FiUsers className="text-white text-sm" />
              </div>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">500K+</div>
            <p className="text-sm text-gray-400">Participants</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Response Rate</h3>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                <FiTrendingUp className="text-white text-sm" />
              </div>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">94%</div>
            <p className="text-sm text-gray-400">Industry Leading</p>
          </motion.div>
        </div>

        {/* Map with Countries List */}
        <div className="grid grid-cols-1 py-5 lg:grid-cols-4 bg-gradient-to-br from-blue-900/10 to-teal-900/10">
          {/* Countries List */}
          <div className="lg:col-span-1 bg-gradient-to-br from-blue-900/10 to-teal-900/10">
            <div className="glass-car h-full">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <MdLocationOn className="text-blue-400 mr-2" />
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Countries Covered
                </span>
                <span className="ml-2 text-sm text-gray-400">(48 Total)</span>
              </h3>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {Object.entries(regionData).map(([region, data]) => (
                  <div key={region} className="rounded-xl overflow-hidden border border-gray-800">
                    {/* Region Header */}
                    <button
                      onClick={() => toggleRegion(region)}
                      className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${data.color} flex items-center justify-center mr-3`}>
                          {data.icon}
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-white">{region}</h4>
                          <p className="text-xs text-gray-400">
                            {Object.values(data.countries).flat().length} countries
                          </p>
                        </div>
                      </div>
                      {expandedRegion.includes(region) ? (
                        <FiChevronUp className="text-blue-400" />
                      ) : (
                        <FiChevronDown className="text-blue-400" />
                      )}
                    </button>

                    {/* Countries List */}
                    {expandedRegion.includes(region) && (
                      <div className="bg-gray-900/50 p-4">
                        {Object.entries(data.countries).map(([subregion, countries]) => (
                          <div key={subregion} className="mb-4 last:mb-0">
                            <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                              {subregion}
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {countries.map((country, index) => (
                                <motion.div
                                  key={country}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.03 }}
                                  className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                                    selectedCountry === country 
                                      ? 'bg-gradient-to-r from-blue-500/20 to-teal-400/20 border border-blue-500/30' 
                                      : 'hover:bg-gray-800/50'
                                  }`}
                                  onMouseEnter={() => setSelectedCountry(country)}
                                  onMouseLeave={() => setSelectedCountry(null)}
                                >
                                  <FiCheckCircle className={`mr-2 flex-shrink-0 ${
                                    selectedCountry === country ? 'text-teal-400' : 'text-blue-400'
                                  }`} />
                                  <span className={`text-sm truncate ${
                                    selectedCountry === country ? 'text-white font-medium' : 'text-gray-300'
                                  }`}>
                                    {country}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-3">
            <div className="glass-car h-full">
              <div className="bg-gradient-to-br from-blue-900/10 to-teal-900/10 rounded-xl p-6 h-full">
                {/* Selected Country Display */}
                {selectedCountry && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-full flex items-center shadow-lg shadow-blue-500/30">
                      <FiMapPin className="mr-2" />
                      <span className="font-semibold tracking-wide">{selectedCountry}</span>
                    </div>
                  </motion.div>
                )}

                {/* Map */}
                <div className="relative rounded-lg overflow-hidden h-full">
                  <HighchartsReact
                    highcharts={Highcharts}
                    constructorType="mapChart"
                    options={options}
                  />
                  
                  {/* Map Legend */}
                  <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 border border-blue-500/20 shadow-lg">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-xs text-gray-300">Active Coverage</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-xs text-gray-300">Expanding Soon</span>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-teal-500/20 animate-float-slow">
                    <p className="text-xs text-teal-300 flex items-center">
                      <span className="mr-2">✨</span>
                      Hover over countries
                    </p>
                  </div>
                </div>

                {/* Global Insights */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 rounded-lg bg-gray-900/30">
                    <div className="text-lg font-bold text-blue-400">3</div>
                    <div className="text-xs text-gray-400">Continents</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-900/30">
                    <div className="text-lg font-bold text-teal-400">10+</div>
                    <div className="text-xs text-gray-400">Languages</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-900/30">
                    <div className="text-lg font-bold text-indigo-400">24/7</div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-900/30">
                    <div className="text-lg font-bold text-blue-400">98%</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-blue-400">✓</span> All locations include local field teams & cultural expertise
          </p>
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        .glass-card {
          background: rgba(30, 41, 59, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.3);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #06b6d4);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #059669);
        }
        
        .highcharts-tooltip {
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.4));
        }
        
        .highcharts-tooltip-box {
          stroke-width: 0;
        }
        
        .highcharts-container {
          cursor: default !important;
        }
        
        .highcharts-credits {
          display: none !important;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-float-slow {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default GlobalCoverage;