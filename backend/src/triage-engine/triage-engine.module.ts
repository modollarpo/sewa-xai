import { Module } from '@nestjs/common';
import { TriageEngineService } from './triage-engine.service';
import { TriageEngineController } from './triage-engine.controller';

@Module({
  providers: [TriageEngineService],
  controllers: [TriageEngineController],
  exports: [TriageEngineService],
})
export class TriageEngineModule {}
