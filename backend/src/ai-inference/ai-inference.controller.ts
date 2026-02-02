import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AiInferenceService } from './ai-inference.service';
import { Permissions } from '../auth/permissions.decorator';
import { RbacGuard } from '../auth/rbac.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ai-inference')
export class AiInferenceController {
  constructor(private readonly aiInferenceService: AiInferenceService) {}

  // Human-in-the-loop enforced: Only clinicians can request inference
  @Post('run')
  @Permissions('request_inference')
  @UseGuards(JwtAuthGuard, RbacGuard)
  async runInference(@Body() data: { imageRef: string }) {
    // TODO: Validate input, log request, call AI service, attach explanation
    return this.aiInferenceService.runInference(data.imageRef);
  }
}
