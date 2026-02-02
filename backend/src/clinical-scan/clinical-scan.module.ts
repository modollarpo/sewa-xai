import { Module } from '@nestjs/common';
import { ClinicalScanService } from './clinical-scan.service';
import { ClinicalScanController } from './clinical-scan.controller';

@Module({
  providers: [ClinicalScanService],
  controllers: [ClinicalScanController],
  exports: [ClinicalScanService],
})
export class ClinicalScanModule {}
