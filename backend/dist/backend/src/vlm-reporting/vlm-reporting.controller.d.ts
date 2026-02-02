import { VLMReportingService } from './vlm-reporting.service';
interface VLMReportRequestDto {
    scanId: string;
    aiScore: number;
    uncertainty: number;
    requestor: string;
}
export declare class VLMReportingController {
    private readonly vlmService;
    constructor(vlmService: VLMReportingService);
    getReports(): never[];
    generateReport(req: VLMReportRequestDto): VLMReportRequestDto;
}
export {};
