import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, GraduationCap, Rocket, Crown, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    icon: GraduationCap,
    prices: {
      monthly: { price: '349', originalPrice: '699', suffix: '/mo' },
      onetime: { price: '999', originalPrice: '1999', suffix: '' }
    },
    description: 'Perfect for beginners starting their tech journey.',
    features: [
      'Fundamentals Training',
      '1 Mini Project',
      'Internship Certificate',
      'Recorded Sessions',
    ],
    cta: 'Start Learning',
    theme: {
      primary: '#10B981',
      secondary: '#34D399',
      bgHover: 'hover:shadow-[#10B981]/20',
      borderHover: 'hover:border-[#10B981]',
      text: 'text-[#10B981]'
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: Rocket,
    prices: {
      monthly: { price: '549', originalPrice: '1099', suffix: '/mo' },
      onetime: { price: '2999', originalPrice: '5999', suffix: '' }
    },
    description: 'Ideal for students looking to build strong portfolios.',
    features: [
      'Full Training Program',
      'Major Industry Project',
      'Internship Certificate',
      'Resume Kit',
      'Interview Preparation',
    ],
    cta: 'Get Started',
    popular: true,
    theme: {
      primary: '#F59E0B',
      secondary: '#FDBA74',
      bgHover: 'hover:shadow-[#F59E0B]/30',
      borderHover: 'hover:border-[#F59E0B]',
      text: 'text-[#F59E0B]'
    }
  },
  {
    id: 'career-accelerator',
    name: 'Career Accelerator',
    icon: Crown,
    prices: {
      monthly: { price: '749', originalPrice: '1499', suffix: '/mo' },
      onetime: { price: '5999', originalPrice: '11999', suffix: '' }
    },
    description: 'For serious learners seeking mentorship and placements.',
    features: [
      'Everything in Professional',
      'Live Project',
      'Personal Mentor',
      'Mock Interviews',
      'LinkedIn Optimization',
    ],
    cta: 'Join Accelerator',
    theme: {
      primary: '#EF4444',
      secondary: '#FB7185',
      bgHover: 'hover:shadow-[#EF4444]/20',
      borderHover: 'hover:border-[#EF4444]',
      text: 'text-[#EF4444]'
    }
  },
];

