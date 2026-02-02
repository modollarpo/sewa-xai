import React, { useEffect, useState } from 'react';
import ClinicalCard from '../components/ClinicalCard';
import ClinicalTable from '../components/ClinicalTable';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalModal from '../components/ClinicalModal';
import { apiGet, apiPost } from '../services/api';
import { apiPatch, apiDelete } from '../services/api.crud';
import { theme } from 'ui/theme';


const PatientCaseView: React.FC = () => {
  const [cases, setCases] = useState<any[]>([]);
  const [scans, setScans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [caseFilter, setCaseFilter] = useState('');
  const [scanFilter, setScanFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'case' | 'scan' | null>(null);
  const [editMode, setEditMode] = useState<'create' | 'edit' | null>(null);
  const [selected, setSelected] = useState<any>(null);
  const [form, setForm] = useState<any>({});
  const [error, setError] = useState<string | null>(null);

  const fetchAll = () => {
    setLoading(true);
    Promise.all([
      apiGet('/doctor/cases'),
      apiGet('/doctor/scans'),
    ]).then(([cases, scans]) => {
      setCases(cases as any[]);
      setScans(scans as any[]);
    }).finally(() => setLoading(false));
  };
  useEffect(() => { fetchAll(); }, []);

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

  const filteredCases = cases.filter(c =>
    !caseFilter || c.patient.toLowerCase().includes(caseFilter.toLowerCase()) || c.status.toLowerCase().includes(caseFilter.toLowerCase())
  );
  const filteredScans = scans.filter(s =>
    !scanFilter || s.patient.toLowerCase().includes(scanFilter.toLowerCase()) || s.type.toLowerCase().includes(scanFilter.toLowerCase())
  );

  // CRUD handlers
  const handleOpenModal = (type: 'case' | 'scan', mode: 'create' | 'edit', item?: any) => {
    setModalType(type);
    setEditMode(mode);
    setSelected(item || null);
    setForm(item ? { ...item, scans: (item.scans || []).join(', ') } : {});
    setModalOpen(true);
    setError(null);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setEditMode(null);
    setModalType(null);
    setSelected(null);
    setForm({});
    setError(null);
  };
  const handleDelete = async (type: 'case' | 'scan', id: string) => {
    if (!window.confirm(`Delete this ${type}?`)) return;
    try {
      await apiDelete(`/doctor/${type === 'case' ? 'cases' : 'scans'}/${id}`);
      fetchAll();
    } catch (e) { setError('Delete failed'); }
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f: any) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (modalType === 'case') {
        const payload = { ...form, scans: (form.scans || '').split(',').map((s: string) => s.trim()).filter(Boolean) };
        if (editMode === 'create') await apiPost('/doctor/cases', payload);
        else if (editMode === 'edit' && selected) await apiPatch(`/doctor/cases/${selected.id}`, payload);
      } else if (modalType === 'scan') {
        if (editMode === 'create') await apiPost('/doctor/scans', form);
        else if (editMode === 'edit' && selected) await apiPatch(`/doctor/scans/${selected.id}`, form);
      }
      fetchAll();
      handleCloseModal();
    } catch (e) { setError('Save failed'); }
  };

  return (
    <div style={{ padding: 32, background: theme.colors.background, minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 24 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <h1 style={{ fontSize: 32, fontWeight: 800, color: theme.colors.primary, margin: 0, letterSpacing: 1 }}>Patient Case View</h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
        <ClinicalButton onClick={() => handleOpenModal('case', 'create')} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="plus">➕</span> Add Case
        </ClinicalButton>
        <ClinicalButton onClick={() => handleOpenModal('scan', 'create')} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="plus">➕</span> Add Scan
        </ClinicalButton>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="search">🔍</span>
          <input style={{ border: '1px solid #CBD5E1', padding: 8, borderRadius: 6 }} placeholder="Filter cases" value={caseFilter} onChange={e => setCaseFilter(e.target.value)} />
        </div>
        <ClinicalButton onClick={() => exportToCSV(filteredCases, 'cases.csv')} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="csv">📄</span> Export Cases
        </ClinicalButton>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="search">🔍</span>
          <input style={{ border: '1px solid #CBD5E1', padding: 8, borderRadius: 6 }} placeholder="Filter scans" value={scanFilter} onChange={e => setScanFilter(e.target.value)} />
        </div>
        <ClinicalButton onClick={() => exportToCSV(filteredScans, 'scans.csv')} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="csv">📄</span> Export Scans
        </ClinicalButton>
      </div>
      {loading ? <p style={{ color: theme.colors.primary, fontWeight: 600 }}>Loading...</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ gridColumn: '1 / span 2', background: '#fff', boxShadow: theme.shadows.card }}>
            <ClinicalCard title={<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span role="img" aria-label="cases">🗂️</span> Cases</span>}>
            <ClinicalTable columns={["id", "patient", "status", "scans", "actions"]} data={filteredCases.map((c: any) => ({
              ...c,
              scans: (c.scans || []).join(', '),
              actions: (
                <div style={{ display: 'flex', gap: 8 }}>
                  <ClinicalButton style={{ background: theme.colors.primary, color: '#fff', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => handleOpenModal('case', 'edit', c)}><span role="img" aria-label="edit">✏️</span> Edit</ClinicalButton>
                  <ClinicalButton style={{ background: '#b91c1c', color: '#fff', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => handleDelete('case', c.id)}><span role="img" aria-label="delete">🗑️</span> Delete</ClinicalButton>
                </div>
              )
            }))} />
            </ClinicalCard>
          </div>
          <div style={{ gridColumn: '1 / span 2', background: '#fff', boxShadow: theme.shadows.card }}>
            <ClinicalCard title={<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span role="img" aria-label="vials">🧪</span> Scans</span>}>
            <ClinicalTable columns={["id", "patient", "type", "date", "actions"]} data={filteredScans.map((s: any) => ({
              ...s,
              actions: (
                <div style={{ display: 'flex', gap: 8 }}>
                  <ClinicalButton style={{ background: theme.colors.primary, color: '#fff', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => handleOpenModal('scan', 'edit', s)}><span role="img" aria-label="edit">✏️</span> Edit</ClinicalButton>
                  <ClinicalButton style={{ background: '#b91c1c', color: '#fff', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => handleDelete('scan', s.id)}><span role="img" aria-label="delete">🗑️</span> Delete</ClinicalButton>
                </div>
              )
            }))} />
            </ClinicalCard>
          </div>
          <ClinicalModal open={modalOpen} onClose={handleCloseModal}>
            <h3 style={{ fontWeight: 700, fontSize: 22, color: theme.colors.primary, marginBottom: 16 }}>
              {editMode === 'create' ? <><span role="img" aria-label="plus">➕</span> Add {modalType === 'case' ? 'Case' : 'Scan'}</> : <><span role="img" aria-label="edit">✏️</span> Edit {modalType === 'case' ? 'Case' : 'Scan'}</>}
            </h3>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {modalType === 'case' ? (
                <>
                  <div>
                    <label style={{ fontWeight: 600 }}>Patient</label>
                    <input name="patient" style={{ border: '1px solid #CBD5E1', padding: 8, borderRadius: 6, width: '100%' }} value={form.patient || ''} onChange={handleFormChange} required />
                  </div>
                  <div>
                    <label style={{ fontWeight: 600 }}>Status</label>
                    <input name="status" style={{ border: '1px solid #CBD5E1', padding: 8, borderRadius: 6, width: '100%' }} value={form.status || ''} onChange={handleFormChange} required />
                  </div>
                  <div>
                    <label style={{ fontWeight: 600 }}>Scans (comma separated IDs)</label>
                    <input name="scans" style={{ border: '1px solid #CBD5E1', padding: 8, borderRadius: 6, width: '100%' }} value={form.scans || ''} onChange={handleFormChange} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label style={{ fontWeight: 600 }}>Patient</label>
                    <input name="patient" style={{ border: '1px solid #CBD5E1', padding: 8, borderRadius: 6, width: '100%' }} value={form.patient || ''} onChange={handleFormChange} required />
                  </div>
                  <div>
                    <label style={{ fontWeight: 600 }}>Type</label>
                    <input name="type" style={{ border: '1px solid #CBD5E1', padding: 8, borderRadius: 6, width: '100%' }} value={form.type || ''} onChange={handleFormChange} required />
                  </div>
                  <div>
                    <label style={{ fontWeight: 600 }}>Date</label>
                    <input name="date" style={{ border: '1px solid #CBD5E1', padding: 8, borderRadius: 6, width: '100%' }} value={form.date || ''} onChange={handleFormChange} required />
                  </div>
                </>
              )}
              {error && <div style={{ color: '#b91c1c', fontWeight: 600 }}>{error}</div>}
              <div style={{ display: 'flex', gap: 12 }}>
                <ClinicalButton type="submit" style={{ background: theme.colors.primary, color: '#fff' }}>Save</ClinicalButton>
                <ClinicalButton type="button" onClick={handleCloseModal} style={{ background: '#CBD5E1', color: '#222' }}>Cancel</ClinicalButton>
              </div>
            </form>
          </ClinicalModal>
        </div>
      )}
    </div>
  );
};

export default PatientCaseView;
