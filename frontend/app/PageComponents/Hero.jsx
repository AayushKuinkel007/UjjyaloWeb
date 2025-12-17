"use client";

import { ArrowRight } from "phosphor-react";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const Works = [
    { title: "Web Design" },
    { title: "Web Development" },
    { title: "App Design" },
    { title: "App Development" },
    { title: "Ghost Writing" },
  ];

  const [scrollDir, setScrollDir] = useState("right");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // duplicate for seamless loop
  const duplicatedWorks = [...Works, ...Works];

  return (
    <>
      <section id="home" className="mt-7 overflow-hidden">

        {/* Limited Seats */}
        <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 muted border border-[#454443] text-white px-4 py-2 rounded-full font-medium shadow-md">
          {/* Orange dot */}
          <span className="w-3 h-3 bg-[#f48c25] rounded-full animate-pulse"></span>
          {/* Text */}
          <span>Holiday Offer !</span>
        </div>
        </div>

        {/* Heading */}
        <div className="mb-15">
          <h1 className="text-[60px] font-bold text-center">
            Bringing Your Brand Into Light
          </h1>
          <h2 className="text-[42px] font-bold text-center mb-9">
            Through Web & App Design That Performs.
          </h2>

          <p className="text-center text-[19px] font-regular">
            We design and develop high-performance websites and applications
            that cut through the noise, <br />
            convert users, and help businesses grow — from idea to launch.
          </p>
        </div>

        {/* Hero CTA */}
        <div className="flex justify-center gap-5 mb-10">
<button className="relative flex items-center gap-2 p-3 rounded-xl text-white bg-[#f48c25]
  shadow-[0_0_20px_#f48c25] hover:shadow-[0_0_40px_#f48c25] transition-shadow duration-500">
  Illuminate My Project
  <ArrowRight size={22} weight="bold" />
</button>

          <button className="p-3 rounded-xl text-white bg-[#454443]">
            View Our Work
          </button>
        </div>

        {/* 🔥 Flowing Menu (REFERENCE-BASED) */}
        <div className="relative overflow-hidden py-4 w-full sm:w-[95%] md:w-[45%] lg:w-[40%] mx-auto mb-8">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />

          <ul
            className={`
              flex gap-10 whitespace-nowrap
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
                className="list-disc text-[15px] font-medium flex-shrink-0"
              >
                {work.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback */}
        <div className="flex justify-center w-full gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-[40px] font-bold">5+</h1>
            <p>Successful Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[40px] font-bold">24hr</h1>
            <p>Response Guarantee</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[40px] font-bold">90%</h1>
            <p>Client Satisfaction</p>
          </div>
        </div>

        {/* Inline animations – pure Tailwind style */}
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
