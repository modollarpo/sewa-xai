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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const password_utils_1 = require("./password.utils");
let AuthController = class AuthController {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async register(body) {
        if (!body.username || !body.password || !body.role) {
            throw new common_1.BadRequestException('Missing required fields');
        }
        if (body.role === 'super_admin') {
            throw new common_1.BadRequestException('Super admin registration is not allowed');
        }
        const existing = await this.userService.findByUsername(body.username);
        if (existing) {
            throw new common_1.BadRequestException('User already exists');
        }
        const passwordHash = await (0, password_utils_1.hashPassword)(body.password);
        await this.userService.create(body.username, passwordHash, body.role);
        return { message: 'User registered' };
    }
    async updateProfile(body) {
        const user = await this.userService.findByUsername(body.username);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        user.email = body.email;
        await this.userService.save(user);
        return { message: 'Profile updated' };
    }
    async login(body) {
        const user = await this.userService.findByUsername(body.username);
        if (!user || !(await (0, password_utils_1.comparePassword)(body.password, user.passwordHash))) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
        const payload = { username: user.username, sub: user.id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
            role: user.role,
        };
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('update-profile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [jwt_1.JwtService, Object])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map