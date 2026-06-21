import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Logo } from '../components/Logo';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await sendPasswordResetEmail(auth, email);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-slate-100"
      >
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center mb-10">
            <Logo imageClassName="h-9 w-auto object-contain" />
          </Link>
          {submitted ? (
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-100">
              <CheckCircle2 size={32} />
            </div>
          ) : (
            <div className="w-16 h-16 bg-navy-50 text-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-navy-100">
              <Mail size={32} />
            </div>
          )}
          <h1 className="text-3xl font-extrabold text-navy-900 mb-3 tracking-tight">
            {submitted ? 'Check your email' : 'Forgot password?'}
          </h1>
          <p className="text-slate-500 font-medium">
            {submitted 
              ? `We've sent a password reset link to ${email}`
              : "No worries, we'll send you reset instructions."}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600 text-sm font-medium">
                <AlertCircle size={18} className="shrink-0" />
                <p>{error}</p>
              </div>
            )}
            <div className="floating-label-group">
              <input
                type="email"
                id="reset-email"
                className="floating-label-input"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="reset-email" className="floating-label">Email Address</label>
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-navy-900 text-white rounded-2xl font-bold hover:bg-navy-800 transition-all shadow-xl shadow-slate-300"
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
          </form>
        ) : (
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-4 bg-navy-900 text-white rounded-2xl font-bold hover:bg-navy-800 transition-all shadow-xl shadow-slate-300"
          >
            Resend Email
          </button>
        )}

        <div className="mt-10 text-center">
          <Link to="/login" className="text-slate-500 hover:text-navy-900 font-bold flex items-center justify-center gap-2 transition-colors">
            <ArrowLeft size={16} /> Back to login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
