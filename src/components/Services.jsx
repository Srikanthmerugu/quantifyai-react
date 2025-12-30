import { FaGlobeAmericas, FaCheck, FaFacebookF, FaRobot, FaChartLine, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const features = [
    'Advanced Survey Programming',
    'Questionnaire Development',
    'Real-time Data Analytics'
  ];

  const qualitySteps = [
    {
      icon: <FaFacebookF />,
      title: 'Facebook + LinkedIn Verification',
      description: 'Recruitment and verification through social platforms for authentic respondents with profile validation.',
      color: 'bg-green-400'
    },
    {
      icon: <FaRobot />,
      title: 'Machine Learning System',
      description: 'AI-powered fraud detection and behavioral analysis with continuous learning algorithms.',
      color: 'bg-blue-400 animate-pulse-glow'
    },
    {
      icon: <FaChartLine />,
      title: 'Advanced Engagement',
      description: 'Prioritizing response rate and engagement over sheer panel size with gamified experiences.',
      color: 'bg-teal-400'
    }
  ];

  return (
    <section id="services" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced <span className="gradient-text">Research Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for quantitative research with global reach
            and AI-powered insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Global Panel Card */}
          <div className="gradient-border p-1 rounded-3xl animate-slide-in-left">
            <div className="bg-gray-900 rounded-3xl p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-xl">
                  <FaGlobeAmericas className="text-white text-3xl" />
                </div>
                <div className="ml-6">
                  <h3 className="text-3xl font-bold text-white">Global Panel</h3>
                  <p className="text-gray-400">Opinion Elite: B2C + B2B Panel</p>
                </div>
              </div>

              <p className="text-gray-300 mb-10 leading-relaxed">
                Our proprietary panel, Opinion Elite, boasts extensive coverage
                across continents, encompassing diverse demographics, cultures,
                and languages. From bustling urban centers to remote rural
                areas, we connect with participants worldwide.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="glass-card p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">48</div>
                  <p className="text-gray-400">Markets Covered</p>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">500K+</div>
                  <p className="text-gray-400">Active Participants</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center mr-4">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 rounded-xl gradient-bg text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-effect">
                Explore Panel Features
              </button>
            </div>
          </div>

          {/* Data Quality Focus */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-white mb-8">
              Data Quality Focus
            </h3>

            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
              Survey fraud is a constant presence in online research and an
              overwhelming burden to data collection. At QuantifyAI, we don't
              think it has to be, so we built Opinion Elite with an intense
              focus on panel health and high respondent quality.
            </p>

            {/* Data Quality Steps */}
            <div className="space-y-8">
              {qualitySteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-xl mr-6">
                      <span className="text-white text-2xl">{step.icon}</span>
                    </div>
                    <div className="absolute -bottom-2  w-8 h-8 rounded-full bg-gray-900 border-4 border-gray-900 flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full ${step.color}`}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;