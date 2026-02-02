import React from 'react';

export interface ClinicalNotificationProps {
  message: string;
  type?: 'info' | 'warning' | 'error';
}

const colorMap = {
  info: '#29C6B1',
  warning: '#FFD580',
  error: '#e57373',
};

const ClinicalNotification: React.FC<ClinicalNotificationProps> = ({ message, type = 'info' }) => (
  <div style={{ background: colorMap[type], color: '#1A1A1A', padding: 12, borderRadius: 8, margin: '8px 0' }}>
    {message}
  </div>
);

export default ClinicalNotification;
