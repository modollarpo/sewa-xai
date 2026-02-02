import React from 'react';
import { theme } from 'ui/theme';


interface ClinicalCardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}


const ClinicalCard: React.FC<ClinicalCardProps> = ({ title, children, className }) => (
  <div
    className={`card p-6 mb-6 border border-gray-200 ${className || ''}`}
    style={{ borderRadius: theme.radii.card, boxShadow: theme.shadows.card }}
  >
    <h2 className="text-xl font-semibold mb-2" style={{ color: theme.colors.structure, display: 'flex', alignItems: 'center', gap: 8 }}>
      {title}
    </h2>
    {children}
  </div>
);

export default ClinicalCard;
