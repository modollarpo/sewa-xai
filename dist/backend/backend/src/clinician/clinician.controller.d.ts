import { ClinicianService } from './clinician.service';
export declare class ClinicianController {
    private readonly clinicianService;
    constructor(clinicianService: ClinicianService);
    reviewResult(data: {
        imageRef: string;
        aiResult: any;
        decision: string;
        feedback?: string;
    }): Promise<{
        imageRef: string;
        aiResult: any;
        decision: string;
        feedback?: string | undefined;
        status: string;
    }>;
}
