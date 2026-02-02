import React from 'react';
import { theme } from 'ui/theme';

interface ClinicalModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const ClinicalModal: React.FC<ClinicalModalProps> = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className="bg-white shadow-lg p-6 min-w-[320px] max-w-lg relative"
        style={{ borderRadius: theme.radii.modal, boxShadow: theme.shadows.glass }}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-[#0D4F3D]"
          onClick={onClose}
        >&times;</button>
        {children}
      </div>
    </div>
  );
};

export default ClinicalModal;
