// Analytics API client for SEWA frontend
export async function getUsageMetrics() {
  const res = await fetch('/api/analytics/usage');
  if (!res.ok) throw new Error('Failed to fetch usage metrics');
  return res.json();
}
