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
import { ProjectDetail } from './components/ProjectDetail';
import { CustomCursor } from './components/CustomCursor';

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

  // Overlay animation state
  const [overlayVisible, setOverlayVisible] = useState(false);
  // Ref tracks the phase so onAnimationComplete knows what to do.
  // Using a ref (not state) keeps navigateToProject / navigateBack referentially
  // stable so SelectedWork / ProjectDetail don't re-render on phase changes.
  const phaseRef = useRef<'idle' | 'covering' | 'revealing'>('idle');
  const pendingNavRef = useRef<{ type: 'project'; id: string } | { type: 'home' } | null>(null);

  const lenis = useLenis();

  // ── Browser back / forward button ────────────────────────────────────
  useEffect(() => {
    const onPopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        pendingNavRef.current = { type: 'project', id: hash.replace('#project/', '') };
      } else {
        pendingNavRef.current = { type: 'home' };
      }
      // Only start a new transition if one isn't already running
      if (phaseRef.current === 'idle') {
        phaseRef.current = 'covering';
        setOverlayVisible(true);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // ── Programmatic navigation (called by child components) ─────────────
  const navigateToProject = useCallback((projectId: string) => {
    if (phaseRef.current !== 'idle') return; // guard against double-click
    pendingNavRef.current = { type: 'project', id: projectId };
    phaseRef.current = 'covering';
    setOverlayVisible(true);
  }, []);

  const navigateBack = useCallback(() => {
    if (phaseRef.current !== 'idle') return;
    pendingNavRef.current = { type: 'home' };
    phaseRef.current = 'covering';
    setOverlayVisible(true);
  }, []);

  // ── Overlay animation complete ───────────────────────────────────────
  const onOverlayAnimComplete = useCallback(() => {
    if (phaseRef.current === 'covering') {
      // ──────────────────────────────────────────────────────────────
      // The screen is now fully black.  Swap content + fix scroll.
      // ──────────────────────────────────────────────────────────────
      const nav = pendingNavRef.current;
      pendingNavRef.current = null;

      if (nav) {
        // flushSync guarantees React commits the new DOM synchronously
        // so DOM elements like #projects exist when we scroll to them.
        flushSync(() => {
          if (nav.type === 'project') {
            window.history.pushState(null, '', `#project/${nav.id}`);
            setActiveProjectId(nav.id);
          } else {
            window.history.pushState(null, '', window.location.pathname);
            setActiveProjectId(null);
          }
        });

        // Scroll to the correct position (invisible — overlay is opaque)
        // We use requestAnimationFrame to ensure the browser has computed the new layout heights
        requestAnimationFrame(() => {
          if (lenis) lenis.resize();
          
          if (nav.type === 'project') {
            // Project page → scroll to top
            if (lenis) lenis.scrollTo(0, { immediate: true });
            else window.scrollTo(0, 0);
          } else {
            // Home page → scroll to the Selected Work section
            const el = document.getElementById('projects');
            if (el) {
              if (lenis) lenis.scrollTo(el, { immediate: true });
              else el.scrollIntoView({ behavior: 'auto', block: 'start' });
            } else {
              // Fallback if element not found
              if (lenis) lenis.scrollTo(0, { immediate: true });
              else window.scrollTo(0, 0);
            }
          }
        });
      }

      // Start the reveal animation (opacity 1 → 0)
      phaseRef.current = 'revealing';
      setOverlayVisible(false);

    } else if (phaseRef.current === 'revealing') {
      // ──────────────────────────────────────────────────────────────
      // Overlay is fully transparent — transition complete.
      // ──────────────────────────────────────────────────────────────
      phaseRef.current = 'idle';
    }
  }, [lenis]);

  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col items-center w-full selection:bg-white selection:text-black">
      <CustomCursor />
      <div className="w-full max-w-[98vw] xl:max-w-[1560px] flex flex-col items-center">
        {activeProjectId ? (
          <ProjectDetail
            key={`project-${activeProjectId}`}
            projectId={activeProjectId}
            onBack={navigateBack}
          />
        ) : (
          <div className="w-full flex flex-col items-center">
            <Header />
            <main className="w-full flex flex-col">
              <HeroTitle />
              <LogoBar />
              <HeroImageCard />
              <About />
              <SelectedWork onNavigateToProject={navigateToProject} />
            </main>
          </div>
        )}
      </div>

      {/* ── Full-screen page-transition overlay ── */}
      <motion.div
        initial={false}
        animate={{ opacity: overlayVisible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={onOverlayAnimComplete}
        className="fixed inset-0 bg-black z-[9999]"
        style={{ pointerEvents: overlayVisible ? 'all' : 'none' }}
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
