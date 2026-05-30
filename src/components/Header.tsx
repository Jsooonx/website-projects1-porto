import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

// Helper component for the sliding text roll hover animation (auto-scales without clipping and hides descender/ascender residues)
const TextRoll: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  return (
    <span className="relative inline-block overflow-hidden pb-[0.1em]">
      {/* Primary text in normal flow */}
      <span className={`block transition-transform duration-500 ease-[0.16, 1, 0.3, 1] group-hover:-translate-y-[115%] ${className}`}>
        {text}
      </span>
      {/* Secondary text clone positioned with a buffer gap below */}
      <span className={`absolute top-[115%] left-0 block w-full transition-transform duration-500 ease-[0.16, 1, 0.3, 1] group-hover:-translate-y-[115%] ${className}`}>
        {text}
      </span>
    </span>
  );
};

export const Header: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = now.getDate();
      const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      const month = monthNames[now.getMonth()];
      
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      
      setTime(`${day} ${month}, ${hours}.${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const lenis = useLenis();

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!lenis) return;

    const opts = { duration: 1.3, easing: (t: number) => 1 - Math.pow(1 - t, 4) };

    if (href === '#') {
      lenis.scrollTo(0, opts);
    } else {
      const el = document.querySelector(href);
      if (el) lenis.scrollTo(el as HTMLElement, opts);
    }

    if (isMenuOpen) setIsMenuOpen(false);
  }, [lenis, isMenuOpen]);

  const menuItems = [
    { title: 'Home', number: '(01)', href: '#' },
    { title: 'About', number: '(02)', href: '#about' },
    { title: 'Projects', number: '(03)', href: '#projects' },
    { title: 'Blog', number: '(04)', href: '#blog' },
    { title: 'Contact', number: '(05)', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full sticky top-0 z-50 flex justify-center bg-transparent pointer-events-none px-1.5 md:px-3 h-16"
    >
      <div className="w-full max-w-[98vw] xl:max-w-[1560px] relative">
        <div className="absolute top-0 left-0 right-0 bg-[#0a0a0a]/95 border-x border-b border-neutral-800/80 rounded-b-[24px] px-6 flex flex-col text-sm tracking-tight text-neutral-400 font-sans shadow-lg shadow-black/60 pointer-events-auto">
          
          {/* Header Bar Row */}
          <div className="flex items-center justify-between py-3.5">
            {/* Left side: logo + timestamp */}
            <div className="flex items-center space-x-3.5 select-none">
              <span className="text-white font-bold font-sans tracking-tight text-[14px]">Jsooonx®</span>
              <span className="text-neutral-500 font-sans text-[12px] font-normal tracking-wide">{time || '29 May, 8.44 pm'}</span>
            </div>

            {/* Right side: navigation links */}
            <div className="flex items-center space-x-5 md:space-x-6">
              {/* Nav links disappear when menu is open */}
              <AnimatePresence>
                {!isMenuOpen && (
                  <motion.nav 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex items-center space-x-6"
                  >
                    <button className="group hover:text-white transition-colors duration-300 text-[12.5px] font-normal cursor-pointer text-neutral-400">
                      <TextRoll text="(Light version)" />
                    </button>
                    <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="group hover:text-white transition-colors duration-300 text-[12.5px] font-normal text-neutral-400">
                      <TextRoll text="About" />
                    </a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="group hover:text-white transition-colors duration-300 text-[12.5px] font-normal text-neutral-400">
                      <TextRoll text="Projects" />
                    </a>
                    <a href="#blog" onClick={(e) => scrollToSection(e, '#blog')} className="group hover:text-white transition-colors duration-300 text-[12.5px] font-normal text-neutral-400">
                      <TextRoll text="Blog" />
                    </a>
                  </motion.nav>
                )}
              </AnimatePresence>
              
              <div className="flex items-center space-x-2.5">
                <button className="group bg-white text-black hover:bg-neutral-200 transition-all duration-300 px-4.5 py-1.5 rounded-full cursor-pointer shadow-sm flex items-center justify-center">
                  <TextRoll text="Start a project" className="font-semibold text-black text-[12.5px] tracking-tight" />
                </button>
                
                {/* Interactive + to X button */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 relative group outline-none ${
                    isMenuOpen 
                      ? 'bg-neutral-800 text-white border-none' 
                      : 'border border-neutral-800 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: isMenuOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute block w-3.5 h-[1.5px] bg-current"
                    />
                    <motion.span
                      animate={{ rotate: isMenuOpen ? 135 : 90 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute block w-3.5 h-[1.5px] bg-current"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Expanding dropdown menu content inside the notch */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-neutral-900/60 grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 items-center">
                  
                  {/* Left Column: Nav Items */}
                  <div className="relative py-4">
                    {/* Massive faint background text "Jsooonx" */}
                    <div className="absolute inset-0 flex items-center justify-start select-none pointer-events-none overflow-hidden">
                      <span className="text-[12vw] lg:text-[8vw] font-bold text-neutral-900/10 tracking-tighter leading-none select-none">
                        Jsooonx
                      </span>
                    </div>

                    <div className="flex flex-col relative z-10">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.05 * index }}
                          className="border-b border-neutral-900/60"
                        >
                          <a
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="flex items-center justify-between py-4 group transition-all duration-300"
                          >
                            <TextRoll 
                              text={item.title} 
                              className="text-white text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-neutral-300 transition-colors duration-300" 
                            />
                            <span className="text-neutral-500 font-sans text-xs pr-2 select-none">
                              {item.number}
                            </span>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Mountains Studio Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[16/9] border border-neutral-900/60 flex items-center justify-center group select-none"
                  >
                    <img
                      src="/menu_mountain.png"
                      alt="Jsooonx Studio Mountains landscape"
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                    
                    <div className="absolute top-4 w-full text-center">
                      <span className="text-white font-semibold text-xs tracking-tight">
                        Jsooonx® Studio
                      </span>
                    </div>
                    <div className="absolute bottom-4 w-full text-center">
                      <span className="text-neutral-400 font-light text-[10px] tracking-wider">
                        © 2025 All rights reserved
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Footer Area */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-t border-neutral-900/60 py-6 text-[12.5px]">
                  {/* Left info */}
                  <div className="flex flex-col space-y-0.5">
                    <a href="mailto:hello@kanso.studio" className="group text-white transition-colors duration-300 w-fit">
                      <TextRoll text="hello@kanso.studio" className="font-semibold text-white group-hover:text-neutral-300" />
                    </a>
                    <span className="text-neutral-500 text-[11.5px] select-none">
                      (123) 456-7890
                    </span>
                  </div>
                  
                  {/* Right social links */}
                  <div className="flex items-center space-x-5">
                    <a href="#twitter" className="group text-neutral-400 transition-colors duration-300">
                      <TextRoll text="Twitter/X" className="font-medium text-[12px] text-neutral-400 group-hover:text-white" />
                    </a>
                    <a href="#instagram" className="group text-neutral-400 transition-colors duration-300">
                      <TextRoll text="Instagram" className="font-medium text-[12px] text-neutral-400 group-hover:text-white" />
                    </a>
                    <a href="#linkedin" className="group text-neutral-400 transition-colors duration-300">
                      <TextRoll text="LinkedIn" className="font-medium text-[12px] text-neutral-400 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};
