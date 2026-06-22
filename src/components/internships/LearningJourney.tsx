import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, Code, Send } from 'lucide-react';

export const LearningJourney = () => {
  const steps = [
    { icon: <BookOpen className="w-5 h-5" />, title: 'Watch Tutorials', subtitle: 'Learn concepts from videos and online resources.', num: 1 },
    { icon: <Code className="w-5 h-5" />, title: 'Build Projects', subtitle: 'Practice by building small projects on your own.', num: 2 },
    { icon: <Briefcase className="w-5 h-5" />, title: 'Gain Experience', subtitle: 'Work on real projects, solve real problems, get real exposure.', num: 3 },
    { icon: <Send className="w-5 h-5" />, title: 'Get Hired', subtitle: 'Stand out with your skills, portfolio and practical knowledge.', num: 4, highlight: true },
  ];

  return (
    <section className="bg-white py-24 px-[80px] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-[800] text-[#0F172A] mb-3 font-['Inter']">
            Most Students Stop After Learning
          </h2>
          <p className="text-[#64748B] font-['Inter']">
            We bridge the gap between learning and getting hired.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 lg:gap-8 relative">
          
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-start text-left p-6 rounded-xl relative z-10 w-full md:w-[280px] border ${
                  step.highlight 
                    ? 'bg-green-50/50 border-green-200 shadow-[0_0_20px_rgba(34,197,94,0.1)]' 
                    : 'bg-white border-[#E2E8F0] shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                    step.highlight ? 'bg-[var(--color-accent)] text-white' : 'bg-blue-50 text-[var(--color-primary)]'
                  }`}>
                    {step.num}
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    step.highlight ? 'text-[var(--color-accent)]' : 'text-[#64748B]'
                  }`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-['Inter'] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] font-['Inter'] leading-relaxed">{step.subtitle}</p>
              </motion.div>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center text-gray-300">
                  <ArrowRight size={20} className={index === 2 ? "text-[var(--color-accent)]" : "text-blue-300"} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
