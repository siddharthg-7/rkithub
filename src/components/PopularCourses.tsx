import React from 'react';
import { Clock, ArrowRight, Star, Code2, Database, Layout, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const PopularCourses = () => {
  const courses = [
    {
      title: 'Java Full Stack',
      description: 'Master Java, Spring Boot, Hibernate, and Angular/React.',
      technologies: ['Java', 'Spring Boot', 'React'],
      duration: '4 Months',
      path: '/courses/java-full-stack',
      featured: true,
      icon: Code2
    },
    {
      title: 'Python Full Stack',
      description: 'Learn Python, Django, Flask, and frontend technologies.',
      technologies: ['Python', 'Django', 'Vue.js'],
      duration: '4 Months',
      path: '/courses/python-full-stack',
      featured: false,
      icon: Layout
    },
    {
      title: 'MERN Stack',
      description: 'Become a full-stack developer with MongoDB, Express.js, React, and Node.js.',
      technologies: ['MongoDB', 'Express', 'React'],
      duration: '3 Months',
      path: '/courses/mern-stack',
      featured: false,
      icon: Database
    },
    {
      title: 'Data Science & AI',
      description: 'Learn Data Analysis, Machine Learning, and AI with real-time projects.',
      technologies: ['Python', 'ML', 'AI'],
      duration: '6 Months',
      path: '/courses/data-science',
      featured: false,
      icon: Search
    }
  ];

  return (
    <section id="courses" className="py-20 bg-[#FAFAFA] font-sans relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4"
        >
          <h2 className="text-3xl md:text-[32px] font-[800] text-[#0F172A] m-0">Popular Courses</h2>
          <a 
            href="#courses"
            className="text-[#0B4F9C] font-[800] text-[15px] flex items-center gap-1.5 hover:text-[#093A74] transition-colors"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Carousel Arrows */}
        <button className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-500 shadow-md hover:text-[#0B4F9C] transition-all hover:scale-105 z-10 -ml-5">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-500 shadow-md hover:text-[#0B4F9C] transition-all hover:scale-105 z-10 -mr-5">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Featured Badge */}
                {course.featured && (
                  <div className="absolute top-4 left-4 bg-[#EAB308] text-white text-[10px] font-[800] px-3 py-1 rounded-full z-10 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col pt-12">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#0B4F9C] flex items-center justify-center mb-5 mx-auto -mt-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-[19px] font-[800] text-[#0F172A] mb-3 text-center">{course.title}</h3>
                  <p className="text-[#475569] text-[14px] mb-6 flex-grow leading-relaxed font-medium text-center px-2">{course.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {course.technologies.map((tech, j) => (
                      <span key={j} className="text-[11px] bg-blue-50/50 border border-blue-100 text-[#0B4F9C] px-2.5 py-1 rounded-md font-[700]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer details */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-[#64748B] font-[600] text-[13px]">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <a 
                      href={course.path} 
                      className="text-[#22C55E] hover:text-[#16A34A] font-[700] text-[13px] flex items-center gap-1 transition-colors group/link"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
