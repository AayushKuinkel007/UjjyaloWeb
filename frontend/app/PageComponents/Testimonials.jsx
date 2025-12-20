"use client";
import React, { useState } from "react";
import logo from "../Assets/logo.png";
import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      description: "I am a Developer @ Ujjyalo Web",
      image: logo,
      name: "Aayush Kuinkel",
      designation: "Developer",
      social: "@ak_theboss69",
    },
    {
      description: "I am a Developer @ Ujjyalo Web",
      image: logo,
      name: "Susil Dhami",
      designation: "Developer",
      social: "@_susill",
    },
    {
      description: "I am Ujjyalo Web",
      image: logo,
      name: "Ujjyalo Web",
      designation: "Developer",
      social: "@ujjyaloweb",
    },
  ];

  const [scrollDir, setScrollDir] = useState("left");

  // Create more duplicates for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <>
      <section id="testimonials">
        <div className="flex justify-center">
          <span className="inline-block px-8 py-3 bg-[#1a1a1a]/40 border border-white/10 font-bold uppercase text-white text-xs rounded-full mt-7 mb-4">
            Testimonials
          </span>
        </div>
        <div className="text-center mb-5">
          <h2 className="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Illuminating Digital Experiences
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto">
            From concept to launch, UjjyaloWeb helps businesses transform ideas
            into high-performing digital products.
            <br />
            We combine strategy, design, and engineering to create experiences
            that are fast, scalable, and built for growth.
          </p>
        </div>
        <div className="relative overflow-hidden py-3 sm:py-4 w-full sm:w-[95%] md:w-[70%] lg:w-[50%] xl:w-[60%] mx-auto mb-6 sm:mb-8">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-8 md:w-10 bg-gradient-to-r from-black/20 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-8 md:w-10 bg-gradient-to-l from-black/20 to-transparent z-10" />
          
          <div className="flex gap-6 sm:gap-8 md:gap-10">
            <div
              className={`
                flex gap-6 sm:gap-8 md:gap-10 whitespace-nowrap
                ${
                  scrollDir === "left"
                    ? "animate-marquee-left"
                    : "animate-marquee-right"
                }
              `}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  className="border border-white/20 rounded-[20px] p-6 w-80 min-w-80"
                  key={index}
                >
                  <p className="text-white/90 text-sm mb-6 whitespace-normal leading-relaxed">
                    "{testimonial.description}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image.src}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-white/60 text-xs">
                        {testimonial.designation}
                      </p>
                      <Link
                        href={`https://instagram.com/${testimonial.social.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-xs hover:underline"
                      >
                        {testimonial.social}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate for seamless loop */}
            <div
              className={`
                flex gap-6 sm:gap-8 md:gap-10 whitespace-nowrap
                ${
                  scrollDir === "left"
                    ? "animate-marquee-left"
                    : "animate-marquee-right"
                }
              `}
              aria-hidden="true"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  className="border border-white/20 rounded-[20px] p-6 w-80 min-w-80"
                  key={`duplicate-${index}`}
                >
                  <p className="text-white/90 text-sm mb-6 whitespace-normal leading-relaxed">
                    "{testimonial.description}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image.src}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-white/60 text-xs">
                        {testimonial.designation}
                      </p>
                      <Link
                        href={`https://instagram.com/${testimonial.social.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-xs hover:underline"
                      >
                        {testimonial.social}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
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
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 50s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 50s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Testimonials;