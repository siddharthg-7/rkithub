import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Users, Code2, Bug, MonitorPlay, Award } from 'lucide-react';

export const InternshipProcess = () => {
  const steps = [
    {
      icon: <ClipboardList size={28} />,
      title: 'Task Assigned',
      description: 'Understand requirements',
    },
    {
      icon: <Users size={28} />,
      title: 'Mentor Review',
      description: 'Discuss approach and plan',
    },
    {
      icon: <Code2 size={28} />,
      title: 'Development',
      description: 'Code, build and implement',
    },
    {
      icon: <Bug size={28} />,
      title: 'Testing',
      description: 'Test, debug and optimize',
    },
    {
      icon: <MonitorPlay size={28} />,
      title: 'Presentation',
      description: 'Showcase your project',
    },
    {
      icon: <Award size={28} />,
      title: 'Certificate',
      description: 'Earn internship certificate',
    }
  ];

  return (
    <section className="py-24 px-[80px] max-w-[1440px] mx-auto bg-white font-sans overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-[40px] font-[800] text-[#0F172A] mb-4 font-['Inter']">
         Step by Step Internship Programme
        </h2>
        <p className="text-lg text-[#64748B] font-['Inter']">
          You won't just learn, you will experience real-world workflow.
        </p>
      </div>

      <div className="relative mt-20">
        {/* Connecting Dashed Line */}
        <div className="absolute top-[40px] left-[8%] right-[8%] h-[2px] border-t-2 border-dashed border-[#E2E8F0] z-0"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group text-center"
            >
              {/* Icon Circle */}
              <div className="w-[80px] h-[80px] rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all duration-300 relative shadow-sm z-10">
                {step.icon}
                {/* Connector dot for active state simulation on hover */}
                <div className="absolute top-[38px] -right-[40px] w-0 h-0 group-hover:w-full transition-all duration-500 overflow-hidden pointer-events-none">
                   <div className="h-[2px] bg-[var(--color-accent)] w-[200px]"></div>
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
    </section>
  );
};
