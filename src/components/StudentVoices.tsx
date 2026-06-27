import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Linkedin, ArrowRight, Star } from 'lucide-react';

const students = [
  {
    id: 1,
    type: 'quote',
    name: 'Priya Sharma',
    role: 'Software Developer',
    company: 'INFOSYS',
    package: '5.2 LPA',
    quote: "The real-time projects completely changed how I approach coding. I didn't just learn syntax; I learned how to build production-grade applications. The mock interviews were exactly like the real thing.",
    image: '/vijaya.png',
    height: 'h-[320px]'
  },
  {
    id: 2,
    type: 'quote',
    name: 'Rahul Reddy',
    role: 'Full Stack Developer',
    company: 'TCS',
    package: '4.8 LPA',
    quote: "From learning Java to deploying my first full-stack app, the journey was incredible. The mentors guided me through every bug and architecture decision.",
    image: '/durga.png',
    height: 'h-[280px]'
  },
  {
    id: 3,
    type: 'quote',
    name: 'Sneha Patel',
    role: 'System Engineer',
    company: 'COGNIZANT',
    package: '6.1 LPA',
    quote: "I had a career gap and was nervous about re-entering the industry. RK IT Hub not only upgraded my skills but also built my confidence to clear top MNC interviews.",
    image: '/manogna.png',
    height: 'h-[310px]'
  },
  {
    id: 4,
    type: 'quote',
    name: 'Arjun Kumar',
    role: 'Test Engineer',
    company: 'BROADRIDGE',
    package: '5.5 LPA',
    quote: "RK IT Hub’s testing curriculum is unmatched. The focus on automation frameworks like Selenium and Cypress directly helped me clear my technical rounds with confidence.",
    image: '/Chaitanya .png',
    height: 'h-[330px]'
  },
  {
    id: 5,
    type: 'quote',
    name: 'Kavya Rao',
    role: 'Frontend Developer',
    company: 'WIPRO',
    package: '5.0 LPA',
    quote: "The mentorship here is what makes the difference. They don't just teach; they guide you on how to think like an engineer and solve real business problems.",
    image: '/vijaya.png',
    height: 'h-[300px]'
  },
  {
    id: 6,
    type: 'quote',
    name: 'Vikram Singh',
    role: 'Data Analyst',
    company: 'CAPGEMINI',
    package: '6.5 LPA',
    quote: "The intensive focus on practical implementation over theory is why I got placed. The portfolio I built here was the main topic during my HR rounds.",
    image: '/durga.png',
    height: 'h-[290px]'
  }
];

const TiltCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number, key?: React.Key }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="mb-7 break-inside-avoid"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative bg-white border border-slate-200 rounded-[24px] overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_20px_40px_rgba(11,79,156,0.08)] hover:-translate-y-2 cursor-default ${className}`}
      >
        {children}

        {/* Hover LinkedIn Tooltip */}
        <div className="absolute bottom-6 right-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 z-20">
          <div className="bg-white shadow-lg border border-slate-100 p-2 rounded-full text-slate-400 hover:text-[#0A66C2] transition-colors cursor-pointer group/li relative">
            <Linkedin className="w-4 h-4" />
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/li:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              View LinkedIn
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const QuoteCard = ({ student }: { student: any }) => (
  <div className="p-8 h-full flex flex-col relative">
    {/* Huge background quote mark */}
    <div className="absolute top-4 right-8 text-[120px] leading-none font-serif text-slate-900 opacity-[0.03] select-none pointer-events-none">
      "
    </div>

    <div className="inline-flex gap-0.5 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full w-max mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    <p className="text-slate-700 font-medium text-[15px] leading-relaxed mb-8 relative z-10">
      "{student.quote}"
    </p>

    <div className="mt-auto flex items-center gap-4 relative z-10">
      <div className="overflow-hidden rounded-[14px] shrink-0">
        <img src={student.image} alt={student.name} className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-[14px]">{student.name}</h4>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-slate-500 text-[12px] font-medium">{student.role}</span>
          {student.role && <span className="w-1 h-1 rounded-full bg-slate-200" />}
          <span className="bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded-full">
            {student.company} {student.package}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const PhotoCard = ({ student }: { student: any }) => (
  <div className="h-full relative overflow-hidden bg-slate-900">
    <img
      src={student.image}
      alt={student.name}
      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
      <div className="inline-flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-white/90 font-medium text-[15px] leading-relaxed mb-4">
        "{student.quote}"
      </p>
      <h4 className="font-bold text-white text-[15px]">{student.name}</h4>
    </div>
  </div>
);

const TimelineCard = ({ student }: { student: any }) => {
  const stages = ['Joined', 'Projects', 'Internship', 'Placed'];

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="overflow-hidden rounded-[14px] shrink-0">
          <img src={student.image} alt={student.name} className="w-14 h-14 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-[16px]">{student.name}</h4>
          <span className="bg-[#DCFCE7] text-[#166534] text-[11px] font-bold px-2 py-0.5 rounded-full inline-block mt-1">
            {student.company} {student.package}
          </span>
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-slate-400 text-[12px] font-bold uppercase tracking-wider mb-4">The Journey</p>
        <div className="flex flex-col gap-3 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-100 z-0" />
          {stages.map((stage, i) => (
            <div key={stage} className="flex items-center gap-3 relative z-10">
              <div className={`w-3.5 h-3.5 rounded-full border-2 ${i === 3 ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'
                }`} />
              <span className={`text-[14px] font-semibold ${i === 3 ? 'text-blue-600' : 'text-slate-600'
                }`}>{stage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const StudentVoices = () => {
  const staggerOrder = [1, 4, 2, 5, 3, 6];

  return (
    <section id="testimonials" className="relative w-full bg-[#FAFBFC] py-16 md:py-32 overflow-hidden font-sans">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.02
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#EFF6FF] text-blue-700 font-extrabold text-[13px] tracking-wide mb-6"
          >
            Student Voices
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
          >
            Hear It From <br className="md:hidden" /> Our Students
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto font-medium"
          >
            See how our students transformed their skills into careers through real projects and mentorship.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-7 mx-auto max-w-[1200px]">
          {students.map((student, i) => (
            <TiltCard
              key={student.id}
              className={`w-full ${student.height}`}
              delay={staggerOrder[i] || i}
            >
              {student.type === 'quote' && <QuoteCard student={student} />}
              {student.type === 'photo' && <PhotoCard student={student} />}
              {student.type === 'timeline' && <TimelineCard student={student} />}
            </TiltCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 md:mt-16 flex justify-center"
        >
          <a href="#" className="inline-flex items-center gap-4 bg-white border border-slate-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            {/* Inline Google Logo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 shrink-0">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 leading-none">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">Based on 1200+ Reviews</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
