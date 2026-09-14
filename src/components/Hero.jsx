import React from 'react';
import { motion } from 'framer-motion';
import { ShaderAnimation } from './ui/shader-animation';

export default function Hero() {
  const avatarTools = [
    {
      name: 'Figma',
      icon: (
        <svg width="22" height="22" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#0ACF83"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#1ABCFE"/>
          <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
          <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
          <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
        </svg>
      ),
    },
    {
      name: 'Claude',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#D97757">
          <path d="M12 2a1.2 1.2 0 0 1 1.2 1.2v4.8l3.4-3.4a1.2 1.2 0 0 1 1.7 1.7L14.9 9.7h4.8a1.2 1.2 0 0 1 0 2.4h-4.8l3.4 3.4a1.2 1.2 0 0 1-1.7 1.7l-3.4-3.4v4.8a1.2 1.2 0 0 1-2.4 0v-4.8l-3.4 3.4a1.2 1.2 0 0 1-1.7-1.7l3.4-3.4H4.3a1.2 1.2 0 0 1 0-2.4h4.8L5.7 6.3a1.2 1.2 0 0 1 1.7-1.7l3.4 3.4V3.2A1.2 1.2 0 0 1 12 2z"/>
        </svg>
      ),
    },
    {
      name: 'Cursor',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4361EE"/>
          <path d="M7 14.5l2.5-2-2.5-2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.5 15.5h3" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Linear',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="rainbowArchGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="25%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="75%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          <path d="M3.5 20c1.5-8.5 5.5-14.5 8.5-14.5s7 6 8.5 14.5" stroke="url(#rainbowArchGrad)" strokeWidth="4.5" strokeLinecap="round"/>
          <path d="M7 20c1-5.5 3-9.5 5-9.5s4 4 5 9.5" stroke="url(#rainbowArchGrad)" strokeWidth="2.8" strokeLinecap="round" strokeOpacity="0.85"/>
        </svg>
      ),
    },
    {
      name: 'Framer',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
          <path d="M12 0H4V8H12V0ZM4 8H12L20 16H4V8ZM12 16V24L4 16H12Z"/>
        </svg>
      ),
    },
    {
      name: 'Security',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="silverShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF"/>
              <stop offset="45%" stopColor="#E2E8F0"/>
              <stop offset="80%" stopColor="#94A3B8"/>
              <stop offset="100%" stopColor="#64748B"/>
            </linearGradient>
          </defs>
          <path d="M12 2.5L4.5 5.8v6c0 5.2 3.2 10.1 7.5 11.7 4.3-1.6 7.5-6.5 7.5-11.7v-6L12 2.5z" fill="url(#silverShieldGrad)" stroke="#64748B" strokeWidth="0.8"/>
          <path d="M12 3.5L5.5 6.2v5.6c0 4.5 2.8 8.8 6.5 10.1V3.5z" fill="#FFFFFF" fillOpacity="0.5"/>
        </svg>
      ),
    },
    {
      name: 'Webflow',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18181B" strokeWidth="1.9">
          <circle cx="12" cy="12" r="9.5"/>
          <ellipse cx="12" cy="12" rx="4.5" ry="9.5"/>
          <line x1="2.5" y1="12" x2="21.5" y2="12"/>
        </svg>
      ),
    },
    {
      name: 'ElevenLabs',
      icon: (
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="8" fill="#111113"/>
          <path d="M7 14v0M10.5 9.5v9M14 6v16M17.5 9.5v9M21 14v0" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="home" style={styles.heroSection}>
      
      {/* Ambient Shader Animation Background Wrapper */}
      <div style={styles.backgroundWrapper}>
        <ShaderAnimation />
        <div style={styles.backgroundOverlay}></div>
      </div>

      {/* Main Grid: Floats Above Background */}
      <div className="grid-container" style={styles.heroGrid}>
        
        {/* Left Side: Headline (Anuj Joshi Personal Brand Positioning) */}
        <motion.div 
          style={styles.heroLeft}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="hero-headline"
            style={styles.headline}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Designing <span style={styles.serifHighlight}>digital experiences</span> with intention, <span style={styles.serifHighlight}>not</span> decoration
          </motion.h1>

          <motion.p 
            style={styles.subtext}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            I am <span style={styles.highlight}>Anuj Joshi</span>, a Product Designer & <span style={styles.highlight}>Fintech & SaaS UX Specialist</span>. With 3+ years of experience, I transform complex financial products and AI-driven platforms into intuitive, high-converting interfaces that drive measurable business outcomes.
          </motion.p>

          {/* Overlapping Circular Avatar Tool Stack */}
          <motion.div 
            style={styles.avatarStackWrapper}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-tool-stack-container">
              {avatarTools.map((tool, idx) => (
                <div key={idx} className="hero-tool-avatar-circle" title={tool.name}>
                  {tool.icon}
                </div>
              ))}
            </div>
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
    flex: 1,
    width: '100%',
    paddingTop: '80px',
    paddingBottom: '20px',
    background: 'var(--bg-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
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
  avatarStackWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '8px',
    width: '100%',
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
  serifHighlight: {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '1.08em',
    letterSpacing: '-0.01em',
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
