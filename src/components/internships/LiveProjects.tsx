import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Code, Laptop } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const LiveProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;
    if (!section || !scrollContainer) return;

    // Calculate how far to scroll (width of container - viewport width + some padding)
    const getScrollAmount = () => -(scrollContainer.scrollWidth - window.innerWidth + 160);

    const tween = gsap.to(scrollContainer, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollContainer.scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const projects = [
    {
      title: 'AI Resume Analyzer',
      skills: 'Analyze resumes using AI and give smart feedback.',
      tech: ['Python', 'NLP', 'ML'],
      duration: '4 Weeks',
      type: 'AI Model',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hospital Management System',
      skills: 'Complete hospital management solution.',
      tech: ['MERN', 'JWT', 'Cloud'],
      duration: '6 Weeks',
      type: 'Web App',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Student Placement Portal',
      skills: 'Placement management and student tracking.',
      tech: ['React', 'Node.js', 'MongoDB'],
      duration: '5 Weeks',
      type: 'Portal',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Inventory Tracker',
      skills: 'Track stock, sales and inventory in real-time.',
      tech: ['Next.js', 'PostgreSQL'],
      duration: '4 Weeks',
      type: 'App',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Recruitment Dashboard',
      skills: 'HR dashboard to manage candidates and jobs.',
      tech: ['React', 'Charts', 'API'],
      duration: '3 Weeks',
      type: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section ref={sectionRef} className="bg-[var(--color-bg-dark)] h-screen min-h-[900px] flex flex-col justify-center overflow-hidden font-sans relative">
      
      <div className="max-w-[1440px] px-[80px] mx-auto w-full mb-12 shrink-0">
        <h2 className="text-[40px] font-[800] text-white leading-tight font-['Inter'] mb-4">
          Live Projects You Will Work On
        </h2>
        <p className="text-gray-400 text-lg">
          Industry-grade projects to build your portfolio.
        </p>
      </div>

      <div className="px-[80px]">
        <div ref={scrollRef} className="flex gap-8 w-max">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-[450px] h-[320px] bg-[#0f172a] rounded-[20px] border border-gray-800 overflow-hidden group flex flex-col hover:border-blue-500/50 transition-colors"
            >
              <div className="h-[160px] w-full overflow-hidden relative border-b border-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-1.5">
                  <Laptop size={12} />
                  {project.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-[#0f172a] to-[#030712]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white font-['Inter'] group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap bg-gray-800/50 px-2 py-1 rounded-md">
                    <Calendar size={12} />
                    {project.duration}
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {project.skills}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tech.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-blue-900/30 text-blue-300 border border-blue-800/50 rounded-md font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
