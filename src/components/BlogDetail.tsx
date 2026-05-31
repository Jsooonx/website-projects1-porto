import React, { useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { blogsData } from './Blog';

interface BlogDetailProps {
  blogId: string;
  onBack: () => void;
  onNavigateToBlog?: (blogId: string) => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ blogId, onBack, onNavigateToBlog }) => {
  const [copied, setCopied] = useState(false);
  const currentIdx = blogsData.findIndex((b) => b.id === blogId);
  const blog = blogsData[currentIdx];

  // Calculate the next and previous blog posts in the circular array
  const nextBlog = blogsData[(currentIdx + 1) % blogsData.length];
  const prevBlog = blogsData[(currentIdx - 1 + blogsData.length) % blogsData.length];

  // Scroll to top immediately when mounting or switching articles
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#f6f6f6] text-black flex flex-col items-center justify-center font-sans">
        <h2 className="text-2xl font-light mb-4">Post not found</h2>
        <button 
          onClick={onBack}
          className="px-6 py-2.5 bg-black text-white rounded-full font-medium text-sm cursor-pointer"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateToBlog) {
      onNavigateToBlog(prevBlog.id);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateToBlog) {
      onNavigateToBlog(nextBlog.id);
    }
  };

  // Variants for clean, cinematic reveal animations
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.0, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <div className="w-full bg-black text-white min-h-screen font-sans pb-24 select-none flex flex-col items-center">
      
      {/* Editorial Header */}
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
          aria-label="Back to insights"
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

      {/* Main Column Container */}
      <div className="w-full max-w-[90vw] xl:max-w-[1400px] flex flex-col">
        
        {/* Massive Editorial Header Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[21/9] md:aspect-[3/1] rounded-[2.5rem] overflow-hidden mb-12 border border-neutral-900/50 shadow-sm relative"
        >
          <img
            src={blog.bannerImage}
            alt={blog.title}
            className="w-full h-full object-cover scale-[1.12] grayscale"
          />
        </motion.div>

        {/* Editorial Body Wrapper */}
        <div className="w-full max-w-[800px] mx-auto flex flex-col">
          
          {/* Date */}
          <span className="text-xs text-neutral-400 font-mono tracking-wider block mb-4">
            {blog.date}
          </span>

          {/* Title and Copy Link Button */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-[36px] sm:text-[44px] md:text-[54px] font-sans font-bold tracking-tight text-white leading-[1.1] max-w-[620px]"
            >
              {blog.title}
            </motion.h1>
            
            <button
              onClick={handleCopyLink}
              className="self-start group flex items-center gap-2 bg-white text-black hover:bg-neutral-200 transition-colors duration-300 pl-4 pr-3.5 py-2 rounded-full text-xs font-semibold tracking-tight cursor-pointer"
            >
              <span>{copied ? 'Link copied!' : 'Copy link'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-12 transition-transform">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
          </div>

          {/* Bold Summary / Intro Paragraph */}
          <p className="text-neutral-200 font-sans font-medium text-lg md:text-[22px] leading-relaxed mb-8">
            {blog.summary}
          </p>

          {/* Author Block */}
          <div className="flex items-center gap-3.5 mb-8">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-11 h-11 rounded-full object-cover grayscale border border-neutral-900"
            />
            <div className="flex flex-col">
              <span className="text-white font-sans font-semibold text-sm">
                {blog.author.name}
              </span>
              <span className="text-neutral-400 font-sans text-xs font-light">
                {blog.author.role}
              </span>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-neutral-900 mb-8" />

          {/* Structured HTML Body */}
          <div 
            className="prose prose-neutral max-w-none text-neutral-400 font-sans font-light text-sm md:text-base leading-relaxed flex flex-col gap-6
              [&>h3]:text-white [&>h3]:font-bold [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:tracking-tight [&>h3]:mt-6 [&>h3]:mb-2
              [&>h4]:text-white [&>h4]:font-bold [&>h4]:text-base [&>h4]:tracking-tight [&>h4]:mt-4 [&>h4]:mb-1
              [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2
              [&>ul>li]:text-neutral-400 [&>ul>li>strong]:text-white
            "
            dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          />

          {/* Next Blog Banner Card */}
          <a
            href={`#blog/${nextBlog.id}`}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateToBlog) {
                onNavigateToBlog(nextBlog.id);
              }
            }}
            className="group w-full rounded-[2.5rem] overflow-hidden relative flex flex-col justify-between p-8 md:p-10 bg-[#121212] text-white mt-16 h-[220px] hover:shadow-lg border border-neutral-800/80 transition-all duration-700 ease-[0.16,1,0.3,1]"
          >
            {/* Background image of the next blog */}
            <img
              src={nextBlog.bannerImage}
              alt={nextBlog.title}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-30 group-hover:scale-[1.02] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />

            {/* Next Header */}
            <span className="relative z-10 text-[10px] md:text-xs text-neutral-400 font-mono tracking-wider block uppercase mb-1">
              Next post
            </span>

            {/* Next Title */}
            <div className="relative z-10 w-full mt-auto flex items-end justify-between gap-6">
              <h3 className="text-white font-sans font-bold text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight max-w-[80%] group-hover:text-neutral-200 transition-colors">
                {nextBlog.title}
              </h3>
              
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-neutral-200 transition-colors duration-300 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </a>

          {/* Bottom Share & Pagination Row */}
          <div className="w-full flex flex-row items-center justify-between border-t border-neutral-900 pt-8 mt-12 gap-6">
            
            {/* Left: Share post */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] text-neutral-400 font-sans tracking-wide uppercase">Share post</span>
              <div className="flex items-center gap-4 text-xs font-semibold text-white">
                <a href="#share-x" className="hover:text-neutral-300 transition-colors">Twitter</a>
                <span className="text-neutral-800">/</span>
                <a href="#share-li" className="hover:text-neutral-300 transition-colors">LinkedIn</a>
                <span className="text-neutral-800">/</span>
                <button onClick={handleCopyLink} className="hover:text-neutral-300 transition-colors cursor-pointer font-semibold text-white">
                  Copy link
                </button>
              </div>
            </div>

            {/* Right: Pagination Arrows */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                aria-label="Previous post"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                aria-label="Next post"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
