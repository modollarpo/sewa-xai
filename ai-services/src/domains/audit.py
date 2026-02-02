from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from datetime import datetime

router = APIRouter(prefix="/audit", tags=["Audit"])

class AuditEvent(BaseModel):
    timestamp: str
    event_type: str
    user: str
    details: dict

AUDIT_LOG: List[AuditEvent] = []

@router.get("/log", response_model=List[AuditEvent])
def get_audit_log():
    return AUDIT_LOG

@router.post("/log")
def add_audit_event(event: AuditEvent):
    AUDIT_LOG.append(event)
    return {"status": "added"}
