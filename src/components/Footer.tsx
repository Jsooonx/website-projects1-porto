import React from 'react';
import { motion } from 'framer-motion';
import { TextRoll } from './TextRoll';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for editorial staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <footer className="w-full bg-[#0c0c0c] border-t border-neutral-900/60 text-white font-sans overflow-hidden flex flex-col items-center">
      {/* Top Editorial Section */}
      <div className="w-full max-w-[90vw] xl:max-w-[1400px] py-20 md:py-28 flex flex-col justify-between">
        
        {/* 3-Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 w-full items-start"
        >
          {/* Column 1: Contact (Phone & Email) */}
          <motion.div variants={itemVariants} className="col-span-12 md:col-span-6 flex flex-col items-start">
            <div className="text-neutral-700 text-lg font-light mb-8 select-none">+</div>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+13125558888" 
                className="group text-white font-sans font-medium text-lg md:text-[22px] tracking-tight hover:text-neutral-400 transition-colors duration-300"
              >
                <TextRoll text="+1 (312) 555-8888" />
              </a>
              <a 
                href="mailto:hello@jsooonx.com" 
                className="group flex items-center gap-2 text-white font-sans font-bold text-xl md:text-[28px] lg:text-[32px] tracking-tight border-b-2 border-white pb-1 w-fit hover:border-neutral-500 hover:text-neutral-300 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black group-hover:bg-neutral-300 transition-colors duration-300">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </span>
                <TextRoll text="hello@jsooonx.com" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div variants={itemVariants} className="col-span-6 md:col-span-3 flex flex-col items-start">
            <div className="text-neutral-700 text-lg font-light mb-8 select-none">+</div>
            <span className="text-xs text-neutral-500 font-sans tracking-wide mb-6 block uppercase">
              Navigation
            </span>
            <ul className="flex flex-col gap-3">
              {['Home', 'Studio', 'Projects', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                    onClick={(e) => {
                      if (item === 'Home') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        e.preventDefault();
                        const el = document.getElementById(item.toLowerCase() === 'projects' ? 'projects' : item.toLowerCase());
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="group text-white font-sans font-medium text-lg md:text-[20px] tracking-tight hover:text-neutral-400 transition-colors duration-300 block"
                  >
                    <TextRoll text={item} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Social Links */}
          <motion.div variants={itemVariants} className="col-span-6 md:col-span-3 flex flex-col items-start">
            <div className="text-neutral-700 text-lg font-light mb-8 select-none">+</div>
            <span className="text-xs text-neutral-500 font-sans tracking-wide mb-6 block uppercase">
              Social
            </span>
            <ul className="flex flex-col gap-3">
              {['Twitter', 'Instagram'].map((platform) => (
                <li key={platform}>
                  <a 
                    href={`https://${platform.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-white font-sans font-medium text-lg md:text-[20px] tracking-tight hover:text-neutral-400 transition-colors duration-300"
                  >
                    <TextRoll text={platform} />
                    <span className="text-neutral-600 group-hover:text-white transition-colors duration-300 text-sm align-middle ml-1">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Huge Rebranded Typography Logo (Starts under Column 2 horizontally) */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full mt-24 md:mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col items-start"
          >
            <h2 className="text-[12vw] md:text-[9vw] lg:text-[120px] xl:text-[140px] font-sans font-extrabold tracking-tighter leading-[0.95] text-white select-none">
              Jsooonx®
            </h2>
            <h3 className="text-[6vw] md:text-[4vw] lg:text-[50px] xl:text-[60px] font-sans font-medium tracking-tight leading-[0.9] text-white select-none mt-4">
              Studio
            </h3>
          </motion.div>
        </div>

      </div>

      {/* Bottom Contrast Bar */}
      <div className="w-full bg-[#000000] border-t border-neutral-900 py-10 flex flex-col items-center">
        <div className="w-full max-w-[90vw] xl:max-w-[1400px] flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          
          {/* Left: Copyright */}
          <div className="text-xs text-neutral-500 font-sans tracking-wide">
            © {currentYear} Jsooonx® Studio. All rights reserved.
          </div>

          {/* Middle: Links + Author Credit */}
          <div className="flex flex-col gap-4">
            {/* Top row: Legal links & Build note */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
              <a href="#privacy" className="group hover:text-white transition-colors duration-300">
                <TextRoll text="Privacy Policy" />
              </a>
              <a href="#terms" className="group hover:text-white transition-colors duration-300">
                <TextRoll text="Terms of Service" />
              </a>
              <span className="flex items-center gap-1.5 text-neutral-500 hover:text-white transition-colors duration-300">
                <svg className="w-3.5 h-3.5 fill-current rotate-45" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z"/>
                </svg>
                Built in React & Motion
              </span>
            </div>
            {/* Bottom row: Created by Jsooonx */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-neutral-600 font-sans">Created by</span>
              <div className="flex items-center gap-1.5 bg-neutral-950 px-2.5 py-1 rounded-full border border-neutral-900">
                <img 
                  src="/george_avatar.png" 
                  alt="Jsooonx" 
                  className="w-4 h-4 rounded-full object-cover grayscale"
                />
                <span className="text-[11px] text-neutral-300 font-medium font-sans">Jsooonx</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};
