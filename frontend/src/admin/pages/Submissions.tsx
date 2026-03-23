import { useEffect, useState } from 'react';
import AdminLayout from '../AdminLayout';
import { apiGet, apiPatch } from '../api';

interface Inquiry {
  id: number; name: string; company: string; email: string;
  website: string; package: string; brief: string;
  source: string; status: string; created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-[#C8FF00] text-[#111]',
  contacted: 'bg-blue-100 text-blue-800',
  qualified: 'bg-purple-100 text-purple-800',
  closed: 'bg-gray-100 text-gray-600',
};

export default function Submissions() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Inquiry | null>(null);

  useEffect(() => {
    apiGet('/admin/inquiries/').then(data => {
      setItems(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }, []);

  async function updateStatus(id: number, status: string) {
    const updated = await apiPatch(`/admin/inquiries/${id}/`, { status });
    setItems(prev => prev.map(i => i.id === id ? updated : i));
    if (selected?.id === id) setSelected(updated);
  }

  return (
    <AdminLayout>
      <div className="px-8 py-8 border-b border-border bg-white">
        <h1 className="font-serif text-3xl font-light tracking-tight">Submissions</h1>
        <p className="font-sans text-sm text-muted-foreground mt-1">{items.length} total · {items.filter(i => i.status === 'new').length} new</p>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* List */}
        <div className="w-80 shrink-0 border-r border-border bg-white overflow-y-auto">
          {loading && <p className="px-5 py-4 font-sans text-sm text-muted-foreground">Loading…</p>}
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`w-full text-left px-5 py-4 border-b border-border hover:bg-[#fafaf8] transition-colors ${selected?.id === item.id ? 'bg-[#fafaf8]' : ''}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-sans text-sm font-medium truncate">{item.name}</p>
                  <p className="font-sans text-xs text-muted-foreground truncate">{item.company}</p>
                </div>
                <span className={`font-sans text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 shrink-0 ${STATUS_COLORS[item.status] || STATUS_COLORS.new}`}>
                  {item.status}
                </span>
              </div>
              <p className="font-sans text-[10px] text-muted-foreground/50 mt-1.5">
                {new Date(item.created_at).toLocaleDateString()}
              </p>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {!selected ? (
            <div className="flex items-center justify-center h-full">
              <p className="font-sans text-sm text-muted-foreground">Select a submission to view details.</p>
            </div>
          ) : (
            <div className="max-w-xl flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-light tracking-tight">{selected.name}</h2>
                  <p className="font-sans text-sm text-muted-foreground mt-1">{selected.company} · {selected.email}</p>
                </div>
                <select
                  value={selected.status}
                  onChange={e => updateStatus(selected.id, e.target.value)}
                  className="border border-border font-sans text-sm px-3 py-2 bg-white outline-none focus:border-foreground/40"
                >
                  {['new', 'contacted', 'qualified', 'closed'].map(s => (
                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                  ))}
                </select>
              </div>

              {[
                { label: 'Package', value: selected.package },
                { label: 'Website', value: selected.website || '—' },
                { label: 'Source', value: selected.source },
                { label: 'Submitted', value: new Date(selected.created_at).toLocaleString() },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{label}</span>
                  <span className="font-sans text-sm text-foreground">{value}</span>
                </div>
              ))}

              <div className="flex flex-col gap-1">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Brief</span>
                <p className="font-sans text-sm text-foreground leading-relaxed whitespace-pre-wrap border border-border p-4 bg-[#fafaf8]">{selected.brief}</p>
              </div>

              <a
                href={`mailto:${selected.email}`}
                className="inline-flex items-center justify-center gap-2 font-sans text-sm bg-[#111] text-white h-10 px-6 hover:bg-[#333] transition-colors w-fit"
              >
                Reply via email
              </a>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
