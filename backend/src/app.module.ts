import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST', '127.0.0.1'),
        port: parseInt(config.get<string>('DB_PORT', '3306'), 10),
        username: config.get<string>('DB_USER', 'sewa_user'),
        password: config.get<string>('DB_PASSWORD', ''),
        database: config.get<string>('DB_NAME', 'sewa'),
        autoLoadEntities: true,
        synchronize: false,
        retryAttempts: parseInt(config.get<string>('DB_RETRY_ATTEMPTS', '30'), 10),
        retryDelay: parseInt(config.get<string>('DB_RETRY_DELAY_MS', '2000'), 10),
        // Safer behavior in production
        logging: config.get<string>('NODE_ENV', 'development') !== 'production',
      }),
    }),
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
