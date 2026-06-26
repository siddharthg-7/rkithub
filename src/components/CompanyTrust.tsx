import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const COMPANIES = [
  { name: 'CGI', src: '/logo_cgi_color.png' },
  { name: 'TCS', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png?_=20210617123944' },
  { name: 'Infosys', src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'Broadridge', src: '/broadridge.svg' },
  { name: 'Wipro', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'Cognizant', src: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
  { name: 'Capgemini', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
  { name: 'Virtusa', src: '/virtusa.png' },
  { name: 'Tech Mahindra', src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg' }
];

export const CompanyTrust = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current, 
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // We need to wait a tick for images to load or just calculate width.
    // Since images might not be loaded, using offsetWidth immediately can be buggy.
    // But since we use fixed heights (max-h-40px), the widths are usually determined quickly.
    // We will use a ResizeObserver to update the animation if layout changes.
    let tl: gsap.core.Tween;
    
    const initMarquee = () => {
      if (!marqueeRef.current) return;
      const logos = marqueeRef.current.children;
      if (!logos.length) return;
      
      let totalWidth = 0;
      const originalSetLength = COMPANIES.length * 2; // each company has a logo div + gap div
      for (let i = 0; i < originalSetLength; i++) {
        totalWidth += (logos[i] as HTMLElement).offsetWidth;
      }
      
      const isMobile = window.innerWidth < 768;
      const speed = isMobile ? 28 : 35;
      const duration = totalWidth / speed;
      
      if (tl) tl.kill();
      
      tl = gsap.to(marqueeRef.current, {
        x: -totalWidth,
        duration: duration,
        ease: 'none',
        repeat: -1
      });
      
      if (isHovered) {
        tl.pause();
      }
    };
    
    // Slight delay to ensure layout is computed
    setTimeout(initMarquee, 100);
    
    // Pause/Resume on hover
    if (tl) {
      if (isHovered) tl.pause();
      else tl.play();
    }
    
    return () => {
      if (tl) tl.kill();
    };
  }, [isHovered]);

  return (
    <section 
      ref={sectionRef}
      className="w-full relative z-20 pb-12"
      style={{ background: 'linear-gradient(180deg, #08111F 0%, #F8FAFC 18%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[24px] lg:px-[32px] -mt-10">
        {/* Floating White Panel (Agency-Level Improvement) */}
        <div 
          ref={containerRef}
          className="bg-white rounded-[24px] border border-[#E2E8F0] w-full flex flex-col items-center justify-center pt-8 pb-8 overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(15,23,42,0.08)' }}
        >
          <h2 className="font-heading font-[600] text-[#0F172A] text-[28px] lg:text-[34px] m-0 mb-[8px]">
            Where Our Students Work
          </h2>
          <p className="font-sans text-[16px] text-[#64748B] m-0 mb-[36px] text-center px-4 leading-none">
            Placed across leading IT companies and growing startups.
          </p>
          
          {/* Logo Marquee Area */}
          <div 
            className="w-full h-[82px] relative flex items-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Infinite Track */}
            <div 
              ref={marqueeRef}
              className="flex items-center absolute left-0 h-full"
            >
              {[...COMPANIES, ...COMPANIES].map((company, index) => {
                const isEndOfOriginalSet = index === COMPANIES.length - 1;
                // Add dot after every 4th item, but not at the end of the original set to maintain rhythm
                const showDot = (index + 1) % 4 === 0 && !isEndOfOriginalSet;
                
                return (
                  <React.Fragment key={index}>
                    <div className="group flex items-center justify-center shrink-0 cursor-pointer h-full px-2">
                      <img 
                        src={company.src} 
                        alt={company.name}
                        className="max-h-[28px] md:max-h-[40px] w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.08] transition-all duration-[250ms] ease-[var(--ease-custom)]"
                        loading={index > COMPANIES.length ? "lazy" : "eager"}
                      />
                    </div>
                    {/* Spacing gap (90px) + optional dot */}
                    <div className="shrink-0 flex items-center justify-center h-full" style={{ width: '90px' }}>
                      {showDot && <div className="w-1 h-1 rounded-full bg-[#CBD5E1]" />}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          
          {/* Section Divider */}
          <div className="w-full h-[1px] bg-[#E2E8F0] mt-[32px]" />
        </div>
      </div>
    </section>
  );
};
