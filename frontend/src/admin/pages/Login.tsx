import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(username, password);
      navigate('/admin');
    } catch {
      setError('Invalid username or password.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <div className="flex items-center gap-2.5 leading-none mb-6">
            <span className="font-serif text-2xl font-semibold text-white tracking-tight">stfd.</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-[9px] tracking-[0.35em] uppercase text-white/40 pb-px">Studio</span>
          </div>
          <h1 className="font-sans text-white text-xl font-medium">Sign in to admin</h1>
          <p className="font-sans text-white/40 text-sm mt-1">Manage your studio content.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block font-sans text-xs text-white/40 tracking-[0.2em] uppercase mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white font-sans text-sm px-4 h-11 outline-none focus:border-white/30 transition-colors"
              autoFocus
            />
          </div>
          <div>
            <label className="block font-sans text-xs text-white/40 tracking-[0.2em] uppercase mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white font-sans text-sm px-4 h-11 outline-none focus:border-white/30 transition-colors"
            />
          </div>
          {error && <p className="font-sans text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="h-11 bg-[#C8FF00] text-[#111] font-sans text-sm font-medium hover:bg-[#b8ee00] transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
