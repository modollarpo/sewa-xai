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
exports.VLMReportingController = void 0;
const common_1 = require("@nestjs/common");
const vlm_reporting_service_1 = require("./vlm-reporting.service");
let VLMReportingController = class VLMReportingController {
    constructor(vlmService) {
        this.vlmService = vlmService;
    }
    getReports() {
        return [];
    }
    generateReport(req) {
        return req;
    }
};
__decorate([
    (0, common_1.Get)('reports'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VLMReportingController.prototype, "getReports", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VLMReportingController.prototype, "generateReport", null);
VLMReportingController = __decorate([
    (0, common_1.Controller)('vlm-reporting'),
    __metadata("design:paramtypes", [vlm_reporting_service_1.VLMReportingService])
], VLMReportingController);
exports.VLMReportingController = VLMReportingController;
//# sourceMappingURL=vlm-reporting.controller.js.map