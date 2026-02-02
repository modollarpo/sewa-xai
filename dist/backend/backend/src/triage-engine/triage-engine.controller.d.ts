import { TriageEngineService, TriageItem } from './triage-engine.service';
interface TriageRequestDto {
    scanId: string;
    priority: 'critical' | 'urgent' | 'routine';
    aiScore: number;
    uncertainty: number;
}
export declare class TriageEngineController {
    private readonly triageService;
    constructor(triageService: TriageEngineService);
    getWorklist(): TriageItem[];
    prioritize(req: TriageRequestDto): TriageItem;
    updateStatus(scanId: string, status: 'queued' | 'in_progress' | 'completed'): TriageItem | undefined;
}
export {};
