import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { MessageSquare, AlertCircle, CheckCircle2, Send } from 'lucide-react';

export const AdminNotificationsPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [notification, setNotification] = useState({
    title: '',
    message: '',
    type: 'info',
  });

  const handleSendNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await addDoc(collection(db, 'notifications'), {
        ...notification,
        createdAt: serverTimestamp(),
      });
      setSuccess('Broadcast message sent successfully');
      setNotification({
        title: '',
        message: '',
        type: 'info',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to send broadcast');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-10">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">Send Broadcast</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">Send announcements and notifications to all students.</p>
        </header>

        <div className="max-w-3xl bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-navy-900 mb-8 flex items-center gap-3">
            <MessageSquare className="text-blue-600" />
            New Broadcast Message
          </h2>

          <form onSubmit={handleSendNotification} className="space-y-6">
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

            <div className="floating-label-group">
              <input
                type="text"
                id="n-title"
                className="floating-label-input"
                placeholder=" "
                value={notification.title}
                onChange={(e) => setNotification({ ...notification, title: e.target.value })}
                required
              />
              <label htmlFor="n-title" className="floating-label">Subject / Title</label>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message Type</label>
              <select 
                className="w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy-900/10 transition-all text-navy-900 font-bold"
                value={notification.type}
                onChange={(e) => setNotification({ ...notification, type: e.target.value })}
              >
                <option value="info">General Information</option>
                <option value="warning">Important Alert</option>
                <option value="success">Success/Achievement</option>
              </select>
            </div>

            <div className="floating-label-group">
              <textarea
                id="n-msg"
                className="floating-label-input min-h-[160px] resize-none"
                placeholder=" "
                value={notification.message}
                onChange={(e) => setNotification({ ...notification, message: e.target.value })}
                required
              />
              <label htmlFor="n-msg" className="floating-label">Broadcast Message</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-4 shadow-blue-600/20 shadow-lg"
            >
              <Send size={18} />
              {loading ? 'Sending...' : 'Send Broadcast to All Students'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
