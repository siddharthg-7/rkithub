import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

interface PlacementTickerProps {
  isActive: boolean;
}

export const PlacementTicker: React.FC<PlacementTickerProps> = ({ isActive }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !scrollRef.current) return;
    
    const elements = scrollRef.current.children;
    if (elements.length === 0) return;

    let totalWidth = 0;
    for (let i = 0; i < elements.length; i++) {
      totalWidth += (elements[i] as HTMLElement).getBoundingClientRect().width;
    }

    const duration = totalWidth / 40; // 40px per second speed

    const tl = gsap.fromTo(scrollRef.current,
      { x: 0 },
      {
        x: -(totalWidth / 2),
        duration: duration / 2,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      tl.kill();
    };
  }, [isActive]);

  const placements = [
    "Durga → Enmoval → 3.5 LPA",
    "Vijaya → Broadridge → 5.5 LPA",
    "Manogna → CGI → 7.5 LPA",
    "Chaitanya → Fin Echo Engineering → 3.5 LPA"
  ];

  const displayItems = [...placements, ...placements];

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-50 overflow-hidden rounded-full shadow-lg border border-white/10 w-[300px] md:w-[450px]"
          style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)' }}
        >
          <div className="flex w-full h-[40px] items-center">
            {/* Left Badge */}
            <div className="h-full flex items-center justify-center shrink-0 z-20 bg-emerald-500/20 px-3 md:px-4">
              <span className="text-[10px] md:text-[11px] font-bold text-emerald-300 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                PLACED
              </span>
            </div>
            
            {/* Right Marquee */}
            <div className="flex-1 overflow-hidden relative h-full">
              <div 
                ref={scrollRef}
                className="flex h-full items-center whitespace-nowrap absolute left-0"
              >
                {displayItems.map((text, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center text-[12px] md:text-[13px] font-medium text-white/90 px-4">
                      {text.split('→').map((part, pIdx, arr) => (
                        <React.Fragment key={pIdx}>
                          <span>{part.trim()}</span>
                          {pIdx < arr.length - 1 && (
                            <span className="mx-1.5 text-white/30">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <span className="text-white/20 px-2">•</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
