import React from 'react';
import ClinicalButton from '../../components/ClinicalButton';

const InstitutionalGateway: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-[#0D4F3D] mb-4">Institutional Gateway</h1>
      <p className="mb-6 text-lg text-gray-700">Welcome to SEWA’s secure institutional onboarding. Choose your path to begin:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#F6F8F7] rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2" style={{ color: '#29C6B1' }}>Hospital Path</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>SMART on FHIR SSO handshake</li>
            <li>Zero-friction Epic/Cerner integration</li>
            <li>Admin approval required</li>
          </ul>
          <a href="/institutional-gateway/hospital" className="px-5 py-2 font-semibold" style={{ textDecoration: 'none' }}>
            <ClinicalButton>Hospital Onboarding</ClinicalButton>
          </a>
        </div>
        <div className="bg-[#F6F8F7] rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2" style={{ color: '#29C6B1' }}>Clinic Path</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Self-service onboarding stepper</li>
            <li>Organization → Admin → Facilities → Cloud Gateway</li>
            <li>Instant access after verification</li>
          </ul>
          <a href="/institutional-gateway/clinic" className="px-5 py-2 font-semibold" style={{ textDecoration: 'none' }}>
            <ClinicalButton>Clinic Onboarding</ClinicalButton>
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">Tiered access for hospitals, clinics, and regulators. For regulator access, <a href="/institutional-gateway/regulator" className="text-[#29C6B1] underline">click here</a>.</div>
    </div>
  </div>
);

export default InstitutionalGateway;
