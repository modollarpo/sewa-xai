import React from 'react';
import { theme } from 'ui/theme';

interface PricingUsageMeterProps {
  usage: number;
  quota: number;
}

const PricingUsageMeter: React.FC<PricingUsageMeterProps> = ({ usage, quota }) => {
  const percent = Math.min(100, (usage / quota) * 100);
  let barColor = theme.colors.primary;
  if (percent > 90) barColor = '#E57373';
  else if (percent > 75) barColor = theme.colors.warning;

  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-gray-700">Usage</span>
        <span className="text-sm text-gray-500">{usage} / {quota}</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-4" style={{ borderRadius: theme.radii.card }}>
        <div
          className="h-4"
          style={{ width: `${percent}%`, background: barColor, borderRadius: theme.radii.card }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1 text-right">{percent.toFixed(1)}% of quota used</div>
    </div>
  );
};

export default PricingUsageMeter;
