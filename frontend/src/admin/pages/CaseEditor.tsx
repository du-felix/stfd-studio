import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AdminLayout from '../AdminLayout';
import { apiGet, apiPut, apiPost } from '../api';
import { ArrowLeft, Save } from 'lucide-react';

interface FormState {
  title: string; client: string; project_type: string; year: string;
  slug: string; accent_color: string; url: string; has_cover: boolean;
  brief_headline: string; brief_body: string;
  approach_headline: string; approach_body: string;
  outcomes: string; scope: string; tags: string;
  testimonial_quote: string; testimonial_author: string; testimonial_role: string;
  highlights: string; is_featured: boolean; order: string;
}

const EMPTY: FormState = {
  title: '', client: '', project_type: '', year: new Date().getFullYear().toString(),
  slug: '', accent_color: '#C8FF00', url: '', has_cover: false,
  brief_headline: '', brief_body: '',
  approach_headline: '', approach_body: '',
  outcomes: '', scope: '', tags: '',
  testimonial_quote: '', testimonial_author: '', testimonial_role: '',
  highlights: '', is_featured: false, order: '0',
};

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</label>
      {hint && <p className="font-sans text-xs text-muted-foreground/60 -mt-0.5">{hint}</p>}
      {children}
    </div>
  );
}

const inputCls = "w-full border border-border bg-white font-sans text-sm px-3 py-2 outline-none focus:border-foreground/40 transition-colors";
const textareaCls = inputCls + " resize-none";

