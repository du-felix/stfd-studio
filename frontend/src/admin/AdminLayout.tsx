import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from './api';
import { LayoutDashboard, FolderOpen, Users, Inbox, FileText, LogOut, ExternalLink } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: FolderOpen, label: 'Cases', href: '/admin/cases' },
  { icon: Users, label: 'Team', href: '/admin/team' },
  { icon: Inbox, label: 'Submissions', href: '/admin/submissions' },
  { icon: FileText, label: 'Content', href: '/admin/content' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/admin/login');
  }

  return (
    <div className="flex min-h-screen bg-[#F8F8F6]">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 bg-[#111111] flex flex-col">
        <div className="px-5 py-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2.5 leading-none">
            <span className="font-serif text-lg font-semibold text-white tracking-tight">stfd.</span>
            <span className="w-px h-3.5 bg-white/20" />
            <span className="text-[9px] tracking-[0.35em] uppercase text-white/40 pb-px">Studio</span>
          </Link>
          <p className="font-sans text-[10px] text-white/30 tracking-[0.2em] uppercase mt-2">Admin</p>
        </div>

        <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5">
          {navItems.map(({ icon: Icon, label, href }) => {
            const active = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                to={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm font-sans transition-colors ${
                  active ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={15} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-white/10 flex flex-col gap-0.5">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-sans text-white/50 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ExternalLink size={15} />
            View site
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-sans text-white/50 hover:text-white hover:bg-white/5 transition-colors w-full text-left"
          >
            <LogOut size={15} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {children}
      </main>
    </div>
  );
}
