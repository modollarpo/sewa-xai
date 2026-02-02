import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ClinicianService } from './clinician.service';
import { Permissions } from '../auth/permissions.decorator';
import { RbacGuard } from '../auth/rbac.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('clinician')
export class ClinicianController {
  constructor(private readonly clinicianService: ClinicianService) {}

  // Human-in-the-loop: Only clinicians can confirm/override AI results
  @Post('review')
  @Permissions('review_ai', 'confirm_ai', 'override_ai', 'provide_feedback')
  @UseGuards(JwtAuthGuard, RbacGuard)
  async reviewResult(@Body() data: { imageRef: string; aiResult: any; decision: string; feedback?: string }) {
    // TODO: Log review, enforce audit, store feedback for improvement
    return this.clinicianService.reviewResult(data);
  }
}
