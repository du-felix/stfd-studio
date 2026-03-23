import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../AdminLayout';
import { apiGet, apiDelete } from '../api';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Case {
  id: number;
  title: string;
  client: string;
  project_type: string;
  year: number;
  slug: string;
  is_featured: boolean;
}

export default function CasesList() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet('/admin/cases/').then(data => {
      setCases(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }, []);

  async function handleDelete(id: number, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await apiDelete(`/admin/cases/${id}/`);
    setCases(prev => prev.filter(c => c.id !== id));
  }

  return (
    <AdminLayout>
      <div className="px-8 py-8 border-b border-border bg-white flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light tracking-tight">Cases</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">{cases.length} case studies</p>
        </div>
        <Link
          to="/admin/cases/new"
          className="inline-flex items-center gap-2 font-sans text-sm bg-[#111] text-white px-4 h-9 hover:bg-[#333] transition-colors"
        >
          <Plus size={14} /> New case
        </Link>
      </div>

      <div className="px-8 py-6">
        {loading ? (
          <p className="font-sans text-sm text-muted-foreground">Loading…</p>
        ) : cases.length === 0 ? (
          <div className="bg-white border border-border p-12 text-center">
            <p className="font-sans text-sm text-muted-foreground">No cases yet.</p>
            <Link to="/admin/cases/new" className="font-sans text-sm text-foreground underline mt-2 inline-block">Add the first one</Link>
          </div>
        ) : (
          <div className="bg-white border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground px-6 py-3">Title</th>
                  <th className="text-left font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground px-6 py-3 hidden md:table-cell">Client</th>
                  <th className="text-left font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground px-6 py-3 hidden md:table-cell">Type</th>
                  <th className="text-left font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground px-6 py-3">Year</th>
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody>
                {cases.map(c => (
                  <tr key={c.id} className="border-b border-border last:border-0 hover:bg-[#fafaf8] transition-colors">
                    <td className="px-6 py-4 font-sans text-sm font-medium">{c.title}</td>
                    <td className="px-6 py-4 font-sans text-sm text-muted-foreground hidden md:table-cell">{c.client}</td>
                    <td className="px-6 py-4 font-sans text-sm text-muted-foreground hidden md:table-cell">{c.project_type}</td>
                    <td className="px-6 py-4 font-sans text-sm text-muted-foreground">{c.year}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 justify-end">
                        <Link
                          to={`/admin/cases/${c.id}`}
                          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Pencil size={14} />
                        </Link>
                        <button
                          onClick={() => handleDelete(c.id, c.title)}
                          className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
