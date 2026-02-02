export declare class ClinicianService {
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
