import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [AuditModule],
  controllers: [DoctorController],
})
export class DoctorModule {}
