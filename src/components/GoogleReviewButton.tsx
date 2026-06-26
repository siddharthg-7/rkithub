import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { Star } from 'lucide-react';

export const GoogleReviewButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 left-6 z-[9999] flex items-end justify-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href="https://g.page/rk-it-hub/review"
        target="_blank"
        rel="noopener noreferrer"
        layout
        className="bg-white rounded-[100px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-[#E2E8F0] overflow-hidden flex items-center cursor-pointer"
        initial={{ borderRadius: 100 }}
        animate={{ 
          width: isHovered ? 'auto' : 52,
          height: 52,
          borderRadius: 100
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Google Logo (Always visible) */}
        <div className="w-[52px] h-[52px] flex items-center justify-center shrink-0">
          <FcGoogle size={24} />
        </div>
        
        {/* Expandable Content */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, width: 0, x: -10 }}
              animate={{ opacity: 1, width: 'auto', x: 0 }}
              exit={{ opacity: 0, width: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap pr-6 flex flex-col justify-center"
            >
              <div className="text-[14px] font-[800] text-[#0F172A] leading-tight">
                Review us on Google
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-[11px] font-[700] text-[#64748B] tracking-wider">5.0</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
};
