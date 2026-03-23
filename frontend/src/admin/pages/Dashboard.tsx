import { useEffect, useState } from 'react';
import AdminLayout from '../AdminLayout';
import { apiGet } from '../api';
import { Link } from 'react-router-dom';
import { FolderOpen, Inbox, Users, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const [cases, setCases] = useState<unknown[]>([]);
  const [submissions, setSubmissions] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      apiGet('/admin/cases/').catch(() => []),
      apiGet('/admin/inquiries/').catch(() => []),
    ]).then(([c, s]) => {
      setCases(Array.isArray(c) ? c : []);
      setSubmissions(Array.isArray(s) ? s : []);
      setLoading(false);
    });
  }, []);

  const stats = [
    { icon: FolderOpen, label: 'Cases', value: cases.length, href: '/admin/cases', color: '#C8FF00' },
    { icon: Inbox, label: 'Submissions', value: submissions.length, href: '/admin/submissions', color: '#6366f1' },
    { icon: Users, label: 'Team members', value: 2, href: '/admin/team', color: '#C8903A' },
  ];

  type Submission = { id: number; name: string; company: string; package: string; created_at: string; status: string };
  const newSubs = (submissions as unknown as Submission[]).filter(s => s.status === 'new');

  return (
    <AdminLayout>
      <div className="px-8 py-8 border-b border-border bg-white">
        <h1 className="font-serif text-3xl font-light tracking-tight">Dashboard</h1>
        <p className="font-sans text-sm text-muted-foreground mt-1">Welcome back.</p>
      </div>

      <div className="px-8 py-8 flex flex-col gap-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(({ icon: Icon, label, value, href, color }) => (
            <Link
              key={label}
              to={href}
              className="bg-white border border-border p-6 flex items-center justify-between hover:border-foreground/30 transition-colors group"
            >
              <div>
                <p className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase">{label}</p>
                <p className="font-serif text-4xl font-light mt-1" style={{ color }}>{loading ? '—' : value}</p>
              </div>
              <Icon size={20} className="text-muted-foreground/30 group-hover:text-muted-foreground transition-colors" />
            </Link>
          ))}
        </div>

        {/* New submissions */}
        {newSubs.length > 0 && (
          <div className="bg-white border border-border">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h2 className="font-sans text-sm font-medium">New submissions</h2>
              <Link to="/admin/submissions" className="font-sans text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                View all <ArrowRight size={12} />
              </Link>
            </div>
            {newSubs.slice(0, 5).map((s) => (
              <div key={s.id} className="flex items-center justify-between px-6 py-4 border-b border-border last:border-0">
                <div>
                  <p className="font-sans text-sm font-medium">{s.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{s.company} · {s.package}</p>
                </div>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  {new Date(s.created_at).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/admin/cases/new" className="bg-white border border-border px-6 py-5 hover:border-foreground/30 transition-colors group flex items-center justify-between">
            <div>
              <p className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase">New</p>
              <p className="font-sans text-sm font-medium mt-1">Add a case</p>
            </div>
            <ArrowRight size={16} className="text-muted-foreground/30 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/admin/team" className="bg-white border border-border px-6 py-5 hover:border-foreground/30 transition-colors group flex items-center justify-between">
            <div>
              <p className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase">Edit</p>
              <p className="font-sans text-sm font-medium mt-1">Update team</p>
            </div>
            <ArrowRight size={16} className="text-muted-foreground/30 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
