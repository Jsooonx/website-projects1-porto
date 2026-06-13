import React, { useLayoutEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { projectsData } from './SelectedWork';

interface ProjectListProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ onBack, onNavigateToProject }) => {
  
  // Scroll to top immediately when mounting
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    hidden: { opacity: 0, y: 35, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full bg-black text-white min-h-screen font-sans pb-32 select-none flex flex-col items-center">
      
      {/* Premium Header Bar */}
      <header className="w-full flex items-center justify-between py-6 px-0 max-w-[90vw] xl:max-w-[1400px]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="text-white font-bold font-sans tracking-tight text-[14px]"
        >
          Jsooonx®
        </a>
        <button
          onClick={onBack}
          className="group flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 hover:border-white text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer"
          aria-label="Back to home"
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </header>

      {/* Main Layout Container */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[90vw] xl:max-w-[1400px] flex flex-col"
      >
        {/* Page Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-[48px] sm:text-[68px] md:text-[88px] lg:text-[108px] font-sans font-bold tracking-tight leading-[0.95] mb-12 text-white"
        >
          All Works.
        </motion.h1>

        {/* Editorial Subheader Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full mb-20 border-b border-neutral-900 pb-12"
        >
          {/* Tag + Main description */}
          <div className="md:col-span-8 flex flex-col md:flex-row items-start gap-6 md:gap-12">
            <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800/80 rounded-full px-3.5 py-1.5 text-[11px] font-mono tracking-wider w-fit text-neutral-400 mt-1 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>Index</span>
            </div>
            <p className="text-white font-sans font-normal text-xl md:text-[24px] leading-snug max-w-[500px]">
              A complete archive of our digital design, frontend engineering, and immersive interactive projects.
            </p>
          </div>
          {/* Right secondary text */}
          <div className="md:col-span-4 flex md:justify-end md:self-stretch items-end">
            <p className="text-neutral-500 font-sans font-light text-xs md:text-sm leading-relaxed max-w-[240px] md:text-right">
              Crafting state-of-the-art web experiences that combine rich aesthetics with flawless technical performance.
            </p>
          </div>
        </motion.div>

        {/* Aligned Grid of Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-stretch w-full">
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="w-full flex">
              <a
                href={`#project/${project.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToProject(project.id);
                }}
                className="group flex flex-col w-full text-left rounded-3xl overflow-hidden border border-neutral-900 bg-neutral-950/40 shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[0.16,1,0.3,1] relative"
              >
                {/* White Tab Header (Card Header) */}
                <div className="bg-white text-black px-6 py-5 rounded-t-2xl flex items-center justify-between transition-colors duration-300">
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-bold text-lg md:text-xl tracking-tight">
                      {project.name}
                    </span>
                    <span className="font-sans font-normal text-xs md:text-sm text-neutral-400">
                      {project.year}
                    </span>
                  </div>
                  {/* Horizontal Three Dots Icon */}
                  <div className="flex items-center gap-1.5 h-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-black transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-black transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-black transition-colors duration-300" />
                  </div>
                </div>

                {/* Bottom mockup image container */}
                <div className={`relative w-full aspect-[4/3] rounded-b-2xl overflow-hidden flex items-center justify-center flex-grow ${project.id === 'scholarhub' ? 'bg-[#fcfcfb]' : 'bg-neutral-950'}`}>
                  <img 
                    src={project.background} 
                    alt={`${project.name} Portfolio Showcase Background Mockup`} 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.85] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-[1000ms] ease-[0.16,1,0.3,1]"
                  />
                  
                  {/* Dark Vignette Overlay for Premium Contrast */}
                  <div className={`absolute inset-0 transition-all duration-[1000ms] ${project.id === 'scholarhub' ? 'bg-black/5 group-hover:bg-black/10' : 'bg-gradient-to-t from-black/45 via-black/10 to-black/30 group-hover:from-black/35 group-hover:to-black/20'}`} />

                  {/* SVG Logo Center Stage */}
                  <div className="relative z-10 scale-[0.95] group-hover:scale-100 opacity-90 group-hover:opacity-100 transition-all duration-[1000ms] ease-[0.16,1,0.3,1]">
                    {project.logo}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </motion.div>

    </div>
  );
};
