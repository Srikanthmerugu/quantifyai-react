// components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import logo from "./../assets/logo4.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Add your subscription logic here
      console.log("Subscribed with email:", email);
      setSubscribed(true);
      setEmail("");

      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const services = [
    {
      name: "Questionnaire Development",
      path: "/services/questionnaire-development",
    },
    { name: "Survey Programming", path: "/services/survey-programming" },
    {
      name: "Fielding & Data Collection",
      path: "/services/fielding-data-collection",
    },
    { name: "Data Processing & Analysis", path: "/services/data-analysis" },
  ];

  const quickLinks = [
    { name: "Platform", path: "/platform" },
    { name: "Solutions", path: "/solutions" },
    { name: "Our Approach", path: "/approach" },
    { name: "Company", path: "/company" },
    { name: "Contact", path: "/contact" },
    // { name: 'Careers', path: '/careers' },
    // { name: 'Blog', path: '/blog' },
    // { name: 'Resources', path: '/resources' },
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      href: "https://linkedin.com/company/quantifyai",
      label: "LinkedIn",
    },
    {
      icon: <FiTwitter />,
      href: "https://twitter.com/quantifyai",
      label: "Twitter",
    },
    {
      icon: <FiFacebook />,
      href: "https://facebook.com/quantifyai",
      label: "Facebook",
    },
    {
      icon: <FiInstagram />,
      href: "https://instagram.com/quantifyai",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    {
      icon: <FiMail />,
      text: "rfq@quantifyai.co",
      href: "mailto:rfq@quantifyai.co",
    },
    { icon: <FiPhone />, text: "+1 858-692-1325", href: "tel:+1 8586921325" },
    {
      icon: <FiMapPin />,
      text: "      QuantifyAI, LLC 3200 Paseo Village Way #2337 San Diego, CA 92130 USA",

      href: "https://maps.google.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Brand & Newsletter */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} className="w-40" />

              {/* <div className="ml-3 flex items-center text-xs bg-gradient-to-r from-blue-500 to-teal-500 text-white px-2 py-1 rounded-full">
                <MdOutlineVerifiedUser className="mr-1" />
                Verified Partner
              </div> */}
            </div>

            <p className="text-gray-400 mb-8 max-w-sm">
              We're redefining industry standards with an intense focus on data
              quality through our proprietary OpinionElite panel and AI-powered
              analytics solutions.
            </p>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Services Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Services
                </span>
                {/* <div className="ml-2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400"></div> */}
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name} className="group">
                    <Link
                      to={service.path}
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                    >
                      {/* <FiChevronRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                      {service.name}
                      {/* <FiArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm" /> */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Quick Links
                </span>
                {/* <div className="ml-2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400"></div> */}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name} className="group">
                    <Link
                      to={link.path}
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                    >
                      {/* <FiChevronRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                      {link.name}
                      <FiArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Contact Us
                </span>
                <div className="ml-2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400"></div>
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-start text-gray-400 hover:text-white transition-colors group"
                    >
                      <span className="mt-1 mr-3 text-blue-400 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </span>
                      <span className="group-hover:text-blue-400 transition-colors">
                        {info.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <FiArrowUpRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left */}
          <div className="text-gray-500 text-sm">
            © {currentYear} QuantifyAI. All rights reserved.
          </div>

          {/* Center - Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Right - Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center text-gray-400 text-sm">
              <MdOutlineVerifiedUser className="mr-2 text-green-400" />
              ISO 27001 Certified
            </div>
            <div className="hidden md:block text-gray-500">•</div>
            <div className="flex items-center text-gray-400 text-sm">
              <MdOutlineVerifiedUser className="mr-2 text-green-400" />
              GDPR Compliant
            </div>
            <div className="hidden md:block text-gray-500">•</div>
            <div className="flex items-center text-gray-400 text-sm">
              <MdOutlineVerifiedUser className="mr-2 text-green-400" />
              SOC 2 Type II
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
