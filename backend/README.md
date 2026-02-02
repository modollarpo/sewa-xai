
# SEWA Backend

This folder contains the API-only backend for SEWA, implemented in NestJS.

## Modules
- **Image Ingestion**: Secure upload, validation, and de-identification of medical images. All events are logged for audit.
- **AI Inference**: Orchestrates explainable AI predictions, always with uncertainty and human-in-the-loop enforcement.
- **Clinician Actions**: Enables clinicians to review, annotate, and override AI results. All actions are auditable.
- **Audit Logging**: Centralized, immutable logging for all actions, supporting regulatory compliance and investigations.

## Compliance Focus
- No autonomous diagnosis; all outputs require human review.
- All requests, responses, and decisions are logged for traceability and regulatory audit.
- Designed for safety, explainability, and auditability at every step.
