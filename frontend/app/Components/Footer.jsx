import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../Assets/logo.svg";

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="text-white">
      {/* Top Gradient Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl lg:ms-35 px-6 py-16 mx-auto lg:mx-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img
                src={logo.src}
                alt="UjjyaloWeb Logo"
                className="h-10 lg:ms-20 scale-600 mb-3 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-3 text-sm md:text-base">
              Bringing your brand into light through high-performance web and
              app experiences.
            </p>

            <a
              href="mailto:ujjyaloweb@gmail.com"
              className="inline-flex items-center gap-2 text-[#f48c25] mb-6 hover:text-[#ff9d3d] transition-colors text-sm md:text-base"
            >
              <Mail size={20} />
              <span className="break-all">ujjyaloweb@gmail.com</span>
            </a>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "#services")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleSmoothScroll(e, "#portfolio")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleSmoothScroll(e, "#process")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleSmoothScroll(e, "#testimonials")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "#services")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Custom Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "#services")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Website UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "#services")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Responsive Web Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "#services")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Website Redesign & Optimization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "#services")}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Landing Page Design & Development
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 UjjyaloWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
