
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalCard from '../components/ClinicalCard';
import ClinicalNotification from '../components/ClinicalNotification';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus('');
    try {
      if (!username || !password) {
        setStatus('Username and password required.');
        setLoading(false);
        return;
      }
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setStatus(err.message || 'Invalid username or password.');
        setLoading(false);
        return;
      }
      const data = await res.json();
      if (data.access_token && data.role && data.org_type) {
        login(data.access_token, data.role);
        setStatus('');
        setLoading(false);
        // Enforce business logic: route by org_type
        if (data.org_type === 'hospital_tier') {
          // Hospital Tier: must go through SMART on FHIR SSO handshake
          window.location.href = '/sso/smart-fhir';
        } else if (data.org_type === 'small_clinic') {
          // Small Clinic: must go to Stepper-based setup
          navigate('/institutional-gateway/clinic');
        } else {
          // Fallback: dashboard
          navigate('/dashboard');
        }
      } else {
        setStatus('Login failed.');
        setLoading(false);
      }
    } catch (err: any) {
      setStatus('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      {status && (
        <ClinicalNotification message={status} type={status.includes('error') || status.includes('failed') ? 'error' : 'info'} onClose={() => setStatus(null)} />
      )}
      <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px 0 rgba(41, 198, 177, 0.16)', padding: 40, width: 400, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 72, height: 72, objectFit: 'contain', marginBottom: 12, borderRadius: 14, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1A7F6B', margin: 0 }}>Sign in to SEWA XAI</h1>
          <p style={{ color: '#6B7280', fontSize: '1.1rem', margin: '8px 0 0' }}>Enterprise clinical AI platform</p>
        </div>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <label style={{ fontWeight: 500, color: '#1A202C' }}>
            Username
            <input
              style={{
                width: '100%',
                border: '1.5px solid #E5E7EB',
                borderRadius: 6,
                padding: 10,
                marginTop: 4,
                fontSize: '1rem',
                background: '#F9FAFB',
                outline: 'none',
                transition: 'border 0.2s',
              }}
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              disabled={loading}
              autoFocus
              placeholder="e.g. superadmin"
            />
          </label>
          <label style={{ fontWeight: 500, color: '#1A202C' }}>
            Password
            <input
              style={{
                width: '100%',
                border: '1.5px solid #E5E7EB',
                borderRadius: 6,
                padding: 10,
                marginTop: 4,
                fontSize: '1rem',
                background: '#F9FAFB',
                outline: 'none',
                transition: 'border 0.2s',
              }}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
              placeholder="Your password"
            />
          </label>
          <ClinicalButton type="submit" disabled={loading} style={{ fontWeight: 600, fontSize: '1.1rem', borderRadius: 8, background: '#1A7F6B', color: '#fff', padding: '12px 0' }}>
            {loading ? 'Logging in...' : 'Login'}
          </ClinicalButton>
        </form>
        <div style={{ marginTop: 24, textAlign: 'center', color: '#6B7280', fontSize: '0.98rem' }}>
          <span>Forgot password? <a href="/reset" style={{ color: '#F6A700', fontWeight: 600 }}>Reset it</a></span>
        </div>
        <div style={{ marginTop: 8, textAlign: 'center', color: '#6B7280', fontSize: '0.98rem' }}>
          <span>Need access? <a href="/register" style={{ color: '#1A7F6B', fontWeight: 600 }}>Request an account</a></span>
        </div>
        <div style={{ marginTop: 8, textAlign: 'center', color: '#6B7280', fontSize: '0.98rem' }}>
          <span>SEWA XAI is enterprise-ready. <a href="/security" style={{ color: '#1A7F6B', fontWeight: 600 }}>Learn about security</a></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
