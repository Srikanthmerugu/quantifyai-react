import { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaGlobe, 
  FaMapMarkerAlt, 
  FaClock,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import { FiSend, FiUser, FiMail, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    'Quantitative Research',
    'AI Analytics',
    'Market Intelligence',
    'Data Consulting',
    'Panel Management',
    'Custom Solutions'
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+1 (858) 692-1325'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['RFQ@QUANTIFYAI.COM'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Headquarters',
      details: ['  QuantifyAI, LLC 3200 Paseo Village Way #2337 San Diego, CA 92130 USA",'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: ['Mon-Fri: 9AM-6PM PST', '24/7 Emergency Support'],
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, label: 'LinkedIn', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: <FaTwitter />, label: 'Twitter', color: 'bg-sky-500 hover:bg-sky-600' },
    { icon: <FaFacebookF />, label: 'Facebook', color: 'bg-blue-800 hover:bg-blue-900' },
    { icon: <FaInstagram />, label: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700' }
  ];

  const globalOffices = [
    { location: 'San Diego, USA', timezone: 'PST', phone: '+1 (858) 692-1325' },
    { location: 'London, UK', timezone: 'GMT', phone: '+44 20 7123 4567' },
    { location: 'Singapore', timezone: 'SGT', phone: '+65 6123 4567' },
    { location: 'Sydney, AUS', timezone: 'AEST', phone: '+61 2 8123 4567' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    setSelectedService('');

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div id="contact" className="relative z-10 py-30 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 gradient-bg rounded-full mb-6 shadow-xl">
            <span className="text-white font-semibold">GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="gradient-text">QuantifyAI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your data insights? Our team is here to help you achieve breakthrough results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <span className="text-white text-2xl">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Offices */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Global Offices</h3>
              <div className="space-y-4">
                {globalOffices.map((office, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div>
                      <p className="font-semibold text-white">{office.location}</p>
                      <p className="text-sm text-gray-400">{office.timezone}</p>
                    </div>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

        
          </div>

          {/* Middle Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="gradient-border p-1 rounded-3xl shadow-2xl">
              <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <FaCheckCircle className="text-white text-4xl" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-xl text-gray-300 mb-8">
                      Thank you for contacting QuantifyAI. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-8 py-3 rounded-xl glass-card text-white font-semibold hover:shadow-xl transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
                    <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Personal Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center text-gray-300 mb-2">
                            <FiUser className="mr-2 text-blue-400" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl glass-card border border-gray-700 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center text-gray-300 mb-2">
                            <FiMail className="mr-2 text-blue-400" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl glass-card border border-gray-700 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center text-gray-300 mb-2">
                            <FiBriefcase className="mr-2 text-blue-400" />
                            Company *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl glass-card border border-gray-700 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Your Company"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center text-gray-300 mb-2">
                            <FaPhone className="mr-2 text-blue-400" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl glass-card border border-gray-700 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-4">
                        <label className="flex items-center text-gray-300 mb-2">
                          <FaPaperPlane className="mr-2 text-blue-400" />
                          Service Interested In *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceSelect(service)}
                              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                selectedService === service
                                  ? 'gradient-bg text-white shadow-lg'
                                  : 'glass-card text-gray-300 hover:text-white hover:shadow-lg'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="flex items-center text-gray-300 mb-2">
                          <FiMessageSquare className="mr-2 text-blue-400" />
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-5 py-4 rounded-xl glass-card border border-gray-700 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Tell us about your project and how we can help..."
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 rounded-xl gradient-bg text-white font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 glow-effect flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="text-xl" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-gray-400">Support Available</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2h</div>
                <p className="text-gray-400">Average Response Time</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What types of projects do you typically work on?",
                answer: "We specialize in quantitative research, AI analytics, market intelligence, and data consulting for enterprises across finance, healthcare, tech, and retail sectors."
              },
              {
                question: "How quickly can you start a new project?",
                answer: "Typically within 48 hours of contract signing. For urgent projects, we offer expedited onboarding starting same day."
              },
              {
                question: "What is your data security protocol?",
                answer: "We implement bank-level encryption, SOC2 compliance, GDPR adherence, and regular security audits to ensure complete data protection."
              },
              {
                question: "Do you offer customized solutions?",
                answer: "Yes, we provide fully customized AI and data solutions tailored to your specific business needs and objectives."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="gradient-border p-1 rounded-3xl max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Schedule a free consultation with our experts to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="px-10 py-4 rounded-xl gradient-bg text-white font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 glow-effect flex items-center justify-center space-x-3">
                  <FaPhone className="text-xl" />
                  <span>Contact US</span>
                </Link>
                <button className="px-10 py-4 rounded-xl glass-card text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                  <FaEnvelope className="text-xl" />
                  <span>Email Us Directly</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;