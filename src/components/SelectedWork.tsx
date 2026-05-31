/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { WhyUs } from './WhyUs';

export interface Project {
  id: string;
  name: string;
  year: string;
  category: string;
  background: string;
  colorTheme: string;
  logo: React.ReactNode;
  shortDesc: string;
  longDesc: string;
  challenge: string;
  solution: string;
  techStack: string[];
  role: string;
  client: string;
}

export const projectsData: Project[] = [
  {
    id: 'boltshift',
    name: 'Boltshift',
    year: '/2025',
    category: 'Fintech Platform',
    background: '/boltshift_bg.png',
    colorTheme: '#D2B48C', // Tan/Beige
    logo: (
      <div className="flex items-center gap-3 text-white">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <span className="text-2xl font-bold font-sans tracking-tight">Boltshift</span>
      </div>
    ),
    shortDesc: 'A curated digital experience for a global technology consultancy, blending high-end performance with editorial layout.',
    longDesc: 'Boltshift is a modern tech consulting firm. We designed and built their entire corporate platform, focusing on high-performance page loads, fluid editorial layouts, and a custom interactive client portal. The interface uses a warm, sandy beige palette contrasting with crisp typography to reflect their sophisticated approach to technology.',
    challenge: 'The client needed to communicate complex engineering solutions to executive stakeholders while establishing a bold, authoritative visual identity that stands out from typical corporate tech designs.',
    solution: 'We developed an editorial-driven layout highlighting their core methodologies with interactive custom widgets and a refined typography system. By integrating dynamic loaders and smooth pagination, we built an immersive narrative.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'GraphQL'],
    role: 'Creative Direction, UI/UX Design, Frontend Architecture',
    client: 'Boltshift Inc.'
  },
  {
    id: 'ephemeral',
    name: 'Ephemeral',
    year: '/2025',
    category: 'Creative Studio',
    background: '/ephemeral_bg.png',
    colorTheme: '#1e3a8a', // Deep Blue
    logo: (
      <div className="flex items-center gap-3 text-white">
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-2xl font-bold font-sans tracking-tight">Ephemeral</span>
      </div>
    ),
    shortDesc: 'A high-fidelity immersive web platform for an international creative studio, featuring complex webgl transitions.',
    longDesc: 'Ephemeral is a leading digital creative agency. We collaborated to build their portfolio platform, emphasizing deep immersion, WebGL canvas transitions, and an audio-visual narrative style. The visual structure centers around high-contrast macro imagery and interactive scroll effects.',
    challenge: 'Visual portfolio elements were getting lost in traditional grid structures. The client wanted an experience that feels alive, responsive, and mirrors their physical gallery installations.',
    solution: 'We engineered custom shaders to morph project cover images on scroll and mouse movements. Combined with spatialized sound design on interactions, the digital gallery replicates an abstract physical exhibition.',
    techStack: ['React', 'Three.js', 'WebGL shaders', 'Tailwind CSS'],
    role: 'Shader Development, Interactive Design, Creative Tech',
    client: 'Ephemeral Agency'
  },
  {
    id: 'capsule',
    name: 'Capsule',
    year: '/2024',
    category: 'E-commerce Platform',
    background: '/capsule_bg.png',
    colorTheme: '#2d3748', // Gray
    logo: (
      <div className="flex items-center gap-3 text-white">
        <div className="w-8 h-10 border-2 border-white rounded-full flex items-center justify-center rotate-45 shadow-md">
          <div className="w-full h-1/2 border-t-2 border-white" />
        </div>
        <span className="text-2xl font-bold font-sans tracking-tight">Capsule</span>
      </div>
    ),
    shortDesc: 'A headless e-commerce experience for a luxury wellness brand, featuring lightning-fast page loading and checkout.',
    longDesc: 'Capsule is a luxury wellness brand. We engineered their headless e-commerce store from the ground up, integrating Shopify Storefront API with a custom Next.js frontend. The design system is strictly monochromatic and editorial, placing emphasis on product typography and high-end photography.',
    challenge: 'Existing e-commerce platforms suffered from high latency during checkout, leading to cart abandonment. The visual interface lacked the high-end feel of the physical stores.',
    solution: 'We built a custom headless infrastructure optimized with static regeneration. We created a bespoke modular layout system that allows their design team to update visual collections seamlessly.',
    techStack: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Radix UI'],
    role: 'Full-Stack Engineering, E-commerce Architecture',
    client: 'Capsule Wellness Group'
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    year: '/2025',
    category: 'Design Sandbox',
    background: '/sandwich_bg.png',
    colorTheme: '#c2410c', // Orange/Terracotta
    logo: (
      <div className="flex items-center gap-3 text-white">
        <div className="flex flex-col gap-1 w-8">
          <div className="h-1.5 w-full bg-white rounded" />
          <div className="h-1.5 w-[85%] bg-white/70 rounded" />
          <div className="h-1.5 w-full bg-white rounded" />
        </div>
        <span className="text-2xl font-bold font-sans tracking-tight">Sandwich</span>
      </div>
    ),
    shortDesc: 'An interactive design playground and catalog showcasing digital products and architectural prototypes.',
    longDesc: 'Sandwich is an experimental design studio. We crafted a highly interactive playground that lets users browse their catalog of physical and digital products using a customized 3D physics-based layout. The interface uses a vibrant terracotta orange palette to capture their bold, tactile design philosophy.',
    challenge: 'Creating an online product archive that does not feel like a static spreadsheet. The client wanted to display diverse items in a playful yet structured format.',
    solution: 'We developed a interactive grid containing 3D models of their physical objects. Users can drag, rotate, and interact with products directly, creating a tactile and memorable catalog.',
    techStack: ['Vite', 'React Three Fiber', 'CannonJS', 'Tailwind CSS'],
    role: 'Physics Engine Integration, Frontend UI Development',
    client: 'Sandwich Laboratory'
  },
  {
    id: 'polytype',
    name: 'Polytype',
    year: '/2024',
    category: 'Typography Specimen',
    background: '/polytype_bg.png',
    colorTheme: '#111827', // Stark Dark
    logo: (
      <div className="flex items-center gap-3 text-white">
        <div className="w-9 h-9 border-2 border-white font-mono font-bold text-lg flex items-center justify-center shadow-sm">
          P
        </div>
        <span className="text-2xl font-bold font-sans tracking-tight">Polytype</span>
      </div>
    ),
    shortDesc: 'A typographic playground and e-commerce specimen tool for a modern independent font foundry.',
    longDesc: 'Polytype is an independent digital type foundry. We built their specimen showcase and web shop, creating a bespoke typographic editor that allows designers to test variable fonts in real time. The layout uses stark black-and-white grid structures inspired by Swiss modernism.',
    challenge: 'Foundry platforms often have static specimen sheets, making it difficult for buyers to test variable font axes (weight, width, slant) before buying.',
    solution: 'We engineered an interactive variable font playground that maps mouse coordinates and scroll triggers directly to OpenType font variations, letting users play with variables instantly.',
    techStack: ['React', 'OpenType.js', 'Tailwind CSS', 'CSS Variables'],
    role: 'Lead Developer, Variable Font Specimen Architect',
    client: 'Polytype Foundry'
  },
  {
    id: 'lumina',
    name: 'Lumina',
    year: '/2025',
    category: 'SaaS Platform',
    background: '/lumina_bg.png',
    colorTheme: '#5b21b6', // Violet
    logo: (
      <div className="flex items-center gap-3 text-white">
        <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center relative shadow-md">
          <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
        </div>
        <span className="text-2xl font-bold font-sans tracking-tight">Lumina</span>
      </div>
    ),
    shortDesc: 'A comprehensive real-time dashboard and analytics suite with premium glassmorphic data widgets.',
    longDesc: 'Lumina is a real-time data analytics company. We redesigned their core SaaS dashboard, creating a visual layout that translates raw metrics into clean, readable graphs. Using a deep violet dark-mode layout with subtle refractions, the dashboard provides a premium aesthetic that doesn\'t compromise on information density.',
    challenge: 'SaaS products often sacrifice high-end aesthetics for usability. Lumina wanted a tool that feels premium and executive-ready while retaining extreme utility.',
    solution: 'We implemented a custom component system utilizing glassmorphic layers and optimized Canvas animations. Chart elements dynamically interpolate values with smooth spring animations.',
    techStack: ['Next.js', 'Chart.js', 'Tailwind CSS', 'Framer Motion'],
    role: 'SaaS Design System, Chart Logic Architect',
    client: 'Lumina Analytics'
  }
];

