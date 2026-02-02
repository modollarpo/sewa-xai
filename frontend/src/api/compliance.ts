// Compliance API client for SEWA frontend
export async function getComplianceStatus() {
  const res = await fetch('/api/compliance/status');
  if (!res.ok) throw new Error('Failed to fetch compliance status');
  return res.json();
}
