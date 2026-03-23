const BASE = (import.meta.env.VITE_API_URL || 'http://localhost:8000') + '/api';

function getToken() {
  return localStorage.getItem('admin_token');
}

async function request(path: string, options: RequestInit = {}) {
  const token = getToken();
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  if (res.status === 401) {
    localStorage.removeItem('admin_token');
    window.location.href = '/admin/login';
    throw new Error('Unauthorized');
  }
  return res;
}

export async function apiGet(path: string) {
  const res = await request(path);
  return res.json();
}

export async function apiPost(path: string, data: unknown) {
  const res = await request(path, { method: 'POST', body: JSON.stringify(data) });
  return res.json();
}

export async function apiPut(path: string, data: unknown) {
  const res = await request(path, { method: 'PUT', body: JSON.stringify(data) });
  return res.json();
}

export async function apiPatch(path: string, data: unknown) {
  const res = await request(path, { method: 'PATCH', body: JSON.stringify(data) });
  return res.json();
}

export async function apiDelete(path: string) {
  const res = await request(path, { method: 'DELETE' });
  return res.status;
}

export async function apiUpload(path: string, formData: FormData, method = 'PUT') {
  const token = getToken();
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData,
  });
  return res.json();
}

export async function login(username: string, password: string) {
  const res = await fetch(`${BASE}/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error('Invalid credentials');
  const data = await res.json();
  localStorage.setItem('admin_token', data.access);
  return data;
}

export function logout() {
  localStorage.removeItem('admin_token');
}

export function isAuthenticated() {
  return !!localStorage.getItem('admin_token');
}
