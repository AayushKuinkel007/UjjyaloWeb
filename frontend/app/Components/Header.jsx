"use client"
import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
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
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed block w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm bg-white/10 shadow-lg py-2 px-6 text-white"
          : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <img
          src={logo.src}
          alt="Logo"
          className={`w-16 rounded-md cursor-pointer transition-all ${
            scrolled ? "h-12 scale-150" : "h-16 scale-150"
          }`}
          onClick={() => scrollTo("#home")}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => scrollTo(item.href)}
              className="relative group hover:text-[#fa8938] transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fa8938] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Get Started button */}
        <div className="hidden md:block">
          <button
            className="px-5 py-2 bg-[#fa8938] text-white font-medium rounded-full hover:brightness-110 transition"
            onClick={() => scrollTo("#contact")}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#0c2342]/90 backdrop-blur-md border-t border-white/20 py-6 px-6 flex flex-col gap-4 animate-slideDown">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => scrollTo(item.href)}
              className="hover:text-[#fa8938] transition-colors text-lg"
            >
              {item.name}
            </a>
          ))}
          <button
            className="w-full mt-2 px-5 py-2 bg-[#fa8938] text-white font-medium rounded-full hover:brightness-110 transition"
            onClick={() => scrollTo("#contact")}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
