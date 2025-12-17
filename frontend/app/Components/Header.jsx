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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c2342] shadow-lg py-2 px-6 rounded-xl text-indigo-200"
          : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className={`w-16 rounded-md cursor-pointer ${scrolled ? "h-12 scale-125" : "h-16"}`}
          onClick={() => scrollTo("#home")}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => scrollTo(item.href)}
              className="relative hover:text-[#fa8938] transition-colors group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fa8938] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Get Started button */}
        <div className="hidden md:block">
          <button variant="glow" size="sm" onClick={() => scrollTo("#contact")}>
            Get Started
          </button>
        </div>

        {/* Mobile Menu button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border py-4 px-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => scrollTo(item.href)}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button variant="glow" size="sm" className="w-full mt-2" onClick={() => scrollTo("#contact")}>
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
