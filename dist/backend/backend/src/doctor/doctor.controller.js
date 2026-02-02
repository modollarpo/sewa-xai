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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const audit_service_1 = require("../audit/audit.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const rbac_guard_1 = require("../auth/rbac.guard");
let DoctorController = class DoctorController {
    constructor(auditService) {
        this.auditService = auditService;
        this.cases = [
            { id: 'case1', patient: 'John Doe', status: 'pending', scans: ['scan1', 'scan2'] },
            { id: 'case2', patient: 'Jane Smith', status: 'reviewed', scans: ['scan3'] },
        ];
        this.scans = [
            { id: 'scan1', patient: 'John Doe', type: 'X-ray', date: '2026-01-25' },
            { id: 'scan2', patient: 'John Doe', type: 'CT', date: '2026-01-26' },
            { id: 'scan3', patient: 'Jane Smith', type: 'X-ray', date: '2026-01-27' },
        ];
    }
    async getDashboard() {
        return {
            todayScans: this.scans.length,
            alerts: 1,
            pendingReviews: this.cases.filter(c => c.status === 'pending').length,
            triageQueue: this.cases.map(c => ({ id: c.id, urgency: c.status === 'pending' ? 'high' : 'routine', patient: c.patient })),
        };
    }
    async getCases() {
        return this.cases;
    }
    async createCase(body) {
        const id = 'case' + (this.cases.length + 1);
        const newCase = Object.assign({ id }, body);
        this.cases.push(newCase);
        await this.auditService.logEvent('create_case', { case: newCase });
        return newCase;
    }
    async updateCase(id, body) {
        const c = this.cases.find(ca => ca.id === id);
        if (!c)
            throw new common_1.BadRequestException('Case not found');
        const before = Object.assign({}, c);
        if (body.patient)
            c.patient = body.patient;
        if (body.status)
            c.status = body.status;
        if (body.scans)
            c.scans = body.scans;
        await this.auditService.logEvent('update_case', { before, after: c });
        return c;
    }
    async deleteCase(id) {
        const idx = this.cases.findIndex(ca => ca.id === id);
        if (idx === -1)
            throw new common_1.BadRequestException('Case not found');
        const deleted = this.cases[idx];
        this.cases.splice(idx, 1);
        await this.auditService.logEvent('delete_case', { case: deleted });
        return { message: 'Case deleted' };
    }
    async getScans() {
        return this.scans;
    }
    async createScan(body) {
        const id = 'scan' + (this.scans.length + 1);
        const newScan = Object.assign({ id }, body);
        this.scans.push(newScan);
        await this.auditService.logEvent('create_scan', { scan: newScan });
        return newScan;
    }
    async updateScan(id, body) {
        const s = this.scans.find(sc => sc.id === id);
        if (!s)
            throw new common_1.BadRequestException('Scan not found');
        const before = Object.assign({}, s);
        if (body.patient)
            s.patient = body.patient;
        if (body.type)
            s.type = body.type;
        if (body.date)
            s.date = body.date;
        await this.auditService.logEvent('update_scan', { before, after: s });
        return s;
    }
    async deleteScan(id) {
        const idx = this.scans.findIndex(sc => sc.id === id);
        if (idx === -1)
            throw new common_1.BadRequestException('Scan not found');
        const deleted = this.scans[idx];
        this.scans.splice(idx, 1);
        await this.auditService.logEvent('delete_scan', { scan: deleted });
        return { message: 'Scan deleted' };
    }
};
__decorate([
    (0, common_1.Get)('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('cases'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getCases", null);
__decorate([
    (0, common_1.Post)('cases'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "createCase", null);
__decorate([
    (0, common_1.Patch)('cases/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateCase", null);
__decorate([
    (0, common_1.Delete)('cases/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "deleteCase", null);
__decorate([
    (0, common_1.Get)('scans'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getScans", null);
__decorate([
    (0, common_1.Post)('scans'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "createScan", null);
__decorate([
    (0, common_1.Patch)('scans/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateScan", null);
__decorate([
    (0, common_1.Delete)('scans/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "deleteScan", null);
DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    __metadata("design:paramtypes", [audit_service_1.AuditService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map