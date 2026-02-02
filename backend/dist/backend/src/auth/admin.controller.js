"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const permissions_decorator_1 = require("./permissions.decorator");
const rbac_guard_1 = require("./rbac.guard");
const audit_service_1 = require("../audit/audit.service");
let AdminController = class AdminController {
    constructor(userService, auditService) {
        this.userService = userService;
        this.auditService = auditService;
        this.hospitals = [
            { id: 'demo-hospital', name: 'Demo Hospital', departments: ['Radiology', 'Cardiology'] },
            { id: 'clinic-one', name: 'Clinic One', departments: ['General'] },
        ];
    }
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
    async listSubscriptions() {
        return [
            { id: 'sub1', hospital: 'Demo Hospital', plan: 'Enterprise', active: true, usage: 1200 },
            { id: 'sub2', hospital: 'Clinic One', plan: 'Transactional', active: true, usage: 45 },
        ];
    }
    async getUsage() {
        return [
            { hospital: 'Demo Hospital', scans: 1200, month: '2026-01' },
            { hospital: 'Clinic One', scans: 45, month: '2026-01' },
        ];
    }
    async getInvoices() {
        return [
            { id: 'inv1', hospital: 'Demo Hospital', amount: 10000, currency: 'GBP', date: '2026-01-01', status: 'Paid' },
            { id: 'inv2', hospital: 'Clinic One', amount: 112.5, currency: 'GBP', date: '2026-01-01', status: 'Unpaid' },
        ];
    }
    async forcePasswordReset(id) {
        const user = await this.userService.findById(id);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        return { message: 'Password reset email sent (demo)' };
    }
    async listUsers() {
        return this.userService.findAll();
    }
    async updateUserRole(id, body) {
        const user = await this.userService.findById(id);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        user.role = body.role;
        await this.userService.save(user);
        return { message: 'Role updated' };
    }
    async deactivateUser(id) {
        const user = await this.userService.findById(id);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        user.active = false;
        await this.userService.save(user);
        return { message: 'User deactivated' };
    }
    async reactivateUser(id) {
        const user = await this.userService.findById(id);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        user.active = true;
        await this.userService.save(user);
        return { message: 'User reactivated' };
    }
    async listHospitals() {
        return this.hospitals;
    }
    async createHospital(body) {
        const id = body.name.toLowerCase().replace(/\s+/g, '-');
        const hospital = { id, name: body.name, departments: body.departments || [] };
        this.hospitals.push(hospital);
        await this.auditService.logEvent('create_hospital', { hospital });
        return hospital;
    }
    async updateHospital(id, body) {
        const hospital = this.hospitals.find(h => h.id === id);
        if (!hospital)
            throw new common_1.BadRequestException('Hospital not found');
        const before = Object.assign({}, hospital);
        if (body.name)
            hospital.name = body.name;
        if (body.departments)
            hospital.departments = body.departments;
        await this.auditService.logEvent('update_hospital', { before, after: hospital });
        return hospital;
    }
    async deleteHospital(id) {
        const idx = this.hospitals.findIndex(h => h.id === id);
        if (idx === -1)
            throw new common_1.BadRequestException('Hospital not found');
        const deleted = this.hospitals[idx];
        this.hospitals.splice(idx, 1);
        await this.auditService.logEvent('delete_hospital', { hospital: deleted });
        return { message: 'Hospital deleted' };
    }
};
__decorate([
    (0, common_1.Get)('pricing/plans'),
    (0, permissions_decorator_1.Permissions)('manage_pricing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getPricingPlans", null);
__decorate([
    (0, common_1.Get)('subscriptions'),
    (0, permissions_decorator_1.Permissions)('manage_pricing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "listSubscriptions", null);
__decorate([
    (0, common_1.Get)('usage'),
    (0, permissions_decorator_1.Permissions)('manage_pricing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getUsage", null);
__decorate([
    (0, common_1.Get)('invoices'),
    (0, permissions_decorator_1.Permissions)('manage_pricing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getInvoices", null);
__decorate([
    (0, common_1.Patch)('user/:id/force-reset'),
    (0, permissions_decorator_1.Permissions)('manage_users'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "forcePasswordReset", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, permissions_decorator_1.Permissions)('manage_users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "listUsers", null);
__decorate([
    (0, common_1.Patch)('user/:id/role'),
    (0, permissions_decorator_1.Permissions)('manage_roles'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateUserRole", null);
__decorate([
    (0, common_1.Patch)('user/:id/deactivate'),
    (0, permissions_decorator_1.Permissions)('manage_users'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deactivateUser", null);
__decorate([
    (0, common_1.Patch)('user/:id/reactivate'),
    (0, permissions_decorator_1.Permissions)('manage_users'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "reactivateUser", null);
__decorate([
    (0, common_1.Get)('hospitals'),
    (0, permissions_decorator_1.Permissions)('manage_hospitals'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "listHospitals", null);
__decorate([
    (0, common_1.Post)('hospitals'),
    (0, permissions_decorator_1.Permissions)('manage_hospitals'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createHospital", null);
__decorate([
    (0, common_1.Patch)('hospitals/:id'),
    (0, permissions_decorator_1.Permissions)('manage_hospitals'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateHospital", null);
__decorate([
    (0, common_1.Delete)('hospitals/:id'),
    (0, permissions_decorator_1.Permissions)('manage_hospitals'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteHospital", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    __metadata("design:paramtypes", [user_service_1.UserService,
        audit_service_1.AuditService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map