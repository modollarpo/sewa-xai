export declare class AiInferenceService {
    runInference(imageRef: string): Promise<{
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
