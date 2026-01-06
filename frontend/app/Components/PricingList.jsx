"use client";
import React from "react";
import { CheckCircle } from "phosphor-react";
import { motion } from "framer-motion";
import Link from "next/link";

const pricingPlans = [
  {
    id: 1,
    title: "Starter",
    description: "Best for individuals & early-stage ideas",
    price: "NPR 10,000 - 15,000",
    buttonText: "Start with this budget",
    features: [
      "1–3 page website",
      "Clean, modern design",
      "Mobile responsive",
      "Contact form or WhatsApp button",
      "Basic SEO setup",
    ],
  },
  {
    id: 2,
    title: "Growth",
    description: "Best for small businesses",
    price: "NPR 15,000 - 35,000",
    buttonText: "Plan my website",
    features: [
      "4–6 pages",
      "Custom UI (no templates)",
      "Speed optimization",
      "SEO-friendly structure",
      "WhatsApp / lead form integration",
    ],
  },
  {
    id: 3,
    title: "Scale",
    description: "For serious products & startups",
    price: "NPR 35,000+",
    buttonText: "Discuss my project",
    features: [
      "Custom design system",
      "Advanced animations or interactions",
      "Backend or CMS (if needed)",
      "Performance + SEO optimization",
      "Post-launch support",
    ],
  },
];

const PricingList = ({ setPricingOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/70 backdrop-blur-sm px-3 sm:px-4">
      <motion.div
        className="
    relative bg-[#0c2342] text-white
    rounded-2xl
    p-5 sm:p-8 md:p-12
    max-w-6xl w-full
    max-h-[90vh]
    overflow-y-auto
    md:overflow-visible md:max-h-none
  "
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setPricingOpen(false)}
          className="
            absolute top-4 right-4 sm:top-6 sm:right-6
            w-8 h-8
            flex items-center justify-center
            rounded-full bg-white/10 hover:bg-white/20
            transition text-white text-xl
          "
          aria-label="Close"
        >
          ✕
        </button>

        {/* HEADER */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-3 text-[#ff9333]">
          Holiday Pricing Option
        </h1>

        <p className="text-[#a8b3c1] text-center mb-8 sm:mb-12 text-sm sm:text-base px-2">
          Limited-time flexible pricing for individuals and businesses planning
          their next move.
        </p>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.id * 0.1 }}
              className="
                relative overflow-hidden
                bg-[#1a3a5c]/40
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-5 sm:p-6
                flex flex-col
                transition-all duration-300 ease-out
                hover:bg-[#1a3a5c]/60
                hover:border-white/20
                hover:shadow-xl
              "
            >
              {/* TITLE */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-2">
                {plan.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-[#a8b3c1] text-center text-sm mb-4 px-2">
                {plan.description}
              </p>

              {/* PRICE */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                {plan.price}
              </h3>

              {/* INCLUDES LABEL */}
              <p className="text-white font-medium mb-3 text-sm sm:text-base">
                Includes:
              </p>

              {/* FEATURES LIST */}
              <ul className="flex flex-col gap-3 mb-6 flex-grow">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#d1d5db]"
                  >
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-[#ff9333] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <Link
                href="/contact"
                className="
                  w-full
                  rounded-full
                  px-6 sm:px-10 py-3
                  bg-[#f48c25]
                  text-[#0c2342] font-bold
                  shadow-lg shadow-[#daa520]/30
                  hover:scale-105 hover:shadow-xl
                  transition-all
                  text-center
                "
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <p className="text-center text-[#a8b3c1] text-xs sm:text-sm px-2">
          Every project includes mobile optimization, clean code, and clear
          communication. No hidden costs.
        </p>
      </motion.div>
    </div>
  );
};

export default PricingList;
