export async function apiPatch<T>(endpoint: string, body: any, token?: string): Promise<T> {
  const res = await fetch(`/backend${endpoint}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}

export async function apiDelete<T>(endpoint: string, token?: string): Promise<T> {
  const res = await fetch(`/backend${endpoint}`, {
    method: 'DELETE',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}
