import React from 'react';

const mockCompliance = [
  { area: 'GDPR', status: 'Compliant', lastAudit: '2025-12-01' },
  { area: 'HIPAA', status: 'Compliant', lastAudit: '2025-11-15' },
  { area: 'NHS', status: 'Compliant', lastAudit: '2025-10-20' },
  { area: 'MDR', status: 'Compliant', lastAudit: '2025-09-30' },
];

const ComplianceStatus: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Compliance Status</h1>
      <p className="mb-6 text-gray-700">Overview of regulatory compliance for your institution. All statuses are updated after each audit.</p>
      <table className="w-full bg-white rounded shadow mb-8">
        <thead>
          <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
            <th className="py-2 px-4 text-left">Area</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Last Audit</th>
          </tr>
        </thead>
        <tbody>
          {mockCompliance.map(row => (
            <tr key={row.area}>
              <td className="py-2 px-4 font-semibold">{row.area}</td>
              <td className={`py-2 px-4 font-bold ${row.status === 'Compliant' ? 'text-[#29C6B1]' : 'text-[#E57373]'}`}>{row.status}</td>
              <td className="py-2 px-4">{row.lastAudit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-sm text-gray-500">For detailed audit logs, visit the <a href="/admin/audit" className="text-[#29C6B1] underline">Audit Portal</a>.</div>
    </div>
  </div>
);

export default ComplianceStatus;