const comparisonData = [
  { feature: 'Training Hours', starter: '20+ Hours', pro: '50+ Hours', accelerator: '100+ Hours' },
  { feature: 'Projects', starter: '1 Mini', pro: '1 Major', accelerator: 'Live Project' },
  { feature: 'Certificate', starter: true, pro: true, accelerator: true },
  { feature: 'Resume Support', starter: false, pro: true, accelerator: true },
  { feature: 'Interview Prep', starter: false, pro: 'Basic', accelerator: 'Advanced' },
  { feature: 'Mentorship', starter: false, pro: false, accelerator: 'Group' },
  { feature: 'Mock Interviews', starter: false, pro: false, accelerator: true },
  { feature: 'Recommendation Letter', starter: false, pro: false, accelerator: false },
];

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'onetime'>('onetime');

  return (
    <section className="relative py-8 md:py-16 md:py-32 font-sans overflow-hidden bg-[#FAFAFA]">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blurred gradient circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#10B981]/10 blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F59E0B]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[800px] rounded-full bg-[#EF4444]/10 blur-[150px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold mb-6"
          >
            <Sparkles size={16} /> Limited Time Offer: Save Up to ₹2000
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-[64px] font-[800] text-[#0F172A] mb-6 tracking-tight font-['Plus_Jakarta_Sans'] leading-tight"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative">
              Learning Journey
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-[6px] bg-blue-200/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-[#64748B] font-['Inter'] max-w-2xl mx-auto mb-8"
          >
            Flexible plans designed for every stage of your career growth. No hidden fees, just pure value.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">Powered by Industry Collaboration</span>
            <img src="/VHUB_Logo.svg" alt="V-HUB" className="h-10 md:h-12 object-contain" />
          </motion.div>
        </div>

        {/* Toggle Removed - Default to One Time */}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-32 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const currentPrice = plan.prices[billingCycle];
            
            return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12 }}
              className={`relative flex flex-col p-6 lg:p-8 rounded-[32px] bg-white/70 backdrop-blur-[24px] border border-white/50 shadow-[0_10px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group ${plan.theme.bgHover} ${plan.theme.borderHover} ${plan.popular ? 'lg:scale-105 z-10' : 'z-0'}`}
              style={{
                boxShadow: plan.popular ? '0 20px 80px rgba(245, 158, 11, 0.15)' : '',
                border: plan.popular ? '2px solid rgba(245, 158, 11, 0.3)' : ''
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange-500/30"
                  >
                    Most Popular
                  </motion.div>
                </div>
              )}

              {/* Glowing Border Effect for Popular */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}

              <div className="flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] font-['Plus_Jakarta_Sans'] mb-2">{plan.name}</h3>
                    <p className="text-[#64748B] text-xs h-10 font-['Inter']">{plan.description}</p>
                  </div>
                  <motion.div 
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gray-50 border border-gray-100 ${plan.theme.text}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <plan.icon size={20} />
                  </motion.div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 font-medium line-through decoration-2 decoration-gray-300 text-sm">
                      ₹{currentPrice.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <motion.span 
                      key={currentPrice.price}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tighter font-['Clash_Display',sans-serif]"
                    >
                      ₹{currentPrice.price}
                    </motion.span>
                    <span className="text-gray-500 font-bold ml-1 text-sm">{currentPrice.suffix}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.theme.text}`} />
                        <span className="text-[#334155] text-sm font-['Inter'] font-medium leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3.5 rounded-2xl font-bold text-[15px] transition-all flex items-center justify-center gap-2 font-['Inter'] text-white shadow-lg mt-auto`}
                  style={{ backgroundColor: plan.theme.primary }}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white/60 backdrop-blur-xl rounded-[32px] border border-gray-200/50 shadow-xl overflow-hidden mb-16 md:mb-32"
        >
          <div className="p-6 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] font-['Plus_Jakarta_Sans'] text-center mb-8 md:mb-10">Compare Plans</h3>
            <div className="overflow-x-auto pb-4">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 font-semibold text-gray-500 font-['Inter'] w-1/5">Features</th>
                    <th className="py-4 px-4 font-bold text-[#10B981] font-['Inter'] text-center w-1/4">Starter</th>
                    <th className="py-4 px-4 font-bold text-[#F59E0B] font-['Inter'] text-center w-1/4">Professional</th>
                    <th className="py-4 px-4 font-bold text-[#EF4444] font-['Inter'] text-center w-1/4">Accelerator</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors group">
                      <td className="py-4 px-4 text-[#0F172A] font-medium font-['Inter']">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-gray-600 font-['Inter']">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <CheckCircle2 className="w-5 h-5 mx-auto text-[#10B981]" /> : <span className="text-gray-300">-</span>
                        ) : row.starter}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-600 font-['Inter'] bg-orange-50/30 group-hover:bg-orange-50/50 transition-colors">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <CheckCircle2 className="w-5 h-5 mx-auto text-[#F59E0B]" /> : <span className="text-gray-300">-</span>
                        ) : row.pro}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-600 font-['Inter']">
                        {typeof row.accelerator === 'boolean' ? (
                          row.accelerator ? <CheckCircle2 className="w-5 h-5 mx-auto text-[#EF4444]" /> : <span className="text-gray-300">-</span>
                        ) : row.accelerator}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Glass glare effect */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
          
          <h3 className="text-3xl md:text-4xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-4">Still not sure?</h3>
          <p className="text-gray-400 font-['Inter'] text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
            Talk with our mentors and find the right path for your career goals. We're here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-[#0F172A] rounded-2xl font-bold font-['Inter'] hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Book Free Call
            </button>
            <button className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 rounded-2xl font-bold font-['Inter'] hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
              WhatsApp Us
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
