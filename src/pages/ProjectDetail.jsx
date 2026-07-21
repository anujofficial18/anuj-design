import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Award, Zap, ShieldCheck } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectDetails = {
    'zet-journey': {
      company: 'ZET',
      title: 'ZET — Application Journey',
      subtitle: 'Streamlining credit card & loan application pipelines in 10 minutes.',
      role: 'Lead Product Designer',
      category: 'Fintech product design',
      type: 'Full time',
      year: '2025',
      impact: '68% increase in application completion rate',
      gradient: 'linear-gradient(135deg, #ffd4a5 0%, #ff680a 100%)',
      overview: 'The old credit application was a tedious multi-step form that caused over 50% dropoffs at the Aadhaar and employment detail stages. Users felt overwhelmed by the length of the pages and lacked feedback on their progression.',
      insights: 'We engineered an active application tracker journey that guides the user via linear step cards, clearly showing unlocked and locked stages. We reduced visual clutter, introduced quick-autofills, and embedded real-time progress indicators.',
      metrics: [
        { label: 'Completion Rate', value: '74%' },
        { label: 'Time-to-Apply', value: '9 mins' },
        { label: 'Drop-off Reduction', value: '-62%' }
      ]
    },
    'zet-credit': {
      company: 'ZET',
      title: 'ZET — Credit Score Builder',
      subtitle: 'Empowering users to build a 700+ credit score in 30 days.',
      role: 'Product Designer',
      category: 'Fintech product design',
      type: 'Full time',
      year: '2025',
      impact: 'Built score tracker used by 50K+ traders',
      gradient: 'linear-gradient(135deg, #ece7f0 0%, #987da5 100%)',
      overview: 'Users often felt intimidated by credit reporting agencies and had little visibility into why their scores fluctuated or how specific actions affected their financial credit limits.',
      insights: 'Designed a goal-oriented credit builder module with actionable recommendations, real-time credit monitoring alerts, and simulated score impact calculators.',
      metrics: [
        { label: 'Active Users', value: '50K+' },
        { label: 'Avg Score Increase', value: '+42 pts' },
        { label: 'Feature Retention', value: '88%' }
      ]
    },
    'moneyview-uxr': {
      company: 'moneyview',
      title: 'Moneyview — UX Research Study',
      subtitle: 'Understanding financial literacy and loan adoption in Tier 2 Indian cities.',
      role: 'UX Research Intern',
      category: 'Financial app design',
      type: 'Internship',
      year: '2024',
      impact: 'Deep-dive user research across 12 cities',
      gradient: 'linear-gradient(135deg, #e2f5e3 0%, #6f9954 100%)',
      overview: 'First-time borrowers in regional markets struggled with complex financial jargon, leading to mistrust during instant loan application disbursements.',
      insights: 'Conducted field interviews and usability sessions across 12 cities, synthesizing localized vernacular interfaces and transparent fee breakdowns that increased trust scores.',
      metrics: [
        { label: 'Cities Surveyed', value: '12' },
        { label: 'User Interviews', value: '45+' },
        { label: 'Trust Index Boost', value: '+35%' }
      ]
    },
    'moneyview-data': {
      company: 'moneyview',
      title: 'Moneyview — Personal Data Controls',
      subtitle: 'Designing privacy-first permission flows and data transparency dashboards.',
      role: 'UX Designer',
      category: 'Financial app design',
      type: 'Internship',
      year: '2024',
      impact: 'Built India’s first transparent privacy control UI',
      gradient: 'linear-gradient(135deg, #dceefb 0%, #3880ff 100%)',
      overview: 'With stricter RBI privacy guidelines, users needed granular control over what financial data (SMS, credit bureau queries, bank statements) was accessed by loan algorithms.',
      insights: 'Created a centralized Privacy & Permission Hub allowing instant opt-in/opt-out of data sharing with clear explanations of why each permission improves interest rates.',
      metrics: [
        { label: 'Opt-in Clarity', value: '92%' },
        { label: 'Support Tickets', value: '-40%' },
        { label: 'Compliance Score', value: '100%' }
      ]
    }
  };

  const project = projectDetails[id] || projectDetails['zet-journey'];

  return (
    <div style={styles.container}>
      {/* Header Banner */}
      <div style={{ ...styles.heroBanner, background: project.gradient }}>
        <div className="grid-container" style={styles.heroInner}>
          <button onClick={() => navigate(-1)} style={styles.backBtn}>
            <ArrowLeft size={16} /> Back to Projects
          </button>
          
          <span style={styles.tag}>{project.company} · {project.category}</span>
          <h1 style={styles.title}>{project.title}</h1>
          <p style={styles.subtitle}>{project.subtitle}</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid-container" style={styles.contentGrid}>
        {/* Left Column: Meta */}
        <div style={styles.metaColumn}>
          <div style={styles.metaBox}>
            <span style={styles.metaLabel}>Role</span>
            <span style={styles.metaVal}>{project.role}</span>
          </div>
          <div style={styles.metaBox}>
            <span style={styles.metaLabel}>Timeline</span>
            <span style={styles.metaVal}>{project.year} ({project.type})</span>
          </div>
          <div style={styles.metaBox}>
            <span style={styles.metaLabel}>Company</span>
            <span style={styles.metaVal}>{project.company}</span>
          </div>
        </div>

        {/* Right Column: Case Study Sections */}
        <div style={styles.textColumn}>
          <div style={styles.textSection}>
            <h3 style={styles.sectionHeading}>01 / Problem & Overview</h3>
            <p style={styles.paragraph}>{project.overview}</p>
          </div>

          <div style={styles.textSection}>
            <h3 style={styles.sectionHeading}>02 / Design Strategy & Insights</h3>
            <p style={styles.paragraph}>{project.insights}</p>
          </div>

          <div style={styles.textSection}>
            <h3 style={styles.sectionHeading}>03 / Impact & Key Metrics</h3>
            <div style={styles.metricsGrid}>
              {project.metrics.map((m, idx) => (
                <div key={idx} style={styles.metricCard}>
                  <span style={styles.metricVal}>{m.value}</span>
                  <span style={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    paddingBottom: '120px',
    background: 'var(--bg-primary)',
    minHeight: '100vh',
  },
  heroBanner: {
    padding: '140px 0 80px 0',
    borderBottom: '1px solid var(--border-light)',
  },
  heroInner: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start',
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--border-light)',
    padding: '8px 16px',
    borderRadius: '100px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    marginBottom: '10px',
  },
  tag: {
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--text-secondary)',
  },
  title: {
    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
    lineHeight: '1.15',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    letterSpacing: '-0.01em',
    color: 'var(--text-primary)',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    maxWidth: '700px',
    fontWeight: '500',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '0.6fr 1.4fr',
    gap: '60px',
    paddingTop: '80px',
  },
  metaColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  metaBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    borderBottom: '1px solid var(--border-light)',
    paddingBottom: '20px',
  },
  metaLabel: {
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'var(--text-tertiary)',
    letterSpacing: '0.05em',
  },
  metaVal: {
    fontSize: '1.05rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
  },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sectionHeading: {
    fontSize: '1.6rem',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    letterSpacing: '-0.01em',
    color: 'var(--text-primary)',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '10px',
  },
  metricCard: {
    background: '#fff',
    border: '1px solid var(--border-light)',
    padding: '20px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  metricVal: {
    fontSize: '2rem',
    fontWeight: '700',
    fontFamily: 'var(--font-family-heading)',
    color: 'var(--text-primary)',
  },
  metricLabel: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  }
};