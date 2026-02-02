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
exports.RbacGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_1 = require("./roles");
let RbacGuard = class RbacGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredPermissions = this.reflector.get('permissions', context.getHandler()) || [];
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || !user.role) {
            throw new common_1.ForbiddenException('User role not found');
        }
        const userPerms = roles_1.RolePermissions[user.role] || [];
        const hasPermission = requiredPermissions.every(perm => userPerms.includes(perm));
        if (!hasPermission) {
            throw new common_1.ForbiddenException('Insufficient permissions');
        }
        return true;
    }
};
RbacGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RbacGuard);
exports.RbacGuard = RbacGuard;
//# sourceMappingURL=rbac.guard.js.map