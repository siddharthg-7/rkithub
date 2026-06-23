import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowUpRight,
  Download,
  Plus,
  Monitor,
  Code,
  Code2,
  Server,
  Database,
  BadgeCheck,
  BriefcaseBusiness,
  UserRoundCheck,
  Globe2,
  GitBranch,
  BarChart3,
  X,
} from 'lucide-react';
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiHeroku,
} from 'react-icons/si';
import InternshipJourneyVisual from '../components/InternshipJourneyVisual';
import { SEO } from '../components/SEO';

// ─── Program Roadmap (6 weeks) ────────────────────────────────────────────────
const roadmap = [
  {
    id: 'Week 1',
    title: 'Introduction to Web Development',
    subtitle: 'Foundations — What is Web Dev, HTTP, Browsers & HTML Fundamentals',
    chapters: [
      'What is Web Development?',
      'Frontend vs Backend vs Full Stack',
      'HTTP Basics & How the Web Works',
      'Web Servers & Clients',
      'Browsers & Developer Tools',
      'HTML Fundamentals & Structure',
      'Forms, Tables & Semantic HTML',
    ],
  },
  {
    id: 'Week 2',
    title: 'Advanced Frontend Development',
    subtitle: 'CSS, Flexbox, Grid, Bootstrap, Responsive Design & JavaScript',
    chapters: [
      'CSS Fundamentals — Selectors, Box Model, Positioning',
      'Flexbox Layout',
      'CSS Grid System',
      'Responsive Design & Media Queries',
      'Bootstrap Framework',
      'CSS Animations & Transitions',
      'JavaScript Fundamentals — Variables, Functions, Arrays',
      'DOM Manipulation',
      'Event Handling',
    ],
  },
  {
    id: 'Week 3',
    title: 'Backend Development',
    subtitle: 'Node.js, Express.js, APIs & REST Architecture',
    chapters: [
      'Introduction to Node.js',
      'Node.js Module System & npm',
      'Express.js Framework Setup',
      'Server-side Concepts',
      'Building REST APIs',
      'Routing & Middleware',
      'REST Architecture Principles',
    ],
  },
  {
    id: 'Week 4',
    title: 'Databases & Authentication',
    subtitle: 'MongoDB, MySQL, CRUD, JWT & User Authentication',
    chapters: [
      'Introduction to Databases (SQL vs NoSQL)',
      'MongoDB — Collections, Documents & Queries',
      'MySQL — Tables, Relations & Joins',
      'CRUD Operations',
      'User Authentication Concepts',
      'JWT — JSON Web Tokens',
      'Cookies & Sessions',
    ],
  },
  {
    id: 'Week 5',
    title: 'Full Stack Integration',
    subtitle: 'Frontend + Backend + Database + API Communication',
    chapters: [
      'Connecting Frontend to Backend',
      'Database Integration with Express',
      'API Communication (axios / fetch)',
      'State Management with React',
      'React Router for Navigation',
      'Full Stack Project Development',
    ],
  },
  {
    id: 'Week 6',
    title: 'Deployment & Final Project',
    subtitle: 'AWS, Heroku, SSL, SEO & Project Presentation',
    chapters: [
      'Introduction to Cloud & Deployment',
      'Deploying Frontend on Vercel / Netlify',
      'AWS Basics — EC2, S3',
      'Heroku Backend Deployment',
      'SSL Certificates & HTTPS',
      'SEO Basics for Web Apps',
      'Final Project Presentation & Review',
    ],
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Do I need prior coding experience?',
    a: 'No prior experience is required. We start from the very basics of HTML and JavaScript and progressively build up to full stack development.',
  },
  {
    q: 'Will I build real projects?',
    a: 'Yes. You will build multiple hands-on projects during the internship, culminating in a Full Stack Task Management Platform as your capstone project.',
  },
  {
    q: 'Will I receive an internship certificate?',
    a: 'Yes. Upon completion of the 6-week program and capstone project, you will receive an industry-recognized Internship Certificate from RK IT HUB.',
  },
  {
    q: 'Are recordings available?',
    a: 'Yes. All live training sessions are recorded and available for lifetime access so you can revisit topics at your own pace.',
  },
  {
    q: 'Will deployment be covered?',
    a: 'Yes. Week 6 is fully dedicated to deployment — covering AWS, Heroku, Vercel, SSL setup, and live project hosting.',
  },
  {
    q: 'Can I add the project to my resume?',
    a: 'Absolutely. Your capstone project and all mini-projects built during the internship are portfolio-ready and can be showcased on GitHub, LinkedIn, and your resume.',
  },
];

