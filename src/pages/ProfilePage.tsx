import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../contexts/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { updateProfile as updateAuthProfile } from 'firebase/auth';
import { User, Mail, Save, AlertCircle, CheckCircle2 } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { profile } = useAuth();
  const [name, setName] = useState(profile?.name || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Keep local name in sync when profile loads from context
  useEffect(() => {
    if (profile?.name) setName(profile.name);
  }, [profile?.name]);

  // Auto-clear success message after 3 seconds
  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(''), 3000);
    return () => clearTimeout(timer);
  }, [success]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (auth.currentUser) {
        await updateAuthProfile(auth.currentUser, { displayName: name });
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
          name: name
        });
        setSuccess('Profile updated successfully');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-10">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">My Profile</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">Manage your personal information.</p>
        </header>

        <div className="max-w-2xl bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
          <form onSubmit={handleUpdate} className="space-y-8">
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100">
                <AlertCircle size={18} />
                {error}
              </div>
            )}
            {success && (
              <div className="p-4 bg-green-50 text-green-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-green-100">
                <CheckCircle2 size={18} />
                {success}
              </div>
            )}

            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-600/20">
                {profile?.name?.charAt(0) ?? '?'}
              </div>
              <div>
                <p className="text-xl font-bold text-navy-900">{profile?.name ?? ''}</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{profile?.role ?? ''}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="floating-label-group">
                <input
                  type="text"
                  id="profile-name"
                  className="floating-label-input"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="profile-name" className="floating-label">Full Name</label>
                <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              </div>

              <div className="floating-label-group">
                <input
                  type="email"
                  id="profile-email"
                  className="floating-label-input bg-slate-50"
                  placeholder=" "
                  value={profile?.email || ''}
                  disabled
                />
                <label htmlFor="profile-email" className="floating-label">Email Address (Read Only)</label>
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <Save size={18} />
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
