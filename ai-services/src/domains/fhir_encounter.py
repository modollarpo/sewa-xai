from fastapi import APIRouter, Query
from typing import List, Optional
from pydantic import BaseModel

router = APIRouter(prefix="/fhir", tags=["FHIR-Encounter"])

class FHIREncounter(BaseModel):
    id: str
    patient_id: str
    type: str
    start: str
    end: Optional[str]
    status: str

@router.get("/Encounter", response_model=List[FHIREncounter])
def search_encounters(patient_id: Optional[str] = None, status: Optional[str] = None):
    encounters = [
        FHIREncounter(id="enc-1", patient_id="1", type="inpatient", start="2026-01-10", end="2026-01-15", status="finished"),
        FHIREncounter(id="enc-2", patient_id="2", type="outpatient", start="2026-01-20", end=None, status="in-progress"),
    ]
    if patient_id:
        encounters = [e for e in encounters if e.patient_id == patient_id]
    if status:
        encounters = [e for e in encounters if e.status == status]
    return encounters
