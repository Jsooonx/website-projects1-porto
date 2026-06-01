import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from './SelectedWork';
import { TextRoll } from './TextRoll';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const project = projectsData.find((p) => p.id === projectId);

  // Safety-net scroll-to-top for direct URL access.
  // useLayoutEffect fires before paint so the user never sees the wrong position.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans">
        <h2 className="text-2xl font-light mb-4">Project not found</h2>
        <button 
          onClick={onBack}
          className="group px-6 py-2.5 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 font-medium text-sm border border-white hover:border-black"
        >
          <TextRoll text="Go Back" className="font-medium text-sm" />
        </button>
      </div>
    );
  }

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen bg-black text-white py-16 px-4 md:px-8 flex flex-col items-center select-none font-sans"
    >
      <div className="w-full max-w-[1280px]">
        {/* Navigation Header */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex items-center justify-between border-b border-neutral-900 pb-6 mb-12"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-medium"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Selected Work
          </a>
          <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest">Case Study</span>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-start">
          <div className="lg:col-span-8">
            <motion.h1 
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-6xl md:text-8xl font-sans font-bold tracking-tight text-white mb-6 leading-none"
            >
              {project.name}.
            </motion.h1>
            <motion.p 
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl"
            >
              {project.shortDesc}
            </motion.p>
          </div>
          
          {/* Metadata Grid */}
          <motion.div 
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="lg:col-span-4 grid grid-cols-2 gap-y-8 gap-x-6 pt-4 border-t border-neutral-900 lg:border-t-0"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">Client</span>
              <span className="text-sm font-sans font-light text-neutral-200">{project.client}</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">Year</span>
              <span className="text-sm font-sans font-light text-neutral-200">{project.year.replace('/', '')}</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">Services</span>
              <span className="text-sm font-sans font-light text-neutral-200">{project.category}</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">Role</span>
              <span className="text-sm font-sans font-light text-neutral-200">{project.role.split(',')[0]}</span>
            </div>
          </motion.div>
        </div>

        {/* Immersive Hero Mockup Image */}
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-950 flex items-center justify-center mb-20 border border-neutral-900 shadow-2xl"
        >
          <img 
            src={project.background} 
            alt={`${project.name} Immersive Visual Mockup`} 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" />
          <div className="relative z-10 scale-[1.3] md:scale-[1.6]">
            {project.logo}
          </div>
        </motion.div>

        {/* Detailed Case Study Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-24">
          <div className="lg:col-span-8 flex flex-col gap-16">
            {/* Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col gap-4 border-b border-neutral-950 pb-12"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Project Overview</h3>
              <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed">
                {project.longDesc}
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">The Challenge</h3>
              <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">The Solution</h3>
              <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Sidebar Metadata (Tech Stack) */}
          <div className="lg:col-span-4 flex flex-col gap-12 border-t border-neutral-900 lg:border-t-0 pt-12 lg:pt-0">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-neutral-950 border border-neutral-900 text-neutral-400 rounded-lg px-4 py-2 text-xs font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Core Deliverables</h3>
              <ul className="text-sm font-sans font-light text-neutral-400 flex flex-col gap-2">
                <li>• Design System Systemization</li>
                <li>• Interactive Prototypes & Mockups</li>
                <li>• Production Frontend Implementation</li>
                <li>• Motion & Animation Design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-neutral-900 pt-12 flex items-center justify-between mb-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="group px-6 py-3 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 font-sans font-medium text-xs md:text-sm flex items-center gap-1.5 border border-white hover:border-black shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
          >
            <TextRoll text="← Back to Selected Work" className="font-medium text-xs md:text-sm" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
