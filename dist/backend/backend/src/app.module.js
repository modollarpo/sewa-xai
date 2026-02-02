"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const image_ingestion_module_1 = require("./image-ingestion/image-ingestion.module");
const ai_inference_module_1 = require("./ai-inference/ai-inference.module");
const clinician_module_1 = require("./clinician/clinician.module");
const audit_module_1 = require("./audit/audit.module");
const auth_module_1 = require("./auth/auth.module");
const doctor_module_1 = require("./doctor/doctor.module");
const organization_module_1 = require("./organization/organization.module");
const clinical_scan_module_1 = require("./clinical-scan/clinical-scan.module");
const triage_engine_module_1 = require("./triage-engine/triage-engine.module");
const vlm_reporting_module_1 = require("./vlm-reporting/vlm-reporting.module");
const billing_module_1 = require("./billing/billing.module");
const audit_logs_module_1 = require("./audit-logs/audit-logs.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            image_ingestion_module_1.ImageIngestionModule,
            ai_inference_module_1.AiInferenceModule,
            clinician_module_1.ClinicianModule,
            audit_module_1.AuditModule,
            auth_module_1.AuthModule,
            doctor_module_1.DoctorModule,
            organization_module_1.OrganizationModule,
            clinical_scan_module_1.ClinicalScanModule,
            triage_engine_module_1.TriageEngineModule,
            vlm_reporting_module_1.VLMReportingModule,
            billing_module_1.BillingModule,
            audit_logs_module_1.AuditLogsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map