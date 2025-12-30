import { useEffect, useRef, useState } from "react";
import {
  FaPlayCircle,
  FaChartLine,
  FaBolt,
  FaInfoCircle,
} from "react-icons/fa";
import { GiPlatform } from "react-icons/gi";
import { Link } from "react-router-dom";

const Hero = () => {
  const canvasRef = useRef(null);
  const [counters, setCounters] = useState({
    global: 0,
    participants: 0,
    quality: 0,
  });

  useEffect(() => {
    const animateCounter = (key, end, duration = 2000) => {
      let start = 0;
      const steps = 60;
      const increment = end / steps;
      const interval = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(start),
        }));

        if (start >= end) {
          setCounters((prev) => ({
            ...prev,
            [key]: end,
          }));
          clearInterval(timer);
        }
      }, interval);
    };

    animateCounter("global", 48);
    setTimeout(() => animateCounter("participants", 500), 300);
    setTimeout(() => animateCounter("quality", 99), 600);
  }, []);

  useEffect(() => {
    // Create chart
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw gradient line chart
    const data = [30, 45, 25, 60, 40, 70, 50, 80, 65, 90, 75, 85];
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const segmentWidth = chartWidth / (data.length - 1);

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(0, 102, 255, 0.8)");
    gradient.addColorStop(1, "rgba(0, 212, 170, 0.2)");

    // Draw line
    ctx.beginPath();
    ctx.moveTo(
      padding,
      canvas.height - padding - (data[0] / 100) * chartHeight
    );

    for (let i = 1; i < data.length; i++) {
      const x = padding + i * segmentWidth;
      const y = canvas.height - padding - (data[i] / 100) * chartHeight;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw area under line
    ctx.lineTo(
      padding + (data.length - 1) * segmentWidth,
      canvas.height - padding
    );
    ctx.lineTo(padding, canvas.height - padding);
    ctx.closePath();

    const areaGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    areaGradient.addColorStop(0, "rgba(0, 102, 255, 0.3)");
    areaGradient.addColorStop(1, "rgba(0, 212, 170, 0.1)");

    ctx.fillStyle = areaGradient;
    ctx.fill();

    // Draw data points
    ctx.fillStyle = "white";
    for (let i = 0; i < data.length; i += 2) {
      const x = padding + i * segmentWidth;
      const y = canvas.height - padding - (data[i] / 100) * chartHeight;

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Glow effect
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 102, 255, 0.3)";
      ctx.fill();
    }
  }, []);

  return (
    <section id="home" className="relative z-10 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-3 rounded-full glass-card mb-8 backdrop-blur-sm">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 mr-3 animate-pulse-glow"></div>
              <span className="text-sm font-semibold gradient-text">
                QUANTITY/AI RESEARCH SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-white">DATA</span>
              <span className="gradient-text animate-typing block">
                REDEFINED.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Your insight, our expertise. QuantifyAI empowers quantitative
              researchers with advanced, AI-driven market research tools that
              deliver precise, actionable insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl gradient-bg text-white font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 glow-effect group relative overflow-hidden"
              >
                <span className="relative z-10  flex items-center justify-center">Request Info </span>
                <div className="absolute inset-0 animate-gradient-flow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                to="/platform"
                className="px-8 py-4 rounded-xl glass-card text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <GiPlatform  className="mr-3 text-blue-400" />
                  Our Platform
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {counters.global}
                </div>
                <p className="text-gray-400 text-sm">Global Markets</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {counters.participants}K+
                </div>
                <p className="text-gray-400 text-sm">Participants</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {counters.quality}%
                </div>
                <p className="text-gray-400 text-sm">Data Quality</p>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Dashboard */}
          <div className="relative animate-slide-in-right w-full">
            {/* Main Dashboard Card */}
            <div className="gradient-border p-1 rounded-3xl shadow-2xl">
              <div className="bg-gray-900 rounded-3xl p-5 sm:p-6 md:p-8 overflow-hidden relative">
                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-xl">
                      <FaChartLine className="text-white text-xl md:text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Opinion Elite
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm">
                        AI-Verified Dashboard
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-xs md:text-sm text-gray-300">
                      09:41
                    </div>
                    <div className="inline-flex items-center text-green-400 text-xs">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse-glow"></div>
                      Live Data Stream
                    </div>
                  </div>
                </div>

                {/* Animated Chart */}
                <div className="relative h-40 sm:h-44 md:h-48 mb-6 md:mb-8">
                  <canvas ref={canvasRef} className="w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center animate-bounce">
                      <div className="text-2xl md:text-3xl font-bold gradient-text">
                        +4.1%
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        Alpha Opportunities
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="glass-card p-4 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-xs md:text-sm">
                        Response Rate
                      </span>
                      <span className="text-green-400 font-bold text-sm md:text-base">
                        94%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full animate-shimmer"
                        style={{ width: "94%" }}
                      />
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-xs md:text-sm">
                        Data Quality
                      </span>
                      <span className="text-blue-400 font-bold text-sm md:text-base">
                        98%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full animate-shimmer"
                        style={{ width: "98%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="block w-full mt-6 md:mt-8 px-6 sm:px-8 md:px-10 py-3 md:py-4
                   rounded-xl gradient-bg text-white text-sm md:text-base
                   font-semibold shadow-xl hover:shadow-2xl hover:scale-105
                   transition-all duration-300 glow-effect text-center"
                >
                  <FaInfoCircle className="inline mr-2" />
                  REQUEST INFO
                </Link>
              </div>
            </div>

            {/* Floating Cards (Tablet + Desktop only) */}
            <div
              className="absolute hidden md:block -top-4 -right-6 w-64 lg:w-72
                  glass-card p-5 lg:p-6 rounded-2xl shadow-2xl animate-float"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-white text-sm lg:text-base">
                  Global Insights
                </h4>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 animate-pulse-glow"></div>
              </div>
              <p className="text-gray-400 text-xs lg:text-sm mb-4">
                Real-time data from 48 markets
              </p>
              <div className="text-2xl lg:text-3xl font-bold gradient-text">
                1.2GB/s
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
