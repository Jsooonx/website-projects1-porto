import React from 'react';
import { motion } from 'framer-motion';

export const HeroTitle: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px 0px -50px 0px' }}
      className="px-1.5 md:px-3 py-10 md:py-16 flex flex-col md:flex-row md:items-end justify-between gap-6 w-full select-none"
    >
      <div className="w-full md:w-[70%] overflow-hidden">
        <motion.h1
          variants={{
            hidden: { y: "80%", opacity: 0, filter: 'blur(8px)' },
            visible: { y: 0, opacity: 1, filter: 'blur(0px)' }
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-bold leading-[0.85] tracking-[-0.04em] text-white flex items-center gap-3 md:gap-4.5"
        >
          <img src="/logo/jsooonx_logo.png" className="h-[9.5vw] w-[9.5vw] md:h-[7vw] md:w-[7vw] object-contain flex-shrink-0" alt="Jsooonx Logo" />
          <span>Jsooonx</span>
          <span className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] font-medium ml-1 leading-none tracking-normal">
            ®
          </span>
        </motion.h1>
      </div>

      {/* Editorial Paragraph */}
      <div className="w-full md:w-[26%] flex justify-end">
        <motion.p
          variants={{
            hidden: { y: 20, opacity: 0, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
          }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-[15px] font-normal leading-[1.4] text-neutral-400 text-left md:text-right max-w-xs md:max-w-none"
        >
          Jsooonx is a design studio crafting modern brand identities and refined web experiences.
        </motion.p>
      </div>
    </motion.section>
  );
};
