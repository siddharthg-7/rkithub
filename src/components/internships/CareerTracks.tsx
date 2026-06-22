import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Layers, 
  BrainCircuit, 
  Box, 
  Coffee, 
  FileCode2, 
  Bot, 
  TestTube2, 
  CheckCircle2, 
  LineChart, 
  FileText, 
  Users 
} from 'lucide-react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

const MeshBackground = ({ gradient, isLarge }: { gradient: string, isLarge?: boolean }) => (
  <>
    <div 
      className="absolute inset-0 opacity-50 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
      style={{ backgroundImage: gradient }}
    ></div>
    {isLarge && (
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none rounded-xl"></div>
    )}
  </>
);

const CustomIcon = ({ Icon, isLarge }: { Icon: any, isLarge?: boolean }) => (
  <div className="flex justify-between items-start">
    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center text-white group-hover/bento:scale-110 transition-all duration-300 group-hover/bento:rotate-6">
      <Icon strokeWidth={1.5} size={24} />
    </div>
    {isLarge && (
      <span className="bg-[#22C55E]/20 border border-[#22C55E]/30 text-[#4ADE80] px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-sm">
        Popular
      </span>
    )}
  </div>
);

const CustomTitle = ({ title, isLarge }: { title: any, isLarge?: boolean }) => (
  <h3 className={`font-bold text-white leading-tight mb-2 font-['Inter'] ${isLarge ? 'text-3xl' : 'text-xl'}`}>
    {title}
  </h3>
);

const CustomDescription = ({ description, tags, projects, isLarge }: { description: string, tags: string[], projects: string, isLarge?: boolean }) => (
  <div className="flex flex-col h-full justify-between">
    <div>
      <p className={`text-gray-300 font-['Inter'] leading-relaxed mb-4 ${isLarge ? 'text-base max-w-[85%]' : 'text-sm'}`}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string, idx: number) => (
          <span 
            key={idx}
            className="px-2.5 py-1 bg-white/10 border border-white/10 text-gray-200 rounded-lg text-xs font-medium font-['Inter'] backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
      <div className="flex items-center gap-2 text-gray-400 font-semibold text-xs uppercase tracking-wider font-['Inter']">
        <span>{projects} Projects</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover/bento:bg-white group-hover/bento:border-white transition-colors duration-300">
        <ArrowRight size={14} className="text-gray-300 group-hover/bento:text-black transition-transform duration-300" />
      </div>
    </div>
  </div>
);

