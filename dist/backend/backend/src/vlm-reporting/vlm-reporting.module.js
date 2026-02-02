"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLMReportingModule = void 0;
const common_1 = require("@nestjs/common");
const vlm_reporting_service_1 = require("./vlm-reporting.service");
const vlm_reporting_controller_1 = require("./vlm-reporting.controller");
let VLMReportingModule = class VLMReportingModule {
};
VLMReportingModule = __decorate([
    (0, common_1.Module)({
        providers: [vlm_reporting_service_1.VLMReportingService],
        controllers: [vlm_reporting_controller_1.VLMReportingController],
        exports: [vlm_reporting_service_1.VLMReportingService],
    })
], VLMReportingModule);
exports.VLMReportingModule = VLMReportingModule;
//# sourceMappingURL=vlm-reporting.module.js.map