import React from 'react';

const mockInvoices = [
  { id: 'inv-001', period: 'Jan 2026', amount: '£2,500', status: 'Paid' },
  { id: 'inv-002', period: 'Dec 2025', amount: '£2,100', status: 'Paid' },
  { id: 'inv-003', period: 'Nov 2025', amount: '£2,300', status: 'Overdue' },
];

const Billing: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Billing & Invoices</h1>
      <p className="mb-6 text-gray-700">View your institution’s invoices, payment status, and cost breakdown. All billing data is separated from clinical data for compliance.</p>
      <table className="w-full bg-white rounded shadow mb-8">
        <thead>
          <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
            <th className="py-2 px-4 text-left">Invoice ID</th>
            <th className="py-2 px-4 text-left">Period</th>
            <th className="py-2 px-4 text-left">Amount</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockInvoices.map(inv => (
            <tr key={inv.id}>
              <td className="py-2 px-4 font-mono text-xs">{inv.id}</td>
              <td className="py-2 px-4">{inv.period}</td>
              <td className="py-2 px-4">{inv.amount}</td>
              <td className={`py-2 px-4 font-bold ${inv.status === 'Paid' ? 'text-[#29C6B1]' : 'text-[#E57373]'}`}>{inv.status}</td>
              <td className="py-2 px-4">
                <button className="bg-[#0D4F3D] text-white px-4 py-1 rounded font-semibold hover:bg-[#29C6B1] transition">View</button>
                {inv.status !== 'Paid' && <button className="ml-2 bg-[#E57373] text-white px-4 py-1 rounded font-semibold hover:bg-[#c0392b] transition">Pay</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-sm text-gray-500">For usage analytics, see the <a href="/admin/dashboard" className="text-[#29C6B1] underline">Admin Dashboard</a>.</div>
    </div>
  </div>
);

export default Billing;
