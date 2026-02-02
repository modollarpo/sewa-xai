import { Controller, Get, Post, Body, Query, Param, Patch } from '@nestjs/common';
import { ClinicalScanService } from './clinical-scan.service';
import { ClinicalScan } from 'types';

@Controller('clinical-scan')
export class ClinicalScanController {
  constructor(private readonly clinicalScanService: ClinicalScanService) {}

  @Get()
  getAll(@Query() query: any): ClinicalScan[] {
    // Allow filtering by patientId, modality, status, etc.
    return this.clinicalScanService.getAll(query);
  }

  @Post()
  create(@Body() scan: ClinicalScan): ClinicalScan {
    return this.clinicalScanService.create(scan);
  }

  @Patch(':id/flag')
  flag(@Param('id') id: string, @Body('status') status: 'flagged' | 'pending' | 'reviewed'): ClinicalScan | undefined {
    return this.clinicalScanService.flag(id, status);
  }
}
