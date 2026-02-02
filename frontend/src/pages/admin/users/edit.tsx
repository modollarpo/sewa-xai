import React from 'react';

const EditUser: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Edit User</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" defaultValue="Dr. Smith" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Role</label>
          <select className="w-full border rounded px-3 py-2" defaultValue="Doctor">
            <option>Doctor</option>
            <option>Admin</option>
            <option>Clinician</option>
            <option>Billing</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Status</label>
          <select className="w-full border rounded px-3 py-2" defaultValue="Active">
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>
        <button type="submit" className="bg-[#29C6B1] text-white px-6 py-2 rounded font-semibold hover:bg-[#0D4F3D] transition">Save Changes</button>
      </form>
      <div className="text-sm text-gray-500 mt-6">All changes are logged for audit. <a href="/admin/users" className="text-[#29C6B1] underline">Back to User Management</a></div>
    </div>
  </div>
);

export default EditUser;
