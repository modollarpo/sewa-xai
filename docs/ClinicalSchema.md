# SEWA ClinicalSchema Blueprint

This document defines the core data models, relationships, and API contracts for the SEWA platform, ensuring regulatory compliance, explainability, and safe clinical workflows.

---

## 1. FHIR R4 Resources

### Patient
- id: string
- name: string
- birthDate: string
- gender: string

### Observation
- id: string
- patient_id: string
- code: string (LOINC)
- value: string
- date: string

### Encounter
- id: string
- patient_id: string
- type: string (inpatient/outpatient)
- start: string
- end: string | null
- status: string

### Procedure
- id: string
- patient_id: string
- code: string (LOINC/SNOMED)
- description: string
- performed: string

---

## 2. Scan & AI Prediction
- scan_id: string
- patient_id: string
- study_type: string
- image_url: string
- ai_prediction: string
- confidence: float
- uncertainty: float
- model_version: string
- created_at: string

---

## 3. Explainability Metadata (VLM)
- scan_id: string
- reasoning_path: string
- gradcam_url: string
- assertion_score: float

---

## 4. Uncertainty Engine
- threshold: float (default: 0.85)
- manual_review_required: boolean

---

## 5. Audit Log
- event_id: string
- timestamp: string
- event_type: string (inference, review, override, login, etc.)
- actor: string (user/AI)
- image_ref: string | null
- details: object

---

## 6. User, Role, Hospital
### User
- id: string
- name: string
- email: string
- role: string (doctor, admin, superadmin, billing, regulator)
- status: string (active/suspended)

### Hospital
- id: string
- name: string
- address: string
- departments: string[]

---

## 7. Billing & Usage
- invoice_id: string
- hospital_id: string
- period: string
- amount: float
- status: string (paid/overdue)
- usage: int
- overage: float

---

## 8. Compliance
- area: string (GDPR, HIPAA, NHS, MDR)
- status: string (Compliant/Non-compliant)
- last_audit: string

---

## Relationships
- Patient 1---* Observation
- Patient 1---* Encounter
- Patient 1---* Procedure
- Patient 1---* Scan
- Scan 1---1 VLM Explainability
- Scan 1---* AuditEvent
- Hospital 1---* User
- Hospital 1---* Invoice

---

## API Contracts
- All endpoints return JSON, use RESTful conventions, and enforce RBAC.
- All sensitive actions are logged immutably.
- Clinical and billing data are strictly separated for compliance.

---

This schema is the foundation for all SEWA backend and frontend development, supporting safe, explainable, and auditable clinical AI workflows.
