
import { Controller, Post, UploadedFile, UseInterceptors, Body, BadRequestException, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageIngestionService } from './image-ingestion.service';
import { ImageUploadDto } from './image-ingestion.dto';
import { Permissions } from '../auth/permissions.decorator';
import { RbacGuard } from '../auth/rbac.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('image-ingestion')
export class ImageIngestionController {
  constructor(private readonly imageIngestionService: ImageIngestionService) {}

  // Human-in-the-loop enforced: Only authenticated clinicians can upload
  @Post('upload')
  @Permissions('upload_image')
  @UseGuards(JwtAuthGuard, RbacGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File, @Body() body: ImageUploadDto) {
    // Regulatory: Only allow specific file types (e.g., DICOM, PNG)
    if (!file || !['image/png', 'application/dicom'].includes(file.mimetype)) {
      // Audit: Log failed upload attempt
      throw new BadRequestException('Invalid or missing file.');
    }
    // TODO: Enforce authentication/authorization for clinicians
    // TODO: Log event for audit (success/failure, user, timestamp)
    return this.imageIngestionService.handleImageUpload(file, body);
  }
}
