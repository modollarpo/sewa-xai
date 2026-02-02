import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

const ClinicalNavbar: React.FC<{ token?: string; role?: string; logout?: () => void }> = ({ token, role, logout }) => (
  <nav style={{ background: theme.colors.structure, color: theme.colors.white, padding: '12px 24px', borderRadius: 12, marginBottom: 24 }}>
    <span style={{ fontWeight: 700, fontSize: 20, marginRight: 24 }}>SEWA</span>
    {token && <Link to="/overview">Overview</Link>}
    {token && <Link to="/triage">Triage Queue</Link>}
    {token && <Link to="/case">Case View</Link>}
    {token && <Link to="/explanation">AI Explanation</Link>}
    <Link to="/landing">Home</Link>
    <Link to="/public-pricing">Pricing</Link>
    <Link to="/security">Security</Link>
    <Link to="/public-compliance">Compliance</Link>
    {role === 'super_admin' || role === 'hospital_admin' ? <Link to="/admin">Admin</Link> : null}
    {role === 'hospital_admin' || role === 'super_admin' ? <Link to="/billing">Billing</Link> : null}
    {role === 'compliance_officer' || role === 'super_admin' ? <Link to="/regulator">Regulator</Link> : null}
    {role === 'super_admin' ? <Link to="/super-admin">Super Admin</Link> : null}
    {role === 'compliance_officer' ? <Link to="/compliance">Compliance</Link> : null}
    {token && logout && <button style={{ marginLeft: 24 }} onClick={logout}>Logout</button>}
  </nav>
);

export default ClinicalNavbar;
