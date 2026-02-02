import { AuditService } from '../audit/audit.service';
export declare class DoctorController {
    private readonly auditService;
    constructor(auditService: AuditService);
    private cases;
    private scans;
    getDashboard(): Promise<{
        todayScans: number;
        alerts: number;
        pendingReviews: number;
        triageQueue: {
            id: string;
            urgency: string;
            patient: string;
        }[];
    }>;
    getCases(): Promise<{
        id: string;
        patient: string;
        status: string;
        scans: string[];
    }[]>;
    createCase(body: {
        patient: string;
        status: string;
        scans: string[];
    }): Promise<{
        patient: string;
        status: string;
        scans: string[];
        id: string;
    }>;
    updateCase(id: string, body: {
        patient?: string;
        status?: string;
        scans?: string[];
    }): Promise<{
        id: string;
        patient: string;
        status: string;
        scans: string[];
    }>;
    deleteCase(id: string): Promise<{
        message: string;
    }>;
    getScans(): Promise<{
        id: string;
        patient: string;
        type: string;
        date: string;
    }[]>;
    createScan(body: {
        patient: string;
        type: string;
        date: string;
    }): Promise<{
        patient: string;
        type: string;
        date: string;
        id: string;
    }>;
    updateScan(id: string, body: {
        patient?: string;
        type?: string;
        date?: string;
    }): Promise<{
        id: string;
        patient: string;
        type: string;
        date: string;
    }>;
    deleteScan(id: string): Promise<{
        message: string;
    }>;
}
