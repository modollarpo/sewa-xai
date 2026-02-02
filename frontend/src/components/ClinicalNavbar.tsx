
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { theme } from 'ui/theme';

const ClinicalNavbar: React.FC = () => {
  const { token, role, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home', show: true },
    { to: '/clinical-scan-list', label: 'Scans', show: !!token },
    { to: '/pricing-table', label: 'Pricing', show: true },
    { to: '/compliance-table', label: 'Compliance', show: true },
  ];

  const roleLinks: Record<string, { to: string; label: string }[]> = {
    doctor: [
      { to: '/doctor/dashboard', label: 'Dashboard' },
    ],
    admin: [
      { to: '/admin/dashboard', label: 'Admin' },
    ],
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      minHeight: 72,
      background: 'transparent',
      boxShadow: 'none',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 72, height: 72, objectFit: 'contain', borderRadius: 12, background: '#fff', boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <Link to="/" style={{ fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: 1, textShadow: '0 2px 8px rgba(41,198,177,0.08)' }}>SEWA XAI</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {navLinks.filter(link => link.show).map((link) => (
          <Link key={link.to} to={link.to} style={{ color: '#fff', fontWeight: 600, fontSize: 18, display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'background 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.background = 'rgba(246,167,0,0.12)')}
            onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
          >
            {link.label}
          </Link>
        ))}
        {token && role && roleLinks[role] && roleLinks[role].map((link) => (
          <Link key={link.to} to={link.to} style={{ color: '#F6A700', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '6px 12px', borderRadius: 6, background: 'rgba(246,167,0,0.10)' }}>
            {link.label}
          </Link>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {token ? (
          <>
            <Link to="/profile" style={{ color: '#fff', fontWeight: 600, fontSize: 18, display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'background 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(41,198,177,0.12)')}
              onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
            >
              Profile
            </Link>
            <button onClick={handleLogout} style={{ marginLeft: 8, padding: '6px 16px', borderRadius: 6, background: '#F44336', color: '#fff', fontWeight: 700, border: 'none', fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px 0 rgba(244,67,54,0.08)', transition: 'background 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.background = '#d32f2f')}
              onMouseOut={e => (e.currentTarget.style.background = '#F44336')}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: '#fff', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '6px 16px', borderRadius: 6, background: '#F6A700', boxShadow: '0 2px 8px 0 rgba(246,167,0,0.08)' }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ClinicalNavbar;
