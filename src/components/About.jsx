import React from 'react';
import { motion } from 'framer-motion';

import anujPortrait from '../assets/Anuj.png';
import jatayuImg from '../assets/jatayu.jpg';

export default function About() {
  // Washi tape notched edge clip-path for polaroids
  const tapeClip = 'polygon(0% 0%, 5% 50%, 0% 100%, 100% 100%, 95% 50%, 100% 0%)';

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



  return (
    <section id="about" style={styles.section}>
      <div className="grid-container" style={styles.container}>
        
        {/* ============================================================ */}
        {/* 1. SCRAPBOOK STAGE: POLAROIDS & NOTEBOOK NARRATIVE           */}
        {/* ============================================================ */}
        <div style={styles.scrapbookStage}>

          {/* 1. Left Polaroid: Anuj's Portrait (Straight, shifted to bottom) */}
          <motion.div
            key="left-polaroid-straight"
            style={styles.leftPolaroidWrap}
            initial={{ opacity: 0, x: -20, y: 36, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 36, rotate: 0 }}
            animate={{ y: 36, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            {/* Washi Tape: Top-Left (Pastel Blue) */}
            <div style={{ ...styles.washiTape, ...styles.tapeTopLeft, clipPath: tapeClip }} />
            {/* Washi Tape: Top-Right (Pastel Yellow) */}
            <div style={{ ...styles.washiTape, ...styles.tapeTopRight, clipPath: tapeClip }} />

            {/* White Polaroid Card */}
            <div style={styles.polaroidCard}>
              <div style={styles.photoBox}>
                <img
                  src={anujPortrait}
                  alt="Anuj Joshi"
                  style={styles.polaroidImg}
                  loading="lazy"
                />
              </div>
              <span style={styles.polaroidCaption}>2025</span>
            </div>
          </motion.div>

          {/* 2. Center: Note & Sticker Badges */}
          <div style={styles.centerStage}>

            {/* Clean 'About me' Text */}
            <motion.div
              style={styles.stampBadgeWrap}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span style={styles.aboutMeText}>
                About me
              </span>
            </motion.div>

            {/* Handwritten Note Narrative */}
            <motion.p
              style={styles.handwrittenNote}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I'm a product designer with 3+ years of experience scaling fintech and SaaS platforms through data-driven UX. <span style={styles.sparkleEmoji}>✨</span> I specialize in transforming complex financial workflows and AI systems into effortless, human-centered experiences. <span style={styles.paletteEmoji}>🎨</span>
            </motion.p>
          </div>

          {/* 3. Right Polaroid: Kerala (Straight, shifted to top) */}
          <motion.div
            key="right-polaroid-straight"
            style={styles.rightPolaroidWrap}
            initial={{ opacity: 0, x: 20, y: -36, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, y: -36, rotate: 0 }}
            animate={{ y: -36, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            {/* Washi Tape: Top-Left (Pastel Blue) */}
            <div style={{ ...styles.washiTape, ...styles.tapeTopLeft, clipPath: tapeClip }} />
            {/* Washi Tape: Top-Right (Pastel Yellow) */}
            <div style={{ ...styles.washiTape, ...styles.tapeTopRight, clipPath: tapeClip }} />

            {/* White Polaroid Card */}
            <div style={styles.polaroidCard}>
              <div style={styles.photoBox}>
                <img
                  src={jatayuImg}
                  alt="Kerala, India"
                  style={{
                    ...styles.polaroidImg,
                    objectPosition: 'center 42%',
                    transform: 'scale(2.35)',
                    transformOrigin: '50% 55%',
                  }}
                  loading="lazy"
                />
              </div>
              <span style={styles.polaroidCaption}>kerala 📍</span>
            </div>
          </motion.div>

        </div>

        {/* Vertical Line Connector */}
        <div style={styles.verticalLineWrap}>
          <div style={styles.verticalLine} />
        </div>

        {/* ============================================================ */}
        {/* 2. WORK EXPERIENCE & CAREER TRAJECTORY (SAME BACKGROUND)     */}
        {/* ============================================================ */}
        <div id="experience" style={styles.experienceWrapper}>
          
          {/* Career Trajectory Section */}
          <div style={styles.experienceSection}>
            {/* Centered Header */}
            <div style={styles.sectionHeaderCenter}>
              <h2 style={styles.mainTitleCenter}>
                Shipped impact <span style={styles.serifHighlight}>& track record</span>
              </h2>
            </div>

            {/* Alternating Trajectory Timeline (Time Aligned Left & Right) */}
            <div className="trajectory-timeline-wrap">
              <div className="trajectory-spine" />

              {experiences.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`trajectory-row ${isLeft ? 'left' : 'right'}`}
                  >
                    {isLeft ? (
                      <>
                        {/* 1. Left Column: Card Data (Aligned close to the line point, icon on right) */}
                        <div className="trajectory-card-cell">
                          <motion.div
                            style={styles.milestoneCardWrapLeft}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                          >
                            <div style={styles.milestoneHeaderLeft}>
                              <div style={styles.titleRoleGroupLeft}>
                                <div style={styles.companyTitle}>{item.company}</div>
                                <div style={styles.roleSubtext}>{item.role}</div>
                              </div>
                              {item.icon}
                            </div>
                            <p style={styles.focusTextLeft}>{item.focus}</p>
                          </motion.div>
                        </div>

                        {/* 2. Center Column: Node Dot */}
                        <div className="trajectory-node-cell">
                          <div className="trajectory-dot" />
                        </div>

                        {/* 3. Right Column: Time */}
                        <div className="trajectory-time-cell">
                          <div style={styles.timeMainText}>{item.period}</div>
                          <div style={styles.timeSubText}>{item.companyType}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* 1. Left Column: Time */}
                        <div className="trajectory-time-cell">
                          <div style={styles.timeMainText}>{item.period}</div>
                          <div style={styles.timeSubText}>{item.companyType}</div>
                        </div>

                        {/* 2. Center Column: Node Dot */}
                        <div className="trajectory-node-cell">
                          <div className="trajectory-dot" />
                        </div>

                        {/* 3. Right Column: Card Data (Aligned close to the line point, icon on left) */}
                        <div className="trajectory-card-cell">
                          <motion.div
                            style={styles.milestoneCardWrapRight}
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                          >
                            <div style={styles.milestoneHeaderRight}>
                              {item.icon}
                              <div style={styles.titleRoleGroupRight}>
                                <div style={styles.companyTitle}>{item.company}</div>
                                <div style={styles.roleSubtext}>{item.role}</div>
                              </div>
                            </div>
                            <p style={styles.focusTextRight}>{item.focus}</p>
                          </motion.div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>



        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    width: '100%',
    padding: 'clamp(95px, 12vh, 145px) 0',
    backgroundColor: '#FAF9F6',
    backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #E5E9F0 31px, #E5E9F0 32px)',
    backgroundSize: '100% 32px',
    borderTop: '1px solid #ECECEE',
    borderBottom: '1px solid #ECECEE',
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1360px',
    margin: '0 auto',
    padding: '0 32px',
  },
  scrapbookStage: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    gap: 'clamp(36px, 6vw, 76px)',
    position: 'relative',
    flexWrap: 'wrap',
  },
  /* Polaroid Frames */
  leftPolaroidWrap: {
    position: 'relative',
    flexShrink: 0,
    width: 'clamp(205px, 22vw, 255px)',
    alignSelf: 'flex-end',
    margin: '16px auto',
    marginBottom: '16px',
    zIndex: 2,
  },
  rightPolaroidWrap: {
    position: 'relative',
    flexShrink: 0,
    width: 'clamp(205px, 22vw, 255px)',
    alignSelf: 'flex-start',
    margin: '16px auto',
    marginTop: '16px',
    zIndex: 2,
  },
  polaroidCard: {
    background: '#FFFFFF',
    padding: '12px 12px 34px 12px',
    borderRadius: '2px',
    boxShadow: '0 12px 30px -6px rgba(0, 0, 0, 0.14), 0 4px 10px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  photoBox: {
    width: '100%',
    aspectRatio: '1 / 1.08',
    overflow: 'hidden',
    background: '#F0F0F2',
  },
  polaroidImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  polaroidCaption: {
    fontFamily: "'Patrick Hand', 'Caveat', cursive",
    fontSize: '1.05rem',
    color: '#4B5563',
    marginTop: '12px',
    letterSpacing: '0.02em',
    userSelect: 'none',
  },
  /* Washi Tape Strips */
  washiTape: {
    position: 'absolute',
    width: '68px',
    height: '22px',
    zIndex: 3,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    pointerEvents: 'none',
  },
  tapeTopLeft: {
    top: '-10px',
    left: '-14px',
    background: 'rgba(168, 208, 255, 0.78)',
    transform: 'rotate(-32deg)',
  },
  tapeTopRight: {
    top: '-10px',
    right: '-14px',
    background: 'rgba(254, 240, 138, 0.82)',
    transform: 'rotate(35deg)',
  },
  /* Center Stage */
  centerStage: {
    flex: '1 1 420px',
    maxWidth: '580px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    gap: '12px',
    zIndex: 1,
  },
  stampBadgeWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  aboutMeText: {
    fontSize: '0.92rem',
    fontWeight: '700',
    color: '#71717A',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
    margin: 0,
  },
  handwrittenNote: {
    fontFamily: "'Patrick Hand', 'Caveat', cursive",
    fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
    lineHeight: 1.68,
    color: '#18181B',
    margin: 0,
    letterSpacing: '0.01em',
    padding: '0 8px',
  },
  sparkleEmoji: {
    display: 'inline-block',
    fontSize: '1.1em',
    transform: 'rotate(12deg)',
  },
  paletteEmoji: {
    display: 'inline-block',
    fontSize: '1.1em',
    transform: 'rotate(-8deg)',
  },


  /* ============================================================ */
  /* WORK EXPERIENCE IN SAME BACKGROUND STYLES                    */
  /* ============================================================ */
  verticalLineWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '32px auto 24px auto',
    width: '100%',
  },
  verticalLine: {
    width: '1.5px',
    height: '60px',
    backgroundColor: '#111113',
  },
  experienceWrapper: {
    marginTop: '0px',
    paddingTop: '0px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  experienceSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  sectionHeaderCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '14px',
    maxWidth: '720px',
    margin: '0 auto',
  },
  mainTitleCenter: {
    fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
    lineHeight: 1.15,
    fontWeight: '700',
    color: '#0E0E0F',
    letterSpacing: '-0.03em',
    margin: 0,
    textAlign: 'center',
  },
  serifHighlight: {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '1.08em',
    color: '#3F3F46',
    letterSpacing: '-0.01em',
  },
  milestoneCardWrapLeft: {
    maxWidth: '460px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  milestoneCardWrapRight: {
    maxWidth: '460px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  milestoneHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '12px',
    width: '100%',
  },
  titleRoleGroupLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'right',
    justifyContent: 'center',
  },
  milestoneHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '12px',
    width: '100%',
  },
  titleRoleGroupRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    justifyContent: 'center',
  },
  timeMainText: {
    fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
    fontWeight: '800',
    color: '#111113',
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
    margin: 0,
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  timeSubText: {
    fontSize: '0.78rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#71717A',
    letterSpacing: '0.04em',
    marginTop: '3px',
    margin: 0,
    lineHeight: 1.2,
  },
  companyBadge: {
    width: '36px',
    height: '36px',
    borderRadius: '0px',
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
    lineHeight: 1.25,
    margin: 0,
  },
  roleSubtext: {
    fontSize: '0.86rem',
    fontWeight: '500',
    color: '#52525B',
    lineHeight: 1.25,
    margin: 0,
    marginTop: '2px',
  },
  focusTextLeft: {
    fontSize: '0.86rem',
    lineHeight: 1.55,
    color: '#52525B',
    margin: '8px 0 0 0',
    maxWidth: '460px',
    textAlign: 'right',
    paddingRight: '48px',
  },
  focusTextRight: {
    fontSize: '0.86rem',
    lineHeight: 1.55,
    color: '#52525B',
    margin: '8px 0 0 0',
    maxWidth: '460px',
    textAlign: 'left',
    paddingLeft: '48px',
  },
};
