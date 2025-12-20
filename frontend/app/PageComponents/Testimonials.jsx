"use client";
import React, { useState } from "react";
import logo from "../Assets/logo.png";
import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      description:
        "I am a Developer @ Ujjyalo Web",
      image: logo,
      name: "Aayush Kuinkel",
      designation:"Developer",
      social: "@ak_theboss69",
    },
    {
      description:
        "I am a Developer @ Ujjyalo Web",
      image: logo,
      name: "Aayush Kuinkel",
      designation:"Developer",
      social: "@ak_theboss69",
    },
        {
      description:
        "I am a Developer @ Ujjyalo Web",
      image: logo,
      name: "Aayush Kuinkel",
      designation:"Developer",
      social: "@ak_theboss69",
    },
        {
      description:
        "I am a Developer @ Ujjyalo Web",
      image: logo,
      name: "Aayush Kuinkel",
      designation:"Developer",
      social: "@ak_theboss69",
    },
        {
      description:
        "I am a Developer @ Ujjyalo Web",
      image: logo,
      name: "Aayush Kuinkel",
      designation:"Developer",
      social: "@ak_theboss69",
    },
        {
      description:
        "I am a Developer @ Ujjyalo Web",
      image: logo,
      name: "Aayush Kuinkel",
      designation:"Developer",
      social: "@ak_theboss69",
    },
  ];

  const [scrollDir, setScrollDir] = useState("left");

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <section id="testimonials">
        <div className="flex justify-center">
          <span className="inline-block px-8 py-3 bg-[#1a1a1a]/40 border border-white/10 font-bold uppercase text-white text-xs rounded-full mt-7 mb-4">
            Testimonials
          </span>
        </div>
        <div
          className={`
              flex gap-6 sm:gap-8 md:gap-10 whitespace-nowrap
              ${
                scrollDir === "left"
                  ? "animate-[marquee-left_20s_linear_infinite]"
                  : "animate-[marquee-right_20s_linear_infinite]"
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
                    href="https://www.instagram.com/ak_theboss69/"
                    target="_blank"
                  >
                    {testimonial.social}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
