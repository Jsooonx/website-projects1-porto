import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, type Variants } from 'framer-motion';

// Tech stack inline icons
const NextjsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-white transition-colors duration-300">
    <path d="M64 0C28.66 0 0 28.66 0 64s28.66 64 64 64 64-28.66 64-64S99.34 0 64 0zm37.21 95.83l-45.72-58.82V88.8h-7.39V29.8h6.14l42.66 55.07V29.8h7.39v66.03h-3.08z" fill="currentColor"/>
  </svg>
);

const NodejsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-[#68A063] transition-colors duration-300">
    <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm0 15.5l-6-3.4v-6.7l6 3.4v6.7zm0-8.5L6 5.6l6-3.4 6 3.4-6 3.4zm6 5.1l-6 3.4V11l6-3.4v5.9z" fill="currentColor"/>
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
    <span ref={ref} className="tabular-nums inline-flex items-center overflow-hidden">
      {digits.map((d, i) => (
        <RollingDigit key={i} value={Number(d)} />
      ))}
      {suffix && <span className="ml-0.5 select-none">{suffix}</span>}
    </span>
  );
};

export const About: React.FC = () => {
  const techStack = [
    { name: 'React', icon: <img src="/icons/react.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="React" /> },
    { name: 'TypeScript', icon: <img src="/icons/typescript.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="TypeScript" /> },
    { name: 'Tailwind CSS', icon: <img src="/icons/tailwind.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="Tailwind CSS" /> },
    { name: 'Framer Motion', icon: <img src="/icons/framer.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="Framer Motion" /> },
    { name: 'Figma', icon: <img src="/icons/figma.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="Figma" /> },
    { name: 'JavaScript', icon: <img src="/icons/javascript.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="JavaScript" /> },
    { name: 'Python', icon: <img src="/icons/python.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="Python" /> },
    { name: 'C++', icon: <img src="/icons/cpp.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="C++" /> },
    { name: 'C', icon: <img src="/icons/c.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="C" /> },
    { name: 'HTML', icon: <img src="/icons/html.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="HTML" /> },
    { name: 'CSS', icon: <img src="/icons/css.png" className="h-3.5 w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" alt="CSS" /> },
    { name: 'Next.js', icon: <NextjsIcon /> },
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
            {/* Card 01 - 1+ Years */}
            <div className="bg-neutral-950 border border-neutral-900/60 rounded-2xl p-6 flex flex-col justify-between h-28 relative">
              <span className="absolute top-4 right-6 text-[10px] text-neutral-500 font-mono tracking-wider">01</span>
              <span className="text-white text-4xl md:text-5xl font-sans font-light tracking-tight mt-auto">
                <CountUpNumber target={1} suffix="+" />
              </span>
            </div>

            {/* Card 02 - 100% Dedication */}
            <div className="bg-neutral-950 border border-neutral-900/60 rounded-2xl p-6 flex flex-col justify-between h-28 relative">
              <span className="absolute top-4 right-6 text-[10px] text-neutral-500 font-mono tracking-wider">02</span>
              <span className="text-white text-4xl md:text-5xl font-sans font-light tracking-tight mt-auto">
                <CountUpNumber target={100} suffix="%" />
              </span>
            </div>

            {/* Card 03 - Craft & Experience */}
            <div className="bg-neutral-950 border border-neutral-900/60 rounded-2xl p-6 flex flex-col justify-between h-48 relative">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider text-right font-light leading-snug">
                Years of visual<br />& code craft
              </span>
              <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-[90%]">
                Over 1 year of self-driven experimentation and building high-fidelity visual interfaces.
              </p>
            </div>

            {/* Card 04 - Technical Dedication */}
            <div className="bg-neutral-950 border border-neutral-900/60 rounded-2xl p-6 flex flex-col justify-between h-48 relative">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider text-right font-light leading-snug">
                Commitment to<br />pixel perfection
              </span>
              <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-[90%]">
                Ensuring every layout, micro-interaction, and transition is polished to the highest standard.
              </p>
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
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-neutral-900/60 bg-neutral-950 flex items-center justify-center p-12"
          >
            {/* Floating White Dot in Top Right */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/90 z-20 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
            
            <img 
              src="/logo/jsooonx_logo.png" 
              alt="Jsooonx Logo"
              className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-700 hover:scale-[1.05]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
