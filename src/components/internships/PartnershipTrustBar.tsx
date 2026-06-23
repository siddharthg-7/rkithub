import React from 'react';

export const PartnershipTrustBar = () => {
  return (
    <div className="w-full bg-white/60 backdrop-blur-sm border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.05)] h-[90px] md:h-[120px] flex items-center justify-center relative z-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
        <span className="text-[#0F172A] font-semibold text-sm md:text-lg tracking-widest uppercase opacity-80">
          Official Internship Partner
        </span>
        <div className="h-10 md:h-14 w-[1px] bg-gray-300/80 hidden md:block"></div>
        <img src="/VHUB_Logo.svg" alt="V-HUB Logo" className="h-10 md:h-14 object-contain transition-all" />
      </div>
    </div>
  );
};
