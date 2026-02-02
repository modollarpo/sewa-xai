import ClinicalCard from '../components/ClinicalCard';

const Overview: React.FC = () => {
  return (
    <div className="p-6">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>Overview</h1>
          <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Get a snapshot of today's scans, alerts, and pending reviews.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClinicalCard title="Today's Scans">
          {/* Placeholder for today's scans */}
          <p className="text-gray-700">No scans scheduled for today.</p>
        </ClinicalCard>
        <ClinicalCard title="Alerts">
          {/* Placeholder for alerts */}
          <p className="text-gray-700">No alerts.</p>
        </ClinicalCard>
        <ClinicalCard title="Pending Reviews" className="md:col-span-2">
          {/* Placeholder for pending reviews */}
          <p className="text-gray-700">No pending reviews.</p>
        </ClinicalCard>
      </div>
    </div>
  );
};

export default Overview;
