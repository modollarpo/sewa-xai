import React from 'react';

export interface ClinicalModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ClinicalModal: React.FC<ClinicalModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.2)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 24, padding: 32, minWidth: 320, boxShadow: '0 8px 32px 0 rgba(13, 79, 61, 0.12)' }}>
        <button onClick={onClose} style={{ float: 'right', background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>&times;</button>
        <div style={{ clear: 'both' }} />
        {children}
      </div>
    </div>
  );
};

export default ClinicalModal;
