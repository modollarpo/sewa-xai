from fastapi import APIRouter, Query
from typing import List
from pydantic import BaseModel

router = APIRouter(prefix="/fhir", tags=["FHIR"])

class FHIRPatient(BaseModel):
    id: str
    name: str
    birthDate: str
    gender: str

@router.get("/Patient", response_model=List[FHIRPatient])
def search_patients(name: str = Query(None), gender: str = Query(None)):
    # Placeholder: search logic
    patients = [
        FHIRPatient(id="1", name="John Doe", birthDate="1980-01-01", gender="male"),
        FHIRPatient(id="2", name="Jane Smith", birthDate="1975-05-12", gender="female"),
    ]
    if name:
        patients = [p for p in patients if name.lower() in p.name.lower()]
    if gender:
        patients = [p for p in patients if p.gender == gender]
    return patients
