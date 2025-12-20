"use client";
import React, { useState } from "react";
import { Plus, Minus } from "phosphor-react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What website design and development services do you offer?",
      a: "We provide end-to-end website design and website development services, including UI/UX design, custom web development, responsive layouts, performance optimization, and deployment.",
    },
    {
      q: "How long does it take to design and develop a website?",
      a: "Most standard websites take 2 to 4 weeks, while complex or custom web applications may take longer. We define clear milestones before starting.",
    },
    {
      q: "Do you build custom websites or use templates?",
      a: "We build 100% custom websites tailored to your brand, audience, and business goals.",
    },
    {
      q: "Are your websites mobile-friendly?",
      a: "Yes. All websites are fully responsive and mobile-first across all devices.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Yes. We modernize existing websites to improve UI, UX, performance, and SEO.",
    },
    {
      q: "Is SEO included?",
      a: "Yes. We follow SEO best practices including clean code, fast load times, and Core Web Vitals compliance.",
    },
    {
      q: "Will my website be fast and secure?",
      a: "Absolutely. Performance and security are top priorities in all our projects.",
    },
    {
      q: "Can I update content myself?",
      a: "Yes. We provide CMS or simple setups so you can manage content easily.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes. We provide ongoing maintenance, updates, and monitoring after launch.",
    },
    {
      q: "How do I get started?",
      a: "Simply contact us through our website and we'll guide you through the next steps.",
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-5 px-4">
      {/* Title */}
      <div className="flex justify-center">
        <span className="inline-block px-8 py-3 bg-[#1a1a1a]/40 border border-white/10 font-bold uppercase text-white text-xs rounded-full mb-4 mt-4">
          FAQ's
        </span>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              onClick={() => toggleFAQ(i)}
              className={`
                cursor-pointer
                bg-[#000000]/50
                border border-[#2a2a2a]
                rounded-2xl
                p-5 md:p-6 lg:p-7
                transition-all
                duration-300
                hover:border-[#f48c25]
                ${isOpen ? "border-[#f48c25]" : ""}
              `}
            >
              {/* Question */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-white pr-4 leading-tight">
                  {item.q}
                </h3>

                {/* Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFAQ(i);
                  }}
                  className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#f48c25] transition-colors duration-300 group"
                >
                  {isOpen ? (
                    <Minus
                      size={20}
                      weight="bold"
                      className="text-white group-hover:text-black transition-colors duration-300 md:w-6 md:h-6"
                    />
                  ) : (
                    <Plus
                      size={20}
                      weight="bold"
                      className="text-white group-hover:text-black transition-colors duration-300 md:w-6 md:h-6"
                    />
                  )}
                </button>
              </div>

              {/* Answer */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ease-in-out
                  ${
                    isOpen
                      ? "max-h-96 opacity-100 mt-4 md:mt-5"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
