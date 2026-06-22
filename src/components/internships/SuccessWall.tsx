import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, IndianRupee, Code2 } from 'lucide-react';

export const SuccessWall = () => {
  const students = [
    {
      name: "Durga",
      role: "Associate Software Engineer",
      company: "Enmoval",
      package: "3.5 LPA",
      skills: ["Java", "Testing", "Selenium"],
      avatar: "/durga.png"
    },
    {
      name: "Vijaya",
      role: "SDET",
      company: "Broadridge",
      package: "5.5 LPA",
      skills: ["Java", "TestNG", "Selenium"],
      avatar: "/vijaya.png"
    },
    {
      name: "Manogna",
      role: "Test Engineer",
      company: "CGI",
      package: "7.5 LPA",
      skills: ["Manual Testing", "API Testing", "Postman"],
      avatar: "/manogna.png"
    },
    {
      name: "Chaitanya",
      role: "Full Stack Java Developer",
      company: "Fin Echo Engineering",
      package: "3.5 LPA",
      skills: ["Java", "Spring Boot", "React"],
      avatar: "/Chaitanya .png"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % students.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [students.length]);

  const displayedStudents = [
    students[currentIndex],
    students[(currentIndex + 1) % students.length],
  ];

  return (
    <section className="w-full px-6 md:px-8 font-sans overflow-hidden py-12 md:py-16">
      <div className="w-full max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[800] text-[#0F172A] mb-2 font-['Inter']">
            Interns Who Made It
          </h2>
          <p className="text-sm text-[#64748B] font-['Inter']">
            Our students. Real companies. Real success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative min-h-[300px]">
          <AnimatePresence mode="popLayout">
          {displayedStudents.map((student, index) => (
            <motion.div
              key={`${student.name}-${currentIndex}`}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[var(--color-primary)] transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center gap-3 mb-4">
                <img 
                  src={student.avatar} 
                  alt={student.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 group-hover:border-[var(--color-primary)] transition-colors"
                />
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] font-['Inter']">
                    {student.name}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-primary)]">
                    {student.role}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4 bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-medium text-gray-500">Company</span>
                  <span className="font-bold text-gray-800">{student.company}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-medium text-gray-500">Package</span>
                  <span className="font-bold text-green-600">{student.package}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5">
                {student.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-bold uppercase tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
           <div className="w-2 h-2 rounded-full bg-blue-600"></div>
           <div className="w-2 h-2 rounded-full bg-gray-300"></div>
           <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};
