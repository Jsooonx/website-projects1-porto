import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextRoll } from './TextRoll';

export const Pricing: React.FC = () => {
  const [addOnEnabled, setAddOnEnabled] = useState(false);

  // Prices
  const basePrice = 2490;
  const addOnPrice = 1490;
  const totalPrice = addOnEnabled ? basePrice + addOnPrice : basePrice;

  // Format price as currency string (e.g. $2,490)
  const formatPrice = (num: number) => {
    return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div
      id="pricing-block"
      className="w-full bg-[#121212] border border-neutral-800/80 rounded-[2.5rem] p-8 md:p-14 mt-16 flex flex-col font-sans select-none"
    >
      {/* Top Header info inside card */}
      <div className="flex items-center gap-2 mb-6 text-neutral-400">
        <span className="text-white text-xs font-semibold">+</span>
        <span className="font-mono text-xs uppercase tracking-wider">Simple pricing</span>
      </div>

      {/* Main Title with blur reveal */}
      <motion.h3 
        initial={{ filter: 'blur(12px)', opacity: 0, y: 30 }}
        whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 tracking-tight"
      >
        Pricing.
      </motion.h3>

      {/* Active pricing model pill */}
      <div className="bg-white text-black text-xs font-semibold px-4.5 py-2 rounded-full w-fit mb-12 shadow-sm">
        Per project
      </div>

      {/* Interactive content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full mb-14 items-stretch">
        
        {/* ADD-ON COLUMN (Left: lg-span-4) */}
        <div className="lg:col-span-4">
          <div className="bg-neutral-950/60 border border-neutral-900/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[260px] hover:border-neutral-800 transition-colors duration-500">
            <div>
              <h4 className="text-white font-sans font-semibold text-sm md:text-base mb-2">
                Want more traffic and leads?
              </h4>
              <p className="text-neutral-400 font-sans font-light text-xs md:text-sm leading-relaxed">
                Get marketing and SEO that starts with your goals.
              </p>
            </div>

            <div className="flex justify-between items-center mt-8">
              <span className="text-white text-2xl md:text-3xl font-sans font-bold">
                {formatPrice(addOnPrice)}
              </span>

              {/* Interactive Toggle Switch */}
              <div
                onClick={() => setAddOnEnabled(!addOnEnabled)}
                className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-500 relative flex items-center ${
                  addOnEnabled ? 'bg-white' : 'bg-neutral-800'
                }`}
              >
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`w-6 h-6 rounded-full shadow-md ${
                    addOnEnabled ? 'bg-black' : 'bg-white/40'
                  }`}
                  style={{
                    position: 'absolute',
                    left: addOnEnabled ? 'auto' : '4px',
                    right: addOnEnabled ? '4px' : 'auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN PRICE DISPLAY COLUMN (Right: lg-span-8) */}
        <div className="lg:col-span-8">
          <div className="bg-neutral-950/60 border border-neutral-900/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[260px] relative overflow-hidden hover:border-neutral-800 transition-colors duration-500">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 w-full">
              {/* Price display & features list */}
              <div className="flex flex-col">
                <div className="flex items-baseline text-white mb-6">
                  {/* Dynamic price text with fade animation on toggle */}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={totalPrice}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-5xl md:text-6xl font-sans font-bold tracking-tight"
                    >
                      {formatPrice(totalPrice)}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-neutral-500 text-xs md:text-sm font-light font-sans ml-2">
                    /project
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5 text-neutral-300 text-xs md:text-sm font-sans font-light">
                    <span className="text-neutral-500 font-semibold">+</span>
                    <span>Homepage + up to 4 inner pages</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300 text-xs md:text-sm font-sans font-light">
                    <span className="text-neutral-500 font-semibold">+</span>
                    <span>Design and Development</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300 text-xs md:text-sm font-sans font-light">
                    <span className="text-neutral-500 font-semibold">+</span>
                    <span>Mobile-Optimized Design</span>
                  </div>
                </div>
              </div>

              {/* Template promo badge */}
              <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-3.5 flex items-center gap-3 w-fit self-start md:self-auto">
                <img
                  src="/sandwich_bg.png"
                  alt="Fabrica template preview thumbnail"
                  className="w-10 h-10 rounded-lg object-cover grayscale opacity-80"
                />
                <div className="flex flex-col mr-1">
                  <span className="text-white font-sans font-semibold text-[11px] leading-tight">
                    Fabrica® Template
                  </span>
                  <span className="text-neutral-500 font-sans text-[10px] mt-0.5">
                    from $129
                  </span>
                </div>
                <div className="w-6 h-6 rounded-lg bg-neutral-950 flex items-center justify-center border border-neutral-800 text-neutral-400">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Row inside card */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 mt-10 relative">
              {/* Animated line with glow */}
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 h-px bg-neutral-700"
                style={{ boxShadow: '0 0 6px 1px rgba(255, 255, 255, 0.15)' }}
              />
              <div className="flex flex-col">
                <span className="text-neutral-500 font-mono text-[10px] md:text-xs uppercase tracking-wider">
                  Delivery time
                </span>
                <span className="text-white font-sans font-semibold text-sm md:text-base mt-0.5">
                  3-4 weeks
                </span>
              </div>

              <button className="group bg-white text-black font-sans text-xs md:text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                <TextRoll text="Get in touch" className="font-semibold text-xs md:text-sm" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Area inside Card */}
      <div className="border-t border-neutral-900/60 pt-8 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
        <div className="lg:col-span-4 text-neutral-500 font-mono text-xs uppercase tracking-wider">
          Looking for more?
        </div>
        
        <div className="lg:col-span-8 flex flex-col">
          <motion.p 
            initial={{ filter: 'blur(12px)', opacity: 0, y: 25 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-sans font-light text-base md:text-[18px] leading-relaxed max-w-2xl"
          >
            Add marketing, SEO, or content creation—<span className="text-neutral-400">flexible tools to strengthen your project. We'll shape a solution that fits your business, not ours.</span>
          </motion.p>

          <div className="flex items-center gap-3.5 mt-6">
            <img
              src="/george_avatar.png"
              alt="George Stern Client Success Manager Headshot"
              className="w-9 h-9 rounded-full object-cover grayscale border border-neutral-800"
            />
            <div className="flex flex-col">
              <span className="text-white font-sans font-semibold text-xs md:text-sm">
                George Stern
              </span>
              <span className="text-neutral-500 font-sans text-[10px] md:text-xs font-light">
                Client Success Manager
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
