"use client";

import { ArrowRight } from "phosphor-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const Works = [
    { title: "Web UI/UX Design" },
    { title: "Custom Web Development" },
    { title: "Responsive Web Design" },
    { title: "Website Redesign & Optimization" },
    { title: "Page Design & Development" },
    { title: "Website Performance and SEO" },
  ];

  const [scrollDir, setScrollDir] = useState("right");
  const router = useRouter();

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToContact = () => {
    router.push('/contact');
  };

  const duplicatedWorks = [...Works, ...Works];

  return (
    <>
      <section id="home" className="mt-4 sm:mt-5 md:mt-7 mb-6 sm:mb-8 md:mb-10 overflow-hidden px-4">
        {/* Limited Seats */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 muted border border-[#454443] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-md">
            {/* Orange dot */}
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#f48c25] rounded-full animate-pulse"></span>
            {/* Text */}
            <span>Holiday Offer !</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 sm:mb-10 md:mb-15">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-center leading-tight px-2">
            Bringing Your Brand Into Light
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-center mb-6 sm:mb-7 md:mb-9 leading-tight px-2">
            Through Web & App Design That Performs.
          </h2>

          <p className="text-center text-sm sm:text-base md:text-lg lg:text-[19px] font-regular px-4 max-w-4xl mx-auto leading-relaxed">
            We design and develop high-performance websites and applications
            that cut through the noise, convert users, and help businesses grow — from idea to launch.
          </p>
        </div>

        {/* Hero CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mb-6 sm:mb-8 md:mb-10 px-4">
          <button
            onClick={navigateToContact}
            className="relative flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base md:text-lg font-medium text-black bg-[#f48c25] hover:shadow-[0_0_20px_#f48c25] hover:scale-105 duration-500 w-full sm:w-auto"
          >
            Illuminate My Project
            <ArrowRight size={20} weight="bold" className="sm:w-[22px] sm:h-[22px]" />
          </button>

          <button 
            onClick={scrollToProjects}
            className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base md:text-lg font-medium text-white bg-[#454443] hover:shadow-[0_0_30px_#454443] duration-500 w-full sm:w-auto"
          >
            View Our Work
          </button>
        </div>

        {/* Flowing Menu */}
        <div className="relative overflow-hidden py-3 sm:py-4 w-full sm:w-[95%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto mb-6 sm:mb-8">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-8 md:w-10 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-8 md:w-10 bg-gradient-to-l from-black to-transparent z-10" />

          <ul
            className={`
              flex gap-6 sm:gap-8 md:gap-10 whitespace-nowrap
              ${
                scrollDir === "left"
                  ? "animate-[marquee-left_14s_linear_infinite]"
                  : "animate-[marquee-right_14s_linear_infinite]"
              }
            `}
          >
            {duplicatedWorks.map((work, index) => (
              <li
                key={index}
                className="list-disc text-xs sm:text-sm md:text-[15px] font-medium flex-shrink-0"
              >
                {work.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback */}
        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-6 sm:gap-8 md:gap-10 px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold">5+</h1>
            <p className="text-xs sm:text-sm md:text-base text-center">Successful Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold">24hr</h1>
            <p className="text-xs sm:text-sm md:text-base text-center">Response Guarantee</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold">90%</h1>
            <p className="text-xs sm:text-sm md:text-base text-center">Client Satisfaction</p>
          </div>
        </div>

        {/* Inline animations */}
        <style jsx>{`
          @keyframes marquee-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marquee-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;