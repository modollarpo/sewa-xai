import React, { useEffect, useState } from 'react';
import { ClinicalCard, ClinicalButton, ClinicalTable, ClinicalModal } from 'ui';
import { ClinicalScan } from 'types';
import { getClinicalScans, flagClinicalScan } from '../api/clinicalScan';
import * as FaIcons from 'react-icons/fa';

const columns = [
  'patientId',
  'modality',
  'status',
  'aiScore',
  'uncertainty',
  'actions',
];

const PAGE_SIZE = 10;

export default function ClinicalScanList() {
  const [scans, setScans] = useState<ClinicalScan[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'' | 'flagged' | 'pending' | 'reviewed'>('');
  const [flagModal, setFlagModal] = useState<{ open: boolean; scan?: ClinicalScan }>({ open: false });
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<'createdAt' | 'aiScore' | ''>('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    getClinicalScans({ patientId: search, status: filter || undefined }).then(data => {
      let sorted = [...data];
      if (sortBy) {
        sorted.sort((a, b) => {
          if (sortBy === 'aiScore') {
            return sortDir === 'asc'
              ? (a.aiScore ?? 0) - (b.aiScore ?? 0)
              : (b.aiScore ?? 0) - (a.aiScore ?? 0);
          }
          if (sortBy === 'createdAt') {
            return sortDir === 'asc'
              ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
              : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          }
          return 0;
        });
      }
      setScans(sorted);
    });
  }, [search, filter, sortBy, sortDir]);

  const handleFlag = (scan: ClinicalScan) => setFlagModal({ open: true, scan });
  const confirmFlag = async (status: 'flagged' | 'pending' | 'reviewed') => {
    if (flagModal.scan) {
      await flagClinicalScan(flagModal.scan.id, status);
      setFlagModal({ open: false });
      getClinicalScans({ patientId: search, status: filter || undefined }).then(setScans);
    }
  };

  const pagedScans = scans.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', padding: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
          <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Clinical Scans</h1>
            <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Browse, search, and manage all clinical scans in your institution.</p>
          </div>
        </div>
        <div style={{ marginBottom: 24, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            placeholder="Search by Patient ID"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: 10, borderRadius: 6, border: '1.5px solid #E5E7EB', minWidth: 200, fontSize: '1rem', background: '#F9FAFB' }}
            aria-label="Search by Patient ID"
          />
          <select value={filter} onChange={e => setFilter(e.target.value as any)} aria-label="Filter by status" style={{ padding: 10, borderRadius: 6, border: '1.5px solid #E5E7EB', fontSize: '1rem', background: '#F9FAFB' }}>
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="flagged">Flagged</option>
          </select>
          <select value={sortBy} onChange={e => setSortBy(e.target.value as any)} aria-label="Sort by" style={{ padding: 10, borderRadius: 6, border: '1.5px solid #E5E7EB', fontSize: '1rem', background: '#F9FAFB' }}>
            <option value="">Sort By</option>
            <option value="createdAt">Date</option>
            <option value="aiScore">AI Score</option>
          </select>
          <select value={sortDir} onChange={e => setSortDir(e.target.value as any)} aria-label="Sort direction" style={{ padding: 10, borderRadius: 6, border: '1.5px solid #E5E7EB', fontSize: '1rem', background: '#F9FAFB' }}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0', gap: 8 }}>
          <ClinicalButton onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</ClinicalButton>
          <span style={{ fontWeight: 500, color: '#1A202C' }}>Page {page} of {Math.ceil(scans.length / PAGE_SIZE) || 1}</span>
          <ClinicalButton onClick={() => setPage(p => p < Math.ceil(scans.length / PAGE_SIZE) ? p + 1 : p)} disabled={page >= Math.ceil(scans.length / PAGE_SIZE)}>Next</ClinicalButton>
        </div>
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 24, marginBottom: 24 }}>
          <ClinicalTable
            columns={columns}
            data={pagedScans.map(scan => ({
              patientId: scan.patientId,
              modality: scan.modality,
              status: `${scan.status.charAt(0).toUpperCase() + scan.status.slice(1)}`,
              aiScore: scan.aiScore,
              uncertainty: scan.uncertainty,
              actions: '',
            }))}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0', gap: 8 }}>
          <ClinicalButton onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</ClinicalButton>
          <span style={{ fontWeight: 500, color: '#1A202C' }}>Page {page} of {Math.ceil(scans.length / PAGE_SIZE) || 1}</span>
          <ClinicalButton onClick={() => setPage(p => p < Math.ceil(scans.length / PAGE_SIZE) ? p + 1 : p)} disabled={page >= Math.ceil(scans.length / PAGE_SIZE)}>Next</ClinicalButton>
        </div>
        <ClinicalModal open={flagModal.open} onClose={() => setFlagModal({ open: false })}>
          <h3 style={{ color: '#1A7F6B', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Flag Scan</h3>
          <p>Set status for scan {flagModal.scan?.id}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <ClinicalButton onClick={() => confirmFlag('flagged')}>Flag</ClinicalButton>
            <ClinicalButton onClick={() => confirmFlag('reviewed')}>Mark Reviewed</ClinicalButton>
            <ClinicalButton onClick={() => confirmFlag('pending')}>Set Pending</ClinicalButton>
          </div>
        </ClinicalModal>
      </div>
    </div>
  );
}
