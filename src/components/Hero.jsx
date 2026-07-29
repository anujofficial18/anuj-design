import React from 'react';
import { motion } from 'framer-motion';
import designerProfile from '../assets/Anuj.png';
import { ShaderAnimation } from './ui/shader-animation';
import { TextReveal } from './ui/text-reveal';

// Static particle config to prevent render mismatches
const backgroundParticles = [
  { top: '15%', left: '10%', size: '3px', delay: '0s', bg: 'var(--accent-purple)' },
  { top: '42%', left: '6%', size: '4px', delay: '-3s', bg: 'var(--accent-green)' },
  { top: '80%', left: '14%', size: '3px', delay: '-6s', bg: 'var(--accent-orange)' },
  { top: '22%', left: '88%', size: '4px', delay: '-9s', bg: 'var(--accent-purple)' },
  { top: '68%', left: '93%', size: '3px', delay: '-12s', bg: 'var(--accent-green)' },
  { top: '8%', left: '48%', size: '3px', delay: '-15s', bg: 'var(--accent-orange)' },
  { top: '76%', left: '42%', size: '5px', delay: '-2s', bg: 'var(--border-light)' },
  { top: '32%', left: '28%', size: '3px', delay: '-5s', bg: 'var(--accent-purple)' },
  { top: '58%', left: '72%', size: '4px', delay: '-8s', bg: 'var(--accent-orange)' },
  { top: '92%', left: '82%', size: '3px', delay: '-11s', bg: 'var(--accent-green)' },
];

export default function Hero() {
  return (
    <section id="home" style={styles.heroSection}>
      
      {/* Ambient Shader Animation Background Wrapper */}
      <div style={styles.backgroundWrapper}>
        <ShaderAnimation />
        <div style={styles.backgroundOverlay}></div>
      </div>

      {/* Main Grid: Floats Above Background */}
      <div className="grid-container" style={styles.heroGrid}>
        
        {/* Left Side: Headline (Bisonworkz Studios Brand Positioning) */}
        <motion.div 
          style={styles.heroLeft}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111111', background: '#F4F4F6', padding: '5px 14px', borderRadius: '9999px', border: '1px solid #EAEAEA' }}>
              Bisonworkz Studios ✦ AI-First Design Studio
            </span>
          </div>

          <TextReveal
            as="h1"
            className="hero-headline"
            style={styles.headline}
            preset="fade-in-blur"
            speedReveal={1.2}
          >
            Designing digital experiences with intention, not decoration
          </TextReveal>

          <motion.p 
            style={styles.subtext}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Led by <span style={styles.highlight}>Anuj Joshi (Partner & Head of Design)</span>, Bisonworkz combines an <span style={styles.highlight}>AI-first production pipeline</span> with human judgment & design psychology to build cinematic websites and brand identities for <span style={styles.highlight}>real estate, luxury, fintech, and D2C brands.</span>
          </motion.p>

          <motion.div 
            style={styles.ctaGroup}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a 
              href="#gallery"
              style={styles.primaryBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Design Feed ↗
            </motion.a>
            <motion.a 
              href="#about"
              style={styles.secondaryBtn}
              whileHover={{ scale: 1.03, borderColor: 'var(--text-primary)' }}
              whileTap={{ scale: 0.98 }}
            >
              Our Philosophy
            </motion.a>
          </motion.div>

          <motion.div 
            style={styles.statsRow}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.64, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>AI-first production speed</span>
            <span style={styles.divider}>·</span>
            <span>Cinematic & monochrome luxury</span>
            <span style={styles.divider}>·</span>
            <span>Reasoned design execution</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Draggable Polaroid Photo (Commented out for now) */}
        {/* <div style={styles.heroRight}>
          <motion.div
            style={styles.polaroidContainer}
            drag
            dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
            dragElastic={0.4}
            whileDrag={{ scale: 1.05, zIndex: 100 }}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              rotate: 3.5,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
            }}
            whileHover={{ 
              rotate: -1, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div style={styles.polaroidFrame}>
              <div style={styles.photoWrapper}>
                <img 
                  src={designerProfile} 
                  alt="Product Designer Portrait" 
                  style={styles.profilePhoto} 
                  draggable="false"
                />
              </div>
              <div style={styles.captionWrapper}>
                <p style={styles.caption}>
                  Current at Pixela UI/UX design studio <span style={styles.star}>✦</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div> */}

      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    paddingTop: '140px',
    paddingBottom: '20px',
    background: 'var(--bg-primary)',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(246, 245, 243, 0.05) 0%, rgba(246, 245, 243, 0.65) 100%)',
    zIndex: 3,
  },
  heroGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
    width: '100%',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
    position: 'relative',
    zIndex: 11,
    maxWidth: '850px',
  },
  subtext: {
    fontSize: '1.1rem',
    lineHeight: '1.65',
    color: 'var(--text-secondary)',
    maxWidth: '620px',
    fontFamily: 'var(--font-family-body)',
    margin: 0,
    textAlign: 'center',
  },
  highlight: {
    color: 'var(--text-primary)',
    fontWeight: '600',
  },
  ctaGroup: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    marginTop: '12px',
  },
  primaryBtn: {
    padding: '12px 28px',
    borderRadius: '100px',
    fontSize: '0.95rem',
    fontWeight: '600',
    background: 'var(--text-primary)',
    color: 'var(--bg-primary)',
    border: '1px solid var(--text-primary)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  secondaryBtn: {
    padding: '12px 28px',
    borderRadius: '100px',
    fontSize: '0.95rem',
    fontWeight: '600',
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-medium)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  statsRow: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '32px',
    fontSize: '0.92rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-family-sans)',
    letterSpacing: '0.02em',
  },
  divider: {
    color: 'var(--state-joy)',
    fontWeight: '700',
    fontSize: '1.2rem',
    userSelect: 'none',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5.2vw, 4.4rem)',
    lineHeight: '1.05',
    color: 'var(--text-primary)',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    maxWidth: '850px',
    letterSpacing: '-0.01em',
    textAlign: 'center',
  },
  headlineItalic: {
    fontStyle: 'italic',
    fontFamily: 'var(--font-family-serif)',
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    perspective: 1000,
    zIndex: 11,
  },
  polaroidContainer: {
    cursor: 'grab',
  },
  polaroidFrame: {
    background: 'var(--card-white)',
    padding: '16px 16px 24px 16px',
    borderRadius: '16px',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.02)',
    border: '1px solid var(--border-light)',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    userSelect: 'none',
  },
  photoWrapper: {
    width: '100%',
    height: '280px',
    borderRadius: '8px',
    overflow: 'hidden',
    background: '#f2f0ef',
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  captionWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '4px',
  },
  caption: {
    fontFamily: 'var(--font-family-heading)',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    textAlign: 'center',
  },
  star: {
    color: 'var(--state-joy)',
    marginLeft: '2px',
  },
};
