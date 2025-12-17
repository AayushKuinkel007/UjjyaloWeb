"use client";

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Nangsal Cafe & Stay',
    image: '/projects/nangsal.png',
    link: 'https://demo.com/nangsal',
    flex: 'flex-[1.4]' 
  },
  {
    id: 2,
    title: 'How to Order',
    image: '/projects/howtoorder.png',
    link: 'https://demo.com/howtoorder',
    flex: 'flex-[0.6]'
  },
  {
    id: 3,
    title: 'Ready to Expand',
    image: '/projects/onlinebajaarfooter.png',
    link: 'https://demo.com/expand',
    flex: 'flex-[0.6]'
  },
  {
    id: 4,
    title: 'OnlineBajaar',
    image: '/projects/onlinebajaar.png',
    link: 'https://demo.com/onlinebajaar',
    flex: 'flex-[1.4]'
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group w-full ${project.flex} rounded-[2.5rem] overflow-hidden bg-[#121421] border border-white/10 block cursor-pointer transition-colors duration-300 hover:border-white/25`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Button Following Cursor */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none">
          <div
            className="absolute pointer-events-auto"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%)',
              transition: 'left 0.1s ease-out, top 0.1s ease-out'
            }}
          >
            <div className="px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl shadow-2xl whitespace-nowrap">
              View Project
            </div>
          </div>
        </div>
      )}

      {/* Bottom Left Arrow Icon */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="w-14 h-14 bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:border-white transition-colors duration-200">
          <ArrowUpRight className="text-white w-7 h-7 group-hover:text-black" />
        </div>
      </div>
    </a>
  );
};

export default function ProjectsGrid() {
  return (
    <section id='portfolio' className="h-screen w-full bg-[#030303] flex flex-col overflow-hidden p-8 md:p-12">
      
      {/* Our Projects Header */}
      <div className="flex justify-center mb-10">
        <span className="px-8 py-3 bg-[#1a1c2e] border border-white/10 rounded-full text-white text-xs tracking-widest uppercase font-bold">
          Our Projects
        </span>
      </div>

      {/* Bento Grid: Controlled by flexbox to fit one screen */}
      <div className="flex-1 flex gap-8 min-h-0">
        
        {/* Left Column */}
        <div className="w-1/2 flex flex-col gap-8">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[2]} />
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col gap-8">
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[3]} />
        </div>

      </div>
    </section>
  );
}