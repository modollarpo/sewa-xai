import React from 'react';
import PricingUsageMeter from '../../components/shared/PricingUsageMeter';

const mockUsage = {
  usage: 1875,
  quota: 2000,
};

const mockDepartments = [
  { name: 'Radiology', scans: 1200, credits: 900, roi: '410%' },
  { name: 'Cardiology', scans: 400, credits: 350, roi: '390%' },
  { name: 'Emergency', scans: 275, credits: 200, roi: '470%' },
];

const AdminDashboard: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-[#0D4F3D] mb-4">Hospital Admin Dashboard</h1>
      <p className="mb-6 text-gray-700">Track departmental usage, credit burn, and ROI. Manage users, facilities, and compliance status.</p>
      <div className="mb-8">
        <PricingUsageMeter usage={mockUsage.usage} quota={mockUsage.quota} />
      </div>
      <table className="w-full bg-white rounded shadow mb-8">
        <thead>
          <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
            <th className="py-2 px-4 text-left">Department</th>
            <th className="py-2 px-4 text-left">Scans</th>
            <th className="py-2 px-4 text-left">Credits Used</th>
            <th className="py-2 px-4 text-left">ROI</th>
          </tr>
        </thead>
        <tbody>
          {mockDepartments.map(dep => (
            <tr key={dep.name}>
              <td className="py-2 px-4 font-semibold">{dep.name}</td>
              <td className="py-2 px-4">{dep.scans}</td>
              <td className="py-2 px-4">{dep.credits}</td>
              <td className="py-2 px-4 text-[#29C6B1] font-bold">{dep.roi}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-4 mb-8">
        <a href="/admin/users" className="bg-[#0D4F3D] text-white px-6 py-2 rounded font-semibold hover:bg-[#29C6B1] transition">Manage Users</a>
        <a href="/admin/facilities" className="bg-[#0D4F3D] text-white px-6 py-2 rounded font-semibold hover:bg-[#29C6B1] transition">Manage Facilities</a>
        <a href="/admin/compliance" className="bg-[#0D4F3D] text-white px-6 py-2 rounded font-semibold hover:bg-[#29C6B1] transition">Compliance Status</a>
      </div>
      <div className="text-sm text-gray-500">All usage and actions are logged for audit. Compliance dashboards available for regulators.</div>
    </div>
  </div>
);

export default AdminDashboard;
