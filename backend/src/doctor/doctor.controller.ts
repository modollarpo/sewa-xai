import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, BadRequestException } from '@nestjs/common';
import { AuditService } from '../audit/audit.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RbacGuard } from '../auth/rbac.guard';

@Controller('doctor')
@UseGuards(JwtAuthGuard, RbacGuard)
export class DoctorController {
  constructor(private readonly auditService: AuditService) {}
  // In-memory demo stores (replace with DB in production)
  private cases = [
    { id: 'case1', patient: 'John Doe', status: 'pending', scans: ['scan1', 'scan2'] },
    { id: 'case2', patient: 'Jane Smith', status: 'reviewed', scans: ['scan3'] },
  ];
  private scans = [
    { id: 'scan1', patient: 'John Doe', type: 'X-ray', date: '2026-01-25' },
    { id: 'scan2', patient: 'John Doe', type: 'CT', date: '2026-01-26' },
    { id: 'scan3', patient: 'Jane Smith', type: 'X-ray', date: '2026-01-27' },
  ];

  @Get('dashboard')
  async getDashboard() {
    return {
      todayScans: this.scans.length,
      alerts: 1,
      pendingReviews: this.cases.filter(c => c.status === 'pending').length,
      triageQueue: this.cases.map(c => ({ id: c.id, urgency: c.status === 'pending' ? 'high' : 'routine', patient: c.patient })),
    };
  }

  @Get('cases')
  async getCases() {
    return this.cases;
  }
  @Post('cases')
  async createCase(@Body() body: { patient: string, status: string, scans: string[] }) {
    const id = 'case' + (this.cases.length + 1);
    const newCase = { id, ...body };
    this.cases.push(newCase);
    await this.auditService.logEvent('create_case', { case: newCase });
    return newCase;
  }
  @Patch('cases/:id')
  async updateCase(@Param('id') id: string, @Body() body: { patient?: string, status?: string, scans?: string[] }) {
    const c = this.cases.find(ca => ca.id === id);
    if (!c) throw new BadRequestException('Case not found');
    const before = { ...c };
    if (body.patient) c.patient = body.patient;
    if (body.status) c.status = body.status;
    if (body.scans) c.scans = body.scans;
    await this.auditService.logEvent('update_case', { before, after: c });
    return c;
  }
  @Delete('cases/:id')
  async deleteCase(@Param('id') id: string) {
    const idx = this.cases.findIndex(ca => ca.id === id);
    if (idx === -1) throw new BadRequestException('Case not found');
    const deleted = this.cases[idx];
    this.cases.splice(idx, 1);
    await this.auditService.logEvent('delete_case', { case: deleted });
    return { message: 'Case deleted' };
  }

  @Get('scans')
  async getScans() {
    return this.scans;
  }
  @Post('scans')
  async createScan(@Body() body: { patient: string, type: string, date: string }) {
    const id = 'scan' + (this.scans.length + 1);
    const newScan = { id, ...body };
    this.scans.push(newScan);
    await this.auditService.logEvent('create_scan', { scan: newScan });
    return newScan;
  }
  @Patch('scans/:id')
  async updateScan(@Param('id') id: string, @Body() body: { patient?: string, type?: string, date?: string }) {
    const s = this.scans.find(sc => sc.id === id);
    if (!s) throw new BadRequestException('Scan not found');
    const before = { ...s };
    if (body.patient) s.patient = body.patient;
    if (body.type) s.type = body.type;
    if (body.date) s.date = body.date;
    await this.auditService.logEvent('update_scan', { before, after: s });
    return s;
  }
  @Delete('scans/:id')
  async deleteScan(@Param('id') id: string) {
    const idx = this.scans.findIndex(sc => sc.id === id);
    if (idx === -1) throw new BadRequestException('Scan not found');
    const deleted = this.scans[idx];
    this.scans.splice(idx, 1);
    await this.auditService.logEvent('delete_scan', { scan: deleted });
    return { message: 'Scan deleted' };
  }
}
