import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Code, Compass, Star } from 'lucide-react';

// --- COMPONENT DATA ---
const NODES = [
  {
    id: 0,
    title: 'Expert Mentorship',
    stat: 18,
    statSuffix: '+',
    statLabel: 'Industry Experts',
    icon: Users,
    pos: { x: 50, y: 12 }, 
    color: '#3B82F6', // blue
  },
  {
    id: 1,
    title: 'Internships',
    stat: 50,
    statSuffix: '+',
    statLabel: 'Hiring Partners',
    icon: Briefcase,
    pos: { x: 86.1, y: 38.3 },
    color: '#8B5CF6', // violet
  },
  {
    id: 2,
    title: 'Career Placement',
    stat: 95,
    statSuffix: '%',
    statLabel: 'Placement Success Rate',
    icon: Star,
    pos: { x: 72.3, y: 80.7 },
    color: '#06B6D4', // cyan
  },
  {
    id: 3,
    title: 'Career Guidance',
    stat: 1,
    statSuffix: '-on-1',
    statLabel: 'Mentorship',
    icon: Compass,
    pos: { x: 27.7, y: 80.7 },
    color: '#EC4899', // pink
  },
  {
    id: 4,
    title: 'Project-Based Learning',
    stat: 120,
    statSuffix: '+',
    statLabel: 'Production Projects Built',
    icon: Code,
    pos: { x: 13.9, y: 38.3 },
    color: '#10B981', // emerald
  }
];

// --- CUSTOM ANIMATED COUNTER ---
function AnimatedCounter({ value, isActive }: { value: number, isActive: boolean }) {
  // Start at 'value' so that inactive cards display their final data immediately on mount.
  const count = useMotionValue(value);
  const rounded = useTransform(count, Math.round);
  
  useEffect(() => {
    if (isActive) {
      count.set(0); // reset to beginning when flow reaches here
      // Delay the count to match the card expansion (after the 0.8s light travel)
      const timeout = setTimeout(() => {
        animate(count, value, { duration: 1.0, ease: "easeOut" });
      }, 800);
      return () => clearTimeout(timeout);
    }
    // When inactive, leave the count at its 'high' (value) state.
  }, [isActive, value, count]);

  return <motion.span>{rounded}</motion.span>;
}

