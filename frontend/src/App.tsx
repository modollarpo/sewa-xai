
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { useAuth } from './hooks/useAuth';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import PasswordReset from './pages/PasswordReset';
import Profile from './pages/Profile';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientCaseView from './pages/PatientCaseView';
import AITriageQueue from './pages/AITriageQueue';
import TriageQueue from './pages/TriageQueue';
import AIResultExplanation from './pages/AIResultExplanation';
import Pricing from './pages/Pricing';
import AdminPanel from './pages/AdminPanel';
import Compliance from './pages/Compliance';
import Overview from './pages/Overview';
import Landing from './pages/Landing';
import PublicPricing from './pages/PublicPricing';
import Security from './pages/Security';
import PublicCompliance from './pages/PublicCompliance';
import BillingDashboard from './pages/BillingDashboard';
import RegulatorDashboard from './pages/RegulatorDashboard';
import SuperAdminPanel from './pages/SuperAdminPanel';
import ClinicalScanList from './pages/ClinicalScanList';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Team from './pages/Team';
import Legal from './pages/Legal';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import ComplianceTable from './pages/ComplianceTable';
import PricingTable from './pages/PricingTable';

const App: React.FC = () => {
  const { token, role } = useAuth();
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/dashboard" /> : <HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={token ? <DoctorDashboard /> : <Navigate to="/login" />} />
          <Route path="/case" element={token ? <PatientCaseView /> : <Navigate to="/login" />} />
          <Route path="/triage" element={token ? <AITriageQueue /> : <Navigate to="/login" />} />
          <Route path="/triage-queue" element={token ? <TriageQueue /> : <Navigate to="/login" />} />
          <Route path="/explanation" element={token ? <AIResultExplanation /> : <Navigate to="/login" />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin" element={role === 'super_admin' || role === 'hospital_admin' ? <AdminPanel /> : <Navigate to="/dashboard" />} />
          <Route path="/compliance" element={role === 'compliance_officer' ? <Compliance /> : <Navigate to="/dashboard" />} />
          <Route path="/overview" element={token ? <Overview /> : <Navigate to="/login" />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/public-pricing" element={<PublicPricing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/public-compliance" element={<PublicCompliance />} />
          <Route path="/billing" element={role === 'hospital_admin' || role === 'super_admin' ? <BillingDashboard /> : <Navigate to="/dashboard" />} />
          <Route path="/regulator" element={role === 'compliance_officer' || role === 'super_admin' ? <RegulatorDashboard /> : <Navigate to="/dashboard" />} />
          <Route path="/super-admin" element={role === 'super_admin' ? <SuperAdminPanel /> : <Navigate to="/dashboard" />} />
          <Route path="/clinical-scans" element={token ? <ClinicalScanList /> : <Navigate to="/login" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/compliance-table" element={<ComplianceTable />} />
          <Route path="/pricing-table" element={<PricingTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
