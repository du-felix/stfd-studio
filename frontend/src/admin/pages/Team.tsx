import { useEffect, useState, useRef } from 'react';
import AdminLayout from '../AdminLayout';
import { apiGet, apiPut } from '../api';
import { uploadTeamPhoto } from '@/lib/supabase';
import { Upload, Save, Plus, Trash2, X } from 'lucide-react';

interface Member {
  id: number; name: string; role: string; bio: string;
  photo_url: string; order: number;
}

const inputCls = "w-full border border-border bg-white font-sans text-sm px-3 py-2 outline-none focus:border-foreground/40 transition-colors";
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function Team() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<number | null>(null);
  const [saved, setSaved] = useState<number | null>(null);
  const [showAdd, setShowAdd] = useState(false);

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
    await apiPut(`/admin/team/${member.id}/`, {
      name: member.name,
      role: member.role,
      bio: member.bio,
      photo_url: member.photo_url,
      order: member.order,
    });
    setSaving(null);
    setSaved(member.id);
    setTimeout(() => setSaved(null), 2000);
  }

  async function handlePhotoUpload(member: Member, file: File) {
    setSaving(member.id);
    try {
      const url = await uploadTeamPhoto(file);
      const updated = { ...member, photo_url: url };
      setMembers(prev => prev.map(m => m.id === member.id ? updated : m));
      await apiPut(`/admin/team/${member.id}/`, { photo_url: url });
      setSaved(member.id);
      setTimeout(() => setSaved(null), 2000);
    } finally {
      setSaving(null);
    }
  }

  async function deleteMember(id: number) {
    if (!confirm('Remove this team member?')) return;
    await fetch(`${API_BASE}/api/admin/team/${id}/`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
    });
    setMembers(prev => prev.filter(m => m.id !== id));
  }

  function onCreated(member: Member) {
    setMembers(prev => [...prev, member]);
    setShowAdd(false);
  }

  if (loading) return <AdminLayout><div className="px-8 py-8 font-sans text-sm text-muted-foreground">Loading…</div></AdminLayout>;

  return (
    <AdminLayout>
      <div className="px-8 py-8 border-b border-border bg-white flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light tracking-tight">Team</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">Edit team member profiles and upload photos.</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-2 font-sans text-sm bg-[#111] text-white px-4 h-9 hover:bg-[#333] transition-colors"
        >
          <Plus size={14} /> Add member
        </button>
      </div>

      <div className="px-8 py-8 flex flex-col gap-6 max-w-3xl">
        {members.length === 0 && !showAdd && (
          <div className="bg-white border border-border p-8 text-center">
            <p className="font-sans text-sm text-muted-foreground mb-3">No team members yet.</p>
            <button onClick={() => setShowAdd(true)} className="font-sans text-sm text-foreground underline">
              Add the first one
            </button>
          </div>
        )}

        {showAdd && (
          <AddMemberForm onCreated={onCreated} onCancel={() => setShowAdd(false)} />
        )}

        {members.map(member => (
          <MemberCard
            key={member.id}
            member={member}
            saving={saving === member.id}
            saved={saved === member.id}
            onUpdate={(field, val) => update(member.id, field, val)}
            onSave={() => save(member)}
            onPhotoUpload={(file) => handlePhotoUpload(member, file)}
            onDelete={() => deleteMember(member.id)}
          />
        ))}
      </div>
    </AdminLayout>
  );
}

function AddMemberForm({ onCreated, onCancel }: {
  onCreated: (m: Member) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  function pickPhoto(file: File) {
    setPhotoFile(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleCreate() {
    if (!name.trim() || !role.trim()) { setError('Name and role are required.'); return; }
    setSaving(true);
    setError('');
    try {
      let photo_url = '';
      if (photoFile) {
        photo_url = await uploadTeamPhoto(photoFile);
      }
      const res = await fetch(`${API_BASE}/api/admin/team/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
        },
        body: JSON.stringify({ name: name.trim(), role: role.trim(), bio: bio.trim(), photo_url, order: 0 }),
      });
      if (!res.ok) throw new Error('Failed');
      const created = await res.json();
      onCreated(created);
    } catch {
      setError('Something went wrong. Try again.');
      setSaving(false);
    }
  }

  return (
    <div className="bg-white border border-[#C8FF00] p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-sans text-sm font-medium">New team member</h2>
        <button onClick={onCancel} className="text-muted-foreground hover:text-foreground transition-colors">
          <X size={16} />
        </button>
      </div>

      <div className="flex gap-6">
        <div className="shrink-0">
          <div
            className="w-24 h-24 bg-secondary border border-border overflow-hidden relative cursor-pointer group"
            onClick={() => fileRef.current?.click()}
          >
            {preview ? (
              <img src={preview} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Upload size={18} className="text-muted-foreground/30" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Upload size={16} className="text-white" />
            </div>
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden"
            onChange={e => { if (e.target.files?.[0]) pickPhoto(e.target.files[0]); }} />
          <p className="font-sans text-[9px] text-muted-foreground/50 text-center mt-1.5 tracking-[0.15em] uppercase">Photo</p>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Name *</label>
              <input className={inputCls} value={name} onChange={e => setName(e.target.value)} placeholder="Felix Du" autoFocus />
            </div>
            <div>
              <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Role *</label>
              <input className={inputCls} value={role} onChange={e => setRole(e.target.value)} placeholder="Design & Strategy" />
            </div>
          </div>
          <div>
            <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Bio</label>
            <textarea className={inputCls + " resize-none"} rows={3} value={bio} onChange={e => setBio(e.target.value)} placeholder="Short description…" />
          </div>
          <div className="flex items-center justify-between">
            {error && <p className="font-sans text-xs text-red-500">{error}</p>}
            <div className="flex gap-3 ml-auto">
              <button onClick={onCancel} className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors px-3 h-9">
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={saving}
                className="inline-flex items-center gap-2 font-sans text-sm bg-[#111] text-white px-4 h-9 hover:bg-[#333] transition-colors disabled:opacity-50"
              >
                <Plus size={14} /> {saving ? 'Creating…' : 'Create member'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MemberCard({ member, saving, saved, onUpdate, onSave, onPhotoUpload, onDelete }: {
  member: Member;
  saving: boolean;
  saved: boolean;
  onUpdate: (field: keyof Member, val: string) => void;
  onSave: () => void;
  onPhotoUpload: (file: File) => void;
  onDelete: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white border border-border p-6">
      <div className="flex gap-6">
        <div className="shrink-0">
          <div
            className="w-24 h-24 bg-secondary border border-border overflow-hidden relative cursor-pointer group"
            onClick={() => fileRef.current?.click()}
          >
            {member.photo_url ? (
              <img src={member.photo_url} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-serif text-3xl font-light text-foreground/20">{member.name.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Upload size={16} className="text-white" />
            </div>
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden"
            onChange={e => { if (e.target.files?.[0]) onPhotoUpload(e.target.files[0]); }} />
          <p className="font-sans text-[9px] text-muted-foreground/50 text-center mt-1.5 tracking-[0.15em] uppercase">Click to upload</p>
        </div>

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
          <div className="flex items-center justify-between">
            <button onClick={onDelete} className="font-sans text-xs text-muted-foreground/50 hover:text-red-500 transition-colors flex items-center gap-1.5">
              <Trash2 size={12} /> Remove
            </button>
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
