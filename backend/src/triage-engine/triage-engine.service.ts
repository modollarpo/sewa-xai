import { Injectable } from '@nestjs/common';

export interface TriageItem {
  scanId: string;
  priority: 'critical' | 'urgent' | 'routine';
  aiScore: number;
  uncertainty: number;
  status: 'queued' | 'in_progress' | 'completed';
  assignedTo?: string;
  createdAt: string;
}

@Injectable()
export class TriageEngineService {
  private worklist: TriageItem[] = [];

  getWorklist(): TriageItem[] {
    // Sort by priority, then aiScore desc, then uncertainty asc
    return this.worklist.slice().sort((a, b) => {
      const priorityOrder = { critical: 0, urgent: 1, routine: 2 };
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      if (b.aiScore !== a.aiScore) return b.aiScore - a.aiScore;
      return a.uncertainty - b.uncertainty;
    });
  }

  addToWorklist(item: TriageItem): TriageItem {
    this.worklist.push(item);
    return item;
  }

  updateStatus(scanId: string, status: 'queued' | 'in_progress' | 'completed'): TriageItem | undefined {
    const item = this.worklist.find(i => i.scanId === scanId);
    if (item) item.status = status;
    return item;
  }
}
