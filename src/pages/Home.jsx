import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import ProjectCard from '../components/ProjectCard';
import ArtGalleryWall from '../components/ArtGalleryWall';
import designerProfile from '../assets/Anuj.png';

export default function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Fintech', 'UX Research', 'Design Systems'];

  const projects = [
    {
      id: 'zet-journey',
      company: 'ZET (Fintech)',
      title: 'how we simplified credit applications for 10M+ users',
      category: 'Fintech product design',
      categoryTag: 'Fintech',
      type: 'Full time',
      year: '2025',
      featured: true,
      gradient: 'linear-gradient(135deg, #ffd4a5 0%, #ff680a 100%)',
      metric: '+42%',
      metricLabel: 'Conversion Lift',
      summary: 'Redesigned the core credit application flow for Tier-2 Indian borrowers, cutting drop-off rates through progressive disclosure and instant digital KYC verification.',
      tags: ['B2C', 'Fintech', 'Mobile Flow', '0→1 Product Design', '10M+ Users'],
      emoji: '📈'
    },
    {
      id: 'zet-credit',
      company: 'ZET (Fintech)',
      title: 'building a 30-day credit score builder for first-time borrowers',
      category: 'Fintech product design',
      categoryTag: 'Fintech',
      type: 'Full time',
      year: '2025',
      featured: false,
      gradient: 'linear-gradient(135deg, #ece7f0 0%, #987da5 100%)',
      metric: '700+',
      metricLabel: 'Score Goal',
      summary: 'Designed gamified financial progress loops enabling users to repair, track, and achieve prime credit status with 100% transparency.',
      tags: ['B2C', 'Fintech', 'Gamification', 'Design Systems'],
      emoji: '💳'
    },
    {
      id: 'moneyview-uxr',
      company: 'moneyview',
      title: 'uncovering loan friction points across Tier-2 Indian cities',
      category: 'Financial app design',
      categoryTag: 'UX Research',
      type: 'Internship',
      year: '2024',
      featured: false,
      gradient: 'linear-gradient(135deg, #eef5eb 0%, #b2d2a4 100%)',
      metric: '84%',
      metricLabel: 'Trust Rating',
      summary: 'Led 12+ moderated user research sessions across Tier-2 Indian cities to discover friction points and increase user approval confidence.',
      tags: ['UX Research', 'User Testing', 'Field Studies', 'B2C'],
      emoji: '🔍'
    },
    {
      id: 'moneyview-data',
      company: 'moneyview',
      title: 'designing DPDP privacy controls for transparent data management',
      category: 'Financial app design',
      categoryTag: 'Design Systems',
      type: 'Internship',
      year: '2024',
      featured: false,
      gradient: 'linear-gradient(135deg, #e4f3f0 0%, #a2d6cc 100%)',
      metric: '24h',
      metricLabel: 'Opt-out SLA',
      summary: 'Built transparent DPDP-compliant privacy controls allowing users to manage promotional calls, WhatsApp alerts, and third-party data sharing.',
      tags: ['Privacy UX', 'DPDP Compliance', 'Settings', 'GovTech'],
      emoji: '🛡️'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.categoryTag === activeCategory || (p.tags && p.tags.includes(activeCategory)));

  return (
    <div style={styles.homeContainer}>
      <div style={styles.heroAndTickerWrapper}>
        <Hero />
        <Ticker />
      </div>

      {/* Featured Projects Grid (Rayoti Kar Aesthetic) */}
      <section id="work" style={{ padding: '100px 0', borderTop: '1px solid #EAEAEA' }}>
        <div className="grid-container">

          {/* Header Block with Rayoti Kar style subtitle & tag */}
          <div style={workStyles.headerWrapper}>
            <div>
              <div style={workStyles.taglineRow}>
                <span style={workStyles.taglineEmoji}>📈</span>
                <span style={workStyles.taglineText}>my craft, condensed into the products i am proud of</span>
              </div>
              <h2 style={workStyles.displayHeading}>
                featured projects
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div style={workStyles.filterRow}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    ...workStyles.filterPill,
                    ...(activeCategory === cat ? workStyles.activeFilterPill : {})
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Bento Grid Layout */}
          <div style={workStyles.projectsContainer}>
            {filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Design — Art Gallery Section */}
      <ArtGalleryWall />

      {/* About Me Section — Editorial Minimalist (Fits in 100vh) */}
      <section id="about" style={{ padding: '60px 0', minHeight: '100vh', display: 'flex', alignItems: 'center', borderTop: '1px solid #EAEAEA' }}>
        <div className="grid-container" style={{ width: '100%' }}>

          {/* Section Intro */}
          <motion.div
            style={aboutStyles.introBlock}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 style={aboutStyles.displayHeading}>
              Designing with intention, not decoration.
            </h2>
          </motion.div>

          {/* 2-Column Bento Grid */}
          <div style={aboutStyles.bentoGrid}>

            {/* Cell 1: Profile Photo + Meta + Stats (Left Column) */}
            <motion.div
              style={aboutStyles.profileCell}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={aboutStyles.profileImageWrapper}>
                <img
                  src={designerProfile}
                  alt="Anuj Joshi — Head of Design"
                  style={aboutStyles.profileImage}
                />
              </div>
              <div style={aboutStyles.profileMeta}>
                <span style={aboutStyles.profileName}>Anuj Joshi</span>
                <span style={aboutStyles.profileRole}>Partner & Head of Design, Bisonworkz</span>
              </div>

              <div style={aboutStyles.profileStatsDivider} />

              {/* Stat Numbers below profile image */}
              <div style={aboutStyles.profileStatsList}>
                <div style={aboutStyles.statItem}>
                  <span style={aboutStyles.statDisplay}>4+</span>
                  <span style={aboutStyles.statCaption}>Years Design Leadership</span>
                </div>
                <div style={aboutStyles.statItem}>
                  <span style={aboutStyles.statDisplay}>91</span>
                  <span style={aboutStyles.statCaption}>Projects Shipped</span>
                </div>
                <div style={aboutStyles.statItem}>
                  <span style={aboutStyles.statDisplay}>4</span>
                  <span style={aboutStyles.statCaption}>Core Sectors</span>
                </div>
              </div>
            </motion.div>

            {/* Cell 2: Bio Text */}
            <motion.div
              style={aboutStyles.bioCell}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={aboutStyles.bioLead}>
                Bisonworkz Studios is a boutique AI-first design studio building websites and brand identities for real estate, luxury, fintech, and D2C brands.
              </p>
              <p style={aboutStyles.bioBody}>
                We combine an AI-first production process with human design psychology. Nothing we ship is decorative — every layout, motion, and typographic choice is conceptualized and justified before it's built.
              </p>

              {/* Domain Tags */}
              <div style={aboutStyles.tagRow}>
                {['AI-First Studio', 'Luxury & Real Estate', 'Fintech', 'D2C Branding', 'Cinematic UX'].map((tag) => (
                  <span key={tag} style={aboutStyles.domainTag}>{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Cell 3: Experience Timeline */}
            <motion.div
              style={aboutStyles.timelineCell}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={aboutStyles.cellLabel}>Leadership & Experience</span>
              <div style={aboutStyles.timelineList}>
                {[
                  { role: 'Partner & Head of Design', company: 'Bisonworkz Studios', period: '2024 — Present', active: true },
                  { role: 'Product Designer', company: 'ZET (Fintech)', period: '2024 — Present', active: false },
                  { role: 'UX Design Intern', company: 'Moneyview', period: '2024', active: false },
                  { role: 'UI/UX Designer', company: 'Codiotic Technologies', period: '2022 — 2024', active: false },
                ].map((exp, i) => (
                  <div key={i} style={aboutStyles.timelineRow}>
                    <div style={aboutStyles.timelineLeft}>
                      <span style={aboutStyles.timelineRole}>{exp.role}</span>
                      <span style={aboutStyles.timelineCompany}>{exp.company}</span>
                    </div>
                    <div style={aboutStyles.timelineRight}>
                      <span style={aboutStyles.timelinePeriod}>{exp.period}</span>
                      {exp.active && <span style={aboutStyles.activeBadge}>Current</span>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Clean Minimal Footer Bar */}
      <footer style={{
        width: '100%',
        padding: '32px 0',
        borderTop: '1px solid #EAEAEA',
        background: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <span style={{
          fontSize: '0.85rem',
          color: '#787774',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          © 2026 all rights reserved by Anuj Joshi.
        </span>
      </footer>
    </div>
  );
}

const styles = {
  homeContainer: {
    width: '100%',
    position: 'relative',
  },
  heroAndTickerWrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  sectionPadding: {
    padding: '100px 0',
  },
  sectionHeader: {
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    lineHeight: '1.2',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '60px',
    maxWidth: '850px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    width: '100%',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '0.6fr 1.4fr',
    gap: '60px',
  },
  aboutLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    minHeight: '160px',
  },
  sectionTag: {
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'var(--text-primary)',
    letterSpacing: '0.05em',
  },
  sectionTagSub: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginTop: '6px',
  },
  emailLink: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    borderBottom: '1px solid var(--border-light)',
    paddingBottom: '4px',
    width: 'max-content',
    '&:hover': {
      color: 'var(--text-primary)',
      borderColor: 'var(--text-primary)',
    }
  },
  aboutRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  aboutHeading: {
    fontSize: '2rem',
    lineHeight: '1.3',
    fontWeight: '600',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-family-heading)',
  },
  aboutText: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '40px',
    borderTop: '1px solid var(--border-light)',
    paddingTop: '30px',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    lineHeight: '1',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-family-heading)',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.3',
  },
  servicesList: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.03)',
    border: '1px solid var(--border-light)',
    padding: '24px 30px',
    borderRadius: '0px',
    marginTop: '40px',
    width: '100%',
  },
  ctaLeft: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateX(4px)',
    }
  },
  ctaRight: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  minisHeaderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '40px',
  },
  minisTitle: {
    fontSize: '2rem',
    fontWeight: '700',
  },
  minisScrollRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    width: '100%',
  },
  miniCard: {
    borderRadius: '0px',
    padding: '28px',
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    border: '1px solid var(--border-light)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.01)',
  },
  miniCardTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px',
    fontFamily: 'var(--font-family-heading)',
  },
  miniCardDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  miniTryBtn: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    alignSelf: 'flex-start',
  },
  // Media query states handled dynamically
};

