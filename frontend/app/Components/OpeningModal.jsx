import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../Assets/logo.png";
import Link from "next/link";
import { Lightning } from "phosphor-react";
import PricingList from "./PricingList";

const OpeningModal = () => {
  const [open, setOpen] = useState(true);
  const [pricingOpen, setPricingOpen] = useState(false);

  if (!open) return null;

  return (
    <>
      {/* MAIN MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/70 backdrop-blur-sm px-3 sm:px-4">
        <div className="relative w-full max-w-xl">
          {/* Floating Logo */}
          <motion.div
            className="
              absolute -top-16 sm:-top-20
              left-1/2 -translate-x-1/2 z-20
              h-28 w-28 sm:h-40 sm:w-40
            "
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
              relative rounded-2xl
              p-5 sm:p-8
              pt-20 sm:pt-28
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
              className="
                absolute top-3 right-3 sm:top-4 sm:right-4
                px-3 py-1 rounded-full
                bg-white/10 hover:bg-white/20 transition
              "
            >
              ✕
            </button>

            {/* Top Badges */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 text-xs sm:text-sm mb-6 text-center sm:text-left">
              <span>
                Holiday Special 2026
                <span className="block h-[0.5px] w-full bg-white/30 mt-1" />
              </span>

              <span className="text-[#f48c25]">
                Only 10 Spots Available
                <span className="block h-[0.5px] w-full bg-[#f48c25]/40 mt-1" />
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-6xl font-bold leading-tight mb-5 text-center sm:text-left">
              Build Your <br className="hidden sm:block" />
              Website <br className="hidden sm:block" />
              <span className="text-[#f48c25] font-semibold">
                at your price.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-xl text-[#9ca3af] text-center mb-6">
              You set the budget. We deliver quality.
              <br />
              <span className="text-[#e5e7eb] font-medium">
                First come, first served.
              </span>
            </p>

            {/* CTA */}
            <div className="mb-6 text-center">
              <Link href="contact">
                <button
                  className="
                    w-full sm:w-auto
                    rounded-full px-8 sm:px-10 py-3
                    bg-[#f48c25]
                    text-[#0c2342] font-bold
                    shadow-lg shadow-[#daa520]/30
                    hover:scale-105 hover:shadow-xl
                    transition-all
                  "
                >
                  Claim Your Spot
                </button>
              </Link>

              <button
                onClick={() => setPricingOpen(true)}
                className="block mt-3 text-xs underline mx-auto text-[#9ca3af] hover:text-[#e5e7eb]"
              >
                see pricing options
              </button>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs text-[#9ca3af] text-center">
              <span className="flex justify-center gap-1 items-center">
                <Lightning /> Spots filling fast
              </span>
              <span>• Only 10 projects accepted</span>
              <span>• Offer ends Jan 5, 2026</span>
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
