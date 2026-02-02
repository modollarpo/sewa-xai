import ClinicalCard from '../components/ClinicalCard';

const BillingDashboard: React.FC = () => (
  <div className="p-6">
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
      <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Billing Dashboard</h1>
        <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Monitor usage, overage, and invoice history for all hospitals.</p>
      </div>
    </div>
    <ClinicalCard title="Current Usage & Overage">
      <ul className="list-disc ml-6 text-gray-700">
        <li>Usage meters for each hospital</li>
        <li>Overage alerts and notifications</li>
        <li>Downloadable invoices and cost breakdowns</li>
      </ul>
    </ClinicalCard>
    <ClinicalCard title="Invoice History">
      <ul className="list-disc ml-6 text-gray-700">
        <li>All invoices by month and hospital</li>
        <li>Status: Paid, Unpaid, Overdue</li>
        <li>Export to CSV/PDF</li>
      </ul>
    </ClinicalCard>
    <div className="mt-8 text-center text-gray-600">
      <p>For billing support, contact <a href="mailto:billing@sewa.com" className="text-[#408D7B] underline">billing@sewa.com</a>.</p>
    </div>
  </div>
);

export default BillingDashboard;
