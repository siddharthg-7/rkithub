import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowUpRight,
  Download,
  Code,
  Plus,
  BriefcaseBusiness,
  BadgeCheck,
  UserRoundCheck,
  ClipboardCheck,
  Layers3,
  Bot,
  Coffee,
  Webhook,
  X,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import SeleniumRoadmapVisual from '../components/SeleniumRoadmapVisual';

// ─── Syllabus ─────────────────────────────────────────────────────────────────
const syllabus = [
  {
    id: '01',
    title: 'Manual Testing',
    subtitle: 'Software Testing Fundamentals, SDLC, STLC, Test Design & Defect Management',
    chapters: [
      'Introduction to Software Testing',
      'SDLC — Software Development Life Cycle',
      'STLC — Software Testing Life Cycle',
      'Test Case Design Techniques',
      'Defect Life Cycle & Bug Reporting',
      'Testing Types (Functional, Regression, Smoke)',
      'Test Plans & Requirement Traceability Matrix',
    ],
  },
  {
    id: '02',
    title: 'Database Testing',
    subtitle: 'SQL Queries, Database Validation & Backend Data Verification',
    chapters: [
      'Introduction to Relational Databases',
      'SQL Basics — DDL, DML, DCL',
      'CRUD Operations & Filtering',
      'Joins, Subqueries & Aggregate Functions',
      'Database Validation in Testing',
      'Writing Backend Test Queries',
    ],
  },
  {
    id: '03',
    title: 'API Testing',
    subtitle: 'Postman, Collections, Environment Variables, Assertions & Scripting',
    chapters: [
      'Introduction to APIs & REST Architecture',
      'Postman Tool — Installation & UI Tour',
      'Creating & Sending HTTP Requests (GET, POST, PUT, DELETE)',
      'Organizing Requests with Collections',
      'Environment & Global Variables',
      'Writing Test Scripts & Assertions',
      'Newman CLI for API Test Automation',
    ],
  },
  {
    id: '04',
    title: 'Java Programming',
    subtitle: 'OOP Concepts, Collections Framework, Exception Handling & I/O',
    chapters: [
      'Java Basics — Data Types, Variables, Operators',
      'Control Flow — Conditions & Loops',
      'Object-Oriented Programming (OOP) — Classes & Objects',
      'Inheritance, Polymorphism, Encapsulation',
      'Collections Framework — List, Set, Map',
      'Exception Handling (try-catch-finally)',
      'File I/O & String Manipulation',
    ],
  },
  {
    id: '05',
    title: 'Selenium WebDriver',
    subtitle: 'Locators, XPath, Actions, Frames, Windows, Waits & Cross-Browser Testing',
    chapters: [
      'Selenium Architecture & WebDriver Setup',
      'Locators — ID, Name, CSS, XPath',
      'XPath Strategies (Absolute vs Relative)',
      'Handling Web Elements (Input, Button, Dropdown, Checkbox)',
      'Mouse & Keyboard Actions',
      'Frames, iFrames & Multiple Windows',
      'Explicit, Implicit & Fluent Waits',
      'Cross-Browser Testing (Chrome, Firefox, Edge)',
      'Screenshot Capture & Test Evidence',
    ],
  },
  {
    id: '06',
    title: 'Framework Development',
    subtitle: 'TestNG, Page Object Model, Page Factory, Cucumber BDD & Reporting',
    chapters: [
      'TestNG — Annotations, Grouping & Prioritization',
      'Data-Driven Testing with @DataProvider & Excel',
      'Page Object Model (POM) Design Pattern',
      'Page Factory with @FindBy Annotations',
      'Cucumber BDD Framework — Feature Files & Step Definitions',
      'Gherkin Syntax (Given / When / Then)',
      'ExtentReports & Allure Reporting',
      'Parallel Execution with TestNG XML',
    ],
  },
  {
    id: '07',
    title: 'Git & CI/CD Integration',
    subtitle: 'Version Control, GitHub, Branching, Pull Requests & CI/CD Pipeline',
    chapters: [
      'Git Basics — Init, Clone, Add, Commit',
      'Branching Strategies & Merging',
      'Pull Requests & Code Reviews',
      'GitHub Repository Management',
      'Introduction to Jenkins & CI/CD',
      'Integrating Selenium Tests with Jenkins Pipeline',
      'Final Automation Framework Design',
    ],
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Do I need coding experience?',
    a: 'No prior experience is required. We teach Java from scratch and build up through Selenium and framework development step by step.',
  },
  {
    q: 'Is Selenium enough for getting a job?',
    a: 'Yes! Selenium with Java, TestNG, POM, and BDD is the standard combination for SDET and QA Automation roles. We cover exactly this stack.',
  },
  {
    q: 'Will I learn framework development?',
    a: 'Absolutely. Framework design using Page Object Model (POM), TestNG, Cucumber BDD, and reporting tools is a dedicated module in the program.',
  },
  {
    q: 'Will I get a certificate?',
    a: 'Yes. Upon successfully completing the course and the automation project, you will receive an industry-recognized certificate from RK IT HUB.',
  },
  {
    q: 'Are real-time projects included?',
    a: 'Yes. You will build a complete E-Commerce Automation Testing Framework as your capstone project using Selenium + TestNG + POM.',
  },
  {
    q: 'Will placement support be provided?',
    a: 'Yes — we provide 100% placement assistance including mock technical interviews, resume optimization, and direct recruiter referrals.',
  },
];

