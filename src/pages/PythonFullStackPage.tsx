import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight,
  ArrowUpRight, 
  Download, 
  Code,
  Plus,
  Minus,
  BriefcaseBusiness,
  BadgeCheck,
  UserRoundCheck,
  BookOpen,
  Database,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SiReact, SiDjango } from 'react-icons/si';
import PythonEcosystemVisual from '../components/PythonEcosystemVisual';
import { SEO } from '../components/SEO';

// ─── Syllabus Data ─────────────────────────────────────────────────────────────
const syllabus = [
  {
    id: '01',
    title: 'Core Python',
    subtitle: 'Modules 1-12 • Variables, Data Types, Control Flow, Functions, Data Structures, OOP Basics & File I/O',
    chapters: [
      'Introduction to Python & Environment Setup',
      'Variables, Constants & Data Types',
      'Operators & Conditional Logic (If-Else)',
      'Loops & Control Flow (For, While, Break, Continue)',
      'Functions, Arguments & Return Values',
      'Python Data Structures (Lists, Tuples, Dictionaries, Sets)',
      'List Comprehensions & Set Comprehensions',
      'File Input/Output & Handling Directories',
      'Introduction to Object-Oriented Programming (OOP)',
      'Classes, Objects & Attributes',
      'Exception Handling (Try, Except, Finally)',
      'Basic Modules & Libraries (math, datetime, random)'
    ]
  },
  {
    id: '02',
    title: 'Advanced Python',
    subtitle: 'Modules 13-22 • Advanced OOP, Multithreading, AsyncIO, RegEx, Metaprogramming & Optimization',
    chapters: [
      'Advanced OOP (Inheritance, Polymorphism, Encapsulation)',
      'Abstract Classes & Interfaces',
      'Decorators, Generators & Iterators',
      'Context Managers (with statement)',
      'Regular Expressions (re module)',
      'Multithreading vs Multiprocessing',
      'Asynchronous Programming with asyncio',
      'Network Programming (Socket Programming)',
      'Serialization & Deserialization (JSON, Pickle)',
      'Performance Optimization & Garbage Collection'
    ]
  },
  {
    id: '03',
    title: 'Database Management',
    subtitle: 'Modules 23-31 • SQL Relational Database, Joins, Triggers, Python DB Connectivity & SQLAlchemy ORM',
    chapters: [
      'Relational Database Management Systems (RDBMS)',
      'MySQL Installation & Workbench Setup',
      'SQL Basics (DDL, DML, DCL queries)',
      'Constraints, Primary & Foreign Keys',
      'Advanced Queries: Joins, Subqueries & Unions',
      'Aggregate Functions & Group By clauses',
      'Views, Indexes & Stored Procedures',
      'Python Database Connectivity (mysql-connector)',
      'Introduction to SQLAlchemy & Object-Relational Mapping (ORM)'
    ]
  },
  {
    id: '04',
    title: 'Web Designing',
    subtitle: 'Modules 32-36 • HTML5 Structure, CSS3 Custom Properties, Responsive Layouts & ES6+ JavaScript',
    chapters: [
      'HTML5 Basics, Semantic Tags & Structure',
      'CSS3 Styles, Transitions & Modern Color Palettes',
      'Responsive Web Design with Flexbox & CSS Grid',
      'JavaScript Fundamentals & ES6+ Syntax',
      'DOM Manipulation & Event Listeners'
    ]
  },
  {
    id: '05',
    title: 'Django Framework',
    subtitle: 'Modules 37-46 • MVT Architecture, Models, Templates, Django Admin & REST APIs (DRF)',
    chapters: [
      'Introduction to Django & MVC/MVT Architecture',
      'Django Projects & App Structuring',
      'URL Routing, Views & HTTP Requests/Responses',
      'Django Templates & Template Inheritance',
      'Django Models, Migrations & Database Relationships',
      'Django Forms & ModelForms',
      'User Authentication, Registration & Permissions',
      'Django Admin Panel Customization',
      'Building REST APIs with Django REST Framework (DRF)',
      'Django Security Best Practices & Deployment'
    ]
  },
  {
    id: '06',
    title: 'Real-Time Project',
    subtitle: '1 Capstone Project • Complete E-Commerce Web Application from Scratch',
    chapters: [
      'Project Planning & System Architecture Design',
      'Database Schema Planning & Migrations',
      'Backend REST API Development (Authentication, Products, Cart, Orders)',
      'Frontend Integration with ReactJS & State Management',
      'Testing, Debugging & Cloud Deployment'
    ]
  }
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Do I need prior coding experience?', a: 'No prior coding experience is required. We start from the absolute basics and build up to advanced web development concepts.' },
  { q: 'Will I get class recordings?', a: 'Yes, all live sessions are recorded and made available in your student dashboard for lifetime reference.' },
  { q: 'Will I receive a certificate?', a: 'Yes, upon successful completion of the course and the capstone project, you will receive an industry-recognized certificate.' },
  { q: 'Are real-time projects included?', a: 'Absolutely. You will build an enterprise-level E-Commerce Web Application from scratch as your capstone project.' },
  { q: 'Is placement support provided?', a: 'Yes, we provide 100% placement assistance, including mock interviews, resume building, and direct referrals.' },
  { q: 'Can I choose between online and offline batches?', a: 'Yes, we offer flexible learning modes. You can join either our live interactive online classes or classroom training.' }
];

