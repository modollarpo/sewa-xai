import React, { useState } from 'react';
import { searchEncounters } from '../../api/fhir_encounter';

const EncountersPage: React.FC = () => {
  const [patientId, setPatientId] = useState('');
  const [encounters, setEncounters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await searchEncounters(patientId);
      setEncounters(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Patient Encounters (FHIR)</h1>
        <form onSubmit={handleSearch} className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Enter patient ID..."
            value={patientId}
            onChange={e => setPatientId(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
          <button type="submit" className="bg-[#29C6B1] text-white px-6 py-2 rounded font-semibold hover:bg-[#0D4F3D] transition">Search</button>
        </form>
        {loading && <div>Loading...</div>}
        {error && <div className="text-[#E57373]">{error}</div>}
        <ul className="divide-y">
          {encounters.map((e, idx) => (
            <li key={e.id || idx} className="py-2">
              <span className="font-semibold">{e.type}</span> — {e.status}, {e.start} to {e.end || 'Ongoing'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EncountersPage;
