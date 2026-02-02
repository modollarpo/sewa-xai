import React from 'react';

const mockRiskLogs = [
  { date: '2026-01-20', risk: 'Model drift detected', severity: 'Moderate', action: 'Mitigated' },
  { date: '2025-12-15', risk: 'Unusual access pattern', severity: 'Low', action: 'Reviewed' },
  { date: '2025-11-10', risk: 'Compliance audit', severity: 'High', action: 'Passed' },
];

const AuditorPortal: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Auditor & Regulator Portal</h1>
      <p className="mb-6 text-gray-700">Read-only access to risk assessment logs and technical dossiers for regulatory review (ISO 14971, MHRA, EU AI Act).</p>
      <table className="w-full bg-white rounded shadow mb-8">
        <thead>
          <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Risk</th>
            <th className="py-2 px-4 text-left">Severity</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockRiskLogs.map(row => (
            <tr key={row.date + row.risk}>
              <td className="py-2 px-4 font-mono text-xs">{row.date}</td>
              <td className="py-2 px-4">{row.risk}</td>
              <td className={`py-2 px-4 font-bold ${row.severity === 'High' ? 'text-[#E57373]' : row.severity === 'Moderate' ? 'text-[#FFD700]' : 'text-[#29C6B1]'}`}>{row.severity}</td>
              <td className="py-2 px-4">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-sm text-gray-500">For technical dossiers, see <a href="/superadmin/compliance" className="text-[#29C6B1] underline">Compliance Dossiers</a>.</div>
    </div>
  </div>
);

export default AuditorPortal;
