import React from 'react';
import { motion } from 'framer-motion';

// Monochromatic technology SVGs for the scrolling logo bar
const CLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neutral-500 hover:text-white transition-colors duration-300">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22C16.5 22 20.3 19 21.6 15H17.3C16.2 17.4 13.8 19 11.9 19C8.1 19 5.2 15.9 5.2 12S8.1 5 11.9 5C13.8 5 16.2 6.6 17.3 9H21.6C20.3 5 16.5 2 12 2Z" fill="currentColor" />
  </svg>
);

const CPlusPlusLogo = () => (
  <svg width="36" height="24" viewBox="0 0 36 24" fill="none" className="text-neutral-500 hover:text-white transition-colors duration-300">
    <path d="M10 2C4.48 2 0 6.48 0 12S4.48 22 10 22C14.5 22 18.3 19 19.6 15H15.3C14.2 17.4 11.8 19 9.9 19C6.1 19 3.2 15.9 3.2 12S6.1 5 9.9 5C11.8 5 14.2 6.6 15.3 9H19.6C18.3 5 14.5 2 10 2Z" fill="currentColor" />
    <path d="M25 9H23V11H21V13H23V15H25V13H27V11H25V9ZM32 9H30V11H28V13H30V15H32V13H34V11H32V9Z" fill="currentColor" />
  </svg>
);

const JavaScriptLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neutral-500 hover:text-white transition-colors duration-300">
    <path d="M3 3V21H21V3H3ZM12.7 18.3C12.1 18.6 11.3 18.8 10.5 18.8C9.1 18.8 8.1 18 8.1 16.4H9.7C9.7 17.2 10.1 17.5 10.6 17.5C11.1 17.5 11.4 17.2 11.4 16.7V11.6H13V16.7C13 17.8 12.9 18.2 12.7 18.3ZM18.9 16.8C18.9 18.1 17.7 18.8 16.2 18.8C14.8 18.8 13.9 18.1 13.9 16.8H15.5C15.5 17.3 15.9 17.6 16.3 17.6C16.8 17.6 17.1 17.4 17.1 17C17.1 16.6 16.9 16.4 16.1 16L15.3 15.6C14.3 15.2 13.8 14.5 13.8 13.4C13.8 12.1 14.9 11.4 16.3 11.4C17.5 11.4 18.5 12.1 18.5 13.2H16.9C16.9 12.7 16.6 12.6 16.2 12.6C15.8 12.6 15.5 12.8 15.5 13.2+C15.5 13.6 15.7 13.8 16.3 14.1L17.1 14.4C18.3 14.9 18.9 15.6 18.9 16.8Z" fill="currentColor" />
  </svg>
);

const TypeScriptLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neutral-500 hover:text-white transition-colors duration-300">
    <path d="M3 3V21H21V3H3ZM10.5 17.5H8.7V11.2H6.5V9.7H12.8V11.2H10.5V17.5ZM17.9 14.8C17.9 16.3 16.8 17.6 15.3 17.6C14 17.6 13.1 16.9 13.1 15.7H14.7C14.7 16.1 15 16.3 15.3 16.3C15.7 16.3 16.1 16 16.1 15.5C16.1 15 15.9 14.8 15.1 14.4L14.3 14C13.3 13.6 12.8 12.9 12.8 11.9C12.8 10.6 13.9 9.8 15.3 9.8C16.5 9.8 17.4 10.5 17.4 11.6H15.8C15.8 11.2 15.5 11.1 15.2 11.1C14.8 11.1 14.5 11.3 14.5 11.7C14.5 12.1 14.7 12.3 15.3 12.6L16.1 12.9C17.3 13.4 17.9 14 17.9 14.8Z" fill="currentColor" />
  </svg>
);

const TailwindLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neutral-500 hover:text-white transition-colors duration-300">
    <path d="M12 6C9 6 7.2 7.5 6.6 10.5C7.5 9.3 8.7 8.7 10.2 8.7C12.6 8.7 14.1 10.2 14.7 12.6C15.3 15 17.1 16.5 20.1 16.5C23.1 16.5 24.9 15 25.5 12C24.6 13.2 23.4 13.8 21.9 13.8C19.5 13.8 18 12.3 17.4 9.9C16.8 7.5 15 6 12 6ZM6.6 12C3.6 12 1.8 13.5 1.2 16.5C2.1 15.3 3.3 14.7 4.8 14.7C7.2 14.7 8.7 16.2 9.3 18.6C9.9 21 11.7 22.5 14.7 22.5C17.7 22.5 19.5 21 20.1 18C19.2 19.2 18 19.8 16.5 19.8C14.1 19.8 12.6 18.3 12 15.9C11.4 13.5 9.6 12 6.6 12Z" fill="currentColor" />
  </svg>
);

const PythonLogo = () => (
  <svg width="24" height="24" viewBox="0 0 512 512" fill="none" className="text-neutral-500 hover:text-white transition-colors duration-300">
    <path d="M314,36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09,311.09,0,0,0-51.66,4.38c-45.74,8-54.07,24.7-54.07,55.54V128H256v16H107.62C66.06,144,32.33,193.67,32,255.12c0,.29,0,.58,0,.88a162.91,162.91,0,0,0,3.13,32c9.29,46.28,38.23,80,72.49,80H128V314c0-31.3,20.84-59.95,55-66.1l9.87-1.23H314a56.05,56.05,0,0,0,15.06-2A52.48,52.48,0,0,0,368,193.68V91.92C368,63,343.32,41.19,314,36.38ZM194.93,105.5a20.37,20.37,0,1,1,20.3-20.3A20.29,20.29,0,0,1,194.93,105.5Z" fill="currentColor" />
    <path d="M475.28,217c-10.7-42.61-38.41-73-70.9-73H386.67v47.45c0,39.57-26,68.22-57.74,73.13a63.54,63.54,0,0,1-9.69.75H198.08a60,60,0,0,0-15.23,1.95C160.54,273.14,144,291.7,144,315.77V417.54c0,29,29.14,46,57.73,54.31,34.21,9.95,71.48,11.75,112.42,0,27.19-7.77,53.85-23.48,53.85-54.31V384H256V368H404.38c29.44,0,54.95-24.93,67.45-61.31A156.83,156.83,0,0,0,480,256,160.64,160.64,0,0,0,475.28,217ZM316.51,404a20.37,20.37,0,1,1-20.3,20.3A20.29,20.29,0,0,1,316.51,404Z" fill="currentColor" />
  </svg>
);

export const LogoBar: React.FC = () => {
  const logos = [
    <PythonLogo key="python" />,
    <CLogo key="c" />,
    <CPlusPlusLogo key="cpp" />,
    <JavaScriptLogo key="js" />,
    <img key="html" src="/html.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="HTML" />,
    <img key="css" src="/css.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="CSS" />,
    <img key="react" src="/react.png" className="h-6 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300" alt="React" />,
    <TypeScriptLogo key="ts" />,
    <TailwindLogo key="tailwind" />,
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, margin: '-50px 0px -50px 0px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-1.5 md:px-3 py-6 border-t border-b border-neutral-900/60 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden select-none"
    >
      {/* Logos Container: Scrolling marquee on desktop, swipeable grid on mobile */}
      <div className="w-full md:w-[70%] relative overflow-hidden flex items-center">
        {/* Shadow overlays for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* CSS-based marquee for high-performance animation */}
        <div className="flex space-x-12 md:space-x-16 items-center animate-marquee whitespace-nowrap min-w-full">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-a-${index}`} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              {logo}
            </div>
          ))}
          {/* Second set of logos for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`logo-b-${index}`} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              {logo}
            </div>
          ))}
          {/* Third set to ensure buffer coverage on extra wide screens */}
          {logos.map((logo, index) => (
            <div key={`logo-c-${index}`} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Ratings Badge */}
      <div className="w-full md:w-[26%] flex md:justify-end items-center flex-shrink-0">
        <div className="text-left md:text-right font-sans">
          <div className="flex items-center md:justify-end space-x-1">
            <span className="text-white text-xs tracking-wider">★★★★★</span>
            <span className="text-white text-xs font-semibold ml-1.5">4.9/5</span>
          </div>
          <p className="text-[11px] text-neutral-500 font-light mt-0.5 tracking-normal">
            Trusted by <span className="text-neutral-400 font-normal">100+ businesses</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
};
