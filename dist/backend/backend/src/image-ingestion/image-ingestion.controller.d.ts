/// <reference types="multer" />
import { ImageIngestionService } from './image-ingestion.service';
import { ImageUploadDto } from './image-ingestion.dto';
export declare class ImageIngestionController {
    private readonly imageIngestionService;
    constructor(imageIngestionService: ImageIngestionService);
    uploadImage(file: Express.Multer.File, body: ImageUploadDto): Promise<{
        status: string;
        reference: string;
    }>;
}
