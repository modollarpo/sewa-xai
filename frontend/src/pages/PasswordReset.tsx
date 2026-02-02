import React, { useState } from 'react';
import ClinicalButton from '../components/ClinicalButton';

const PasswordReset: React.FC = () => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Requesting reset...');
    // Replace with real API call
    if (username) {
      setStatus('Reset requested. Token sent (demo).');
    } else {
      setStatus('Reset request failed.');
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Resetting password...');
    // Replace with real API call
    if (token && newPassword) {
      setStatus('Password reset successful.');
    } else {
      setStatus('Password reset failed.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px 0 rgba(41, 198, 177, 0.16)', padding: 40, width: 400, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 72, height: 72, objectFit: 'contain', marginBottom: 12, borderRadius: 14, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1A7F6B', margin: 0 }}>Reset Your Password</h1>
          <p style={{ color: '#6B7280', fontSize: '1.1rem', margin: '8px 0 0' }}>Regain access to your secure clinical workspace</p>
        </div>
        <form onSubmit={handleRequestReset} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
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
              placeholder="Enter your username"
            />
          </label>
          <ClinicalButton type="submit" style={{ fontWeight: 600, fontSize: '1.1rem', borderRadius: 8, background: '#1A7F6B', color: '#fff', padding: '12px 0' }}>
            Request Reset
          </ClinicalButton>
        </form>
        <form onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 24 }}>
          <label style={{ fontWeight: 500, color: '#1A202C' }}>
            Reset Token
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
              value={token}
              onChange={e => setToken(e.target.value)}
              required
              placeholder="Paste your reset token"
            />
          </label>
          <label style={{ fontWeight: 500, color: '#1A202C' }}>
            New Password
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
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
              placeholder="Create a new password"
            />
          </label>
          <ClinicalButton type="submit" style={{ fontWeight: 600, fontSize: '1.1rem', borderRadius: 8, background: '#1A7F6B', color: '#fff', padding: '12px 0' }}>
            Reset Password
          </ClinicalButton>
        </form>
        {status && <p style={{ marginTop: 16, color: status.includes('success') ? '#22C55E' : '#EF4444', fontSize: '1rem', textAlign: 'center' }}>{status}</p>}
        <div style={{ marginTop: 24, textAlign: 'center', color: '#6B7280', fontSize: '0.98rem' }}>
          <span>Remembered your password? <a href="/login" style={{ color: '#1A7F6B', fontWeight: 600 }}>Sign in</a></span>
        </div>
        <div style={{ marginTop: 8, textAlign: 'center', color: '#6B7280', fontSize: '0.98rem' }}>
          <span>Need help? <a href="/contact" style={{ color: '#F6A700', fontWeight: 600 }}>Contact support</a></span>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
