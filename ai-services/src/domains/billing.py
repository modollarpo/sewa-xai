from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/billing", tags=["Billing"])

class Invoice(BaseModel):
    id: str
    period: str
    amount: float
    status: str

INVOICES: List[Invoice] = [
    Invoice(id="inv-001", period="Jan 2026", amount=2500.0, status="Paid"),
    Invoice(id="inv-002", period="Dec 2025", amount=2100.0, status="Paid"),
    Invoice(id="inv-003", period="Nov 2025", amount=2300.0, status="Overdue"),
]

@router.get("/invoices", response_model=List[Invoice])
def get_invoices():
    return INVOICES
