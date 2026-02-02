export declare class AuditService {
    logEvent(event: string, details: any): Promise<{
        event: string;
        details: any;
        timestamp: string;
    }>;
}
