import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { TextRoll } from './TextRoll';

// SVG Icons for the Streamlined Process cards
const LightningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors duration-500">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors duration-500">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L18.5 4.5l-3-3L4.5 16.5z" />
    <path d="M12 15l9 9M9 12l9 9" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors duration-500">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-neutral-500 group-hover:text-white transition-colors duration-300">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);



export const WhyUs: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const blurRevealVariants: Variants = {
    hidden: { filter: 'blur(12px)', opacity: 0, y: 40 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const processCards = [
    {
      icon: <LightningIcon />,
      title: 'Streamlined Process',
      desc: 'Our focused, step-by-step approach saves time and keeps projects moving smoothly.',
    },
    {
      icon: <RocketIcon />,
      title: 'Scalable Design',
      desc: 'We create systems that grow with your brand and stay effective over time.',
    },
    {
      icon: <ClockIcon />,
      title: '24/7 Dedicated Support',
      desc: "We're always here when you need us, ready to answer questions, provide updates.",
    },
  ];

  const checkList = [
    'Collaborative Approach',
    'Quick turnaround',
    'Clear Communication',
    'Consistent Quality',
    'Reliable Support',
  ];



  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="w-full mt-24 pt-20 border-t border-neutral-900/60 flex flex-col font-sans select-none"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between w-full mb-10">
        <span className="text-neutral-400 font-mono text-xs md:text-sm tracking-wider">
          /Why us
        </span>
        <span className="text-neutral-500 font-mono text-xs md:text-sm tracking-wider">
          (03)
        </span>
      </div>

      {/* Main Heading Statement */}
      <h2 className="text-3xl md:text-5xl lg:text-[54px] font-sans font-light tracking-tight text-white mb-16 leading-[1.1] max-w-4xl flex flex-wrap">
        {"We cut through noise to create designs that".split(" ").map((word, idx) => (
          <motion.span key={idx} variants={blurRevealVariants} className="inline-block mr-3">
            {word}
          </motion.span>
        ))}
        {" are thoughtful, timeless, and impactful.".split(" ").map((word, idx) => (
          <motion.span key={`dim-${idx}`} variants={blurRevealVariants} className="inline-block mr-3 text-neutral-600">
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Grid Layout (Recreating Reference Blueprint) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full items-stretch">
        
        {/* ROW 1 LEFT: Process Cards Column (Col Span 6) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {processCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="bg-neutral-950/40 border border-neutral-900 rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[145px] hover:border-neutral-800 transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="text-white font-sans font-semibold text-base md:text-lg">
                  {card.title}
                </h3>
              </div>
              <p className="text-neutral-400 font-sans font-light text-xs md:text-sm leading-relaxed max-w-[90%]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ROW 1 RIGHT: Large Silhouette Image Card (Col Span 6) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 bg-neutral-950 border border-neutral-900 rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full relative group flex flex-col justify-between p-8"
        >
          {/* Grayscale Silhouette Image with Subtle Hover Zoom */}
          <img
            src="/why_silhouette.png"
            alt="Jsooonx Design Silhouette Portrait"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-[1000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70 pointer-events-none" />

          {/* Top Label */}
          <div className="relative z-10 w-full text-center">
            <span className="text-white font-sans tracking-widest text-[11px] uppercase font-light opacity-90">
              Jsooonx®
            </span>
          </div>

          {/* Bottom Bold Statement */}
          <div className="relative z-10 w-full text-center mt-auto flex flex-col items-center">
            <h3 className="text-white font-sans font-bold text-2xl md:text-3xl tracking-tight leading-none mb-1">
              Design with intent.
            </h3>
            <span className="text-neutral-400 font-sans text-xs md:text-sm font-light">
              No excess, no fluff.
            </span>
          </div>
        </motion.div>

        {/* ROW 2 LEFT: Skyscraper Card + Check Items List (Col Span 6) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <motion.div
            variants={itemVariants}
            className="bg-neutral-950 border border-neutral-900 rounded-3xl overflow-hidden aspect-[16/10] relative flex flex-col justify-between p-6 md:p-8"
          >
            {/* Grayscale Skyscraper Image */}
            <img
              src="/why_skyscraper.png"
              alt="Purposeful Design Skyscraper Landscape"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.8] group-hover:scale-[1.02] group-hover:opacity-90 transition-all duration-[1000ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/35 pointer-events-none" />

            {/* Top Text Overlay */}
            <h3 className="relative z-10 text-white font-sans text-xl md:text-2xl font-light tracking-tight max-w-[85%] leading-snug">
              Purposeful Design for Modern Brands.
            </h3>

            {/* Bottom Footer Content */}
            <div className="relative z-10 flex justify-between items-end w-full">
              <span className="text-neutral-400 font-mono text-[10px] md:text-xs">
                © 2025
              </span>
              <button className="group bg-white text-black font-sans text-xs font-semibold px-4.5 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-lg shadow-black/30">
                <TextRoll text="Get started +" className="font-semibold text-xs" />
              </button>
            </div>
          </motion.div>

          {/* List of items */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col border-t border-neutral-900/60 pt-2"
          >
            {checkList.map((item) => (
              <div
                key={item}
                className="group flex items-center justify-between py-3 border-b border-neutral-900/40 text-neutral-300 hover:text-white transition-colors duration-300 cursor-default"
              >
                <span className="font-sans font-light text-xs md:text-sm">
                  {item}
                </span>
                <PlusCircleIcon />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2 RIGHT: Collaborate CTA Card with Silk Waves Backdrop (Col Span 6) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 bg-neutral-950 border border-neutral-900 rounded-3xl overflow-hidden relative group/card flex flex-col justify-between p-6 md:p-8 min-h-[380px] lg:min-h-0"
        >
          {/* Silk Waves Backdrop Pattern */}
          <img
            src="/why_testimonial_bg.png"
            alt="Collaborate Background"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover/card:scale-[1.02] group-hover/card:opacity-100 transition-all duration-[1000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70 pointer-events-none" />

          {/* Top Row: Availability Badge */}
          <div className="relative z-10 flex flex-wrap gap-4 items-center justify-between w-full mb-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-neutral-300 font-sans font-light tracking-wide uppercase">
                Currently Open for Bookings
              </span>
            </div>
          </div>

          {/* Bottom Area: Call to Action */}
          <div className="relative z-10 flex flex-col gap-6 mt-auto">
            {/* Title & Description */}
            <div className="flex flex-col gap-2.5">
              <h3 className="text-white font-sans font-medium text-2xl md:text-3xl tracking-tight leading-tight">
                Let's collaborate on your next digital venture.
              </h3>
              <p className="text-neutral-400 font-sans font-light text-sm leading-relaxed max-w-[95%]">
                Your brand identity or digital product deserves a thoughtful, minimal, and high-performance design system. Let's work together to bring it to life.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-6 py-3 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 font-sans font-medium text-xs md:text-sm flex items-center gap-1.5 border border-white hover:border-black shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
              >
                <TextRoll text="Book a discovery call →" className="font-medium text-xs md:text-sm" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
