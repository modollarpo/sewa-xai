import { Module } from '@nestjs/common';
import { ImageIngestionController } from './image-ingestion.controller';
import { ImageIngestionService } from './image-ingestion.service';

@Module({
  controllers: [ImageIngestionController],
  providers: [ImageIngestionService],
})
export class ImageIngestionModule {}
