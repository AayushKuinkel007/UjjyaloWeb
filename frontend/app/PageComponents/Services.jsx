"use client";

import { motion } from "framer-motion";
import {
  Code,
  PaintBrush,
  DeviceMobile,
  ShoppingCartSimple,
  MagnifyingGlass,
  Lightning,
  ArrowRight,
} from "phosphor-react";

const servicesData = [
  {
    icon: <Code size={32} />,
    title: "Custom Website Development",
    description:
      "High-performance websites built with modern technologies, optimized for speed, security, and scalability.",
    features: [
      "Frontend Development",
      "Backend Integration",
      "APIs",
      "Performance Optimization",
    ],
  },
  {
    icon: <PaintBrush size={32} />,
    title: "Website UI/UX Design",
    description:
      "User-focused website designs that are clean, intuitive, and built to convert visitors into customers.",
    features: [
      "UI/UX Design",
      "Wireframing",
      "Responsive Layouts",
      "Brand Alignment",
    ],
  },
  {
    icon: <DeviceMobile size={32} />,
    title: "Responsive Web Design",
    description:
      "Websites that look and perform flawlessly across desktops, tablets, and mobile devices.",
    features: [
      "Mobile-First Design",
      "Cross-Browser Support",
      "Accessibility",
      "Touch Optimization",
    ],
  },
  {
    icon: <ShoppingCartSimple size={32} />,
    title: "Website Redesign & Optimization",
    description:
      "Upgrade outdated websites with modern design, improved performance, and better user experience.",
    features: [
      "UI Refresh",
      "Speed Optimization",
      "SEO Improvements",
      "UX Enhancements",
    ],
  },
  {
    icon: <MagnifyingGlass size={32} />,
    title: "Website Performance & SEO",
    description:
      "Lightning-fast websites optimized for search engines and real-world performance.",
    features: [
      "Technical SEO",
      "Page Speed",
      "Core Web Vitals",
      "Analytics Setups",
    ],
  },
  {
    icon: <Lightning size={32} />,
    title: "Page Design & Development",
    description:
      "Conversion-focused landing pages designed to generate leads, signups, and sales.",
    features: [
      "24–48h Hero Sections",
      "CTA Optimization",
      "Fast Load Speed",
      "SEO Structure",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative mb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[80px] md:mt-[100px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-8 py-3 bg-[#1a1a1a]/40 border border-white/10 font-bold uppercase text-white text-xs rounded-full mb-4">
            Our Services
          </span>

          {/* 🔥 RESPONSIVE HEADING FIX */}
          <h2 className="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Illuminating Digital Experiences
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto">
            From concept to launch, UjjyaloWeb helps businesses transform ideas
            into high-performing digital products.
            <br />
            We combine strategy, design, and engineering to create experiences
            that are fast, scalable, and built for growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="
                group
                relative
                overflow-hidden
                bg-[#1a1a1a]/40
                backdrop-blur-xl
                border border-white/20
                rounded-xl
                p-6
                flex flex-col gap-4

                transition-all
                duration-500
                ease-out

                hover:-translate-y-2
                hover:bg-white/10
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]
                hover:border-white/30
              "
            >
              <div className="text-white bg-[#0c2342] w-fit p-3 rounded-xl transition-all duration-500 group-hover:shadow-[0_0_25px_#f48c25]">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm">{service.description}</p>

              <ul className="text-gray-400 text-sm space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-auto text-white group-hover:text-[#f48c25] font-medium flex items-center gap-2 hover:bg-[#f48c25] hover:text-black w-fit px-4 py-2 rounded-xl transition-colors">
                Learn More <ArrowRight size={22} weight="bold" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
