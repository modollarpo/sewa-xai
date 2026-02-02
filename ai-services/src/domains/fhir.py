
import os
import httpx
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/fhir", tags=["FHIR"])

FHIR_BASE_URL = os.getenv("FHIR_BASE_URL")  # Set this env var for real API
USE_REMOTE_FHIR = os.getenv("USE_REMOTE_FHIR", "false").lower() == "true"

class FHIRPatient(BaseModel):
    id: str
    name: str
    birthDate: str
    gender: str

@router.get("/Patient/{patient_id}", response_model=FHIRPatient)
def get_patient(patient_id: str):
    if USE_REMOTE_FHIR and FHIR_BASE_URL:
        response = httpx.get(f"{FHIR_BASE_URL}/Patient/{patient_id}")
        response.raise_for_status()
        data = response.json()
        return FHIRPatient(
            id=data["id"],
            name=data["name"][0]["text"] if data.get("name") else "",
            birthDate=data.get("birthDate", ""),
            gender=data.get("gender", "")
        )
    # Local placeholder
    return FHIRPatient(id=patient_id, name="John Doe", birthDate="1980-01-01", gender="male")
