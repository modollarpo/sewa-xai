"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiInferenceService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let AiInferenceService = class AiInferenceService {
    async runInference(imageRef) {
        try {
            const aiResponse = await axios_1.default.post('http://ai-services:8000/infer', { image_ref: imageRef });
            if (aiResponse.data.uncertainty > 0.5) {
                return {
                    status: 'uncertain',
                    imageRef,
                    explanation: aiResponse.data.explanation,
                    uncertainty: aiResponse.data.uncertainty,
                    note: 'Human review mandatory due to high uncertainty.'
                };
            }
            return {
                status: 'success',
                imageRef,
                prediction: aiResponse.data.prediction,
                explanation: aiResponse.data.explanation,
                uncertainty: aiResponse.data.uncertainty,
                modelVersion: aiResponse.data.model_version
            };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('AI inference failed.');
        }
    }
};
AiInferenceService = __decorate([
    (0, common_1.Injectable)()
], AiInferenceService);
exports.AiInferenceService = AiInferenceService;
//# sourceMappingURL=ai-inference.service.js.map