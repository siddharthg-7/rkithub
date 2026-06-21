import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Users, Briefcase, Smile, Building2 } from 'lucide-react';

export const ImpactMetrics = () => {
  const metrics = [
    {
      icon: <Users size={24} className="text-[#0A4DA2]" />,
      value: 500,
      suffix: '+',
      label: 'Interns Trained'
    },
    {
      icon: <Briefcase size={24} className="text-[#0A4DA2]" />,
      value: 120,
      suffix: '+',
      label: 'Live Projects'
    },
    {
      icon: <Smile size={24} className="text-[#0A4DA2]" />,
      value: 95,
      suffix: '%',
      label: 'Intern Satisfaction'
    },
    {
      icon: <Building2 size={24} className="text-[#0A4DA2]" />,
      value: 80,
      suffix: '+',
      label: 'Hiring Partners'
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <h3 className="text-3xl sm:text-4xl font-[800] text-[#0A4DA2] mb-2 font-['Inter'] flex items-center">
                <CountUp end={metric.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {metric.suffix}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#0F172A] font-['Inter']">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
