import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';

export const PartnershipSection = () => {
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
            <img src="/logo.webp" alt="RK IT Hub" className="h-16 object-contain" />
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
