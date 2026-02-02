import React from 'react';
import AuditTimeline from '../../../components/shared/AuditTimeline';

const mockEvents = [
  { timestamp: '2026-01-27 09:12', user: 'AI Engine', action: 'Triage: High risk', details: 'Confidence 92%' },
  { timestamp: '2026-01-27 09:13', user: 'Dr. Smith', action: 'Reviewed', details: 'Agreed with AI' },
  { timestamp: '2026-01-27 09:15', user: 'Admin', action: 'Audit Log Exported', details: 'PDF generated' },
];

const AuditPortal: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Audit Portal</h1>
      <p className="mb-6 text-gray-700">Immutable audit logs for all clinical and administrative actions. Export logs for compliance and regulatory review.</p>
      <div className="mb-8">
        <AuditTimeline events={mockEvents} />
      </div>
      <button className="bg-[#0D4F3D] text-white px-6 py-2 rounded font-semibold hover:bg-[#29C6B1] transition">Export Audit Log (PDF)</button>
      <div className="text-sm text-gray-500 mt-6">All actions are logged and immutable. For regulator access, see the <a href="/institutional-gateway/regulator" className="text-[#29C6B1] underline">Regulator Portal</a>.</div>
    </div>
  </div>
);

export default AuditPortal;
