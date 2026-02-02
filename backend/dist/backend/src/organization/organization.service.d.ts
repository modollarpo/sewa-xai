import { Organization } from '../../../packages/types/clinical';
export declare class OrganizationService {
    private organizations;
    getAll(): Organization[];
    create(org: Organization): Organization;
}
