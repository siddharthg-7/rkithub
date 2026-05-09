import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Play, ArrowRight } from 'lucide-react';

export const SuccessStories = () => {
  const testimonials = [
    {
      image: '/placed_student_1.png',
      name: 'Rahul Sharma',
      college: 'VNR VJIET',
      company: 'TCS',
      review: 'The training was extremely practical. The mentors helped me understand complex concepts easily.',
      rating: 5
    },
    {
      image: '/placed_student_2.png',
      name: 'Priya Patel',
      college: 'CBIT',
      company: 'Accenture',
      review: 'I got placed in my dream company. The placement support team guided me at every step.',
      rating: 5
    },
    {
      image: '/placed_student_1.png', // Reuse or generate more if needed
      name: 'Amit Verma',
      college: 'JNTU',
      company: 'Infosys',
      review: 'The mock interviews were a game changer for me. They built my confidence significantly.',
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#06152D] mb-4 tracking-tight"
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium"
          >
            Real stories from our students who transformed their careers.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Testimonials Grid (Instead of complex carousel for stability) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {testimonials.map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100">
                    <img src={test.image} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#06152D]">{test.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{test.college} | Placed at {test.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(test.rating)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-slate-600 font-medium leading-relaxed">"{test.review}"</p>
              </motion.div>
            ))}
          </div>

          {/* Video Testimonial Preview Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#06152D] text-white p-6 rounded-2xl relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-blue-600/20 rounded-full blur-[60px]" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Video Success Stories</h3>
              <p className="text-white/70 text-sm font-medium mb-6">Watch our students share their journey and experience with us.</p>
              
              {/* Video Thumbnail Placeholder */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
                <img 
                  src="/event_banner.png" 
                  alt="Video Testimonial" 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-[#06152D] shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5" fill="currentColor" />
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-white/10 text-white px-4 py-2.5 rounded-full font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/10">
                View All Stories
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
