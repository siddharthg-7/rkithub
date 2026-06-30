import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Boxes, 
  Database, 
  Coffee, 
  BrainCircuit, 
  Briefcase, 
  Landmark, 
  Users, 
  BarChart3, 
  Megaphone,
  ArrowUpRight
} from 'lucide-react';

const engineeringTracks = [
  {
    id: 'python-fs',
    title: 'Python Full Stack',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    colors: 'from-blue-500/10 to-cyan-500/5',
    description: 'Build scalable web applications using Python, Django, APIs and databases.',
    skills: ['Python', 'Django', 'REST API', 'PostgreSQL'],
    projects: '8+ Industry Projects',
    colSpan: 'md:col-span-4',
  },
  {
    id: 'mern',
    title: 'MERN Stack',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    colors: 'from-green-500/10 to-emerald-500/5',
    description: 'Build modern web apps using MongoDB, Express, React and Node.js.',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    projects: '8+ Industry Projects',
    colSpan: 'md:col-span-4',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
    colors: 'from-purple-500/10 to-violet-500/5',
    description: 'Analyze data and build models to solve real-world problems using statistics and ML.',
    skills: ['Python', 'Pandas', 'SQL', 'ML'],
    projects: '10+ Industry Projects',
    colSpan: 'md:col-span-4',
  },
  {
    id: 'java-fs',
    title: 'Java Full Stack',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    colors: 'from-red-500/10 to-orange-500/5',
    description: 'Build enterprise-grade applications using Java, Spring Boot, REST APIs and databases.',
    skills: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
    projects: '8+ Industry Projects',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    colors: 'from-orange-500/10 to-pink-500/5',
    description: 'Build intelligent systems with machine learning, deep learning and neural networks.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
    projects: '8+ Industry Projects',
    colSpan: 'md:col-span-6',
  }
];

const businessTracks = [
  {
    id: 'mba',
    title: 'MBA',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/1950/1950715.png',
    colors: 'from-amber-500/10 to-yellow-500/5',
    description: 'Gain business acumen and leadership skills for your career growth.',
    skills: ['Business Strategy'],
    projects: '6+ Industry Projects',
    colSpan: 'md:col-span-4',
  },
  {
    id: 'finance',
    title: 'Finance',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/3135/3135673.png',
    colors: 'from-green-500/10 to-teal-500/5',
    description: 'Learn financial analysis, modeling and investment strategies.',
    skills: ['Financial Analysis'],
    projects: '6+ Industry Projects',
    colSpan: 'md:col-span-4',
  },
  {
    id: 'hr',
    title: 'HR',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/912/912318.png',
    colors: 'from-pink-500/10 to-rose-500/5',
    description: 'Explore HR strategies, talent management and organizational behavior.',
    skills: ['HR Management'],
    projects: '6+ Industry Projects',
    colSpan: 'md:col-span-4',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/2822/2822439.png',
    colors: 'from-sky-500/10 to-blue-500/5',
    description: 'Turn data into insights using SQL, Tableau and advanced analytics.',
    skills: ['SQL', 'Tableau', 'Excel', 'Power BI'],
    projects: '6+ Industry Projects',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/1998/1998087.png',
    colors: 'from-violet-500/10 to-fuchsia-500/5',
    description: 'Learn SEO, social media, content marketing and growth strategies.',
    skills: ['SEO', 'Social Media', 'Content', 'Ads'],
    projects: '6+ Industry Projects',
    colSpan: 'md:col-span-6',
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

const TrackCard: React.FC<{ track: any }> = ({ track }) => (
  <motion.div 
    variants={itemVariants}
    className={`relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl h-[320px] p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col ${track.colSpan}`}
  >
    {/* Gradient Overlay */}
    <div className={`absolute inset-0 opacity-60 bg-gradient-to-br ${track.colors} pointer-events-none group-hover:opacity-100 transition-opacity duration-500`} />
    
    {/* Hover Border Effect (Aceternity style) */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none border-2 border-transparent bg-gradient-to-br from-blue-500/20 to-purple-500/20 [mask-composite:exclude] [mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] transition-opacity duration-500 rounded-3xl" style={{ padding: '2px', maskClip: 'content-box, border-box' }}></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-700 p-2.5">
          <img src={track.imageUrl} alt={track.title} className="w-full h-full object-contain" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-gray-900 mb-2">
        {track.title}
      </h3>
      <p className="text-sm text-gray-500 mb-6 flex-grow">
        {track.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {track.skills.map((skill: string) => (
          <span key={skill} className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600">
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
          <Briefcase size={16} />
          {track.projects}
        </div>
        <button 
          onClick={() => {
            const pricingSection = document.getElementById('pricing') || document.querySelector('.PricingSection');
            if (pricingSection) {
              pricingSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
          className="h-10 w-10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors relative z-20 cursor-pointer"
        >
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

export const CareerTracks = () => {
  const [activeTab, setActiveTab] = useState<'engineering' | 'business'>('engineering');

  const currentTracks = activeTab === 'engineering' ? engineeringTracks : businessTracks;

  return (
    <div className="bg-[#fafafa] relative overflow-hidden font-sans">
      {/* Aceternity Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 py-8 md:py-16 md:py-32 z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
            Internship Tracks
          </div>
          <h2 className="text-3xl lg:text-4xl font-[800] text-[#0F172A] mb-6 tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
            Choose Your Internship Track
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Work on real industry projects, gain practical skills, and build your career.
          </p>
        </motion.div>

        {/* Segmented Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm inline-flex relative w-full sm:w-auto max-w-[500px]">
            <button
              onClick={() => setActiveTab('engineering')}
              className={`flex-1 py-3 px-2 sm:px-6 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 relative z-10 ${
                activeTab === 'engineering' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Engineering & Technology
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex-1 py-3 px-2 sm:px-6 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 relative z-10 ${
                activeTab === 'business' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Business & Management
            </button>
            
            {/* Animated Tab Indicator */}
            <motion.div
              className="absolute top-2 bottom-2 w-[calc(50%-8px)] bg-blue-600 rounded-xl shadow-lg z-0"
              initial={false}
              animate={{
                x: activeTab === 'engineering' ? 0 : '100%',
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="relative min-h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {currentTracks.map((track) => (
                <TrackCard key={track.id} track={track} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
};