// --- ANIMATED PATH COMPONENT ---
const LightPath = ({ isActive, endX, endY, color }: { isActive: boolean, endX: number, endY: number, color: string, key?: number | string }) => {
  // Center is (500, 500)
  const dx = endX - 500;
  const dy = endY - 500;
  const length = Math.sqrt(dx*dx + dy*dy);
  // Add a slight bezier curve to the path for an elegant swoop
  const nx = -dy / length * 50;
  const ny = dx / length * 50;
  const cx = 500 + dx/2 + nx;
  const cy = 500 + dy/2 + ny;
  
  const d = `M 500 500 Q ${cx} ${cy} ${endX} ${endY}`;

  return (
    <g>
      {/* Base subtle path (highlights when active) */}
      <path 
        d={d} 
        stroke={isActive ? color : "#E2E8F0"} 
        strokeWidth={isActive ? "2" : "1"} 
        fill="none" 
        className="transition-all duration-1000"
        style={{ opacity: isActive ? 0.6 : 0.15 }}
      />
      
      {/* Active Light pulse */}
      {isActive && (
        <motion.path
          d={d}
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 0.25, 0.25, 0],
            pathOffset: [0, 0, 1, 1],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </g>
  );
};

export const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Orchestrator: Cycle through nodes every 2.5 seconds
  useEffect(() => {
    if (isHovered) return; // Pause auto-play if user is interacting
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % NODES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative w-full bg-[#F8FAFC] pt-16 pb-24 md:pt-[120px] md:pb-[180px] overflow-hidden font-sans">
      
      <div className="max-w-[1320px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            A living <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-500 text-lg"
          >
            Everything you need for a successful tech career, all in one place.
          </motion.p>
        </div>

        {/* ECOSYSTEM MAP (Desktop) */}
        <div 
          className="hidden lg:block relative w-full h-[800px] max-w-[1000px] mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* SVG Connections Layer */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {NODES.map((node) => {
              // Convert percentages back to 0-1000 coordinate space for the SVG
              const endX = (node.pos.x / 100) * 1000;
              const endY = (node.pos.y / 100) * 1000;
              return (
                <LightPath 
                  key={node.id} 
                  isActive={activeIndex === node.id} 
                  endX={endX} 
                  endY={endY} 
                  color={node.color} 
                />
              );
            })}
          </svg>

          {/* Central Core */}
          <div 
            className="absolute left-1/2 top-1/2 z-20 flex items-center justify-center w-[140px] h-[140px] rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] border border-slate-100"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            {/* The single breathing pulse emitted when a node becomes active */}
            <motion.div 
              key={activeIndex}
              className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-20"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.4, 1], opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Logo and Text */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <img src="/logo.webp" alt="RK IT Hub Logo" className="w-12 h-12 object-contain mb-1.5" />
              <span className="font-extrabold text-[15px] text-slate-900 tracking-tight leading-none">RK IT HUB</span>
            </div>
            
            {/* Very subtle structural rings */}
            <div className="absolute inset-0 rounded-full border border-slate-200/50 pointer-events-none" />
            <div className="absolute inset-[-20px] rounded-full border border-slate-200/20 pointer-events-none" />
          </div>

          {/* Nodes */}
          {NODES.map((node) => {
            const isActive = activeIndex === node.id;

            return (
              <div
                key={node.id}
                className="absolute z-30"
                style={{
                  left: `${node.pos.x}%`,
                  top: `${node.pos.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setActiveIndex(node.id)}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ 
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ 
                    // When activating natively via auto-play, delay until light pulse arrives (0.8s).
                    // When user hovers, activate instantly.
                    delay: isActive && !isHovered ? 0.8 : 0, 
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`group w-[280px] bg-white/80 backdrop-blur-xl rounded-[24px] p-6 cursor-pointer border border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] ${
                    isActive 
                      ? 'shadow-[0_20px_40px_rgba(15,23,42,0.08)]' 
                      : 'shadow-[0_4px_10px_rgba(15,23,42,0.02)] hover:opacity-80'
                  }`}
                >
                  {/* Icon Area */}
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-700"
                    style={{ 
                      backgroundColor: `${node.color}10`, 
                      color: node.color,
                      transform: isActive ? 'rotate(3deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                    }}
                  >
                    <node.icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-[17px] text-slate-900 leading-tight mb-4">
                    {node.title}
                  </h3>
                  
                  {/* Thin Divider */}
                  <div className="w-full h-px bg-slate-100 mb-4" />

                  {/* Stats & Arrow */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div 
                        className="text-[32px] font-bold text-slate-900 leading-none mb-1 flex items-baseline transition-all duration-700"
                        style={{
                          transform: isActive ? 'translateY(0)' : 'translateY(4px)',
                          opacity: isActive ? 1 : 0.6
                        }}
                      >
                        <AnimatedCounter value={node.stat} isActive={isActive} />
                        <span style={{ color: node.color }} className="text-[20px] ml-1">{node.statSuffix}</span>
                      </div>
                      <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                        {node.statLabel}
                      </div>
                    </div>
                    
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-700"
                      style={{ 
                        backgroundColor: `${node.color}10`, 
                        color: node.color,
                        transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                        opacity: isActive ? 1 : 0
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile View (Vertical Sequence) */}
        <div className="block lg:hidden relative w-full pb-12">
          
          {/* Sticky Core on Mobile */}
          <div className="sticky top-[100px] z-20 flex flex-col items-center mb-16 pt-8 pb-4 bg-gradient-to-b from-[#F8FAFC] to-transparent">
            <div className="w-20 h-20 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center relative">
               <motion.div 
                 key={activeIndex}
                 className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-20"
                 initial={{ scale: 1, opacity: 0 }}
                 animate={{ scale: [1, 1.4, 1], opacity: [0, 0.3, 0] }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
               />
               <img src="/logo.webp" alt="RK IT Hub Logo" className="w-10 h-10 object-contain relative z-10" />
            </div>
          </div>

          <div className="flex flex-col gap-6 relative z-10">
            {NODES.map((node) => {
              const isActive = activeIndex === node.id;

              return (
                <div 
                  key={node.id} 
                  className="flex justify-center"
                  onClick={() => setActiveIndex(node.id)}
                >
                  <motion.div 
                    animate={{ 
                      scale: isActive ? 1.02 : 1,
                      opacity: isActive ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-full max-w-[320px] bg-white/70 backdrop-blur-xl rounded-[24px] p-6 border border-slate-100 transition-all duration-700 ${
                      isActive ? 'shadow-lg' : 'shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${node.color}10`, color: node.color }}
                      >
                        <node.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg text-slate-900">{node.title}</h3>
                    </div>
                    
                    <div className="w-full h-px bg-slate-100 mb-4" />
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-[32px] font-bold text-slate-900 leading-none mb-1 flex items-baseline">
                          <AnimatedCounter value={node.stat} isActive={isActive} />
                          <span style={{ color: node.color }} className="text-[20px] ml-1">{node.statSuffix}</span>
                        </div>
                        <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                          {node.statLabel}
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ color: node.color }} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      
      {/* Curved Bottom Divider (leading into placements) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.69V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};
