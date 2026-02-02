from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/compliance", tags=["Compliance"])

class ComplianceStatus(BaseModel):
    area: str
    status: str
    last_audit: str

COMPLIANCE: List[ComplianceStatus] = [
    ComplianceStatus(area="GDPR", status="Compliant", last_audit="2025-12-01"),
    ComplianceStatus(area="HIPAA", status="Compliant", last_audit="2025-11-15"),
    ComplianceStatus(area="NHS", status="Compliant", last_audit="2025-10-20"),
    ComplianceStatus(area="MDR", status="Compliant", last_audit="2025-09-30"),
]

@router.get("/status", response_model=List[ComplianceStatus])
def get_compliance_status():
    return COMPLIANCE
