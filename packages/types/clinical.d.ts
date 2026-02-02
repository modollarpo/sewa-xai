export type Role = 'doctor' | 'hospital_admin' | 'super_admin' | 'compliance_officer' | 'radiologist';
export interface Organization {
    id: string;
    name: string;
    type: 'hospital' | 'clinic' | 'trust';
    address: string;
    country: string;
    nhsTrustCode?: string;
}
export interface ClinicalScan {
    id: string;
    patientId: string;
    modality: string;
    imageUrl: string;
    createdAt: string;
    status: 'pending' | 'reviewed' | 'flagged';
    aiScore?: number;
    uncertainty?: number;
}
export interface AuditLog {
    id: string;
    userId: string;
    action: string;
    timestamp: string;
    hash: string;
}
