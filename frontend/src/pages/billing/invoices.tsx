import React, { useEffect, useState } from 'react';
import { getInvoices } from '../../api/billing';

const InvoicesPage: React.FC = () => {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getInvoices()
      .then(setInvoices)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Invoices</h1>
        <p className="mb-6 text-gray-700">All invoices for your institution. For payment or details, contact billing support.</p>
        {loading && <div>Loading...</div>}
        {error && <div className="text-[#E57373]">{error}</div>}
        <table className="w-full bg-white rounded shadow mb-8">
          <thead>
            <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
              <th className="py-2 px-4 text-left">Invoice ID</th>
              <th className="py-2 px-4 text-left">Period</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id}>
                <td className="py-2 px-4 font-mono text-xs">{inv.id}</td>
                <td className="py-2 px-4">{inv.period}</td>
                <td className="py-2 px-4">£{inv.amount}</td>
                <td className={`py-2 px-4 font-bold ${inv.status === 'Paid' ? 'text-[#29C6B1]' : 'text-[#E57373]'}`}>{inv.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesPage;
