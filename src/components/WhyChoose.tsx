import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// --- CUSTOM ILLUSTRATIONS ---

const MentorIcon = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mentor-grad-1" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="mentor-grad-2" x1="120" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#93C5FD" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <filter id="mentor-glow" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#2563EB" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#mentor-glow)">
        <path d="M60 20 L100 40 L60 60 L20 40 Z" fill="url(#mentor-grad-1)" />
        <path d="M25 45 L25 75 C25 85 45 95 60 95 C75 95 95 85 95 75 L95 45 L60 62 Z" fill="url(#mentor-grad-2)" opacity="0.9" />
        <path d="M98 42 L98 80" stroke="url(#mentor-grad-1)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="98" cy="85" r="5" fill="#1D4ED8" />
      </g>
    </svg>
  </div>
);

const ProjectIcon = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="proj-grad-1" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="proj-grad-2" x1="0" y1="120" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7B7" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <filter id="proj-glow" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#059669" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#proj-glow)">
        <rect x="20" y="25" width="80" height="55" rx="6" fill="url(#proj-grad-1)" />
        <rect x="28" y="33" width="64" height="39" rx="2" fill="#FFFFFF" opacity="0.9" />
        <path d="M10 85 L110 85 C115 85 115 95 110 95 L10 95 C5 95 5 85 10 85 Z" fill="url(#proj-grad-2)" />
        <path d="M40 45 L50 55 L40 65" stroke="url(#proj-grad-1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M58 65 L70 65" stroke="url(#proj-grad-1)" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

const PlacementIcon = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="place-grad-1" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F472B6" />
          <stop offset="1" stopColor="#DB2777" />
        </linearGradient>
        <linearGradient id="place-grad-2" x1="120" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBCFE8" />
          <stop offset="1" stopColor="#BE185D" />
        </linearGradient>
        <filter id="place-glow" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#DB2777" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#place-glow)">
        <circle cx="60" cy="60" r="40" fill="url(#place-grad-1)" />
        <circle cx="60" cy="60" r="28" fill="#FFFFFF" opacity="0.95" />
        <circle cx="60" cy="60" r="16" fill="url(#place-grad-2)" />
        <path d="M60 60 L100 20" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
        <path d="M85 20 L100 20 L100 35 Z" fill="#0F172A" />
      </g>
    </svg>
  </div>
);

const TinyCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <circle cx="8" cy="8" r="8" fill="#EFF6FF" />
    <path d="M5 8L7 10L11 6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- COMPONENT DATA ---

const CARDS = [
  {
    title: 'Learn from Industry Experts',
    desc: 'Get guided by experienced mentors with practical industry knowledge.',
    features: ['Live Interactive Sessions', 'Doubt Support', 'Career Guidance'],
    cta: 'Meet Our Mentors →',
    icon: MentorIcon
  },
  {
    title: 'Build Projects That Impress Recruiters',
    desc: 'Every module ends with practical projects that strengthen your portfolio.',
    features: ['GitHub Portfolio', 'Real Client Scenarios', 'Resume Projects'],
    cta: 'See Student Projects →',
    icon: ProjectIcon
  },
  {
    title: 'Placement Support Until You\'re Hired',
    desc: 'From resume building to mock interviews, we help you prepare for every opportunity.',
    features: ['Resume Reviews', 'Mock Interviews', 'Hiring Assistance'],
    cta: 'View Placement Process →',
    icon: PlacementIcon
  }
];

// --- MAIN COMPONENT ---

export const WhyChoose = () => {
  return (
    <section className="bg-[#F8FAFC] py-[96px] pb-[100px] font-sans relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[1320px] w-full mx-auto px-[20px] md:px-[24px] lg:px-[32px] relative z-10 flex flex-col items-start md:items-center">
        
        {/* Animated Background Line (Agency Level Improvement) */}
        <div className="absolute top-[320px] left-0 w-full h-[1px] bg-[#E2E8F0] z-0 hidden lg:block overflow-hidden">
          <motion.div 
            className="w-[150px] h-[3px] -mt-[1px] rounded-full blur-[2px] absolute top-0"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.6), transparent)' }}
            animate={{ left: ['-10%', '110%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start md:items-center text-left md:text-center mb-[64px] w-full"
        >
          <div className="h-[38px] px-[18px] rounded-full bg-[#DBEAFE] text-[#2563EB] font-sans font-[600] text-[13px] flex items-center justify-center mb-[24px]">
            Why Students Choose RK IT Hub
          </div>
          <h2 className="font-heading font-[700] text-[36px] md:text-[48px] text-[#0F172A] m-0 mb-[16px] leading-[1.1]">
            Built Around Your Career, Not Just a Course.
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-[#64748B] m-0 max-w-[620px] leading-relaxed">
            Everything you need to become job-ready—from expert mentorship to placement preparation.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] w-full max-w-[1264px] mx-auto relative z-10">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            
            // Per-card hover spotlight logic
            const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
            const [isHovered, setIsHovered] = useState(false);
            const cardRef = useRef<HTMLDivElement>(null);

            const handleMouseMove = (e: React.MouseEvent) => {
              if (!cardRef.current) return;
              const rect = cardRef.current.getBoundingClientRect();
              setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            };

            return (
              <motion.div
                key={i}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative w-full h-[420px] bg-white rounded-[24px] border border-[#E2E8F0] hover:border-[#2563EB] transition-all duration-[300ms] overflow-hidden flex flex-col p-[32px] cursor-pointer hover:-translate-y-[8px]"
                style={{
                  boxShadow: isHovered ? '0 20px 50px rgba(15,23,42,0.08)' : 'none',
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Spotlight Gradient */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-[300ms]"
                  style={{
                    background: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37,99,235,0.06), transparent 100%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Oversized Icon Area */}
                  <div className="h-[100px] w-[100px] mb-[24px] shrink-0 transition-transform duration-[300ms] group-hover:scale-[1.08]" style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}>
                    <Icon />
                  </div>

                  {/* Text Content */}
                  <h3 className="font-heading font-[700] text-[22px] leading-[1.2] text-[#0F172A] mb-[12px]">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#64748B] leading-[1.5] mb-[24px]">
                    {card.desc}
                  </p>

                  {/* Feature List */}
                  <div className="flex flex-col gap-[18px] mt-auto mb-[24px]">
                    {card.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-[12px]">
                        <TinyCheck />
                        <span className="font-sans text-[14px] font-[500] text-[#0F172A]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="font-sans font-[600] text-[15px] text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors mt-auto">
                    {card.cta}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
