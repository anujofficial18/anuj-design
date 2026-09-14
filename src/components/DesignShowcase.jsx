import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowUpRight } from 'lucide-react';

// Import All Real High-Fidelity UI Design Work Assets
import img1 from '../assets/Bison-portfolio-work/Pricing Editor Entitlement Hierarchy.png';
import img2 from '../assets/Bison-portfolio-work/Frame 1321316410.jpg';
import img3 from '../assets/Bison-portfolio-work/LEAP.png';
import img4 from '../assets/Bison-portfolio-work/Frame 1321316411.jpg';
import img5 from '../assets/Bison-portfolio-work/Login.jpeg';
import img6 from '../assets/Bison-portfolio-work/Entitlements 363.jpeg';
import img7 from '../assets/Bison-portfolio-work/Frame 84.jpg';
import img8 from '../assets/Bison-portfolio-work/Frame 85.jpg';
import img9 from '../assets/Bison-portfolio-work/ScholarShield Step.png';
import img10 from '../assets/Bison-portfolio-work/Frame 1321316447.png';
import img11 from '../assets/Bison-portfolio-work/Frame 1321316449.png';
import img12 from '../assets/Bison-portfolio-work/Mockuuups Free Macbook Pro Space Gray mockup on the wooden table.jpeg';
import img13 from '../assets/Bison-portfolio-work/Untitled-mockup (10) 1.png';

