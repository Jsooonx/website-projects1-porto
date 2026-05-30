import React from 'react';
import { motion } from 'framer-motion';

export const HeroImageCard: React.FC = () => {
  return (
    <section className="w-full px-1.5 md:px-3 pb-16 pt-6 overflow-hidden select-none">
      <motion.div
        initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-100px 0px -100px 0px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[16/10] md:aspect-[16/9] border border-neutral-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Abstract 3D Hero Render */}
        <motion.img
          src="/hero_abstract_blue.png"
          alt="Jsooonx Premium Design Studio Abstract 3D Render"
          className="w-full h-full object-cover object-center"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtle vignette/gradient overlay to match editorial lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
      </motion.div>
    </section>
  );
};
