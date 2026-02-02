import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { TriageEngineService, TriageItem } from './triage-engine.service';

interface TriageRequestDto {
  scanId: string;
  priority: 'critical' | 'urgent' | 'routine';
  aiScore: number;
  uncertainty: number;
}

@Controller('triage-engine')
export class TriageEngineController {
  constructor(private readonly triageService: TriageEngineService) {}

  @Get('worklist')
  getWorklist() {
    return this.triageService.getWorklist();
  }

  @Post('prioritize')
  prioritize(@Body() req: TriageRequestDto) {
    const item: TriageItem = {
      ...req,
      status: 'queued',
      createdAt: new Date().toISOString(),
    };
    return this.triageService.addToWorklist(item);
  }

  @Patch(':scanId/status')
  updateStatus(@Param('scanId') scanId: string, @Body('status') status: 'queued' | 'in_progress' | 'completed') {
    return this.triageService.updateStatus(scanId, status);
  }
}
