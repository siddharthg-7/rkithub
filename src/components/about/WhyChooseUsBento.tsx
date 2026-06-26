import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Code2, Briefcase, UserRound, Zap, Target, Headphones, BarChart3, ShieldCheck } from 'lucide-react';

/* ─── SIMPLE CARD COMPONENT ─────────────────────────────────────────────────── */
const SimpleCard: React.FC<{ num: string, title: string, desc: string, icon: any, delay: number }> = ({ num, title, desc, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(13,94,255,0.1)] transition-all duration-300 flex relative overflow-hidden group"
    >
      <div className="flex-1 pr-16">
        <div className="text-blue-600 font-bold text-lg mb-4">{num}</div>
        <h3 className="text-[#0F172A] font-bold text-xl mb-3">{title}</h3>
        <p className="text-gray-500 text-[15px] leading-relaxed">{desc}</p>
        <div className="w-8 h-1 bg-blue-600 rounded-full mt-6" />
      </div>

      {/* Right side icon container simulating the 3D visual */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 bg-blue-50 rounded-full blur-2xl opacity-60" />
        <div className="relative w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-white shadow-lg transform rotate-3">
          <Icon size={32} className="text-blue-500" strokeWidth={1.5} />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────────── */
export const WhyChooseUsBento = () => {
  const cards = [
    { num: '01', title: 'Industry Curriculum', desc: 'Curriculum designed around current industry requirements.', icon: GraduationCap },
    { num: '02', title: 'Real-Time Projects', desc: 'Build practical applications and solve real-world problems.', icon: Code2 },
    { num: '03', title: 'Internship Programs', desc: 'Gain professional exposure before entering the workforce.', icon: Briefcase },
    { num: '04', title: 'Placement Support', desc: 'Resume building, interview preparation and career guidance.', icon: UserRound },
    { num: '05', title: 'Expert Mentors', desc: 'Learn directly from experienced industry professionals.', icon: Star },
    { num: '06', title: 'Emerging Technologies', desc: 'AI, Cloud, ML, Full Stack Development and more.', icon: Zap },
  ];

  const bottomFeatures = [
    { icon: Target, title: 'Industry Focused', desc: 'Always aligned with industry needs' },
    { icon: Headphones, title: 'Practical Learning', desc: 'Hands-on training with real-world scenarios' },
    { icon: BarChart3, title: 'Career Growth', desc: 'Guiding you towards better opportunities' },
    { icon: ShieldCheck, title: 'Trusted by Learners', desc: 'Hundreds of students trust our programs' },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAFAFA] font-sans relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[13px] font-bold tracking-widest uppercase mb-6"
          >
            <Star size={14} className="fill-current" /> WHY STUDENTS CHOOSE US
          </motion.div>
          <motion.h2 
            className="text-[40px] md:text-[56px] font-[800] text-[#0F172A] leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why <span className="text-[#0D5EFF]">Students</span> Choose Us
          </motion.h2>
          <motion.p 
            className="text-[18px] text-[#475569] leading-relaxed max-w-[650px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We focus on practical learning, real-world exposure and career success to help you become industry-ready professionals.
          </motion.p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card, i) => (
            <SimpleCard key={i} {...card} delay={0.2 + (i * 0.1)} />
          ))}
        </div>

        {/* Bottom Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-8 md:p-10 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8"
        >
          {bottomFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="flex items-start gap-4 flex-1 min-w-[200px]">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-blue-600" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[15px] mb-1">{feat.title}</h4>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
