// Audit API client for SEWA frontend
export async function getAuditLog() {
  const res = await fetch('/api/audit/log');
  if (!res.ok) throw new Error('Failed to fetch audit log');
  return res.json();
}

export async function addAuditEvent(event: any) {
  const res = await fetch('/api/audit/log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  if (!res.ok) throw new Error('Failed to add audit event');
  return res.json();
}
