export interface TriageItem {
    scanId: string;
    priority: 'critical' | 'urgent' | 'routine';
    aiScore: number;
    uncertainty: number;
    status: 'queued' | 'in_progress' | 'completed';
    assignedTo?: string;
    createdAt: string;
}
export declare class TriageEngineService {
    private worklist;
    getWorklist(): TriageItem[];
    addToWorklist(item: TriageItem): TriageItem;
    updateStatus(scanId: string, status: 'queued' | 'in_progress' | 'completed'): TriageItem | undefined;
}
