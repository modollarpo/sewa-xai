
import { Controller, Get, Patch, Body, Param, UseGuards, BadRequestException, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Permissions } from './permissions.decorator';
import { RbacGuard } from './rbac.guard';
import { AuditService } from '../audit/audit.service';

@Controller('admin')
@UseGuards(JwtAuthGuard, RbacGuard)
export class AdminController {
  constructor(
    private readonly userService: UserService,
    private readonly auditService: AuditService,
  ) {}

  // Pricing plans endpoint
  @Get('pricing/plans')
  @Permissions('manage_pricing')
  async getPricingPlans() {
    return [
      {
        name: 'Enterprise',
        price: 10000,
        currency: 'GBP',
        scansIncluded: 6000,
        extraScanPrice: 2.5,
        implementationFee: 25000,
        description: 'Hospitals / NHS Trusts',
      },
      {
        name: 'Transactional',
        price: 2.5,
        currency: 'GBP',
        scansIncluded: 0,
        extraScanPrice: 2.5,
        implementationFee: 0,
        description: 'Private Clinics',
      },
    ];
  }

  // Subscription management endpoint
  @Get('subscriptions')
  @Permissions('manage_pricing')
  async listSubscriptions() {
    // TODO: Replace with DB query
    return [
      { id: 'sub1', hospital: 'Demo Hospital', plan: 'Enterprise', active: true, usage: 1200 },
      { id: 'sub2', hospital: 'Clinic One', plan: 'Transactional', active: true, usage: 45 },
    ];
  }

  // Usage tracking endpoint
  @Get('usage')
  @Permissions('manage_pricing')
  async getUsage() {
    // TODO: Replace with DB query
    return [
      { hospital: 'Demo Hospital', scans: 1200, month: '2026-01' },
      { hospital: 'Clinic One', scans: 45, month: '2026-01' },
    ];
  }

  // Invoice history endpoint
  @Get('invoices')
  @Permissions('manage_pricing')
  async getInvoices() {
    // TODO: Replace with DB query
    return [
      { id: 'inv1', hospital: 'Demo Hospital', amount: 10000, currency: 'GBP', date: '2026-01-01', status: 'Paid' },
      { id: 'inv2', hospital: 'Clinic One', amount: 112.5, currency: 'GBP', date: '2026-01-01', status: 'Unpaid' },
    ];
  }

  @Patch('user/:id/force-reset')
  @Permissions('manage_users')
  async forcePasswordReset(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    if (!user) throw new BadRequestException('User not found');
    // In production, generate token and send email
    return { message: 'Password reset email sent (demo)' };
  }

  @Get('users')
  @Permissions('manage_users')
  async listUsers() {
    return this.userService.findAll();
  }

  @Patch('user/:id/role')
  @Permissions('manage_roles')
  async updateUserRole(@Param('id') id: string, @Body() body: { role: string }) {
    const user = await this.userService.findById(id);
    if (!user) throw new BadRequestException('User not found');
    user.role = body.role;
    await this.userService.save(user);
    return { message: 'Role updated' };
  }

  @Patch('user/:id/deactivate')
  @Permissions('manage_users')
  async deactivateUser(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    if (!user) throw new BadRequestException('User not found');
    user.active = false;
    await this.userService.save(user);
    return { message: 'User deactivated' };
  }

  @Patch('user/:id/reactivate')
  @Permissions('manage_users')
  async reactivateUser(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    if (!user) throw new BadRequestException('User not found');
    user.active = true;
    await this.userService.save(user);
    return { message: 'User reactivated' };
  }
  // In-memory hospital store for demo (replace with DB in production)
  private hospitals = [
    { id: 'demo-hospital', name: 'Demo Hospital', departments: ['Radiology', 'Cardiology'] },
    { id: 'clinic-one', name: 'Clinic One', departments: ['General'] },
  ];

  @Get('hospitals')
  @Permissions('manage_hospitals')
  async listHospitals() {
    return this.hospitals;
  }

  @Post('hospitals')
  @Permissions('manage_hospitals')
  async createHospital(@Body() body: { name: string, departments?: string[] }) {
    const id = body.name.toLowerCase().replace(/\s+/g, '-');
    const hospital = { id, name: body.name, departments: body.departments || [] };
    this.hospitals.push(hospital);
    await this.auditService.logEvent('create_hospital', { hospital });
    return hospital;
  }

  @Patch('hospitals/:id')
  @Permissions('manage_hospitals')
  async updateHospital(@Param('id') id: string, @Body() body: { name?: string, departments?: string[] }) {
    const hospital = this.hospitals.find(h => h.id === id);
    if (!hospital) throw new BadRequestException('Hospital not found');
    const before = { ...hospital };
    if (body.name) hospital.name = body.name;
    if (body.departments) hospital.departments = body.departments;
    await this.auditService.logEvent('update_hospital', { before, after: hospital });
    return hospital;
  }

  @Delete('hospitals/:id')
  @Permissions('manage_hospitals')
  async deleteHospital(@Param('id') id: string) {
    const idx = this.hospitals.findIndex(h => h.id === id);
    if (idx === -1) throw new BadRequestException('Hospital not found');
    const deleted = this.hospitals[idx];
    this.hospitals.splice(idx, 1);
    await this.auditService.logEvent('delete_hospital', { hospital: deleted });
    return { message: 'Hospital deleted' };
  }
}
