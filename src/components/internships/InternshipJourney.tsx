import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MousePointerClick, UserCheck, BookOpen, Layers, CalendarCheck, MonitorPlay, Award, Briefcase } from 'lucide-react';

export const InternshipJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    { icon: <MousePointerClick size={24} />, title: 'Apply', desc: 'Submit application' },
    { icon: <UserCheck size={24} />, title: 'Selected', desc: 'Screening round' },
    { icon: <BookOpen size={24} />, title: 'Training', desc: 'Learn core skills' },
    { icon: <Layers size={24} />, title: 'Project Allocation', desc: 'Get assigned to team' },
    { icon: <CalendarCheck size={24} />, title: 'Weekly Reviews', desc: 'Feedback sessions' },
    { icon: <MonitorPlay size={24} />, title: 'Project Demo', desc: 'Showcase work' },
    { icon: <Award size={24} />, title: 'Certification', desc: 'Earn credentials' },
    { icon: <Briefcase size={24} />, title: 'Placement Support', desc: 'Get hired' },
  ];

  return (
    <section className="bg-white py-24 px-[80px] min-h-[1200px] font-sans relative">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-[40px] font-[800] text-[#0F172A] mb-4 font-['Inter']">
            Your Internship Journey
          </h2>
          <p className="text-lg text-[#64748B] font-['Inter']">
            A step-by-step roadmap to launch your career in tech.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto h-[900px]">
          {/* Static Background Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-gray-200 rounded-full" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-[var(--color-primary)] rounded-full origin-top"
            style={{ scaleY }}
          />

          {/* Timeline Nodes */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex items-center justify-center w-full ${isEven ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 flex ${isEven ? 'justify-start pl-16' : 'justify-end pr-16'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white border border-[#E2E8F0] shadow-sm rounded-[20px] p-6 max-w-[320px] w-full relative group hover:border-[var(--color-primary)] hover:shadow-md transition-all"
                    >
                      {/* Arrow pointer */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[#E2E8F0] rotate-45 group-hover:border-[var(--color-primary)] transition-colors
                        ${isEven ? '-left-[9px] border-l border-b' : '-right-[9px] border-r border-t'}
                      `} />
                      
                      <h3 className="text-xl font-bold text-[#0F172A] font-['Inter'] mb-2">{step.title}</h3>
                      <p className="text-[#64748B]">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Icon Node */}
                  <div className="w-[60px] h-[60px] absolute left-1/2 -translate-x-1/2 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-gray-400 z-20">
                    {/* Inner active fill handled by Framer Motion based on scroll can be complex, using a simple hover/view trigger for color */}
                    <motion.div 
                      initial={{ backgroundColor: '#fff', borderColor: '#E2E8F0', color: '#94A3B8' }}
                      whileInView={{ backgroundColor: 'var(--color-primary)', borderColor: '#bfdbfe', color: '#fff' }}
                      viewport={{ once: true, margin: "-200px" }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full rounded-full border-4 flex items-center justify-center"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  <div className="w-1/2" /> {/* Empty spacer */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
