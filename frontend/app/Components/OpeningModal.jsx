import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../Assets/logo.png";
import Link from "next/link";
import { Lightning } from "phosphor-react";
import PricingList from "./PricingList";
import { CheckCircle } from "phosphor-react";

const OpeningModal = () => {
  const [open, setOpen] = useState(true);
  const [pricingOpen, setPricingOpen] = useState(false);

  if (!open) return null;

  const Info = [
    { item: "Mobile Responsive Design" },
    { item: "Fast loading & SEO Optimized" },
    { item: "3 rounds of revision included" },
    { item: "Professional, custom design" },
    { item: "10-15 days delivery" },
  ];

  return (
    <>
      {/* MAIN MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/70 backdrop-blur-sm px-3 sm:px-4 py-4 overflow-y-auto">
        <div className="relative w-full max-w-xl my-auto">
          {/* Floating Logo */}
          <motion.div
            className="
              absolute -top-12 sm:-top-16
              left-1/2 -translate-x-1/2 z-20
              h-24 w-24 sm:h-32 sm:w-32
            "
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={logo}
              alt="logo"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Glass Card */}
          <motion.div
            className="
              relative rounded-3xl
              p-6 sm:p-8
              pt-16 sm:pt-20
              bg-[#0c2342]/95 backdrop-blur-xl
              border border-white/10
              shadow-[0_20px_60px_rgba(2,6,23,0.8)]
              text-[#e5e7eb]
            "
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Subtle glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-cyan-400/5" />

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-3 right-3 sm:top-4 sm:right-4
                w-6 h-6 rounded-full
                bg-white/10 hover:bg-white/20 
                transition-all duration-200
                flex items-center justify-center
                text-white/70 hover:text-white
                text-lg
              "
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Top Badges */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 text-xs sm:text-sm mb-5 text-center sm:text-left">
              <span className="font-medium">
                Holiday Special 2026
                <span className="block h-[0.5px] w-full bg-white/30 mt-1" />
              </span>

              <span className="text-[#f48c25] font-semibold">
                Only 10 Spots Available
                <span className="block h-[0.5px] w-full bg-[#f48c25]/40 mt-1" />
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-[40px] font-bold leading-tight mb-4 text-center sm:text-left">
              Premium Website Starting <br className="hidden sm:block" />
              at
              <span className="ms-2 text-[#f48c25] font-semibold">
                Rs.10000
              </span>
              <br />
              <span className="text-xl sm:text-[28px] text-white/80">
                (normally Rs.25000+)
              </span>
            </h1>

            {/* list */}
            <div className="my-5">
              <ul className="flex flex-col gap-2.5">
                {Info.map((info, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#d1d5db] text-base sm:text-lg"
                  >
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-[#ff9333]"
                    />
                    <span className="leading-snug">{info.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* subtext */}
            <div className="text-center mb-1">
              <p className="text-xs text-white/70 mb-1">
                30% upfront, 70% on completion
              </p>
              <p className="text-xl font-semibold">First come, first served.</p>
            </div>

            {/* CTA */}
            <div className="mb-5 text-center">
              <Link href="contact">
                <button
                  className="
                    w-full sm:w-auto
                    rounded-full px-8 sm:px-12 py-1.5
                    text-[#f48c25] font-bold text-lg
                    bg-white/10
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  Claim Your Spot
                </button>
              </Link>

              <button
                onClick={() => setPricingOpen(true)}
                className="block mt-2 text-sm underline mx-auto text-[#9ca3af] hover:text-[#e5e7eb] transition-colors"
              >
                see pricing options
              </button>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between gap-2 sm:gap-4 text-xs text-[#9ca3af] text-center">
              <span className="flex justify-center gap-1 items-center">
                <Lightning className="text-[#ff9333]" weight="fill" />
                Spots filling fast
              </span>
              <span>• Only 10 projects accepted</span>
              <span>• Offer ends Jan 10, 2026</span>
            </div>

            <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
              <p className="text-center text-xs text-white/60">
                www.ujjyaloweb.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PRICING MODAL */}
      {pricingOpen && <PricingList setPricingOpen={setPricingOpen} />}
    </>
  );
};

export default OpeningModal;
