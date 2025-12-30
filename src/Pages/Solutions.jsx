import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  BiChevronRight, BiCheckCircle, BiTrendingUp, BiBarChartAlt2, 
  BiTargetLock, BiUserVoice, BiLineChart, BiPieChartAlt2,
  BiShield, BiGlobe, BiData, BiBriefcase, BiBuilding, BiMedal,
  BiStar, BiRocket, BiAnalyse, BiChip, BiCalendarCheck
} from 'react-icons/bi';
import { 
  FaChartLine, FaUsers, FaIndustry, FaSearchDollar, 
  FaAd, FaShoppingCart, FaProductHunt, FaUserCheck,
  FaClipboardCheck, FaRegLightbulb, FaRegChartBar
} from 'react-icons/fa';
import { 
  MdOutlineInsights, MdOutlineMiscellaneousServices, 
  MdOutlineScience, MdOutlineModelTraining, MdGroups
} from 'react-icons/md';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// Custom animation hook - 定义在组件之前
const useScrollAnimation = (ref) => {
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return controls;
};

// Animation variants - 定义在组件之前
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const cardHoverVariants = {
  hover: { 
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState('ad-testing');
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const industriesRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls - 现在这些可以正常使用了
  const heroControls = useScrollAnimation(heroRef);
  const solutionsControls = useScrollAnimation(solutionsRef);
  const industriesControls = useScrollAnimation(industriesRef);
  const ctaControls = useScrollAnimation(ctaRef);

  // Solutions data based on PPT
  const solutionsData = [
    {
      id: 'ad-testing',
      title: "Ad Testing & Creative Validation",
      icon: <FaAd className="w-6 h-6" />,
      description: "Test and optimize your advertising creative across platforms to maximize impact and ROI.",
      features: [
        "Concept Testing & Validation",
        "Creative Optimization",
        "Cross-Platform Testing",
        "Brand Lift Measurement",
        "Competitive Benchmarking"
      ],
      color: "blue",
      stats: [
        { label: "Creative Tested", value: "10,000+" },
        { label: "Avg. ROI Increase", value: "35%" },
        { label: "Client Satisfaction", value: "98%" }
      ]
    },
    {
      id: 'market-sizing',
      title: "Market Sizing & Opportunity Analysis",
      icon: <FaChartLine className="w-6 h-6" />,
      description: "Identify market opportunities, estimate total addressable market, and pinpoint growth areas.",
      features: [
        "Total Addressable Market (TAM)",
        "Market Segmentation",
        "Growth Projections",
        "Competitive Landscape",
        "Entry Strategy Analysis"
      ],
      color: "purple",
      stats: [
        { label: "Markets Analyzed", value: "500+" },
        { label: "Accuracy Rate", value: "95%" },
        { label: "Client Industries", value: "100+" }
      ]
    },
    {
      id: 'product-dev',
      title: "Product Development & Innovation",
      icon: <FaProductHunt className="w-6 h-6" />,
      description: "Guide product development from concept to launch with data-driven insights and validation.",
      features: [
        "Concept Testing",
        "Feature Prioritization",
        "Pricing Strategy",
        "UX/UI Validation",
        "Launch Optimization"
      ],
      color: "green",
      stats: [
        { label: "Products Launched", value: "1,200+" },
        { label: "Success Rate", value: "89%" },
        { label: "Time to Market", value: "-30%" }
      ]
    },
    {
      id: 'brand-track',
      title: "Brand Tracking & Health Monitoring",
      icon: <BiBarChartAlt2 className="w-6 h-6" />,
      description: "Continuously monitor brand health, awareness, and perception across key markets.",
      features: [
        "Brand Awareness Tracking",
        "Equity Measurement",
        "Competitor Benchmarking",
        "Customer Sentiment",
        "Trend Analysis"
      ],
      color: "orange",
      stats: [
        { label: "Brands Tracked", value: "850+" },
        { label: "Global Markets", value: "50+" },
        { label: "Real-time Updates", value: "24/7" }
      ]
    },
    {
      id: 'customer-exp',
      title: "Customer Experience & Satisfaction",
      icon: <FaUserCheck className="w-6 h-6" />,
      description: "Measure and optimize customer experience across all touchpoints to drive loyalty and retention.",
      features: [
        "NPS & CSAT Tracking",
        "Journey Mapping",
        "Pain Point Analysis",
        "Loyalty Measurement",
        "Service Optimization"
      ],
      color: "pink",
      stats: [
        { label: "CX Programs", value: "2,500+" },
        { label: "Avg. NPS Increase", value: "+25 pts" },
        { label: "Retention Boost", value: "40%" }
      ]
    },
    {
      id: 'uom',
      title: "Market Segmentation",
      icon: <MdGroups className="w-6 h-6" />,
      description: "Deep dive into consumer behavior, attitudes, and segmentation for targeted strategies.",
      features: [
        "Usage & Attitude Studies",
        "Segmentation Analysis",
        "Persona Development",
        "Behavioral Insights",
        "Target Profiling"
      ],
      color: "cyan",
      stats: [
        { label: "Segments Created", value: "3,000+" },
        { label: "Consumer Insights", value: "10M+" },
        { label: "Targeting Precision", value: "99%" }
      ]
    }
  ];

  // Industry solutions data
  const industrySolutions = [
    {
      industry: "Technology & SaaS",
      icon: <BiChip className="w-5 h-5" />,
      solutions: ["Product-Market Fit", "Feature Testing", "Competitive Intelligence"]
    },
    {
      industry: "Consumer Goods",
      icon: <FaShoppingCart className="w-5 h-5" />,
      solutions: ["Packaging Testing", "Pricing Studies", "Shopper Insights"]
    },
    {
      industry: "Financial Services",
      icon: <BiLineChart className="w-5 h-5" />,
      solutions: ["Customer Segmentation", "Product Adoption", "Risk Assessment"]
    },
    {
      industry: "Healthcare",
      icon: <MdOutlineScience className="w-5 h-5" />,
      solutions: ["Treatment Evaluation", "Patient Journey", "KOL Engagement"]
    },
    {
      industry: "Automotive",
      icon: <BiTrendingUp className="w-5 h-5" />,
      solutions: ["Concept Validation", "Brand Perception", "Purchase Drivers"]
    },
    {
      industry: "Media & Entertainment",
      icon: <BiUserVoice className="w-5 h-5" />,
      solutions: ["Content Testing", "Audience Measurement", "Ad Effectiveness"]
    }
  ];

  const activeSolutionData = solutionsData.find(s => s.id === activeSolution) || solutionsData[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white">
     

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={heroRef}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={heroControls}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 mb-8"
            >
              <BsFillLightbulbFill className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-blue-300"> Actionable Insights</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Research Solutions

              </span>
              <br />
              <span className="text-2xl md:text-4xl text-gray-300">for Complex Business Challenges</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We equip you with the insights and data needed to make actionable business decisions. 
              Solve your most complex business questions through research-driven solutions.
            </p>
            
           
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section ref={solutionsRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={solutionsControls}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-blue-400">Research Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept testing to market analysis, we provide end-to-end research solutions tailored to your needs
            </p>
          </motion.div>

          {/* Solutions Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={solutionsControls}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {solutionsData.map((solution, index) => (
              <motion.button
                key={solution.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSolution(solution.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                  activeSolution === solution.id
                    ? `bg-gradient-to-r from-${solution.color}-500 to-${solution.color}-600 text-white shadow-lg shadow-${solution.color}-500/25`
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                }`}
              >
                {/* <div className={`${activeSolution === solution.id ? 'text-white' : `text-${solution.color}-400`}`}>
                  {solution.icon}
                </div> */}
                <span>{solution.title.split('&')[0].trim()}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Solution Details */}
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className={`bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl shadow-${activeSolutionData.color}-900/10`}>
              <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">
                {/* Left Column - Overview */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className={`inline-flex items-center space-x-2 bg-${activeSolutionData.color}-500/20 px-4 py-2 rounded-full mb-4`}>
                        <div className={`text-${activeSolutionData.color}-400`}>
                          {activeSolutionData.icon}
                        </div>
                        <span className="font-medium text-gray-300">{activeSolutionData.title}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{activeSolutionData.title}</h3>
                      <p className="text-gray-400 text-lg mb-8">{activeSolutionData.description}</p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="mb-12">
                    <h4 className="text-xl font-semibold mb-6 text-gray-300">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeSolutionData.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-${activeSolutionData.color}-500/20 flex items-center justify-center`}>
                            <BiCheckCircle className={`w-5 h-5 text-${activeSolutionData.color}-400`} />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Stats & CTA */}
                <div className="space-y-8">
                  {/* Stats Card */}
                  <div className={`bg-gradient-to-br from-${activeSolutionData.color}-900/20 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-${activeSolutionData.color}-700/30`}>
                    <h4 className="text-xl font-semibold mb-6 text-center text-gray-300">Impact Metrics</h4>
                    <div className="space-y-6">
                      {activeSolutionData.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className={`text-3xl font-bold mb-2 text-${activeSolutionData.color}-300`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-xl font-semibold mb-4 text-gray-300">Get Started</h4>
                    <p className="text-gray-400 text-sm mb-6">
                      Ready to implement this solution for your business?
                    </p>
                    <Link to="/contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r from-${activeSolutionData.color}-500 to-${activeSolutionData.color}-600 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-${activeSolutionData.color}-500/25 transition-all px-5 duration-300`}
                    >
                      Request Proposal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section ref={industriesRef} className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={industriesControls}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry-Specific <span className="text-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored research solutions for your industry's unique challenges and opportunities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={industriesControls}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 h-full"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10">
                      <div className="text-purple-400">{industry.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-200">{industry.industry}</h3>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-gray-400">{solution}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* <div className="pt-6 border-t border-gray-800/50">
                    <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                      <span className="text-sm font-medium">View Industry Report</span>
                      <BiChevronRight className="w-5 h-5" />
                    </button>
                  </div> */}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

   

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={ctaControls}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-12 text-center shadow-2xl shadow-blue-900/20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solve</span> Your Business Challenges?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Get actionable insights that drive business growth. Our research experts are ready to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 60px -15px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 px-15 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all flex-1 sm:flex-none"
                >
                  Schedule a Consultation
                </Link>
               
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
};

export default Solutions;