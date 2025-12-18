"use client";

import { motion, useInView } from "framer-motion";
import { Plus } from "lucide-react";
import { useRef } from "react";

const TimelineStep = ({
  stepNumber,
  Icon,
  title,
  subtitle,
  description,
  deliverables,
  isEven,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-40% 0px -40% 0px" });

  const primaryColor = "#f48c25"; 

  return (
    <div ref={ref} className="relative py-8 md:py-0 md:h-[420px] md:pt-10 md:pb-10">
      {/* Mobile dot - left aligned */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0.3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-4 top-10 z-10 md:hidden"
      >
        <motion.div
          animate={isInView ? { 
            boxShadow: `0 0 20px 5px ${primaryColor}66`,
            scale: 1 
          } : { 
            boxShadow: "0 0 0px 0px transparent",
            scale: 0.8
          }}
          transition={{ duration: 0.5 }}
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: primaryColor }}
        />
        <div className="absolute inset-0.5 rounded-full bg-black" />
        <div className="absolute inset-1 rounded-full" style={{ backgroundColor: primaryColor }} />
      </motion.div>

      {/* Desktop dot - center aligned */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0.3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={isInView ? { 
            boxShadow: `0 0 30px 10px ${primaryColor}66`,
            scale: 1 
          } : { 
            boxShadow: "0 0 0px 0px transparent",
            scale: 0.8
          }}
          transition={{ duration: 0.5 }}
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: primaryColor }}
        />
        <div className="absolute inset-1 rounded-full bg-black" />
        <div className="absolute inset-1.5 rounded-full" style={{ backgroundColor: primaryColor }} />
      </motion.div>

      {/* Content container */}
      <div className="container mx-auto px-4">
        <div className={`flex items-center md:${isEven ? "justify-start" : "justify-end"}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.2, x: isEven ? -30 : 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full pl-12 md:pl-0 md:w-[45%] ${isEven ? "md:pr-16 lg:pr-24" : "md:pl-16 lg:pl-24"}`}
          >
            <div className={`relative text-left ${isEven ? "md:text-right" : "md:text-left"}`}>
              {/* Number with plus icon and title row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex items-center gap-2 md:gap-3 mb-3 flex-wrap ${isEven ? "md:justify-end" : "md:justify-start"}`}
              >
                {/* Step number with plus */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
                  className={`relative flex items-center ${isEven ? "md:order-2" : ""}`}
                >
                  <Plus
                    className="w-4 h-4 md:w-5 md:h-5"
                    strokeWidth={2.5}
                    style={{ 
                      color: primaryColor,
                      filter: `drop-shadow(0 0 10px ${primaryColor}cc)`
                    }}
                  />
                  <span 
                    className="font-bold text-lg md:text-xl ml-1"
                    style={{ 
                      color: primaryColor,
                      filter: `drop-shadow(0 0 10px ${primaryColor}cc)`
                    }}
                  >
                    {stepNumber}
                  </span>
                </motion.div>
                
                <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white flex items-center gap-2 md:gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Icon */}
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Icon 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                      strokeWidth={1.5}
                      style={{ 
                        color: primaryColor,
                        filter: `drop-shadow(0 0 8px ${primaryColor}99)`
                      }}
                    />
                  </motion.div>
                  <span>{title}</span>
                </h3>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-medium mb-3 md:mb-4 text-xs sm:text-sm md:text-base"
                style={{ color: `${primaryColor}cc` }}
              >
                {subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6"
                style={{ color: "#a6a6a6" }}
              >
                {description}
              </motion.p>

              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2 md:space-y-3"
              >
                <span 
                  className="text-xs uppercase tracking-[0.2em] font-semibold"
                  style={{ color: `${primaryColor}b3` }}
                >
                  Deliverables
                </span>
                <ul className={`space-y-1.5 md:space-y-2 mt-2 text-left ${isEven ? "md:text-right" : "md:text-left"}`}>
                  {deliverables.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: isEven ? 15 : -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 15 : -15 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className={`flex items-center gap-2 md:gap-3 text-xs sm:text-sm md:text-base ${isEven ? "md:flex-row-reverse" : ""}`}
                      style={{ color: "#e6e6e6" }}
                    >
                      <span 
                        className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: primaryColor }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TimelineStep;