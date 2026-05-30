import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, type Variants } from 'framer-motion';

// Tech stack inline icons
const ReactIcon = () => (
  <svg width="14" height="14" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-[#61DAFB] transition-colors duration-300">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TypeScriptIcon = () => (
  <svg width="14" height="14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-[#3178C6] transition-colors duration-300">
    <path d="M0 0h100v100H0z" fill="none"/>
    <path d="M100 0H0v100h100V0zM61.85 71.37c0 4.19-2.02 7.82-6.52 9.77-3.92 1.69-9.15 2.1-13.43 1.15-4.52-1-8.23-3.7-10.42-8l5.93-3.8c1.55 2.87 3.86 4.79 6.84 5.34 2.87.54 6.27-.14 7.64-1.89 1.01-1.28 0.95-3.38-.27-4.47-1.42-1.28-4.19-2.3-7.23-3.38-5.34-1.89-11-4.26-11.42-11.22-.34-5.27 2.84-10.21 8.25-12.03 4.26-1.42 9.87-1.35 13.93-.14 4.53 1.35 7.64 4.53 9.4 8.52l-5.68 3.8c-1.35-2.64-3.11-4.13-5.61-4.73-2.64-.61-5.75-.27-6.9 1.15-1.01 1.22-.61 2.84.47 3.65 1.55 1.15 4.53 2.16 7.64 3.25 5.75 2.03 11.63 4.19 12 11.49.2 1.43.2 2.91.2 4.26zm28.87-23h-9.94v29.62h-7.64V48.37h-9.94v-6.62h27.52v6.62z" fill="currentColor"/>
  </svg>
);

const TailwindIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-[#38BDF8] transition-colors duration-300">
    <path d="M12 6C9 6 7.2 7.5 6.6 10.5C7.5 9.3 8.7 8.7 10.2 8.7C12.6 8.7 14.1 10.2 14.7 12.6C15.3 15 17.1 16.5 20.1 16.5C23.1 16.5 24.9 15 25.5 12C24.6 13.2 23.4 13.8 21.9 13.8C19.5 13.8 18 12.3 17.4 9.9C16.8 7.5 15 6 12 6ZM6.6 12C3.6 12 1.8 13.5 1.2 16.5C2.1 15.3 3.3 14.7 4.8 14.7C7.2 14.7 8.7 16.2 9.3 18.6C9.9 21 11.7 22.5 14.7 22.5C17.7 22.5 19.5 21 20.1 18C19.2 19.2 18 19.8 16.5 19.8C14.1 19.8 12.6 18.3 12 15.9C11.4 13.5 9.6 12 6.6 12Z" fill="currentColor"/>
  </svg>
);

const FramerMotionIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-[#FF00C7] transition-colors duration-300">
    <path d="M0 0h24v12H12v12L0 12z" fill="currentColor" />
  </svg>
);

const NextjsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-white transition-colors duration-300">
    <path d="M64 0C28.66 0 0 28.66 0 64s28.66 64 64 64 64-28.66 64-64S99.34 0 64 0zm37.21 95.83l-45.72-58.82V88.8h-7.39V29.8h6.14l42.66 55.07V29.8h7.39v66.03h-3.08z" fill="currentColor"/>
  </svg>
);

const FigmaIcon = () => (
  <svg width="10" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 transition-colors duration-300">
    <path d="M19 28.5C19 23.3 14.8 19 9.5 19C4.2 19 0 23.3 0 28.5C0 33.7 4.2 38 9.5 38H19V28.5Z" fill="currentColor" className="group-hover:!fill-[#a259ff] transition-colors duration-300" />
    <path d="M19 9.5C19 4.3 14.8 0 9.5 0C4.2 0 0 4.3 0 9.5C0 14.7 4.2 19 9.5 19H19V9.5Z" fill="currentColor" className="group-hover:!fill-[#f24e1e] transition-colors duration-300" />
    <path d="M38 9.5C38 4.3 33.8 0 28.5 0C23.2 0 19 4.3 19 9.5V19H28.5C33.8 19 38 14.7 38 9.5Z" fill="currentColor" className="group-hover:!fill-[#ff7262] transition-colors duration-300" />
    <path d="M38 28.5C38 23.3 33.8 19 28.5 19H19V38H28.5C33.8 38 38 33.7 38 28.5Z" fill="currentColor" className="group-hover:!fill-[#18a0fb] transition-colors duration-300" />
    <path d="M19 47.5C19 42.3 14.8 38 9.5 38C4.2 38 0 42.3 0 47.5C0 52.7 4.2 57 9.5 57C14.8 57 19 52.7 19 47.5Z" fill="currentColor" className="group-hover:!fill-[#1abc9c] transition-colors duration-300" />
  </svg>
);

const NodejsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-[#68A063] transition-colors duration-300">
    <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm0 15.5l-6-3.4v-6.7l6 3.4v6.7zm0-8.5L6 5.6l6-3.4 6 3.4-6 3.4zm6 5.1l-6 3.4V11l6-3.4v5.9z" fill="currentColor"/>
  </svg>
);

// Mock LogoIpsum SVGs for Card 04
const LogoIpsum1 = () => (
  <svg width="48" height="16" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-500 opacity-60 hover:opacity-100 hover:text-white transition-all duration-300">
    <rect x="0" y="5" width="16" height="16" fill="currentColor" rx="2" />
    <circle cx="28" cy="13" r="8" fill="currentColor" />
    <circle cx="46" cy="13" r="5" fill="currentColor" />
  </svg>
);

const LogoIpsum2 = () => (
  <svg width="48" height="16" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-500 opacity-60 hover:opacity-100 hover:text-white transition-all duration-300">
    <path d="M0 10 Q 10 5, 20 10 T 40 10" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M0 17 Q 10 12, 20 17 T 40 17" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M0 24 Q 10 19, 20 24 T 40 24" stroke="currentColor" strokeWidth="3" fill="none" />
  </svg>
);

const LogoIpsum3 = () => (
  <svg width="48" height="16" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-500 opacity-60 hover:opacity-100 hover:text-white transition-all duration-300">
    <circle cx="15" cy="15" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M13 8 L18 13 L12 15 L17 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

/* ─── Counting Digits (odometer-style) ─── */

/* ─── Counting Digits (odometer-style) ─── */

const RollingDigit: React.FC<{ value: number }> = ({ value }) => (
  <span className="relative inline-block w-[0.58em] h-[1em] overflow-hidden align-middle">
    <motion.span
      animate={{ y: `-${value * 10}%` }}
      transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.8 }}
      className="absolute left-0 top-0 flex flex-col w-full h-[1000%]"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <span key={n} className="h-[10%] flex items-center justify-center leading-none">
          {n}
        </span>
      ))}
    </motion.span>
  </span>
);

const CountUpNumber: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const animate = useCallback(() => {
    const start = performance.now();
    const duration = 2000; // 2 seconds counting duration

    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * target));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    if (!inView) return;
    animate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, animate]);

  const digits = String(count).padStart(String(target).length, '0').split('');

  return (
    <span ref={ref} className="tabular-nums inline-flex items-baseline overflow-hidden">
      {digits.map((d, i) => (
        <RollingDigit key={i} value={Number(d)} />
      ))}
      {suffix && <span className="ml-0.5 align-baseline">{suffix}</span>}
    </span>
  );
};

