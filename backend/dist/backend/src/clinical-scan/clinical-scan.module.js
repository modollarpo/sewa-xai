"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicalScanModule = void 0;
const common_1 = require("@nestjs/common");
const clinical_scan_service_1 = require("./clinical-scan.service");
const clinical_scan_controller_1 = require("./clinical-scan.controller");
let ClinicalScanModule = class ClinicalScanModule {
};
ClinicalScanModule = __decorate([
    (0, common_1.Module)({
        providers: [clinical_scan_service_1.ClinicalScanService],
        controllers: [clinical_scan_controller_1.ClinicalScanController],
        exports: [clinical_scan_service_1.ClinicalScanService],
    })
], ClinicalScanModule);
exports.ClinicalScanModule = ClinicalScanModule;
//# sourceMappingURL=clinical-scan.module.js.map