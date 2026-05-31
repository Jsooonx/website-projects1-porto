import { useState, useEffect, useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { Lenis, useLenis } from 'lenis/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { HeroTitle } from './components/HeroTitle';
import { LogoBar } from './components/LogoBar';
import { HeroImageCard } from './components/HeroImageCard';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Services } from './components/Services';
import { Blog } from './components/Blog';
import { BlogList } from './components/BlogList';
import { BlogDetail } from './components/BlogDetail';
import { ProjectDetail } from './components/ProjectDetail';
import { CustomCursor } from './components/CustomCursor';

type NavAction =
  | { type: 'project'; id: string }
  | { type: 'blog'; id: string }
  | { type: 'blog-list' }
  | { type: 'home'; target: 'projects' | 'blog' | 'top' };

/**
 * Inner content component — must be a descendant of <Lenis> so useLenis() works.
 *
 * Page transitions use a full-screen black overlay to eliminate all visual glitches:
 *  1. Overlay fades to fully opaque black  (0.5s)
 *  2. Content is swapped + scroll position reset  (invisible behind overlay)
 *  3. Overlay fades back to transparent  (0.5s)  → user sees new page at correct position
 */
function AppContent() {
  // Derive initial activeProjectId synchronously from the URL hash
  // so direct links like #project/capsule render the right page on first paint.
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() => {
    const hash = window.location.hash;
    return hash.startsWith('#project/') ? hash.replace('#project/', '') : null;
  });

  // Derive initial activeBlogId synchronously from the URL hash
  const [activeBlogId, setActiveBlogId] = useState<string | null>(() => {
    const hash = window.location.hash;
    return hash.startsWith('#blog/') ? hash.replace('#blog/', '') : null;
  });

  // Derive initial activeBlogList synchronously from the URL hash
  const [activeBlogList, setActiveBlogList] = useState<boolean>(() => {
    const hash = window.location.hash;
    return hash === '#blog-list';
  });

  // Track if the user came to a blog detail view from the dedicated blog list page
  const [cameFromBlogList, setCameFromBlogList] = useState<boolean>(false);

  // Transition state machine: hidden -> covered -> revealed -> hidden
  const [overlayState, setOverlayState] = useState<'hidden' | 'covered' | 'revealed'>('hidden');

  // Ref tracks the pending navigation action
  const pendingNavRef = useRef<NavAction | null>(null);

  const lenis = useLenis();

  // ── Browser back / forward button ────────────────────────────────────
  useEffect(() => {
    const onPopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        pendingNavRef.current = { type: 'project', id: hash.replace('#project/', '') };
      } else if (hash.startsWith('#blog/')) {
        pendingNavRef.current = { type: 'blog', id: hash.replace('#blog/', '') };
      } else if (hash === '#blog-list') {
        pendingNavRef.current = { type: 'blog-list' };
      } else if (hash === '#projects') {
        pendingNavRef.current = { type: 'home', target: 'projects' };
      } else if (hash === '#blog') {
        pendingNavRef.current = { type: 'home', target: 'blog' };
      } else {
        pendingNavRef.current = { type: 'home', target: 'top' };
      }
      
      // Stop scroll and trigger transition if overlay is idle
      if (overlayState === 'hidden') {
        lenis?.stop();
        setOverlayState('covered');
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [lenis, overlayState]);

  // ── Programmatic navigation (called by child components) ─────────────
  const navigateToProject = useCallback((projectId: string) => {
    if (overlayState !== 'hidden') return; // guard against double-click
    pendingNavRef.current = { type: 'project', id: projectId };
    lenis?.stop();
    setOverlayState('covered');
  }, [lenis, overlayState]);

  const navigateToBlog = useCallback((blogId: string) => {
    if (overlayState !== 'hidden') return; // guard against double-click
    pendingNavRef.current = { type: 'blog', id: blogId };
    lenis?.stop();
    setOverlayState('covered');
  }, [lenis, overlayState]);

  const navigateToBlogList = useCallback(() => {
    if (overlayState !== 'hidden') return; // guard against double-click
    pendingNavRef.current = { type: 'blog-list' };
    lenis?.stop();
    setOverlayState('covered');
  }, [lenis, overlayState]);

  const navigateBack = useCallback(() => {
    if (overlayState !== 'hidden') return;
    pendingNavRef.current = { type: 'home', target: 'projects' };
    lenis?.stop();
    setOverlayState('covered');
  }, [lenis, overlayState]);

  const navigateBackFromBlog = useCallback(() => {
    if (overlayState !== 'hidden') return;
    if (cameFromBlogList) {
      pendingNavRef.current = { type: 'blog-list' };
    } else {
      pendingNavRef.current = { type: 'home', target: 'blog' };
    }
    lenis?.stop();
    setOverlayState('covered');
  }, [lenis, overlayState, cameFromBlogList]);

  const navigateBackFromBlogList = useCallback(() => {
    if (overlayState !== 'hidden') return;
    pendingNavRef.current = { type: 'home', target: 'blog' };
    lenis?.stop();
    setOverlayState('covered');
  }, [lenis, overlayState]);

  // ── Helper: get element's absolute document offset ──────────────────
  const getDocumentOffset = (el: HTMLElement): number => {
    let top = 0;
    let current: HTMLElement | null = el;
    while (current) {
      top += current.offsetTop;
      current = current.offsetParent as HTMLElement | null;
    }
    return top;
  };

  // ── Overlay animation complete ───────────────────────────────────────
  const onOverlayAnimComplete = useCallback(() => {
    if (overlayState === 'covered') {
      // ──────────────────────────────────────────────────────────────
      // The screen is now fully covered in black. Swap content + fix scroll.
      // All scroll logic runs SYNCHRONOUSLY before the reveal starts.
      // ──────────────────────────────────────────────────────────────
      const nav = pendingNavRef.current;
      pendingNavRef.current = null;

      if (nav) {
        // Capture scroll target BEFORE state changes
        const scrollTargetId = nav.type === 'home' && nav.target !== 'top' ? nav.target : null;

        // flushSync commits React state to the DOM synchronously
        flushSync(() => {
          if (nav.type === 'project') {
            window.history.pushState(null, '', `#project/${nav.id}`);
            setActiveProjectId(nav.id);
            setActiveBlogId(null);
            setActiveBlogList(false);
            setCameFromBlogList(false);
          } else if (nav.type === 'blog') {
            window.history.pushState(null, '', `#blog/${nav.id}`);
            setActiveBlogId(nav.id);
            setActiveProjectId(null);
            if (activeBlogList) {
              setCameFromBlogList(true);
            }
            setActiveBlogList(false);
          } else if (nav.type === 'blog-list') {
            window.history.pushState(null, '', '#blog-list');
            setActiveBlogList(true);
            setActiveProjectId(null);
            setActiveBlogId(null);
          } else {
            // Going back to home — clean URL, no hash
            window.history.replaceState(null, '', window.location.pathname);
            setActiveProjectId(null);
            setActiveBlogId(null);
            setActiveBlogList(false);
            setCameFromBlogList(false);
          }
        });

        // ── Force synchronous layout reflow ──
        // After flushSync, the DOM is updated (display:none → display:flex)
        // but the browser hasn't computed layout yet. Reading offsetHeight
        // forces a synchronous reflow so element positions are correct.
        void document.documentElement.offsetHeight;

        // ── Perform native scroll (bypasses stopped Lenis) ──
        if (nav.type === 'project' || nav.type === 'blog' || nav.type === 'blog-list') {
          window.scrollTo(0, 0);
        } else if (scrollTargetId) {
          const el = document.getElementById(scrollTargetId);
          if (el) {
            const offset = getDocumentOffset(el);
            window.scrollTo(0, offset);
          } else {
            window.scrollTo(0, 0);
          }
        } else {
          window.scrollTo(0, 0);
        }

        // Sync Lenis's internal state with the new native scroll position
        // so there's no visible jump when lenis.start() is called later
        if (lenis) lenis.resize();
      }

      // Start the reveal phase (sliding curtain up off-screen)
      setOverlayState('revealed');

    } else if (overlayState === 'revealed') {
      // ──────────────────────────────────────────────────────────────
      // Transition is fully complete. Enable scroll and reset overlay.
      // ──────────────────────────────────────────────────────────────
      lenis?.start();
      setOverlayState('hidden');
    }
  }, [lenis, activeBlogList, overlayState]);

  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col items-center w-full selection:bg-white selection:text-black">
      <CustomCursor />
      <div className="w-full max-w-[98vw] xl:max-w-[1560px] flex flex-col items-center relative">
        {activeProjectId && (
          <ProjectDetail
            key={`project-${activeProjectId}`}
            projectId={activeProjectId}
            onBack={navigateBack}
          />
        )}

        {activeBlogId && (
          <BlogDetail
            key={`blog-${activeBlogId}`}
            blogId={activeBlogId}
            onBack={navigateBackFromBlog}
            onNavigateToBlog={navigateToBlog}
          />
        )}

        {activeBlogList && (
          <BlogList
            key="blog-list"
            onBack={navigateBackFromBlogList}
            onNavigateToBlog={navigateToBlog}
          />
        )}
        
        <div 
          className="w-full flex flex-col items-center"
          style={{ display: (activeProjectId || activeBlogId || activeBlogList) ? 'none' : 'flex' }}
        >
          <Header />
          <main className="w-full flex flex-col">
            <HeroTitle />
            <LogoBar />
            <HeroImageCard />
            <About />
            <SelectedWork onNavigateToProject={navigateToProject} />
            <Services />
            <Blog onNavigateToBlog={navigateToBlog} onNavigateToBlogList={navigateToBlogList} />
          </main>
        </div>
      </div>

      {/* ── Full-screen page-transition overlay ── */}
      <motion.div
        variants={{
          hidden: { y: "100%" },
          covered: { y: "0%" },
          revealed: { y: "-100%" }
        }}
        initial="hidden"
        animate={overlayState}
        transition={
          overlayState === 'hidden'
            ? { duration: 0 }
            : { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
        onAnimationComplete={onOverlayAnimComplete}
        className="fixed inset-0 bg-black z-[9999]"
        style={{
          pointerEvents: (overlayState === 'covered' || overlayState === 'revealed') ? 'all' : 'none'
        }}
      />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Lenis root options={{ lerp: 0.035, duration: 2.0, smoothWheel: true, wheelMultiplier: 0.8, touchMultiplier: 1.5 }}>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <AppContent />
    </Lenis>
  );
}

export default App;
