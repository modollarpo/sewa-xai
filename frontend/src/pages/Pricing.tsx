import React, { useEffect, useState } from 'react';
import ClinicalTable from '../components/ClinicalTable';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalModal from '../components/ClinicalModal';
import ClinicalNotification from '../components/ClinicalNotification';
import { apiGet, apiPost } from '../services/api';
import ClinicalCard from '../components/ClinicalCard';

const Pricing: React.FC = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [usage, setUsage] = useState<any[]>([]);
  const [usageMonth, setUsageMonth] = useState('');
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
  const [notification, setNotification] = useState<{ message: string; type?: 'success' | 'error' | 'info' } | null>(null);

  useEffect(() => {
    Promise.all([
      apiGet('/admin/pricing/plans'),
      apiGet('/admin/subscriptions'),
      apiGet('/admin/usage'),
      apiGet('/admin/invoices'),
    ]).then(([plans, subs, usage, invoices]) => {
      setPlans(Array.isArray(plans) ? plans : ([] as any[]));
      setSubscriptions(Array.isArray(subs) ? subs : ([] as any[]));
      setUsage(Array.isArray(usage) ? usage : ([] as any[]));
      setInvoices(Array.isArray(invoices) ? invoices : ([] as any[]));
    }).finally(() => setLoading(false));
  }, []);

  const exportToCSV = (rows: any[], filename: string) => {
    if (!rows.length) return;
    const csv = [Object.keys(rows[0]).join(','), ...rows.map(r => Object.values(r).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredInvoices = invoices.filter(inv =>
    !filter || inv.hospital.toLowerCase().includes(filter.toLowerCase()) || inv.status.toLowerCase().includes(filter.toLowerCase())
  );

  const handleViewInvoice = (invoice: any) => {
    setSelectedInvoice(invoice);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedInvoice(null);
  };

  const handlePayInvoice = async (invoiceId: string) => {
    try {
      // Simulate payment API call
      await apiPost('/admin/invoices/pay', { id: invoiceId });
      setNotification({ message: 'Invoice marked as paid (demo)', type: 'success' });
      setInvoices(invoices.map(inv => inv.id === invoiceId ? { ...inv, status: 'Paid' } : inv));
      handleCloseModal();
    } catch {
      setNotification({ message: 'Payment failed', type: 'error' });
    }
  };

  // Usage analytics: filter by month
  const allMonths = Array.from(new Set((usage || []).map(u => u.month).filter(Boolean)));
  const filteredUsage = (usage || []).filter(u => !usageMonth || u.month === usageMonth);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Pricing & Billing Overview</h1>
          <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Manage plans, subscriptions, usage analytics, and invoices.</p>
        </div>
      </div>
      {notification && (
        <div className="mb-4"><ClinicalNotification {...notification} onClose={() => setNotification(null)} /></div>
      )}
      {loading ? <p>Loading...</p> : <>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="shadow-md border-t-4 border-[#408D7B] rounded-lg bg-white p-4">
            <div className="text-sm text-gray-500 mb-1">Active Plans</div>
            <div className="text-2xl font-bold">{plans.length}</div>
          </div>
          <div className="shadow-md border-t-4 border-[#F6A700] rounded-lg bg-white p-4">
            <div className="text-sm text-gray-500 mb-1">Total Subscriptions</div>
            <div className="text-2xl font-bold">{subscriptions.length}</div>
          </div>
          <div className="shadow-md border-t-4 border-[#29C6B1] rounded-lg bg-white p-4">
            <div className="text-sm text-gray-500 mb-1">Usage This Month</div>
            <div className="text-2xl font-bold">{usage.filter(u => u.month === usageMonth || !usageMonth).reduce((sum, u) => sum + (u.scans || 0), 0)}</div>
          </div>
          <div className="shadow-md border-t-4 border-[#F44336] rounded-lg bg-white p-4">
            <div className="text-sm text-gray-500 mb-1">Outstanding Invoices</div>
            <div className="text-2xl font-bold">{invoices.filter(i => i.status !== 'Paid').length}</div>
          </div>
        </div>

        {/* Plans Section */}
        <ClinicalCard title={<span style={{ color: '#408D7B' }}>Pricing Plans</span>} className="mb-8">
          <div className="flex justify-end items-center mb-4">
            <ClinicalButton onClick={() => exportToCSV(plans, 'pricing_plans.csv')}>Export Plans CSV</ClinicalButton>
          </div>
          <ClinicalTable
            columns={["name", "price", "currency", "scansIncluded", "extraScanPrice", "implementationFee", "description"]}
            data={plans}
          />
        </ClinicalCard>

        {/* Subscriptions Section */}
        <ClinicalCard title={<span style={{ color: '#F6A700' }}>Subscriptions</span>} className="mb-8">
          <div className="flex justify-end items-center mb-4">
            <ClinicalButton onClick={() => exportToCSV(subscriptions, 'subscriptions.csv')}>Export Subscriptions CSV</ClinicalButton>
          </div>
          <ClinicalTable
            columns={["id", "hospital", "plan", "active", "usage"]}
            data={subscriptions}
          />
        </ClinicalCard>

        {/* Usage Analytics Section */}
        <ClinicalCard title={<span style={{ color: '#29C6B1' }}>Usage Analytics</span>} className="mb-8">
          <div className="flex justify-end items-center mb-4 gap-2">
            <select className="border p-2 rounded" value={usageMonth} onChange={e => setUsageMonth(e.target.value)}>
              <option value="">All Months</option>
              {allMonths.map((m, i) => <option key={i} value={m}>{m}</option>)}
            </select>
            <ClinicalButton onClick={() => exportToCSV(filteredUsage, 'usage.csv')}>Export Usage CSV</ClinicalButton>
          </div>
          <ClinicalTable
            columns={["hospital", "scans", "month"]}
            data={filteredUsage}
          />
          {/* Enhanced bar chart for usage by hospital */}
          {Array.isArray(filteredUsage) && filteredUsage.length > 0 && (
            <div className="my-6">
              <h3 className="font-semibold mb-2">Usage by Hospital</h3>
              <div className="flex items-end gap-4 h-36 bg-gray-50 rounded p-4 border">
                {filteredUsage.map((u, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <div
                      style={{ height: `${Math.max(10, u.scans / 2)}px` }}
                      className="w-8 bg-[#408D7B] rounded-t shadow-md group-hover:bg-[#29C6B1] transition-colors duration-200"
                      title={`${u.hospital}: ${u.scans}`}
                    ></div>
                    <span className="text-xs mt-1 text-gray-700">{u.hospital}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-2">Bar height = scan count</div>
            </div>
          )}
        </ClinicalCard>

        {/* Invoice History Section */}
        <ClinicalCard title={<span style={{ color: '#F44336' }}>Invoice History</span>}>
          <div className="flex justify-end items-center mb-4">
            <ClinicalButton onClick={() => exportToCSV(invoices, 'invoices.csv')}>Export Invoices CSV</ClinicalButton>
          </div>
          <input className="border p-2 rounded mb-4 w-full max-w-xs" placeholder="Filter by hospital or status" value={filter} onChange={handleFilterChange} />
          <ClinicalTable
            columns={["id", "hospital", "amount", "currency", "date", "status"]}
            data={filteredInvoices}
          />
          <div className="flex gap-2 flex-wrap mt-2">
            {filteredInvoices.map(inv => (
              <ClinicalButton key={inv.id} onClick={() => handleViewInvoice(inv)}>
                View Invoice {inv.id}
              </ClinicalButton>
            ))}
          </div>
        </ClinicalCard>

        {/* Invoice Modal */}
        <ClinicalModal open={modalOpen} onClose={handleCloseModal}>
          {selectedInvoice && (
            <div className="p-4 max-w-md mx-auto">
              <h3 className="text-lg font-bold mb-2 text-[#F44336]">Invoice #{selectedInvoice.id}</h3>
              <div className="mb-2">
                <span className="font-semibold">Hospital:</span> {selectedInvoice.hospital}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Amount:</span> {selectedInvoice.amount} {selectedInvoice.currency}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Date:</span> {selectedInvoice.date}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Status:</span> <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${selectedInvoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{selectedInvoice.status}</span>
              </div>
              {selectedInvoice.status !== 'Paid' && (
                <ClinicalButton onClick={() => handlePayInvoice(selectedInvoice.id)} className="w-full">Mark as Paid</ClinicalButton>
              )}
            </div>
          )}
        </ClinicalModal>
      </>}
    </div>
  );
};

export default Pricing;
