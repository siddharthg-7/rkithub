import React, { useEffect, useRef } from 'react';
import { Users, Building2, UserCheck, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StatsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0B4F9C] font-sans relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#22C55E]/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          {/* Stat 1 */}
          <div className="stat-item flex flex-row items-center justify-center md:justify-start gap-4 pt-6 md:pt-0 pl-0 md:pl-8 group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl md:text-[28px] font-[800] text-white leading-tight">
                3000+
              </div>
              <p className="text-[13px] text-blue-100 font-medium">
                Students Trained
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="stat-item flex flex-row items-center justify-center md:justify-start gap-4 pt-6 md:pt-0 pl-0 md:pl-8 group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl md:text-[28px] font-[800] text-white leading-tight">
                10+
              </div>
              <p className="text-[13px] text-blue-100 font-medium">
                Hiring Partners
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="stat-item flex flex-row items-center justify-center md:justify-start gap-4 pt-6 md:pt-0 pl-0 md:pl-8 group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl md:text-[28px] font-[800] text-white leading-tight">
                10+
              </div>
              <p className="text-[13px] text-blue-100 font-medium">
                Industry Trainers
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="stat-item flex flex-row items-center justify-center md:justify-start gap-4 pt-6 md:pt-0 pl-0 md:pl-8 group border-t md:border-t-0 md:border-l border-white/20">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl md:text-[28px] font-[800] text-white leading-tight">
                95%
              </div>
              <p className="text-[13px] text-blue-100 font-medium">
                Success Rate
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
