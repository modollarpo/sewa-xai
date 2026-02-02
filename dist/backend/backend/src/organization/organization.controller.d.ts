import { OrganizationService } from './organization.service';
import { Organization } from '../../../packages/types/clinical';
export declare class OrganizationController {
    private readonly orgService;
    constructor(orgService: OrganizationService);
    getAll(): Organization[];
    create(org: Organization): Organization;
}
