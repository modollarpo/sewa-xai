import React from 'react';
import { theme } from 'ui/theme';

interface ConfidenceBadgeProps {
  confidence: number;
}

const getColor = (confidence: number) => {
  if (confidence >= 0.85) return 'bg-[#29C6B1]'; // Luminous Cyan
  if (confidence >= 0.7) return 'bg-[#FFD580]'; // Soft amber for moderate
  return 'bg-[#E57373]'; // Alert Red
};

const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({ confidence }) => (
  <span className={`px-3 py-1 rounded text-white font-semibold text-sm shadow ${getColor(confidence)}`}
    title={`AI Confidence: ${(confidence * 100).toFixed(1)}%`}>
    {confidence >= 0.85 ? 'High Confidence' : confidence >= 0.7 ? 'Moderate' : 'Low'} ({(confidence * 100).toFixed(1)}%)
  </span>
);

export default ConfidenceBadge;
