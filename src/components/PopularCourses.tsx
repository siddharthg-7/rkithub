import React, { useRef, useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { FaJava, FaBrain } from 'react-icons/fa';
import { SiPython, SiReact, SiSelenium, SiCypress } from 'react-icons/si';
import { FcBarChart } from 'react-icons/fc'; // Using Flat Color for Data Science since it looks 3D natively
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Gradient Definitions for the Icons
const IconGradients = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <linearGradient id="java-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#F97316" offset="0%" />
        <stop stopColor="#EA580C" offset="100%" />
      </linearGradient>
      <linearGradient id="python-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#3B82F6" offset="0%" />
        <stop stopColor="#2563EB" offset="100%" />
      </linearGradient>
      <linearGradient id="mern-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#06B6D4" offset="0%" />
        <stop stopColor="#0891B2" offset="100%" />
      </linearGradient>
      <linearGradient id="data-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#8B5CF6" offset="0%" />
        <stop stopColor="#7C3AED" offset="100%" />
      </linearGradient>
      <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#F43F5E" offset="0%" />
        <stop stopColor="#E11D48" offset="100%" />
      </linearGradient>
      <linearGradient id="selenium-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#10B981" offset="0%" />
        <stop stopColor="#059669" offset="100%" />
      </linearGradient>
      <linearGradient id="cypress-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#14B8A6" offset="0%" />
        <stop stopColor="#0D9488" offset="100%" />
      </linearGradient>
    </defs>
  </svg>
);

const COURSES = [
  {
    title: 'Full Stack Java Developer',
    description: 'Build enterprise-grade applications using Java, Spring Boot and React.',
    technologies: ['Java', 'Spring', 'React', 'SQL'],
    duration: '5 Months',
    path: '/courses/java-full-stack',
    icon: FaJava,
    iconFill: 'url(#java-grad)',
    gradient: 'from-[#F97316] to-[#EA580C]',
    spotlightColor: 'rgba(249, 115, 22, 0.08)',
    glowColor: 'rgba(249, 115, 22, 0.3)',
    previewCode: '@RestController',
    featured: true
  },
  {
    title: 'Python Backend Developer',
    description: 'Master backend architecture with Python, Django, and RESTful APIs.',
    technologies: ['Python', 'Django', 'APIs', 'Docker'],
    duration: '5 Months',
    path: '/courses/python-full-stack',
    icon: SiPython,
    iconFill: 'url(#python-grad)',
    gradient: 'from-[#3B82F6] to-[#2563EB]',
    spotlightColor: 'rgba(59, 130, 246, 0.08)',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    previewCode: 'def predict():'
  },
  {
    title: 'MERN Stack Developer',
    description: 'Create scalable, interactive single-page web apps with MERN stack.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    duration: '5 Months',
    path: '/courses/mern-stack',
    icon: SiReact,
    iconFill: 'url(#mern-grad)',
    gradient: 'from-[#06B6D4] to-[#0891B2]',
    spotlightColor: 'rgba(6, 182, 212, 0.08)',
    glowColor: 'rgba(6, 182, 212, 0.3)',
    previewCode: 'useState()'
  },
  {
    title: 'Data Scientist',
    description: 'Analyze data, build models, and visualize insights with Python.',
    technologies: ['Pandas', 'ML', 'Stats', 'SQL'],
    duration: '5 Months',
    path: '/courses/data-science',
    icon: FcBarChart,
    iconFill: undefined, // Fc uses its own colors
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    spotlightColor: 'rgba(139, 92, 246, 0.08)',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    previewCode: 'plt.plot()'
  },
  {
    title: 'AI & ML Engineer',
    description: 'Build intelligent systems, neural networks, and deep learning models.',
    technologies: ['AI', 'Deep Learning', 'PyTorch'],
    duration: '1 Months',
    path: '/courses/ai-ml',
    icon: FaBrain,
    iconFill: 'url(#ai-grad)',
    gradient: 'from-[#F43F5E] to-[#E11D48]',
    spotlightColor: 'rgba(244, 63, 94, 0.08)',
    glowColor: 'rgba(244, 63, 94, 0.3)',
    previewCode: 'model.fit()'
  },
  {
    title: 'Automation Test Engineer',
    description: 'Automate web testing seamlessly and ensure software quality with Java.',
    technologies: ['Selenium', 'Java', 'Testing'],
    duration: '2 Months',
    path: '/courses/selenium',
    icon: SiSelenium,
    iconFill: 'url(#selenium-grad)',
    gradient: 'from-[#10B981] to-[#059669]',
    spotlightColor: 'rgba(16, 185, 129, 0.08)',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    previewCode: 'driver.get()'
  },
  {
    title: 'Front-end Test Engineer',
    description: 'Modern front-end testing for the modern web.',
    technologies: ['Cypress', 'JavaScript', 'Mocha'],
    duration: '2 Months',
    path: '/courses/cypress',
    icon: SiCypress,
    iconFill: 'url(#cypress-grad)',
    gradient: 'from-[#14B8A6] to-[#0D9488]',
    spotlightColor: 'rgba(20, 184, 166, 0.08)',
    glowColor: 'rgba(20, 184, 166, 0.3)',
    previewCode: 'cy.visit()'
  }
];

