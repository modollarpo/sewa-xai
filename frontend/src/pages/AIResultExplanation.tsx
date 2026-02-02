import React, { useState } from 'react';
import ClinicalCard from '../components/ClinicalCard';
import ClinicalButton from '../components/ClinicalButton';
import { aiInfer } from '../services/ai';

const AIResultExplanation: React.FC = () => {
  const [imageRef, setImageRef] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInfer = async () => {
    setLoading(true); setError('');
    try {
      const res = await aiInfer(imageRef);
      setResult(res);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>AI Result Explanation</h1>
          <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Interpret AI results, review confidence, and understand model explanations for clinical scans.</p>
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <input className="border p-2 rounded" placeholder="Image Reference" value={imageRef} onChange={e => setImageRef(e.target.value)} />
        <ClinicalButton onClick={handleInfer} disabled={loading || !imageRef}>Run Inference</ClinicalButton>
      </div>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {result && <>
        <ClinicalCard title="Confidence & Explanation">
          <p className="text-gray-700">
            Confidence: {result.uncertainty !== undefined ? `${Math.round((1-result.uncertainty)*100)}%` : 'N/A'}<br />
            Explanation: {result.explanation || 'N/A'}
          </p>
        </ClinicalCard>
        <ClinicalCard title="Heatmap">
          <div className="bg-gray-200 h-32 flex items-center justify-center text-gray-500">Heatmap Placeholder</div>
        </ClinicalCard>
        <ClinicalCard title="Uncertainty Banner">
          {result.uncertainty > 0.5 ? (
            <p className="text-red-600 font-bold">AI uncertain — human review required</p>
          ) : (
            <p className="text-green-700 font-bold">AI confident</p>
          )}
        </ClinicalCard>
        <ClinicalCard title="Model Version">
          <p>{result.modelVersion || 'N/A'}</p>
        </ClinicalCard>
      </>}
    </div>
  );
};

export default AIResultExplanation;
