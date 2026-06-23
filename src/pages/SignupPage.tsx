import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Award,
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { 
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { Logo } from '../components/Logo';

export const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (role === 'admin' && email !== 'rkithub@gmail.com') {
        throw new Error('Only authorized emails can register as Admin/Recruiter');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      // Create user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
        email,
        role,
        createdAt: serverTimestamp(),
      });

      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      <SEO 
        title="Sign Up | Student Portal"
        description="Create an RK IT HUB student account to enroll in courses, access materials, and start your IT career journey."
      />
      
      {/* LEFT PANEL - Immersive Animated Experience */}
      <div className="hidden lg:flex flex-1 bg-[#0B132B] items-center justify-center p-12 relative overflow-hidden">
        {/* Background Gradients and Orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B]"></div>
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Ambient Grid Texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54 48L54 60L48 60L48 48L54 48ZM24 48L24 60L18 60L18 48L24 48ZM54 24L54 36L48 36L48 24L54 24ZM24 24L24 36L18 36L18 24L24 24ZM54 0L54 12L48 12L48 0L54 0ZM24 0L24 12L18 12L18 0L24 0Z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 max-w-4xl w-full flex flex-col justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center self-start">
            <Logo light={true} />
          </Link>

          {/* Center Content with Lottie */}
          <div className="grid lg:grid-cols-2 gap-12 items-center my-auto">
            
            {/* Left Side: Text and Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-300 mb-6 shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
                </span>
                Start Your IT Journey
              </div>
              
              <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Start Your IT Journey.
              </h2>
              
              {/* Feature List */}
              <div className="space-y-4 mt-8">
                {[
                  { icon: Award, text: "Earn verified certifications" },
                  { icon: Zap, text: "Learn from industry experts" },
                  { icon: Users, text: "Join a community of 12,000+ peers" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Lottie Animation in Glassmorphism Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              {/* Glow Behind */}
              <div className="absolute w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[80px] z-0" />
              
              {/* Glass Container */}
              <div className="relative z-10 w-full max-w-[380px] aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl flex items-center justify-center overflow-hidden group">
                <div className="w-full h-full relative z-10">
                  <DotLottieReact
                    src="https://lottie.host/05050266-9b2f-48e0-946e-b7b692f71222/MLWt0ZL87F.lottie"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>
              
              {/* Moved side pills */}
              <motion.div 
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[-20px] top-[15%] bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider z-20"
              >
                Build
              </motion.div>
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-[-20px] bottom-1/4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider z-20"
              >
                Get Placed
              </motion.div>
              
              {/* Extra Floating Pills */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 right-10 bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg z-20"
              >
                Learn
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 left-10 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg z-20"
              >
                Join Community
              </motion.div>
            </motion.div>
          </div>

          {/* Footer/Copy */}
          <p className="text-xs text-slate-500 font-medium self-center">
            © {new Date().getFullYear()} RK IT Hub. All rights reserved.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL - Clean Premium Auth Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 bg-white relative overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">Create account</h1>
            <p className="text-slate-500 font-medium">Join our community of professional engineers.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <div className="floating-label-group">
              <input
                type="text"
                id="reg-name"
                className="floating-label-input"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="reg-name" className="floating-label">Full Name</label>
              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            </div>

            <div className="floating-label-group">
              <input
                type="email"
                id="reg-email"
                className="floating-label-input"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="reg-email" className="floating-label">Email Address</label>
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Learning Focus</label>
              <div className="grid grid-cols-2 gap-4">
                 <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`py-4 rounded-2xl border font-bold transition-all ${
                      role === 'student' 
                        ? 'border-navy-900 bg-navy-900 text-white' 
                        : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200 hover:bg-white shadow-sm'
                    }`}
                 >
                    Student
                 </button>
                 <button
                    type="button"
                    onClick={() => setRole('admin')}
                    className={`py-4 rounded-2xl border font-bold transition-all ${
                      role === 'admin' 
                        ? 'border-navy-900 bg-navy-900 text-white' 
                        : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200 hover:bg-white shadow-sm'
                    }`}
                 >
                    Recruiter
                 </button>
              </div>
            </div>

            <div className="floating-label-group">
              <input
                type={showPassword ? "text" : "password"}
                id="reg-pass"
                className="floating-label-input"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="reg-pass" className="floating-label">Password</label>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full shadow-navy-900/10 mt-4 h-12 relative overflow-hidden group"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Create my account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-slate-500 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-extrabold hover:text-blue-700 transition-colors">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
