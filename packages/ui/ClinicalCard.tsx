import React from 'react';

export interface ClinicalCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ClinicalCard: React.FC<ClinicalCardProps> = ({ children, style }) => (
  <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 24, ...style }}>
    {children}
  </div>
);

export default ClinicalCard;
