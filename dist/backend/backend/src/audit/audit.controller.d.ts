import { AuditService } from './audit.service';
export declare class AuditController {
    private readonly auditService;
    constructor(auditService: AuditService);
    getAuditLogs(): Promise<{
        timestamp: string;
        user: string;
        action: string;
        details: string;
    }[]>;
    getDashboardMetrics(): Promise<{
        totalScans: number;
        aiReviews: number;
        manualOverrides: number;
        flaggedUncertainties: number;
        activeUsers: number;
    }>;
}
