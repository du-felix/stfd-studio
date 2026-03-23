import { useEffect, useState, useRef } from 'react';
import AdminLayout from '../AdminLayout';
import { apiGet, apiUpload } from '../api';
import { Upload, Save } from 'lucide-react';

interface Member {
  id: number; name: string; role: string; bio: string;
  photo_url: string | null; order: number;
}

const inputCls = "w-full border border-border bg-white font-sans text-sm px-3 py-2 outline-none focus:border-foreground/40 transition-colors";

export default function Team() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<number | null>(null);
  const [saved, setSaved] = useState<number | null>(null);

  useEffect(() => {
    apiGet('/admin/team/').then(data => {
      setMembers(Array.isArray(data) ? data : []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  function update(id: number, field: keyof Member, value: string) {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, [field]: value } : m));
  }

  async function save(member: Member) {
    setSaving(member.id);
    const fd = new FormData();
    fd.append('name', member.name);
    fd.append('role', member.role);
    fd.append('bio', member.bio);
    await apiUpload(`/admin/team/${member.id}/`, fd);
    setSaving(null);
    setSaved(member.id);
    setTimeout(() => setSaved(null), 2000);
  }

  async function uploadPhoto(member: Member, file: File) {
    const fd = new FormData();
    fd.append('name', member.name);
    fd.append('role', member.role);
    fd.append('bio', member.bio);
    fd.append('photo', file);
    const updated = await apiUpload(`/admin/team/${member.id}/`, fd);
    setMembers(prev => prev.map(m => m.id === member.id ? { ...m, photo_url: updated.photo_url } : m));
  }

  if (loading) return <AdminLayout><div className="px-8 py-8 font-sans text-sm text-muted-foreground">Loading…</div></AdminLayout>;

  return (
    <AdminLayout>
      <div className="px-8 py-8 border-b border-border bg-white">
        <h1 className="font-serif text-3xl font-light tracking-tight">Team</h1>
        <p className="font-sans text-sm text-muted-foreground mt-1">Edit team member profiles and upload photos.</p>
      </div>

      <div className="px-8 py-8 flex flex-col gap-6 max-w-3xl">
        {members.length === 0 && (
          <div className="bg-white border border-border p-8 text-center">
            <p className="font-sans text-sm text-muted-foreground">No team members found. Add them via the Django admin or seed the database.</p>
          </div>
        )}
        {members.map(member => (
          <MemberCard
            key={member.id}
            member={member}
            saving={saving === member.id}
            saved={saved === member.id}
            onUpdate={(field, val) => update(member.id, field, val)}
            onSave={() => save(member)}
            onPhotoUpload={(file) => uploadPhoto(member, file)}
          />
        ))}
      </div>
    </AdminLayout>
  );
}

function MemberCard({ member, saving, saved, onUpdate, onSave, onPhotoUpload }: {
  member: Member;
  saving: boolean;
  saved: boolean;
  onUpdate: (field: keyof Member, val: string) => void;
  onSave: () => void;
  onPhotoUpload: (file: File) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white border border-border p-6">
      <div className="flex gap-6">
        {/* Photo */}
        <div className="shrink-0">
          <div
            className="w-24 h-24 bg-secondary border border-border overflow-hidden relative cursor-pointer group"
            onClick={() => fileRef.current?.click()}
          >
            {member.photo_url ? (
              <img src={`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}${member.photo_url}`} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-serif text-3xl font-light text-foreground/20">{member.name.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Upload size={16} className="text-white" />
            </div>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => { if (e.target.files?.[0]) onPhotoUpload(e.target.files[0]); }}
          />
          <p className="font-sans text-[9px] text-muted-foreground/50 text-center mt-1.5 tracking-[0.15em] uppercase">Click to upload</p>
        </div>

        {/* Fields */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Name</label>
              <input className={inputCls} value={member.name} onChange={e => onUpdate('name', e.target.value)} />
            </div>
            <div>
              <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Role</label>
              <input className={inputCls} value={member.role} onChange={e => onUpdate('role', e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Bio</label>
            <textarea className={inputCls + " resize-none"} rows={3} value={member.bio} onChange={e => onUpdate('bio', e.target.value)} />
          </div>
          <div className="flex justify-end">
            <button
              onClick={onSave}
              disabled={saving}
              className="inline-flex items-center gap-2 font-sans text-sm px-4 h-9 transition-colors disabled:opacity-50"
              style={{ backgroundColor: saved ? '#C8FF00' : '#111', color: saved ? '#111' : 'white' }}
            >
              <Save size={14} /> {saving ? 'Saving…' : saved ? 'Saved!' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
