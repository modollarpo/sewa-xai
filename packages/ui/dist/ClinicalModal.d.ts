import React from 'react';
export interface ClinicalModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare const ClinicalModal: React.FC<ClinicalModalProps>;
export default ClinicalModal;
