import React from 'react';
import ClinicalButton from '../../components/ClinicalButton';

const HospitalOnboarding: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Hospital Onboarding</h1>
      <p className="mb-6 text-gray-700">Begin your secure onboarding via SMART on FHIR SSO. This process enables seamless integration with Epic, Cerner, and other EHRs.</p>
      <div className="bg-[#F6F8F7] rounded-lg p-6 shadow mb-6">
        <h2 className="text-lg font-semibold mb-2" style={{ color: '#29C6B1' }}>Step 1: Authenticate with your EHR</h2>
        <ClinicalButton className="px-6 py-2 font-semibold">Start SMART on FHIR SSO</ClinicalButton>
      </div>
      <div className="text-sm text-gray-500">Need help? <a href="/support" className="text-[#29C6B1] underline">Contact support</a>.</div>
    </div>
  </div>
);

export default HospitalOnboarding;
