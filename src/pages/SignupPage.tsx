import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  AlertCircle,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { 
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
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
      <div className="hidden lg:flex flex-1 bg-navy-900 items-center justify-center p-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-5"></div>
        <div className="relative z-10 max-w-lg">
           <Link to="/" className="flex items-center gap-2 mb-16">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <BookOpen size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">RK IT Hub</span>
            </Link>
            <h2 className="text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">Start Your IT Journey.</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Join 12,000+ engineers building the next generation of software systems.
            </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 bg-white overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">Create account</h1>
            <p className="text-slate-500 font-medium">Join our community of professional engineers.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-8">
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
                        : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200 shadow-sm'
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
                        : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200 shadow-sm'
                    }`}
                 >
                    Recruiter
                 </button>
              </div>
            </div>

            <div className="floating-label-group">
              <input
                type="password"
                id="reg-pass"
                className="floating-label-input"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="reg-pass" className="floating-label">Password</label>
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full shadow-navy-900/10 mt-4"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : 'Create my account'}
            </button>
          </form>

          <p className="mt-12 text-center text-slate-500 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-extrabold hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
