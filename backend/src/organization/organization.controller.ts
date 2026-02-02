import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Organization } from '../../../packages/types/clinical';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly orgService: OrganizationService) {}

  @Get()
  getAll() {
    return this.orgService.getAll();
  }

  @Post()
  create(@Body() org: Organization) {
    return this.orgService.create(org);
  }
}
