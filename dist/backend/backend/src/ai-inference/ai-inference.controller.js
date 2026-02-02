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
exports.AiInferenceController = void 0;
const common_1 = require("@nestjs/common");
const ai_inference_service_1 = require("./ai-inference.service");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const rbac_guard_1 = require("../auth/rbac.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AiInferenceController = class AiInferenceController {
    constructor(aiInferenceService) {
        this.aiInferenceService = aiInferenceService;
    }
    async runInference(data) {
        return this.aiInferenceService.runInference(data.imageRef);
    }
};
__decorate([
    (0, common_1.Post)('run'),
    (0, permissions_decorator_1.Permissions)('request_inference'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiInferenceController.prototype, "runInference", null);
AiInferenceController = __decorate([
    (0, common_1.Controller)('ai-inference'),
    __metadata("design:paramtypes", [ai_inference_service_1.AiInferenceService])
], AiInferenceController);
exports.AiInferenceController = AiInferenceController;
//# sourceMappingURL=ai-inference.controller.js.map