export const About: React.FC = () => {
  const techStack = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Framer Motion', icon: <FramerMotionIcon /> },
    { name: 'Next.js', icon: <NextjsIcon /> },
    { name: 'Figma', icon: <FigmaIcon /> },
    { name: 'Node.js', icon: <NodejsIcon /> },
  ];

  // Motion variants for staggered animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const blurRevealVariants: Variants = {
    hidden: { filter: 'blur(12px)', opacity: 0, y: 40 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageFlipVariants: Variants = {
    hidden: { rotateY: 180, opacity: 0, scale: 0.9, filter: 'blur(8px)' },
    visible: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-150px 0px -150px 0px' }}
      variants={containerVariants}
      className="w-full px-1.5 md:px-3 py-20 md:py-28 border-t border-neutral-900/60 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch overflow-hidden select-none font-sans"
    >
      {/* Left Column: Text Content & Stack & Stats Cards */}
      <div className="lg:col-span-7 flex flex-col justify-between lg:h-full">
        <div>
          <h2 className="text-5xl md:text-7xl font-sans font-light tracking-tight text-white mb-6 flex flex-wrap">
            {"Meet Jsooonx".split(" ").map((word, idx) => (
              <motion.span 
                key={idx} 
                variants={blurRevealVariants} 
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-[18px] text-neutral-400 font-sans font-light leading-relaxed mb-8 max-w-[92%]"
          >
            I'm Jsooonx, a passionate Creative Developer & UI/UX Designer based in Tokyo. 
            I specialize in crafting bold interactive websites and visual experiences 
            that captivate and inspire, blending front-end craftsmanship with clean 
            design to elevate brands.
          </motion.p>

          {/* First Divider */}
          <motion.div variants={itemVariants} className="w-full border-t border-neutral-900/60 my-6" />

          {/* Tech Stack Tags */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-2.5 my-2"
          >
            {techStack.map((tech) => (
              <div 
                key={tech.name} 
                className="group flex items-center gap-2 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 rounded-lg px-4 py-2 text-xs md:text-sm font-sans font-light text-neutral-400 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div>
          {/* Divider */}
          <motion.div variants={itemVariants} className="w-full border-t border-neutral-900/60 my-6" />

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 pt-2 w-full font-sans"
          >
            {/* Card 01 - 50+ */}
            <div className="bg-neutral-950 border border-neutral-900/60 rounded-2xl p-6 flex flex-col justify-between h-28 relative">
              <span className="absolute top-4 right-6 text-[10px] text-neutral-500 font-mono tracking-wider">01</span>
              <span className="text-white text-4xl md:text-5xl font-sans font-light tracking-tight mt-auto">
                <CountUpNumber target={50} suffix="+" />
              </span>
            </div>

            {/* Card 02 - 95% */}
            <div className="bg-neutral-950 border border-neutral-900/60 rounded-2xl p-6 flex flex-col justify-between h-28 relative">
              <span className="absolute top-4 right-6 text-[10px] text-neutral-500 font-mono tracking-wider">02</span>
              <span className="text-white text-4xl md:text-5xl font-sans font-light tracking-tight mt-auto">
                <CountUpNumber target={95} suffix="%" />
              </span>
            </div>

            {/* Card 03 - Successful Projects */}
            <div className="bg-neutral-950 border border-neutral-900/60 rounded-2xl p-6 flex flex-col justify-between h-48 relative">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider text-right font-light leading-snug">
                Successful projects<br />completed
              </span>
              <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-[90%]">
                We've delivered 50+ projects that help companies generate real results.
              </p>
            </div>

            {/* Card 04 - Customer Satisfaction */}
            <div className="bg-neutral-950 border border-neutral-900/60 rounded-2xl p-6 flex flex-col justify-between h-48 relative">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider text-right font-light leading-snug">
                Customer<br />satisfaction rate
              </span>
              <div className="flex items-center gap-4 mt-auto">
                <LogoIpsum1 />
                <LogoIpsum2 />
                <LogoIpsum3 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Column: Editorial Image Card */}
      <div 
        style={{ perspective: 1200 }}
        className="lg:col-span-5 w-full flex justify-center lg:justify-end"
      >
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={imageFlipVariants}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full max-w-[480px] lg:max-w-none aspect-[4/5] rounded-2xl cursor-pointer"
        >
          {/* Card Back (Faces forward when rotated 180deg) */}
          <div 
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            className="absolute inset-0 w-full h-full rounded-2xl border border-neutral-900/60 bg-neutral-950 flex items-center justify-center select-none"
          >
            <span className="text-neutral-500 font-sans tracking-widest text-[11px] uppercase font-light">Jsooonx®</span>
          </div>

          {/* Card Front (Faces forward when rotated 0deg) */}
          <div 
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-neutral-900/60 bg-neutral-950"
          >
            {/* Floating White Dot in Top Right */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/90 z-20 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
            
            <img 
              src="/about_portrait_male.png" 
              alt="Jsooonx About Portrait"
              className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
