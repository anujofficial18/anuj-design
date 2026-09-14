import React from 'react';
import { motion } from 'framer-motion';
import anujPortrait from '../assets/Anuj.png';

// Minimal SVG Icons Matching Screenshot
function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.91-.74-1.66-1.66-1.66-.92 0-1.66.75-1.66 1.66 0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

// Bespoke Isometric Stacked Layers Icon with '+' (Matching Reference Photo 1)
function StackedLayersIcon({ size = '0.88em' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        display: 'inline-block',
        verticalAlign: '-0.08em',
        margin: '0 0.12em',
        color: '#0E0E10',
      }}
      aria-hidden="true"
    >
      {/* Top isometric layer */}
      <path d="M18 4.5L31 11L18 17.5L5 11L18 4.5Z" fill="none" />
      {/* Middle isometric layer chevron */}
      <path d="M5 17.5L18 24L24.5 20.8" />
      {/* Bottom isometric layer chevron */}
      <path d="M5 24L18 30.5L22.5 28.3" />
      {/* Attached plus indicator */}
      <path d="M29 24.5V31.5M25.5 28H32.5" strokeWidth="2.4" />
    </svg>
  );
}

export default function AboutEditorial() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* ================= HERO INTRO (Photo 1) ================= */}
        <motion.div
          style={styles.heroIntro}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Centered Circular Avatar */}
          <div style={styles.avatarWrapper}>
            <img
              src={anujPortrait}
              alt="Anuj Joshi"
              style={styles.avatarImage}
            />
          </div>

          {/* Name Label */}
          <div style={styles.nameLabel}>Anuj Joshi</div>

          {/* Large Bold Editorial Headline with Inline Layers Icon */}
          <h2 style={styles.mainHeadline}>
            Fintech & SaaS <StackedLayersIcon /> UX
            <br />
            & product designer
          </h2>
        </motion.div>

        {/* ================= EDITORIAL NARRATIVE (Photo 2) ================= */}
        <motion.div
          style={styles.editorialBody}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Friendly Greeting Header */}
          <p style={styles.greetingText}>
            Hi there 👋 ʕ•ᴥ•ʔ
          </p>

          {/* Paragraph 1: Experience & Current Focus */}
          <p style={styles.paragraph}>
            I'm a product designer with 4+ years of leadership experience across design studios (
            <a 
              href="https://www.linkedin.com/company/pixela-ux-ui-studio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.underlinedLink}
              className="editorial-link"
            >
              Pixela UX/UI Studio
            </a>
            ) and product teams (
            <a 
              href="https://www.codiotic.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.underlinedLink}
              className="editorial-link"
            >
              Codiotic Technologies
            </a>
            ), building scalable fintech platforms and multi-tenant SaaS products.
          </p>

          {/* Paragraph 2: Domains & Products */}
          <p style={styles.paragraph}>
            Over the past years, I've designed and shipped complex digital systems across wealthtech, mutual fund onboarding, AI trade assistants (
            <span style={styles.underlinedHighlight}>Sarthi AI</span>
            ), enterprise authorization (
            <span style={styles.underlinedHighlight}>Pricing & Entitlements</span>
            ), biometric security, and identity verification (
            <span style={styles.underlinedHighlight}>ScholarShield</span>
            {' & '}
            <span style={styles.underlinedHighlight}>DigiLocker</span>
            ).
          </p>

          {/* Paragraph 3: Measurable Outcomes */}
          <p style={styles.paragraph}>
            My design architectures directly impact business metrics—delivering a{' '}
            <span style={styles.underlinedHighlight}>+40% task completion lift</span> in financial workflows, 95% design-to-development code precision, and zero-to-one design system adoption across high-velocity engineering pods.
          </p>

          {/* Paragraph 4: Current Role */}
          <p style={styles.paragraph}>
            Now I'm UX Designer @{' '}
            <a 
              href="https://www.linkedin.com/company/pixela-ux-ui-studio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.underlinedLink}
              className="editorial-link"
            >
              Pixela UX/UI Studio
            </a>{' '}
            and continue to consult high-growth fintech startups on user research, interactive prototyping, and component token architecture.
          </p>

          {/* Paragraph 5: Craft & Methodology */}
          <p style={styles.paragraph}>
            I bridge complex backend logic with intuitive, human-centered UI—crafting entitlement matrices, data-dense analytics tables, frictionless checkout flows, and WCAG-accessible Figma libraries.
          </p>

          {/* Paragraph 6: Education & Certifications */}
          <p style={styles.paragraph}>
            B.Tech in Computer Science & Engineering (
            <span style={styles.underlinedHighlight}>IIST Indore</span>
            ), Google UX Design Certified, and{' '}
            <a 
              href="https://growthschool.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.underlinedLink}
              className="editorial-link"
            >
              GrowthSchool
            </a>{' '}
            Product Design Fellow.
          </p>

          {/* Connection Section */}
          <div style={styles.connectSection}>
            <div style={styles.connectTitle}>Let's connect</div>
            
            <div style={styles.socialRow}>
              {/* Telegram / Direct Message */}
              <a
                href="https://wa.me/916268366678"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                className="editorial-social-pill"
              >
                <TelegramIcon />
                <span>Telegram</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ux-anuj"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                className="editorial-social-pill"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href="mailto:anujofficial18@gmail.com"
                style={styles.socialLink}
                className="editorial-social-pill"
              >
                <MailIcon />
                <span>Email</span>
              </a>

              {/* Resume */}
              <a
                href="/Anuj_Joshi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                className="editorial-social-pill"
              >
                <FileIcon />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: '100%',
    padding: 'clamp(90px, 12vh, 150px) 24px',
    backgroundColor: '#FAF9F6',
    borderTop: '1px solid #ECECEE',
    borderBottom: '1px solid #ECECEE',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '780px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  /* Hero Intro (Image 1) */
  heroIntro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    marginBottom: 'clamp(48px, 7vh, 64px)',
  },
  avatarWrapper: {
    width: '92px',
    height: '92px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#E4E4E7',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    marginBottom: '16px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%',
    display: 'block',
  },
  nameLabel: {
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '0.98rem',
    fontWeight: '500',
    color: '#3F3F46',
    letterSpacing: '-0.01em',
    marginBottom: '26px',
  },
  mainHeadline: {
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 'clamp(2.4rem, 5.4vw, 4.3rem)',
    lineHeight: 1.14,
    fontWeight: '450',
    color: '#0E0E10',
    letterSpacing: '-0.03em',
    margin: 0,
    textAlign: 'center',
    maxWidth: '740px',
  },

  /* Editorial Narrative Body (Image 2) */
  editorialBody: {
    width: '100%',
    maxWidth: '680px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  greetingText: {
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#18181B',
    marginBottom: '26px',
    marginTop: 0,
    letterSpacing: '-0.01em',
  },
  paragraph: {
    fontFamily: 'var(--font-family-body), -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1.14rem',
    lineHeight: 1.72,
    color: '#27272A',
    marginTop: 0,
    marginBottom: '24px',
    letterSpacing: '-0.005em',
  },
  underlinedLink: {
    color: '#18181B',
    textDecoration: 'underline',
    textDecorationColor: '#A1A1AA',
    textUnderlineOffset: '3.5px',
    textDecorationThickness: '1px',
    fontWeight: '450',
    transition: 'text-decoration-color 0.2s ease, color 0.2s ease',
  },
  underlinedHighlight: {
    color: '#18181B',
    textDecoration: 'underline',
    textDecorationColor: '#D4D4D8',
    textUnderlineOffset: '3.5px',
    textDecorationThickness: '1px',
  },

  /* Let's connect section */
  connectSection: {
    marginTop: '20px',
    paddingTop: '8px',
  },
  connectTitle: {
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '1.18rem',
    fontWeight: '600',
    color: '#18181B',
    letterSpacing: '-0.015em',
    marginBottom: '18px',
  },
  socialRow: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '24px',
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '0.98rem',
    fontWeight: '500',
    color: '#52525B',
    textDecoration: 'none',
    transition: 'color 0.2s ease, transform 0.2s ease',
  },
  linkIcon: {
    color: '#71717A',
    transition: 'color 0.2s ease',
  },
};
