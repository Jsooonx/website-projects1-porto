import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scroll on body while loading
    document.body.style.overflow = 'hidden';

    const duration = 1600; // 1.6s counting duration
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out cubic curve
      const eased = 1 - Math.pow(1 - progressRatio, 3);
      const currentVal = Math.floor(eased * 100);
      
      setProgress(currentVal);

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          document.body.style.overflow = '';
          onComplete();
        }, 250);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col justify-between p-10 md:p-16 select-none font-sans text-white pointer-events-auto"
    >
      {/* Top Section */}
      <div className="flex justify-between w-full text-xs md:text-sm text-neutral-500 uppercase tracking-widest font-light">
        <span>Creative Developer</span>
        <span>Jsooonx®</span>
      </div>

      {/* Center Section: Big Typographic Reveal */}
      <div className="flex flex-col items-center justify-center my-auto">
        <motion.h1
          initial={{ filter: 'blur(12px)', opacity: 0, scale: 0.95 }}
          animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight font-sans text-white"
        >
          Jsooonx®
        </motion.h1>
      </div>

      {/* Bottom Section: Progress Odometer */}
      <div className="flex justify-between items-end w-full">
        <span className="text-xs md:text-sm text-neutral-500 max-w-xs font-light leading-relaxed hidden md:block">
          Crafting refined digital experiences with precision and motion.
        </span>
        <div className="text-6xl md:text-8xl font-light font-sans tracking-tighter tabular-nums flex items-baseline ml-auto md:ml-0">
          <span>{String(progress).padStart(3, '0')}</span>
          <span className="text-xl md:text-2xl text-neutral-500 ml-1">%</span>
        </div>
      </div>
    </motion.div>
  );
};
