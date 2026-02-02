# SEWA RBAC Policy

## Roles & Permissions

### Radiologist / Physician
- Upload and view medical images
- Request AI inference
- View AI results, explanations, and uncertainty
- Review, confirm, or override AI outputs
- Provide feedback on AI results
- **Audit:** All actions logged with user ID, timestamp, and details

### Admin
- Manage users and roles
- Configure system and AI service settings
- View system health and status
- Access audit logs (read-only)
- **Audit:** All admin actions logged with user ID, timestamp, and details

### Auditor
- Read-only access to all audit logs and compliance reports
- View system configuration and user activity
- **Audit:** All log access and report generation logged with auditor ID, timestamp, and scope

### ML Engineer (Restricted)
- Deploy and update AI models (with approval)
- View model performance metrics and logs
- No access to patient data or clinical actions
- **Audit:** All model changes, deployments, and metric accesses logged with engineer ID, timestamp, and details

## Summary Table

| Role                  | Clinical Actions | System Config | Audit Log Access | Model Ops | Patient Data | Audit Logging Required |
|-----------------------|-----------------|--------------|------------------|-----------|--------------|-----------------------|
| Radiologist/Physician | Yes             | No           | No               | No        | Yes (view)   | Yes                   |
| Admin                 | No              | Yes          | Yes (read-only)  | No        | No           | Yes                   |
| Auditor               | No              | No           | Yes (read-only)  | No        | No           | Yes                   |
| ML Engineer           | No              | No           | No               | Yes       | No           | Yes                   |
