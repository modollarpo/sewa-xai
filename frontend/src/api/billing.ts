// Billing API client for SEWA frontend
export async function getInvoices() {
  const res = await fetch('/api/billing/invoices');
  if (!res.ok) throw new Error('Failed to fetch invoices');
  return res.json();
}
