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
exports.PasswordResetController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const password_utils_1 = require("./password.utils");
const uuid_1 = require("uuid");
const email_service_1 = require("../utils/email.service");
let PasswordResetController = class PasswordResetController {
    constructor(userService) {
        this.userService = userService;
    }
    async requestReset(body) {
        const user = await this.userService.findByUsername(body.username);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        const token = (0, uuid_1.v4)();
        const expiry = new Date(Date.now() + 1000 * 60 * 30);
        await this.userService.setResetToken(user.username, token, expiry);
        const emailToSend = (typeof user.email === 'string' && user.email) ? user.email : (typeof body.email === 'string' ? body.email : undefined);
        if (emailToSend) {
            await (0, email_service_1.sendEmail)(emailToSend, 'SEWA Password Reset', `Your password reset token: ${token}`);
        }
        return { message: 'Password reset requested', token: process.env.NODE_ENV === 'development' ? token : undefined };
    }
    async resetPassword(body) {
        const user = await this.userService.findByResetToken(body.token);
        if (!user || !user.resetTokenExpiry || user.resetTokenExpiry < new Date()) {
            throw new common_1.BadRequestException('Invalid or expired token');
        }
        const passwordHash = await (0, password_utils_1.hashPassword)(body.newPassword);
        await this.userService.updatePassword(user.id, passwordHash);
        return { message: 'Password reset successful' };
    }
};
__decorate([
    (0, common_1.Post)('request-reset'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PasswordResetController.prototype, "requestReset", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PasswordResetController.prototype, "resetPassword", null);
PasswordResetController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], PasswordResetController);
exports.PasswordResetController = PasswordResetController;
//# sourceMappingURL=password-reset.controller.js.map