import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { TextRoll } from './TextRoll';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  thumbnail: string;
  bannerImage: string;
  description: string;
  summary: string;
  contentHtml: string;
}

export const blogsData: BlogPost[] = [
  {
    id: 'website-transformation',
    title: 'How a well-designed website can transform your business',
    date: 'February 2, 2025',
    author: {
      name: 'Arthur Dent',
      role: 'Creative Partner',
      avatar: '/george_avatar.png'
    },
    thumbnail: '/blog_portrait_goth.png',
    bannerImage: '/blog_portrait_goth.png',
    description: 'Discover the latest design trends shaping the digital world and how they impact business.',
    summary: 'At Jsooonx® Studio, we specialize in crafting high-performance websites that not only look great but also deliver measurable results.',
    contentHtml: `
      <h3>How Speed Affects SEO</h3>
      <p>Search engines prioritize user experience. A fast-loading website signals to search algorithms that your platform is reliable and efficient. A delay of even one second can reduce conversions by up to 20%, heavily impacting your search visibility and overall customer retention.</p>

      <h3>What Slows Down a Website?</h3>
      <p>Several factors can reduce your site speed:</p>
      <ul>
        <li>Large images and media assets</li>
        <li>Unoptimized coding structure (excessive JavaScript, CSS, and HTML)</li>
        <li>Too many HTTP requests for third-party scripts</li>
        <li>Slow hosting server response time</li>
        <li>No cache implementation</li>
      </ul>

      <h3>How to Improve Website Speed</h3>
      <p>By implementing modern performance best practices, we ensure your site loads instantly on any device:</p>
      
      <h4>Optimize Assets</h4>
      <p>Compress images to next-gen formats like WebP or AVIF and lazy load them.</p>

      <h4>Minimize Code</h4>
      <p>Remove unused code, minify CSS/JS, and bundle files to reduce weight.</p>

      <h4>Use a Content Delivery Network (CDN)</h4>
      <p>A CDN serves copies of your site's static assets across multiple regions.</p>

      <h4>Reduce Redirects</h4>
      <p>Too many redirects can add precious milliseconds to your load time.</p>

      <h4>Choose a Fast Hosting Provider</h4>
      <p>Your hosting provider plays a major role in page load times.</p>

      <h3>The Business Impact of a Fast Website</h3>
      <p>A fast, beautifully designed website does not just look premium—it directly impacts your bottom line. Increased conversions, longer session durations, lower bounce rates, and better search rankings all translate directly into customer loyalty and revenue growth.</p>

      <h3>Final Thoughts</h3>
      <p>Speed should be a primary focus. Delivering a high-performance web experience builds immediate trust. Invest in speed, and the metrics will follow.</p>
    `
  },
  {
    id: 'color-psychology',
    title: 'The Psychology of Color in Branding',
    date: 'January 26, 2025',
    author: {
      name: 'Sofia Ford',
      role: 'Head of Brand Strategy',
      avatar: '/sofia_avatar.png'
    },
    thumbnail: '/blog_red_paint.png',
    bannerImage: '/blog_red_paint.png',
    description: "Colors influence emotions and decisions. Here's how to use them strategically in branding.",
    summary: 'A brand identity is more than a logo. It is a visual language that triggers subconscious emotional responses and builds immediate trust.',
    contentHtml: `
      <h3>Why Color Matters in Brand Identity</h3>
      <p>Color is the first element a customer perceives. It bypasses verbal comprehension and acts directly on the limbic system, which manages emotions and memories. Choosing your color palette is one of the most critical decisions in shaping how the world perceives your agency or product.</p>

      <h3>Common Color Associations</h3>
      <ul>
        <li><strong>Red:</strong> Passion, energy, urgency. Used to capture instant attention.</li>
        <li><strong>Blue:</strong> Trust, stability, security. A staple for finance and technology firms.</li>
        <li><strong>Black & Off-White:</strong> Premium quality, timelessness, minimalism. Ideal for luxury portfolios.</li>
        <li><strong>Orange/Terracotta:</strong> Warmth, creativity, approachability. Represents tactile innovation.</li>
      </ul>

      <h3>Establishing Stately Color Hierarchies</h3>
      <p>A premium design system restricts its color palette to maintain visual harmony. By combining strong neutrals with a singular, high-contrast accent, you create visual focal points that guide users toward primary actions without creating clutter.</p>

      <h3>The Ultimate Brand Test</h3>
      <p>Your branding should be recognizable even when all colors are removed. A truly timeless brand identity relies on bold typography and strong spatial relationships, using color only to reinforce a message that is already strong in black and white.</p>
    `
  },
  {
    id: 'digital-trends-2025',
    title: "What's new in digital?",
    date: 'January 10, 2025',
    author: {
      name: 'Arthur Dent',
      role: 'Creative Partner',
      avatar: '/george_avatar.png'
    },
    thumbnail: '/blog_digital_trends.png',
    bannerImage: '/blog_digital_trends.png',
    description: 'Exploring the shift toward editorial web layouts, interaction physics, and minimalist luxury portfolios.',
    summary: 'The web is moving away from generic grids and SaaS templates. Modern audiences crave digital experiences that feel like premium printed magazines.',
    contentHtml: `
      <h3>The Return to Editorial Structure</h3>
      <p>For years, responsive design forced websites into standardized templates. Today, creative developers are breaking the grid. Large, bold typography, intentional white space, and editorial column widths are returning, giving websites a distinct, curated feel.</p>

      <h3>Interaction Physics & Spring Motion</h3>
      <p>Static pages feel dead. Modern front-ends use physics-based animations (like spring dynamics and lerp scrolling) to make elements feel tactile. A cursor that slightly lags, cards that shift on mouse coordinates, and smooth accordion drawer expansions make digital platforms feel alive.</p>

      <h3>Less is More: The Aesthetic of Restraint</h3>
      <p>Premium brands are stripping away excessive decorations, heavy gradients, and flashy animations. By focusing purely on typography, high-end grayscale imagery, and clean interactive feedback, they establish a sense of effortless luxury and timeless design.</p>
    `
  },
  {
    id: 'website-performance',
    title: 'Why Website Performance Can Make or Break Your Business',
    date: 'Jan 20, 2025',
    author: {
      name: 'Arthur Dent',
      role: 'Creative Partner',
      avatar: '/george_avatar.png'
    },
    thumbnail: '/services_digital.png',
    bannerImage: '/services_digital.png',
    description: "A slow website drops user trust and conversions. Let's talk about speed for better results.",
    summary: 'In the digital age, speed is not a feature—it is a foundation. A fast, performant web experience builds immediate trust and dramatically improves conversions.',
    contentHtml: `
      <h3>Why Speed is Your First Impression</h3>
      <p>Before a user reads your headlines or sees your portfolio, they experience your site's speed. If your pages take more than three seconds to load, over half of your visitors will leave before they even see your brand.</p>

      <h3>The Modern Performance Standard</h3>
      <p>To deliver a premium experience, we optimize every layer of the technology stack:</p>
      <ul>
        <li>Next-gen image formatting (WebP/AVIF) and dynamic lazy loading.</li>
        <li>Code splitting and tree shaking to ensure only necessary assets are loaded.</li>
        <li>Optimizing interaction physics and rendering loops for 60fps animations.</li>
      </ul>

      <h3>The Bottom Line</h3>
      <p>Investing in speed is investing in your business conversion rate. Every millisecond saved is a friction point removed.</p>
    `
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode: A Trend or a Web Design Essential?',
    date: 'Jan 18, 2025',
    author: {
      name: 'Sofia Ford',
      role: 'Head of Brand Strategy',
      avatar: '/sofia_avatar.png'
    },
    thumbnail: '/why_silhouette.png',
    bannerImage: '/why_silhouette.png',
    description: 'More brands are embracing dark mode, but does it really improve user experience?',
    summary: 'Dark mode has evolved from a developer preference to a default expectation for premium digital experiences. We explore the balance between aesthetics and usability.',
    contentHtml: `
      <h3>Aesthetics vs. Ergonomics</h3>
      <p>Dark mode is more than just a cool design trend. It reduces eye strain in low-light environments and saves battery life on OLED screens. But more importantly, it provides a premium, high-contrast canvas that makes imagery pop.</p>

      <h3>Design Principles for Dark Interfaces</h3>
      <p>Building a successful dark mode requires strict adherence to color contrast and visual hierarchy:</p>
      <ul>
        <li>Avoid pure black backgrounds for large text containers to reduce contrast glare.</li>
        <li>Use subtle borders and elevations with semi-transparent overlays instead of light dropshadows.</li>
        <li>Ensure all branding assets and typography maintain high contrast ratios (at least 4.5:1).</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Dark mode is no longer optional. A modern digital experience must support native dark themes to respect user preferences and environmental contexts.</p>
    `
  },
  {
    id: 'typography-trends',
    title: 'The Future of Typography: Trends That Will Define the Web',
    date: 'Jan 12, 2025',
    author: {
      name: 'Arthur Dent',
      role: 'Creative Partner',
      avatar: '/george_avatar.png'
    },
    thumbnail: '/services_art.png',
    bannerImage: '/services_art.png',
    description: "Typography isn't just about fonts—it shapes how users interact with your brand.",
    summary: 'Bold, editorial typography is replacing standard layouts, bringing print-like styling and layout structure to digital design.',
    contentHtml: `
      <h3>The Voice of Your Brand</h3>
      <p>Typography is the literal voice of your digital content. The typeface you choose tells a story before the user reads a single word. Today, we see a strong shift toward oversized serif headers and editorial grotesque body fonts.</p>

      <h3>Key Typography Trends</h3>
      <p>Here are the trends dominating modern digital design:</p>
      <ul>
        <li><strong>Variable Fonts:</strong> Offering infinite weight adjustment and micro-variations for responsive typography.</li>
        <li><strong>Kinetic Typography:</strong> Text that reacts to scroll position and cursor movements.</li>
        <li><strong>High Contrast Layouts:</strong> Pairing massive headers with clean, compact body columns for strong rhythm.</li>
      </ul>
    `
  },
  {
    id: 'brutalism-design',
    title: 'Brutalism in Web Design: Bold Aesthetic or Just Bad UX?',
    date: 'Jan 5, 2025',
    author: {
      name: 'Sofia Ford',
      role: 'Head of Brand Strategy',
      avatar: '/sofia_avatar.png'
    },
    thumbnail: '/why_skyscraper.png',
    bannerImage: '/why_skyscraper.png',
    description: 'Take a look at how we balance raw aesthetic and code with structural usability for modern audiences.',
    summary: 'Brutalism challenges clean grids with raw, high-contrast layouts. When done right, it makes a brand unforgettable; when done wrong, it confuses users.',
    contentHtml: `
      <h3>Challenging the Corporate Grid</h3>
      <p>Web design has spent a decade perfecting clean, minimal, and predictable grids. Neo-brutalism is the rebellion against this conformity. By using raw layouts, bold lines, and striking colors, brutalist sites demand attention.</p>

      <h3>Balancing Raw Expression with UX</h3>
      <p>While brutalism is visually exciting, it must not compromise usability:</p>
      <ul>
        <li>Keep navigation menus intuitive and standard.</li>
        <li>Ensure hover effects and interactive states are clear and responsive.</li>
        <li>Use raw aesthetic elements in backgrounds and decorations, keeping content readable.</li>
      </ul>
    `
  },
  {
    id: 'custom-illustrations',
    title: 'Why Custom Illustrations Make Brands More Memorable',
    date: 'Dec 20, 2024',
    author: {
      name: 'Arthur Dent',
      role: 'Creative Partner',
      avatar: '/george_avatar.png'
    },
    thumbnail: '/services_strategy.png',
    bannerImage: '/services_strategy.png',
    description: 'Stock photos are fast, but custom assets help brands stand out with unique, hand-crafted vibes.',
    summary: 'To truly stand out, brands need unique visual assets that cannot be replicated. Custom illustrations build a proprietary brand language.',
    contentHtml: `
      <h3>Beyond Stock Photography</h3>
      <p>Standard stock photography is generic and easily recognizable. To establish a truly premium brand, custom artwork is essential. It provides a unique visual identity that is completely proprietary to your brand.</p>

      <h3>The Emotional Connection</h3>
      <p>Illustrations allow for abstract storytelling that photos cannot capture. They evoke emotion, simplify complex concepts, and introduce a human touch to digital products.</p>
    `
  }
];

