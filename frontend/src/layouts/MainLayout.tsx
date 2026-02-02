

import ClinicalNavbar from '../components/ClinicalNavbar';
import ClinicalFooter from '../components/ClinicalFooter';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ minHeight: '100vh', background: '#F9FAFB', color: '#1A202C', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', display: 'flex', flexDirection: 'column' }}>
    <header style={{ background: '#1A7F6B', color: '#fff', boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 0 }}>
      <ClinicalNavbar />
    </header>
    <main style={{ flex: 1, maxWidth: 1200, margin: '0 auto', width: '100%', padding: '40px 16px' }}>
      {children}
    </main>
    <ClinicalFooter />
  </div>
);

export default MainLayout;
