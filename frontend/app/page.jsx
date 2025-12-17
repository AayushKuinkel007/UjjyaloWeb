"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"

const page = ({ onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  return (
    <>
      <h1 className="text-5xl text-[#f7a11f] text-center font-semibol mb-5">
        Hello World
      </h1>
      
      {open && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={handleClose}
          >
            <div className="px-[50px] py-[50px] rounded-2xl bg-[#0c2342] backdrop-blur-xl">
              {/* Modal Card */}
              <motion.div
                className="relative w-full max-w-xl rounded-2xl p-8 text-white border border-white/20 shadow-2xl"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  padding: "32px",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Light glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>

                {/* Top badges */}
                <div className="relative flex items-center justify-between text-sm mb-6">
                  <span className="inline-block">
                    Holiday Special 2026
                    <span className="block h-[0.5px] w-full bg-white/50 rounded-full" />
                  </span>

                  <span className="inline-block text-[#daa520]">
                    Only 10 Spots Available!
                    <span className="block h-[0.5px] w-full bg-white/50 rounded-full" />
                  </span>
                </div>

                {/* Heading */}
                <h1 className="relative text-7xl font-bold leading-tight mb-6">
                  Build Your <br />
                  Website <br />
                  <span className="font-semibold text-white/90">
                    at your price.
                  </span>
                </h1>

                {/* Sub text */}
                <p className="relative text-xl text-white/80 text-center mb-8">
                  You set the budget. We deliver quality.
                  <br />
                  <span className="text-white text-xl text-center font-medium">
                    First come, first served.
                  </span>
                </p>

                {/* CTA */}
                <div className="relative flex justify-center mb-8">
                  <Link href="/about">
                    <button className="rounded-full px-9 py-1 bg-white/15 backdrop-blur-md border border-white/30 font-semibold text-[#daa520] hover:scale-105 hover:bg-white/25 transition-all duration-300">
                      Claim Your Spot
                    </button>
                  </Link>
                </div>

                {/* Footer */}
                <div className="relative flex flex-wrap justify-between text-xs text-white/70">
                  <span>⚡ Spots filling fast</span>
                  <span>• Only 10 projects accepted</span>
                  <span>• Offer ends Jan 5, 2026</span>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
