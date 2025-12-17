"use client";
import React from "react";
import Header from "./Components/Header";
import OpeningModal from "./Components/OpeningModal";
import Hero from "./PageComponents/Hero";
import ProjectsGrid from "./PageComponents/Projects";
import Services from "./PageComponents/Services";

const page = () => {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Hero />
        <Services />
        <ProjectsGrid />

        <section className="w-full max-w-3xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Questions & Answers
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What services do you offer?",
                a: "I offer web design, UI/UX design, branding, and modern web development using Framer, React, and Tailwind.",
              },
              {
                q: "How do we start working together?",
                a: "Just reach out with your project idea. I’ll review it and respond with next steps, timeline, and pricing.",
              },
              {
                q: "What tools do you use?",
                a: "I mainly use Figma for design and Framer, React, and Tailwind CSS for development.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="
          group
          bg-gray-800
          rounded-2xl
          p-6
          transition-all
          duration-500
          ease-[cubic-bezier(.34,1.56,.64,1)]
          hover:-translate-y-1
          hover:shadow-2xl
          open:shadow-2xl
        "
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-white">
                  {item.q}
                  <span
                    className="
              text-2xl font-bold
              transition-all
              duration-500
              ease-[cubic-bezier(.34,1.56,.64,1)]
              group-open:rotate-45
              group-open:scale-110
            "
                  >
                    +
                  </span>
                </summary>

                <div
                  className="
            overflow-hidden
            transition-all
            duration-500
            ease-[cubic-bezier(.34,1.56,.64,1)]
            opacity-0
            scale-95
            max-h-0
            group-open:opacity-100
            group-open:scale-100
            group-open:max-h-40
          "
                >
                  <p className="mt-4 text-white/80 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <OpeningModal />
    </>
  );
};

export default page;
