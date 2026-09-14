import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Real High-Fidelity Project Visual Assets
import zetJourneyAsset from '../assets/Bison-portfolio-work/Pricing Editor Entitlement Hierarchy.png';
import zetCreditAsset from '../assets/Bison-portfolio-work/LEAP.png';
import moneyviewUxrAsset from '../assets/Bison-portfolio-work/Frame 1321316411.jpg';
import moneyviewDataAsset from '../assets/Bison-portfolio-work/Mockuuups Free Macbook Pro Space Gray mockup on the wooden table.jpeg';

// Minimal Inline Arrow Icon
function ArrowUpRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function MyWork() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'zet-journey',
      shortTitle: 'ZET Loan Engine',
      company: 'ZET',
      tags: ['UX & UI Design', 'Systems Architecture', 'Fintech', 'Guided Flow'],
      hook: 'Borrowers were abandoning loans during complex 14-field multi-tier forms. I redesigned the engine into an intuitive progressive 9-minute guided flow.',
      theme: {
        bg: 'linear-gradient(180deg, #FFFFFF 0%, #F6FAFC 100%)',
        accentColor: '#0284C7',
        border: 'rgba(14, 165, 233, 0.18)',
        hoverBorder: 'rgba(14, 165, 233, 0.38)',
        textPrimary: '#111827',
        textSecondary: '#4B5563',
        pillBg: '#F0F7FB',
        pillBorder: 'rgba(14, 165, 233, 0.18)',
        pillText: '#0369A1',
      },
      stats: [
        { value: '+68%', label: 'Completion Lift' },
        { value: '9 min', label: 'Time-to-Apply' }
      ],
      image: zetJourneyAsset,
    },
    {
      id: 'zet-credit',
      shortTitle: 'Credit Simulator',
      company: 'ZET',
      tags: ['Gamification', 'Behavioral UX', 'Simulation', 'Credit Growth'],
      hook: 'Credit scores felt punitive and opaque to borrowers. I engineered an interactive simulator that gamifies score gains and builds healthy financial habits.',
      theme: {
        bg: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8FC 100%)',
        accentColor: '#7C3AED',
        border: 'rgba(147, 51, 234, 0.16)',
        hoverBorder: 'rgba(147, 51, 234, 0.36)',
        textPrimary: '#111827',
        textSecondary: '#4B5563',
        pillBg: '#F7F3FB',
        pillBorder: 'rgba(147, 51, 234, 0.16)',
        pillText: '#6D28D9',
      },
      stats: [
        { value: '+42 pts', label: 'Avg Score Lift' },
        { value: '50K+', label: 'Active Borrowers' }
      ],
      image: zetCreditAsset,
    },
    {
      id: 'moneyview-uxr',
      shortTitle: 'Tier 2/3 Field UXR',
      company: 'Moneyview',
      tags: ['User Research', 'Ethnography', 'Mental Models', 'Vernacular'],
      hook: 'First-time borrowers in Tier 2/3 cities hesitated at the final disbursal stage. I conducted 12-city field ethnographies to architect transparent vernacular flows.',
      theme: {
        bg: 'linear-gradient(180deg, #FFFFFF 0%, #F6FAF7 100%)',
        accentColor: '#059669',
        border: 'rgba(16, 185, 129, 0.18)',
        hoverBorder: 'rgba(16, 185, 129, 0.38)',
        textPrimary: '#111827',
        textSecondary: '#4B5563',
        pillBg: '#F0F8F3',
        pillBorder: 'rgba(16, 185, 129, 0.18)',
        pillText: '#047857',
      },
      stats: [
        { value: '12 Cities', label: 'In-Situ Field UXR' },
        { value: '-48%', label: 'Disbursal Drop-off' }
      ],
      image: moneyviewUxrAsset,
    },
    {
      id: 'moneyview-data',
      shortTitle: 'Granular Consent Hub',
      company: 'Moneyview',
      tags: ['Privacy UX', 'RBI Compliance', 'Architecture', 'Trust Systems'],
      hook: 'Forced blanket app permissions triggered uninstalls and borrower mistrust. I designed India’s first value-exchange permission and consent architecture.',
      theme: {
        bg: 'linear-gradient(180deg, #FFFFFF 0%, #F5F8FB 100%)',
        accentColor: '#2563EB',
        border: 'rgba(37, 99, 235, 0.18)',
        hoverBorder: 'rgba(37, 99, 235, 0.38)',
        textPrimary: '#111827',
        textSecondary: '#4B5563',
        pillBg: '#F0F4FA',
        pillBorder: 'rgba(37, 99, 235, 0.18)',
        pillText: '#1D4ED8',
      },
      stats: [
        { value: '92%', label: 'Comprehension' },
        { value: '100%', label: 'RBI Compliance' }
      ],
      image: moneyviewDataAsset,
    },
  ];

  // 2-Column Masonry Split
  const col1Projects = [projects[0], projects[2]];
  const col2Projects = [projects[1], projects[3]];

  const renderProjectCard = (proj, idx) => (
    <motion.article
      key={proj.id}
      className="hero-styled-project-card"
      style={{
        ...styles.cardContainer,
        background: proj.theme.bg,
        borderColor: proj.theme.border,
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ 
        y: -5, 
        borderColor: proj.theme.hoverBorder,
        boxShadow: '0 16px 40px -12px rgba(0, 0, 0, 0.08)' 
      }}
      transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => navigate(`/project/${proj.id}`)}
    >
      {/* 1. Header: Title & Clean Action Arrow */}
      <div style={styles.cardHeaderRow}>
        <h3 style={{ ...styles.cardTitle, color: proj.theme.textPrimary }}>
          {proj.shortTitle}
        </h3>
        <div 
          style={{ 
            ...styles.arrowIconWrap, 
            color: proj.theme.accentColor,
          }}
          className="card-arrow-badge"
        >
          <ArrowUpRightIcon />
        </div>
      </div>

      {/* 2. Skill / Tag Pills (Sharp Edges, Calm Tones) */}
      <div style={styles.tagsRow}>
        {proj.tags.map((tag, tIdx) => (
          <span 
            key={tIdx} 
            style={{ 
              ...styles.tagPill, 
              backgroundColor: proj.theme.pillBg,
              borderColor: proj.theme.pillBorder,
              color: proj.theme.pillText,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 3. Narrative Hook */}
      <p style={{ ...styles.cardHook, color: proj.theme.textSecondary }}>
        {proj.hook}
      </p>

      {/* 4. Two Key Stats (Sharp Edges, Clean Typography) */}
      <div style={{ ...styles.statsGrid, borderTopColor: proj.theme.border, borderBottomColor: proj.theme.border }}>
        {proj.stats.map((st, sIdx) => (
          <div key={sIdx} style={styles.statBox}>
            <span 
              style={{ 
                ...styles.statVal, 
                color: proj.theme.textPrimary,
              }}
            >
              {st.value}
            </span>
            <span style={{ ...styles.statLbl, color: proj.theme.textSecondary }}>
              {st.label}
            </span>
          </div>
        ))}
      </div>

      {/* 5. Device Mockup Image Showcase (Sharp Edges) */}
      <div style={styles.mockupContainer}>
        <img 
          src={proj.image} 
          alt={proj.shortTitle} 
          style={styles.mockupImg}
          className="card-mockup-zoom"
          loading="lazy"
        />
      </div>
    </motion.article>
  );

  return (
    <section id="work" style={styles.section}>
      {/* Top Ambient Transition Shade from Hero */}
      <div style={styles.topAmbientTransitionGlow} aria-hidden="true" />

      <div className="grid-container" style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.headerBlock}>
          <h2 style={styles.mainTitle}>
            Selected Work <span style={styles.serifHighlight}>& Case Studies</span>
          </h2>
          <p style={styles.subNarrative}>
            Deep dive into complex design systems, high-conversion pipelines, and user research.
          </p>
        </div>

        {/* 2-Column Masonry Grid */}
        <div className="project-masonry-grid">
          {/* Column 1 (Left) */}
          <div className="project-masonry-col">
            {col1Projects.map((proj, idx) => renderProjectCard(proj, idx * 2))}
          </div>

          {/* Column 2 (Right - Staggered offset) */}
          <div className="project-masonry-col-staggered">
            {col2Projects.map((proj, idx) => renderProjectCard(proj, idx * 2 + 1))}
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: '85px',
    paddingBottom: '120px',
    background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 25%, #FFFFFF 100%)',
    position: 'relative',
    borderTop: '1px solid #EDEDF0',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  topAmbientTransitionGlow: {
    position: 'absolute',
    top: 0,
    left: '5%',
    right: '5%',
    height: '340px',
    background: 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.15) 0%, rgba(186, 230, 253, 0.07) 50%, transparent 75%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  headerBlock: {
    marginBottom: '52px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  mainTitle: {
    fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
    fontWeight: '700',
    lineHeight: 1.12,
    color: '#0E0E0F',
    letterSpacing: '-0.03em',
    margin: 0,
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  serifHighlight: {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '1.08em',
    color: '#3F3F46',
  },
  subNarrative: {
    fontSize: '1rem',
    lineHeight: 1.55,
    color: '#5A5A62',
    margin: 0,
    maxWidth: '560px',
    fontFamily: 'var(--font-family-body)',
  },

  /* Card Container (Sharp Edges, Subtle Architectural Style) */
  cardContainer: {
    borderRadius: '0px',
    padding: 'clamp(26px, 3.4vw, 38px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    border: '1px solid',
    boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.04)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
  },
  cardHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
  },
  cardTitle: {
    fontSize: 'clamp(1.5rem, 2.4vw, 1.85rem)',
    fontWeight: '700',
    letterSpacing: '-0.02em',
    margin: 0,
    lineHeight: 1.2,
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  arrowIconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    transition: 'transform 0.25s ease',
  },

  /* Tag Pills (Sharp Edges, Calm Tones) */
  tagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tagPill: {
    borderRadius: '0px',
    border: '1px solid',
    padding: '4px 10px',
    fontSize: '0.74rem',
    fontWeight: '500',
    letterSpacing: '0.01em',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  cardHook: {
    fontSize: '0.94rem',
    lineHeight: 1.6,
    margin: 0,
    fontWeight: '400',
    fontFamily: 'var(--font-family-body)',
  },

  /* Stats Grid (Sharp Edges) */
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    padding: '16px 0',
    borderTop: '1px solid',
    borderBottom: '1px solid',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  statVal: {
    fontSize: '1.45rem',
    fontWeight: '800',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    fontVariantNumeric: 'tabular-nums',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  statLbl: {
    fontSize: '0.72rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  /* Mockup Frame (Sharp Edges) */
  mockupContainer: {
    width: '100%',
    aspectRatio: '16 / 10.5',
    borderRadius: '0px',
    overflow: 'hidden',
    background: 'rgba(0, 0, 0, 0.02)',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.05)',
    marginTop: '4px',
  },
  mockupImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '0px',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
};
