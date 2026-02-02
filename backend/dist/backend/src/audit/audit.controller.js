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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditController = void 0;
const common_1 = require("@nestjs/common");
const audit_service_1 = require("./audit.service");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const rbac_guard_1 = require("../auth/rbac.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AuditController = class AuditController {
    constructor(auditService) {
        this.auditService = auditService;
    }
    async getAuditLogs() {
        return [
            { timestamp: new Date().toISOString(), user: 'admin', action: 'login', details: 'Successful login' },
            { timestamp: new Date().toISOString(), user: 'radiologist', action: 'upload_image', details: 'Uploaded image X' },
        ];
    }
    async getDashboardMetrics() {
        return {
            totalScans: 1245,
            aiReviews: 1200,
            manualOverrides: 45,
            flaggedUncertainties: 12,
            activeUsers: 18,
        };
    }
};
__decorate([
    (0, common_1.Get)('logs'),
    (0, permissions_decorator_1.Permissions)('access_audit_logs', 'read_audit_logs'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuditController.prototype, "getAuditLogs", null);
__decorate([
    (0, common_1.Get)('metrics'),
    (0, permissions_decorator_1.Permissions)('access_audit_logs'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuditController.prototype, "getDashboardMetrics", null);
AuditController = __decorate([
    (0, common_1.Controller)('audit'),
    __metadata("design:paramtypes", [audit_service_1.AuditService])
], AuditController);
exports.AuditController = AuditController;
//# sourceMappingURL=audit.controller.js.map