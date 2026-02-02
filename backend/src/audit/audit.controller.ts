import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuditService } from './audit.service';
import { Permissions } from '../auth/permissions.decorator';
import { RbacGuard } from '../auth/rbac.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get('logs')
  @Permissions('access_audit_logs', 'read_audit_logs')
  @UseGuards(JwtAuthGuard, RbacGuard)
  async getAuditLogs() {
    // TODO: Fetch logs from DB, support pagination/filtering
    // For demo, return mock logs
    return [
      { timestamp: new Date().toISOString(), user: 'admin', action: 'login', details: 'Successful login' },
      { timestamp: new Date().toISOString(), user: 'radiologist', action: 'upload_image', details: 'Uploaded image X' },
    ];
  }

  // Dashboard metrics endpoint
  @Get('metrics')
  @Permissions('access_audit_logs')
  @UseGuards(JwtAuthGuard, RbacGuard)
  async getDashboardMetrics() {
    // TODO: Replace with real metrics
    return {
      totalScans: 1245,
      aiReviews: 1200,
      manualOverrides: 45,
      flaggedUncertainties: 12,
      activeUsers: 18,
    };
  }
}
