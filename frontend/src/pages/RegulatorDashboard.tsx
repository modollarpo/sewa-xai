import ClinicalCard from '../components/ClinicalCard';
import ClinicalSection from '../components/ClinicalSection';

const RegulatorDashboard: React.FC = () => (
  <div className="max-w-4xl mx-auto p-8">
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
      <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Regulator Dashboard</h1>
        <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>System health, compliance, and audit log access for regulators.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#408D7B]">
        <div className="text-xs text-gray-500 mb-1">System Uptime</div>
        <div className="text-2xl font-bold">99.99%</div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#F6A700]">
        <div className="text-xs text-gray-500 mb-1">Compliance Status</div>
        <div className="text-2xl font-bold">Certified</div>
      </div>
    </div>
    <ClinicalSection title={<span style={{ color: '#408D7B' }}>System Health & Compliance</span>}>
      <ul className="list-disc ml-6 text-gray-700">
        <li>System uptime and health metrics</li>
        <li>Compliance status for all modules</li>
        <li>Recent audit events and alerts</li>
      </ul>
    </ClinicalSection>
    <ClinicalSection title={<span style={{ color: '#29C6B1' }}>Audit Log Access</span>}>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Read-only access to all audit logs</li>
        <li>Export and filter by user, action, or date</li>
        <li>Traceability for every clinical and admin action</li>
      </ul>
    </ClinicalSection>
    <div className="mt-8 text-center text-gray-600">
      <p>For regulator access, contact <a href="mailto:compliance@sewa.com" className="text-[#408D7B] underline">compliance@sewa.com</a>.</p>
    </div>
  </div>
);

export default RegulatorDashboard;
