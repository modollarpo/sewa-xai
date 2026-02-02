import React, { useEffect, useState } from 'react';
import { getAuditLog } from '../../../api/audit';
import AuditTimeline from '../../../components/shared/AuditTimeline';

const AuditLogPage: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAuditLog()
      .then(setEvents)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Audit Log</h1>
        <p className="mb-6 text-gray-700">View all clinical and administrative audit events. All actions are immutable and available for compliance review.</p>
        {loading && <div>Loading...</div>}
        {error && <div className="text-[#E57373]">{error}</div>}
        {!loading && !error && <AuditTimeline events={events} />}
      </div>
    </div>
  );
};

export default AuditLogPage;
