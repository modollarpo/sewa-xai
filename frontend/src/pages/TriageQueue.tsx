import React, { useEffect, useState } from 'react';
import ClinicalTable from '../components/ClinicalTable';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalSection from '../components/ClinicalSection';
import ClinicalNotification from '../components/ClinicalNotification';
import axios from 'axios';

interface TriageItem {
  scanId: string;
  priority: 'critical' | 'urgent' | 'routine';
  aiScore: number;
  uncertainty: number;
  status: 'queued' | 'in_progress' | 'completed';
  assignedTo?: string;
  createdAt: string;
}

const columns = [
  'scanId',
  'priority',
  'aiScore',
  'uncertainty',
  'status',
  'assignedTo',
  'createdAt',
  'actions',
];

export default function TriageQueue() {
  const [worklist, setWorklist] = useState<TriageItem[]>([]);
  const [notification, setNotification] = useState<{ message: string; type?: 'success' | 'error' | 'info' } | null>(null);

  const fetchWorklist = () => {
    axios.get('/api/triage-engine/worklist').then(res => setWorklist(res.data));
  };

  useEffect(() => {
    fetchWorklist();
  }, []);

  const updateStatus = async (scanId: string, status: 'queued' | 'in_progress' | 'completed') => {
    try {
      await axios.patch(`/api/triage-engine/${scanId}/status`, { status });
      setNotification({ message: `Scan ${scanId} marked as ${status.replace('_', ' ')}`, type: 'success' });
      fetchWorklist();
    } catch {
      setNotification({ message: 'Failed to update status', type: 'error' });
    }
  };

  const summary = {
    total: worklist.length,
    critical: worklist.filter(w => w.priority === 'critical').length,
    urgent: worklist.filter(w => w.priority === 'urgent').length,
    routine: worklist.filter(w => w.priority === 'routine').length,
    queued: worklist.filter(w => w.status === 'queued').length,
    inProgress: worklist.filter(w => w.status === 'in_progress').length,
    completed: worklist.filter(w => w.status === 'completed').length,
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {notification && (
        <ClinicalNotification {...notification} onClose={() => setNotification(null)} />
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Triage Queue</h1>
          <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Monitor, prioritize, and manage clinical scan triage in real time.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-[#408D7B]">
          <div className="text-xs text-gray-500 mb-1">Total Scans</div>
          <div className="text-xl font-bold">{summary.total}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-[#F44336]">
          <div className="text-xs text-gray-500 mb-1">Critical</div>
          <div className="text-xl font-bold">{summary.critical}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-[#F6A700]">
          <div className="text-xs text-gray-500 mb-1">Urgent</div>
          <div className="text-xl font-bold">{summary.urgent}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-[#29C6B1]">
          <div className="text-xs text-gray-500 mb-1">Routine</div>
          <div className="text-xl font-bold">{summary.routine}</div>
        </div>
      </div>
      <ClinicalSection title="Worklist">
        <ClinicalTable
          columns={columns}
          data={worklist.map(item => ({
            ...item,
            actions: (
              <div style={{ display: 'flex', gap: 8 }}>
                <ClinicalButton onClick={() => updateStatus(item.scanId, 'in_progress')} disabled={item.status !== 'queued'}>
                  Start
                </ClinicalButton>
                <ClinicalButton onClick={() => updateStatus(item.scanId, 'completed')} disabled={item.status !== 'in_progress'}>
                  Complete
                </ClinicalButton>
              </div>
            ),
          }))}
        />
        <div className="flex gap-4 mt-4">
          <div className="bg-[#F6F8F7] rounded p-3 text-xs text-gray-700">Queued: {summary.queued}</div>
          <div className="bg-[#FEF6ED] rounded p-3 text-xs text-gray-700">In Progress: {summary.inProgress}</div>
          <div className="bg-[#E6F9F5] rounded p-3 text-xs text-gray-700">Completed: {summary.completed}</div>
        </div>
      </ClinicalSection>
    </div>
  );
}
