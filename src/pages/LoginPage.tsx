import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Chrome,
  AlertCircle,
  BookOpen
} from 'lucide-react';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { auth } from '../lib/firebase';

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
      <div className="hidden lg:flex flex-1 bg-navy-900 items-center justify-center p-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-5"></div>
        <div className="relative z-10 max-w-lg">
           <Link to="/" className="flex items-center gap-2 mb-16">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <BookOpen size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">RK IT Hub</span>
            </Link>
            <h2 className="text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">Master the Future of Tech.</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Join 12,000+ engineers building the next generation of software systems.
            </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">Welcome back</h1>
            <p className="text-slate-500 font-medium">Continue your professional journey today.</p>
          </div>

          <button
            onClick={signInWithGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl text-navy-900 font-bold hover:bg-slate-50 transition-all mb-8 shadow-sm"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg" alt="Google" className="w-5 h-5" />
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

          <form onSubmit={handleLogin} className="space-y-8">
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
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            </div>

            <div className="space-y-4">
              <div className="floating-label-group">
                <input
                  type="password"
                  id="login-pass"
                  className="floating-label-input"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="login-pass" className="floating-label">Password</label>
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              </div>
              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-bold text-slate-500 group-hover:text-navy-900">Stay signed in</span>
                </label>
                <Link to="/forgot-password" size={14} className="text-sm font-bold text-blue-600 hover:underline">
                  Forgot?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full shadow-navy-900/10 mt-4"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : 'Sign in to my account'}
            </button>
          </form>

          <p className="mt-12 text-center text-slate-500 font-medium">
            New here?{' '}
            <Link to="/signup" className="text-blue-600 font-extrabold hover:underline">
              Create an account
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
