import { ClinicalScanService } from './clinical-scan.service';
import { ClinicalScan } from '../../../packages/types';
export declare class ClinicalScanController {
    private readonly clinicalScanService;
    constructor(clinicalScanService: ClinicalScanService);
    getAll(query: any): ClinicalScan[];
    create(scan: ClinicalScan): ClinicalScan;
    flag(id: string, status: 'flagged' | 'pending' | 'reviewed'): ClinicalScan | undefined;
}
