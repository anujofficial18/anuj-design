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

      {/* Design Feed Section (Bogdan Goncharenko Masonry Feed) */}
      <ArtGalleryWall />

      {/* About Me & Tools Stack Section — 2 Column Clean Card Grid */}
      <section id="about" style={{ padding: '100px 0', background: '#F9F9FB', borderTop: '1px solid #EAEAEA' }}>
        <div className="grid-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '32px', width: '100%' }}>

            {/* Left Card: About me */}
            <motion.div
              style={{ background: '#FFFFFF', borderRadius: '28px', padding: '52px 48px 60px 48px', border: '1px solid #EAEAEA', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '24px' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 style={aboutCardStyles.cardTitle}>About me</h2>
              <p style={aboutCardStyles.bioText}>
                Product Designer with deep expertise in crafting intuitive, emotionally resonant digital experiences for fast-paced B2C startups. Strong in interaction design, accessibility, and scalable design systems.
              </p>
              <p style={aboutCardStyles.bioText}>
                Known for bridging user research with practical design execution, delivering elegant, inclusive solutions that thrive under real-world constraints and drive measurable product impact.
              </p>
            </motion.div>

            {/* Right Card: Tools stack */}
            <motion.div
              style={{ background: '#FFFFFF', borderRadius: '28px', padding: '52px 48px 60px 48px', border: '1px solid #EAEAEA', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '24px' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 style={aboutCardStyles.cardTitle}>Tools stack</h2>
              
              <div style={aboutCardStyles.toolsWrap}>
                {[
                  { name: 'Figma', iconBg: '#000000', iconSvg: (
                    <svg width="18" height="18" viewBox="0 0 38 57" fill="none">
                      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#0ACF83"/>
                      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#1ABCFE"/>
                      <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
                      <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
                      <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
                    </svg>
                  )},
                  { name: 'Rive', iconBg: '#111111', iconText: 'R' },
                  { name: 'Framer', iconBg: '#000000', iconSvg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M12 0H4V8H12V0ZM4 8H12L20 16H4V8ZM12 16V24L4 16H12Z"/>
                    </svg>
                  )},
                  { name: 'Webflow', iconBg: '#146EF5', iconSvg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M17.8 8.8c-.8 0-1.6.4-2.1 1.1l-2.6 3.6-1.5-2.1c-.5-.7-1.3-1.1-2.1-1.1s-1.6.4-2.1 1.1l-3.9 5.5h3.2l2.3-3.2 1.5 2.1c.5.7 1.3 1.1 2.1 1.1s1.6-.4 2.1-1.1l3.9-5.5h-3.2l-2.3 3.2 2.7-3.6z"/>
                    </svg>
                  )},
                  { name: 'Lovable', iconBg: '#FF4757', iconText: '♥' },
                  { name: 'Adobe XD', iconBg: '#470137', iconText: 'Xd' }
                ].map((tool) => (
                  <div key={tool.name} style={aboutCardStyles.toolPill}>
                    <div style={{ ...aboutCardStyles.toolIconCircle, background: tool.iconBg }}>
                      {tool.iconSvg ? tool.iconSvg : <span style={aboutCardStyles.toolIconText}>{tool.iconText}</span>}
                    </div>
                    <span style={aboutCardStyles.toolName}>{tool.name}</span>
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

// Clean 2-Column About & Tools Stack Card Styles
const aboutCardStyles = {
  gridTwoCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
    width: '100%',
  },
  cardContainer: {
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '48px 44px',
    border: '1px solid #EAEAEA',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  cardTitle: {
    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    color: '#0e0e0f',
    margin: 0,
    lineHeight: '1.18',
    letterSpacing: '-0.02em',
  },
  bioText: {
    fontSize: '1.02rem',
    color: '#5a5a5c',
    lineHeight: '1.65',
    margin: 0,
    fontWeight: '400',
  },
  toolsWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
    marginTop: '8px',
  },
  toolPill: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 20px 8px 10px',
    borderRadius: '9999px',
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
  },
  toolIconCircle: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    flexShrink: 0,
  },
  toolIconText: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  toolName: {
    fontSize: '0.92rem',
    fontWeight: '600',
    color: '#0e0e0f',
  },
};

