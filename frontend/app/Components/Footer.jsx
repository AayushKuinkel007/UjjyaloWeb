"use client";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import logo from "../Assets/logo.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="text-white">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

        <div className="max-w-7xl lg:ms-35 px-6 py-12 mx-auto lg:mx-0">
          <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4 ms-8 md:ms-0 lg:ms-20">
                <Image
                  src={logo}
                  alt="UjjyaloWeb Logo"
                  className="h-10 scale-500 w-auto"
                />
              </div>

              <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
                Bringing your brand into light through high-performance web and
                app experiences.
              </p>

              <div className="lg:hidden">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/ujjyaloweb/"
                    target="_blank"
                    className="w-10 h-10 border border-gray-700 rounded flex
                  items-center justify-center hover:border-[#f48c25]
                  hover:text-[#f48c25] hover:shadow-[0_0_20px_#f48c25]"
                  >
                    <Instagram size={20} />
                  </Link>

                  <Link
                    className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-[#f48c25] text-white hover:text-[#f48c25] hover:shadow-[0_0_20px_#f48c25]"
                    href="https://x.com/ujjyaloweb"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
                    </svg>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/ujjyaloweb/posts/?feedView=all"
                    target="_blank"
                    className="w-10 h-10 border border-gray-700 rounded flex
                  items-center justify-center hover:border-[#f48c25]
                  hover:text-[#f48c25] hover:shadow-[0_0_20px_#f48c25]"
                  >
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                {["services", "projects", "process", "testimonials"].map(
                  (id) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={(e) => handleSmoothScroll(e, `#${id}`)}
                        className="text-gray-400 hover:text-white"
                      >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2.5">
                {[
                  "Custom Web Development",
                  "Website UI/UX Design",
                  "Responsive Web Design",
                  "Website Redesign & Optimization",
                  "Landing Page Design & Development",
                ].map((service) => (
                  <li key={service} className="text-gray-400 hover:text-white">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2.5">
                {["FAQ"].map((item) => (
                  <li key={item}>
                    <a
                      href="#faq"
                      onClick={(e) => handleSmoothScroll(e, "#faq")}
                      className="text-gray-400 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li
                  className="text-gray-400 hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    setPrivacyOpen(true);
                  }}
                >
                  Privay Policy
                </li>
                <li
                  className="text-gray-400 hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    setTermsOpen(true);
                  }}
                >
                  Terms of Service
                </li>
                <li>
                  <Link
                    href="mailto:ujjyaloweb@gmail.com"
                    className="inline-flex items-center gap-2 text-[#f48c25] mb-8 hover:text-[#ff9d3d] transition-colors"
                  >
                    <Mail size={18} />
                    <span className="break-all">ujjyaloweb@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 UjjyaloWeb. All rights reserved.
            </p>

            <div className="hidden md:block">
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/ujjyaloweb/"
                  target="_blank"
                  className="w-10 h-10 border border-gray-700 rounded flex
                  items-center justify-center hover:border-[#f48c25]
                  hover:text-[#f48c25] hover:shadow-[0_0_20px_#f48c25]"
                >
                  <Instagram size={20} />
                </Link>

                <Link
                  className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-[#f48c25] text-white hover:text-[#f48c25] hover:shadow-[0_0_20px_#f48c25]"
                  href="https://x.com/ujjyaloweb"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.linkedin.com/company/ujjyaloweb/posts/?feedView=all"
                  target="_blank"
                  className="w-10 h-10 border border-gray-700 rounded flex
                  items-center justify-center hover:border-[#f48c25]
                  hover:text-[#f48c25] hover:shadow-[0_0_20px_#f48c25]"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {privacyOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#020617]/70 backdrop-blur-sm px-4">
          <motion.div
            className="relative bg-[#0c2342]/95 text-[#e5e7eb] rounded-2xl p-8 max-w-md w-full border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20"
            >
              ✕
            </button>

            <h1 className="text-2xl font-semibold mb-4 text-[#daa520]">
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      )}

      {termsOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#020617]/70 backdrop-blur-sm px-4">
          <motion.div
            className="relative bg-[#0c2342]/95 text-[#e5e7eb] rounded-2xl p-8 max-w-md w-full border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setTermsOpen(false)}
              className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20"
            >
              ✕
            </button>

            <h1 className="text-2xl font-semibold mb-4 text-[#daa520]">
              Terms of Service
            </h1>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Footer;
