import React from 'react';
import Marquee from 'react-fast-marquee';

export const HiringPartners = () => {
  const partners = [
    { name: 'TCS', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png' },
    { name: 'Infosys', src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'HCL', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HCL_Technologies_logo.svg/1920px-HCL_Technologies_logo.svg.png' },
    { name: 'Tech Mahindra', src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg' },
    { name: 'Cognizant', src: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'Accenture', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' }
  ];

  return (
    <section className="py-16 px-4 bg-white border-t border-[#E2E8F0] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <h3 className="text-xl font-bold text-[#0F172A] font-['Inter'] mb-10 pl-4 md:pl-0">
          Our Hiring Partners
        </h3>

        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          <div className="flex items-center py-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="mx-12 lg:mx-20 flex items-center justify-center group cursor-pointer"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
