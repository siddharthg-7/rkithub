import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const PlacementSuccess = () => {
  const companies = [
    { name: 'TCS',          src: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Infosys',      src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Accenture',    src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Wipro',        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Cognizant',    src: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'Capgemini',    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
    { name: 'HCL',          src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/HCL_Technologies_logo.svg' },
    { name: 'Tech Mahindra',src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Tech_Mahindra_New_Logo.svg' },
  ];

  const placements = [
    { name: 'Sai Kumar',   course: 'Java Full Stack',    company: 'Infosys',        package: '4.5 LPA', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Priya Sharma',course: 'Python Full Stack',  company: 'TCS',            package: '5.2 LPA', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Rahul Verma', course: 'MERN Stack',         company: 'Wipro',          package: '4.6 LPA', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Divya Reddy', course: 'Data Science & AI',  company: 'HCL',            package: '6.0 LPA', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Arjun Mehta', course: 'Automation Testing', company: 'Tech Mahindra',  package: '4.8 LPA', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  ];

  const perPage = 3;
  const totalPages = Math.ceil(placements.length / perPage);
  const [page, setPage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: number) => {
    setPage((p) => (p + dir + totalPages) % totalPages);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  const visible = placements.slice(page * perPage, page * perPage + perPage);

  return (
    <div id="placements" className="flex flex-col h-full pl-0 lg:pl-12 lg:border-l lg:border-gray-100 mt-16 lg:mt-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-[20px] font-[800] text-[#0F172A] mb-6"
      >
        Our Students Work At
      </motion.h2>

      {/* Logo Wall */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 items-center justify-items-center"
      >
        {companies.map((company, i) => (
          <motion.img
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            src={company.src}
            alt={company.name}
            className="max-h-8 max-w-[80px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-[20px] font-[800] text-[#0F172A] mb-6"
      >
        Recent Placement Success
      </motion.h2>

      {/* Placement Cards with auto-scroll */}
      <div className="relative w-full">
        <button
          onClick={() => go(-1)}
          className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-500 shadow-md hover:text-[#0B4F9C] hover:border-[#0B4F9C] z-10 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => go(1)}
          className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-500 shadow-md hover:text-[#0B4F9C] hover:border-[#0B4F9C] z-10 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {visible.map((student, i) => (
            <motion.div
              key={page * perPage + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-gray-50" />
              <h3 className="text-[14px] font-[800] text-[#0F172A] leading-tight mb-1">{student.name}</h3>
              <p className="text-[#64748B] text-[11px] font-[600] mb-3">{student.course}</p>
              <div className="mt-auto flex flex-col items-center w-full pt-3 border-t border-gray-50">
                <p className="text-[#0B4F9C] text-[13px] font-[800] leading-tight mb-1">{student.company}</p>
                <p className="text-[#22C55E] text-[12px] font-[800]">{student.package}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setPage(i); if (timerRef.current) clearInterval(timerRef.current); startTimer(); }}
              className={`rounded-full transition-all duration-300 ${
                i === page ? 'w-5 h-2 bg-[#0B4F9C]' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
