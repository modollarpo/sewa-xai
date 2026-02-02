import React, { useEffect, useState } from 'react';
import ClinicalTable from '../components/ClinicalTable';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalModal from '../components/ClinicalModal';
import { apiGet } from '../services/api';

const Compliance: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      apiGet('/audit/logs'),
      apiGet('/audit/metrics'),
    ]).then(([logs, metrics]) => {
      setLogs(logs as any[]);
      setMetrics(metrics);
    }).finally(() => setLoading(false));
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

  const filteredLogs = logs.filter(l =>
    !filter || l.user?.toLowerCase().includes(filter.toLowerCase()) || l.action?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleViewLog = (log: any) => {
    setSelectedLog(log);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedLog(null);
  };

  return (
    <div className="p-6">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Compliance & Audit Logs</h1>
          <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Audit logs, compliance metrics, and event traceability.</p>
        </div>
      </div>
      {loading ? <p>Loading...</p> : <>
        <div className="flex gap-2 mb-4">
          <input className="border p-2 rounded" placeholder="Filter logs" value={filter} onChange={e => setFilter(e.target.value)} />
          <ClinicalButton onClick={() => exportToCSV(filteredLogs, 'audit_logs.csv')}>Export Logs CSV</ClinicalButton>
        </div>
        <ClinicalTable columns={["timestamp", "user", "action", "details"]} data={filteredLogs.map(l => ({
          ...l,
          details: typeof l.details === 'object' ? JSON.stringify(l.details) : l.details
        }))} />
        <div className="flex gap-2 flex-wrap mt-2">
          {filteredLogs.map((log, i) => (
            <ClinicalButton key={i} onClick={() => handleViewLog(log)}>
              View Event {i+1}
            </ClinicalButton>
          ))}
        </div>
        <ClinicalModal open={modalOpen} onClose={handleCloseModal}>
          {selectedLog && (
            <>
              <h3>Event: {selectedLog.action}</h3>
              <div>
                <p><b>User:</b> {selectedLog.user}</p>
                <p><b>Action:</b> {selectedLog.action}</p>
                <p><b>Timestamp:</b> {selectedLog.timestamp}</p>
                <p><b>Details:</b></p>
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto max-h-64">{typeof selectedLog.details === 'object' ? JSON.stringify(selectedLog.details, null, 2) : selectedLog.details}</pre>
              </div>
            </>
          )}
        </ClinicalModal>
        <h2 className="text-xl font-semibold mt-8 mb-2">System Metrics</h2>
        <ClinicalTable columns={["totalScans", "aiReviews", "manualOverrides", "flaggedUncertainties", "activeUsers"]} data={metrics ? [metrics] : []} />
      </>}
    </div>
  );
};

export default Compliance;
