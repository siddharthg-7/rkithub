import React from 'react';
import { Cpu, Briefcase, UserCheck, Users, Clock, Award } from 'lucide-react';

export const WhyChoose = () => {
  const features = [
    {
      title: 'Real-Time Projects',
      description: 'Work on live projects to get practical exposure and understand industry standards.',
      icon: Cpu,
    },
    {
      title: 'Placement Assistance',
      description: 'We provide 100% placement support with resume building and mock interviews.',
      icon: Briefcase,
    },
    {
      title: 'Interview Preparation',
      description: 'Dedicated sessions for technical and HR round preparation with industry experts.',
      icon: UserCheck,
    },
    {
      title: 'Experienced Trainers',
      description: 'Learn from working professionals with 10+ years of real-time industry experience.',
      icon: Users,
    },
    {
      title: 'Flexible Timings',
      description: 'We offer flexible batches including weekdays and weekends to suit your schedule.',
      icon: Clock,
    },
    {
      title: 'Certification Support',
      description: 'Get guidance and support to clear global certifications in your domain.',
      icon: Award,
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#07294D] font-sans">Why Choose RK IT Hub</h2>
          <p className="text-gray-600 mt-2 font-sans">What makes us the preferred choice for IT training.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex-shrink-0 flex items-center justify-center text-[#07294D]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#07294D] mb-1 font-sans">{feature.title}</h3>
                  <p className="text-sm text-gray-500 font-sans">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
