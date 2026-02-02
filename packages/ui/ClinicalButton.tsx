import React from 'react';

export interface ClinicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'warning' | 'default';
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: 'linear-gradient(90deg, #0D4F3D 0%, #29C6B1 100%)',
    color: '#fff',
    border: 'none',
  },
  warning: {
    background: '#FFD580',
    color: '#1A1A1A',
    border: 'none',
  },
  default: {
    background: '#fff',
    color: '#0D4F3D',
    border: '1px solid #0D4F3D',
  },
};

const ClinicalButton: React.FC<ClinicalButtonProps> = ({ variant = 'primary', style, ...props }) => (
  <button
    style={{
      borderRadius: 12,
      padding: '8px 20px',
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 600,
      fontSize: 16,
      cursor: 'pointer',
      ...variantStyles[variant],
      ...style,
    }}
    {...props}
  />
);

export default ClinicalButton;
