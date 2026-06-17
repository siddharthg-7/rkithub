import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChoose = () => {
  const features = [
    'Real-Time Projects',
    '100% Placement Assistance',
    'Interview Preparation',
    'Experienced Industry Trainers',
    'Flexible Timings',
    'Certification Support',
  ];

  return (
    <div id="why-choose" className="flex flex-col h-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-[28px] md:text-[32px] font-[800] text-[#0F172A] mb-8"
      >
        Why Choose RK IT Hub?
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-6 mb-8 flex-grow overflow-hidden">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-[45%] relative"
        >
          <div className="rounded-xl overflow-hidden shadow-md bg-white w-full h-[220px]">
            <img
              src="/assets/rkithub-1.png"
              alt="Classroom Training"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Background Shape Accent */}
          <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#22C55E]/10 rounded-tl-xl -z-10"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#0B4F9C]/10 rounded-br-xl -z-10"></div>
        </motion.div>

        {/* Right Side - List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full sm:w-[55%] flex flex-col justify-center gap-4"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
              <span className="text-[15px] font-[600] text-[#0F172A]">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <a
          href="#courses"
          className="inline-flex items-center justify-center gap-2 bg-[#0B4F9C] hover:bg-[#093A74] text-white px-8 py-4 rounded-xl font-[800] text-[15px] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Explore Our Courses
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
