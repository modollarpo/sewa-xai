import React, { useEffect, useState } from 'react';
import ClinicalCard from '../components/ClinicalCard';
import ClinicalTable from '../components/ClinicalTable';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalModal from '../components/ClinicalModal';
import ClinicalNotification from '../components/ClinicalNotification';
import { apiGet, apiPost } from '../services/api';

const DoctorDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<any>(null);
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [triageFilter, setTriageFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [auditLog, setAuditLog] = useState<any[]>([]);
  const [reviewText, setReviewText] = useState('');
  const [overrideText, setOverrideText] = useState('');
  const [notification, setNotification] = useState<{ message: string; type?: 'success' | 'error' | 'info' } | null>(null);

  useEffect(() => {
    Promise.all([
      apiGet('/audit/metrics'),
      apiGet('/doctor/dashboard'),
    ]).then(([metrics, dashboard]) => {
      setMetrics(metrics);
      setDashboard(dashboard);
    }).finally(() => setLoading(false));
  }, []);

  const handleReview = async (item: any) => {
    setSelectedCase(item);
    setModalOpen(true);
    setReviewText('');
    setOverrideText('');
    // Fetch audit log for this case
    try {
      const log = await apiGet<any[]>(`/ai/audit?image_ref=${encodeURIComponent(item.id)}`);
      setAuditLog(log);
    } catch {
      setAuditLog([]);
    }
  };

  const submitReview = async () => {
    if (!selectedCase) return;
    try {
      await apiPost('/ai/review', {
        image_ref: selectedCase.id,
        reviewer: 'doctor1', // TODO: use real user
        review_decision: reviewText,
      });
      setNotification({ message: 'Review submitted', type: 'success' });
      setModalOpen(false);
    } catch {
      setNotification({ message: 'Review failed', type: 'error' });
    }
  };

  const submitOverride = async () => {
    if (!selectedCase) return;
    try {
      await apiPost('/ai/override', {
        image_ref: selectedCase.id,
        overrider: 'doctor1', // TODO: use real user
        override_decision: overrideText,
      });
      setNotification({ message: 'Override submitted', type: 'success' });
      setModalOpen(false);
    } catch {
      setNotification({ message: 'Override failed', type: 'error' });
    }
  };

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

  const filteredTriage = (dashboard?.triageQueue ?? []).filter((item: any) =>
    !triageFilter || item.patient.toLowerCase().includes(triageFilter.toLowerCase()) || item.urgency.toLowerCase().includes(triageFilter.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', padding: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
          <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Doctor Dashboard</h1>
            <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Welcome! Review urgent cases, track metrics, and manage your clinical workflow.</p>
          </div>
        </div>
        {notification && (
          <ClinicalNotification {...notification} onClose={() => setNotification(null)} />
        )}
        {loading ? <p>Loading...</p> : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'flex-start' }}>
            <div style={{ gridColumn: '1 / span 2', marginBottom: 16, display: 'flex', gap: 16 }}>
              <input style={{ flex: 1, border: '1.5px solid #E5E7EB', borderRadius: 6, padding: 10, fontSize: '1rem', background: '#F9FAFB' }} placeholder="Filter triage queue" value={triageFilter} onChange={e => setTriageFilter(e.target.value)} />
              <ClinicalButton onClick={() => exportToCSV(filteredTriage, 'triage_queue.csv')}>Export Triage CSV</ClinicalButton>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 24 }}>
              <h2 style={{ color: '#1A7F6B', fontWeight: 600, fontSize: '1.3rem', marginBottom: 8 }}>Today's Scans & Alerts</h2>
              <p style={{ color: '#1A202C', fontSize: '1.1rem' }}>Scans today: {dashboard?.todayScans ?? 0}</p>
              <p style={{ color: '#1A202C', fontSize: '1.1rem' }}>Alerts: {dashboard?.alerts ?? 0}</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 24 }}>
              <h2 style={{ color: '#1A7F6B', fontWeight: 600, fontSize: '1.3rem', marginBottom: 8 }}>AI Triage Queue</h2>
              <ClinicalTable columns={["id", "urgency", "patient"]} data={filteredTriage} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                {filteredTriage.map((item: any) => (
                  <ClinicalButton key={item.id} onClick={() => handleReview(item)}>
                    Review/Override {item.id}
                  </ClinicalButton>
                ))}
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 24, gridColumn: '1 / span 2' }}>
              <h2 style={{ color: '#1A7F6B', fontWeight: 600, fontSize: '1.3rem', marginBottom: 8 }}>Pending Reviews</h2>
              <p style={{ color: '#1A202C', fontSize: '1.1rem' }}>Pending reviews: {dashboard?.pendingReviews ?? 0}</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 24, gridColumn: '1 / span 2' }}>
              <h2 style={{ color: '#1A7F6B', fontWeight: 600, fontSize: '1.3rem', marginBottom: 8 }}>Metrics</h2>
              <ClinicalTable columns={["totalScans", "aiReviews", "manualOverrides", "flaggedUncertainties", "activeUsers"]} data={metrics ? [metrics] : []} />
            </div>
          </div>
        )}
        <ClinicalModal open={modalOpen} onClose={() => setModalOpen(false)}>
          {selectedCase && (
            <>
              <h3 style={{ color: '#1A7F6B', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Review/Override: {selectedCase.id}</h3>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: 8 }}>AI Result for {selectedCase.patient}</h4>
                <p><b>Urgency:</b> {selectedCase.urgency}</p>
                <p><b>Patient:</b> {selectedCase.patient}</p>
                <div style={{ marginTop: 16 }}>
                  <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Review Decision</label>
                  <input style={{ border: '1.5px solid #E5E7EB', borderRadius: 6, padding: 10, width: '100%', marginBottom: 8 }} value={reviewText} onChange={e => setReviewText(e.target.value)} placeholder="e.g. Accept, Needs further review..." />
                  <ClinicalButton style={{ marginRight: 8 }} onClick={submitReview}>Submit Review</ClinicalButton>
                </div>
                <div style={{ marginTop: 16 }}>
                  <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Override Decision</label>
                  <input style={{ border: '1.5px solid #E5E7EB', borderRadius: 6, padding: 10, width: '100%', marginBottom: 8 }} value={overrideText} onChange={e => setOverrideText(e.target.value)} placeholder="e.g. Override to: Finding X" />
                  <ClinicalButton onClick={submitOverride}>Submit Override</ClinicalButton>
                </div>
                <div style={{ marginTop: 24 }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Audit Trail</h4>
                  <ClinicalTable columns={["timestamp", "event_type", "details"]} data={auditLog.map(ev => ({
                    timestamp: ev.timestamp,
                    event_type: ev.event_type,
                    details: typeof ev.details === 'object' ? JSON.stringify(ev.details) : String(ev.details)
                  }))} />
                </div>
              </div>
            </>
          )}
        </ClinicalModal>
      </div>
    </div>
  );
};

export default DoctorDashboard;
