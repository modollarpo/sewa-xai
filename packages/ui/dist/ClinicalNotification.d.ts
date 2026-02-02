import React from 'react';
export interface ClinicalNotificationProps {
    message: string;
    type?: 'info' | 'warning' | 'error';
}
declare const ClinicalNotification: React.FC<ClinicalNotificationProps>;
export default ClinicalNotification;
