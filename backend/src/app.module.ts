import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user.entity';
import { ImageIngestionModule } from './image-ingestion/image-ingestion.module';
import { AiInferenceModule } from './ai-inference/ai-inference.module';
import { ClinicianModule } from './clinician/clinician.module';
import { AuditModule } from './audit/audit.module';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';
import { OrganizationModule } from './organization/organization.module';
import { ClinicalScanModule } from './clinical-scan/clinical-scan.module';
import { TriageEngineModule } from './triage-engine/triage-engine.module';
import { VLMReportingModule } from './vlm-reporting/vlm-reporting.module';
import { BillingModule } from './billing/billing.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dolapo',
      password: 'Aquila2615',
      database: 'sewa',
      entities: [process.cwd() + '/dist/backend/src/**/*.entity.js'],
      migrations: [process.cwd() + '/dist/backend/src/migrations/*.js'],
      synchronize: false,
    }),
    // All other modules must come after TypeOrmModule.forRoot
    ImageIngestionModule,
    AiInferenceModule,
    ClinicianModule,
    AuditModule,
    AuthModule,
    DoctorModule,
    OrganizationModule,
    ClinicalScanModule,
    TriageEngineModule,
    VLMReportingModule,
    BillingModule,
    AuditLogsModule,
  ],
})
export class AppModule {}