// About Section Styles (Fits 100vh)
const aboutStyles = {
  introBlock: {
    marginBottom: '24px',
    maxWidth: '850px',
  },
  displayHeading: {
    fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    color: '#0e0e0f',
    lineHeight: '1.18',
    letterSpacing: '-0.02em',
    margin: 0,
  },
  bentoGrid: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gridTemplateAreas: `
      "profile bio"
      "profile timeline"
    `,
    gap: '1px',
    background: '#EAEAEA',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  // Cell 1: Profile & Stats
  profileCell: {
    background: '#FFFFFF',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    gridArea: 'profile',
    justifyContent: 'flex-start',
  },
  profileImageWrapper: {
    width: '100%',
    aspectRatio: '1 / 1',
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#F7F6F3',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
    filter: 'grayscale(15%) contrast(1.02)',
  },
  profileMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  profileName: {
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#0e0e0f',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
  },
  profileRole: {
    fontSize: '0.85rem',
    color: '#787774',
    fontWeight: '400',
  },
  profileStatsDivider: {
    height: '1px',
    background: '#EAEAEA',
    width: '100%',
    margin: '4px 0',
  },
  profileStatsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  statItem: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '10px',
  },
  statDisplay: {
    fontSize: '2rem',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    color: '#0e0e0f',
    lineHeight: '1',
    letterSpacing: '-0.03em',
    minWidth: '46px',
  },
  statCaption: {
    fontSize: '0.8rem',
    color: '#787774',
    fontWeight: '500',
    letterSpacing: '0.01em',
  },
  // Cell 2: Bio
  bioCell: {
    background: '#FFFFFF',
    padding: '32px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'center',
    gridArea: 'bio',
  },
  bioLead: {
    fontSize: '0.98rem',
    color: '#2F3437',
    lineHeight: '1.55',
    fontWeight: '500',
    margin: 0,
  },
  bioBody: {
    fontSize: '0.9rem',
    color: '#5a5a5c',
    lineHeight: '1.5',
    fontWeight: '400',
    margin: 0,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: '6px',
  },
  domainTag: {
    fontSize: '0.68rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    padding: '4px 10px',
    borderRadius: '9999px',
    background: '#E1F3FE',
    color: '#1F6C9F',
  },
  // Cell 3: Experience Timeline
  timelineCell: {
    background: '#FFFFFF',
    padding: '28px 32px',
    gridArea: 'timeline',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    justifyContent: 'center',
  },
  cellLabel: {
    fontSize: '0.7rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#787774',
  },
  timelineList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  timelineRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #F0F0F0',
  },
  timelineLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
  },
  timelineRole: {
    fontSize: '0.92rem',
    fontWeight: '600',
    color: '#0e0e0f',
  },
  timelineCompany: {
    fontSize: '0.82rem',
    color: '#787774',
    fontWeight: '400',
  },
  timelineRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  timelinePeriod: {
    fontSize: '0.8rem',
    color: '#787774',
    fontWeight: '400',
    fontVariantNumeric: 'tabular-nums',
  },
  activeBadge: {
    fontSize: '0.65rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '2px 8px',
    borderRadius: '9999px',
    background: '#EDF3EC',
    color: '#346538',
  },
};

// Work / Projects Section Styles (taste-skill driven)
const workStyles = {
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '48px',
    flexWrap: 'wrap',
    gap: '20px',
  },
  taglineRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '6px',
  },
  taglineEmoji: {
    fontSize: '1.1rem',
  },
  taglineText: {
    fontSize: '0.92rem',
    color: '#787774',
    fontStyle: 'italic',
    letterSpacing: '-0.01em',
  },
  displayHeading: {
    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    color: '#0e0e0f',
    lineHeight: '1.12',
    letterSpacing: '-0.02em',
    margin: 0,
    textTransform: 'lowercase',
  },
  filterRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  filterPill: {
    fontSize: '0.8rem',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '9999px',
    border: '1px solid #EAEAEA',
    background: '#F7F6F3',
    color: '#5a5a5c',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  activeFilterPill: {
    background: '#111111',
    color: '#FFFFFF',
    borderColor: '#111111',
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '72px',
    width: '100%',
  },
};

