import React from 'react';
import { Monitor, Globe, Calendar, Building } from 'lucide-react';

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
      icon: Globe,
    },
    {
      title: 'Weekend Training',
      description: 'Specially designed for working professionals to upgrade their skills without affecting their work.',
      icon: Calendar,
    },
    {
      title: 'Corporate Training',
      description: 'Customized training programs for corporate teams to bridge the skill gap and improve productivity.',
      icon: Building,
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#07294D] font-sans">Flexible Training Modes</h2>
          <p className="text-gray-600 mt-2 font-sans">Choose the mode that fits your schedule and learning style.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, i) => {
            const Icon = mode.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-[#07294D] mb-4 group-hover:bg-[#07294D] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#07294D] mb-2 font-sans">{mode.title}</h3>
                <p className="text-sm text-gray-500 font-sans">{mode.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
