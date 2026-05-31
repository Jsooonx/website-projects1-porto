import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { TextRoll } from './TextRoll';
import { Pricing } from './Pricing';

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
}

export const Services: React.FC = () => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: 'brand-identity',
      title: 'Brand Identity',
      image: '/services_brand.png',
      description: 'We craft cohesive brand systems that communicate who you are with clarity and intention, from the core idea to every visual expression.',
      tags: [
        'Logo Design',
        'Visual Identity Systems',
        'Brand Guidelines',
        'Typography & Color Systems',
        'Naming & Tone of Voice',
        'Brand Strategy'
      ]
    },
    {
      id: 'digital-design',
      title: 'Digital Design',
      image: '/services_digital.png',
      description: 'We build intuitive, high-performance web and mobile platforms that merge aesthetics with functionality to deliver unforgettable user experiences.',
      tags: [
        'UI/UX Design',
        'Web Design',
        'Mobile Apps',
        'E-Commerce Platforms',
        'Interactive Prototypes',
        'Design Systems'
      ]
    },
    {
      id: 'art-direction',
      title: 'Art Direction',
      image: '/services_art.png',
      description: 'We define the creative vision and visual storytelling of your projects, ensuring consistent aesthetic quality across all physical and digital touchpoints.',
      tags: [
        'Creative Direction',
        'Visual Storytelling',
        'Photography & Styling',
        'Editorial Layouts',
        'Curation',
        'Campaign Visuals'
      ]
    },
    {
      id: 'strategy-consulting',
      title: 'Strategy & Consulting',
      image: '/services_strategy.png',
      description: 'We partner with visionary companies to align design execution with business objectives, identifying positioning opportunities and scaling workflows.',
      tags: [
        'Brand Positioning',
        'UX Strategy',
        'Product Consulting',
        'Design Audits',
        'Competitor Research',
        'Creative Workflows'
      ]
    }
  ];

  const toggleService = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
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
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="w-full px-1.5 md:px-3 py-20 md:py-28 border-t border-neutral-900/60 flex flex-col font-sans select-none"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between w-full mb-16">
        <span className="text-neutral-400 font-mono text-xs md:text-sm tracking-wider">
          /Services
        </span>
        <span className="text-neutral-500 font-mono text-xs md:text-sm tracking-wider">
          (04)
        </span>
      </div>

      {/* Services List Grid Container */}
      <div className="flex flex-col w-full mb-16">
        {servicesData.map((service) => {
          const isOpen = openServiceId === service.id;

          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onClick={() => toggleService(service.id)}
              className="border-b border-neutral-900 py-6 md:py-8 flex flex-col w-full cursor-pointer group/card"
            >
              {/* Header bar of accordion row */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  {/* Dynamic expanding pill-shaped thumbnail image */}
                  <motion.div
                    initial={false}
                    animate={
                      isOpen
                        ? { width: '80px', marginRight: '16px', opacity: 1 }
                        : { width: '0px', marginRight: '0px', opacity: 0 }
                    }
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="h-10 md:h-12 aspect-[16/9] rounded-full overflow-hidden relative flex-shrink-0 border border-neutral-800"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale"
                    />
                  </motion.div>

                  {/* Title text */}
                  <span className="text-3xl md:text-5xl lg:text-[56px] text-white tracking-tight font-light font-sans group-hover/card:text-neutral-300 transition-colors duration-300 leading-tight">
                    {service.title}
                  </span>
                </div>

                {/* Stretched plus/close icon (rotates 45deg to change + to x) */}
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-8 h-8 rounded-full border border-neutral-900 flex items-center justify-center text-neutral-400 group-hover/card:text-white transition-colors duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.div>
              </div>

              {/* Accordion Expandable Content Panel */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 pb-2 w-full">
                  {/* Left Column: Description aligned with the title text */}
                  <div className="lg:col-span-7 lg:pl-[96px]">
                    <p className="text-sm md:text-base text-neutral-400 font-sans font-light leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Staggered list of pill badges */}
                  <div className="lg:col-span-5 flex flex-wrap gap-2 justify-start lg:justify-end items-start pt-2 lg:pt-0">
                    {service.tags.map((tag) => (
                      <button
                        key={tag}
                        className="group px-3.5 py-1.5 rounded-full bg-white text-black font-sans text-xs font-semibold shadow-sm hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
                      >
                        <TextRoll text={tag} className="font-semibold text-xs" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* See pricing CTA button at bottom left */}
      <div className="w-full flex justify-start">
        <button 
          onClick={() => {
            const el = document.getElementById('pricing-block');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="group bg-white text-black font-sans text-xs font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.05)]"
        >
          <TextRoll text="See pricing +" className="font-semibold text-xs" />
        </button>
      </div>

      <Pricing />
    </motion.section>
  );
};
