import React, { useEffect, useState } from 'react';
import { getVLMExplanation } from '../../api/vlm';
import ExplainabilityPanel from '../../components/shared/ExplainabilityPanel';

const ScanExplainPage: React.FC<{ scanId?: string }> = ({ scanId = 'scan-001' }) => {
  const [explanation, setExplanation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getVLMExplanation(scanId)
      .then(setExplanation)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [scanId]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">AI Explainability</h1>
        <p className="mb-6 text-gray-700">View the VLM reasoning path and Grad-CAM overlay for this scan.</p>
        {loading && <div>Loading...</div>}
        {error && <div className="text-[#E57373]">{error}</div>}
        {explanation && (
          <ExplainabilityPanel reasoningPath={explanation.reasoning_path} gradCamImageUrl={explanation.gradcam_url} />
        )}
        {explanation && (
          <div className="mt-4 text-sm text-gray-500">Assertion Score: <span className="font-bold text-[#29C6B1]">{explanation.assertion_score}</span></div>
        )}
      </div>
    </div>
  );
};

export default ScanExplainPage;
