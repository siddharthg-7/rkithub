import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useApplicationModal } from '../contexts/ApplicationContext';
import { toast } from 'react-hot-toast';

const applicationSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
  email: z.string().email("Invalid email address"),
  college: z.string().min(2, "College name is required"),
  year: z.string().min(1, "Current year is required"),
  course: z.string().optional(),
  batch: z.string().optional(),
  message: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

export const ApplicationModal = () => {
  const { isApplyModalOpen, closeApplyModal } = useApplicationModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    
    // Simulate network delay for premium feel
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Application Prepared!");

    // Format WhatsApp Message
    const text = `Hello RK IT Hub,\n\nI would like to apply.\n\n━━━━━━━━━━━━━━\n\nName:\n${data.fullName}\n\nPhone:\n${data.phone}\n\nEmail:\n${data.email}\n\nCollege:\n${data.college}\n\nYear:\n${data.year}\n\nInterested Course:\n${data.course || 'Not Specified'}\n\nPreferred Batch:\n${data.batch || 'Not Specified'}\n\nMessage:\n${data.message || 'No additional message'}\n\n━━━━━━━━━━━━━━\n\nSubmitted from RK IT Hub Website.`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917702949304?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      closeApplyModal();
      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isApplyModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeApplyModal}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9999]"
          />
          
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[24px] shadow-2xl w-full max-w-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Apply for Your Career Journey</h2>
                  <p className="text-slate-500 text-sm mt-1">Let's help you get placed.</p>
                </div>
                <button 
                  onClick={closeApplyModal}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-8 overflow-y-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        id="fullName"
                        {...register("fullName")}
                        className={`block px-4 pb-2.5 pt-6 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border ${errors.fullName ? 'border-red-400 bg-red-50/50' : 'border-slate-200'} appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 peer transition-all`}
                        placeholder=" "
                      />
                      <label htmlFor="fullName" className="absolute text-sm font-semibold text-slate-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        Full Name *
                      </label>
                      {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName.message}</p>}
                    </div>
                    
                    <div className="relative">
                      <input 
                        id="phone"
                        {...register("phone")}
                        className={`block px-4 pb-2.5 pt-6 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50/50' : 'border-slate-200'} appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 peer transition-all`}
                        placeholder=" "
                      />
                      <label htmlFor="phone" className="absolute text-sm font-semibold text-slate-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        Phone Number *
                      </label>
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        id="email"
                        {...register("email")}
                        className={`block px-4 pb-2.5 pt-6 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50/50' : 'border-slate-200'} appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 peer transition-all`}
                        placeholder=" "
                      />
                      <label htmlFor="email" className="absolute text-sm font-semibold text-slate-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        Email Address *
                      </label>
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                    </div>

                    <div className="relative">
                      <input 
                        id="college"
                        {...register("college")}
                        className={`block px-4 pb-2.5 pt-6 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border ${errors.college ? 'border-red-400 bg-red-50/50' : 'border-slate-200'} appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 peer transition-all`}
                        placeholder=" "
                      />
                      <label htmlFor="college" className="absolute text-sm font-semibold text-slate-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        College Name *
                      </label>
                      {errors.college && <p className="text-red-500 text-xs mt-1 font-medium">{errors.college.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <select 
                        id="year"
                        {...register("year")}
                        className={`block px-4 pb-2.5 pt-6 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border ${errors.year ? 'border-red-400 bg-red-50/50' : 'border-slate-200'} appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                      >
                        <option value="" disabled selected hidden></option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Passed Out">Passed Out</option>
                      </select>
                      <label htmlFor="year" className="absolute text-sm font-semibold text-slate-500 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4">
                        Current Year *
                      </label>
                      {errors.year && <p className="text-red-500 text-xs mt-1 font-medium">{errors.year.message}</p>}
                    </div>

                    <div className="relative">
                      <select 
                        id="course"
                        {...register("course")}
                        className="block px-4 pb-2.5 pt-6 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="" disabled selected hidden></option>
                        <option value="Java Full Stack">Java Full Stack</option>
                        <option value="Python Full Stack">Python Full Stack</option>
                        <option value="MERN Stack">MERN Stack</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Testing">Testing</option>
                      </select>
                      <label htmlFor="course" className="absolute text-sm font-semibold text-slate-500 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4">
                        Course Interested
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <select 
                        id="batch"
                        {...register("batch")}
                        className="block px-4 pb-2.5 pt-6 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="" disabled selected hidden></option>
                        <option value="Online">Online</option>
                        <option value="Weekend Special">Weekend Special</option>
                      </select>
                      <label htmlFor="batch" className="absolute text-sm font-semibold text-slate-500 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4">
                        Preferred Batch
                      </label>
                    </div>

                    <div className="relative">
                      <input 
                        id="message"
                        {...register("message")}
                        className="block px-4 pb-2.5 pt-6 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 peer transition-all"
                        placeholder=" "
                      />
                      <label htmlFor="message" className="absolute text-sm font-semibold text-slate-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        Message
                      </label>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <button
                      type="submit"
                      disabled={!isValid || isSubmitting || isSuccess}
                      className="w-full relative bg-[#0F172A] hover:bg-slate-800 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl transition-all overflow-hidden"
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center gap-2"
                          >
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing...
                          </motion.div>
                        ) : isSuccess ? (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center gap-2 text-green-400"
                          >
                            <Check className="w-6 h-6" />
                            Redirecting to WhatsApp...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            Submit Application
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
