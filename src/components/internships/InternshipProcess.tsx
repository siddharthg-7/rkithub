import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, UserCheck, PlayCircle, FileSearch, Award, Briefcase } from 'lucide-react';

export const InternshipProcess = () => {
  const steps = [
    {
      icon: <MousePointerClick size={24} />,
      title: 'Apply Online',
      description: 'Submit your application in just a few minutes.',
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Get Shortlisted',
      description: 'We review and connect with selected students.',
    },
    {
      icon: <PlayCircle size={24} />,
      title: 'Start Internship',
      description: 'Learn, collaborate and work on live projects.',
    },
    {
      icon: <FileSearch size={24} />,
      title: 'Project Reviews',
      description: 'Get feedback and improve continuously.',
    },
    {
      icon: <Award size={24} />,
      title: 'Earn Certificate',
      description: 'Showcase your skills with a verified certificate.',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Placement Support',
      description: 'We help you crack the right opportunities.',
    }
  ];

  return (
    <section className="py-24 px-4 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-[32px] md:text-[40px] font-[800] text-[#0F172A] mb-4 font-['Inter']">
            How Our Internship Works
          </h2>
          <p className="text-lg text-[#64748B] font-['Inter']">
            A simple process to transform your skills into a successful career.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-[36px] left-[8%] right-[8%] h-[2px] bg-[#E2E8F0] z-0"></div>
          
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                {/* Icon Circle */}
                <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-[#0A4DA2] mb-6 group-hover:border-[#0A4DA2] group-hover:bg-[#0A4DA2] group-hover:text-white transition-all duration-300 relative shadow-sm">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-3 w-6 h-6 rounded-full bg-[#22C55E] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-base font-bold text-[#0F172A] mb-2 font-['Inter']">
                  {step.title}
                </h3>
                <p className="text-sm text-[#64748B] font-['Inter'] leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-10 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[32px] w-[2px] border-l-2 border-dashed border-[#E2E8F0] z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 items-start relative z-10 text-left"
            >
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-[#0A4DA2] shrink-0 relative">
                {step.icon}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#22C55E] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  {index + 1}
                </div>
              </div>
              
              <div className="pt-2">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-['Inter']">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#64748B] font-['Inter'] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
