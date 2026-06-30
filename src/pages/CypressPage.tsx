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
  Target,
  Webhook,
  Layers3,
  GitBranch,
  X,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { SiCypress } from 'react-icons/si';
import CypressAutomationVisual from '../components/CypressAutomationVisual';

// ─── Syllabus Data ─────────────────────────────────────────────────────────────
const syllabus = [
  {
    id: '01',
    title: 'Getting Started with Cypress',
    subtitle: 'Introduction, Architecture, Setup & Test Runner',
    chapters: [
      'Overview of Cypress & Modern Test Automation',
      'Features & Advantages over Legacy Tools',
      'Environment Setup (Node.js, npm, VS Code)',
      'Cypress Architecture — How It Works',
      'Test Runner Interface & Dashboard',
      'Writing & Running Your First Test Script',
      'Folder Structure & Project Organization',
    ],
  },
  {
    id: '02',
    title: 'Core Concepts',
    subtitle: 'Variables, Aliases & Browser Support',
    chapters: [
      'Basic Test Structure — describe(), it(), beforeEach()',
      'Variables & Data Management in Tests',
      'Aliases — cy.as() & Sharing Context',
      'Chaining Commands & Subject Querying',
      'Supported Browsers (Chrome, Firefox, Edge)',
      'Execution Methods — CLI & GUI Mode',
    ],
  },
  {
    id: '03',
    title: 'Element Handling',
    subtitle: 'Locators, Assertions & Verification',
    chapters: [
      'CSS Selectors & Attribute-Based Locators',
      'cy.get(), cy.contains(), cy.find()',
      'Built-in Assertions — .should(), .expect()',
      'Text Content Validation',
      'User Interaction — click(), type(), clear()',
      'Asynchronous Behaviour & Retry-ability',
    ],
  },
  {
    id: '04',
    title: 'Advanced Interactions',
    subtitle: 'Dropdowns, Frames, Alerts & Tables',
    chapters: [
      'Handling Dropdowns with cy.select()',
      'Checkboxes & Radio Buttons',
      'Multiple Tabs & Window Management',
      'Alert & Confirmation Dialog Handling',
      'iFrame Content Interaction',
      'Web Table Traversal & Dynamic Data',
      'Mouse Actions — hover, drag & scroll',
    ],
  },
  {
    id: '05',
    title: 'Network & API Testing',
    subtitle: 'XHR, Cookies & API Requests',
    chapters: [
      'Understanding XHR & Network Requests',
      'cy.intercept() — Stub & Spy Network Calls',
      'Cookie Management in Tests',
      'GET Request Validation',
      'POST Request Automation',
      'File Upload Testing',
      'Handling Prompt Popups & Dialogs',
    ],
  },
  {
    id: '06',
    title: 'Reporting & Debugging',
    subtitle: 'Dashboard, Videos, Screenshots & Logs',
    chapters: [
      'Cypress Cloud Dashboard Setup',
      'Screenshot Capture on Test Failure',
      'Video Recording of Test Runs',
      'Debugging with cy.pause() & cy.debug()',
      'Console Logs & Network Log Analysis',
      'Mochawesome HTML Report Integration',
    ],
  },
  {
    id: '07',
    title: 'Advanced Configuration',
    subtitle: 'Hooks, Variables, Fixtures & Plugins',
    chapters: [
      'Environment Variables (cypress.config.js)',
      'Hooks — before(), after(), beforeEach(), afterEach()',
      'Fixtures — External JSON Test Data',
      'Custom Commands with cy.Commands.add()',
      'cypress.config.json — Global Configuration',
      'Plugin Integration & Task Execution',
    ],
  },
  {
    id: '08',
    title: 'GitHub Integration & Real Project',
    subtitle: 'CI/CD Pipeline & Automation Framework Design',
    chapters: [
      'GitHub Repository Setup & Management',
      'Branching Strategy & Pull Requests',
      'CI/CD Pipeline with GitHub Actions',
      'Running Cypress in Headless Mode (Pipeline)',
      'End-to-End Automation Framework Design',
      'Capstone Project — E-Commerce Test Suite',
      'Code Management & Best Practices',
    ],
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Do I need coding experience?',
    a: 'Basic JavaScript knowledge is helpful but not mandatory. The course starts from Cypress fundamentals and builds up systematically through all concepts.',
  },
  {
    q: 'Is Cypress better than Selenium?',
    a: 'Cypress excels in modern frontend automation — faster execution, built-in waiting, and better debugging — while Selenium supports wider browser and language ecosystems. Both have their place in the industry.',
  },
  {
    q: 'Will I learn API Testing?',
    a: 'Yes. API testing using cy.intercept(), network request stubs, GET/POST validation, and network layer assertions are dedicated modules in the program.',
  },
  {
    q: 'Will I build automation frameworks?',
    a: 'Yes. You\'ll learn custom commands, fixtures, hooks, environment configuration, and scalable Page Object-style framework architecture.',
  },
  {
    q: 'Is CI/CD included?',
    a: 'Yes. GitHub Actions integration, headless execution in CI pipelines, and automated test reporting are fully covered in the final module.',
  },
  {
    q: 'Will placement support be provided?',
    a: 'Yes. We provide 100% placement assistance including resume building, mock technical interviews, and direct recruiter referrals for QA Automation roles.',
  },
];

