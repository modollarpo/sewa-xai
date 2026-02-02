import React from 'react';

const mockNetwork = [
  { region: 'Nigeria', modelDrift: 'Stable', vlmHealth: 'Healthy', impact: '↓ Pediatric deaths' },
  { region: 'UK', modelDrift: 'Stable', vlmHealth: 'Healthy', impact: 'Compliant' },
  { region: 'India', modelDrift: 'Watch', vlmHealth: 'Healthy', impact: '↑ Access' },
];

const SuperAdminHub: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-[#0D4F3D] mb-4">aiOS Hub: Global Oversight</h1>
      <p className="mb-6 text-gray-700">Monitor network-wide model drift, VLM health, and social impact. Track compliance and technical readiness across all regions.</p>
      <table className="w-full bg-white rounded shadow mb-8">
        <thead>
          <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
            <th className="py-2 px-4 text-left">Region</th>
            <th className="py-2 px-4 text-left">Model Drift</th>
            <th className="py-2 px-4 text-left">VLM Health</th>
            <th className="py-2 px-4 text-left">Social Impact</th>
          </tr>
        </thead>
        <tbody>
          {mockNetwork.map(row => (
            <tr key={row.region}>
              <td className="py-2 px-4 font-semibold">{row.region}</td>
              <td className={`py-2 px-4 font-bold ${row.modelDrift === 'Stable' ? 'text-[#29C6B1]' : 'text-[#FFD700]'}`}>{row.modelDrift}</td>
              <td className={`py-2 px-4 font-bold ${row.vlmHealth === 'Healthy' ? 'text-[#29C6B1]' : 'text-[#E57373]'}`}>{row.vlmHealth}</td>
              <td className="py-2 px-4">{row.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-4 mb-8">
        <a href="/superadmin/compliance" className="bg-[#0D4F3D] text-white px-6 py-2 rounded font-semibold hover:bg-[#29C6B1] transition">Compliance Dossiers</a>
        <a href="/superadmin/analytics" className="bg-[#0D4F3D] text-white px-6 py-2 rounded font-semibold hover:bg-[#29C6B1] transition">Network Analytics</a>
      </div>
      <div className="text-sm text-gray-500">All oversight actions are logged. For technical readiness, see <a href="/superadmin/readyz" className="text-[#29C6B1] underline">/readyz</a>.</div>
    </div>
  </div>
);

export default SuperAdminHub;
