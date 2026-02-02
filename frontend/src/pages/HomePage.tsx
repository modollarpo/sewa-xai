
const meta = {
  title: 'SEWA XAI | AI-Powered Clinical Workflow Platform',
  description: 'SEWA XAI delivers explainable, secure, and compliant AI for hospitals, radiology groups, and clinics. Automate triage, improve outcomes, and streamline care.',
  keywords: 'SEWA XAI, clinical AI, hospital workflow, radiology AI, healthcare automation, medical AI, triage, compliance',
};

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      {/* Meta tags for SEO */}
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </head>
      <header style={{ background: '#1A7F6B', color: '#fff', padding: '40px 0 32px 0', textAlign: 'center', boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)' }}>
        <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 90, height: 90, marginBottom: 12, borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, letterSpacing: 1 }}>SEWA XAI</h1>
        <p style={{ fontSize: '1.25rem', fontWeight: 400, margin: '12px 0 0' }}>
          AI-powered Clinical Workflow for Hospitals & Radiology
        </p>
        <p style={{ fontSize: '1rem', fontWeight: 400, margin: '8px 0 0', color: '#F6A700' }}>
          Empowering healthcare teams with explainable, actionable AI
        </p>
      </header>
      <main style={{ maxWidth: 1000, margin: '40px auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 40 }}>
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#1A7F6B' }}>Why SEWA?</h2>
          <ul style={{ fontSize: '1.1rem', color: '#1A202C', lineHeight: 1.7, margin: '16px 0 0 24px' }}>
            <li>Automated triage and case prioritization for faster, safer care</li>
            <li>Explainable AI results for trust and compliance</li>
            <li>Seamless integration with hospital and radiology workflows</li>
            <li>Enterprise-grade security, audit, and user management</li>
            <li>Real-time analytics and actionable insights</li>
            <li>Dedicated onboarding and 24/7 support</li>
            <li>Flexible deployment: cloud, on-premise, or hybrid</li>
          </ul>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1A7F6B' }}>Key Features</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ color: '#F6A700', fontWeight: 700 }}>AI Triage</h3>
              <p>Automatically flag urgent cases and route to the right specialist. Reduce delays and improve patient outcomes.</p>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ color: '#F6A700', fontWeight: 700 }}>Explainability</h3>
              <p>Transparent AI decisions with visual and textual explanations. Build trust with clinicians and regulators.</p>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ color: '#F6A700', fontWeight: 700 }}>Collaboration</h3>
              <p>Secure messaging, notes, and handoff between care teams. Streamline communication and reduce errors.</p>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ color: '#F6A700', fontWeight: 700 }}>Compliance</h3>
              <p>Full audit trails, access controls, and regulatory reporting. Meet HIPAA, GDPR, and ISO 27001 requirements.</p>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ color: '#F6A700', fontWeight: 700 }}>Analytics</h3>
              <p>Real-time dashboards for scan volume, turnaround time, and AI performance. Identify trends and optimize care.</p>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1A7F6B' }}>Who Uses SEWA XAI?</h2>
          <ul style={{ fontSize: '1.1rem', color: '#1A202C', lineHeight: 1.7, margin: '16px 0 0 24px' }}>
            <li>Hospitals and health systems</li>
            <li>Radiology groups and imaging centers</li>
            <li>Clinics and specialty practices</li>
            <li>Government and research institutions</li>
          </ul>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1A7F6B' }}>Get Started</h2>
          <p style={{ fontSize: '1.1rem', color: '#1A202C' }}>
            Ready to transform your clinical workflow? <a href="/login" style={{ color: '#1A7F6B', fontWeight: 600, textDecoration: 'underline' }}>Sign in</a> or <a href="/contact" style={{ color: '#F6A700', fontWeight: 600, textDecoration: 'underline' }}>Contact us</a> for a personalized demo or pilot.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
            <a href="/pricing-table" style={{ background: '#F6A700', color: '#fff', fontWeight: 700, padding: '12px 28px', borderRadius: 8, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(246,167,0,0.08)' }}>View Pricing</a>
            <a href="/compliance-table" style={{ background: '#29C6B1', color: '#fff', fontWeight: 700, padding: '12px 28px', borderRadius: 8, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(41,198,177,0.08)' }}>See Compliance</a>
          </div>
        </section>
      </main>
      <footer style={{ textAlign: 'center', color: '#6B7280', padding: 24, fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} SEWA XAI. All rights reserved.
      </footer>
    </div>
  );
}