export const CareerTracks = () => {
  return (
    <section className="py-16 md:py-32 px-6 md:px-[80px] bg-[#fafafa] font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-[56px] font-['Inter'] font-[800] text-[#0F172A] leading-tight mb-4 md:mb-6 tracking-tight">
            Internship Tracks
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] font-['Inter'] leading-relaxed">
            Choose your path and work on real industry projects. Learn by building, not just watching.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BentoGrid className="grid-cols-1 md:grid-cols-12 max-w-none md:auto-rows-[minmax(18rem,auto)]">
            
            {/* Large Card */}
            <BentoGridItem
              title={<CustomTitle title={<span>Full Stack<br/>Development</span>} isLarge={true} />}
              description={
                <CustomDescription 
                  description="Build modern web applications using the latest scalable technologies and deploy them to production." 
                  tags={['React', 'Node.js', 'MongoDB', 'Express']} 
                  projects="12+" 
                  isLarge={true} 
                />
              }
              header={<MeshBackground gradient="radial-gradient(circle at top right, rgba(30,58,138,0.08), transparent 50%), radial-gradient(circle at bottom left, rgba(79,70,229,0.08), transparent 50%)" isLarge={true} />}
              icon={<CustomIcon Icon={Layers} isLarge={true} />}
              className="md:col-span-12 lg:col-span-5 lg:row-span-2 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-white p-6"
            />

            {/* Medium Cards */}
            <BentoGridItem
              title={<CustomTitle title="AI & Data Science" />}
              description={<CustomDescription description="Work with ML models, data analysis, and build real-world AI applications." tags={['Python', 'Pandas', 'TensorFlow']} projects="10+" />}
              header={<MeshBackground gradient="radial-gradient(circle at top right, rgba(14,165,233,0.1), transparent 50%), radial-gradient(circle at bottom left, rgba(59,130,246,0.1), transparent 50%)" />}
              icon={<CustomIcon Icon={BrainCircuit} />}
              className="md:col-span-6 lg:col-span-4 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            <BentoGridItem
              title={<CustomTitle title="MERN Development" />}
              description={<CustomDescription description="Build scalable apps with MongoDB, Express, React and Node.js." tags={['React', 'Redux', 'API']} projects="8+" />}
              header={<MeshBackground gradient="radial-gradient(circle at top right, rgba(168,85,247,0.1), transparent 50%), radial-gradient(circle at bottom left, rgba(99,102,241,0.1), transparent 50%)" />}
              icon={<CustomIcon Icon={Box} />}
              className="md:col-span-6 lg:col-span-3 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            {/* Row 2 Medium/Small Cards */}
            <BentoGridItem
              title={<CustomTitle title="Java Full Stack" />}
              description={<CustomDescription description="Enterprise applications." tags={['Spring', 'MySQL']} projects="6+" />}
              header={<MeshBackground gradient="radial-gradient(circle at center, rgba(16,185,129,0.1), transparent 60%)" />}
              icon={<CustomIcon Icon={Coffee} />}
              className="md:col-span-6 lg:col-span-4 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            <BentoGridItem
              title={<CustomTitle title="Python Full Stack" />}
              description={<CustomDescription description="Rapid app development." tags={['Django', 'PostgreSQL']} projects="6+" />}
              header={<MeshBackground gradient="radial-gradient(circle at center, rgba(245,158,11,0.1), transparent 60%)" />}
              icon={<CustomIcon Icon={FileCode2} />}
              className="md:col-span-6 lg:col-span-3 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            {/* Row 3 - Small Cards */}
            <BentoGridItem
              title={<CustomTitle title="AI & ML" />}
              description={<CustomDescription description="Core machine learning." tags={['PyTorch']} projects="4+" />}
              header={<MeshBackground gradient="radial-gradient(circle at top left, rgba(139,92,246,0.1), transparent 70%)" />}
              icon={<CustomIcon Icon={Bot} />}
              className="md:col-span-4 lg:col-span-2 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            <BentoGridItem
              title={<CustomTitle title="Selenium" />}
              description={<CustomDescription description="Web automation." tags={['Testing']} projects="3+" />}
              header={<MeshBackground gradient="radial-gradient(circle at top left, rgba(79,70,229,0.1), transparent 70%)" />}
              icon={<CustomIcon Icon={TestTube2} />}
              className="md:col-span-4 lg:col-span-2 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            <BentoGridItem
              title={<CustomTitle title="Cypress" />}
              description={<CustomDescription description="E2E testing." tags={['JS/TS']} projects="3+" />}
              header={<MeshBackground gradient="radial-gradient(circle at top left, rgba(20,184,166,0.1), transparent 70%)" />}
              icon={<CustomIcon Icon={CheckCircle2} />}
              className="md:col-span-4 lg:col-span-2 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            <BentoGridItem
              title={<CustomTitle title="Data Analytics" />}
              description={<CustomDescription description="Business intelligence." tags={['SQL', 'Tableau']} projects="5+" />}
              header={<MeshBackground gradient="radial-gradient(circle at top left, rgba(6,182,212,0.1), transparent 70%)" />}
              icon={<CustomIcon Icon={LineChart} />}
              className="md:col-span-4 lg:col-span-2 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            <BentoGridItem
              title={<CustomTitle title="Resume Building" />}
              description={<CustomDescription description="ATS-friendly profiles." tags={['Career']} projects="2+" />}
              header={<MeshBackground gradient="radial-gradient(circle at top left, rgba(249,115,22,0.1), transparent 70%)" />}
              icon={<CustomIcon Icon={FileText} />}
              className="md:col-span-4 lg:col-span-2 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

            <BentoGridItem
              title={<CustomTitle title="Mentorship" />}
              description={<CustomDescription description="1-on-1 guidance." tags={['Guidance']} projects="1+" />}
              header={<MeshBackground gradient="radial-gradient(circle at top left, rgba(168,85,247,0.1), transparent 70%)" />}
              icon={<CustomIcon Icon={Users} />}
              className="md:col-span-4 lg:col-span-2 relative overflow-hidden border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0B1120] border-white/10 p-6"
            />

          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
};
