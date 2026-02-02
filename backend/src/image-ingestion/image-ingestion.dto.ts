import { IsNotEmpty, IsString } from 'class-validator';

export class ImageUploadDto {
  @IsNotEmpty()
  @IsString()
  patientId!: string; // De-identified patient reference

  // Add more metadata fields as required by regulatory policy
}
