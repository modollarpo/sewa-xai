"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageIngestionService = void 0;
const common_1 = require("@nestjs/common");
const image_ingestion_utils_1 = require("./image-ingestion.utils");
let ImageIngestionService = class ImageIngestionService {
    async handleImageUpload(file, body) {
        try {
            const safeFilename = (0, image_ingestion_utils_1.deIdentifyFilename)(file.originalname);
            return { status: 'received', reference: safeFilename };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Image upload failed.');
        }
    }
};
ImageIngestionService = __decorate([
    (0, common_1.Injectable)()
], ImageIngestionService);
exports.ImageIngestionService = ImageIngestionService;
//# sourceMappingURL=image-ingestion.service.js.map