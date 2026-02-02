import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';

interface AuditLogDto {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  hash: string;
}

@Controller('audit-logs')
export class AuditLogsController {
  constructor(private readonly auditLogsService: AuditLogsService) {}

  @Get()
  getLogs() {
    // Placeholder: return empty array
    return [];
  }

  @Post()
  createLog(@Body() log: AuditLogDto) {
    // Placeholder: echo back
    return log;
  }
}
