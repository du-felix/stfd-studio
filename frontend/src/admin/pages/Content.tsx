import { useEffect, useState } from 'react';
import AdminLayout from '../AdminLayout';
import { apiGet, apiPut } from '../api';
import { Save } from 'lucide-react';

interface ContentBlock {
  id: number; page: string; key: string; label: string; value: string;
}

const PAGE_LABELS: Record<string, string> = { home: 'Home', about: 'About', pricing: 'Pricing' };

export default function Content() {
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    apiGet('/admin/content/').then(data => {
      setBlocks(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }, []);

  function update(id: number, value: string) {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, value } : b));
  }

  async function saveAll() {
    setSaving(true);
    setSaved(false);
    await apiPut('/admin/content/', blocks.map(b => ({ id: b.id, value: b.value })));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const pages = [...new Set(blocks.map(b => b.page))];

  return (
    <AdminLayout>
      <div className="px-8 py-8 border-b border-border bg-white flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light tracking-tight">Page Content</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">Edit text across your pages.</p>
        </div>
        <button
          onClick={saveAll}
          disabled={saving || loading}
          className="inline-flex items-center gap-2 font-sans text-sm px-4 h-9 transition-colors disabled:opacity-50"
          style={{ backgroundColor: saved ? '#C8FF00' : '#111', color: saved ? '#111' : 'white' }}
        >
          <Save size={14} /> {saving ? 'Saving…' : saved ? 'Saved!' : 'Save all'}
        </button>
      </div>

      <div className="px-8 py-8 flex flex-col gap-10 max-w-3xl">
        {loading ? (
          <p className="font-sans text-sm text-muted-foreground">Loading…</p>
        ) : (
          pages.map(page => (
            <section key={page}>
              <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-3 mb-5">
                {PAGE_LABELS[page] || page}
              </h2>
              <div className="flex flex-col gap-5">
                {blocks.filter(b => b.page === page).map(block => (
                  <div key={block.id} className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{block.label || block.key}</label>
                    <textarea
                      className="w-full border border-border bg-white font-sans text-sm px-3 py-2 outline-none focus:border-foreground/40 transition-colors resize-none"
                      rows={block.value.length > 100 ? 4 : 2}
                      value={block.value}
                      onChange={e => update(block.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </AdminLayout>
  );
}
