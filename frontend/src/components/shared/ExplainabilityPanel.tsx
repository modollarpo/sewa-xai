import React from 'react';
import { theme } from 'ui/theme';

interface ExplainabilityPanelProps {
  reasoningPath: string;
  gradCamImageUrl?: string;
}

const ExplainabilityPanel: React.FC<ExplainabilityPanelProps> = ({ reasoningPath, gradCamImageUrl }) => (
  <div
    className="card p-4 shadow-md mb-4"
    style={{ border: `1.5px solid ${theme.colors.primary}`, borderRadius: theme.radii.card, boxShadow: theme.shadows.card }}
  >
    <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.primary }}>AI Reasoning Path</h3>
    <p className="text-gray-700 mb-2">{reasoningPath}</p>
    {gradCamImageUrl && (
      <div className="mt-2">
        <img src={gradCamImageUrl} alt="Grad-CAM Heatmap" className="rounded w-full max-w-md mx-auto" style={{ borderRadius: theme.radii.card }} />
        <div className="text-xs text-gray-500 mt-1 text-center">Explainability: Grad-CAM Overlay</div>
      </div>
    )}
  </div>
);

export default ExplainabilityPanel;
