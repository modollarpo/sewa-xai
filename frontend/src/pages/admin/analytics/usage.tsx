import React, { useEffect, useState } from 'react';
import { getUsageMetrics } from '../../api/analytics';

const UsageAnalyticsPage: React.FC = () => {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsageMetrics()
      .then(setMetrics)
      .catch((e: any) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Usage Analytics</h1>
        <p className="mb-6 text-gray-700">Departmental usage, AI overrides, manual reviews, and ROI analytics.</p>
        {loading && <div>Loading...</div>}
        {error && <div className="text-[#E57373]">{error}</div>}
        <table className="w-full bg-white rounded shadow mb-8">
          <thead>
            <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
              <th className="py-2 px-4 text-left">Department</th>
              <th className="py-2 px-4 text-left">Scans</th>
              <th className="py-2 px-4 text-left">AI Overrides</th>
              <th className="py-2 px-4 text-left">Manual Reviews</th>
              <th className="py-2 px-4 text-left">ROI</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map(row => (
              <tr key={row.department}>
                <td className="py-2 px-4 font-semibold">{row.department}</td>
                <td className="py-2 px-4">{row.scans}</td>
                <td className="py-2 px-4">{row.ai_overrides}</td>
                <td className="py-2 px-4">{row.manual_reviews}</td>
                <td className="py-2 px-4 text-[#29C6B1] font-bold">{row.roi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsageAnalyticsPage;
