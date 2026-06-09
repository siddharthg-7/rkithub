import React from 'react';
import { Phone, BookOpen, Users, Briefcase, Award } from 'lucide-react';

export const CorporateHero = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_classroom.png')" }}
      >
        <div className="absolute inset-0 bg-[#07294D]/85 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
              Build Your Career with Industry-Focused IT Training
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl font-sans">
              Master Full Stack Development, AI & ML, Data Science, and Automation Testing through practical learning and real-time projects.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-md font-bold text-base transition-colors flex items-center gap-2 shadow-lg shadow-green-900/20">
                <Phone className="w-5 h-5" />
                Talk To Counselor
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-md font-bold text-base transition-colors flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Content - Achievement Badge/Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-white rounded-lg p-8 shadow-xl max-w-sm w-full space-y-6">
              <h3 className="text-[#07294D] text-xl font-bold border-b pb-3 border-gray-100">
                Why RK IT Hub?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#07294D]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">300+ Students</h4>
                    <p className="text-sm text-gray-500">Trained & Placed</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#07294D]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Placement Support</h4>
                    <p className="text-sm text-gray-500">100% Assistance</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#07294D]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Real-Time Projects</h4>
                    <p className="text-sm text-gray-500">Hands-on Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
