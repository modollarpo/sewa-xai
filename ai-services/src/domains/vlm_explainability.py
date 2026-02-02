from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/vlm", tags=["VLM-Explainability"])

class VLMExplanation(BaseModel):
    scan_id: str
    reasoning_path: str
    gradcam_url: str
    assertion_score: float

VLM_EXPLANATIONS: List[VLMExplanation] = [
    VLMExplanation(scan_id="scan-001", reasoning_path="AI detected opacity in right lower lobe. Pattern matches pneumonia.", gradcam_url="/mock/gradcam.png", assertion_score=0.962),
    VLMExplanation(scan_id="scan-002", reasoning_path="No abnormality detected.", gradcam_url="/mock/gradcam2.png", assertion_score=0.991),
]

@router.get("/explanation/{scan_id}", response_model=VLMExplanation)
def get_vlm_explanation(scan_id: str):
    for exp in VLM_EXPLANATIONS:
        if exp.scan_id == scan_id:
            return exp
    return VLMExplanation(scan_id=scan_id, reasoning_path="No explanation found.", gradcam_url="", assertion_score=0.0)