// ─── Project ideas ─────────────────────────────────────────────────────────────
const projectIdeas = [
  { title: 'Personal Portfolio',    desc: 'Showcase skills and projects'   },
  { title: 'Task Manager',          desc: 'CRUD based application'          },
  { title: 'E-Commerce Website',    desc: 'Products, Cart, Checkout'        },
  { title: 'Blog Platform',         desc: 'Authentication & Content'        },
  { title: 'Event Booking System',  desc: 'Bookings & Scheduling'           },
];

// ─── Tech stack for Technologies section ─────────────────────────────────────
const techStack = [
  { icon: <SiHtml5       size={40} color="#E34F26" />, label: 'HTML5'      },
  { icon: <SiCss         size={40} color="#1572B6" />, label: 'CSS3'       },
  { icon: <SiJavascript  size={40} color="#F7DF1E" />, label: 'JavaScript' },
  { icon: <SiReact       size={40} color="#61DAFB" />, label: 'ReactJS'    },
  { icon: <SiNodedotjs   size={40} color="#339933" />, label: 'NodeJS'     },
  { icon: <SiExpress     size={40} color="#000000" />, label: 'ExpressJS'  },
  { icon: <SiMongodb     size={40} color="#47A248" />, label: 'MongoDB'    },
  { icon: <SiGithub      size={40} color="#24292E" />, label: 'GitHub'     },
];

// ─── Tools section ────────────────────────────────────────────────────────────
const tools = [
  { icon: <Code2              size={36} className="text-[#007ACC]" />, label: 'VS Code'          },
  { icon: <SiGithub           size={36} color="#24292E" />, label: 'GitHub'           },
  { icon: <SiPostman          size={36} color="#FF6C37" />, label: 'Postman'          },
  { icon: <SiMongodb          size={36} color="#47A248" />, label: 'MongoDB'          },
  { icon: <Globe2             size={36} className="text-[#FF9900]"          />, label: 'AWS'      },
  { icon: <SiHeroku           size={36} color="#430098" />, label: 'Heroku'           },
  { icon: <Monitor            size={36} className="text-[#2563EB]"          />, label: 'DevTools' },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: '6 Weeks',  label: 'Program'        },
  { value: '4',        label: 'Training Modules' },
  { value: '1',        label: 'Capstone Project' },
  { value: 'Cert',     label: 'Included'         },
];

// ─── Animation presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

// ─── CTA Laptop ───────────────────────────────────────────────────────────────
const floatingCards = [
  { label: 'HTML',    color: '#E34F26', x: -100, y: -70,  delay: 0    },
  { label: 'CSS',     color: '#1572B6', x: -130, y: 40,   delay: 0.4  },
  { label: 'JS',      color: '#F7DF1E', x: 100,  y: -80,  delay: 0.8  },
  { label: 'React',   color: '#61DAFB', x: 130,  y: 30,   delay: 1.2  },
  { label: 'Node',    color: '#339933', x: -80,  y: 120,  delay: 1.6  },
  { label: 'MongoDB', color: '#47A248', x: 80,   y: 130,  delay: 2.0  },
];

