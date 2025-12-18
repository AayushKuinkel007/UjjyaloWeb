"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Palette, Code2, FlaskConical, Rocket } from "lucide-react";
import TimelineStep from "./TimelineStep";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    subtitle: "Understanding your vision before we build",
    description:
      "We start by learning about your business, goals, target audience, and technical needs. This helps us define the right strategy, scope, and success metrics from day one.",
    deliverables: [
      "Project goals & requirements",
      "Timeline & milestones",
      "Tech and design direction",
    ],
  },
  {
    icon: Palette,
    title: "Design & Experience",
    subtitle: "Designs that look good and work better",
    description:
      "We create intuitive, user-focused designs that reflect your brand and guide users toward action. You'll review and approve everything before development begins.",
    deliverables: [
      "Wireframes & UI designs",
      "UX flow optimization",
      "Design feedback & revisions",
    ],
  },
  {
    icon: Code2,
    title: "Development & Build",
    subtitle: "Turning designs into high-performance products",
    description:
      "Our developers bring the designs to life using clean, scalable, and secure code. Performance, responsiveness, and best practices are built in from the start.",
    deliverables: [
      "Responsive web or app build",
      "Performance optimization",
      "Integrations & functionality",
    ],
  },
  {
    icon: FlaskConical,
    title: "Testing & Refinement",
    subtitle: "Polished, tested, and launch-ready",
    description:
      "Before launch, we thoroughly test across devices and browsers to ensure everything works flawlessly. Bugs, performance issues, and edge cases are handled here.",
    deliverables: [
      "Quality assurance testing",
      "Bug fixes & refinements",
      "Final approval",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    subtitle: "From launch day to ongoing success",
    description:
      "We deploy your product and make sure everything runs smoothly. Post-launch support is available for updates, improvements, and scaling.",
    deliverables: [
      "Live deployment",
      "Documentation & handover",
      "Optional ongoing support",
    ],
  },
];

const Timeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 150%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const stepHeight = 420;
  const totalHeight = steps.length * stepHeight;

  const generatePath = () => {
    const centerX = 500;
    const curveStrength = 200;

    let path = `M ${centerX} 0`;

    for (let i = 0; i < steps.length; i++) {
      const currentY = i * stepHeight + stepHeight / 2;
      const nextY = (i + 1) * stepHeight + stepHeight / 2;
      const isEven = i % 2 === 0;

      if (i === 0) {
        path += ` L ${centerX} ${currentY}`;
      }

      if (i < steps.length - 1) {
        const curveDir = isEven ? -curveStrength : curveStrength;
        const midY = (currentY + nextY) / 2;
        
        path += ` Q ${centerX + curveDir} ${midY}, ${centerX} ${nextY}`;
      }
    }
    const lastY = (steps.length - 1) * stepHeight + stepHeight / 2;
    path += ` L ${centerX} ${lastY + 100}`;

    return path;
  };

  return (
    <div ref={containerRef} className="relative py-10 md:py-20">
      <svg
        className="absolute left-0 right-0 top-0 pointer-events-none mx-auto hidden md:block"
        width="100%"
        height={totalHeight + 100}
        viewBox={`0 0 1000 ${totalHeight + 100}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f48c25" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#f48c25" stopOpacity="1" />
            <stop offset="100%" stopColor="#f48c25" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={generatePath()}
          fill="none"
          stroke="#262626"
          strokeWidth="2"
          opacity="0.2"
        />

        <motion.path
          d={generatePath()}
          fill="none"
          stroke="url(#curveGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        <motion.path
          d={generatePath()}
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
          style={{ pathLength }}
        />
      </svg>

      <div 
        className="absolute left-6 top-0 bottom-0 w-0.5 md:hidden" 
        style={{
          background: 'linear-gradient(to bottom, rgba(244, 140, 37, 0.2), #f48c25, rgba(244, 140, 37, 0.2))'
        }}
      />

      <div className="relative">
        {steps.map((step, index) => (
          <TimelineStep
            key={index}
            stepNumber={index + 1}
            Icon={step.icon}
            title={step.title}
            subtitle={step.subtitle}
            description={step.description}
            deliverables={step.deliverables}
            isEven={index % 2 === 0}
            totalSteps={steps.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;