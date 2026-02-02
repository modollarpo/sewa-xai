import React from 'react';
import { theme } from 'ui/theme';

interface UncertaintyWarningProps {
  uncertainty: number;
}

const UncertaintyWarning: React.FC<UncertaintyWarningProps> = ({ uncertainty }) => (
  <div
    className="flex items-center gap-2 px-3 py-2 rounded shadow font-semibold text-sm"
    style={{ color: theme.colors.warning, background: '#FFF7E0', borderRadius: theme.radii.card }}
    title={`Uncertainty Score: ${(uncertainty * 100).toFixed(1)}%`}
  >
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
      <path
        stroke={theme.colors.warning}
        strokeWidth="2"
        d="M12 8v4m0 4h.01"
      />
      <circle cx="12" cy="12" r="10" stroke={theme.colors.warning} strokeWidth="2" />
    </svg>
    AI Uncertainty: {(uncertainty * 100).toFixed(1)}%
    {uncertainty > 0.15 && <span className="ml-2 font-bold">Manual Review Required</span>}
  </div>
);

export default UncertaintyWarning;
