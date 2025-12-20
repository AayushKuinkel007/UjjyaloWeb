"use client";

import React, { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Nangsal Cafe & Stay",
    image: "/projects/nangsal.png",
    link: "https://cafe-nine-sandy.vercel.app/?fbclid=PAVERFWAOrNQRleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafOVqQ89q3E87eDdl_5TCtSYg2A99o_l-IuSlczkRkRxmq9I87-xbF8V4xD5g_aem_lbJuuHPqSAgnHGO4TXzXsw",
    flex: "flex-[1.4]",
  },
  {
    id: 2,
    title: "How to Order",
    image: "/projects/howtoorder.png",
    link: "https://www.onlinebajaar.com/",
    flex: "flex-[0.6]",
  },
  {
    id: 3,
    title: "Ready to Expand",
    image: "/projects/onlinebajaarfooter.png",
    link: "https://cafe-nine-sandy.vercel.app/?fbclid=PAVERFWAOrNQRleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafOVqQ89q3E87eDdl_5TCtSYg2A99o_l-IuSlczkRkRxmq9I87-xbF8V4xD5g_aem_lbJuuHPqSAgnHGO4TXzXsw",
    flex: "flex-[0.6]",
  },
  {
    id: 4,
    title: "OnlineBajaar",
    image: "/projects/onlinebajaar.png",
    link: "https://www.onlinebajaar.com/",
    flex: "flex-[1.4]",
  },
];

const ProjectCard = ({ project, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      setMousePosition({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
    });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group w-full h-full ${project.flex} rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-[#121421] border border-white/10 block cursor-pointer transition-colors duration-300 hover:border-white/25`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={project.id <= 2}
      />

      {/* Button Following Cursor - Desktop Only */}
      {isHovered && !isMobile && (
        <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none">
          <div
            className="absolute pointer-events-auto will-change-transform"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="px-6 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl md:rounded-2xl shadow-2xl whitespace-nowrap text-sm md:text-base">
              View Project
            </div>
          </div>
        </div>
      )}

      {/* Mobile Hover Overlay */}
      {isMobile && (
        <div className="absolute inset-0 bg-black/0 active:bg-black/40 transition-all duration-300 flex items-center justify-center z-20">
          <div className="opacity-0 active:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl shadow-2xl text-sm">
            View Project
          </div>
        </div>
      )}

      {/* Bottom Left Arrow Icon */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10">
        <div className="w-10 h-10 md:w-14 md:h-14 bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-active:bg-white group-hover:border-white group-active:border-white transition-colors duration-200">
          <ArrowUpRight className="text-white w-5 h-5 md:w-7 md:h-7 group-hover:text-black group-active:text-black" />
        </div>
      </div>
    </a>
  );
};

export default function ProjectsGrid() {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen lg:h-screen w-full flex flex-col overflow-x-hidden mb-10 px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-12"
    >
      {/* Our Projects Header */}
      <div className="flex justify-center mb-6 md:mb-4">
        <span className="px-6 md:px-8 py-2 md:py-3 bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/20 rounded-full text-white text-xs tracking-widest uppercase font-bold">
          Our Projects
        </span>
      </div>

      {/* Desktop Bento Grid - 2 Columns (lg and up) */}
      <div className="hidden lg:flex flex-1 gap-4 lg:gap-8 min-h-0 w-full">
        {/* Left Column */}
        <div className="w-1/2 flex flex-col gap-4 lg:gap-8 min-w-0">
          <ProjectCard project={projects[0]} isMobile={isMobile} />
          <ProjectCard project={projects[2]} isMobile={isMobile} />
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col gap-4 lg:gap-8 min-w-0">
          <ProjectCard project={projects[1]} isMobile={isMobile} />
          <ProjectCard project={projects[3]} isMobile={isMobile} />
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex lg:hidden flex-1 gap-6 min-h-0 w-full">
        {/* Left Column */}
        <div className="w-1/2 flex flex-col gap-6 min-w-0">
          {/* Tall card */}
          <div className="flex-[0.5]">
            <ProjectCard project={projects[0]} isMobile={isMobile} />
          </div>
          {/* Short card */}
          <div className="flex-[0.2]">
            <ProjectCard project={projects[2]} isMobile={isMobile} />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col gap-6 min-w-0">
          {/* Short card */}
          <div className="flex-[0.2]">
            <ProjectCard project={projects[1]} isMobile={isMobile} />
          </div>
          {/* Tall card */}
          <div className="flex-[0.5]">
            <ProjectCard project={projects[3]} isMobile={isMobile} />
          </div>
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden flex flex-col gap-4 sm:gap-6 w-full">
        {projects.map((project) => (
          <div key={project.id} className="aspect-square w-full">
            <ProjectCard project={project} isMobile={isMobile} />
          </div>
        ))}
      </div>
    </section>
  );
}