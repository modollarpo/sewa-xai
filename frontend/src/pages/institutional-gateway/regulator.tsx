import React from 'react';
import ClinicalButton from '../../components/ClinicalButton';

const RegulatorAccess: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Regulator & Auditor Access</h1>
      <p className="mb-6 text-gray-700">Request read-only access to SEWA’s compliance dashboards, audit logs, and technical dossiers for regulatory review.</p>
      <div className="bg-[#F6F8F7] rounded-lg p-6 shadow mb-6">
        <h2 className="text-lg font-semibold text-[#29C6B1] mb-2">Submit Access Request</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border rounded px-3 py-2" required />
          <input type="email" placeholder="Work Email" className="w-full border rounded px-3 py-2" required />
          <input type="text" placeholder="Regulatory Body (e.g. MHRA, EU AI Act)" className="w-full border rounded px-3 py-2" required />
          <ClinicalButton type="submit" className="px-6 py-2 font-semibold">Request Access</ClinicalButton>
        </form>
      </div>
      <div className="text-sm text-gray-500">For urgent regulatory requests, <a href="/support" className="text-[#29C6B1] underline">contact support</a>.</div>
    </div>
  </div>
);

export default RegulatorAccess;
