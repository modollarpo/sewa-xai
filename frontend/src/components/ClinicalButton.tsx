import React from 'react';
import { theme } from 'ui/theme';

interface ClinicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ClinicalButton: React.FC<ClinicalButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className={`button-primary px-4 py-2 font-bold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${props.className || ''}`}
    style={{ background: theme.colors.primaryGradient, borderRadius: theme.radii.button }}
  >
    {children}
  </button>
);

export default ClinicalButton;
