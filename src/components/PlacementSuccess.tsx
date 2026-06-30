import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Linkedin } from 'lucide-react';
const PLACEMENTS = [
  { id: 1, name: 'Rahul Reddy', course: 'Java Full Stack', company: 'Infosys', package: '5.2 LPA', image: '/durga.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', quote: "The real-time projects completely changed how I approach coding. I didn't just learn syntax; I learned how to build production-grade applications." },
  { id: 2, name: 'Sneha', course: 'Python Full Stack', company: 'Cognizant', package: '6.1 LPA', image: '/vijaya.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg', quote: "From learning Python to deploying my first full-stack app, the journey was incredible. The mentors guided me through every bug and architecture decision." },
  { id: 3, name: 'Manogna', course: 'Test Engineer', company: 'CGI', package: '7.5 LPA', image: '/manogna.webp', logo: '/logo_cgi_color.webp', quote: "RK IT Hub’s testing curriculum is unmatched. The focus on automation frameworks like Selenium directly helped me clear my technical rounds." },
  { id: 4, name: 'Chaitanya', course: 'Java Full Stack', company: 'TCS', package: '4.8 LPA', image: '/Chaitanya .webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png?_=20210617123944', quote: "The mentorship here is what makes the difference. They don't just teach; they guide you on how to think like an engineer and solve real problems." },
  { id: 5, name: 'Vikram', course: 'MERN Stack', company: 'Wipro', package: '5.0 LPA', image: '/durga.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg', quote: "The intensive focus on practical implementation over theory is why I got placed. The React portfolio I built here was the main topic during HR rounds." },
  { id: 6, name: 'Priya', course: 'Data Science', company: 'Capgemini', package: '6.5 LPA', image: '/vijaya.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg', quote: "I had a career gap and was nervous. RK IT Hub not only upgraded my data skills but also built my confidence to clear top MNC interviews." },
  { id: 7, name: 'Arjun', course: 'Automation Testing', company: 'Tech Mahindra', package: '4.5 LPA', image: '/Chaitanya .webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg', quote: "The mock interviews and resume building sessions were game-changers. I felt completely prepared for the real industry expectations." },
  { id: 8, name: 'Ravi', course: 'Java Full Stack', company: 'Virtusa', package: '5.8 LPA', image: '/durga.webp', logo: '/virtusa.webp', quote: "Learning Java with Spring Boot here was the best decision. The advanced architectural concepts taught are exactly what top companies look for." },
  { id: 9, name: 'Kavya', course: 'Python Full Stack', company: 'Broadridge', package: '8.2 LPA', image: '/vijaya.webp', logo: '/broadridge.svg', quote: "The Python curriculum is incredibly comprehensive. The project-based learning approach made complex backend concepts easy to grasp." },
  { id: 10, name: 'Sanjay', course: 'MERN Stack', company: 'Infosys', package: '5.2 LPA', image: '/Chaitanya .webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', quote: "MERN stack seemed daunting at first, but the step-by-step guidance and 24/7 doubt clarification made it a breeze to master." },
  { id: 11, name: 'Divya', course: 'Test Engineer', company: 'CGI', package: '7.0 LPA', image: '/manogna.webp', logo: '/logo_cgi_color.webp', quote: "The hands-on practice with real testing tools gave me a competitive edge. I landed my dream job within weeks of completing the course." },
  { id: 12, name: 'Ajay', course: 'Data Science', company: 'Cognizant', package: '6.0 LPA', image: '/durga.webp', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg', quote: "Data Science concepts were taught with so much clarity. Working on live datasets during the training helped me crack my technical interview." },
];

const ModernPlacementCard = ({ student }: { student: typeof PLACEMENTS[0], key?: string | number }) => {
  const role = student.course;
  const quote = student.quote || "The hands-on training and mentorship at RK IT Hub were instrumental in helping me secure my position. The mock interviews gave me the confidence I needed to clear technical rounds.";
  
  return (
    <div className="w-[340px] h-[340px] bg-white border border-slate-200 rounded-[28px] p-7 flex flex-col relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 hover:border-blue-200 cursor-default">
      {/* Decorative Quote Mark */}
      <div className="absolute top-2 right-4 text-[120px] leading-none font-serif text-blue-50 opacity-[0.6] select-none pointer-events-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
        "
      </div>
      
      {/* Header: Avatar & Info */}
      <div className="flex items-center gap-4 relative z-10 mb-5">
        <div className="relative">
          <img src={student.image} alt={student.name} className="w-14 h-14 rounded-full object-cover border-[3px] border-white shadow-sm bg-slate-100" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-[16px]">{student.name}</h4>
          <p className="text-slate-500 text-[13px] font-semibold">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <div className="flex-1 relative z-10 flex flex-col justify-center">
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-slate-600 text-[14.5px] leading-relaxed line-clamp-4 font-medium">
          "{quote}"
        </p>
      </div>

      {/* Footer: Package & Company */}
      <div className="mt-4 pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
        {student.logo ? (
          <img src={student.logo} alt={student.company} className="h-[24px] max-w-[110px] object-contain object-left opacity-90 group-hover:opacity-100 transition-opacity" />
        ) : (
          <span className="font-bold text-slate-700">{student.company}</span>
        )}
        
        <div className="bg-green-50 border border-green-200 text-green-700 text-[13px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm">
          {student.package.includes('LPA') ? student.package : `₹${student.package}`}
        </div>
      </div>
    </div>
  );
};

const AnimatedNumber = ({ valueStr }: { valueStr: string }) => {
  const [num, setNum] = useState(0);
  const target = parseFloat(valueStr.replace(/[^0-9.]/g, '')) || 0;

  useEffect(() => {
    setNum(0);
    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setNum(start + (target - start) * ease);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [target]);

  return <span>{num.toFixed(1)}</span>;
};

const FeaturedCard = ({ student }: { student: typeof PLACEMENTS[0] }) => {
  const [activeStage, setActiveStage] = useState(0);

  // Animate the timeline stages when the student changes
  useEffect(() => {
    setActiveStage(0);
    const t1 = setTimeout(() => setActiveStage(1), 600);
    const t2 = setTimeout(() => setActiveStage(2), 1200);
    const t3 = setTimeout(() => setActiveStage(3), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [student]);

  const stages = ['Training', 'Projects', 'Internship', 'Placement'];

  return (
    <div className="w-full lg:w-[70%] mx-auto bg-[#F8FAFC] border border-[#E2E8F0] rounded-[28px] overflow-hidden flex flex-col md:flex-row transition-transform duration-500 hover:-translate-y-[6px] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] cursor-pointer">

      {/* Left: Image Container */}
      <div className="md:w-[45%] relative h-[320px] md:h-auto overflow-hidden bg-slate-100 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={student.id}
            src={student.image}
            alt={student.name}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </AnimatePresence>
      </div>

      {/* Right: Details Container */}
      <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center">

        <AnimatePresence mode="wait">
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-3xl font-extrabold text-slate-900 mb-1">{student.name}</h3>
            <p className="text-slate-500 font-medium mb-6">{student.course}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-6 mb-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={student.id}
              src={student.logo}
              alt={student.company}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="h-[34px] max-w-[120px] object-contain object-left"
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={student.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-[#DCFCE7] border border-[#bbf7d0] text-[#166534] text-[15px] font-bold px-4 py-1.5 rounded-full"
            >
              ₹<AnimatedNumber valueStr={student.package} /> LPA
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-bold">
            {stages.map((stage, i) => (
              <React.Fragment key={stage}>
                <span className={`px-2.5 py-1 rounded-md transition-colors duration-300 ${i === activeStage
                    ? 'bg-blue-100 text-blue-700'
                    : i < activeStage
                      ? 'text-slate-900'
                      : 'text-slate-400'
                  }`}>
                  {stage}
                </span>
                {i < 3 && <ArrowRight className={`w-3.5 h-3.5 transition-colors duration-300 ${i < activeStage ? 'text-slate-400' : 'text-slate-200'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 text-blue-600 font-bold text-[15px] hover:text-blue-700 transition-colors group/btn w-max">
          View Journey <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
};

export const PlacementSuccess = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // 8-second orchestrator for the featured card
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % PLACEMENTS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate to ensure Swiper loop doesn't have empty spaces
  const displayItems = [...PLACEMENTS, ...PLACEMENTS, ...PLACEMENTS];

  return (
    <section id="placements" className="relative w-full bg-[#FAFBFC] pt-16 md:pt-24 pb-8 overflow-hidden font-sans">

      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.06]" />
        <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.06]" />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-green-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.06]" />
      </div>

      <style>{`
        .swiper-slide {
          width: 340px !important;
          height: auto !important;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase mb-4"
          >
            PLACEMENTS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Placement Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-500 text-sm sm:text-base max-w-2xl mx-auto"
          >
            See how our students transformed their skills into careers through real projects and mentorship.
          </motion.p>
        </div>

        {/* Layer 2: Placement Marquees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full flex flex-col gap-6"
        >
          {/* Swiper Carousel */}
          <div className="overflow-hidden w-full relative">

            {/* Soft fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFBFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFBFC] to-transparent z-10 pointer-events-none" />

            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView="auto"
              loop={true}
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              allowTouchMove={true}
              className="w-full !overflow-visible items-center"
            >
              {displayItems.map((item, i) => (
                <SwiperSlide key={`modern-${item.id}-${i}`} className="flex items-center justify-center py-6">
                  <ModernPlacementCard student={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
