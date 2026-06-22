import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ComparisonSection = () => {
  const comparisons = [
    {
      feature: 'Curriculum Approach',
      other: 'Theory mostly',
      rkit: 'Practical Implementation',
    },
    {
      feature: 'Project Types',
      other: 'Basic Dummy Projects',
      rkit: 'Real-world Live Projects',
    },
    {
      feature: 'Mentorship',
      other: 'No Dedicated Mentors',
      rkit: '1-on-1 Industry Mentors',
    },
    {
      feature: 'End Result',
      other: 'Certification Only',
      rkit: 'Placement Assistance & Certification',
    },
    {
      feature: 'Stipend',
      other: 'Mostly Unpaid',
      rkit: 'Paid Options Available',
    }
  ];

  return (
    <section className="w-full px-8 font-sans">
      <div className="w-full max-w-[600px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[800] text-[#0F172A] mb-2 font-['Inter']">
            Why RK IT Internship?
          </h2>
          <p className="text-sm text-[#64748B] font-['Inter']">
            See how we differ from traditional learning.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md border border-[#E2E8F0] overflow-hidden"
        >
          <div className="grid grid-cols-[1fr_auto_1fr] bg-gray-50 border-b border-[#E2E8F0]">
            <div className="p-4 text-center font-bold text-gray-500 font-['Inter'] text-xs">Traditional Learning</div>
            <div className="w-8 flex items-center justify-center bg-white border-x border-[#E2E8F0]">
               <div className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-[10px] font-bold z-10">VS</div>
            </div>
            <div className="p-4 text-center font-[800] text-green-700 bg-green-50 font-['Inter'] text-xs shadow-inner">RK IT Internship Experience</div>
          </div>

          <div className="divide-y divide-[#E2E8F0]">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto_1fr] hover:bg-gray-50/50 transition-colors">
                <div className="p-3 flex items-center justify-start gap-2 border-r border-[#E2E8F0] font-['Inter'] text-xs text-gray-500">
                  <XCircle className="text-red-400 shrink-0" size={14} />
                  <span>{item.other}</span>
                </div>
                
                <div className="w-8 bg-gray-50/30"></div>
                
                <div className="p-3 flex items-center justify-start gap-2 bg-green-50/20 border-l border-green-100 font-['Inter'] text-xs text-gray-800 font-semibold">
                  <CheckCircle2 className="text-green-500 shrink-0" size={14} />
                  <span>{item.rkit}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
