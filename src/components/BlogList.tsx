import React, { useLayoutEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { blogsData } from './Blog';

interface BlogListProps {
  onBack: () => void;
  onNavigateToBlog: (blogId: string) => void;
}

export const BlogList: React.FC<BlogListProps> = ({ onBack, onNavigateToBlog }) => {
  
  // Scroll to top immediately when mounting
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ordered list of blogs to display in the 2-column grid
  const orderedBlogs = [
    blogsData.find((b) => b.id === 'website-transformation'),
    blogsData.find((b) => b.id === 'color-psychology'),
    blogsData.find((b) => b.id === 'website-performance'),
    blogsData.find((b) => b.id === 'dark-mode'),
    blogsData.find((b) => b.id === 'typography-trends'),
    blogsData.find((b) => b.id === 'brutalism-design'),
    blogsData.find((b) => b.id === 'custom-illustrations'),
    blogsData.find((b) => b.id === 'digital-trends-2025'),
  ].filter(Boolean);

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
          Expert Insights.
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
              <span>Blog</span>
            </div>
            <p className="text-white font-sans font-normal text-xl md:text-[24px] leading-snug max-w-[500px]">
              Expert insights on web design, branding, and digital strategy to help your business stand out.
            </p>
          </div>
          {/* Right secondary text */}
          <div className="md:col-span-4 flex md:justify-end md:self-stretch items-end">
            <p className="text-neutral-500 font-sans font-light text-xs md:text-sm leading-relaxed max-w-[240px] md:text-right">
              Our design principles, running optimizations... everything you need for digital success.
            </p>
          </div>
        </motion.div>

        {/* Aligned 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3.5 items-stretch w-full">
          {orderedBlogs.map((blog, idx) => {
            if (!blog) return null;

            // Render the first blog (website-transformation) as an image-dominant card matching standard card dimensions
            if (idx === 0) {
              return (
                <motion.div key={blog.id} variants={itemVariants} className="w-full flex">
                  <a
                    href={`#blog/${blog.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateToBlog(blog.id);
                    }}
                    className="group w-full rounded-3xl overflow-hidden relative flex flex-col justify-between p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-900/50 transition-all duration-700 ease-[0.16,1,0.3,1] bg-neutral-950 min-h-[500px] md:min-h-[540px] lg:min-h-[580px]"
                  >
                    <img
                      src={blog.bannerImage}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover scale-[1.12] grayscale group-hover:scale-[1.18] transition-transform duration-[1200ms] ease-[0.16,1,0.3,1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/15 pointer-events-none" />
                    
                    {/* Top date */}
                    <div className="relative z-10">
                      <span className="text-[11px] md:text-xs text-neutral-400 font-sans tracking-wide block">
                        {blog.date}
                      </span>
                    </div>
                    
                    {/* Bottom Content */}
                    <div className="relative z-10 mt-auto">
                      <h3 className="text-white font-sans font-bold text-xl md:text-[22px] tracking-tight leading-[1.25] mb-3 group-hover:text-neutral-300 transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <p className="text-neutral-300 font-sans font-light text-xs md:text-sm leading-relaxed">
                        {blog.description}
                      </p>
                    </div>
                  </a>
                </motion.div>
              );
            }

            return (
              <motion.div key={blog.id} variants={itemVariants} className="w-full flex">
                <a
                  href={`#blog/${blog.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToBlog(blog.id);
                  }}
                  className="group w-full bg-neutral-950/60 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-700 border border-neutral-900/80 transition-all duration-700 ease-[0.16,1,0.3,1] relative overflow-hidden min-h-[500px] md:min-h-[540px] lg:min-h-[580px]"
                >
                  {/* Top Row: Thumbnail and Plus Icon */}
                  <div className="flex justify-between items-start w-full">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[24px] overflow-hidden bg-neutral-950 flex items-center justify-center">
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-full object-cover scale-[1.12] grayscale group-hover:scale-[1.18] transition-transform duration-700 ease-[0.16,1,0.3,1]"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black group-hover:rotate-90 transition-transform duration-500">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom block */}
                  <div className="mt-8">
                    <span className="text-[11px] md:text-xs text-neutral-400 font-sans tracking-wide block mb-3">
                      {blog.date}
                    </span>
                    <h3 className="text-white font-sans font-bold text-xl md:text-[22px] tracking-tight leading-[1.25] mb-3 group-hover:text-neutral-300 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-neutral-400 font-sans font-light text-xs md:text-sm leading-relaxed">
                      {blog.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

      </motion.div>

    </div>
  );
};
