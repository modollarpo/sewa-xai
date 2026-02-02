import ClinicalCard from '../components/ClinicalCard';
import ClinicalSection from '../components/ClinicalSection';

const Security: React.FC = () => (
  <div className="max-w-4xl mx-auto p-8">
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
      <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Security & Data Protection</h1>
        <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Enterprise-grade security, privacy, and compliance for all users.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#408D7B]">
        <div className="text-xs text-gray-500 mb-1">Certifications</div>
        <div className="text-2xl font-bold">GDPR, HIPAA, MDR</div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#29C6B1]">
        <div className="text-xs text-gray-500 mb-1">Last Audit</div>
        <div className="text-2xl font-bold">Jan 2026</div>
      </div>
    </div>
    <ClinicalSection title={<span style={{ color: '#408D7B' }}>Data Security</span>}>
      <ul className="list-disc ml-6 text-gray-700">
        <li>All data encrypted in transit and at rest</li>
        <li>Role-based access control (RBAC) for all users</li>
        <li>Regular security audits and penetration testing</li>
        <li>Compliant with GDPR, HIPAA, NHS, MDR</li>
      </ul>
    </ClinicalSection>
    <ClinicalSection title={<span style={{ color: '#F6A700' }}>Privacy & Compliance</span>}>
      <ul className="list-disc ml-6 text-gray-700">
        <li>No patient-identifiable data stored</li>
        <li>All actions immutably logged for audit</li>
        <li>Data residency controls for regulatory compliance</li>
        <li>Access logs available to regulators and hospitals</li>
      </ul>
    </ClinicalSection>
    <div className="mt-8 text-center text-gray-600">
      <p>For security documentation or compliance reports, contact <a href="mailto:compliance@sewa.com" className="text-[#408D7B] underline">compliance@sewa.com</a>.</p>
    </div>
  </div>
);

export default Security;
