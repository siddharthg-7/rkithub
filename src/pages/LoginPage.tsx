import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Chrome,
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Globe,
  Users,
  Briefcase
} from 'lucide-react';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Logo } from '../components/Logo';
import { SEO } from '../components/SEO';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      <SEO 
        title="Login | Student Portal"
        description="Log in to your RK IT HUB student portal to access your courses, projects, and placement updates."
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
                Trusted by 12,000+ learners
              </div>
              
              <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Master the Future of Tech.
              </h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {[
                  { icon: Globe, text: "150+ Hiring Partners" },
                  { icon: CheckCircle2, text: "98% Placement Support" },
                  { icon: Briefcase, text: "Industry-Level Projects" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                    <stat.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium text-slate-300">{stat.text}</span>
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
                    src="https://lottie.host/7e7a8756-699d-49b1-ba7f-34c199f362f2/RSeQFqXzNC.lottie"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>
              
              {/* Extra Floating Pills outside */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 right-10 bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg z-20"
              >
                Cloud
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 left-10 bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg z-20"
              >
                Placement Ready
              </motion.div>
              
              {/* Moved side pills */}
              <motion.div 
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[-20px] top-[15%] bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider z-20"
              >
                AI Learning
              </motion.div>
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-[-20px] bottom-1/4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider z-20"
              >
                Full Stack
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
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 bg-white relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">Welcome back</h1>
            <p className="text-slate-500 font-medium">Continue your professional journey today.</p>
          </div>

          {/* Google Button */}
          <button
            onClick={signInWithGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl text-navy-900 font-bold hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all mb-8 group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-[10px]">
              <span className="px-4 bg-white text-slate-400 font-bold uppercase tracking-widest">or email login</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600 text-sm font-medium">
                <AlertCircle size={18} className="shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <div className="floating-label-group">
              <input
                type="email"
                id="login-email"
                className="floating-label-input"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="login-email" className="floating-label">Email Address</label>
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500" size={18} />
            </div>

            <div className="space-y-4">
              <div className="floating-label-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="login-pass"
                  className="floating-label-input"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="login-pass" className="floating-label">Password</label>
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-bold text-slate-500 group-hover:text-navy-900 transition-colors">Stay signed in</span>
                </label>
                <Link to="/forgot-password" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot?
                </Link>
              </div>
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
                  Sign in to my account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-slate-500 font-medium">
            New here?{' '}
            <Link to="/signup" className="text-blue-600 font-extrabold hover:text-blue-700 transition-colors">
              Create an account
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
