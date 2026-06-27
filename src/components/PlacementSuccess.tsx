import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';
import { StudentVoices } from './StudentVoices';

const PLACEMENTS = [
  { id: 1, name: 'Rahul Reddy', course: 'Java Full Stack', company: 'Infosys', package: '5.2 LPA', image: '/durga.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { id: 2, name: 'Sneha', course: 'Python Full Stack', company: 'Cognizant', package: '6.1 LPA', image: '/vijaya.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
  { id: 3, name: 'Manogna', course: 'Test Engineer', company: 'CGI', package: '7.5 LPA', image: '/manogna.webp', logo: '/logo_cgi_color.webp' },
  { id: 4, name: 'Chaitanya', course: 'Java Full Stack', company: 'TCS', package: '4.8 LPA', image: '/Chaitanya .webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png?_=20210617123944' },
  { id: 5, name: 'Vikram', course: 'MERN Stack', company: 'Wipro', package: '5.0 LPA', image: '/durga.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { id: 6, name: 'Priya', course: 'Data Science', company: 'Capgemini', package: '6.5 LPA', image: '/vijaya.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
  { id: 7, name: 'Arjun', course: 'Automation Testing', company: 'Tech Mahindra', package: '4.5 LPA', image: '/Chaitanya .webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg' },
  { id: 8, name: 'Ravi', course: 'Java Full Stack', company: 'Virtusa', package: '5.8 LPA', image: '/durga.webp', logo: '/virtusa.webp' },
  { id: 9, name: 'Kavya', course: 'Python Full Stack', company: 'Broadridge', package: '8.2 LPA', image: '/vijaya.webp', logo: '/broadridge.svg' },
  { id: 10, name: 'Sanjay', course: 'MERN Stack', company: 'Infosys', package: '5.2 LPA', image: '/Chaitanya .webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { id: 11, name: 'Divya', course: 'Test Engineer', company: 'CGI', package: '7.0 LPA', image: '/manogna.webp', logo: '/logo_cgi_color.webp' },
  { id: 12, name: 'Ajay', course: 'Data Science', company: 'Cognizant', package: '6.0 LPA', image: '/durga.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
];

const MiniCard = ({ student }: { student: typeof PLACEMENTS[0], key?: string | number }) => (
  <div className="group w-[220px] h-[110px] bg-white border border-slate-200 rounded-[16px] p-4 flex gap-4 shrink-0 transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)] cursor-pointer">
    <img src={student.image} alt={student.name} className="w-12 h-12 rounded-[12px] object-cover shrink-0 bg-slate-100" />
    <div className="flex flex-col justify-between overflow-hidden relative w-full">

      {/* LinkedIn Tooltip & Icon */}
      <div className="absolute right-0 top-0 group/li">
        <Linkedin className="w-[14px] h-[14px] text-slate-300 group-hover:text-[#0A66C2] transition-all duration-300 group-hover:-translate-x-1" />
        <span className="absolute -top-7 right-1/2 translate-x-1/2 bg-slate-900 text-white text-[10px] font-medium px-2 py-1 rounded opacity-0 group-hover/li:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          View LinkedIn
        </span>
      </div>

      <h4 className="font-bold text-slate-900 text-[14px] truncate pr-5">{student.name}</h4>

      <img src={student.logo} alt={student.company} className="h-[16px] max-w-[70px] object-contain object-left opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 origin-left" />

      <div className="inline-flex mt-1">
        <span className="bg-[#DCFCE7] text-[#166534] text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
          ₹{student.package}
        </span>
      </div>
    </div>
  </div>
);

const AnimatedNumber = ({ valueStr }: { valueStr: string }) => {
  const [num, setNum] = useState(0);
  const target = parseFloat(valueStr.replace(/[^0-9.]/g, '')) || 0;

  useEffect(() => {
    setNum(0);
    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setNum(start + (target - start) * ease);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [target]);

  return <span>{num.toFixed(1)}</span>;
};

const FeaturedCard = ({ student }: { student: typeof PLACEMENTS[0] }) => {
  const [activeStage, setActiveStage] = useState(0);

  // Animate the timeline stages when the student changes
  useEffect(() => {
    setActiveStage(0);
    const t1 = setTimeout(() => setActiveStage(1), 600);
    const t2 = setTimeout(() => setActiveStage(2), 1200);
    const t3 = setTimeout(() => setActiveStage(3), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [student]);

  const stages = ['Training', 'Projects', 'Internship', 'Placement'];

  return (
    <div className="w-full lg:w-[70%] mx-auto bg-[#F8FAFC] border border-[#E2E8F0] rounded-[28px] overflow-hidden flex flex-col md:flex-row transition-transform duration-500 hover:-translate-y-[6px] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] cursor-pointer">

      {/* Left: Image Container */}
      <div className="md:w-[45%] relative h-[320px] md:h-auto overflow-hidden bg-slate-100 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={student.id}
            src={student.image}
            alt={student.name}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </AnimatePresence>
      </div>

      {/* Right: Details Container */}
      <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center">

        <AnimatePresence mode="wait">
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-3xl font-extrabold text-slate-900 mb-1">{student.name}</h3>
            <p className="text-slate-500 font-medium mb-6">{student.course}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-6 mb-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={student.id}
              src={student.logo}
              alt={student.company}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="h-[34px] max-w-[120px] object-contain object-left"
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={student.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-[#DCFCE7] border border-[#bbf7d0] text-[#166534] text-[15px] font-bold px-4 py-1.5 rounded-full"
            >
              ₹<AnimatedNumber valueStr={student.package} /> LPA
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-bold">
            {stages.map((stage, i) => (
              <React.Fragment key={stage}>
                <span className={`px-2.5 py-1 rounded-md transition-colors duration-300 ${i === activeStage
                    ? 'bg-blue-100 text-blue-700'
                    : i < activeStage
                      ? 'text-slate-900'
                      : 'text-slate-400'
                  }`}>
                  {stage}
                </span>
                {i < 3 && <ArrowRight className={`w-3.5 h-3.5 transition-colors duration-300 ${i < activeStage ? 'text-slate-400' : 'text-slate-200'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 text-blue-600 font-bold text-[15px] hover:text-blue-700 transition-colors group/btn w-max">
          View Journey <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
};

export const PlacementSuccess = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // 8-second orchestrator for the featured card
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % PLACEMENTS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const row1 = [...PLACEMENTS];

  return (
    <section id="placements" className="relative w-full bg-[#FAFBFC] pt-16 md:pt-24 pb-8 overflow-hidden font-sans">

      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.06]" />
        <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.06]" />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-green-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.06]" />
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left-fast { animation: marquee-left 90s linear infinite; }
        .animate-marquee-right { animation: marquee-right 110s linear infinite; }
        .animate-marquee-left-slow { animation: marquee-left 80s linear infinite; }
        
        /* Pause animations on hover for desktop */
        .marquee-container:hover .animate-marquee-left-fast,
        .marquee-container:hover .animate-marquee-right,
        .marquee-container:hover .animate-marquee-left-slow {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase mb-4"
          >
            SECTION 05
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Placement Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto"
          >
            See how our students transformed their skills into careers through real projects and mentorship.
          </motion.p>
        </div>

        {/* Layer 2: Placement Marquees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full flex flex-col gap-6 marquee-container"
        >
          {/* Desktop: 3 Infinite Marquees */}
          <div className="hidden md:flex flex-col gap-6 overflow-hidden w-full relative">

            {/* Soft fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Row 1: Left */}
            <div className="flex w-max animate-marquee-left-slow">
              <div className="flex gap-6 pr-6">
                {row1.map((c, i) => <MiniCard key={`${c.id}-${i}-1`} student={c} />)}
              </div>
              <div className="flex gap-6 pr-6">
                {row1.map((c, i) => <MiniCard key={`${c.id}-${i}-2`} student={c} />)}
              </div>
            </div>
          </div>

          {/* Mobile: Horizontal Swipe Container */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 -mx-4 no-scrollbar">
            {PLACEMENTS.map((c) => (
              <div key={c.id} className="snap-center shrink-0">
                <MiniCard student={c} />
              </div>
            ))}
          </div>
        </motion.div>

        <StudentVoices />
      </div>
    </section>
  );
};