// ─── Animation Presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Removed DashboardMockup component, now using standard video player

// ─── CTA Laptop Illustration Component ─────────────────────────────────────────
const CtaLaptop = () => {
  return (
    <div className="relative w-[220px] h-full flex items-center justify-center pointer-events-none select-none shrink-0">
      {/* Glow behind laptop */}
      <motion.div 
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[180px] h-[180px] bg-[#2563EB] rounded-full" 
        style={{ filter: 'blur(70px)' }}
      />
      
      {/* Tilted Laptop */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex flex-col items-center"
      >
        <div 
          className="relative flex flex-col items-center"
          style={{ 
            transform: 'perspective(1000px) rotateY(-20deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Screen */}
          <div className="w-[180px] h-[115px] bg-[#020617] border border-slate-700 rounded-t-[8px] relative flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Grid code lines */}
            <div className="absolute inset-2 opacity-5 flex flex-col gap-1 font-mono text-[4px] text-blue-400">
              <div>def main():</div>
              <div className="pl-2">print("Start Python Journey")</div>
              <div>if __name__ == "__main__":</div>
              <div className="pl-2">main()</div>
            </div>
            
            {/* Center Python logo */}
            <div className="relative z-10 p-2.5 rounded-full bg-blue-950/40 border border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
              <svg viewBox="0 0 110 110" width="30" height="30">
                <path fill="#3776AB" d="M55 2C32.9 2 28.2 9.6 28.2 22.8h13.2c0-8 2.3-11 13.6-11 11.2 0 13.5 3 13.5 11v8.5H41.8c-13.2 0-22.8 9.6-22.8 22.8V76h11V62c0-11.2 3-13.5 11-13.5h27c13.2 0 22.8-9.6 22.8-22.8V13.5C90.8 9.6 86 2 55 2z"/>
                <circle cx="41" cy="18" r="4.5" fill="#FFF"/>
                <path fill="#FFD343" d="M55 108c22.1 0 26.8-7.6 26.8-20.8H68.6c0 8-2.3 11-13.6 11-11.2 0-13.5-3-13.5-11V78.7h26.8c13.2 0 22.8-9.6 22.8-22.8V34h-11v14c0 11.2-3 13.5-11 13.5H36.2C23 61.5 13.4 71.1 13.4 84.3v10.2C13.4 98.4 18.2 108 55 108z"/>
                <circle cx="69" cy="92" r="4.5" fill="#FFF"/>
              </svg>
            </div>
          </div>
          {/* Keyboard base */}
          <div 
            className="w-[200px] h-[5px] bg-slate-800 rounded-b-[3px] relative"
            style={{
              transform: 'rotateX(20deg)',
              transformOrigin: 'top center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.5)'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-slate-900 rounded-b" />
          </div>
          
          {/* Floating cards */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            className="absolute left-[-30px] top-[10px] w-[60px] h-[38px] rounded-[6px] border border-blue-500/20 bg-blue-500/10 backdrop-blur-[4px] flex flex-col justify-center px-1.5 gap-0.5 shadow-md"
            style={{ transform: 'translateZ(20px)' }}
          >
            <div className="h-0.5 bg-blue-400/40 rounded w-2/3"></div>
            <div className="h-1 bg-blue-400/60 rounded w-1/2"></div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute left-[-20px] bottom-[15px] w-[60px] h-[38px] rounded-[6px] border border-blue-500/20 bg-blue-500/10 backdrop-blur-[4px] flex flex-col justify-center px-1.5 gap-0.5 shadow-md"
            style={{ transform: 'translateZ(10px)' }}
          >
            <div className="h-0.5 bg-blue-400/40 rounded w-1/2"></div>
            <div className="h-1 bg-blue-400/60 rounded w-3/4"></div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute right-[-30px] top-[20px] w-[60px] h-[38px] rounded-[6px] border border-blue-500/20 bg-blue-500/10 backdrop-blur-[4px] flex flex-col justify-center px-1.5 gap-0.5 shadow-md"
            style={{ transform: 'translateZ(15px)' }}
          >
            <div className="h-0.5 bg-blue-400/40 rounded w-3/4"></div>
            <div className="h-1 bg-blue-400/60 rounded w-1/2"></div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            className="absolute right-[-20px] bottom-[10px] w-[60px] h-[38px] rounded-[6px] border border-blue-500/20 bg-blue-500/10 backdrop-blur-[4px] flex flex-col justify-center px-1.5 gap-0.5 shadow-md"
            style={{ transform: 'translateZ(25px)' }}
          >
            <div className="h-0.5 bg-blue-400/40 rounded w-1/2"></div>
            <div className="h-1 bg-blue-400/60 rounded w-1/2"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── Main Page Component ─────────────────────────────────────────────────────
export const PythonFullStackPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isCertOpen, setIsCertOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-white font-sans text-slate-600 selection:bg-blue-600 selection:text-white">
      <SEO 
        title="Python Full Stack Developer Course | RK IT HUB"
        description="Become a Job-Ready Python Full-Stack Developer. Master Django, React, and PostgreSQL. Real-time projects, 100% placement support in Hyderabad."
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Python Full Stack Developer Course",
          "description": "Master Python, Django, React, and database management. Includes real-time projects and placement support.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "RK IT HUB",
            "sameAs": "https://rkithub.com"
          }
        }}
        keywords="python full stack, django course, python developer training, react js python, web development hyderabad"
      />
      
      {/* 1. Hero Section */}
      <section 
        className="w-full relative overflow-hidden font-sans"
        style={{ 
          background: 'linear-gradient(180deg, #020617 0%, #071126 100%)',
          minHeight: '760px'
        }}
      >
        {/* Ambient Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(37,99,235,.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(59,130,246,.08), transparent 40%)' }}></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] blur-[140px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(37,99,235,0.15)' }}></div>

        {/* Content Container */}
        <div className="max-w-[1280px] mx-auto px-[24px] h-full relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] gap-[64px] items-start min-h-[720px] pt-[100px] pb-[80px]">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              className="relative z-20"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="h-[38px] px-[16px] rounded-[999px] flex items-center justify-center w-fit mb-[20px] text-[12px] font-[600] tracking-[0.5px] uppercase text-[#93C5FD]"
                style={{ background: 'rgba(37,99,235,0.12)' }}
              >
                10 Years of Excellence in IT Training
              </motion.div>
              
              {/* Heading */}
              <h1 className="w-full max-w-[520px] text-4xl lg:text-5xl font-[800] leading-[1.05] md:leading-[0.95] text-white font-heading tracking-[-1.5px] md:tracking-[-3px] mb-[24px] overflow-hidden">
                <motion.span 
                  className="block mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  Python Full Stack
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-clip-text" 
                  style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  Developer Course
                </motion.span>
              </h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[540px] text-sm sm:text-base leading-[1.7] font-[400] text-[#CBD5E1] font-sans mb-[32px]"
              >
                Become a Job-Ready Python Full-Stack Developer. Build enterprise-grade applications and master the tools that top tech companies use daily.
              </motion.p>
              
              {/* Feature List */}
              <motion.div 
                variants={{
                  visible: {
                    transition: {
                      delayChildren: 0.4,
                      staggerChildren: 0.08
                    }
                  }
                }}
                className="flex flex-col gap-0 mb-[40px]"
              >
                {['Live Interactive Classes', 'Expert Mentors', 'Hands-on Projects', 'Placement Support'].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="flex items-center gap-[12px] h-[36px]"
                  >
                    <CheckCircle2 size={18} color="#2563EB" strokeWidth={2.5} />
                    <span className="text-[16px] font-[500] text-[#E2E8F0] font-sans">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-[16px] mb-0">
                <motion.button 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  whileHover="hover"
                  className="group h-[54px] pr-[12px] pl-[24px] bg-[#2563EB] text-white font-[600] text-[15px] font-sans rounded-[12px] flex items-center justify-between gap-[16px] transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                  style={{ boxShadow: '0 10px 30px rgba(37,99,235,0.25)' }}
                >
                  <span>Enroll Now</span>
                  <motion.span 
                    variants={{ hover: { x: 2 } }}
                    transition={{ duration: 0.2 }}
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-white/10"
                  >
                    <ArrowUpRight size={16} strokeWidth={2} color="white" />
                  </motion.span>
                </motion.button>
                
                <motion.button 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  whileHover="hover"
                  className="group h-[54px] pr-[12px] pl-[24px] bg-transparent text-white font-[600] text-[15px] font-sans rounded-[12px] flex items-center justify-between gap-[16px] transition-all border border-white/15 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                >
                  <span>Download Brochure</span>
                  <motion.span 
                    variants={{ hover: { y: 1 } }}
                    transition={{ duration: 0.2 }}
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-white/5"
                  >
                    <Download size={16} strokeWidth={2} color="white" />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual - Python Ecosystem */}
            <div className="relative flex items-center justify-center w-full overflow-visible pt-[40px]">
              <PythonEcosystemVisual />
            </div>

          </div>
        </div>
      </section>

      {/* 2. What You'll Learn */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white py-[80px]"
      >
        <div className="max-w-[1280px] mx-auto px-[24px]">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-[700] text-slate-900 font-heading">Master the Skills That Get You Hired</h2>
            <div className="w-[40px] h-[3px] bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#E5E7EB]"
          >
            {[
              { icon: BookOpen, title: 'Core Concepts', desc: 'Master core programming fundamentals to write robust, error-free scripts.' },
              { icon: SiDjango, title: 'Architecture', desc: 'Design scalable backends using Django so your applications can handle enterprise traffic.' },
              { icon: SiReact, title: 'Modern UI', desc: 'Build reactive, fluid front-ends with React to deliver seamless user experiences.' },
              { icon: Database, title: 'Database', desc: 'Manage high-performance data with MySQL to handle massive datasets like an industry pro.' },
              { icon: Code, title: 'Deployment', desc: 'Launch your full-stack applications to cloud environments ensuring global availability.' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center text-center p-[24px] bg-white cursor-pointer group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#2563EB] mb-6 group-hover:rotate-6 transition-transform"
                  >
                    <Icon size={48} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{item.title}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed font-sans">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Chapter-wise Curriculum */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#F8FAFC] py-[100px]"
      >
        <div className="max-w-[1280px] w-full mx-auto px-[24px]">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-[700] text-slate-900 font-heading">Chapter-wise Curriculum</h2>
            <div className="w-[40px] h-[3px] bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.1,
                  staggerChildren: 0.08
                }
              }
            }}
            className="max-w-5xl mx-auto space-y-[16px]"
          >
            {syllabus.map((item, i) => {
              const isOpen = activeAccordion === i;
              return (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#E2E8F0] rounded-[18px] overflow-hidden"
                >
                  <button 
                    onClick={() => setActiveAccordion(isOpen ? null : i)}
                    className="w-full h-[88px] px-[24px] flex items-center text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="w-[48px] h-[48px] bg-[#EFF6FF] text-[#2563EB] rounded-[12px] flex items-center justify-center text-[18px] font-bold mr-6 shrink-0 font-heading">
                      {item.id}
                    </div>
                    <div className="flex-1 pr-6">
                      <h3 className="text-[18px] font-bold text-slate-900 mb-1 font-heading">{item.title}</h3>
                      <p className="text-[14px] text-slate-500 line-clamp-1 font-sans">{item.subtitle}</p>
                    </div>
                    <div className="shrink-0 text-slate-600">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus size={22} strokeWidth={2} />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-slate-100"
                      >
                        <div className="p-8 bg-slate-50/50">
                          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                            {item.chapters.map((chap, ci) => (
                              <div key={ci} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] mt-0.5 shrink-0" strokeWidth={2.5} />
                                <span className="text-slate-600 text-[15px] font-medium font-sans">{chap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Real-time Project Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white pt-[80px] pb-0 font-sans"
      >
        <div className="max-w-[1280px] mx-auto px-[24px]">
          {/* Centered Title */}
          <motion.div variants={fadeUp} className="text-center mb-[48px]">
            <h2 className="text-3xl lg:text-4xl font-[700] text-[#0F172A] font-heading">Real-Time Project</h2>
            <div className="w-[40px] h-[3px] bg-[#2563EB] mx-auto mt-[12px] rounded-[999px]"></div>
          </motion.div>

          {/* Grid Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[48px] items-center min-h-[320px] mb-[80px]">
            {/* Left SaaS Mockup Dashboard (Video Player) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[500px] h-[220px] md:h-[280px] rounded-[18px] border border-[#E5E7EB] bg-[#020617] overflow-hidden relative mx-auto shadow-[0_15px_40px_rgba(15,23,42,0.08)] cursor-pointer shrink-0"
            >
              <video 
                src="/assets/project-demo.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Right Project Content */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="w-full max-w-[520px] flex flex-col gap-[16px] mx-auto"
            >
              <div className="flex flex-col gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-[600] uppercase tracking-wider w-fit font-sans">
                  Example Capstone Project
                </span>
                <h3 className="text-[30px] font-[700] text-[#111827] font-heading leading-[1.2]">
                  E-Commerce Web Application
                </h3>
              </div>
              
              <div className="flex flex-col gap-[16px]">
                {[
                  'Authentication & Authorization (JWT based, secure register/login)',
                  'Product Management (Dynamic catalog, filters, search, and details)',
                  'Cart System & Wishlist (Persistent items management per user)',
                  'Order Management & Processing (Checkout, history, and status updates)',
                  'Reports & Admin Dashboard (Revenue analytics, categories statistics)'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-[12px]">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#2563EB] shrink-0 mt-[4px]" strokeWidth={2.5} />
                    <span className="text-slate-600 font-[500] text-[16px] leading-[1.6] font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 5. Internship | Certificate | Placement Row */}
          <div className="mb-[24px] mt-[40px]">
            <h3 className="text-[28px] font-[700] text-[#0F172A] font-heading">Your Career Path:</h3>
            <p className="text-[16px] text-slate-600 mt-2 font-sans">Prepare for roles like: <span className="font-semibold text-slate-900">Junior Software Engineer, Full-Stack Developer, or Backend Specialist.</span></p>
          </div>
          <motion.div 
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.1,
                  staggerChildren: 0.08
                }
              }
            }}
            className="w-full grid grid-cols-3 gap-0 border-t border-[#E5E7EB] bg-white min-h-[180px] mb-[80px]"
          >
            {[
              { 
                title: 'Internship Opportunity', 
                icon: BriefcaseBusiness, 
                desc: 'Work on live projects and gain real industry experience.' 
              },
              { 
                title: 'Certificate of Completion', 
                icon: BadgeCheck, 
                desc: 'Earn industry-recognized certificate to showcase your skills.' 
              },
              { 
                title: '100% Interview Ready', 
                icon: UserRoundCheck, 
                desc: 'Includes 5+ mock technical interviews and resume optimization with professional mentors.' 
              }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => i === 1 && setIsCertOpen(true)}
                  className={`flex items-start gap-4 p-[40px] h-full bg-white relative transition-all group cursor-pointer ${
                    i < 2 ? 'after:content-[""] after:absolute after:right-0 after:top-[40px] after:bottom-[40px] after:w-[1px] after:bg-[#E5E7EB]' : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <Icon size={48} strokeWidth={1.75} className="text-[#2563EB]" />
                  </motion.div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[26px] font-[600] text-[#111827] leading-[1.2] font-heading">{card.title}</h4>
                    <p className="text-[16px] leading-[1.7] text-[#64748B] w-[280px] font-sans">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Certificate Demo Showcase Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="w-full grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[64px] items-center mb-[100px] pt-10"
          >
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 tracking-wider w-fit font-sans">
                Official Credential
              </div>
              <h3 className="text-[38px] font-[700] text-[#0F172A] font-heading leading-[1.2] tracking-tight">
                Your Pathway to <span className="text-[#2563EB]">Verified Success</span>
              </h3>
              <p className="text-[16px] text-slate-500 leading-relaxed font-sans">
                Upon successfully completing the Python Full Stack Developer program and your capstone project, you will be awarded an industry-recognized Certificate of Completion from RK IT HUB. Showcase your verified achievements to recruiters and engineering leads.
              </p>
              
              <div className="flex flex-col gap-4 mt-2 font-sans">
                {[
                  {
                    title: "Verifiable Credential ID",
                    desc: "Comes with a unique tracking ID and QR code verifiable on our portal by HR and recruiting teams."
                  },
                  {
                    title: "LinkedIn & Resume Ready",
                    desc: "Add it to your LinkedIn profile under Licenses & Certifications or link it directly on your resume."
                  },
                  {
                    title: "Demonstrate Project Experience",
                    desc: "Highlights your hands-on development on real-time projects and enterprise applications."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                      <BadgeCheck size={22} />
                    </div>
                    <div>
                      <h5 className="text-[16px] font-bold text-slate-900 font-heading">{item.title}</h5>
                      <p className="text-[14px] text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Certificate Card */}
            <div className="relative flex items-center justify-center w-full">
              {/* Backlight glow */}
              <div className="absolute inset-0 bg-[#2563EB]/5 rounded-[24px] blur-3xl -z-10 w-[80%] h-[80%] mx-auto" />
              
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  rotateY: -2,
                  rotateX: 2,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
                onClick={() => setIsCertOpen(true)}
                className="relative cursor-pointer group rounded-[20px] border border-slate-200/80 bg-white p-4 shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-300 overflow-hidden w-full max-w-[580px]"
              >
                {/* Overlay Hover Icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20 rounded-[20px]">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-2 text-white bg-slate-900/80 px-5 py-3 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl"
                  >
                    <ArrowUpRight size={20} className="text-blue-400 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider uppercase font-sans">Click to Enlarge</span>
                  </motion.div>
                </div>

                {/* Ribbon Badge */}
                <div className="absolute top-8 right-[-32px] rotate-45 bg-[#2563EB] text-white text-[10px] font-extrabold tracking-widest py-1.5 px-10 shadow-md uppercase z-10 border-b border-white/10">
                  Demo
                </div>

                <div className="relative overflow-hidden rounded-[12px] bg-slate-50 border border-slate-100 aspect-[1.414/1] flex items-center justify-center">
                  <img 
                    src="/democertifiacte.webp" 
                    alt="RK IT HUB Course Completion Certificate" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 6. FAQ & Final CTA Banner Row */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[40px] items-stretch pb-[100px]">
            
            {/* FAQ Side */}
            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
            >
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-[700] text-[#0F172A] mb-[12px] font-heading">Frequently Asked Questions</motion.h2>
              <motion.div variants={fadeUp} className="w-[40px] h-[3px] bg-[#2563EB] mb-[40px] rounded-[999px]"></motion.div>
              
              <div className="space-y-[12px]">
                {faqs.map((faq, i) => {
                  const isOpen = activeFaq === i;
                  return (
                    <motion.div 
                      key={i} 
                      variants={fadeUp}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="border border-[#E5E7EB] rounded-[14px] overflow-hidden bg-white cursor-pointer"
                    >
                      <button 
                        onClick={() => setActiveFaq(isOpen ? null : i)}
                        className="w-full h-[64px] px-[24px] flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="font-[500] text-slate-800 text-[15px] font-sans">{faq.q}</span>
                        <div className="text-slate-500 shrink-0">
                          <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus size={18} />
                          </motion.div>
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-[24px] pb-[20px] pt-[4px] text-slate-500 text-[15px] leading-[1.7] font-sans">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Card Side — stretches to full FAQ height via grid items-stretch */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[24px] p-[48px] relative overflow-hidden flex flex-col justify-between h-full bg-gradient-to-br from-[#020617] to-[#0F172A] border border-slate-800/40"
            >
              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(37,99,235,.15), transparent 65%)' }}
              />

              {/* Top: Heading area */}
              <div className="relative z-10">
                <div
                  className="h-[32px] px-[14px] rounded-[999px] flex items-center justify-center w-fit mb-[20px] text-[11px] font-[600] tracking-[0.5px] uppercase text-[#93C5FD]"
                  style={{ background: 'rgba(37,99,235,0.15)' }}
                >
                   Launch Your Career
                </div>
                <h3 className="text-[34px] font-[800] text-white leading-[1.1] font-heading tracking-[-1px] mb-[16px]">
                  Start Your Python<br />
                  Developer Journey<br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                  >
                    Today!
                  </span>
                </h3>
                <p className="text-[15px] text-slate-400 font-sans leading-[1.65] max-w-[320px]">
                  Join thousands of students who've built their careers in Python Full Stack Development with RK IT Hub.
                </p>
              </div>

              {/* Middle: Laptop illustration */}
              <div className="flex justify-center py-4 relative z-10">
                <CtaLaptop />
              </div>

              {/* Bottom: Buttons */}
              <div className="flex flex-col sm:flex-row gap-[16px] relative z-10">
                <motion.button 
                  whileHover="hover"
                  className="group h-[54px] pr-[12px] pl-[24px] bg-[#2563EB] text-white font-[600] text-[15px] font-sans rounded-[12px] flex items-center justify-between gap-[16px] transition-all cursor-pointer hover:-translate-y-0.5 w-full sm:w-auto"
                  style={{ boxShadow: '0 10px 30px rgba(37,99,235,0.25)' }}
                >
                  <span>Enroll Now</span>
                  <motion.span 
                    variants={{ hover: { x: 2 } }}
                    transition={{ duration: 0.2 }}
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-white/10"
                  >
                    <ArrowUpRight size={16} strokeWidth={2} color="white" />
                  </motion.span>
                </motion.button>
                
                <motion.button 
                  whileHover="hover"
                  className="group h-[54px] pr-[12px] pl-[24px] bg-transparent text-white font-[600] text-[15px] font-sans rounded-[12px] flex items-center justify-between gap-[16px] transition-all border border-white/15 cursor-pointer hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <span>Download Brochure</span>
                  <motion.span 
                    variants={{ hover: { y: 1 } }}
                    transition={{ duration: 0.2 }}
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-white/5"
                  >
                    <Download size={16} strokeWidth={2} color="white" />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {isCertOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCertOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] cursor-default overflow-hidden border border-white/20"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsCertOpen(false)}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-white/10 transition-all shadow-md cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[1.414/1] rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                <img 
                  src="/democertifiacte.webp" 
                  alt="RK IT HUB Course Completion Certificate - Large" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Certificate Label */}
                <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide border border-white/10 shadow-lg">
                  Official Demo Certificate of Completion
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PythonFullStackPage;
