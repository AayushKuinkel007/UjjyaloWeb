import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../Assets/logo.svg";

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="text-white">
      <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

      <div className="max-w-7xl lg:ms-35 px-6 py-12 mx-auto lg:mx-0">
        <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 ms-8 md:ms-0 lg:ms-20">
              <img
                src={logo.src}
                alt="UjjyaloWeb Logo"
                className="h-10 scale-500 w-auto"
              />
            </div>

            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              Bringing your brand into light through high-performance web and
              app experiences.
            </p>

            <a
              href="mailto:ujjyaloweb@gmail.com"
              className="inline-flex items-center gap-2 text-[#f48c25] mb-8 hover:text-[#ff9d3d] transition-colors"
            >
              <Mail size={18} />
              <span className="break-all">ujjyaloweb@gmail.com</span>
            </a>

            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-[#f48c25] hover:text-orange-500">
                <Instagram size={20} />
              </a>
              <a className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-[#f48c25] hover:text-orange-500">
                <Twitter size={20} />
              </a>
              <a className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-[#f48c25] hover:text-orange-500">
                <Linkedin size={20} />
              </a>
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
              {["services", "portfolio", "process", "testimonials"].map(
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
              {["FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                    className="text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="text-gray-400 hover:text-white">Privay Policy</li>
              <li className="text-gray-400 hover:text-white">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 UjjyaloWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
