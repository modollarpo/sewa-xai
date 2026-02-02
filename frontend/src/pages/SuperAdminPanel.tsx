import ClinicalCard from '../components/ClinicalCard';
import ClinicalSection from '../components/ClinicalSection';

const SuperAdminPanel: React.FC = () => (
  <div className="max-w-4xl mx-auto p-8">
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
      <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Super Admin Panel</h1>
        <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Global platform controls, analytics, and emergency response.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#408D7B]">
        <div className="text-xs text-gray-500 mb-1">Total Hospitals</div>
        <div className="text-2xl font-bold">12</div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#F6A700]">
        <div className="text-xs text-gray-500 mb-1">Total Users</div>
        <div className="text-2xl font-bold">128</div>
      </div>
    </div>
    <ClinicalSection title={<span style={{ color: '#408D7B' }}>Platform Controls</span>}>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Global user and hospital management</li>
        <li>System configuration and feature toggles</li>
        <li>Access to all audit logs and compliance reports</li>
        <li>Emergency lockout and incident response</li>
      </ul>
    </ClinicalSection>
    <ClinicalSection title={<span style={{ color: '#29C6B1' }}>System Analytics</span>}>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Usage, billing, and compliance analytics</li>
        <li>Role breakdowns and activity heatmaps</li>
        <li>Exportable reports for stakeholders</li>
      </ul>
    </ClinicalSection>
    <div className="mt-8 text-center text-gray-600">
      <p>For super admin support, contact <a href="mailto:support@sewa.com" className="text-[#408D7B] underline">support@sewa.com</a>.</p>
    </div>
  </div>
);

export default SuperAdminPanel;
