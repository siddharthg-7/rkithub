import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Briefcase, Users, Wrench, FileText, UserCheck, Award, Target } from 'lucide-react';

export const HeroSection = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbitRef.current) return;

    // Slow orbit animation using GSAP
    gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: 'linear',
    });

    // Counter-rotate the icons so they remain upright
    const icons = orbitRef.current.querySelectorAll('.orbit-node');
    gsap.to(icons, {
      rotation: -360,
      duration: 15,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  const nodes = [
    { label: 'Live Projects', icon: <Briefcase size={24} /> },
    { label: 'Mentorship', icon: <Users size={24} /> },
    { label: 'Industry Tools', icon: <Wrench size={24} /> },
    { label: 'Resume Building', icon: <FileText size={24} /> },
    { label: 'Mock Interviews', icon: <UserCheck size={24} /> },
    { label: 'Placement Support', icon: <Target size={24} /> },
    { label: 'Certification', icon: <Award size={24} /> },
  ];

  return (
    <section className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex items-center justify-center font-sans">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, var(--color-primary) 0%, var(--color-primary-dark) 40%, var(--color-bg-dark) 100%)'
        }}
      />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] px-6 md:px-[80px] mx-auto relative z-10">
        
        {/* Left Side (45%) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[45%] flex flex-col items-start text-white"
        >
          <h1 className="text-[clamp(40px,8vw,84px)] font-[800] leading-tight md:leading-none mb-6 font-['Inter'] mt-12 md:mt-0">
            Building<br />
            <span className="block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
              Industry-Ready Talent.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-[500px] font-['Inter']">
            Learn. Build. Get Hired.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[var(--color-primary)] hover:bg-[#063a7d] text-white px-8 py-4 rounded-[14px] font-bold text-base transition-all shadow-[0_0_20px_rgba(10,77,162,0.5)]">
              Apply For Internship
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-[#E2E8F0]/30 hover:bg-white/10 text-white px-8 py-4 rounded-[14px] font-bold text-base transition-all flex items-center justify-center gap-2">
              Explore Tracks <span>&rarr;</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side (55%) */}
        <div className="hidden lg:flex w-[55%] relative h-[600px] items-center justify-center perspective-[1000px]">
          
          {/* Center Node */}
          <div 
            className="absolute z-20 flex flex-col items-center justify-center w-[220px] h-[220px] bg-gradient-to-b from-[#1e40af] to-[#1e3a8a] rounded-full text-white shadow-[0_0_80px_#2563EB] border-4 border-blue-400/30"
          >
            <UserCheck size={48} className="mb-2" />
            <span className="text-2xl font-bold tracking-widest">YOU</span>
          </div>

          {/* SVG Connecting Curves */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 600">
            <circle cx="300" cy="300" r="240" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="5 5" />
          </svg>

          {/* Orbiting Container */}
          <div ref={orbitRef} className="absolute inset-0 z-20 flex items-center justify-center w-[600px] h-[600px] rounded-full mx-auto my-auto">
            {nodes.map((node, index) => {
              const angle = (index / nodes.length) * 360;
              const radius = 240;
              // Convert angle to radians for x,y calculation relative to center
              const radian = (angle * Math.PI) / 180;
              const x = radius * Math.cos(radian);
              const y = radius * Math.sin(radian);

              return (
                <div
                  key={index}
                  className="orbit-node absolute w-[110px] h-[110px] bg-[#0f172a]/80 backdrop-blur-md border border-white/20 rounded-full flex flex-col items-center justify-center text-center p-2 shadow-xl shadow-black/50"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="text-blue-400 mb-1">{node.icon}</div>
                  <span className="text-[10px] font-semibold text-gray-200 leading-tight">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
