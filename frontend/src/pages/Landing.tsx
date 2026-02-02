import ClinicalCard from '../components/ClinicalCard';
import ClinicalButton from '../components/ClinicalButton';

const Landing: React.FC = () => (
  <div className="p-8 bg-white min-h-screen">
    <div className="max-w-5xl mx-auto">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 24 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 64, height: 64, borderRadius: 14, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.7rem', fontWeight: 800, color: '#0D4F3D', margin: 0, letterSpacing: 1 }}>SEWA: Smart Early Warning Assistant</h1>
          <p style={{ color: '#6B7280', fontSize: '1.25rem', margin: '8px 0 0', maxWidth: 700 }}>Enterprise healthcare AI for hospitals, clinicians, and regulators. All AI outputs are explainable, uncertainty is always shown, and every action is logged for audit. No autonomous diagnosis is performed; all results require human review.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ClinicalCard title="Institutional Evidence">
          <ul className="list-disc ml-6 text-gray-700">
            <li><span className="font-semibold text-[#29C6B1]">451% ROI</span> over 5 years</li>
            <li><span className="font-semibold text-[#29C6B1]">145 radiologist days</span> saved per department</li>
            <li><span className="font-semibold text-[#E57373]">86%→58% performance gap</span> solved by multi-regional data fine-tuning</li>
          </ul>
        </ClinicalCard>
        <ClinicalCard title="B2B Institutional Gateway">
          <ul className="list-disc ml-6 text-gray-700">
            <li>Hospital Path: <span className="font-semibold text-[#29C6B1]">SMART on FHIR SSO</span> handshake</li>
            <li>Clinic Path: Self-service onboarding stepper</li>
            <li>Tiered access for hospitals, clinics, and regulators</li>
          </ul>
        </ClinicalCard>
        <ClinicalCard title="For Hospitals & Admins">
          <ul className="list-disc ml-6 text-gray-700">
            <li>AI triage, explainable predictions</li>
            <li>Usage-based & subscription pricing</li>
            <li>Regulatory compliance (GDPR, HIPAA, NHS, MDR)</li>
            <li>Departmental analytics, ROI tracking</li>
          </ul>
        </ClinicalCard>
        <ClinicalCard title="For Clinicians">
          <ul className="list-disc ml-6 text-gray-700">
            <li>AI suggestions, never final decisions</li>
            <li>Confidence & uncertainty always visible</li>
            <li>Human-in-the-loop enforced</li>
            <li>Audit trail for every action</li>
          </ul>
        </ClinicalCard>
        <ClinicalCard title="For Regulators & Auditors">
          <ul className="list-disc ml-6 text-gray-700">
            <li>Immutable audit logs</li>
            <li>Compliance dashboards</li>
            <li>System health & traceability</li>
            <li>Technical dossiers for MHRA/EU AI Act</li>
          </ul>
        </ClinicalCard>
        <ClinicalCard title="For Billing & Finance">
          <ul className="list-disc ml-6 text-gray-700">
            <li>Transparent pricing & usage</li>
            <li>Invoice & overage management</li>
            <li>Role-based access control</li>
            <li>Cost breakdown per hospital</li>
          </ul>
        </ClinicalCard>
      </div>
      <div className="mt-10 text-center">
        <a href="/institutional-gateway" className="px-8 py-4 font-semibold transition mr-4" style={{ textDecoration: 'none' }}>
          <ClinicalButton>Institutional Gateway</ClinicalButton>
        </a>
        <a href="/login" className="ml-6 text-[#0D4F3D] underline font-semibold">Login</a>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        <span className="px-2">ISO 13485 | IEC 62304 | GDPR | HIPAA | SMART on FHIR R4/R5</span>
      </div>
    </div>
  </div>
);

export default Landing;
