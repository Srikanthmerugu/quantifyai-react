import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  BiChevronRight, BiCheckCircle, BiTrendingUp, BiBarChartAlt2, 
  BiUser, BiBriefcase, BiGlobe, BiShield, BiAward, BiStar,
  BiChart, BiCalendarCheck, BiMedal, BiRocket, BiTargetLock,
  BiLineChart, BiPieChartAlt2, BiData, BiUserVoice
} from 'react-icons/bi';
import { 
  FaUsers, FaIndustry, FaChartLine, FaRegHandshake,
  FaQuoteLeft, FaQuoteRight, FaLinkedin, FaTwitter,
  FaAward, FaTrophy, FaCertificate, FaRegSmile
} from 'react-icons/fa';
import { 
  MdOutlineGroups, MdOutlineBusinessCenter, MdLocationOn,
  MdOutlineVerifiedUser, MdOutlineCelebration, MdPeople
} from 'react-icons/md';
import Team from '../components/Team';
import { Link } from 'react-router-dom';

// Custom animation hook
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

// Animation variants
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

const Company = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  const clientsRef = useRef(null);
  const missionRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const heroControls = useScrollAnimation(heroRef);
  const statsControls = useScrollAnimation(statsRef);
  const teamControls = useScrollAnimation(teamRef);
  const clientsControls = useScrollAnimation(clientsRef);
  const missionControls = useScrollAnimation(missionRef);
  const ctaControls = useScrollAnimation(ctaRef);

  // Company stats data
  const companyStats = [
    {
      icon: <BiChart className="w-8 h-8" />,
      value: "10M+",
      label: "Survey Completes",
      description: "Accurate responses collected globally",
      color: "blue",
      delay: 0.1
    },
    {
      icon: <BiGlobe className="w-8 h-8" />,
      value: "50+",
      label: "Countries",
      description: "Global reach across continents",
      color: "green",
      delay: 0.2
    },
    {
      icon: <MdOutlineGroups className="w-8 h-8" />,
      value: "1M+",
      label: "Panelists",
      description: "Verified and engaged respondents",
      color: "cyan",
      delay: 0.3
    },
    {
      icon: <BiBriefcase className="w-8 h-8" />,
      value: "500+",
      label: "Clients",
      description: "Trusted by leading companies",
      color: "orange",
      delay: 0.4
    },
    {
      icon: <BiAward className="w-8 h-8" />,
      value: "10+",
      label: "Years Experience",
      description: "Industry expertise and knowledge",
      color: "pink",
      delay: 0.5
    },
    {
      icon: <BiBarChartAlt2 className="w-8 h-8" />,
      value: "95%",
      label: "Client Retention",
      description: "Consistent satisfaction rate",
      color: "cyan",
      delay: 0.6
    }
  ];

  // Leadership team data
  const leadershipTeam = [
    {
      name: "Alexandra Chen",
      title: "CEO & Founder",
      bio: "Former McKinsey partner with 15+ years in market research. Founded QuantifyAI to revolutionize data quality standards.",
      expertise: ["Market Research", "Data Strategy", "Business Growth"],
      linkedin: "#",
      imageColor: "from-blue-400 to-cyan-400"
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Technology Officer",
      bio: "Ex-Google AI engineer specializing in machine learning and fraud detection systems. Leads our AI-powered verification platform.",
      expertise: ["AI/ML", "Fraud Detection", "Platform Architecture"],
      linkedin: "#",
      imageColor: "from-cyan-400 to-pink-400"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Research Officer",
      bio: "PhD in Behavioral Science with 12+ years leading research teams at Nielsen and Ipsos. Ensures methodological rigor.",
      expertise: ["Methodology", "Behavioral Science", "Quality Control"],
      linkedin: "#",
      imageColor: "from-green-400 to-emerald-400"
    },
    {
      name: "David Kim",
      title: "Head of Global Operations",
      bio: "Former operations director at Kantar with expertise in scaling research operations across 30+ countries.",
      expertise: ["Global Operations", "Panel Management", "Client Services"],
      linkedin: "#",
      imageColor: "from-orange-400 to-red-400"
    },
    {
      name: "Priya Patel",
      title: "VP of Client Success",
      bio: "12 years in client relations at Gartner and Forrester. Focused on delivering exceptional value and insights.",
      expertise: ["Client Relations", "Insight Delivery", "Strategic Consulting"],
      linkedin: "#",
      imageColor: "from-indigo-400 to-blue-400"
    },
    {
      name: "James Wilson",
      title: "Head of Data Science",
      bio: "Data scientist with experience at Facebook and Amazon. Leads our analytics and insights generation team.",
      expertise: ["Data Analytics", "Predictive Modeling", "Statistical Analysis"],
      linkedin: "#",
      imageColor: "from-cyan-400 to-teal-400"
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: "QuantifyAI transformed how we approach market research. Their data quality and insights have been instrumental in our product launch decisions.",
      author: "Jennifer Lee",
      position: "VP of Product, TechCorp Inc.",
      company: "Fortune 500 Technology Company",
      rating: 5
    },
    {
      quote: "The OpinionElite panel delivers unparalleled respondent quality. We've seen a 40% improvement in data reliability compared to previous providers.",
      author: "Michael Torres",
      position: "Director of Consumer Insights",
      company: "Global Consumer Goods Brand",
      rating: 5
    },
    {
      quote: "Working with QuantifyAI feels like an extension of our own team. Their strategic guidance has directly impacted our go-to-market strategy.",
      author: "Sophia Williams",
      position: "CMO",
      company: "High-Growth SaaS Startup",
      rating: 5
    }
  ];

  // Company timeline/milestones
  const milestones = [
    { year: "2015", event: "Company Founded", description: "QuantifyAI established with focus on data quality" },
    { year: "2017", event: "OpinionElite Launch", description: "Proprietary panel platform launched" },
    { year: "2019", event: "Global Expansion", description: "Expanded operations to 20+ countries" },
    { year: "2020", event: "AI Verification System", description: "Implemented AI-powered fraud detection" },
    { year: "2022", event: "Major Funding Round", description: "Secured Series B funding for growth" },
    { year: "2023", event: "Industry Awards", description: "Recognized as top market research provider" },
    { year: "2024", event: "Platform 3.0 Launch", description: "Next-gen research platform introduced" }
  ];

  // Trusted by logos (placeholder)
  const trustedLogos = [
    { name: "Fortune 500 Tech", color: "from-blue-500 to-cyan-500" },
    { name: "Global Pharma", color: "from-cyan-500 to-pink-500" },
    { name: "Top Retailer", color: "from-green-500 to-emerald-500" },
    { name: "Leading Bank", color: "from-orange-500 to-red-500" },
    { name: "Media Giant", color: "from-indigo-500 to-blue-500" },
    { name: "Auto Leader", color: "from-cyan-500 to-teal-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white">
   

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
              <MdOutlineBusinessCenter className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">About Our Company</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Redefining Data
              </span>
              <br />
              <span className="text-2xl sm:text-4xl md:text-5xl text-gray-300">Through Innovation & Expertise</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We uphold the highest standards of data quality and reliable insights derived from a diverse and global participant base.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all"
              >
                Meet Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-blue-500/50 hover:bg-gray-800/50 transition-all"
              >
                View Careers
              </motion.button>
            </div> */}
          </motion.div>
        </div>
      </section>


      {/* Mission & Approach */}
      <section ref={missionRef} className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={missionControls}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 sm:p-12 shadow-2xl shadow-blue-900/20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="text-cyan-400">Approach</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  How we deliver exceptional value to our clients
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <MdOutlineVerifiedUser className="w-8 h-8" />,
                    title: "Quality First",
                    description: "We uphold the highest standards of data quality with rigorous verification processes"
                  },
                  {
                    icon: <BiTargetLock className="w-8 h-8" />,
                    title: "Custom Solutions",
                    description: "Our services are fully customizable to your specific research needs"
                  },
                  {
                    icon: <MdPeople className="w-8 h-8" />,
                    title: "Expert Collaboration",
                    description: "Our team collaborates with you at every stage of the process"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/10 mb-6">
                      <div className="text-cyan-400">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-200">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-6 text-gray-200">Expertise That Matters</h3>
                <p className="text-lg text-gray-300 mb-6">
                  With a team of research experts averaging 10+ years of experience, we bring deep knowledge and strategic guidance to each project. 
                  Our approach combines cutting-edge technology with human expertise to deliver actionable insights.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Data Quality Focus", "Global Reach", "AI-Powered Verification", "Strategic Insights", "Client Collaboration", "Methodological Rigor"].map((skill, idx) => (
                    <div key={idx} className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/20">
                      <BiCheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

   

      {/* Trusted By */}
    <Team />

      {/* Testimonials */}
      <section ref={clientsRef} className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={clientsControls}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-orange-400">Testimonials</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from companies that trust us with their research needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={clientsControls}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 h-full p-6 sm:p-8">
                  <div className="mb-6">
                    <FaQuoteLeft className="w-8 h-8 text-orange-500/30 mb-4" />
                    <p className="text-gray-300 italic mb-6 line-clamp-4">{testimonial.quote}</p>
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <BiStar key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-800/50">
                    <div className="font-bold text-gray-200">{testimonial.author}</div>
                    <div className="text-sm text-orange-400 mb-1">{testimonial.position}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-pink-400">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Key milestones in our growth and innovation story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-pink-500"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                      <div className="text-pink-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <div className="text-gray-200 font-semibold mb-2">{milestone.event}</div>
                      <div className="text-gray-400 text-sm">{milestone.description}</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-gray-900"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={ctaControls}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 sm:p-12 text-center shadow-2xl shadow-blue-900/20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Join <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Mission</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Whether you're looking to partner with us or join our growing team, we'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 60px -15px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all"
                >
                  Contact Our Team
                </Link>
                 <Link to="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-blue-500/50 hover:bg-gray-800/50 transition-all"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

  
    </div>
  );
};

export default Company;