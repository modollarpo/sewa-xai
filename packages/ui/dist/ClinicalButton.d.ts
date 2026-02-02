import React from 'react';
export interface ClinicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'warning' | 'default';
}
declare const ClinicalButton: React.FC<ClinicalButtonProps>;
export default ClinicalButton;
