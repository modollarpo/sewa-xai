import { Injectable } from '@nestjs/common';
import { ClinicalScan } from 'types';

@Injectable()
export class ClinicalScanService {
  private scans: ClinicalScan[] = [];

  getAll(filter?: Partial<ClinicalScan>): ClinicalScan[] {
    if (!filter || Object.keys(filter).length === 0) return this.scans;
    return this.scans.filter(scan =>
      Object.entries(filter).every(([key, value]) =>
        value === undefined || scan[key as keyof ClinicalScan] === value
      )
    );
  }

  create(scan: ClinicalScan): ClinicalScan {
    this.scans.push(scan);
    return scan;
  }

  flag(id: string, status: 'flagged' | 'pending' | 'reviewed'): ClinicalScan | undefined {
    const scan = this.scans.find(s => s.id === id);
    if (scan) scan.status = status;
    return scan;
  }
}
