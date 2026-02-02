import React, { useEffect, useState } from 'react';
import ClinicalTable from '../components/ClinicalTable';
import ClinicalModal from '../components/ClinicalModal';
import ClinicalNotification from '../components/ClinicalNotification';
import ClinicalButton from '../components/ClinicalButton';
import { apiGet, apiPost } from '../services/api';

const AdminPanel: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [notification, setNotification] = useState<{ message: string; type?: 'success' | 'error' | 'info' } | null>(null);
  const [userFilter, setUserFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [analyticsOpen, setAnalyticsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiGet<any[]>('/admin/users')
      .then(data => setUsers(data))
      .catch(() => setNotification({ message: 'Failed to load users', type: 'error' }))
      .finally(() => setLoading(false));
  }, []);

  const exportToCSV = (rows: any[], filename: string) => {
    if (!rows.length) return;
    const csv = [Object.keys(rows[0]).join(','), ...rows.map(r => Object.values(r).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const allRoles = Array.from(new Set(users.map(u => u.role)));
  const filteredUsers = users.filter(u => {
    const matchesSearch = !userFilter ||
      u.username.toLowerCase().includes(userFilter.toLowerCase()) ||
      (u.email?.toLowerCase() || '').includes(userFilter.toLowerCase()) ||
      u.role.toLowerCase().includes(userFilter.toLowerCase());
    const matchesRole = !roleFilter || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleViewUser = (user: any) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await apiPost(`/admin/user/${userId}/role`, { role: newRole });
      setNotification({ message: `Role updated to ${newRole}`, type: 'success' });
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
    } catch {
      setNotification({ message: 'Failed to update role', type: 'error' });
    }
  };

  const handleStatusToggle = async (user: any) => {
    try {
      if (user.active) {
        await apiPost(`/admin/user/${user.id}/deactivate`, {});
        setNotification({ message: `User deactivated`, type: 'success' });
      } else {
        await apiPost(`/admin/user/${user.id}/reactivate`, {});
        setNotification({ message: `User reactivated`, type: 'success' });
      }
      setUsers(users.map(u => u.id === user.id ? { ...u, active: !user.active } : u));
    } catch {
      setNotification({ message: 'Failed to update status', type: 'error' });
    }
  };

  const handleSendNotification = (user: any, type: 'info' | 'success' | 'error') => {
    setNotification({ message: `Notification sent to ${user.username}`, type });
  };

  return (
    <div className="p-6">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Admin Panel</h1>
          <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Manage users, roles, and analytics for your institution.</p>
        </div>
      </div>
      {notification && (
        <ClinicalNotification {...notification} onClose={() => setNotification(null)} />
      )}
      <div className="flex gap-2 mb-4 flex-wrap items-center">
        <input className="border p-2 rounded" placeholder="Search users" value={userFilter} onChange={e => setUserFilter(e.target.value)} />
        <select className="border p-2 rounded" value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
          <option value="">All Roles</option>
          {allRoles.map((r, i) => <option key={i} value={r}>{r}</option>)}
        </select>
        <ClinicalButton onClick={() => exportToCSV(filteredUsers, 'users.csv')}>Export Users CSV</ClinicalButton>
        <ClinicalButton onClick={() => setAnalyticsOpen(true)}>Show Analytics</ClinicalButton>
      </div>
      <ClinicalTable
        columns={["id", "username", "email", "role", "active"]}
        data={filteredUsers}
        className="mb-8"
      />
      <div className="flex gap-2 flex-wrap">
        {filteredUsers.map(user => (
          <React.Fragment key={user.id}>
            <ClinicalButton className="mr-2" onClick={() => handleViewUser(user)}>
              View {user.username}
            </ClinicalButton>
            <ClinicalButton className="mr-2" onClick={() => handleStatusToggle(user)} style={{ background: user.active ? '#b91c1c' : '#408D7B' }}>
              {user.active ? 'Deactivate' : 'Activate'}
            </ClinicalButton>
            <ClinicalButton onClick={() => handleSendNotification(user, 'info')}>
              Notify {user.username}
            </ClinicalButton>
          </React.Fragment>
        ))}
      </div>
      <ClinicalModal open={analyticsOpen} onClose={() => setAnalyticsOpen(false)}>
        <h3>User Analytics</h3>
        <div>
          <p><b>Total Users:</b> {users.length}</p>
          <p><b>Active Users:</b> {users.filter(u => u.active).length}</p>
          <p><b>Roles:</b></p>
          <ul className="list-disc ml-6">
            {Array.from(new Set(users.map(u => u.role))).map(role => (
              <li key={role}>{role}: {users.filter(u => u.role === role).length}</li>
            ))}
          </ul>
        </div>
      </ClinicalModal>
      <ClinicalModal open={modalOpen} onClose={handleCloseModal}>
        {selectedUser && (
          <>
            <h3>User: {selectedUser.username}</h3>
            <div>
              <p><b>Email:</b> {selectedUser.email}</p>
              <p><b>Role:</b> 
                <select value={selectedUser.role} onChange={e => handleRoleChange(selectedUser.id, e.target.value)}>
                  <option value="doctor">Doctor</option>
                  <option value="radiologist">Radiologist</option>
                  <option value="hospital_admin">Hospital Admin</option>
                  <option value="super_admin">Super Admin</option>
                  <option value="compliance_officer">Compliance Officer</option>
                </select>
              </p>
              <p><b>Status:</b> {selectedUser.active ? 'Active' : 'Inactive'}</p>
            </div>
          </>
        )}
      </ClinicalModal>
    </div>
  );
};

export default AdminPanel;
