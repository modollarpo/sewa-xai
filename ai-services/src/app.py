
from fastapi import FastAPI, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import Any, List, Optional
import logging
from datetime import datetime


from domains.fhir import router as fhir_router
from domains.fhir_patient_search import router as fhir_patient_search_router
from domains.audit import router as audit_router
from domains.billing import router as billing_router
from domains.compliance import router as compliance_router
from domains.analytics import router as analytics_router
from domains.fhir_advanced import router as fhir_advanced_router
from domains.vlm_explainability import router as vlm_explainability_router
from domains.fhir_encounter import router as fhir_encounter_router
from domains.fhir_procedure import router as fhir_procedure_router

app = FastAPI(title="SEWA AI Service", description="Explainable AI Inference for SEWA")

logging.basicConfig(level=logging.INFO)

# Register domain routers
app.include_router(fhir_router)
app.include_router(fhir_patient_search_router)
app.include_router(audit_router)
app.include_router(billing_router)
app.include_router(compliance_router)
app.include_router(analytics_router)
app.include_router(fhir_advanced_router)
app.include_router(vlm_explainability_router)
app.include_router(fhir_encounter_router)
app.include_router(fhir_procedure_router)

# In-memory audit log for demonstration
AUDIT_LOG = []

class InferenceRequest(BaseModel):
    image_ref: str

class InferenceResponse(BaseModel):
    prediction: Any
    explanation: str
    uncertainty: float
    model_version: str

class ReviewRequest(BaseModel):
    image_ref: str
    reviewer: str
    review_decision: str
    comments: Optional[str] = None

class OverrideRequest(BaseModel):
    image_ref: str
    overrider: str
    override_decision: str
    reason: Optional[str] = None

class AuditEvent(BaseModel):
    timestamp: str
    event_type: str
    image_ref: str
    details: dict

def log_audit(event_type: str, image_ref: str, details: dict):
    AUDIT_LOG.append(AuditEvent(
        timestamp=datetime.utcnow().isoformat(),
        event_type=event_type,
        image_ref=image_ref,
        details=details
    ))

@app.post("/infer", response_model=InferenceResponse)
async def infer(request: InferenceRequest):
    try:
        if not request.image_ref:
            logging.warning("Missing image_ref in inference request")
            raise HTTPException(status_code=400, detail="Missing image_ref")

        # Simulate prediction, explanation, and uncertainty
        prediction = "No finding"
        explanation = "Saliency map placeholder"
        uncertainty = 0.2  # Example: low uncertainty
        model_version = "v0.1.0"

        # Regulatory: If uncertainty is high, require human-in-the-loop
        if uncertainty > 0.5:
            logging.info(f"High uncertainty for {request.image_ref}, human review required")

        # Audit: Log inference event
        log_audit("inference", request.image_ref, {
            "prediction": prediction,
            "uncertainty": uncertainty,
            "model_version": model_version
        })

        return InferenceResponse(
            prediction=prediction,
            explanation=explanation,
            uncertainty=uncertainty,
            model_version=model_version
        )
    except Exception as e:
        logging.error(f"Inference failed: {str(e)}")
        log_audit("inference_failed", request.image_ref, {"error": str(e)})
        raise HTTPException(status_code=500, detail="AI inference failed. Human review required.")

@app.post("/review")
async def review(request: ReviewRequest):
    # Simulate human review event
    log_audit("review", request.image_ref, {
        "reviewer": request.reviewer,
        "decision": request.review_decision,
        "comments": request.comments
    })
    return {"status": "review logged"}

@app.post("/override")
async def override(request: OverrideRequest):
    # Simulate override event
    log_audit("override", request.image_ref, {
        "overrider": request.overrider,
        "decision": request.override_decision,
        "reason": request.reason
    })
    return {"status": "override logged"}

@app.get("/audit", response_model=List[AuditEvent])
async def get_audit_log(image_ref: Optional[str] = None):
    # Return audit log, optionally filtered by image_ref
    if image_ref:
        return [event for event in AUDIT_LOG if event.image_ref == image_ref]
    return AUDIT_LOG

@app.post("/health")
def health():
    return {"status": "ok"}
