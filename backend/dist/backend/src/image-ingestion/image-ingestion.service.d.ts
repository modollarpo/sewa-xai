/// <reference types="multer" />
export declare class ImageIngestionService {
    handleImageUpload(file: Express.Multer.File, body: any): Promise<{
        status: string;
        reference: string;
    }>;
}
