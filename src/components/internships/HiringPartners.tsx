import React from 'react';
import { motion } from 'framer-motion';

export const HiringPartners = () => {
  const partners = [
    { name: 'TCS', logo: 'https://cdn.worldvectorlogo.com/logos/tata-consultancy-services.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/1280px-Tech_Mahindra_New_Logo.svg.png' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' }
  ];

  // Duplicate the list for seamless infinite scrolling
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-12 border-b border-[#E2E8F0] overflow-hidden font-sans">
      <div className="text-center mb-8">
        <p className="text-sm font-semibold text-[#64748B] uppercase tracking-widest font-['Inter']">
          Our Alumni Work At Top Tech Companies
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>

        <motion.div
          className="flex items-center gap-8 md:gap-16 min-w-max px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="w-32 h-12 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain drop-shadow-sm" />
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};
