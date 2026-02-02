import { AiInferenceService } from './ai-inference.service';
export declare class AiInferenceController {
    private readonly aiInferenceService;
    constructor(aiInferenceService: AiInferenceService);
    runInference(data: {
        imageRef: string;
    }): Promise<{
        status: string;
        imageRef: string;
        explanation: any;
        uncertainty: any;
        note: string;
        prediction?: undefined;
        modelVersion?: undefined;
    } | {
        status: string;
        imageRef: string;
        prediction: any;
        explanation: any;
        uncertainty: any;
        modelVersion: any;
        note?: undefined;
    }>;
}
