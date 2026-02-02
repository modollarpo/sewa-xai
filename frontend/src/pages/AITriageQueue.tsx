import ClinicalCard from '../components/ClinicalCard';

const AITriageQueue: React.FC = () => {
  return (
    <div className="p-6">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>AI Triage Queue</h1>
          <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Monitor and manage AI-prioritized urgent and routine clinical cases.</p>
        </div>
      </div>
      <ClinicalCard title="Urgent Cases">
        {/* Placeholder for urgent cases */}
        <p className="text-gray-700">No urgent cases in queue.</p>
      </ClinicalCard>
      <ClinicalCard title="Routine Cases">
        {/* Placeholder for routine cases */}
        <p className="text-gray-700">No routine cases in queue.</p>
      </ClinicalCard>
    </div>
  );
};

export default AITriageQueue;
