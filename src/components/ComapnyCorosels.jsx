import React from 'react'
import { useRef } from "react";
import Slider from "react-slick";
import {
  FaQuoteRight,
  FaStar,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import serusuiLogo from "../assets/companys/svg-image-3.png";
import illuminasLogo from "../assets/companys/svg-image-4.png";
import takeshopeLogo from "../assets/companys/svg-image-5.png";
import rtiLogo from "../assets/companys/svg-image-6.png";
import radiusLogo from "../assets/companys/svg-image-8.png";
import quantilopeLogo from "../assets/companys/svg-image-9.png";
import dynataLogo from "../assets/companys/svg-image-10.png";


const ComapnyCorosels = () => {
      const sliderRef = useRef(null);
    
      // Partner logos data
      const partners = [
        {
          name: "Serus",
          logo: serusuiLogo,
          url: "https://www.serus.com", // official Serus research platform
        },
        {
          name: "Illuminas",
          logo: illuminasLogo,
          url: "https://www.illuminas.com",
        },
        {
          name: "TakeScope",
          logo: takeshopeLogo,
          url: "https://www.takescope.com",
        },
        {
          name: "RTi Research",
          logo: rtiLogo,
          url: "https://www.rtiresearch.com",
        },
        {
          name: "Radius",
          logo: radiusLogo,
          url: "https://www.radiusglobal.com",
        },
        {
          name: "Quantilope",
          logo: quantilopeLogo,
          url: "https://www.quantilope.com",
        },
        {
          name: "Dynata",
          logo: dynataLogo,
          url: "https://www.dynata.com",
        },
        // {
        //   name: "Kantar",
        //   // logo: kantarLogo,
        //   url: "https://www.kantar.com",
        // },
      ];
    
      // Testimonial data
      const testimonials = [
        {
          name: "Senior Analyst",
          position: "Research Services",
          company: "Global Market Research Firm",
          rating: 5,
          content:
            "Working with QuantifyAI has been an incredibly smooth process as each member of the team goes above and beyond to help make our projects successful. They have been instrumental in helping us reach tricky demographics that others would struggle to obtain and are proactive in taking steps to limit the number of fraudulent survey takers in their panels!",
          verified: true,
        },
        {
          name: "Director of Insights",
          position: "Consumer Research",
          company: "Fortune 500 Retail Company",
          rating: 5,
          content:
            "QuantifyAI's data quality is exceptional. Their verification process ensures we get genuine responses from hard-to-reach audiences. The turnaround time and customer service are unmatched in the industry.",
          verified: true,
        },
        {
          name: "Research Manager",
          position: "Product Development",
          company: "Leading Tech Company",
          rating: 5,
          content:
            "The OpinionElite panel has been a game-changer for our international studies. The global coverage and quality control measures give us confidence in our data across all markets.",
          verified: true,
        },
      ];
    
      // Slider settings for partner logos
    const desktopSliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 1,
      pauseOnHover: true,
    
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 4 } },
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
      ],
    };
    
    
    // MOBILE SLIDER SETTINGS (1 image only)
    const mobileSliderSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    
    
    
      // Navigation handlers
      const nextSlide = () => {
        sliderRef.current.slickNext();
      };
    
      const prevSlide = () => {
        sliderRef.current.slickPrev();
      };
    
  return (
    <div className='container mx-auto px-6'>
         {/* Partner Logos Carousel */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="md:text-4xl text-2xl font-bold  text-blue-400  px-4 py-2 rounded-full">

                Trusted By Industry Leaders
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 group"
                  aria-label="Previous logos"
                >
                  <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 group"
                  aria-label="Next logos"
                >
                  <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

            {/* DESKTOP SLIDER */}
<div className="hidden md:block">
  <Slider ref={sliderRef} {...desktopSliderSettings}>
    {partners.map((partner) => (
      <div key={partner.name} className="px-4 py-6">
        <a href={partner.url} target="_blank" rel="noopener noreferrer">
          <div className="glass-card rounded-xl p-4 hover:scale-105 transition">
            <div className="flex justify-center h-24">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 mt-8 object-contain"
              />
            </div>
          </div>
        </a>
      </div>
    ))}
  </Slider>
</div>
{/* MOBILE SLIDER */}
<div className="block md:hidden">
  <Slider {...mobileSliderSettings}>
    {partners.map((partner) => (
      <div key={partner.name} className="px-6 py-8">
        <a href={partner.url} target="_blank" rel="noopener noreferrer">
          <div className="glass-card rounded-xl p-6">
            <div className="flex justify-center h-24">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full mt-5 object-contain mx-auto"
              />
            </div>
          </div>
        </a>
      </div>
    ))}
  </Slider>
</div>

            </div>
          </div>
    </div>
  )
}

export default ComapnyCorosels