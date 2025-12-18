"use client";
import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import Image from "next/image";
import logo from "../Assets/logo.svg";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonial" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 text-white px-4 sm:px-6 lg:px-0 ${
        isOpen
          ? "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg py-4 shadow-none w-full"
          : scrolled
          ? "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg w-[95%] lg:w-[700px] lg:left-1/2 lg:-translate-x-1/2 lg:rounded-[20px] mt-4 mx-2.5 rounded-[20px]"
          : "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg lg:bg-transparent lg:py-1 lg:border-none lg:shadow-none w-[95%] lg:w-full ms-2.5 mt-2 rounded-[20px]"
      }`}
    >
      <div className={`mx-auto max-w-7xl flex items-center justify-between ${
        scrolled
        ? "lg:justify-between"
        : "lg:justify-evenly"
      }`}>
        {/* Logo */}
        <div
          onClick={() => scrollTo("#home")}
          className="cursor-pointer flex items-center ms-2"
        >
          <Image
            src={logo}
            alt="Logo"
            width={64}
            height={64}
            className="rounded-md scale-150"
          />
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex ${
          scrolled
          ? "space-x-10"
          : "space-x-[100px]"
        }`}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="relative group hover:text-[#f48c25] transition"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f48c25] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-3 py-2 me-2 rounded-xl text-black bg-[#f48c25]
  shadow-[0_0_0px_#f48c25] hover:shadow-[0_0_20px_#f48c25] hover:scale-105 duration-500"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full z-40 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-b-2xl px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="text-lg hover:text-[#f48c25]"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-2 px-5 py-2 bg-[#f48c25] rounded-full"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;