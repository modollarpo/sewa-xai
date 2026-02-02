import React, { useEffect, useState } from 'react';
import ClinicalTable from '../components/ClinicalTable';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalModal from '../components/ClinicalModal';
import { apiGet } from '../services/api';
import { apiPatch, apiDelete } from '../services/api.crud';
import { apiPost } from '../services/api';


const HospitalManagement: React.FC = () => {
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);
  const [editMode, setEditMode] = useState<'create' | 'edit' | null>(null);
  const [form, setForm] = useState({ name: '', departments: '' });
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');

  const fetchHospitals = () => {
    setLoading(true);
    apiGet<any[]>('/auth/admin/hospitals')
      .then((data) => setHospitals(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  const handleView = (hospital: any) => {
    setSelectedHospital(hospital);
    setEditMode(null);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedHospital(null);
    setEditMode(null);
    setForm({ name: '', departments: '' });
    setError(null);
  };
  const handleEdit = (hospital: any) => {
    setSelectedHospital(hospital);
    setForm({ name: hospital.name, departments: hospital.departments.join(', ') });
    setEditMode('edit');
    setModalOpen(true);
  };
  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this hospital?')) return;
    try {
      await apiDelete(`/auth/admin/hospitals/${id}`);
      fetchHospitals();
    } catch (e) {
      setError('Delete failed');
    }
  };
  const handleCreate = () => {
    setForm({ name: '', departments: '' });
    setEditMode('create');
    setModalOpen(true);
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const departments = form.departments.split(',').map(d => d.trim()).filter(Boolean);
    try {
      if (editMode === 'create') {
        await apiPost('/auth/admin/hospitals', { name: form.name, departments });
      } else if (editMode === 'edit' && selectedHospital) {
        await apiPatch(`/auth/admin/hospitals/${selectedHospital.id}`, { name: form.name, departments });
      }
      fetchHospitals();
      handleCloseModal();
    } catch (e) {
      setError('Save failed');
    }
  };

  // Advanced filtering
  const allDepartments = Array.from(new Set(hospitals.flatMap(h => h.departments)));
  const filteredHospitals = hospitals.filter(h => {
    const matchesSearch = !search ||
      h.id.toLowerCase().includes(search.toLowerCase()) ||
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.departments.some((d: string) => d.toLowerCase().includes(search.toLowerCase()));
    const matchesDept = !departmentFilter || h.departments.includes(departmentFilter);
    return matchesSearch && matchesDept;
  });

  return (
    <div className="p-6">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Hospital & Department Management</h1>
          <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Manage hospitals, departments, and organizational structure.</p>
        </div>
      </div>
      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <ClinicalButton onClick={handleCreate}>Add Hospital</ClinicalButton>
        <input className="border p-2 rounded" placeholder="Search hospitals..." value={search} onChange={e => setSearch(e.target.value)} />
        <select className="border p-2 rounded" value={departmentFilter} onChange={e => setDepartmentFilter(e.target.value)}>
          <option value="">All Departments</option>
          {allDepartments.map((d, i) => <option key={i} value={d}>{d}</option>)}
        </select>
      </div>
      {loading ? <p>Loading...</p> : <>
        <ClinicalTable columns={["id", "name", "departments", "actions"]} data={filteredHospitals.map(h => ({
          ...h,
          departments: h.departments.join(', '),
          actions: (
            <>
              <ClinicalButton className="mr-2" onClick={() => handleView(h)}>View</ClinicalButton>
              <ClinicalButton className="mr-2" onClick={() => handleEdit(h)}>Edit</ClinicalButton>
              <ClinicalButton onClick={() => handleDelete(h.id)} style={{ background: '#b91c1c' }}>Delete</ClinicalButton>
            </>
          )
        }))} />
        <ClinicalModal open={modalOpen} onClose={handleCloseModal}>
          {editMode ? (
            <>
              <h3>{editMode === 'create' ? 'Add Hospital' : editMode === 'edit' ? 'Edit Hospital' : selectedHospital ? `Hospital: ${selectedHospital.name}` : ''}</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold">Name</label>
                  <input name="name" className="border p-2 rounded w-full" value={form.name} onChange={handleFormChange} required />
                </div>
                <div>
                  <label className="block font-semibold">Departments (comma separated)</label>
                  <input name="departments" className="border p-2 rounded w-full" value={form.departments} onChange={handleFormChange} />
                </div>
                {error && <div className="text-red-600">{error}</div>}
                <div className="flex gap-2">
                  <ClinicalButton type="submit">Save</ClinicalButton>
                  <ClinicalButton type="button" onClick={handleCloseModal}>Cancel</ClinicalButton>
                </div>
              </form>
            </>
          ) : selectedHospital && (
            <>
              <h3>Hospital: {selectedHospital.name}</h3>
              <div>
                <p><b>ID:</b> {selectedHospital.id}</p>
                <p><b>Name:</b> {selectedHospital.name}</p>
                <p><b>Departments:</b> {selectedHospital.departments.join(', ')}</p>
              </div>
            </>
          )}
        </ClinicalModal>
      </>}
    </div>
  );
};

export default HospitalManagement;
