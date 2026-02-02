from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/analytics", tags=["Analytics"])

class UsageMetric(BaseModel):
    department: str
    scans: int
    ai_overrides: int
    manual_reviews: int
    roi: str

USAGE_METRICS: List[UsageMetric] = [
    UsageMetric(department="Radiology", scans=1200, ai_overrides=45, manual_reviews=12, roi="410%"),
    UsageMetric(department="Cardiology", scans=400, ai_overrides=10, manual_reviews=5, roi="390%"),
    UsageMetric(department="Emergency", scans=275, ai_overrides=8, manual_reviews=3, roi="470%"),
]

@router.get("/usage", response_model=List[UsageMetric])
def get_usage_metrics():
    return USAGE_METRICS
