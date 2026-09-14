import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Send, Sparkles } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Pixela UX/UI Studio',
      companyType: 'Fintech & Design Studio • Indore',
      role: 'User Experience Designer',
      period: 'Feb 2025 — Present',
      focus: 'Architected mutual fund platform (+40% completion lift), Sarthi AI trade interface, and scalable Figma design system.',
      metric: '+40% Task Completion',
      accentColor: '#4F46E5',
      icon: (
        <div style={{ ...styles.companyBadge, background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)' }}>
          <span style={styles.badgeLetter}>P</span>
        </div>
      ),
    },
    {
      company: 'Pixela UX/UI Studio',
      companyType: 'Fintech Patterns & WCAG',
      role: 'UI/UX Design Trainee',
      period: 'Nov 2024 — Jan 2025',
      focus: 'Fintech UX design patterns, accessibility standards (WCAG), and compliance for emerging markets.',
      metric: 'Fintech UX & WCAG',
      accentColor: '#7C3AED',
      icon: (
        <div style={{ ...styles.companyBadge, background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' }}>
          <span style={styles.badgeLetter}>P</span>
        </div>
      ),
    },
    {
      company: 'Codiotic Technologies',
      companyType: 'SaaS Products • Indore',
      role: 'Product Designer',
      period: 'Jan 2022 — Oct 2024',
      focus: 'Led SaaS product design initiatives delivering +35% user satisfaction with 95% design-to-dev accuracy.',
      metric: '+35% Satisfaction',
      accentColor: '#059669',
      icon: (
        <div style={{ ...styles.companyBadge, background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>
          <span style={styles.badgeLetter}>C</span>
        </div>
      ),
    },
    {
      company: 'Indore Institute of Science & Tech',
      companyType: 'CS & Design Fellowship',
      role: 'Computer Science & UX Fellowship',
      period: '2019 — 2023',
      focus: 'B.Tech in Computer Science, GrowthSchool Product Design Fellowship & Google UX Certified.',
      metric: 'Google UX Certified',
      accentColor: '#27272A',
      icon: (
        <div style={{ ...styles.companyBadge, background: 'linear-gradient(135deg, #3F3F46 0%, #18181B 100%)' }}>
          <span style={{ ...styles.badgeLetter, fontSize: '0.78rem' }}>CS</span>
        </div>
      ),
    },
  ];

  const tools = [
    {
      name: 'Figma',
      role: 'Design Systems & Tokens',
      url: 'https://figma.com',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#1E1E1E' }}>
          <svg viewBox="0 0 38 57" width="15" height="22" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
        </div>
      ),
    },
    {
      name: 'Framer',
      role: 'Interactive Web & Motion',
      url: 'https://framer.com',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#0055FF' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFF">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
          </svg>
        </div>
      ),
    },
    {
      name: 'ProtoPie',
      role: 'High-Fidelity Physics & Sensors',
      url: 'https://protopie.io',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#FF4156' }}>
          <span style={{ color: '#FFF', fontWeight: '800', fontSize: '0.9rem' }}>P</span>
        </div>
      ),
    },
    {
      name: 'Cursor',
      role: 'AI-First Code Engineering',
      url: 'https://cursor.com',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#111113' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <path d="M7 6.5l10.5 5.5-5 1.8-1.8 5L7 6.5z" fill="#FFF"/>
          </svg>
        </div>
      ),
    },
    {
      name: 'Claude',
      role: 'Prompt Architecture & IA',
      url: 'https://claude.ai',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#F5EBE1', border: '1px solid #E8DACB' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#D97706">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
          </svg>
        </div>
      ),
    },
    {
      name: 'React',
      role: 'Component State & Logic',
      url: 'https://react.dev',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#181E24' }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <ellipse cx="12" cy="12" rx="8" ry="3.5" stroke="#00D8FF" strokeWidth="1.3"/>
            <ellipse cx="12" cy="12" rx="8" ry="3.5" stroke="#00D8FF" strokeWidth="1.3" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="8" ry="3.5" stroke="#00D8FF" strokeWidth="1.3" transform="rotate(120 12 12)"/>
            <circle cx="12" cy="12" r="1.4" fill="#00D8FF"/>
          </svg>
        </div>
      ),
    },
    {
      name: 'Tailwind CSS',
      role: 'Token Utilities & Styling',
      url: 'https://tailwindcss.com',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#0F172A' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#38BDF8">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
          </svg>
        </div>
      ),
    },
    {
      name: 'Linear',
      role: 'Agile Velocity & Issue Ops',
      url: 'https://linear.app',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#5E6AD2' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#FFF" strokeWidth="1.6"/>
            <path d="M8 12l2.8 2.8L16 9.2" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      ),
    },
    {
      name: 'Notion',
      role: 'Knowledge Base & Research',
      url: 'https://notion.so',
      icon: (
        <div style={{ ...styles.toolIconWrap, background: '#FFFFFF', border: '1px solid #E4E4E7' }}>
          <span style={{ color: '#0E0E0F', fontWeight: '800', fontSize: '0.88rem' }}>N</span>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" style={styles.section}>
      <div className="grid-container" style={styles.container}>

        {/* 1. Career Trajectory & Shipped Impact */}
        <div style={styles.experienceSection}>
          <div style={styles.sectionHeader}>
            <div style={styles.headerTitles}>
              <span style={styles.eyebrow}>Career Trajectory</span>
              <h2 style={styles.mainTitle}>
                Shipped impact <span style={styles.serifHighlight}>& track record</span>
              </h2>
            </div>

            {/* Bespoke Action Hub */}
            <div style={styles.actionHub}>
              <a 
                href="mailto:anujofficial18@gmail.com?subject=Resume%20Request%20%E2%80%94%20Anuj%20Joshi"
                style={styles.ghostPill}
              >
                <FileText size={14} />
                <span>Resume</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ux-anuj" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.ghostPill}
              >
                <span>LinkedIn ↗</span>
              </a>
              <a 
                href="mailto:anujofficial18@gmail.com" 
                style={styles.accentPill}
              >
                <Send size={13} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Detailed Milestone Rows */}
          <div style={styles.timelineFeed}>
            {experiences.map((item, idx) => (
              <motion.div 
                key={idx} 
                style={styles.milestoneCard}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div style={styles.milestoneMain}>
                  {item.icon}
                  <div style={styles.milestoneMeta}>
                    <div style={styles.headlineRow}>
                      <span style={styles.companyTitle}>{item.company}</span>
                      <span style={styles.roleSubtext}>· {item.role}</span>
                    </div>
                    <p style={styles.focusText}>{item.focus}</p>
                  </div>
                </div>

                <div style={styles.milestonePills}>
                  <span style={styles.periodLabel}>{item.period}</span>
                  <span style={styles.metricBadge}>{item.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Craft & Tooling Ecosystem */}
        <div style={styles.toolingSection}>
          <div style={styles.toolingHeader}>
            <span style={styles.eyebrow}>Craft & Tooling</span>
            <h2 style={styles.mainTitle}>
              The tools behind <span style={styles.serifHighlight}>the execution</span>
            </h2>
          </div>

          <div style={styles.toolsGrid}>
            {tools.map((tool, idx) => (
              <motion.a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.toolCard}
                whileHover={{ y: -3, borderColor: '#C7C7CC', boxShadow: '0 8px 24px -6px rgba(0,0,0,0.06)' }}
                transition={{ duration: 0.2 }}
              >
                <div style={styles.toolLeft}>
                  {tool.icon}
                  <div style={styles.toolTexts}>
                    <span style={styles.toolTitle}>{tool.name}</span>
                    <span style={styles.toolRole}>{tool.role}</span>
                  </div>
                </div>
                <ArrowUpRight size={16} style={styles.arrowMark} />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: 'clamp(80px, 11vh, 130px) 0',
    background: '#FAFAFB',
    borderTop: '1px solid #ECECEE',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(64px, 9vh, 96px)',
  },
  /* Experience Section */
  experienceSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: '16px',
    paddingBottom: '8px',
  },
  headerTitles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  eyebrow: {
    fontSize: '0.74rem',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#111113',
    background: '#FFFFFF',
    border: '1px solid #E5E5EA',
    padding: '4px 12px',
    borderRadius: '100px',
    width: 'fit-content',
  },
  mainTitle: {
    fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
    lineHeight: 1.15,
    fontWeight: '700',
    color: '#0E0E0F',
    letterSpacing: '-0.03em',
    margin: 0,
  },
  serifHighlight: {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '1.08em',
    color: '#3F3F46',
    letterSpacing: '-0.01em',
  },
  actionHub: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  ghostPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 18px',
    borderRadius: '100px',
    border: '1px solid #E4E4E7',
    background: '#FFFFFF',
    fontSize: '0.84rem',
    fontWeight: '500',
    color: '#18181B',
    textDecoration: 'none',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
    transition: 'all 0.2s ease',
  },
  accentPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    padding: '8px 22px',
    borderRadius: '100px',
    background: '#0E0E0F',
    color: '#FFFFFF',
    fontSize: '0.84rem',
    fontWeight: '600',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
    transition: 'all 0.2s ease',
  },
  timelineFeed: {
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    borderRadius: '24px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    padding: '8px 24px',
    boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.03)',
  },
  milestoneCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '22px 0',
    borderBottom: '1px solid #F4F4F6',
    gap: '20px',
    flexWrap: 'wrap',
  },
  milestoneMain: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    flex: 1,
    minWidth: '280px',
  },
  companyBadge: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
  },
  badgeLetter: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: '0.92rem',
  },
  milestoneMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  headlineRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '6px',
    flexWrap: 'wrap',
  },
  companyTitle: {
    fontSize: '1.02rem',
    fontWeight: '700',
    color: '#0E0E0F',
    letterSpacing: '-0.015em',
  },
  roleSubtext: {
    fontSize: '0.86rem',
    fontWeight: '500',
    color: '#52525B',
  },
  focusText: {
    fontSize: '0.84rem',
    lineHeight: 1.48,
    color: '#71717A',
    margin: 0,
    maxWidth: '560px',
  },
  milestonePills: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  periodLabel: {
    fontSize: '0.82rem',
    fontWeight: '500',
    color: '#71717A',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
  },
  metricBadge: {
    fontSize: '0.74rem',
    fontWeight: '600',
    color: '#047857',
    background: 'rgba(5, 150, 105, 0.08)',
    border: '1px solid rgba(5, 150, 105, 0.16)',
    padding: '3px 9px',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
  },
  /* Tooling Section */
  toolingSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  toolingHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
  },
  toolCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderRadius: '16px',
    border: '1px solid #E5E5EA',
    background: '#FFFFFF',
    textDecoration: 'none',
    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
    transition: 'all 0.25s ease',
  },
  toolLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  toolIconWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '11px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  toolTexts: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  toolTitle: {
    fontSize: '0.94rem',
    fontWeight: '700',
    color: '#0E0E0F',
    letterSpacing: '-0.01em',
  },
  toolRole: {
    fontSize: '0.76rem',
    color: '#71717A',
    fontWeight: '400',
  },
  arrowMark: {
    color: '#A1A1AA',
    flexShrink: 0,
  },
};
