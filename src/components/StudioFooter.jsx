import React from 'react';

export default function StudioFooter() {
  return (
    <footer id="contact" style={styles.footer}>
      <div className="grid-container" style={styles.footerInner}>
        <div style={styles.leftCol}>
          <span style={styles.tag}>Get in Touch</span>
          <h2 style={styles.heading}>Ready to build something extraordinary?</h2>
          <p style={styles.subtext}>
            Open for Product Design roles, fintech UX initiatives, and design systems architecture. Based in Indore, India.
          </p>
        </div>

        <div style={styles.rightCol}>
          <a href="mailto:anujofficial18@gmail.com" style={styles.ctaBtn}>
            Get in Touch ↗
          </a>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div className="grid-container" style={styles.bottomInner}>
          <span style={styles.brandTag}>Anuj Joshi — Fintech & SaaS Product Designer</span>
          <span style={styles.copyText}>anujofficial18@gmail.com • +91-6268366678</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#0E0E0F',
    color: '#FFFFFF',
    paddingTop: '100px',
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '40px',
    paddingBottom: '80px',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '620px',
  },
  tag: {
    fontSize: '0.78rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#10B981',
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '4px 14px',
    borderRadius: '9999px',
    width: 'fit-content',
  },
  heading: {
    fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    color: '#FFFFFF',
    margin: 0,
    lineHeight: '1.1',
  },
  subtext: {
    fontSize: '1.1rem',
    color: '#A1A1AA',
    lineHeight: '1.6',
    margin: 0,
  },
  rightCol: {
    display: 'flex',
    alignItems: 'center',
  },
  ctaBtn: {
    padding: '18px 42px',
    borderRadius: '100px',
    background: '#FFFFFF',
    color: '#0E0E0F',
    fontSize: '1.05rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '32px 0',
  },
  bottomInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.88rem',
  },
  brandTag: {
    fontWeight: '700',
    color: '#FFFFFF',
  },
  copyText: {
    color: '#71717A',
  },
};
