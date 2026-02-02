import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
  { to: '/legal', label: 'Legal' },
  { to: '/terms', label: 'Terms' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/compliance-table', label: 'Compliance' },
  { to: '/pricing-table', label: 'Pricing' },
];

const ClinicalFooter: React.FC = () => (
  <footer style={{
    width: '100%',
    background: '#23272F',
    color: '#fff',
    padding: '32px 0 16px 0',
    marginTop: 48,
    borderTop: '2px solid #29C6B1',
    boxShadow: '0 -2px 8px 0 rgba(41,198,177,0.10)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  }}>
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
      {footerLinks.map(link => (
        <Link key={link.to} to={link.to} style={{ color: '#fff', fontWeight: 500, fontSize: 16, textDecoration: 'none', padding: '4px 10px', borderRadius: 4, transition: 'background 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(41,198,177,0.10)')}
          onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
        >
          {link.label}
        </Link>
      ))}
    </div>
    <div style={{ fontSize: 14, color: '#B0BEC5', marginTop: 8 }}>
      &copy; {new Date().getFullYear()} SEWA XAI. All rights reserved.
    </div>
  </footer>
);

export default ClinicalFooter;