// ─── Animation presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

// ─── CTA Laptop illustration ──────────────────────────────────────────────────
const CtaLaptop = () => (
  <div className="relative w-[220px] h-full flex items-center justify-center pointer-events-none select-none shrink-0">
    <motion.div
      animate={{ opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute w-[180px] h-[180px] bg-[#2563EB] rounded-full"
      style={{ filter: 'blur(70px)' }}
    />
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative flex flex-col items-center"
    >
      <div
        className="relative flex flex-col items-center"
        style={{ transform: 'perspective(1000px) rotateY(-20deg)', transformStyle: 'preserve-3d' }}
      >
        {/* Screen */}
        <div className="w-[180px] h-[115px] bg-[#020617] border border-slate-700 rounded-t-[8px] relative flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute inset-2 opacity-5 flex flex-col gap-1 font-mono text-[4px] text-green-400">
            <div>@Test</div>
            <div className="pl-2">public void testLogin() {'{'}</div>
            <div className="pl-4">driver.findElement(By.id("user"))</div>
            <div className="pl-4">.sendKeys("admin");</div>
            <div className="pl-2">{'}'}</div>
          </div>
          <div className="relative z-10 p-2.5 rounded-full bg-green-950/40 border border-green-500/20 shadow-[0_0_12px_rgba(34,197,94,0.3)]">
            <Bot size={30} className="text-green-400" strokeWidth={1.75} />
          </div>
        </div>
        {/* Keyboard base */}
        <div
          className="w-[200px] h-[5px] bg-slate-800 rounded-b-[3px] relative"
          style={{ transform: 'rotateX(20deg)', transformOrigin: 'top center', boxShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-slate-900 rounded-b" />
        </div>
        {/* Floating cards */}
        {[
          { delay: 0,   duration: 3,   left: -30, top: 10,    z: 20 },
          { delay: 0.3, duration: 3.5, left: -20, top: null,  z: 10, bottom: 15 },
          { delay: 0.6, duration: 3.2, right:-30, top: 20,    z: 15 },
          { delay: 0.9, duration: 2.8, right:-20, top: null,  z: 25, bottom: 10 },
        ].map((c, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: c.duration, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
            className="absolute w-[60px] h-[38px] rounded-[6px] border border-blue-500/20 bg-blue-500/10 backdrop-blur-[4px] flex flex-col justify-center px-1.5 gap-0.5 shadow-md"
            style={{
              left:   c.left  !== undefined ? c.left  : undefined,
              right:  (c as any).right !== undefined ? (c as any).right : undefined,
              top:    c.top   !== null ? c.top : undefined,
              bottom: (c as any).bottom !== undefined ? (c as any).bottom : undefined,
              transform: `translateZ(${c.z}px)`,
            }}
          >
            <div className="h-0.5 bg-blue-400/40 rounded w-2/3" />
            <div className="h-1   bg-blue-400/60 rounded w-1/2" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
export const SeleniumPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeFaq,       setActiveFaq]       = useState<number | null>(null);
  const [isCertOpen,      setIsCertOpen]      = useState<boolean>(false);

  return (
    <div className="w-full bg-white font-sans text-slate-600 selection:bg-blue-600 selection:text-white">
      <SEO 
        title="Selenium SDET Automation Testing Course"
        description="Become an Industry Ready Automation Test Engineer. Master Manual Testing, API Testing, Java, Selenium, TestNG, and CI/CD with hands-on projects."
        keywords="selenium testing course, automation test engineer, software testing internship, java selenium, testng, sdet training"
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 1 ▸ HERO                                                             */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="w-full relative overflow-hidden font-sans"
        style={{
          background: 'linear-gradient(180deg, #020617 0%, #071128 100%)',
          minHeight:  '760px',
        }}
      >
        {/* bg glows */}
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(37,99,235,.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(59,130,246,.08), transparent 40%)' }}
        />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] blur-[140px] rounded-full pointer-events-none z-0"
          style={{ background: 'rgba(37,99,235,0.15)' }}
        />

        <div className="max-w-[1280px] mx-auto px-[24px] h-full relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-[5fr_7fr] gap-[64px] items-start min-h-[720px] pt-[100px] pb-[80px]">

            {/* ── Left ── */}
            <motion.div initial="hidden" animate="visible" className="relative z-20">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="h-[36px] px-[16px] rounded-[999px] flex items-center justify-center w-fit mb-[20px] text-[12px] font-[600] tracking-[0.5px] uppercase text-[#93C5FD]"
                style={{ background: 'rgba(59,130,246,0.15)' }}
              >
                Industry Ready SDET Program
              </motion.div>

              {/* Heading */}
              <h1 className="w-full max-w-[520px] text-[48px] md:text-[72px] font-[800] leading-[1.05] md:leading-[0.95] text-white font-heading tracking-[-1.5px] md:tracking-[-3px] mb-[24px] overflow-hidden">
                <motion.span
                  className="block mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  Selenium SDET
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  Automation Testing
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[440px] text-[18px] leading-[1.7] font-[400] text-[#CBD5E1] font-sans mb-[32px]"
              >
                Become an industry-ready Automation Test Engineer. Master Manual Testing, Java, Selenium, TestNG, BDD frameworks, and Git/CI-CD.
              </motion.p>

              {/* Feature List */}
              <motion.div
                variants={{ visible: { transition: { delayChildren: 0.4, staggerChildren: 0.08 } } }}
                className="flex flex-col gap-0 mb-[36px]"
              >
                {[
                  'Manual Testing',
                  'API Testing with Postman',
                  'Java Programming',
                  'Selenium WebDriver',
                  'TestNG & BDD Frameworks',
                  'Framework Design (POM)',
                  'Git & CI/CD Integration',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden:   { opacity: 0, x: -15 },
                      visible:  { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="flex items-center gap-[12px] h-[34px]"
                  >
                    <CheckCircle2 size={16} color="#2563EB" strokeWidth={2.5} />
                    <span className="text-[15px] font-[500] text-[#E2E8F0] font-sans">{item}</span>
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

            {/* ── Right Visual ── */}
            <div className="relative flex items-center justify-center w-full overflow-visible pt-[20px]">
              <SeleniumRoadmapVisual />
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
              { Icon: ClipboardCheck, title: 'Manual Testing',        desc: 'SDLC, STLC, Test Cases'   },
              { Icon: Webhook,        title: 'API Testing',           desc: 'Postman, REST APIs'         },
              { Icon: Coffee,         title: 'Core Java',             desc: 'OOPs, Collections'          },
              { Icon: Bot,            title: 'Selenium Automation',   desc: 'WebDriver, XPath'           },
              { Icon: Layers3,        title: 'Framework Design',      desc: 'POM, TestNG, BDD'           },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden:   { opacity: 0, y: 20 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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
                  <Icon size={48} strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-sans">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* 3 ▸ CHAPTER-WISE SYLLABUS                                            */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#F8FAFC] py-[100px]"
      >
        <div className="max-w-[1280px] w-full mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-[42px] font-[700] text-slate-900 font-heading">Chapter-wise Syllabus</h2>
            <div className="w-[40px] h-[4px] bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { delayChildren: 0.1, staggerChildren: 0.08 } } }}
            className="max-w-5xl mx-auto space-y-[16px]"
          >
            {syllabus.map((item, i) => {
              const isOpen = activeAccordion === i;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden:   { opacity: 0, y: 20 },
                    visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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
      {/* 4 ▸ REAL-TIME PROJECT                                                */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white pt-[80px] pb-0 font-sans"
      >
        <div className="max-w-[1280px] mx-auto px-[24px]">

          <motion.div variants={fadeUp} className="text-center mb-[48px]">
            <h2 className="text-[42px] font-[700] text-[#0F172A] font-heading">Real-time Project</h2>
            <div className="w-[40px] h-[3px] bg-[#2563EB] mx-auto mt-[12px] rounded-[999px]" />
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[48px] items-center min-h-[320px] h-auto mb-[80px]">

            {/* Left — Browser mockup */}
              <motion.div
              variants={{
                hidden:   { opacity: 0, x: -30 },
                visible:  { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[520px] h-[220px] md:h-[280px] rounded-[18px] border border-[#E5E7EB] bg-[#020617] overflow-hidden relative mx-auto shadow-[0_15px_40px_rgba(15,23,42,0.08)] cursor-pointer"
            >
              {/* Browser chrome */}
              <div className="h-[36px] bg-[#0F172A] flex items-center px-4 gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 mx-3 bg-slate-800 rounded h-[20px] flex items-center px-3">
                  <span className="text-[10px] text-slate-400 font-mono">localhost:4444/wd/hub/sessions</span>
                </div>
              </div>
              {/* Content area */}
              <div className="flex-1 h-[244px] p-4 font-mono text-[10px] text-green-400/80 overflow-hidden">
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-blue-400">@Test(groups = "smoke")</div>
                  <div>public void testAddToCart() {'{'}</div>
                  <div className="pl-4 text-slate-400">WebDriver driver = new ChromeDriver();</div>
                  <div className="pl-4">driver.get("https://shop.example.com");</div>
                  <div className="pl-4 text-yellow-400">LoginPage login = new LoginPage(driver);</div>
                  <div className="pl-4">login.enterCredentials("user", "pass");</div>
                  <div className="pl-4 text-green-400">Assert.assertTrue(cartPage.isItemAdded());</div>
                  <div className="mt-2 text-slate-500">// ✓ Test passed in 1.24s</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — project features */}
            <motion.div
              variants={{
                hidden:   { opacity: 0, x: 30 },
                visible:  { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="w-full max-w-[520px] flex flex-col gap-[16px] mx-auto"
            >
              <div className="flex flex-col gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-[600] uppercase tracking-wider w-fit">
                  Capstone Project
                </span>
                <h3 className="text-[30px] font-[700] text-[#111827] font-heading leading-[1.2]">
                  E-Commerce Automation Testing Framework
                </h3>
              </div>
              <div className="flex flex-col gap-[16px]">
                {[
                  'Automated Login Testing with valid & invalid credentials',
                  'Cart & Product Validation using Page Object Model',
                  'End-to-End Checkout Flow Testing',
                  'Cross-Browser Testing (Chrome, Firefox, Edge)',
                  'Full framework using Selenium + TestNG + POM + ExtentReports',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-[12px]">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#2563EB] shrink-0 mt-[4px]" strokeWidth={2.5} />
                    <span className="text-slate-600 font-[500] text-[16px] leading-[1.6] font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Internship | Certificate | Placement ── */}
          <motion.div
            variants={{ visible: { transition: { delayChildren: 0.1, staggerChildren: 0.08 } } }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E7EB] rounded-xl lg:border-t lg:border-x-0 lg:border-b-0 lg:rounded-none bg-white min-h-[180px] mb-[80px] overflow-hidden"
          >
            {[
              { title: 'Internship Opportunity',   icon: BriefcaseBusiness, desc: 'Work on live projects and gain real industry experience.'            },
              { title: 'Certificate of Completion', icon: BadgeCheck,        desc: 'Earn industry-recognized certificate to showcase your skills.'       },
              { title: 'Placement Support',         icon: UserRoundCheck,    desc: 'Resume building, interview prep & job assistance.'                   },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden:   { opacity: 0, y: 20 },
                    visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col sm:flex-row items-start gap-4 p-[30px] md:p-[40px] h-full bg-white relative transition-all group cursor-pointer ${
                    i < 2
                      ? 'border-b md:border-b-0 md:border-r border-[#E5E7EB]'
                      : ''
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
                    <h4 className="text-[22px] md:text-[26px] font-[600] text-[#111827] leading-[1.2] font-heading">{card.title}</h4>
                    <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#64748B] w-full max-w-[280px] font-sans">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── Certificate Section ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="w-full grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[64px] items-center mb-[100px] pt-10"
          >
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 tracking-wider w-fit">
                Official Credential
              </div>
              <h3 className="text-[38px] font-[700] text-[#0F172A] font-heading leading-[1.2] tracking-tight">
                Your Pathway to <span className="text-[#2563EB]">Verified Success</span>
              </h3>
              <p className="text-[16px] text-slate-500 leading-relaxed font-sans">
                Upon successfully completing the Selenium SDET Automation Testing program and your automation framework project, you will be awarded an industry-recognized Certificate of Completion from RK IT HUB.
              </p>
              <div className="flex flex-col gap-4 mt-2">
                {[
                  { title: 'Verifiable Credential ID',    desc: 'Comes with a unique tracking ID and QR code verifiable on our portal by HR and recruiting teams.' },
                  { title: 'LinkedIn & Resume Ready',     desc: 'Add it to your LinkedIn profile under Licenses & Certifications or link it directly on your resume.' },
                  { title: 'Demonstrate Project Experience', desc: 'Highlights your hands-on automation work on the E-Commerce testing framework capstone project.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                      <BadgeCheck size={22} />
                    </div>
                    <div>
                      <h5 className="text-[16px] font-bold text-slate-900 font-heading">{item.title}</h5>
                      <p className="text-[14px] text-slate-500 leading-relaxed mt-0.5 font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive certificate card */}
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute inset-0 bg-[#2563EB]/5 rounded-[24px] blur-3xl -z-10 w-[80%] h-[80%] mx-auto" />
              <motion.div
                whileHover={{ scale: 1.03, rotateY: -2, rotateX: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
                onClick={() => setIsCertOpen(true)}
                className="relative cursor-pointer group rounded-[20px] border border-slate-200/80 bg-white p-4 shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-300 overflow-hidden w-full max-w-[580px]"
              >
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20 rounded-[20px]">
                  <div className="flex flex-col items-center gap-2 text-white bg-slate-900/80 px-5 py-3 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl">
                    <ArrowUpRight size={20} className="text-blue-400 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider uppercase font-sans">Click to Enlarge</span>
                  </div>
                </div>
                <div className="absolute top-8 right-[-32px] rotate-45 bg-[#2563EB] text-white text-[10px] font-extrabold tracking-widest py-1.5 px-10 shadow-md uppercase z-10 border-b border-white/10">
                  Demo
                </div>
                <div className="relative overflow-hidden rounded-[12px] bg-slate-50 border border-slate-100 aspect-[1.414/1] flex items-center justify-center">
                  <img
                    src="/democertifiacte.jpeg"
                    alt="RK IT HUB Selenium SDET Certificate"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── FAQ + CTA ── */}
          <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] gap-[40px] items-stretch pb-[100px]">

            {/* FAQ */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
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
              className="rounded-[24px] p-[32px] md:p-[48px] relative overflow-hidden flex flex-col justify-between h-full bg-gradient-to-br from-[#020617] to-[#0F172A] border border-slate-800/40"
            >
              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(37,99,235,.15), transparent 65%)' }}
              />

              {/* Top */}
              <div className="relative z-10">
                <div
                  className="h-[32px] px-[14px] rounded-[999px] flex items-center justify-center w-fit mb-[20px] text-[11px] font-[600] tracking-[0.5px] uppercase text-[#93C5FD]"
                  style={{ background: 'rgba(37,99,235,0.15)' }}
                >
                  Launch Your SDET Career
                </div>
                <h3 className="text-[34px] font-[800] text-white leading-[1.1] font-heading tracking-[-1px] mb-[16px]">
                  Start Your<br />
                  Automation Testing<br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                  >
                    Journey Today!
                  </span>
                </h3>
                <p className="text-[15px] text-slate-400 font-sans leading-[1.65] max-w-[320px]">
                  Join hundreds of students who've launched their SDET careers with RK IT Hub's Selenium Automation program.
                </p>
              </div>

              {/* Middle — laptop */}
              <div className="flex justify-center py-4 relative z-10">
                <CtaLaptop />
              </div>

              {/* Bottom — buttons */}
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

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* Certificate Lightbox Modal                                           */}
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
                  alt="RK IT HUB Certificate - Large"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide border border-white/10 shadow-lg font-sans">
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

export default SeleniumPage;
