import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { db } from '../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Bell, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  createdAt: any;
}

export const StudentNotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const q = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const notifs: Notification[] = [];
        querySnapshot.forEach((doc) => {
          notifs.push({ id: doc.id, ...doc.data() } as Notification);
        });
        setNotifications(notifs);
      } catch (err) {
        console.error("Error fetching notifications", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="text-amber-500" />;
      case 'success': return <CheckCircle2 className="text-emerald-500" />;
      default: return <Info className="text-blue-500" />;
    }
  };

  const getBg = (type: string) => {
    switch (type) {
      case 'warning': return 'bg-amber-50 border-amber-100';
      case 'success': return 'bg-emerald-50 border-emerald-100';
      default: return 'bg-blue-50 border-blue-100';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-10">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">Notifications</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">Updates, announcements, and alerts from the admin team.</p>
        </header>

        <div className="max-w-3xl space-y-6">
          {loading ? (
            <div className="flex justify-center p-20">
              <div className="w-8 h-8 border-4 border-navy-900/20 border-t-navy-900 rounded-full animate-spin" />
            </div>
          ) : notifications.length === 0 ? (
            <div className="bg-white rounded-[2.5rem] p-12 text-center border border-slate-100 shadow-sm">
              <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bell size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">You're all caught up!</h3>
              <p className="text-slate-500 font-medium">There are no new notifications at this time.</p>
            </div>
          ) : (
            notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`rounded-[2rem] p-8 border shadow-sm flex gap-6 items-start transition-all hover:shadow-md ${getBg(notif.type)}`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center shadow-sm">
                  {getIcon(notif.type)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-navy-900">{notif.title}</h3>
                    <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full shadow-sm">
                      {notif.createdAt ? new Date(notif.createdAt.seconds * 1000).toLocaleString() : 'Just now'}
                    </span>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed whitespace-pre-wrap">{notif.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};
