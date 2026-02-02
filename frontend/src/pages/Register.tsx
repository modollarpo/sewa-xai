
import React, { useState } from 'react';

import ClinicalButton from '../components/ClinicalButton';
import ClinicalNotification from '../components/ClinicalNotification';
import ClinicalCard from '../components/ClinicalCard';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('doctor');
  const [status, setStatus] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Registering...');
    setTimeout(() => {
      if (username && email && password) {
        setStatus('Registration successful. You can now log in.');
      } else {
        setStatus('Registration failed.');
      }
    }, 800);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      {status && (
        <ClinicalNotification message={status} type={status.includes('success') ? 'success' : 'info'} onClose={() => setStatus(null)} />
      )}
      <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px 0 rgba(41, 198, 177, 0.16)', padding: 40, width: 400, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 72, height: 72, objectFit: 'contain', marginBottom: 12, borderRadius: 14, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1A7F6B', margin: 0 }}>Create Your SEWA Account</h1>
          <p style={{ color: '#6B7280', fontSize: '1.1rem', margin: '8px 0 0' }}>Join the next generation of clinical AI</p>
        </div>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
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
              placeholder="Choose a username"
            />
          </label>
          <label style={{ fontWeight: 500, color: '#1A202C' }}>
            Email
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
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="you@hospital.com"
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
              placeholder="Create a strong password"
            />
          </label>
          <label style={{ fontWeight: 500, color: '#1A202C' }}>
            Role
            <select
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
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              <option value="doctor">Doctor</option>
              <option value="radiologist">Radiologist</option>
              <option value="hospital_admin">Hospital Admin</option>
              <option value="compliance_officer">Compliance Officer</option>
            </select>
          </label>
          <ClinicalButton type="submit" style={{ fontWeight: 600, fontSize: '1.1rem', borderRadius: 8, background: '#1A7F6B', color: '#fff', padding: '12px 0' }}>
            Register
          </ClinicalButton>
        </form>
        <div style={{ marginTop: 24, textAlign: 'center', color: '#6B7280', fontSize: '0.98rem' }}>
          <span>Already have an account? <a href="/login" style={{ color: '#1A7F6B', fontWeight: 600 }}>Sign in</a></span>
        </div>
        <div style={{ marginTop: 8, textAlign: 'center', color: '#6B7280', fontSize: '0.98rem' }}>
          <span>Need help? <a href="/contact" style={{ color: '#F6A700', fontWeight: 600 }}>Contact support</a></span>
        </div>
      </div>
    </div>
  );
};

export default Register;

