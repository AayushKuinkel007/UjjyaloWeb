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
      <section id="home" className="h-[100vh] mt-10 overflow-hidden">
        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-[60px] font-bold text-center mb-2">
            Bringing Your Brand Into Light
          </h1>
          <h2 className="text-[42px] font-semibold text-center mb-5">
            Through Web & App Design That Performs.
          </h2>

          <p className="text-center text-[19px]">
            We design and develop high-performance websites and applications
            that cut through the noise, <br />
            convert users, and help businesses grow — from idea to launch.
          </p>
        </div>

        {/* Hero CTA */}
        <div className="flex justify-center gap-5 mb-8">
          <button className="flex items-center gap-2 p-3 rounded-xl text-white bg-[#fa8938]">
            Illuminate My Project
            <ArrowRight size={22} weight="bold" />
          </button>
          <button className="p-3 rounded-xl text-white bg-[#454443] border border-white">
            View Our Work
          </button>
        </div>

        {/* 🔥 Flowing Menu (REFERENCE-BASED) */}
        <div className="relative overflow-hidden py-4 w-full sm:w-[95%] md:w-[45%] lg:w-[40%] mx-auto">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white/10 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white/10 to-transparent z-10" />

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
