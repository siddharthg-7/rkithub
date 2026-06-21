import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Quote, ArrowRight } from 'lucide-react';

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
      text: "RK IT internship gave me real exposure to industry-level projects. The mentors are amazing and supportive.",
      name: "Rohit Sharma",
      role: "Software Developer",
      company: "TCS",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "I improved my coding, communication and problem-solving skills. The placement support is excellent.",
      name: "Priya Verma",
      role: "Associate Developer",
      company: "Infosys",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "The live projects and regular feedback helped me build confidence and a strong portfolio.",
      name: "Aman Patel",
      role: "Backend Developer",
      company: "Wipro",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-[32px] md:text-[40px] font-[800] text-[#0F172A] leading-tight font-['Inter']">
            What Our Interns Say
          </h2>
          <button className="flex items-center gap-2 text-[#0A4DA2] font-semibold hover:text-[#071A52] transition-colors group">
            View All Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-10" ref={emblaRef}>
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
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-2 mt-4">
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
        </div>

      </div>
    </section>
  );
};
