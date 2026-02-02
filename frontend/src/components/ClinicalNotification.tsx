import React from 'react';
import { theme } from 'ui/theme';

interface ClinicalNotificationProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
}

const colorMap = {
  success: `bg-[#E6F9F5] text-[#0D4F3D]`,
  error: `bg-[#FFF0F0] text-[#E57373]`,
  info: `bg-[#E0F7FA] text-[#29C6B1]`,
};

const ClinicalNotification: React.FC<ClinicalNotificationProps> = ({ message, type = 'info', onClose }) => (
  <div
    className={`fixed top-6 right-6 z-50 px-4 py-2 rounded shadow ${colorMap[type]}`}
    style={{ borderRadius: theme.radii.card, boxShadow: theme.shadows.card }}
  >
    <span>{message}</span>
    {onClose && (
      <button className="ml-4 text-sm text-gray-500 hover:text-[#0D4F3D]" onClick={onClose}>Dismiss</button>
    )}
  </div>
);

export default ClinicalNotification;
