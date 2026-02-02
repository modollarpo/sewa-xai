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
exports.ImageIngestionController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const image_ingestion_service_1 = require("./image-ingestion.service");
const image_ingestion_dto_1 = require("./image-ingestion.dto");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const rbac_guard_1 = require("../auth/rbac.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ImageIngestionController = class ImageIngestionController {
    constructor(imageIngestionService) {
        this.imageIngestionService = imageIngestionService;
    }
    async uploadImage(file, body) {
        if (!file || !['image/png', 'application/dicom'].includes(file.mimetype)) {
            throw new common_1.BadRequestException('Invalid or missing file.');
        }
        return this.imageIngestionService.handleImageUpload(file, body);
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, permissions_decorator_1.Permissions)('upload_image'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, image_ingestion_dto_1.ImageUploadDto]),
    __metadata("design:returntype", Promise)
], ImageIngestionController.prototype, "uploadImage", null);
ImageIngestionController = __decorate([
    (0, common_1.Controller)('image-ingestion'),
    __metadata("design:paramtypes", [image_ingestion_service_1.ImageIngestionService])
], ImageIngestionController);
exports.ImageIngestionController = ImageIngestionController;
//# sourceMappingURL=image-ingestion.controller.js.map