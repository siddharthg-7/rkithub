import React, { useState, useEffect, useRef } from 'react';
import { HeroLeft } from './HeroLeft';
import { HeroRight } from './HeroRight';
import { JourneyMobile } from './JourneyMobile';
import { PlacementTicker } from './PlacementTicker';
import { JourneyState, JOURNEY_STEPS, NODE_PROGRESS } from './types';
import gsap from 'gsap';

export const Hero = () => {
  const [currentStep, setCurrentStep] = useState<JourneyState>(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Memoize random particles
  const particles = React.useMemo(() => [...Array(10)].map(() => ({
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    opacity: 0.2 + Math.random() * 0.4,
    delay: Math.random() * 8 + 's'
  })), []);
  const [isPaused, setIsPaused] = useState(false);

  // Intersection Observer — pause animations when hero scrolls out of view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsPaused(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Pause/resume the global GSAP timeline
  useEffect(() => {
    gsap.globalTimeline.timeScale(isPaused ? 0 : 1);
  }, [isPaused]);

  // Master Timeline Setup
  useEffect(() => {
    if (isPaused) return;

    let isAnimating = true;
    let currentTl: gsap.core.Timeline | null = null;
    let initialDelay: gsap.core.Tween | null = null;

    // Small delay to ensure DOM and SVGs are fully rendered
    const initTimer = setTimeout(() => {
      if (!isAnimating) return;

      // Programmer entrance animation
      const getInitialOpacity = () => {
        if (window.innerWidth < 1024) return 0.20;
        if (window.innerWidth < 1280) return 0.25;
        return 0.35; // Increased visibility for testing
      };

      gsap.fromTo('.hero-programmer-wrapper', 
        { 
          opacity: 0, 
          x: 30, 
          scale: 1.06, 
          rotation: -2,
          filter: 'blur(2px) brightness(0.55) contrast(0.85) saturate(0.6)'
        },
        { 
          opacity: getInitialOpacity(),
          x: 0, 
          scale: 1, 
          duration: 1.4,
          ease: 'power3.out',
          delay: 0.1
        }
      );

      const path = document.querySelector('.hero-base-arc') as SVGPathElement;
      if (!path) return;
      const totalLength = path.getTotalLength();

      // --- INITIAL SETUP ---
      const pt0 = path.getPointAtLength(0);
      gsap.set('.hero-active-arc', { strokeDasharray: totalLength, strokeDashoffset: totalLength });
      gsap.set('.hero-trail-arc', { strokeDasharray: totalLength, strokeDashoffset: totalLength, opacity: 1 });
      
      gsap.set('.hero-glow-container', { left: pt0.x, top: pt0.y });
      gsap.set('.hero-glow-outer, .hero-glow-ring, .hero-glow-core', { 
        backgroundColor: JOURNEY_STEPS[0].color, 
        borderColor: JOURNEY_STEPS[0].color 
      });

      // Initialize node 0 UI state
      gsap.set('.hero-node-card-0', { opacity: 1 });
      gsap.set('.hero-node-icon-0', { color: JOURNEY_STEPS[0].color });
      gsap.set('.hero-node-label-0', { opacity: 1, scale: 1, borderColor: JOURNEY_STEPS[0].color });
      gsap.set('.hero-node-number-0', { color: JOURNEY_STEPS[0].color });
      gsap.set('.hero-node-desc-0', { color: 'rgba(255,255,255,0.9)', x: 0 });
      document.querySelector('.hero-node-card-0')?.classList.add('node-breathe');

      // --- RECURSIVE STEP ANIMATION ---
      const playStep = (i: number) => {
        if (!isAnimating) return;
        
        const currentProgress = NODE_PROGRESS[i];
        const nextI = (i + 1) % 4;
        const nextProgress = NODE_PROGRESS[nextI];
        
        const currentColor = JOURNEY_STEPS[i].color;
        const nextColor = JOURNEY_STEPS[nextI].color;

        const tl = gsap.timeline({
          onComplete: () => {
            playStep(nextI); // recurse for the next step
          }
        });
        currentTl = tl;

        // If transitioning from Placement (3) back to Training (0)
        if (i === 3 && nextI === 0) {
          // Fade out
          tl.to('.hero-glow-container, .hero-active-arc, .hero-trail-arc', { opacity: 0, duration: 0.5, ease: 'power2.inOut' });
          
          // Reset position and arcs to start
          tl.set('.hero-active-arc', { strokeDashoffset: totalLength, stroke: nextColor });
          tl.set('.hero-trail-arc', { strokeDashoffset: totalLength, stroke: nextColor });
          tl.set('.hero-glow-container', { left: pt0.x, top: pt0.y });
          tl.set('.hero-glow-outer, .hero-glow-ring, .hero-glow-core', { 
            backgroundColor: nextColor, 
            borderColor: nextColor 
          });

          // Fade in
          tl.to('.hero-glow-container, .hero-active-arc, .hero-trail-arc', { opacity: 1, duration: 0.5, ease: 'power2.inOut' });
          
          tl.to({}, { duration: 0.2 });
        } else {
          // --- 1. Ball Moving (900ms) ---
          tl.to('.hero-active-arc, .hero-trail-arc', { stroke: nextColor, duration: 0.9 }, 'moveBall');
          tl.to('.hero-glow-outer, .hero-glow-ring, .hero-glow-core', { 
            backgroundColor: nextColor, 
            borderColor: nextColor,
            duration: 0.9 
          }, 'moveBall');

          const dummy = { p: currentProgress };
          tl.to(dummy, {
            p: nextProgress,
            duration: 0.9,
            ease: 'power2.inOut',
            onUpdate: () => {
              const p = dummy.p;
              const pt = path.getPointAtLength(p * totalLength);
              gsap.set('.hero-glow-container', { left: pt.x, top: pt.y });
              gsap.set('.hero-active-arc', { strokeDashoffset: totalLength * (1 - p) });
              gsap.set('.hero-trail-arc', { strokeDashoffset: (totalLength * (1 - p)) + 40 });
            }
          }, 'moveBall');

          // Trail fade out behind ball
          tl.to('.hero-trail-arc', { opacity: 0, duration: 0.2 }, 'moveBall+=0.7');
        }

        // --- 2. Ball completely stops ---
        tl.to({}, { duration: 0.1 });

        tl.call(() => setCurrentStep(nextI as JourneyState));

        // --- 3. Node Pulse & Active State Transfer (250ms) ---
        tl.to(`.hero-node-card-${i}`, { opacity: 0.6, duration: 0.25 }, 'nodePulse');
        tl.to(`.hero-node-icon-${i}`, { color: 'rgba(255,255,255,0.8)', duration: 0.25 }, 'nodePulse');
        
        tl.to(`.hero-node-card-${nextI}`, { opacity: 1, duration: 0.25 }, 'nodePulse');
        tl.to(`.hero-node-icon-${nextI}`, { color: nextColor, duration: 0.25 }, 'nodePulse');
        
        // Glow + Programmer update (900ms)
        const progStates = [
          { op: 0.35, br: 0.65 }, // Training
          { op: 0.45, br: 0.72 }, // Projects
          { op: 0.35, br: 0.68 }, // Internship
          { op: 0.25, br: 0.62 }, // Placement
        ];
        
        const getResponsiveOpacity = (desktopOp: number) => {
          if (window.innerWidth < 1024) return 0.10;
          if (window.innerWidth < 1280) return 0.12;
          return desktopOp;
        };

        // Note: programmer update starts at 'moveBall' if we are moving, but if we faded out (i=3), 'moveBall' label doesn't exist!
        // We'll safely add it at the same time as nodePulse if 'moveBall' wasn't used.
        tl.to('.hero-programmer-wrapper', {
          opacity: () => getResponsiveOpacity(progStates[nextI].op),
          filter: () => `blur(2px) brightness(${progStates[nextI].br}) contrast(0.85) saturate(0.6)`,
          duration: 0.9,
          ease: 'power2.inOut'
        }, (i === 3 && nextI === 0) ? 'nodePulse' : 'moveBall');

        // Pulse ring expanding
        tl.fromTo(`.hero-node-pulse-${nextI}`, 
          { scale: 1, opacity: 0.6 }, 
          { scale: 1.6, opacity: 0, duration: 0.6, ease: 'power2.out' }, 
          'nodePulse'
        );

        // --- 4. Glow expands (200ms) ---
        tl.to('.hero-glow-container', { scale: 0.95, duration: 0.05 }, 'nodePulse');
        tl.to('.hero-glow-container', { scale: 1.05, duration: 0.1 });
        tl.to('.hero-glow-container', { scale: 1, duration: 0.05 });
        tl.to('.hero-glow-outer', { opacity: 0.8, filter: 'blur(18px)', duration: 0.2 }, 'nodePulse');

        // --- 5. Label activates (250ms) ---
        tl.to(`.hero-node-label-${i}`, { opacity: 0.45, scale: 0.98, borderColor: 'transparent', duration: 0.25 }, 'labelActivate');
        tl.to(`.hero-node-number-${i}`, { color: 'rgba(255,255,255,0.6)', duration: 0.25 }, 'labelActivate');
        tl.to(`.hero-node-desc-${i}`, { color: 'rgba(255,255,255,0.5)', duration: 0.25 }, 'labelActivate');
        
        tl.fromTo(`.hero-node-label-${nextI}`,
          { opacity: 0.45, scale: 0.98, borderColor: 'transparent' },
          { opacity: 1, scale: 1, borderColor: nextColor, duration: 0.25, ease: 'back.out(1.5)' },
          'labelActivate'
        );
        tl.fromTo(`.hero-node-desc-${nextI}`,
          { x: 6, color: 'rgba(255,255,255,0.5)' },
          { x: 0, color: 'rgba(255,255,255,0.9)', duration: 0.25 },
          'labelActivate'
        );
        tl.to(`.hero-node-number-${nextI}`, { color: nextColor, duration: 0.25 }, 'labelActivate');

        // Start breathing animation on the active node card
        tl.call(() => {
          document.querySelectorAll('.hero-node-card').forEach(el => el.classList.remove('node-breathe'));
          const activeCard = document.querySelector(`.hero-node-card-${nextI}`);
          if (activeCard) activeCard.classList.add('node-breathe');
        });

        // --- 6. WAIT 400ms ---
        tl.to({}, { duration: 0.4 });

        // --- 7. Left Heading & Paragraph exits ---
        tl.to(`.hero-step-${i}`, { 
          opacity: 0, 
          y: -18, 
          filter: 'blur(8px)', 
          duration: 0.3,
          ease: 'power2.in'
        });
        tl.set(`.hero-step-${i}`, { visibility: 'hidden', pointerEvents: 'none' });

        // --- 8. 100ms gap ---
        tl.to({}, { duration: 0.1 });

        // --- 9. New Heading & Paragraph enters (650ms) ---
        tl.set(`.hero-step-${nextI}`, { pointerEvents: 'auto', visibility: 'visible' });
        tl.fromTo(`.hero-step-${nextI}`, 
          { opacity: 0, y: 18, filter: 'blur(8px)' },
          { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            duration: 0.65, 
            ease: 'power3.out'
          }
        );

        // Reset trail for next move
        tl.set('.hero-trail-arc', { opacity: 1 });

        // --- 10. Freeze (User reads) 1500ms ---
        tl.to({}, { duration: 1.5 });
      };

      // Start the infinite loop with an initial delay so the user can read the first state
      initialDelay = gsap.delayedCall(1.5, () => {
        playStep(0);
      });

    }, 100);

    return () => {
      isAnimating = false;
      clearTimeout(initTimer);
      if (initialDelay) initialDelay.kill();
      if (currentTl) currentTl.kill();
    };
  }, [isPaused]);

  // Noise texture SVG data URI
  const noisePattern = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <div
      ref={heroRef}
      className="relative w-full h-auto min-h-[600px] md:min-h-[760px] md:h-[760px] lg:h-[840px] xl:h-[880px] overflow-hidden flex flex-col z-0"
    >
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .node-breathe {
          animation: breathe 2.4s ease-in-out infinite;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .particle-float {
          animation: floatY 8s ease-in-out infinite;
        }
        .hero-programmer-wrapper {
          transform-origin: bottom center;
        }
      `}</style>
      {/* LAYER 7: Placement Ticker (only on step 3) */}
      <div className="z-50 relative shrink-0">
        <PlacementTicker isActive={currentStep === 3} />
      </div>

      {/* LAYER 1: Solid Background */}
      <div className="absolute inset-0 bg-[#0a0a0a] -z-10" />

      {/* LAYER 2: Gradient Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 100%)' }}
      />

      {/* LAYER 3: Background Grid - opacity 3% */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* LAYER 4: Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.01] mix-blend-overlay -z-10"
        style={{ backgroundImage: noisePattern }}
      />

      {/* LAYER 4.1: Glow Behind Programmer */}
      <div
        className="hidden md:block absolute bottom-0 left-[35%] w-[600px] h-[600px] rounded-full pointer-events-none blur-[200px] opacity-[0.20] -z-10"
        style={{ backgroundColor: '#2563EB' }}
      />

      {/* LAYER 4.2: Programmer Image */}
      <div className="hidden md:block absolute bottom-0 left-[15%] lg:left-[25%] xl:left-[30%] w-[600px] lg:w-[850px] xl:w-[1050px] z-0 pointer-events-none hero-programmer-wrapper">
         <div className="relative w-full h-full">
            <img 
              src="/codingperson.webp" 
              alt="Programmer"
              className="w-full h-auto origin-bottom"
            />
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: 'rgba(7,18,38,0.4)', mixBlendMode: 'multiply' }} 
            />
         </div>
      </div>

      {/* LAYER 5: Decorative Glow */}
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-[200px] opacity-[0.25] -z-10"
        style={{ backgroundColor: '#2563EB' }}
      />

      {/* LAYER 5.1: Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full particle-float"
            style={{ left: p.left, top: p.top, opacity: p.opacity, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* LAYER 6: Hero Content */}
      <div className="relative max-w-[1320px] w-full mx-auto px-[20px] md:px-[24px] lg:px-[32px] flex-grow flex items-center z-10 h-full py-16 lg:py-0">

        {/* Desktop: 52 / 48 split */}
        <div
          className="hidden lg:grid w-full items-center"
          style={{ gridTemplateColumns: 'minmax(0, 5.2fr) minmax(0, 4.8fr)', gap: '48px' }}
        >
          <div className="w-full flex justify-start">
            <HeroLeft />
          </div>
          <div className="w-full flex justify-center items-center h-full">
            <HeroRight />
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="block lg:hidden w-full space-y-12">
          <HeroLeft />
          <JourneyMobile activeNode={currentStep} onNodeChange={setCurrentStep} />
        </div>
      </div>
    </div>
  );
};
