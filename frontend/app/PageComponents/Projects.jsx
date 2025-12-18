"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Nangsal Cafe & Stay',
    image: '/projects/nangsal.png',
    link: 'https://cafe-nine-sandy.vercel.app/?fbclid=PAVERFWAOrNQRleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafOVqQ89q3E87eDdl_5TCtSYg2A99o_l-IuSlczkRkRxmq9I87-xbF8V4xD5g_aem_lbJuuHPqSAgnHGO4TXzXsw',
    flex: 'flex-[1.4]' 
  },
  {
    id: 2,
    title: 'How to Order',
    image: '/projects/howtoorder.png',
    link: 'https://www.onlinebajaar.com/',
    flex: 'flex-[0.6]'
  },
  {
    id: 3,
    title: 'Ready to Expand',
    image: '/projects/onlinebajaarfooter.png',
    link: 'https://cafe-nine-sandy.vercel.app/?fbclid=PAVERFWAOrNQRleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafOVqQ89q3E87eDdl_5TCtSYg2A99o_l-IuSlczkRkRxmq9I87-xbF8V4xD5g_aem_lbJuuHPqSAgnHGO4TXzXsw',
    flex: 'flex-[0.6]'
  },
  {
    id: 4,
    title: 'OnlineBajaar',
    image: '/projects/onlinebajaar.png',
    link: 'https://www.onlinebajaar.com/',
    flex: 'flex-[1.4]'
  }
];

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group w-full ${project.flex} rounded-[2.5rem] overflow-hidden bg-[#121421] border border-white/10 block cursor-pointer transition-colors duration-300 hover:border-white/25`}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Instant Hover Button */}
      <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center z-20">
        <div className="px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl shadow-2xl">
          View Project
        </div>
      </div>

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