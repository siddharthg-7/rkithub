import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 4000, stopOnInteraction: true })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const testimonials = [
    {
      text: "I am immensely grateful to RK IT TRAINING HUB for their outstanding training, which equipped me with the skills to confidently step into the field as an Associate Software Engineer. The faculty's deep knowledge, enthusiasm, and practical teaching approach made it easy to understand and apply complex concepts. Their mentorship has been invaluable in building my technical foundation and boosting my confidence as a fresher. I highly recommend RK IT TRAINING HUB to anyone aspiring to develop expertise in automation testing and kickstart their career in the software industry.",
      name: "Durga",
      role: "Associate Software Engineer",
      company: "Enmoval - 3.5 LPA",
      avatar: "/durga.png"
    },
    {
      text: "I had the opportunity to take a software testing course at RK IT Training HUB, and the experience was incredibly valuable. The training was highly practical, incorporating real-time examples that made even the most complex concepts easy to grasp. The faculty at RK IT Training HUB also provided insightful tips and strategies for acing interviews, which helped me approach my job search with confidence. Thanks to their guidance and support, I was able to successfully clear my interview and secure a job in software testing. I am truly grateful to RK IT Training HUB for their help and encouragement.",
      name: "Vijaya",
      role: "SDET",
      company: "Broadridge - 5.5 LPA",
      avatar: "/vijaya.png"
    },
    {
      text: "After taking a year-long break from my career, joining RK IT Training Hub really helped me reconnect with the tech world. The trainers made complex concepts easy to understand and focused on practical, hands-on learning, which boosted my confidence. Their guidance during interview preparation was especially valuable. With their support, I was able to land a job as a Test Engineer. I’m truly thankful to the entire team for helping me restart my journey in technology with confidence",
      name: "Manogna",
      role: "Test Engineer",
      company: "CGI - 7.5 LPA",
      avatar: "/manogna.png"
    },
    {
      text: "I sincerely thank RK IT TRAINING HUB for providing top-quality training that helped me launch my career as a Full Stack Java Developer. The instructors’ real-world insights and hands-on teaching approach made complex concepts easy to understand and apply. Their constant support and guidance played a key role in building my technical confidence and skill set. I’m happy to share that I’ve been placed at Fin ECHO Engineering, and this achievement wouldn’t have been possible without the strong foundation built during my time at RK IT. I highly recommend RK IT TRAINING HUB to anyone aspiring to succeed in Full Stack Java Development.",
      name: "Chaitanya",
      role: "Full Stack Java Developer",
      company: "Fin Echo Engineering - 3.5 LPA",
      avatar: "/Chaitanya .png"
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <h2 className="text-[32px] md:text-[40px] font-[800] text-[#0F172A] leading-tight font-['Inter']">
            What Our Interns Say
          </h2>
          <button className="flex items-center gap-2 text-[#0A4DA2] font-semibold hover:text-[#071A52] transition-colors group">
            View All Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="overflow-hidden cursor-grab active:cursor-grabbing pb-10" 
          ref={emblaRef}
        >
          <div className="flex gap-6 -ml-4 pl-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0 pt-4">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-8 h-full flex flex-col relative group hover:border-[#0A4DA2]/30 transition-colors">
                  <div className="absolute top-[-20px] left-8 w-12 h-12 bg-[#0A4DA2] rounded-full flex items-center justify-center text-white shadow-lg">
                    <Quote size={20} fill="currentColor" />
                  </div>
                  
                  <p className="text-[#0F172A] font-['Inter'] font-medium text-[15px] leading-relaxed mb-8 mt-4 flex-grow italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-[#0F172A] font-['Inter'] text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-[#64748B] font-['Inter']">{testimonial.role} at <span className="font-semibold text-[#0A4DA2]">{testimonial.company}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dots Pagination */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-2 mt-4"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'w-8 bg-[#0A4DA2]' : 'w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};
