import React, { useEffect, useState } from 'react';
import { getComplianceStatus } from '../../api/compliance';

const ComplianceStatusPage: React.FC = () => {
  const [status, setStatus] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getComplianceStatus()
      .then(setStatus)
      .catch((e: any) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Compliance Status</h1>
        <p className="mb-6 text-gray-700">Overview of regulatory compliance for your institution. All statuses are updated after each audit.</p>
        {loading && <div>Loading...</div>}
        {error && <div className="text-[#E57373]">{error}</div>}
        <table className="w-full bg-white rounded shadow mb-8">
          <thead>
            <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
              <th className="py-2 px-4 text-left">Area</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Last Audit</th>
            </tr>
          </thead>
          <tbody>
            {status.map(row => (
              <tr key={row.area}>
                <td className="py-2 px-4 font-semibold">{row.area}</td>
                <td className={`py-2 px-4 font-bold ${row.status === 'Compliant' ? 'text-[#29C6B1]' : 'text-[#E57373]'}`}>{row.status}</td>
                <td className="py-2 px-4">{row.last_audit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplianceStatusPage;
