import { Module } from '@nestjs/common';
import { AiInferenceController } from './ai-inference.controller';
import { AiInferenceService } from './ai-inference.service';

@Module({
  controllers: [AiInferenceController],
  providers: [AiInferenceService],
})
export class AiInferenceModule {}
