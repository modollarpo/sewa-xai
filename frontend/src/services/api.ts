// Centralized API service for SEWA frontend
export const API_BASE = '/backend';

export async function apiGet<T>(endpoint: string, token?: string): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}

export async function apiPost<T>(endpoint: string, body: any, token?: string): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}
