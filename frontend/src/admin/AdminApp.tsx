import { Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './api';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CasesList from './pages/CasesList';
import CaseEditor from './pages/CaseEditor';
import Team from './pages/Team';
import Submissions from './pages/Submissions';
import Content from './pages/Content';

function RequireAuth({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}

export default function AdminApp() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="cases" element={<RequireAuth><CasesList /></RequireAuth>} />
      <Route path="cases/:id" element={<RequireAuth><CaseEditor /></RequireAuth>} />
      <Route path="team" element={<RequireAuth><Team /></RequireAuth>} />
      <Route path="submissions" element={<RequireAuth><Submissions /></RequireAuth>} />
      <Route path="content" element={<RequireAuth><Content /></RequireAuth>} />
    </Routes>
  );
}