export default function CaseEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = id === 'new';
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isNew) {
      apiGet(`/admin/cases/${id}/`).then(data => {
        setForm({
          title: data.title || '',
          client: data.client || '',
          project_type: data.project_type || '',
          year: String(data.year || ''),
          slug: data.slug || '',
          accent_color: data.accent_color || '#C8FF00',
          url: data.url || '',
          has_cover: !!data.has_cover,
          brief_headline: data.brief_headline || '',
          brief_body: data.brief_body || '',
          approach_headline: data.approach_headline || '',
          approach_body: data.approach_body || '',
          outcomes: Array.isArray(data.outcomes) ? data.outcomes.join('\n') : '',
          scope: Array.isArray(data.scope) ? data.scope.join('\n') : '',
          tags: Array.isArray(data.tags) ? data.tags.join(', ') : '',
          testimonial_quote: data.testimonial_quote || '',
          testimonial_author: data.testimonial_author || '',
          testimonial_role: data.testimonial_role || '',
          highlights: Array.isArray(data.highlights) ? JSON.stringify(data.highlights, null, 2) : '',
          is_featured: !!data.is_featured,
          order: String(data.order || '0'),
        });
        setLoading(false);
      });
    }
  }, [id, isNew]);

  function set(key: keyof FormState, value: string | boolean) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    setSaving(true);
    setError('');
    try {
      const payload = {
        ...form,
        year: parseInt(form.year) || new Date().getFullYear(),
        order: parseInt(form.order) || 0,
        outcomes: form.outcomes.split('\n').map(s => s.trim()).filter(Boolean),
        scope: form.scope.split('\n').map(s => s.trim()).filter(Boolean),
        tags: form.tags.split(',').map(s => s.trim()).filter(Boolean),
        highlights: form.highlights ? JSON.parse(form.highlights) : [],
      };
      if (isNew) {
        const created = await apiPost('/admin/cases/', payload);
        navigate(`/admin/cases/${created.id}`);
      } else {
        await apiPut(`/admin/cases/${id}/`, payload);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed. Check the form and try again.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <AdminLayout><div className="px-8 py-8 font-sans text-sm text-muted-foreground">Loading…</div></AdminLayout>;

  return (
    <AdminLayout>
      <div className="px-8 py-6 border-b border-border bg-white flex items-center justify-between gap-4 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/admin/cases" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
          </Link>
          <h1 className="font-serif text-2xl font-light tracking-tight">{isNew ? 'New case' : (form.title || 'Edit case')}</h1>
        </div>
        <div className="flex items-center gap-3">
          {error && <p className="font-sans text-xs text-red-500">{error}</p>}
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 font-sans text-sm bg-[#111] text-white px-4 h-9 hover:bg-[#333] transition-colors disabled:opacity-50"
          >
            <Save size={14} /> {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>

      <div className="px-8 py-8 max-w-3xl flex flex-col gap-10">

        {/* Basic info */}
        <section className="flex flex-col gap-5">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-3">Basic Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Title"><input className={inputCls} value={form.title} onChange={e => set('title', e.target.value)} placeholder="e.g. Meridian Capital" /></Field>
            <Field label="Client"><input className={inputCls} value={form.client} onChange={e => set('client', e.target.value)} placeholder="e.g. Meridian Capital Partners" /></Field>
            <Field label="Category / Type"><input className={inputCls} value={form.project_type} onChange={e => set('project_type', e.target.value)} placeholder="e.g. Finance" /></Field>
            <Field label="Year"><input className={inputCls} value={form.year} onChange={e => set('year', e.target.value)} type="number" placeholder="2026" /></Field>
            <Field label="Slug" hint="Auto-generated from title if left blank"><input className={inputCls} value={form.slug} onChange={e => set('slug', e.target.value)} placeholder="e.g. meridian-capital" /></Field>
            <Field label="Accent color"><div className="flex gap-2"><input type="color" value={form.accent_color} onChange={e => set('accent_color', e.target.value)} className="h-9 w-12 border border-border cursor-pointer bg-white" /><input className={inputCls} value={form.accent_color} onChange={e => set('accent_color', e.target.value)} /></div></Field>
            <Field label="Tags" hint="Comma-separated"><input className={inputCls} value={form.tags} onChange={e => set('tags', e.target.value)} placeholder="Landing Page, Brand System" /></Field>
            <Field label="Live URL"><input className={inputCls} value={form.url} onChange={e => set('url', e.target.value)} placeholder="https://..." /></Field>
          </div>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 font-sans text-sm text-muted-foreground cursor-pointer"><input type="checkbox" checked={form.is_featured} onChange={e => set('is_featured', e.target.checked)} /> Featured</label>
            <label className="flex items-center gap-2 font-sans text-sm text-muted-foreground cursor-pointer"><input type="checkbox" checked={form.has_cover} onChange={e => set('has_cover', e.target.checked)} /> Show cover image</label>
          </div>
        </section>

        {/* Brief */}
        <section className="flex flex-col gap-5">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-3">The Brief</h2>
          <Field label="Headline"><textarea className={textareaCls} rows={2} value={form.brief_headline} onChange={e => set('brief_headline', e.target.value)} placeholder="A single compelling sentence that frames the challenge." /></Field>
          <Field label="Body"><textarea className={textareaCls} rows={7} value={form.brief_body} onChange={e => set('brief_body', e.target.value)} placeholder="The full problem statement — 3 to 5 paragraphs." /></Field>
        </section>

        {/* Approach */}
        <section className="flex flex-col gap-5">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-3">Our Approach</h2>
          <Field label="Pull quote headline"><textarea className={textareaCls} rows={2} value={form.approach_headline} onChange={e => set('approach_headline', e.target.value)} placeholder="The punchy headline shown in the dark pull quote block." /></Field>
          <Field label="Body"><textarea className={textareaCls} rows={7} value={form.approach_body} onChange={e => set('approach_body', e.target.value)} placeholder="How you solved it — the full approach narrative." /></Field>
        </section>

        {/* Outcomes */}
        <section className="flex flex-col gap-5">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-3">Outcomes</h2>
          <Field label="Outcomes" hint="One outcome per line"><textarea className={textareaCls} rows={5} value={form.outcomes} onChange={e => set('outcomes', e.target.value)} placeholder={"Conversion rate increased 3.2×\nSession duration up 47%"} /></Field>
          <Field label="Scope" hint="One item per line"><textarea className={textareaCls} rows={4} value={form.scope} onChange={e => set('scope', e.target.value)} placeholder={"Strategy\nCopywriting\nVisual Design"} /></Field>
        </section>

        {/* Testimonial */}
        <section className="flex flex-col gap-5">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-3">Testimonial (optional)</h2>
          <Field label="Quote"><textarea className={textareaCls} rows={3} value={form.testimonial_quote} onChange={e => set('testimonial_quote', e.target.value)} placeholder="The client's quote." /></Field>
          <div className="grid grid-cols-2 gap-5">
            <Field label="Author"><input className={inputCls} value={form.testimonial_author} onChange={e => set('testimonial_author', e.target.value)} placeholder="Jane Smith" /></Field>
            <Field label="Role"><input className={inputCls} value={form.testimonial_role} onChange={e => set('testimonial_role', e.target.value)} placeholder="CEO, Company Name" /></Field>
          </div>
        </section>

        {/* Highlights */}
        <section className="flex flex-col gap-5">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-3">Highlights (optional)</h2>
          <Field label="Highlights JSON" hint='Array of {"label": "...", "value": "..."} objects'>
            <textarea className={`${textareaCls} font-mono text-xs`} rows={6} value={form.highlights} onChange={e => set('highlights', e.target.value)} placeholder={'[\n  {"label": "Duration", "value": "48 hours"},\n  {"label": "Location", "value": "Zurich"}\n]'} />
          </Field>
        </section>

      </div>
    </AdminLayout>
  );
}