const CtaLaptop: React.FC = () => (
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className="relative flex flex-col items-center pointer-events-none select-none"
    style={{ width: 280, height: 240 }}
  >
    {/* Glow */}
    <motion.div
      animate={{ opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute w-[180px] h-[180px] bg-[#2563EB] rounded-full"
      style={{ filter: 'blur(70px)', top: '10%', left: '50%', transform: 'translateX(-50%)' }}
    />
    {/* Screen */}
    <div
      className="relative flex flex-col items-center"
      style={{ transform: 'perspective(1000px) rotateY(-18deg)', transformStyle: 'preserve-3d' }}
    >
      <div className="w-[210px] h-[130px] bg-[#020617] border border-slate-700 rounded-t-[8px] relative flex items-center justify-center overflow-hidden shadow-2xl">
        <div className="relative z-10 p-3 rounded-full bg-blue-950/40 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <Code size={36} className="text-[#3B82F6]" strokeWidth={2} />
        </div>
        {/* Floating mini-cards */}
        {floatingCards.map((c, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
            className="absolute flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[9px] font-bold shadow-md"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${c.x}px), calc(-50% + ${c.y}px))`,
              borderColor: `${c.color}40`,
              background: `${c.color}18`,
              color: c.color,
              backdropFilter: 'blur(4px)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
            {c.label}
          </motion.div>
        ))}
      </div>
      {/* Keyboard */}
      <div
        className="w-[230px] h-[6px] bg-slate-800 rounded-b-[3px]"
        style={{ transform: 'rotateX(20deg)', transformOrigin: 'top center', boxShadow: '0 3px 8px rgba(0,0,0,0.5)' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1.5px] bg-slate-900 rounded-b" />
      </div>
    </div>
  </motion.div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
export const MernStackPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeFaq,       setActiveFaq]       = useState<number | null>(null);
  const [isCertOpen,      setIsCertOpen]      = useState<boolean>(false);

  return (
    <div className="w-full bg-white font-sans text-slate-600 selection:bg-blue-600 selection:text-white">
      <SEO 
        title="MERN Stack Developer Internship"
        description="Master Frontend, Backend, Databases, APIs, Deployment, and Full Stack Development through a structured 6-week hands-on MERN Stack internship program."
        keywords="mern stack internship, react node js course, full stack web development, web dev training, mongodb express react node"
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 1 ▸ HERO                                                             */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="w-full relative overflow-hidden font-sans"
        style={{
          background: 'linear-gradient(180deg, #020617 0%, #071126 100%)',
          minHeight: '760px',
        }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(37,99,235,.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(59,130,246,.08), transparent 40%)' }}
        />
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] blur-[140px] rounded-full pointer-events-none z-0"
          style={{ background: 'rgba(37,99,235,0.15)' }}
        />

        <div className="max-w-[1280px] mx-auto px-[24px] h-full relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] gap-[64px] items-start min-h-[720px] pt-[100px] pb-[80px]">

            {/* ── LEFT ── */}
            <motion.div initial="hidden" animate="visible" className="relative z-20">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="h-[38px] px-[16px] rounded-[999px] flex items-center justify-center w-fit mb-[24px] text-[12px] font-[600] tracking-[0.5px] uppercase text-[#93C5FD]"
                style={{ background: 'rgba(59,130,246,0.15)' }}
              >
                6 Week Industry-Oriented Internship Program
              </motion.div>

              {/* Heading */}
              <h1 className="w-full max-w-[520px] text-[48px] md:text-[68px] font-[800] leading-[1.05] md:leading-[0.95] text-white font-heading tracking-[-1.5px] md:tracking-[-3px] mb-[24px] overflow-hidden">
                <motion.span
                  className="block mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  Web Development
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  Internship Program
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[460px] text-[18px] leading-[1.7] font-[400] text-[#CBD5E1] font-sans mb-[32px]"
              >
                Master Frontend, Backend, Databases, APIs, Deployment, and Full Stack Development through a structured 6-week hands-on internship program with real-world projects.
              </motion.p>

              {/* Feature list */}
              <motion.div
                variants={{ visible: { transition: { delayChildren: 0.4, staggerChildren: 0.08 } } }}
                className="flex flex-col gap-0 mb-[36px]"
              >
                {[
                  'Live Training Sessions',
                  'Real World Projects',
                  'Internship Certificate',
                  'Portfolio Development',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden:  { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="flex items-center gap-[12px] h-[36px]"
                  >
                    <CheckCircle2 size={18} color="#3B82F6" strokeWidth={2.5} />
                    <span className="text-[16px] font-[500] text-[#E2E8F0] font-sans">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-[16px] mb-[48px]">
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

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] rounded-[16px] overflow-hidden border border-white/10 bg-white/5"
              >
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center py-[16px] px-[8px] bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="text-[22px] font-[800] text-white font-heading leading-none">{s.value}</span>
                    <span className="text-[11px] font-[500] text-[#94A3B8] mt-[4px] font-sans tracking-wide">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT VISUAL ── */}
            <div className="relative flex items-center justify-center w-full overflow-visible pt-[40px]">
              <InternshipJourneyVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 2 ▸ WHAT YOU'LL LEARN                                                */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white py-[80px]"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-[42px] font-[700] text-slate-900 font-heading">What You'll Learn</h2>
            <div className="w-[40px] h-[4px] bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#E5E7EB]"
          >
            {[
              { icon: <Monitor  size={48} strokeWidth={1.5} className="text-[#2563EB]" />, title: 'Frontend Dev',    desc: 'HTML, CSS, Bootstrap'    },
              { icon: <Code     size={48} strokeWidth={1.5} className="text-[#2563EB]" />, title: 'JavaScript',      desc: 'DOM, Events, ES6'         },
              { icon: <SiReact  size={48} color="#61DAFB"                              />, title: 'React Dev',       desc: 'Components & State'        },
              { icon: <Server   size={48} strokeWidth={1.5} className="text-[#2563EB]" />, title: 'Backend Dev',     desc: 'NodeJS & ExpressJS'        },
              { icon: <Database size={48} strokeWidth={1.5} className="text-[#2563EB]" />, title: 'Databases',       desc: 'MongoDB & MySQL'           },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden:  { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center p-[24px] bg-white cursor-pointer"
              >
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }} className="mb-6">
                  {icon}
                </motion.div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-sans">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 3 ▸ PROGRAM ROADMAP (6 Weeks)                                        */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#F8FAFC] py-[100px]"
      >
        <div className="max-w-[1280px] w-full mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-[42px] font-[700] text-slate-900 font-heading">Program Roadmap</h2>
            <div className="w-[40px] h-[4px] bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { delayChildren: 0.1, staggerChildren: 0.08 } } }}
            className="max-w-5xl mx-auto space-y-[16px]"
          >
            {roadmap.map((item, i) => {
              const isOpen = activeAccordion === i;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden:  { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#E2E8F0] rounded-[18px] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? null : i)}
                    className="w-full h-[88px] px-[24px] flex items-center text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="min-w-[80px] h-[48px] bg-[#EFF6FF] text-[#2563EB] rounded-[12px] flex items-center justify-center text-[14px] font-bold mr-6 shrink-0 font-heading px-2">
                      {item.id}
                    </div>
                    <div className="flex-1 pr-6">
                      <h3 className="text-[18px] font-bold text-slate-900 mb-1 font-heading">{item.title}</h3>
                      <p className="text-[14px] text-slate-500 line-clamp-1 font-sans">{item.subtitle}</p>
                    </div>
                    <div className="shrink-0 text-slate-600">
                      <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
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

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 4 ▸ TOOLS & TECHNOLOGIES                                             */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white py-[80px]"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-[42px] font-[700] text-slate-900 font-heading">Tools & Technologies</h2>
            <div className="w-[40px] h-[4px] bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-[20px] max-w-4xl mx-auto"
          >
            {techStack.map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden:  { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-3 p-6 bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.1)] hover:border-blue-200 transition-all cursor-pointer"
              >
                {icon}
                <span className="text-[15px] font-[600] text-slate-800 font-sans">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 5 ▸ REAL-TIME PROJECT                                                */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#F8FAFC] pt-[80px] pb-[80px] font-sans"
      >
        <div className="max-w-[1280px] mx-auto px-[24px]">
          <motion.div variants={fadeUp} className="text-center mb-[48px]">
            <h2 className="text-[42px] font-[700] text-[#0F172A] font-heading">Real-time Project</h2>
            <div className="w-[40px] h-[3px] bg-[#2563EB] mx-auto mt-[12px] rounded-[999px]" />
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[48px] items-center min-h-[320px]">

            {/* Left — video */}
            <motion.div
              variants={{
                hidden:  { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[520px] h-[220px] md:h-[280px] rounded-[18px] border border-[#E5E7EB] bg-[#020617] overflow-hidden relative mx-auto shadow-[0_15px_40px_rgba(15,23,42,0.08)] cursor-pointer shrink-0"
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

            {/* Right — project features */}
            <motion.div
              variants={{
                hidden:  { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="w-full max-w-[520px] flex flex-col gap-[16px] mx-auto"
            >
              <div className="flex flex-col gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-[600] uppercase tracking-wider w-fit">
                  Capstone Project
                </span>
                <h3 className="text-[30px] font-[700] text-[#111827] font-heading leading-[1.2]">
                  Full Stack Task Management Platform
                </h3>
              </div>
              <div className="flex flex-col gap-[14px]">
                {[
                  'User Authentication (JWT & Secure Login)',
                  'Task Creation & Management Dashboard',
                  'Project Collaboration & Team Features',
                  'REST API Integration (Node.js + Express)',
                  'MongoDB Database with CRUD Operations',
                  'Deployment Ready on Heroku & Vercel',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-[12px]">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#2563EB] shrink-0 mt-[4px]" strokeWidth={2.5} />
                    <span className="text-slate-600 font-[500] text-[16px] leading-[1.6] font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 6 ▸ PROJECT IDEAS                                                    */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white py-[80px]"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-[42px] font-[700] text-slate-900 font-heading">Project Ideas</h2>
            <div className="w-[40px] h-[4px] bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-wrap gap-[20px] justify-center"
          >
            {projectIdeas.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden:  { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center p-[24px] bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.1)] hover:border-blue-200 transition-all cursor-pointer w-[210px] shrink-0"
              >
                <div className="w-[48px] h-[48px] bg-[#EFF6FF] rounded-[12px] flex items-center justify-center mb-4">
                  <Code size={22} className="text-[#2563EB]" strokeWidth={2} />
                </div>
                <h4 className="text-[16px] font-[700] text-slate-900 mb-2 font-heading leading-tight">{title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-sans">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 7 ▸ INTERNSHIP BENEFITS                                              */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#F8FAFC]"
      >
        <div className="max-w-[1280px] mx-auto px-[24px]">
          <motion.div
            variants={{ visible: { transition: { delayChildren: 0.1, staggerChildren: 0.08 } } }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E7EB] rounded-xl lg:border-y lg:border-x-0 lg:rounded-none bg-white min-h-[180px] overflow-hidden"
          >
            {[
              { title: 'Internship Certificate', icon: BadgeCheck,        desc: 'Industry recognized certificate upon program completion.' },
              { title: 'Project Experience',     icon: BriefcaseBusiness, desc: 'Hands-on practical learning with real-world projects.'     },
              { title: 'Career Support',         icon: UserRoundCheck,    desc: 'Resume building, interview guidance & job assistance.'     },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden:  { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-4 p-[30px] md:p-[40px] h-full bg-white relative transition-all cursor-pointer ${
                    i < 2 ? 'border-b md:border-b-0 md:border-r border-[#E5E7EB]' : ''
                  }`}
                >
                  <motion.div whileHover={{ rotate: 5, scale: 1.05 }} transition={{ duration: 0.2 }} className="shrink-0">
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
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 8 ▸ TOOLS SECTION                                                    */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#F8FAFC] py-[80px]"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-[42px] font-[700] text-slate-900 font-heading">Tools You'll Use</h2>
            <div className="w-[40px] h-[4px] bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="flex flex-wrap justify-center gap-[16px] max-w-3xl mx-auto"
          >
            {tools.map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden:  { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-2 px-6 py-5 bg-white border border-[#E5E7EB] rounded-[16px] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] hover:border-blue-200 transition-all cursor-pointer min-w-[110px]"
              >
                {icon}
                <span className="text-[13px] font-[600] text-slate-700 font-sans">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 9 ▸ FAQ + CTA                                                        */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white pt-[80px] pb-[100px] font-sans"
      >
        <div className="max-w-[1280px] mx-auto px-[24px]">
          <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] gap-[40px] items-stretch">

            {/* FAQ */}
            <motion.div variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
              <motion.h2 variants={fadeUp} className="text-[42px] font-[700] text-[#0F172A] mb-[12px] font-heading">
                Frequently Asked Questions
              </motion.h2>
              <motion.div variants={fadeUp} className="w-[40px] h-[3px] bg-[#2563EB] mb-[40px] rounded-[999px]" />

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
                          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
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

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[24px] relative overflow-hidden flex flex-col justify-between h-full bg-gradient-to-br from-[#020617] to-[#0F172A] border border-slate-800/40"
            >
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(37,99,235,.15), transparent 65%)' }}
              />

              <div className="relative z-10 flex flex-col justify-between h-full p-[48px]">
                {/* Top */}
                <div>
                  <div
                    className="h-[32px] px-[14px] rounded-[999px] flex items-center justify-center w-fit mb-[20px] text-[11px] font-[600] tracking-[0.5px] uppercase text-[#93C5FD]"
                    style={{ background: 'rgba(37,99,235,0.15)' }}
                  >
                    Launch Your Web Dev Career
                  </div>
                  <h3 className="text-[38px] font-[800] text-white leading-[1.05] font-heading tracking-[-1px] mb-[16px]">
                    <span className="block">Start Your Web Development</span>
                    <span
                      className="block text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                    >
                      Journey Today!
                    </span>
                  </h3>
                  <p className="text-[15px] text-slate-400 font-sans leading-[1.65] max-w-[360px]">
                    Learn Frontend, Backend, Databases, APIs and Deployment while building real-world projects through our industry-focused internship program.
                  </p>
                </div>

                {/* Middle — laptop */}
                <div className="flex justify-center py-6">
                  <CtaLaptop />
                </div>

                {/* Bottom — buttons */}
                <div className="flex flex-col sm:flex-row gap-[16px]">
                  <motion.button
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
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* Certificate Lightbox                                                 */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
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
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] cursor-default overflow-hidden border border-white/20"
            >
              <button
                onClick={() => setIsCertOpen(false)}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-white/10 transition-all shadow-md cursor-pointer"
              >
                <X size={20} />
              </button>
              <div className="relative aspect-[1.414/1] rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                <img
                  src="/democertifiacte.jpeg"
                  alt="RK IT HUB Certificate — Large"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide border border-white/10 shadow-lg font-sans">
                  Official Demo Internship Certificate
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MernStackPage;
