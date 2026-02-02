import { Module } from '@nestjs/common';
import { VLMReportingService } from './vlm-reporting.service';
import { VLMReportingController } from './vlm-reporting.controller';

@Module({
  providers: [VLMReportingService],
  controllers: [VLMReportingController],
  exports: [VLMReportingService],
})
export class VLMReportingModule {}