interface SelectedWorkProps {
  onNavigateToProject?: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onNavigateToProject }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section 
      id="projects" 
      className="w-full px-1.5 md:px-3 py-20 md:py-28 border-t border-neutral-900/60 flex flex-col items-center select-none"
    >
      {/* Editorial Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full mb-16 md:mb-24">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white mb-6">
            Selected Work.
          </h2>
          <p className="text-base md:text-[18px] text-neutral-400 font-sans font-light leading-relaxed max-w-[90%]">
            A curated selection of projects that reflect our commitment to simplicity and purposeful design.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end justify-between md:h-[120px] self-start md:self-auto">
          <span className="text-neutral-500 font-mono text-xs md:text-sm tracking-wider md:mb-8">(03)</span>
          <a 
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors duration-300 font-sans font-medium text-xs md:text-sm flex items-center gap-1.5 shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
          >
            View all projects <span className="text-xs font-semibold">+</span>
          </a>
        </div>
      </div>

      {/* Grid of Portfolio Cards (2-Column Layout) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px 0px -100px 0px' }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4 w-full"
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="w-full">
            <a
              href={`#project/${project.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigateToProject?.(project.id);
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
              <div className="relative w-full aspect-[4/3] rounded-b-2xl overflow-hidden bg-neutral-950 flex items-center justify-center">
                <img 
                  src={project.background} 
                  alt={`${project.name} Portfolio Showcase Background Mockup`} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.85] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-[1000ms] ease-[0.16,1,0.3,1]"
                />
                
                {/* Dark Vignette Overlay for Premium Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/30 group-hover:from-black/35 group-hover:to-black/20 transition-all duration-[1000ms]" />

                {/* SVG Logo Center Stage */}
                <div className="relative z-10 scale-[0.95] group-hover:scale-100 opacity-90 group-hover:opacity-100 transition-all duration-[1000ms] ease-[0.16,1,0.3,1]">
                  {project.logo}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Us / Why Me Section */}
      <WhyUs />
    </section>
  );
};
