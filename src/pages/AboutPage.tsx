import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';
import {
  ArrowRight, PlayCircle, ShieldCheck, Users, GraduationCap, Briefcase,
  Flag, Rocket, BarChart, Lightbulb, Code2, UserCheck, Star, Zap,
  Target, Eye, BookOpen, UserRound, CheckCircle, ChevronRight,
  Phone, Mail, Monitor, Building, UserPlus, TrendingUp
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CareerTransformationEngine } from '../components/about/CareerTransformationEngine';
import { ImpactWall } from '../components/about/ImpactWall';
import { WhyChooseUsBento } from '../components/about/WhyChooseUsBento';
import { OurFoundation } from '../components/about/OurFoundation';

/* ─── HERO SECTION ───────────────────────────────────────────────────────────── */
const HeroSection = () => {
  const featureRows = [
    { icon: Code2, label: 'Practical Training' },
    { icon: Monitor, label: 'Real-time Projects' },
    { icon: Target, label: 'Mock Interviews' },
    { icon: Briefcase, label: '100% Placement Support' },
  ];


  return (
    <section className="relative overflow-hidden w-full font-sans" style={{ height: '100vh', minHeight: '850px', background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)' }}>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center relative z-10">

          {/* LEFT SIDE — 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center mt-0 lg:mt-[80px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-[18px] py-[12px] rounded-full bg-[#EEF4FF] text-[#0D5EFF] border border-[#dbeafe] text-[14px] font-[600] tracking-[0.5px] uppercase mb-8 w-fit"
            >
              ESTABLISHED IN 2015
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#0F172A] font-[700] leading-[1.05] tracking-[-2px] mb-6 max-w-[650px]"
              style={{ fontSize: 'clamp(48px, 5vw, 72px)', fontFamily: '"Satoshi", sans-serif' }}
            >
              Empowering Careers Through<br />
              Practical Learning &<br />
              Industry Excellence
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#475569] text-[20px] font-[400] leading-[1.8] max-w-[600px] mb-10"
            >
              RK IT Training HUB bridges the gap between academic learning and industry requirements through practical training, internships, real-world projects and career-focused mentorship.
            </motion.p>

            {/* CTA Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-[16px]"
            >
              <a
                href="/#courses"
                className="inline-flex items-center justify-center gap-2 h-[58px] px-[32px] bg-[#0D5EFF] hover:bg-[#0050D5] text-white font-[600] rounded-xl text-[16px] transition-all hover:-translate-y-[3px] shadow-lg shadow-blue-500/20"
              >
                Explore Programs <ArrowRight size={20} />
              </a>
              <a
                href="/#testimonials"
                className="inline-flex items-center justify-center gap-2 h-[58px] px-[32px] border-2 border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] font-[600] rounded-xl text-[16px] transition-all"
              >
                <PlayCircle size={20} className="text-[#0D5EFF]" /> View Success Stories
              </a>
            </motion.div>

          </div>

          {/* RIGHT SIDE — 5 cols */}
          <div className="lg:col-span-5 relative h-full flex justify-center items-center mt-12 lg:mt-0">
            
            {/* LAYER 1: Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
              <div className="absolute top-[10%] right-[10%] w-[380px] h-[380px] bg-[#0D5EFF] opacity-[0.08] blur-[120px] rounded-full" />
              <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-[#00C2FF] opacity-[0.08] blur-[120px] rounded-full" />
              <div className="absolute top-[40%] left-[30%] w-[250px] h-[250px] bg-[#7C3AED] opacity-[0.05] blur-[120px] rounded-full" />
            </div>

            {/* LAYER 2: Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
                 style={{ backgroundImage: 'linear-gradient(#0D5EFF 1px, transparent 1px), linear-gradient(90deg, #0D5EFF 1px, transparent 1px)', backgroundSize: '40px 40px', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 70%)' }} />

            {/* LAYER 3: Main Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 }, 
                scale: { duration: 0.8, delay: 0.4 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="relative z-10 w-full max-w-[420px] h-auto min-h-[540px] rounded-[32px] p-6 md:p-10 flex flex-col items-center shadow-[0_30px_60px_rgba(15,23,42,0.12)] bg-white border border-[#E2E8F0] mx-auto"
            >
              {/* Logo & Text */}
              <div className="flex flex-col items-center justify-center h-[120px] w-full mb-4">
                <img src="/logo.png" alt="RK IT Hub" className="w-[120px] object-contain mb-2" />
                <div className="text-center" style={{ fontFamily: '"Cinzel", serif' }}>
                  <div className="font-semibold text-[18px] text-[#0B4F9C] tracking-[0.1em] uppercase">RK IT</div>
                  <div className="font-normal text-[10px] text-[#0B4F9C] tracking-[0.12em] uppercase">Training Hub</div>
                </div>
              </div>

              {/* Rows Background Layer */}
              <div className="w-full flex flex-col flex-1 bg-[#F8FAFC] rounded-2xl p-4 border border-[#F1F5F9] shadow-sm">
                {featureRows.map(({ icon: Icon, label }, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="w-full h-[1px] bg-[#E2E8F0] my-1" />}
                    <div className="flex items-center gap-4 h-[60px] px-2">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-[#E2E8F0] shadow-sm">
                        <Icon size={20} className="text-[#0D5EFF]" strokeWidth={2} />
                      </div>
                      <span className="font-[600] text-[15px] text-[#0F172A]">{label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};




/* ─── TRAINING ECOSYSTEM ─────────────────────────────────────────────────────── */
const EcosystemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const orbitItems = [
    { label: 'Java Full Stack' },
    { label: 'Python Full Stack' },
    { label: 'Testing' },
    { label: 'Automation' },
    { label: 'AI / ML' },
    { label: 'Cloud Technologies' },
    { label: 'Data Science' },
  ];

  const flow = ['Student', 'Training', 'Projects', 'Internship', 'Placement'];

  return (
    <section className="py-10 md:py-20 bg-[#F8FAFC] font-sans" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.h2
          className="text-[32px] font-[700] text-[#0F172A] mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Our Training Ecosystem
        </motion.h2>

        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] overflow-hidden">
          <div className="relative flex items-center justify-center transform scale-[0.6] sm:scale-75 md:scale-100 origin-center w-[460px] h-[460px]">
            {/* Orbit circle */}
            <div
              className="absolute rounded-full border-2 border-dashed border-blue-200"
              style={{ width: 460, height: 460 }}
            />

          {/* Orbiting labels */}
          {orbitItems.map(({ label }, i) => {
            const angle = i * (360 / orbitItems.length);
            const r = 230;
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 pointer-events-none"
                style={{ width: r * 2, height: r * 2, marginLeft: -r, marginTop: -r }}
                animate={{ rotate: [angle, angle + 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute left-1/2 top-0" style={{ marginLeft: -48, marginTop: -48 }}>
                  <motion.div
                    animate={{ rotate: [-angle, -(angle + 360)] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  >
                    <motion.div
                      className="pointer-events-auto"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    >
                      <div className="w-[96px] h-[96px] rounded-full bg-white border border-[#E2E8F0] shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-center p-2 text-[12px] font-[700] text-[#0F172A] leading-tight hover:border-[#0D5EFF] transition-colors cursor-default">
                        {label}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Center flow card */}
          <motion.div
            className="relative z-10 bg-white rounded-[28px] border border-[#E2E8F0] shadow-xl px-10 py-8 flex flex-col items-center gap-1"
            style={{ minWidth: 180 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {flow.map((step, i) => (
              <React.Fragment key={i}>
                <div
                  className={`px-6 py-2 md:px-8 md:py-2.5 rounded-xl text-[14px] font-[700] w-full text-center ${
                    step === 'Placement'
                      ? 'bg-[#0D5EFF] text-white'
                      : 'bg-[#EEF4FF] text-[#0D5EFF]'
                  }`}
                >
                  {step}
                </div>
                {i < flow.length - 1 && (
                  <div className="text-[#0D5EFF] font-bold text-lg">↓</div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── PARTNERSHIP SECTION ────────────────────────────────────────────────────── */
const PartnershipSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const rkFeatures = ['Training Excellence', 'Skill Development', 'Career Guidance', 'Internships'];
  const vhubFeatures = ['IT Consulting', 'Recruitment Services', 'Corporate Training', 'Industry Opportunities'];

  return (
    <section className="py-10 md:py-20 bg-white font-sans" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.h2
          className="text-[32px] font-[700] text-[#0F172A] mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Powered by Industry Collaboration
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* RK IT Card */}
          <motion.div
            className="rounded-[28px] border border-[#E2E8F0] p-8 flex flex-col items-center gap-6"
            style={{
              background: 'linear-gradient(135deg, #EEF4FF, #FFFFFF)',
              boxShadow: '0 20px 40px rgba(13,94,255,0.08)',
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img src="/logo.png" alt="RK IT Hub" className="h-16 object-contain" />
            <div className="text-center" style={{ fontFamily: '"Cinzel", serif' }}>
              <div className="font-semibold text-[16px] text-[#0B4F9C]">RK IT</div>
              <div className="text-[10px] text-[#0B4F9C] tracking-wider">TRAINING HUB</div>
            </div>
            <div className="w-full space-y-3">
              {rkFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#22C55E] flex-shrink-0" />
                  <span className="text-[14px] font-[600] text-[#0F172A]">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center arrows */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronRight size={28} className="text-[#0D5EFF]" />
              </motion.div>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#0D5EFF] to-[#4CC9FF] rounded" />
              <motion.div
                animate={{ x: [5, -5, 5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronRight size={28} className="text-[#4CC9FF]" />
              </motion.div>
            </div>
            <p className="text-[13px] font-[600] text-[#64748B] text-center">Official Partnership</p>
          </motion.div>

          {/* V-HUB Card */}
          <motion.div
            className="rounded-[28px] border border-[#E2E8F0] p-8 flex flex-col items-center gap-6"
            style={{
              background: 'linear-gradient(135deg, #F0FDF4, #FFFFFF)',
              boxShadow: '0 20px 40px rgba(34,197,94,0.08)',
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img src="/assets/vhub-logo.png" alt="V-HUB" className="h-16 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                  const div = document.createElement('div');
                  div.innerHTML = '<div style="font-size:28px;font-weight:800;color:#22C55E;">V-HUB</div>';
                  parent.appendChild(div);
                }
              }}
            />
            <div className="text-center">
              <div className="font-[800] text-[16px] text-[#22C55E]">V-HUB</div>
              <div className="text-[10px] text-[#64748B] tracking-wider">IT CONSULTING SERVICES</div>
            </div>
            <div className="w-full space-y-3">
              {vhubFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#22C55E] flex-shrink-0" />
                  <span className="text-[14px] font-[600] text-[#0F172A]">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          className="mt-12 text-center text-[15px] font-[500] text-[#475569] max-w-[900px] mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          RK IT Training HUB proudly serves as the training and talent development partner of V-HUB IT Consulting Services Pvt. Ltd., creating a complete ecosystem for learning, internships, and career opportunities.
        </motion.p>
      </div>
    </section>
  );
};


/* ─── MAIN PAGE ──────────────────────────────────────────────────────────────── */
export const AboutPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <SEO
        title="About Us | RK IT Training Hub"
        description="Learn about RK IT Training HUB — a leading IT training and career development institute in Hyderabad with 10+ years of excellence in placement-focused training."
        keywords="about rk it hub, software training institute hyderabad, it training history, placement institute"
      />
      <HeroSection />
      <CareerTransformationEngine />
      <ImpactWall />
      <WhyChooseUsBento />
      <EcosystemSection />
      <PartnershipSection />
      <OurFoundation />
    </div>
  );
};
