# ADR-001: Initial System Architecture for SEWA

## Status
Accepted

## Context
SEWA is a regulated clinical AI platform requiring explainability, auditability, and human-in-the-loop for all outputs. No autonomous diagnosis is permitted.

## Decision
- Modular, service-oriented architecture
- All AI outputs are explainable and reviewed by clinicians
- Centralized audit logging for all actions
- Regulatory compliance is enforced at every layer

## Consequences
- Increased traceability and safety
- All services must log actions and decisions
- System fails safely and acknowledges uncertainty
