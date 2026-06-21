import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight, ArrowRightCircle } from 'lucide-react';

export const LiveProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: true })
  ]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const projects = [
    {
      title: 'AI Resume Analyzer',
      description: 'AI tool to analyze and improve resumes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'NLP', 'ML']
    },
    {
      title: 'Student Management System',
      description: 'Manage students, exams and attendance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce web application.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['MERN', 'Stripe', 'AWS']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task tracking application.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Firebase', 'Tailwind']
    },
    {
      title: 'Recruitment Dashboard',
      description: 'Analytics dashboard for HR recruitment.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Tailwind', 'Charts']
    }
  ];

  return (
    <section className="bg-[#071A52] px-4 overflow-hidden h-[800px] flex items-center">
      <div className="max-w-[1280px] mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-[32px] md:text-[40px] font-[800] text-white leading-tight font-['Inter']">
            Live Projects You'll Work On
          </h2>
          <button className="flex items-center gap-2 text-[#22C55E] font-semibold hover:text-white transition-colors group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-[-20px] md:left-[-40px] top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#0A4DA2] border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all z-10 opacity-0 group-hover:opacity-100"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-[-20px] md:right-[-40px] top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#0A4DA2] border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all z-10 opacity-0 group-hover:opacity-100"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-6 -ml-4 pl-4">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_360px] min-w-0">
                  <div className="bg-[#0F296D] rounded-[24px] overflow-hidden border border-white/10 hover:border-[#22C55E]/50 transition-colors h-full flex flex-col group/card">
                    {/* Image Area */}
                    <div className="h-[180px] w-full overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-left-top group-hover/card:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F296D] via-transparent to-transparent opacity-80"></div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2 font-['Inter'] line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 font-['Inter'] mb-6 flex-grow line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-white/5 border border-white/10 text-slate-200 text-[10px] font-semibold rounded uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
