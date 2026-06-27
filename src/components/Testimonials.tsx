import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Durga',
    course: 'Associate Software Engineer',
    company: 'Enmoval - 3.5 LPA',
    review: "I am immensely grateful to RK IT TRAINING HUB for their outstanding training, which equipped me with the skills to confidently step into the field as an Associate Software Engineer. The faculty's deep knowledge, enthusiasm, and practical teaching approach made it easy to understand and apply complex concepts. Their mentorship has been invaluable in building my technical foundation and boosting my confidence as a fresher. I highly recommend RK IT TRAINING HUB to anyone aspiring to develop expertise in automation testing and kickstart their career in the software industry.",
    image: '/durga.webp',
  },
  {
    name: 'Vijaya',
    course: 'SDET',
    company: 'Broadridge - 5.5 LPA',
    review: "I had the opportunity to take a software testing course at RK IT Training HUB, and the experience was incredibly valuable. The training was highly practical, incorporating real-time examples that made even the most complex concepts easy to grasp. The faculty at RK IT Training HUB also provided insightful tips and strategies for acing interviews, which helped me approach my job search with confidence. Thanks to their guidance and support, I was able to successfully clear my interview and secure a job in software testing. I am truly grateful to RK IT Training HUB for their help and encouragement.",
    image: '/vijaya.webp',
  },
  {
    name: 'Manogna',
    course: 'Test Engineer',
    company: 'CGI - 7.5 LPA',
    review: "After taking a year-long break from my career, joining RK IT Training Hub really helped me reconnect with the tech world. The trainers made complex concepts easy to understand and focused on practical, hands-on learning, which boosted my confidence. Their guidance during interview preparation was especially valuable. With their support, I was able to land a job as a Test Engineer. I’m truly thankful to the entire team for helping me restart my journey in technology with confidence",
    image: '/manogna.webp',
  },
  {
    name: 'Chaitanya',
    course: 'Full Stack Java Developer',
    company: 'Fin Echo Engineering - 3.5 LPA',
    review: "I sincerely thank RK IT TRAINING HUB for providing top-quality training that helped me launch my career as a Full Stack Java Developer. The instructors’ real-world insights and hands-on teaching approach made complex concepts easy to understand and apply. Their constant support and guidance played a key role in building my technical confidence and skill set. I’m happy to share that I’ve been placed at Fin ECHO Engineering, and this achievement wouldn’t have been possible without the strong foundation built during my time at RK IT. I highly recommend RK IT TRAINING HUB to anyone aspiring to succeed in Full Stack Java Development.",
    image: '/Chaitanya .webp',
    linkedinUrl: '#',
  },
];

export const Testimonials = () => {
  const [page, setPage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: number) => {
    setPage((p) => (p + dir + totalPages) % totalPages);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <div id="testimonials" className="flex flex-col h-full w-full pr-0 lg:pr-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-[20px] font-[800] text-[#0F172A] mb-6"
      >
        What Our Students Say
      </motion.h2>

      <div className="relative w-full">
        <button
          onClick={() => go(-1)}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 shadow-md hover:text-[#0B4F9C] hover:border-[#0B4F9C] z-10 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => go(1)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 shadow-md hover:text-[#0B4F9C] hover:border-[#0B4F9C] z-10 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visible.map((testimonial, i) => (
            <motion.div
              key={page * perPage + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col relative hover:shadow-md transition-all duration-300"
            >
              <div className="text-[#0B4F9C] text-3xl font-serif leading-none mb-2 opacity-50">"</div>
              <div className="flex gap-0.5 mb-3 text-[#EAB308]">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-[#475569] text-[11px] leading-relaxed mb-6 flex-grow font-[500]">
                {testimonial.review}
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="relative">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px] shadow-sm">
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] fill-[#0A66C2]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[13px] leading-tight mb-0.5 flex items-center gap-1.5">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight">{testimonial.course}</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">Placed at <span className="text-slate-700 font-semibold">{testimonial.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setPage(i); if (timerRef.current) clearInterval(timerRef.current); startTimer(); }}
              className={`rounded-full transition-all duration-300 ${
                i === page ? 'w-5 h-2 bg-[#0B4F9C]' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
