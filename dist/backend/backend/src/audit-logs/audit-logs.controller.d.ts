import { AuditLogsService } from './audit-logs.service';
interface AuditLogDto {
    id: string;
    userId: string;
    action: string;
    timestamp: string;
    hash: string;
}
export declare class AuditLogsController {
    private readonly auditLogsService;
    constructor(auditLogsService: AuditLogsService);
    getLogs(): never[];
    createLog(log: AuditLogDto): AuditLogDto;
}
export {};
