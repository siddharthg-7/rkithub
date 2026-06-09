import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rohit Kumar',
      course: 'Java Full Stack',
      company: 'Infosys',
      review: 'The Java Full Stack course was excellent. The trainer had deep knowledge and the real-time projects helped me clear my interviews with confidence.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Neha Patel',
      course: 'Python Full Stack',
      company: 'TCS',
      review: 'I joined the Python course with no coding background. The step-by-step approach and patience of the trainer made it easy for me to learn.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Vikram Reddy',
      course: 'MERN Stack',
      company: 'Wipro',
      review: 'Great place to learn web development. The placement assistance is real, they helped me prepare my resume and scheduled interviews.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <div id="testimonials" className="flex flex-col h-full w-full pr-0 lg:pr-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-[20px] font-[800] text-[#0F172A] mb-6"
      >
        What Our Students Say
      </motion.h2>

      <div className="relative w-full">
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 shadow-md hover:text-[#0B4F9C] hover:border-[#0B4F9C] z-10 transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 shadow-md hover:text-[#0B4F9C] hover:border-[#0B4F9C] z-10 transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              key={i} 
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col relative group hover:shadow-md transition-all duration-300"
            >
              <div className="text-[#0B4F9C] text-3xl font-serif leading-none mb-2 opacity-50">"</div>
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-3 text-[#EAB308]">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#475569] text-[11px] leading-relaxed mb-6 flex-grow font-[500]">
                {testimonial.review}
              </p>

              {/* Student Details */}
              <div className="mt-auto flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-[800] text-[#0F172A] text-[12px] leading-tight mb-0.5">{testimonial.name}</h4>
                  <p className="text-[10px] text-[#64748B] font-[600] leading-tight">{testimonial.course}</p>
                  <p className="text-[10px] text-[#64748B] font-[600] leading-tight">Placed at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-[#0B4F9C]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
