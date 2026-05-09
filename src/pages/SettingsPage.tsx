import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../contexts/AuthContext';
import { updatePassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Lock, Save, AlertCircle, CheckCircle2, Bell, Shield, Moon } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Mock settings state
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (auth.currentUser) {
        if (newPassword.length < 6) {
          throw new Error('Password must be at least 6 characters');
        }
        await updatePassword(auth.currentUser, newPassword);
        setSuccess('Password updated successfully');
        setNewPassword('');
      }
    } catch (err: any) {
      if (err.code === 'auth/requires-recent-login') {
        setError('Please sign out and sign back in to change your password.');
      } else {
        setError(err.message || 'Failed to update password');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-10">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">Settings</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">Manage your account preferences and security.</p>
        </header>

        <div className="max-w-3xl grid gap-8">
          {/* Preferences Section */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <Shield className="text-blue-600" />
              Preferences
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy-900">
                    <Bell size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">Email Notifications</h4>
                    <p className="text-xs font-medium text-slate-500">Receive course updates and announcements</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={notifications} onChange={() => setNotifications(!notifications)} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy-900">
                    <Moon size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">Dark Mode</h4>
                    <p className="text-xs font-medium text-slate-500">Coming soon</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-not-allowed opacity-50">
                  <input type="checkbox" className="sr-only peer" disabled checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <Lock className="text-blue-600" />
              Security
            </h2>

            <form onSubmit={handleUpdatePassword} className="space-y-6">
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

              <div className="floating-label-group max-w-md">
                <input
                  type="password"
                  id="new-password"
                  className="floating-label-input"
                  placeholder=" "
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <label htmlFor="new-password" className="floating-label">New Password</label>
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              </div>

              <button
                type="submit"
                disabled={loading || !newPassword}
                className="btn-primary flex items-center gap-2"
              >
                <Save size={18} />
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
