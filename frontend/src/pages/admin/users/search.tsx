import React, { useState } from 'react';
import { searchPatients } from '../../api/fhir';

const UserPatientSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await searchPatients(query);
      setResults(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Patient Search (FHIR)</h1>
        <form onSubmit={handleSearch} className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Enter patient name..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
          <button type="submit" className="bg-[#29C6B1] text-white px-6 py-2 rounded font-semibold hover:bg-[#0D4F3D] transition">Search</button>
        </form>
        {loading && <div>Loading...</div>}
        {error && <div className="text-[#E57373]">{error}</div>}
        <ul className="divide-y">
          {results.map((p, idx) => (
            <li key={p.id || idx} className="py-2">
              <span className="font-semibold">{p.name}</span> — {p.gender}, {p.birthDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPatientSearch;
