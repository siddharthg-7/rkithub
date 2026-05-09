import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { BookOpen, AlertCircle, CheckCircle2, Save } from 'lucide-react';

export const AdminCoursesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [course, setCourse] = useState({
    title: '',
    instructor: '',
    slug: '',
    description: '',
    image: '',
    difficulty: 'Beginner',
    category: 'Full Stack',
  });

  const handleAddCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await addDoc(collection(db, 'courses'), {
        ...course,
        createdAt: serverTimestamp(),
      });
      setSuccess('Course added successfully');
      setCourse({
        title: '',
        instructor: '',
        slug: '',
        description: '',
        image: '',
        difficulty: 'Beginner',
        category: 'Full Stack',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to add course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-10">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">Manage Courses</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">Add new educational content to the platform.</p>
        </header>

        <div className="max-w-3xl bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-navy-900 mb-8 flex items-center gap-3">
            <BookOpen className="text-blue-600" />
            Create New Course
          </h2>

          <form onSubmit={handleAddCourse} className="space-y-6">
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="floating-label-group">
                <input
                  type="text"
                  id="c-title"
                  className="floating-label-input"
                  placeholder=" "
                  value={course.title}
                  onChange={(e) => setCourse({ ...course, title: e.target.value })}
                  required
                />
                <label htmlFor="c-title" className="floating-label">Course Title</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="text"
                  id="c-slug"
                  className="floating-label-input"
                  placeholder=" "
                  value={course.slug}
                  onChange={(e) => setCourse({ ...course, slug: e.target.value })}
                  required
                />
                <label htmlFor="c-slug" className="floating-label">URL Slug (e.g., modern-react)</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="text"
                  id="c-instructor"
                  className="floating-label-input"
                  placeholder=" "
                  value={course.instructor}
                  onChange={(e) => setCourse({ ...course, instructor: e.target.value })}
                  required
                />
                <label htmlFor="c-instructor" className="floating-label">Instructor Name</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="text"
                  id="c-image"
                  className="floating-label-input"
                  placeholder=" "
                  value={course.image}
                  onChange={(e) => setCourse({ ...course, image: e.target.value })}
                  required
                />
                <label htmlFor="c-image" className="floating-label">Image URL</label>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Difficulty</label>
                <select 
                  className="w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy-900/10 transition-all text-navy-900 font-bold"
                  value={course.difficulty}
                  onChange={(e) => setCourse({ ...course, difficulty: e.target.value })}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Category</label>
                <select 
                  className="w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy-900/10 transition-all text-navy-900 font-bold"
                  value={course.category}
                  onChange={(e) => setCourse({ ...course, category: e.target.value })}
                >
                  <option value="Full Stack">Full Stack</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="Data Science">Data Science</option>
                </select>
              </div>
            </div>

            <div className="floating-label-group">
              <textarea
                id="c-desc"
                className="floating-label-input min-h-[120px] resize-none"
                placeholder=" "
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
                required
              />
              <label htmlFor="c-desc" className="floating-label">Course Description</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
            >
              <Save size={18} />
              {loading ? 'Saving...' : 'Publish Course'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
