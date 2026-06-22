import React from 'react';
import { ArrowRight, Ribbon, Users, Building, Calendar, BookOpen, MonitorPlay, Briefcase, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const BottomConversionBlock = () => {
  return (
    <section id="about" className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-[28px] md:text-[32px] font-[800] text-[#0F172A] mb-8"
        >
          About RK IT Hub
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative rounded-xl overflow-hidden shadow-sm border-[4px] border-white ring-1 ring-gray-100 bg-gray-200 aspect-[4/3] w-full"
          >
            <img
              src="/assets/rkithub-2.png"
              alt="RK IT Hub Classroom"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Middle Column: About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h3 className="text-[22px] font-[800] text-[#0F172A] leading-tight mb-4">
              Empowering Careers Since 2015
            </h3>
            <p className="text-[#475569] text-[14px] leading-relaxed font-[500] mb-8">
              RK IT Training Hub has been a pioneer in delivering high-quality, industry-focused IT training. We bridge the gap between academic learning and industry requirements.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0B4F9C]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[#0F172A] text-[11px] font-[700] uppercase tracking-wider">Industry-Oriented<br />Curriculum</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0B4F9C]">
                  <MonitorPlay className="w-5 h-5" />
                </div>
                <span className="text-[#0F172A] text-[11px] font-[700] uppercase tracking-wider">Project-Based<br />Learning</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0B4F9C]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-[#0F172A] text-[11px] font-[700] uppercase tracking-wider">Career Support &<br />Placement</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0B4F9C]">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[#0F172A] text-[11px] font-[700] uppercase tracking-wider">Flexible Learning<br />Options</span>
              </div>
            </div>

            <div>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-[#0B4F9C] hover:bg-[#093A74] text-white px-6 py-3 rounded-lg font-bold text-[14px] transition-all shadow-md hover:-translate-y-0.5"
              >
                Know More About Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stats List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 flex flex-col gap-6 pl-0 lg:pl-8 lg:border-l lg:border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="text-[#0B4F9C]">
                <Ribbon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[12px] font-[800] text-[#0F172A] uppercase tracking-wider mb-0.5">Since</p>
                <p className="text-[20px] font-[800] text-[#0F172A] leading-none">2015</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#0B4F9C]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[20px] font-[800] text-[#0F172A] leading-none mb-0.5">3000+</p>
                <p className="text-[11px] font-[600] text-gray-500 uppercase tracking-wider leading-tight">Students Placed</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#0B4F9C]">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[14px] font-[800] text-[#0F172A] leading-tight mb-0.5">Industry</p>
                <p className="text-[11px] font-[600] text-gray-500 uppercase tracking-wider leading-tight">Focused Training</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#0B4F9C]">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[20px] font-[800] text-[#0F172A] leading-none mb-0.5">100%</p>
                <p className="text-[11px] font-[600] text-gray-500 uppercase tracking-wider leading-tight">Placement Support</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
