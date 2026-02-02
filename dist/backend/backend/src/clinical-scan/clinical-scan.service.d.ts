import { ClinicalScan } from '../../../packages/types';
export declare class ClinicalScanService {
    private scans;
    getAll(filter?: Partial<ClinicalScan>): ClinicalScan[];
    create(scan: ClinicalScan): ClinicalScan;
    flag(id: string, status: 'flagged' | 'pending' | 'reviewed'): ClinicalScan | undefined;
}
