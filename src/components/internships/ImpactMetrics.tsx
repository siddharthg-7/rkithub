import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Building2 } from 'lucide-react';

export const ImpactMetrics = () => {
  const metrics = [
    {
      icon: <Users size={24} className="text-[var(--color-primary)]" />,
      value: 500,
      suffix: '+',
      label: 'Interns Trained'
    },
    {
      icon: <Briefcase size={24} className="text-[var(--color-primary)]" />,
      value: 120,
      suffix: '+',
      label: 'Live Projects'
    },
    {
      icon: <GraduationCap size={24} className="text-[var(--color-primary)]" />,
      value: 95,
      suffix: '%',
      label: 'Completion Rate'
    },
    {
      icon: <Building2 size={24} className="text-[var(--color-primary)]" />,
      value: 80,
      suffix: '+',
      label: 'Hiring Partners'
    }
  ];

  return (
    <section className="w-full py-16 px-8 font-sans">
      <div className="w-full max-w-[600px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[800] text-[#0F172A] mb-2 font-['Inter']">
            Our Internship Impact
          </h2>
          <p className="text-sm text-[#64748B] font-['Inter']">
            Numbers that speak for our commitment to student success.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <div className="mb-4 bg-blue-50/50 p-3 rounded-full border border-blue-100">
                {metric.icon}
              </div>
              <h3 className="text-3xl font-[800] text-[var(--color-primary)] mb-2 font-['Inter'] flex items-center">
                <CountUp end={metric.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {metric.suffix}
              </h3>
              <p className="text-sm font-semibold text-[#0F172A] font-['Inter'] tracking-wide">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