export default function DesignShowcase() {
  const [activeArtwork, setActiveArtwork] = useState(null);

  const designFrames = [
    { id: 'df-1', image: img1, title: 'Pricing Editor & Entitlement Matrix', category: 'SaaS Platform UX' },
    { id: 'df-2', image: img2, title: 'Brand & Product Design System Canvas', category: 'Brand & Product Canvas' },
    { id: 'df-3', image: img3, title: 'LEAP — AI Financial Workspace', category: 'AI Product Design' },
    { id: 'df-4', image: img4, title: 'Interactive Analytics Dashboard', category: 'Fintech Analytics' },
    { id: 'df-5', image: img5, title: 'Mobile Biometric Authentication', category: 'Mobile UI' },
    { id: 'df-6', image: img6, title: 'Entitlements & Policy Controls', category: 'Enterprise Systems' },
    { id: 'df-7', image: img7, title: 'Cinematic Visual Showcase I', category: 'Visual Direction' },
    { id: 'df-8', image: img8, title: 'Cinematic Visual Showcase II', category: 'E-Commerce UX' },
    { id: 'df-9', image: img9, title: 'ScholarShield Step Flow', category: 'Onboarding & Identity' },
    { id: 'df-10', image: img10, title: 'Micro-Interactions & Gestures', category: 'Interaction Design' },
    { id: 'df-11', image: img11, title: 'Design System Token Architecture', category: 'Design Systems' },
    { id: 'df-12', image: img12, title: 'MacBook Pro Platform Workstation', category: 'Hardware Mockup' },
    { id: 'df-13', image: img13, title: 'Multi-Device Responsive Suite', category: 'Responsive UI' },
  ];

  // Duplicate for seamless 100% infinite marquee loop
  const marqueeFrames = [...designFrames, ...designFrames];

  return (
    <section id="designs" style={styles.section}>
      {/* Section Header */}
      <div className="grid-container" style={styles.headerContainer}>
        <div style={styles.headerContent}>
          <span style={styles.tag}>Archive & Explorations</span>
          <h2 style={styles.title}>
            All <span style={styles.serifHighlight}>Designs</span>
          </h2>
          <p style={styles.subtitle}>
            A continuous gallery of production interfaces, design system components, and product frames.
          </p>
        </div>
      </div>

      {/* Horizontally Aligned Auto-Scrolling Track */}
      <div className="designs-reel-wrapper" style={styles.reelWrapper}>
        <div className="designs-reel-track">
          {marqueeFrames.map((frame, idx) => (
            <div
              key={`${frame.id}-${idx}`}
              className="design-frame-card"
              onClick={() => setActiveArtwork(frame)}
              style={styles.frameCard}
            >
              <div style={styles.imageContainer}>
                <img
                  src={frame.image}
                  alt={frame.title}
                  style={styles.frameImage}
                  loading="lazy"
                />
                <div className="design-frame-overlay" style={styles.cardOverlay}>
                  <div style={styles.overlayContent}>
                    <span style={styles.cardCategory}>{frame.category}</span>
                    <span style={styles.cardTitle}>{frame.title}</span>
                  </div>
                  <div style={styles.zoomBadge}>
                    <ZoomIn size={16} color="#FFFFFF" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeArtwork && (
          <motion.div
            style={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArtwork(null)}
          >
            <motion.div
              style={styles.lightboxContent}
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.closeBtn}
                onClick={() => setActiveArtwork(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div style={styles.lightboxImageWrapper}>
                <img
                  src={activeArtwork.image}
                  alt={activeArtwork.title}
                  style={styles.lightboxImage}
                />
              </div>

              <div style={styles.lightboxFooter}>
                <div>
                  <span style={styles.lightboxCategory}>{activeArtwork.category}</span>
                  <h3 style={styles.lightboxTitle}>{activeArtwork.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const styles = {
  section: {
    width: '100%',
    paddingTop: 'clamp(80px, 10vh, 120px)',
    paddingBottom: 0,
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #EBECEF',
    borderBottom: '1px solid #EBECEF',
    position: 'relative',
    overflow: 'hidden',
  },
  headerContainer: {
    maxWidth: '1360px',
    margin: '0 auto',
    padding: '0 32px 40px 32px',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '12px',
    maxWidth: '720px',
    margin: '0 auto',
  },
  tag: {
    fontSize: '0.82rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#71717A',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  title: {
    fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
    lineHeight: 1.08,
    fontWeight: '400',
    color: '#0E0E0F',
    letterSpacing: '-0.02em',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
    margin: 0,
  },
  serifHighlight: {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '1.08em',
  },
  subtitle: {
    fontSize: '1.02rem',
    lineHeight: 1.55,
    color: '#71717A',
    margin: 0,
    fontFamily: 'var(--font-family-body)',
  },
  reelWrapper: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '16px',
    paddingBottom: 0,
    marginBottom: '-84px', // Exactly 20% of 420px height cut by section bottom boundary
    maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
  },
  frameCard: {
    position: 'relative',
    height: '420px',
    borderRadius: '10px 10px 0 0',
    overflow: 'hidden',
    cursor: 'pointer',
    flexShrink: 0,
    backgroundColor: '#F8F9FB',
    border: '1px solid rgba(0, 0, 0, 0.09)',
    borderBottom: 'none',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  imageContainer: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameImage: {
    height: '100%',
    width: 'auto',
    maxWidth: 'none',
    objectFit: 'cover',
    display: 'block',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '20px 20px 100px 20px', // Positioned above the 20% cut-off zone
    opacity: 0,
    transition: 'opacity 0.25s ease',
  },
  overlayContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    textAlign: 'left',
  },
  cardCategory: {
    fontSize: '0.72rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: 'rgba(255, 255, 255, 0.75)',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  cardTitle: {
    fontSize: '0.98rem',
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: '-0.01em',
    fontFamily: 'var(--font-family-body)',
  },
  zoomBadge: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  lightboxOverlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    backgroundColor: 'rgba(10, 10, 12, 0.88)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
  },
  lightboxContent: {
    position: 'relative',
    maxWidth: '1100px',
    width: '100%',
    maxHeight: '92vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#121214',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  closeBtn: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'background-color 0.2s ease',
  },
  lightboxImageWrapper: {
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#09090B',
    overflow: 'auto',
    padding: '16px',
    maxHeight: 'calc(92vh - 80px)',
  },
  lightboxImage: {
    maxWidth: '100%',
    maxHeight: '80vh',
    objectFit: 'contain',
    borderRadius: '4px',
  },
  lightboxFooter: {
    padding: '16px 24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lightboxCategory: {
    fontSize: '0.74rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#A1A1AA',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  lightboxTitle: {
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#FFFFFF',
    margin: '4px 0 0 0',
    fontFamily: "'TASA Orbiter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
};
