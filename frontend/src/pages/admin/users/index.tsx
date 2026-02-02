import React from 'react';

const mockUsers = [
  { id: 'u001', name: 'Dr. Smith', role: 'Doctor', status: 'Active' },
  { id: 'u002', name: 'Jane Admin', role: 'Admin', status: 'Active' },
  { id: 'u003', name: 'Sam Lee', role: 'Clinician', status: 'Suspended' },
];

const UserManagement: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">User Management</h1>
      <p className="mb-6 text-gray-700">Manage users, roles, and access for your institution. All changes are logged for audit.</p>
      <table className="w-full bg-white rounded shadow mb-8">
        <thead>
          <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 font-semibold">{user.name}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className={`py-2 px-4 font-bold ${user.status === 'Active' ? 'text-[#29C6B1]' : 'text-[#E57373]'}`}>{user.status}</td>
              <td className="py-2 px-4">
                <button className="bg-[#0D4F3D] text-white px-4 py-1 rounded font-semibold hover:bg-[#29C6B1] transition mr-2">Edit</button>
                <button className="bg-[#E57373] text-white px-4 py-1 rounded font-semibold hover:bg-[#c0392b] transition">{user.status === 'Active' ? 'Suspend' : 'Activate'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-[#29C6B1] text-white px-6 py-2 rounded font-semibold hover:bg-[#0D4F3D] transition">Add New User</button>
      <div className="text-sm text-gray-500 mt-6">Role-based access enforced. For audit logs, see the <a href="/admin/audit" className="text-[#29C6B1] underline">Audit Portal</a>.</div>
    </div>
  </div>
);

export default UserManagement;
