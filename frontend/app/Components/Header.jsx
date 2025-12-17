"use client";
import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import Image from "next/image";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
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
          ? "bg-[#0c2342] py-4 shadow-none w-full"
          : scrolled
          ? "backdrop-blur-md bg-[#0c2342] shadow-lg py-2 w-full lg:w-[900px] lg:left-1/2 lg:-translate-x-1/2 rounded-b-none lg:rounded-[20px] mt-0 lg:mt-2"
          : "bg-transparent py-4.5 w-full"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollTo("#home")}
          className="cursor-pointer flex items-center"
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
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="relative group hover:text-[#fa8938] transition"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fa8938] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 bg-[#fa8938] rounded-full font-medium hover:brightness-110 transition"
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
        <div className="md:hidden fixed top-[72px] left-0 w-full z-40 bg-[#0c2342]/95 rounded-b-2xl backdrop-blur-md px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="text-lg hover:text-[#fa8938]"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-2 px-5 py-2 bg-[#fa8938] rounded-full"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
