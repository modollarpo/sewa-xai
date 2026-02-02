"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./jwt.strategy");
const auth_controller_1 = require("./auth.controller");
const password_reset_controller_1 = require("./password-reset.controller");
const user_service_1 = require("./user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const admin_controller_1 = require("./admin.controller");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'changeme',
                signOptions: { expiresIn: '1h' },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
        ],
        controllers: [auth_controller_1.AuthController, password_reset_controller_1.PasswordResetController, admin_controller_1.AdminController],
        providers: [jwt_strategy_1.JwtStrategy, user_service_1.UserService],
        exports: [jwt_1.JwtModule, passport_1.PassportModule, user_service_1.UserService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map