import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../Assets/logo.png";

const OpeningModal = () => {
  const [open, setOpen] = useState(true);
  const [pricingOpen, setPricingOpen] = useState(false);

  if (!open) return null;

  return (
    <>
      {/* MAIN MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/70 backdrop-blur-sm px-4">
        <div className="relative w-full max-w-xl">

          {/* Floating Logo */}
          <motion.div
            className="absolute -top-20 left-1/2 -translate-x-1/2 z-20 h-36 w-36 sm:h-40 sm:w-40"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={logo}
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Glass Card */}
          <motion.div
            className="
              relative rounded-2xl p-8 pt-24 sm:pt-28
              bg-[#0c2342]/95 backdrop-blur-xl
              border border-white/10
              shadow-[0_20px_60px_rgba(2,6,23,0.8)]
              text-[#e5e7eb]
            "
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            {/* Subtle glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-cyan-400/5" />

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              ✕
            </button>

            {/* Top Badges */}
            <div className="flex items-center justify-between text-sm mb-6">
              <span className="text-[#e5e7eb]">
                Holiday Special 2026
                <span className="block h-[0.5px] w-full bg-white/30 mt-1" />
              </span>

              <span className="text-[#f48c25]">
                Only 10 Spots Available
                <span className="block h-[0.5px] w-full bg-[#f48c25]/40 mt-1" />
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 text-center sm:text-left">
              Build Your <br />
              Website <br />
              <span className="text-[#f48c25] font-semibold">
                at your price.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[#9ca3af] text-center mb-6">
              You set the budget. We deliver quality.
              <br />
              <span className="text-[#e5e7eb] font-medium">
                First come, first served.
              </span>
            </p>

            {/* CTA */}
            <div className="mb-6 text-center">
              <button
                className="
                  rounded-full px-10 py-3
                  bg-[#f48c25]
                  text-[#0c2342] font-bold
                  shadow-lg shadow-[#daa520]/30
                  hover:scale-105 hover:shadow-xl
                  transition-all
                "
              >
                Claim Your Spot
              </button>

              <button
                onClick={() => setPricingOpen(true)}
                className="block mt-2 text-xs underline mx-auto text-[#9ca3af] hover:text-[#e5e7eb]"
              >
                see pricing options
              </button>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-[#9ca3af]">
              <span>⚡ Spots filling fast</span>
              <span>• Only 10 projects accepted</span>
              <span>• Offer ends Jan 5, 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PRICING MODAL */}
      {pricingOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#020617]/70 backdrop-blur-sm px-4">
          <motion.div
            className="relative bg-[#0c2342]/95 text-[#e5e7eb] rounded-2xl p-8 max-w-md w-full border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setPricingOpen(false)}
              className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20"
            >
              ✕
            </button>

            <h1 className="text-2xl font-semibold mb-4 text-[#daa520]">
              Pricing Options
            </h1>

            <p className="text-[#9ca3af]">
              Flexible pricing based on your budget and project scope.
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default OpeningModal;
