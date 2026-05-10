import React from 'react';
import { CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
            <img 
              src="/about_training.png" 
              alt="About RK IT Hub" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#07294D]/10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-bold text-[#22C55E] uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl font-bold text-[#07294D] mt-1 font-sans">Empowering Careers Since 2015</h2>
            </div>
            
            <p className="text-gray-600 font-sans">
              RK IT TRAINING HUB has been a pioneer in delivering high-quality, industry-focused IT training. We bridge the gap between academic learning and industry requirements.
            </p>

            <div className="space-y-3">
              {[
                'Industry-oriented training curriculum designed by experts.',
                'Project-based learning with real-time exposure.',
                'Dedicated career support and placement assistance.',
                'Flexible learning modes to suit your schedule.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-sans">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="bg-[#07294D] hover:bg-[#0c3c6e] text-white px-6 py-3 rounded-md font-bold text-sm transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
