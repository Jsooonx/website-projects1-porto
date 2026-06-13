import React from 'react';
import { motion } from 'framer-motion';

export const LogoBar: React.FC = () => {
  const logos = [
    <img key="python" src="/icons/python.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="Python" />,
    <img key="c" src="/icons/c.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="C" />,
    <img key="cpp" src="/icons/cpp.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="C++" />,
    <img key="js" src="/icons/javascript.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="JavaScript" />,
    <img key="html" src="/icons/html.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="HTML" />,
    <img key="css" src="/icons/css.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="CSS" />,
    <img key="react" src="/icons/react.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="React" />,
    <img key="ts" src="/icons/typescript.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="TypeScript" />,
    <img key="tailwind" src="/icons/tailwind.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="Tailwind CSS" />,
    <img key="figma" src="/icons/figma.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="Figma" />,
    <img key="framer" src="/icons/framer.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="Framer" />,
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px 0px -50px 0px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-1.5 md:px-3 py-6 border-t border-b border-neutral-900/60 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden select-none"
    >
      {/* Logos Container: Scrolling marquee on desktop, swipeable grid on mobile */}
      <div className="w-full md:w-[70%] relative overflow-hidden flex items-center">
        {/* Shadow overlays for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* CSS-based marquee for high-performance animation */}
        <div className="flex animate-marquee whitespace-nowrap min-w-full">
          {/* First set of logos */}
          <div className="flex gap-12 md:gap-16 pr-12 md:pr-16 items-center flex-shrink-0">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`logo-a-${index}`} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                {logo}
              </div>
            ))}
          </div>
          {/* Second set of logos for seamless looping */}
          <div className="flex gap-12 md:gap-16 pr-12 md:pr-16 items-center flex-shrink-0">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`logo-b-${index}`} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Availability Status */}
      <div className="w-full md:w-[26%] flex md:justify-end items-center flex-shrink-0">
        <div className="text-left md:text-right font-sans flex items-center md:justify-end gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <div className="flex flex-col">
            <span className="text-white text-xs font-medium tracking-tight">Available for Freelance</span>
            <p className="text-[11px] text-neutral-500 font-light mt-0.5 tracking-normal">
              Open to <span className="text-neutral-400 font-normal">new projects worldwide</span>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
