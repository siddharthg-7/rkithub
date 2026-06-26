import React from 'react';
import Marquee from 'react-fast-marquee';

const COMPANIES = [
  { name: 'TCS', logo: '/companies/tcs.svg' },
  { name: 'Infosys', logo: '/companies/infosys.svg' },
  { name: 'Accenture', logo: '/companies/accenture.svg' },
  { name: 'Cognizant', logo: '/companies/cognizant.svg' },
  { name: 'Wipro', logo: '/companies/wipro.svg' },
  { name: 'Capgemini', logo: '/companies/capgemini.svg' },
  { name: 'HCL', logo: '/companies/hcl.svg' },
  { name: 'IBM', logo: '/companies/ibm.svg' },
  { name: 'Deloitte', logo: '/companies/deloitte.svg' },
  { name: 'Tech Mahindra', logo: '/companies/techmahindra.svg' }
];

export const CompanyMarquee = () => {
  return (
    <section className="bg-white py-10 min-h-[120px] flex flex-col justify-center border-b border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-heading">
          Our Students Work At
        </h3>
      </div>
      
      <Marquee gradient={true} gradientColor="#ffffff" gradientWidth={100} speed={40}>
        <div className="flex items-center gap-16 px-8">
          {COMPANIES.map((company, index) => (
            <img 
              key={index} 
              src={company.logo} 
              alt={company.name} 
              className="h-8 md:h-10 object-contain hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
};