const CourseCard = ({ course, index }: { course: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = course.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full sm:w-[310px] h-[380px] bg-white rounded-[24px] border border-[#E2E8F0] hover:border-[#2563EB] transition-all duration-[250ms] overflow-hidden flex flex-col hover:-translate-y-[8px] cursor-pointer shrink-0"
      style={{
        boxShadow: isHovered ? '0 20px 50px rgba(15,23,42,0.08)' : 'none',
      }}
    >
      {/* Top Border Strip */}
      <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${course.gradient}`} />
      
      {/* Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]"
        style={{
          background: `radial-gradient(180px circle at ${mousePosition.x}px ${mousePosition.y}px, ${course.spotlightColor}, transparent 100%)`,
        }}
      />

      {/* Code Preview Background */}
      <div className="absolute top-[28px] left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none whitespace-nowrap font-mono text-[24px] font-bold z-0 transition-opacity duration-[250ms] group-hover:opacity-[0.08]">
        {course.previewCode}
      </div>

      <div className="p-[28px] pt-[32px] flex flex-col h-full relative z-10">
        
        {/* Top Icon Area */}
        <div className="w-full flex items-center justify-center h-[72px] mb-[16px] relative">
          {/* Subtle glow behind icon on hover */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]"
            style={{ backgroundColor: course.glowColor }}
          />
          <div className="relative z-10 transition-transform duration-[250ms] group-hover:rotate-6">
            <Icon 
              size={56} 
              style={course.iconFill ? { fill: course.iconFill } : undefined} 
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center mb-[20px]">
          <h3 className="font-heading font-[700] text-[20px] leading-tight text-[#0F172A] mb-[12px] h-[48px] flex items-center justify-center">
            {course.title}
          </h3>
          <p className="font-sans text-[14px] text-[#64748B] leading-[1.4] line-clamp-2 h-[40px]">
            {course.description}
          </p>
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-auto">
          {course.technologies.map((tech: string, j: number) => (
            <span 
              key={j} 
              className="font-sans text-[12px] font-[600] h-[28px] px-[12px] rounded-full bg-[#F8FAFC] text-[#475569] flex items-center transition-colors duration-[250ms] group-hover:bg-[#EFF6FF] group-hover:text-[#2563EB]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-[24px] pt-[20px] border-t border-[#E2E8F0]">
          <div className="flex items-center gap-[6px] text-[#64748B] font-sans font-[500] text-[13px]">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <Link to={course.path} className="text-[#0F172A] font-sans font-[600] text-[14px] flex items-center gap-1 group-hover:text-[#2563EB] transition-colors duration-[250ms]">
            Explore
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-[6px] transition-transform duration-[250ms]" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const PopularCourses = () => {
  return (
    <section id="courses" className="bg-white pt-16 pb-16 md:pt-[96px] md:pb-[100px] font-sans relative overflow-hidden">
      <IconGradients />
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[24px] lg:px-[32px] flex flex-col items-start md:items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-[48px] w-full">
          <h2 className="font-heading font-[700] text-[36px] md:text-[48px] text-[#0F172A] m-0 mb-[16px] leading-[1.1]">
            Choose Your Career Path
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-[#64748B] m-0 max-w-[620px] leading-relaxed">
            Master industry-demand technologies through projects, internships and placement-focused learning.
          </p>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="lg:hidden w-full flex justify-center mb-[24px]">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-[16px] py-[8px] flex items-center gap-[8px] text-[#475569] text-[12px] font-[600] shadow-sm">
            <span>Swipe left to see all courses</span>
            <ArrowRight className="w-3 h-3 text-[#64748B]" />
          </div>
        </div>

        {/* Grid / Snapping Scroller */}
        <div className="w-full">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 lg:grid lg:grid-cols-4 gap-[28px] justify-start lg:justify-center">
            {COURSES.map((course, i) => (
              <div key={i} className="snap-center shrink-0 w-[85vw] sm:w-[310px] lg:w-auto h-full first:ml-0 last:mr-0 ml-4 sm:ml-0">
                <CourseCard course={course} index={i} />
              </div>
            ))}
            {/* Spacer for mobile scroll boundary */}
            <div className="lg:hidden w-4 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