interface BlogProps {
  onNavigateToBlog?: (blogId: string) => void;
  onNavigateToBlogList?: () => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigateToBlog, onNavigateToBlogList }) => {
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
    hidden: { opacity: 0, y: 35, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      id="blog"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
      className="w-full px-1.5 md:px-3 py-20 md:py-28 border-t border-neutral-900/60 flex flex-col select-none"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between w-full mb-8">
        <span className="text-neutral-400 font-mono text-xs md:text-sm tracking-wider">
          /Blog
        </span>
        <span className="text-neutral-500 font-mono text-xs md:text-sm tracking-wider">
          (08)
        </span>
      </div>

      {/* Title Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full mb-16">
        <div className="max-w-2xl">
          <h2 className="text-[44px] md:text-[56px] lg:text-[68px] font-sans font-bold tracking-tight leading-[1.05] text-white">
            Newest trends<br />
            <span className="text-[#8e8e93]">and insights</span><br />
            <span className="text-[#8e8e93]">from our team.</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12 justify-between md:w-[50%] self-start md:self-auto">
          <p className="text-neutral-400 font-sans font-light text-sm leading-relaxed max-w-[280px]">
            Stay informed about our latest projects, trends, and industry insights.
          </p>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              onNavigateToBlogList?.();
            }}
            className="group flex items-center justify-between gap-5 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 pl-6 pr-2.5 py-2.5 rounded-full text-xs font-semibold tracking-tight cursor-pointer"
          >
            <TextRoll text="See all" />
            <div className="w-6 h-6 rounded-full bg-black group-hover:bg-white flex items-center justify-center text-white transition-colors duration-300 group-hover:scale-105 transition-transform duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-black transition-colors duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full items-stretch">
        
        {/* Card 1: Web Design Transform */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-3 lg:h-[580px] flex"
        >
          <a
            href={`#blog/${blogsData[0].id}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigateToBlog?.(blogsData[0].id);
            }}
            className="group w-full bg-neutral-950/60 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-700 border border-neutral-900/80 transition-all duration-700 ease-[0.16,1,0.3,1] relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex justify-between items-start w-full">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[24px] overflow-hidden bg-neutral-950 flex items-center justify-center">
                <img
                  src={blogsData[0].thumbnail}
                  alt={blogsData[0].title}
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
                  {blogsData[0].date}
                </span>
                <h3 className="text-white font-sans font-bold text-xl md:text-[22px] tracking-tight leading-[1.25] mb-3 group-hover:text-neutral-300 transition-colors duration-300">
                  {blogsData[0].title}
                </h3>
                <p className="text-neutral-400 font-sans font-light text-xs md:text-sm leading-relaxed">
                  {blogsData[0].description}
                </p>
              </div>
            </a>
          </motion.div>

          {/* Card 2: Color Psychology */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 lg:h-[580px] flex"
          >
            <a
              href={`#blog/${blogsData[1].id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigateToBlog?.(blogsData[1].id);
              }}
              className="group w-full bg-neutral-950/60 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-700 border border-neutral-900/80 transition-all duration-700 ease-[0.16,1,0.3,1] relative overflow-hidden"
            >
              {/* Top row */}
              <div className="flex justify-between items-start w-full">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-[24px] overflow-hidden bg-neutral-950 flex items-center justify-center">
                  <img
                    src={blogsData[1].thumbnail}
                    alt={blogsData[1].title}
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
                  {blogsData[1].date}
                </span>
                <h3 className="text-white font-sans font-bold text-xl md:text-[22px] tracking-tight leading-[1.25] mb-3 group-hover:text-neutral-300 transition-colors duration-300">
                  {blogsData[1].title}
                </h3>
                <p className="text-neutral-400 font-sans font-light text-xs md:text-sm leading-relaxed">
                  {blogsData[1].description}
                </p>
              </div>
            </a>
          </motion.div>

          {/* Card 3: Featured Digital Trends Laptop Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 lg:h-[580px] flex"
          >
            <a
              href={`#blog/${blogsData[2].id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigateToBlog?.(blogsData[2].id);
              }}
              className="group w-full rounded-[32px] overflow-hidden relative flex flex-col justify-between p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-800/10 transition-all duration-700 ease-[0.16,1,0.3,1]"
            >
              {/* Background laptop image */}
              <img
                src={blogsData[2].bannerImage}
                alt="What's new in digital featured blog background mockup"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1200ms] ease-[0.16,1,0.3,1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 pointer-events-none" />

              {/* Top row */}
              <div className="relative z-10 flex justify-between items-center w-full text-white">
                <span className="font-sans font-bold text-sm tracking-tight">
                  fabrica®
                </span>
                <div className="text-white text-3xl font-light select-none leading-none mr-1 group-hover:scale-110 transition-transform duration-300">
                  +
                </div>
              </div>


            {/* Bottom Title */}
            <div className="relative z-10 text-right w-full mt-auto">
              <h3 className="text-white font-sans font-bold text-3xl md:text-[44px] lg:text-[48px] tracking-tight leading-[1.15] max-w-[80%] ml-auto text-right">
                What's new<br />in digital?
              </h3>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

