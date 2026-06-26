import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const PlacementMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    
    const elements = scrollRef.current.children;
    if (elements.length === 0) return;

    let totalWidth = 0;
    for (let i = 0; i < elements.length; i++) {
      totalWidth += (elements[i] as HTMLElement).offsetWidth;
    }

    // 40px per second speed
    const duration = totalWidth / 40;

    const tl = gsap.to(scrollRef.current, {
      x: `-=${totalWidth / 2}`,
      duration: duration / 2, // Because we duplicated it, half the width is one full cycle
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2))
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  const placements = [
    "Durga → Enmoval → 3.5 LPA",
    "Vijaya → Broadridge → 5.5 LPA",
    "Manogna → CGI → 7.5 LPA",
    "Chaitanya → Fin Echo Engineering → 3.5 LPA"
  ];

  // Duplicate the content once to create a seamless loop
  const displayItems = [...placements, ...placements];

  return (
    <div 
      ref={containerRef}
      className="w-full h-[48px] flex items-center overflow-hidden"
      style={{ 
        background: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      {/* Left Badge - Fixed */}
      <div 
        className="h-full flex items-center justify-center shrink-0 z-20"
        style={{ 
          width: '180px',
          background: 'rgba(37,99,235,0.15)',
        }}
      >
        <span className="text-[12px] font-bold text-blue-100 tracking-wider">
           RECENT PLACEMENTS
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
              <div className="flex items-center text-[14px] font-medium text-white/80 px-8">
                {text.split('→').map((part, pIdx, arr) => (
                  <React.Fragment key={pIdx}>
                    <span>{part.trim()}</span>
                    {pIdx < arr.length - 1 && (
                      <span className="mx-2 text-white/40">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <span className="text-white/20 px-4">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
