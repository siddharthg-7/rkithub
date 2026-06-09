import React from 'react';
import { Monitor, Video, Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrainingModes = () => {
  const modes = [
    {
      title: 'Classroom Training',
      description: 'Experience hands-on learning in our state-of-the-art classrooms with direct interaction with trainers.',
      icon: Monitor,
    },
    {
      title: 'Online Training',
      description: 'Learn from the comfort of your home with our interactive live online sessions and recorded videos.',
      icon: Video,
    },
    {
      title: 'Weekend Training',
      description: 'Specially designed for working professionals to upgrade their skills without affecting their work.',
      icon: Calendar,
    },
    {
      title: 'Corporate Training',
      description: 'Customized training programs for corporate teams to bridge the skill gap and improve productivity.',
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-[800] text-[#0F172A] mb-3">Flexible Training Modes</h2>
          <p className="text-[#475569] text-base font-medium">Choose the mode that fits your schedule and learning style.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, i) => {
            const Icon = mode.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-[#0B4F9C] group-hover:bg-[#0B4F9C] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                
                <h3 className="text-lg font-[800] text-[#0F172A] mb-3">{mode.title}</h3>
                <p className="text-[14px] text-[#475569] leading-relaxed font-medium">{mode.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
