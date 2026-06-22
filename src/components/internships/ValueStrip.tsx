import React from 'react';
import { MonitorPlay, Users, Layers, TrendingUp } from 'lucide-react';

export const ValueStrip = () => {
  const values = [
    {
      icon: <MonitorPlay className="w-8 h-8" strokeWidth={1.5} />,
      title: 'Live Projects',
      description: 'Solve real-world problems'
    },
    {
      icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
      title: 'Industry Mentorship',
      description: 'Guidance from experts'
    },
    {
      icon: <Layers className="w-8 h-8" strokeWidth={1.5} />,
      title: 'Skill Development',
      description: 'Upgrade your technical skills'
    },
    {
      icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
      title: 'Career Advancement',
      description: 'We help you get hired'
    }
  ];

  return (
    <section className="w-full bg-[#071A52] text-white px-4 h-auto lg:h-[120px] flex items-center">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center py-8 lg:py-0">
          
        
          <div className="border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 pr-0 lg:pr-8">
            <h2 className="text-2xl lg:text-3xl font-[800] text-white leading-tight font-['Inter']">
              Why RK IT Internship?
            </h2>
          </div>
          {values.map((item, index) => (
            <div key={index} className="flex flex-row items-center sm:flex-col sm:items-start gap-4">
              <div className="text-[#22C55E]">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-white mb-1 font-['Inter']">{item.title}</h3>
                <p className="text-sm text-slate-300 font-normal font-['Inter']">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