// ─── Animation presets ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Inline CTA Laptop ────────────────────────────────────────────────────────
const CtaLaptop = () => (
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className="relative flex flex-col items-center pointer-events-none select-none"
  >
    {/* Glow */}
    <motion.div
      animate={{ opacity: [0.25, 0.4, 0.25] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute w-[160px] h-[160px] bg-[#2563EB] rounded-full"
      style={{ filter: 'blur(60px)', top: '10%', left: '50%', transform: 'translateX(-50%)' }}
    />
    {/* Screen */}
    <div
      className="relative flex flex-col items-center"
      style={{ transform: 'perspective(1000px) rotateY(-20deg)', transformStyle: 'preserve-3d' }}
    >
      <div className="w-[200px] h-[125px] bg-[#020617] border border-slate-700 rounded-t-[8px] relative flex items-center justify-center overflow-hidden shadow-2xl">
        <div className="absolute inset-2 opacity-5 flex flex-col gap-1 font-mono text-[4px] text-green-400">
          <div>describe('E-Commerce', () =&gt; {'{'}</div>
          <div className="pl-2">it('cart test', () =&gt; {'{'}</div>
          <div className="pl-4">cy.visit('/shop');</div>
          <div className="pl-4">cy.get('[data-cy=add]').click();</div>
          <div className="pl-2">{'}'});</div>
          <div>{'}'});</div>
        </div>
        <div className="relative z-10 p-3.5 rounded-full bg-blue-950/40 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <Code size={32} className="text-[#3B82F6]" strokeWidth={2} />
        </div>
        {/* Floating micro-cards */}
        {[
          { left: -35, top:  10, delay: 0,   duration: 3   },
          { left: -25, top: null, bottom: 15, delay: 0.3, duration: 3.5 },
          { right:-35, top:  20, delay: 0.6, duration: 3.2 },
          { right:-25, top: null, bottom: 10, delay: 0.9, duration: 2.8 },
        ].map((c, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: c.duration, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
            className="absolute w-[70px] h-[45px] rounded-[8px] border border-blue-500/20 bg-blue-500/10 backdrop-blur-[6px] flex flex-col justify-center px-2 gap-1 shadow-md"
            style={{
              left:   (c as any).left  !== undefined ? (c as any).left   : undefined,
              right:  (c as any).right !== undefined ? (c as any).right  : undefined,
              top:    (c as any).top   !== null ? (c as any).top   : undefined,
              bottom: (c as any).bottom !== undefined ? (c as any).bottom : undefined,
            }}
          >
            <div className="h-1 bg-blue-400/40 rounded w-2/3" />
            <div className="h-1.5 bg-blue-400/60 rounded w-1/2" />
          </motion.div>
        ))}
      </div>
      {/* Keyboard */}
      <div
        className="w-[220px] h-[6px] bg-slate-800 rounded-b-[3px]"
        style={{ transform: 'rotateX(20deg)', transformOrigin: 'top center', boxShadow: '0 3px 8px rgba(0,0,0,0.5)' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1.5px] bg-slate-900 rounded-b" />
      </div>
    </div>
  </motion.div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
export const CypressPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeFaq,       setActiveFaq]       = useState<number | null>(null);
  const [isCertOpen,      setIsCertOpen]      = useState<boolean>(false);

  return (
    <div className="w-full bg-white font-sans text-slate-600 selection:bg-blue-600 selection:text-white">
      <SEO 
        title="Cypress Automation Testing Course | RK IT HUB"
        description="Become a Job-Ready Automation Tester. Master Cypress, JavaScript, and CI/CD. Real-time projects, 100% placement support in Hyderabad."
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Cypress Automation Testing Course",
          "description": "Modern E2E testing with Cypress, JavaScript, and continuous integration.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "RK IT HUB",
            "sameAs": "https://rkithub.com"
          }
        }}
        keywords="cypress testing course, automation testing, javascript testing, cypress automation, sdet internship"
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
        {/* overlay gradients */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(37,99,235,.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(59,130,246,.08), transparent 40%)' }}
        />
        {/* ambient glow right */}
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
                Industry Ready Automation Testing Program
              </motion.div>

              {/* Heading */}
              <h1 className="w-full max-w-[520px] text-4xl lg:text-5xl font-[800] leading-[1.05] md:leading-[0.95] text-white font-heading tracking-[-1.5px] md:tracking-[-3px] mb-[24px] overflow-hidden">
                <motion.span
                  className="block mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  Cypress Automation
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  Testing Course
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[540px] text-sm sm:text-base leading-[1.7] font-[400] text-[#CBD5E1] font-sans mb-[32px]"
              >
                Become a Job-Ready Cypress Automation Engineer. Build enterprise-grade testing frameworks and master the tools that top tech companies use daily.
              </motion.p>

              {/* Feature list */}
              <motion.div
                variants={{
                  visible: { transition: { delayChildren: 0.4, staggerChildren: 0.08 } },
                }}
                className="flex flex-col gap-0 mb-[36px]"
              >
                {[
                  'Real-Time Project',
                  'API Testing',
                  'Cross Browser Testing',
                  'Certificate of Completion',
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

            {/* ── RIGHT VISUAL ── */}
            <div className="relative flex items-center justify-center w-full overflow-visible pt-[40px]">
              <CypressAutomationVisual />
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
            <h2 className="text-3xl lg:text-4xl font-[700] text-slate-900 font-heading">Master the Skills That Get You Hired</h2>
            <div className="w-[40px] h-[4px] bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#E5E7EB]"
          >
            {[
              { Icon: SiCypress,  title: 'Core Concepts',       desc: 'Master the test runner and command architecture to write robust automation.',     iconColor: '#00BF88', isReactIcon: true  },
              { Icon: Target,     title: 'Element Handling',   desc: 'Build resilient locators and assertions to guarantee UI stability across releases.',  iconColor: '',        isReactIcon: false },
              { Icon: Webhook,    title: 'API Testing',        desc: 'Mock and validate backend services to ensure flawless data integration.',    iconColor: '',        isReactIcon: false },
              { Icon: Layers3,    title: 'Frameworks',   desc: 'Design scalable, data-driven frameworks (POM, Fixtures) for enterprise scale.',       iconColor: '',        isReactIcon: false },
              { Icon: GitBranch,  title: 'CI/CD Integration',  desc: 'Integrate automated tests into deployment pipelines ensuring global quality.',   iconColor: '',        isReactIcon: false },
            ].map(({ Icon, title, desc, iconColor, isReactIcon }, i) => (
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
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="mb-6"
                  style={{ color: isReactIcon ? iconColor : '#2563EB' }}
                >
                  {isReactIcon
                    ? <Icon size={48} color={iconColor} />
                    : <Icon size={48} strokeWidth={1.5} />
                  }
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
            <h2 className="text-3xl lg:text-4xl font-[700] text-slate-900 font-heading">Chapter-wise Syllabus</h2>
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
      {/* 4 ▸ REAL-TIME PROJECT + INTERNSHIP / CERT / PLACEMENT + CERT + FAQ  */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white pt-[80px] pb-0 font-sans"
      >
        <div className="max-w-[1280px] mx-auto px-[24px]">

          {/* ── Section Title ── */}
          <motion.div variants={fadeUp} className="text-center mb-[48px]">
            <h2 className="text-3xl lg:text-4xl font-[700] text-[#0F172A] font-heading">Real-time Project</h2>
            <div className="w-[40px] h-[3px] bg-[#2563EB] mx-auto mt-[12px] rounded-[999px]" />
          </motion.div>

          {/* ── Project Grid ── */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[48px] items-center min-h-[320px] h-auto mb-[80px]">

            {/* Left SaaS Mockup Dashboard (Video Player) */}
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
                  E-Commerce Automation Test Suite
                </h3>
              </div>
              <div className="flex flex-col gap-[16px]">
                {[
                  'User Authentication Testing (Login, Logout, Invalid Credentials)',
                  'Product Search & Filter Validation',
                  'Cart & Checkout Flow Automation',
                  'API Validation with cy.intercept() & Request Stubs',
                  'Cross Browser Execution (Chrome, Firefox, Edge)',
                  'CI/CD Integration with GitHub Actions Pipeline',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-[12px]">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#2563EB] shrink-0 mt-[4px]" strokeWidth={2.5} />
                    <span className="text-slate-600 font-[500] text-[16px] leading-[1.6] font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Career Path ── */}
          <div className="mb-[24px] mt-[40px]">
            <h3 className="text-[28px] font-[700] text-[#0F172A] font-heading">Your Career Path:</h3>
            <p className="text-[16px] text-slate-600 mt-2 font-sans">Prepare for roles like: <span className="font-semibold text-slate-900">SDET, QA Automation Engineer, or Frontend Test Specialist.</span></p>
          </div>
          <motion.div
            variants={{ visible: { transition: { delayChildren: 0.1, staggerChildren: 0.08 } } }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E7EB] rounded-xl lg:border-t lg:border-x-0 lg:border-b-0 lg:rounded-none bg-white min-h-[180px] mb-[80px] overflow-hidden"
          >
            {[
              { title: 'Internship Opportunity',    icon: BriefcaseBusiness, desc: 'Work on live projects and gain real industry experience.'          },
              { title: 'Certificate of Completion', icon: BadgeCheck,        desc: 'Earn industry-recognized certificate to showcase your skills.'     },
              { title: '100% Interview Ready', icon: UserRoundCheck, desc: 'Includes 5+ mock technical interviews and resume optimization with professional mentors.' },
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
                  className={`flex flex-col sm:flex-row items-start gap-4 p-[30px] md:p-[40px] h-full bg-white relative transition-all group cursor-pointer ${
                    i < 2 ? 'border-b md:border-b-0 md:border-r border-[#E5E7EB]' : ''
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
            {/* Left content */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 tracking-wider w-fit">
                Official Credential
              </div>
              <h3 className="text-[38px] font-[700] text-[#0F172A] font-heading leading-[1.2] tracking-tight">
                Your Pathway to <span className="text-[#2563EB]">Verified Success</span>
              </h3>
              <p className="text-[16px] text-slate-500 leading-relaxed font-sans">
                Upon successfully completing the Cypress Automation Testing program and your capstone project, you will be awarded an industry-recognized Certificate of Completion from RK IT HUB.
              </p>
              <div className="flex flex-col gap-4 mt-2">
                {[
                  { title: 'Verifiable Credential ID',      desc: 'Comes with a unique tracking ID and QR code verifiable on our portal by HR and recruiting teams.'      },
                  { title: 'LinkedIn & Resume Ready',       desc: 'Add it to your LinkedIn profile under Licenses & Certifications or link it directly on your resume.'    },
                  { title: 'Demonstrate Project Experience', desc: 'Highlights your hands-on automation work on the E-Commerce Test Suite capstone project.'                },
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

            {/* Right — interactive certificate */}
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute inset-0 bg-[#2563EB]/5 rounded-[24px] blur-3xl -z-10 w-[80%] h-[80%] mx-auto" />
              <motion.div
                whileHover={{ scale: 1.03, rotateY: -2, rotateX: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
                onClick={() => setIsCertOpen(true)}
                className="relative cursor-pointer group rounded-[20px] border border-slate-200/80 bg-white p-4 shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-300 overflow-hidden w-full max-w-[580px]"
              >
                {/* hover overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20 rounded-[20px]">
                  <div className="flex flex-col items-center gap-2 text-white bg-slate-900/80 px-5 py-3 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl">
                    <ArrowUpRight size={20} className="text-blue-400 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider uppercase font-sans">Click to Enlarge</span>
                  </div>
                </div>
                {/* Demo ribbon */}
                <div className="absolute top-8 right-[-32px] rotate-45 bg-[#2563EB] text-white text-[10px] font-extrabold tracking-widest py-1.5 px-10 shadow-md uppercase z-10 border-b border-white/10">
                  Demo
                </div>
                <div className="relative overflow-hidden rounded-[12px] bg-slate-50 border border-slate-100 aspect-[1.414/1] flex items-center justify-center">
                  <img
                    src="/democertifiacte.webp"
                    alt="RK IT HUB Cypress Automation Certificate"
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
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-[700] text-[#0F172A] mb-[12px] font-heading">
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
              {/* ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(37,99,235,.15), transparent 65%)' }}
              />

              <div className="relative z-10 flex flex-col justify-between h-full p-[48px]">
                {/* Top text */}
                <div>
                  <div
                    className="h-[32px] px-[14px] rounded-[999px] flex items-center justify-center w-fit mb-[20px] text-[11px] font-[600] tracking-[0.5px] uppercase text-[#93C5FD]"
                    style={{ background: 'rgba(37,99,235,0.15)' }}
                  >
                    Launch Your Automation Career
                  </div>
                  <h3 className="text-[38px] font-[800] text-white leading-[1.05] font-heading tracking-[-1px] mb-[16px]">
                    <span className="block">Start Your Cypress</span>
                    <span className="block">Automation Journey</span>
                    <span
                      className="block text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                    >
                      Today!
                    </span>
                  </h3>
                  <p className="text-[15px] text-slate-400 font-sans leading-[1.65] max-w-[340px]">
                    Join aspiring automation engineers mastering Cypress, API Testing, Framework Design and CI/CD with RKITHUB.
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
                  src="/democertifiacte.webp"
                  alt="RK IT HUB Certificate — Large"
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

export default CypressPage;
