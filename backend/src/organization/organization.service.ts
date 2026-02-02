import { Injectable } from '@nestjs/common';
import { Organization } from '../../../packages/types/clinical';

@Injectable()
export class OrganizationService {
  private organizations: Organization[] = [];

  getAll(): Organization[] {
    return this.organizations;
  }

  create(org: Organization): Organization {
    this.organizations.push(org);
    return org;
  }
}
