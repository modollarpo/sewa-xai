
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiInferenceService {
  async runInference(imageRef: string) {
    try {
      // Call external AI service (Python/FastAPI)
      const aiResponse = await axios.post('http://ai-services:8000/infer', { image_ref: imageRef });
      // Regulatory: Check uncertainty, require human-in-the-loop if high
      if (aiResponse.data.uncertainty > 0.5) {
        // Audit: Log high-uncertainty event
        return {
          status: 'uncertain',
          imageRef,
          explanation: aiResponse.data.explanation,
          uncertainty: aiResponse.data.uncertainty,
          note: 'Human review mandatory due to high uncertainty.'
        };
      }
      // Audit: Log successful inference
      return {
        status: 'success',
        imageRef,
        prediction: aiResponse.data.prediction,
        explanation: aiResponse.data.explanation,
        uncertainty: aiResponse.data.uncertainty,
        modelVersion: aiResponse.data.model_version
      };
    } catch (err) {
      // Audit: Log inference failure
      throw new InternalServerErrorException('AI inference failed.');
    }
  }
}
