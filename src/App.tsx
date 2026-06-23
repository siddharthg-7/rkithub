import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { StudentNotificationsPage } from './pages/StudentNotificationsPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminCoursesPage } from './pages/AdminCoursesPage';
import { AdminNotificationsPage } from './pages/AdminNotificationsPage';
import { PublicLayout } from './components/PublicLayout';

import { InternshipsPage } from './pages/InternshipsPage';
import { JavaFullStackPage } from './pages/JavaFullStackPage';
import { PythonFullStackPage } from './pages/PythonFullStackPage';
import { MernStackPage } from './pages/MernStackPage';
import { DataSciencePage } from './pages/DataSciencePage';
import { AiMlPage } from './pages/AiMlPage';
import { SeleniumPage } from './pages/SeleniumPage';
import { CypressPage } from './pages/CypressPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          {/* Public Routes with Navbar and Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/courses/java-full-stack" element={<JavaFullStackPage />} />
            <Route path="/courses/python-full-stack" element={<PythonFullStackPage />} />
            <Route path="/courses/mern-stack" element={<MernStackPage />} />
            <Route path="/courses/data-science" element={<DataSciencePage />} />
            <Route path="/courses/ai-ml" element={<AiMlPage />} />
            <Route path="/courses/selenium" element={<SeleniumPage />} />
            <Route path="/courses/cypress" element={<CypressPage />} />
            <Route path="/courses/:slug" element={<CourseDetailsPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
          </Route>

          {/* Protected Student Routes */}
          <Route element={<ProtectedRoute roles={['student', 'admin']} />}>
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/notifications" element={<StudentNotificationsPage />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute roles={['admin']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/courses" element={<AdminCoursesPage />} />
            <Route path="/admin/notifications" element={<AdminNotificationsPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
