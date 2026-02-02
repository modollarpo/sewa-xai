import { Controller, Get, Post, Body } from '@nestjs/common';
import { VLMReportingService } from './vlm-reporting.service';

interface VLMReportRequestDto {
  scanId: string;
  aiScore: number;
  uncertainty: number;
  requestor: string;
}

@Controller('vlm-reporting')
export class VLMReportingController {
  constructor(private readonly vlmService: VLMReportingService) {}

  @Get('reports')
  getReports() {
    // Placeholder: return empty array
    return [];
  }

  @Post('generate')
  generateReport(@Body() req: VLMReportRequestDto) {
    // Placeholder: echo back
    return req;
  }
}
