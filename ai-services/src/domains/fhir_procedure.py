from fastapi import APIRouter, Query
from typing import List, Optional
from pydantic import BaseModel

router = APIRouter(prefix="/fhir", tags=["FHIR-Procedure"])

class FHIRProcedure(BaseModel):
    id: str
    patient_id: str
    code: str
    description: str
    performed: str

@router.get("/Procedure", response_model=List[FHIRProcedure])
def search_procedures(patient_id: Optional[str] = None, code: Optional[str] = None):
    procedures = [
        FHIRProcedure(id="proc-1", patient_id="1", code="47562-6", description="Appendectomy", performed="2026-01-12"),
        FHIRProcedure(id="proc-2", patient_id="2", code="80146-7", description="MRI Brain", performed="2026-01-22"),
    ]
    if patient_id:
        procedures = [p for p in procedures if p.patient_id == patient_id]
    if code:
        procedures = [p for p in procedures if p.code == code]
    return procedures
