import React from 'react';
import { Phone, BookOpen, Users, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const CorporateHero = () => {
  return (
    <div className="relative w-full min-h-[600px] h-auto py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_classroom.png')" }}
      >
        <div className="absolute inset-0 bg-[#07294D]/85 mix-blend-multiply" />
      </motion.div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center">
        <div className="flex flex-col items-center w-full gap-12 lg:flex-row lg:items-center">

          {/* Center / Left text block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 text-white space-y-6 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans leading-tight">
              Build Your Career with<br className="hidden sm:block" /> Industry-Focused IT Training
            </h1>
            <p className="text-base sm:text-lg text-blue-100 font-sans max-w-xl mx-auto lg:mx-0">
              Master Full Stack Development, AI &amp; ML, Data Science, and Automation Testing through practical learning and real-time projects.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-md font-bold text-base transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
              >
                <Phone className="w-5 h-5" />
                Talk To Counselor
              </a>
              <a
                href="#courses"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-md font-bold text-base transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Explore Courses
              </a>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="w-full max-w-sm mx-auto lg:mx-0 lg:flex-shrink-0"
          >
            <div className="bg-white rounded-lg p-8 shadow-xl space-y-6">
              <h3 className="text-[#07294D] text-xl font-bold border-b pb-3 border-gray-100">
                Why RK IT Hub?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#07294D] flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">300+ Students</h4>
                    <p className="text-sm text-gray-500">Trained &amp; Placed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#07294D] flex-shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Placement Support</h4>
                    <p className="text-sm text-gray-500">100% Assistance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#07294D] flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Real-Time Projects</h4>
                    <p className="text-sm text-gray-500">Hands-on Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
