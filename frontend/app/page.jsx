"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
      <h1 className="text-5xl text-[#f7a11f] text-center font-semibold mt-5 mb-5">
        Hello World
      </h1>

      {open && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={handleClose}
          >
            {/* Modal Card */}
            <div className="relative w-full max-w-xl rounded-2xl bg-[#0c2342] p-8 text-white shadow-2xl">
              {/* Top badges */}
              <div className="flex items-center justify-between text-sm mb-6">
                <span className="relative inline-block rounded-full px-4 py-1">
                  Holiday Special 2026
                  <span className="block h-[0.5px] w-full bg-[#aaaaaa] mt-0.5 rounded-full"></span>
                </span>

                <span className="relative inline-block text-[#daa520] font-medium">
                  Only 10 Spots Available!
                  <span className="block h-[0.5px] w-full bg-[#aaaaaa] mt-0.5 rounded-full"></span>
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-7xl font-bold leading-tight mb-6">
                Build Your <br />
                Website <br />
                <span className="font-semibold">at your price.</span>
              </h1>

              {/* Sub text */}
              <p className="text-white/80 mb-8">
                You set the budget. We deliver quality.
                <br />
                <span className="text-white font-medium">
                  First come, first served.
                </span>
              </p>

              {/* CTA */}
              <div className="flex justify-center mb-8">
                <Link href="/about">
                  <button className="rounded-full px-9 py-3 bg-white/10 font-semibold text-[#daa520] hover:scale-105 transition">
                    Claim Your Spot
                  </button>
                </Link>
              </div>

              {/* Footer */}
              <div className="flex flex-wrap justify-between text-xs text-white/70">
                <span>⚡ Spots filling fast</span>
                <span>• Only 10 projects accepted</span>
                <span>• Offer ends Jan 5, 2026</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
