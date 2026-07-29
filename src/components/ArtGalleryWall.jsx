import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';

// Import Real Bisonworkz Studio Portfolio Work Assets
import bison1 from '../assets/Bison-portfolio-work/Entitlements 363.jpeg';
import bison2 from '../assets/Bison-portfolio-work/Frame 1321316410.jpg';
import bison3 from '../assets/Bison-portfolio-work/Frame 1321316411.jpg';
import bison4 from '../assets/Bison-portfolio-work/Frame 1321316447.png';
import bison5 from '../assets/Bison-portfolio-work/Frame 1321316449.png';
import bison6 from '../assets/Bison-portfolio-work/Frame 84.jpg';
import bison7 from '../assets/Bison-portfolio-work/Frame 85.jpg';
import bison8 from '../assets/Bison-portfolio-work/LEAP.png';
import bison9 from '../assets/Bison-portfolio-work/Login.jpeg';
import bison10 from '../assets/Bison-portfolio-work/Pricing Editor Entitlement Hierarchy.png';
import bison11 from '../assets/Bison-portfolio-work/Mockuuups Free Macbook Pro Space Gray mockup on the wooden table.jpeg';
import bison12 from '../assets/Bison-portfolio-work/Untitled-mockup (10) 1.png';

export default function ArtGalleryWall() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // All 12 Real Bisonworkz Studio Portfolio Items in Masonry Feed
  const feedItems = [
    { id: 'bison-01', colSpan: 2, image: bison10, title: 'Pricing Editor & Entitlement Hierarchy', category: 'SaaS Platform UX', year: '2026', exhibitNo: 'EXHIBIT 01', curatorNote: 'Enterprise pricing editor & entitlement management hierarchy interface designed for complex B2B SaaS permissions.', metrics: 'Reduced admin task time by 48%' },
    { id: 'bison-02', colSpan: 1, image: bison9, title: 'Authentication & Access Flow', category: 'Mobile App UI', year: '2026', exhibitNo: 'EXHIBIT 02', curatorNote: 'Streamlined mobile biometric login & OTP verification journey.', metrics: '99.8% Completion Rate' },
    { id: 'bison-03', colSpan: 1, image: bison8, title: 'LEAP — AI Financial Workspace', category: 'AI Product Design', year: '2025', exhibitNo: 'EXHIBIT 03', curatorNote: 'Voice-to-Visual AI recommendation engine and financial portfolio workspace.', metrics: '4.9★ User Rating' },
    { id: 'bison-04', colSpan: 2, image: bison2, title: 'Bisonworkz Brand & Interface Suite', category: 'Brand & Product UX', year: '2026', exhibitNo: 'EXHIBIT 04', curatorNote: 'Cinematic brand identity system and responsive web application canvas.', metrics: 'Boutique Studio Signature' },
    { id: 'bison-05', colSpan: 1, image: bison1, title: 'Entitlements & Permissions Architecture', category: 'Enterprise Design System', year: '2026', exhibitNo: 'EXHIBIT 05', curatorNote: 'Granular role-based entitlement permission matrix and policy configuration controls.', metrics: 'Tier-1 Security Compliance' },
    { id: 'bison-06', colSpan: 2, image: bison3, title: 'Interactive Dashboard Workstation', category: 'Fintech Dashboard', year: '2026', exhibitNo: 'EXHIBIT 06', curatorNote: 'High-density dark mode financial analytics dashboard with multi-widget layouts.', metrics: 'Real-time 60fps Canvas' },
    { id: 'bison-07', colSpan: 1, image: bison11, title: 'ScholarShield Step Flow', category: 'EdTech / Web3 UX', year: '2025', exhibitNo: 'EXHIBIT 07', curatorNote: 'Progressive onboarding stepper for educational verification and digital identity.', metrics: '+32% Onboarding Conversion' },
    { id: 'bison-08', colSpan: 1, image: bison6, title: 'Cinematic Visual Showcase I', category: 'Luxury Brand Identity', year: '2026', exhibitNo: 'EXHIBIT 08', curatorNote: 'Monochrome luxury creative direction for high-end digital brand experience.', metrics: 'Bespoke Art Direction' },
    { id: 'bison-09', colSpan: 1, image: bison7, title: 'Cinematic Visual Showcase II', category: 'D2C E-Commerce UX', year: '2026', exhibitNo: 'EXHIBIT 09', curatorNote: 'Immersive product narrative flow designed for high-conversion D2C storefront.', metrics: '+40% Session Duration' },
    { id: 'bison-10', colSpan: 2, image: bison5, title: 'Design System & Component Matrix', category: 'System Architecture', year: '2026', exhibitNo: 'EXHIBIT 10', curatorNote: 'Scalable UI component library and design system token architecture.', metrics: 'Used across 14 Production Apps' },
    { id: 'bison-11', colSpan: 1, image: bison4, title: 'Micro-Interactions & Motion Concept', category: 'Interaction Design', year: '2025', exhibitNo: 'EXHIBIT 11', curatorNote: 'Contextual micro-feedback and gesture-driven UI state transitions.', metrics: 'Subtle Motion Psychology' },
    { id: 'bison-12', colSpan: 2, image: bison12, title: 'Multi-Device App Mockup Suite', category: 'Product Showcase', year: '2026', exhibitNo: 'EXHIBIT 12', curatorNote: 'Multi-screen responsive showcase displaying cross-platform layout fidelity.', metrics: 'Universal Responsiveness' },
  ];

  return (
    <>
      {/* Design Feed Section (Bogdan Goncharenko Masonry Style) */}
      <section id="gallery" style={feedStyles.section}>
        <div className="grid-container">
          {/* Header Block */}
          <div style={feedStyles.headerBlock}>
            <h2 style={feedStyles.title}>
              Design Feed
            </h2>
            <p style={feedStyles.subtitle}>
              a curated showcase of interface explorations, brand identities, and mobile systems built with intention.
            </p>
          </div>

          {/* Pure Visual Feed Grid Layout (Bogdan Style — Pure Media, No Text) */}
          <div style={feedStyles.masonryGrid}>
            {feedItems.map((item) => (
              <motion.div
                key={item.id}
                style={feedStyles.feedCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
                className="feed-card-item"
              >
                <img
                  src={item.image}
                  alt={item.title || 'Design Showcase'}
                  style={feedStyles.cardMedia}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <ExhibitionLightbox 
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Lightbox Exhibition Modal Component
function ExhibitionLightbox({ artwork, onClose }) {
  return (
    <motion.div
      style={lightboxStyles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        style={lightboxStyles.modalCard}
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button style={lightboxStyles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>

        <div style={lightboxStyles.modalGrid}>
          <div style={lightboxStyles.artworkCol}>
            <div style={lightboxStyles.frameModal}>
              <img 
                src={artwork.image} 
                alt={artwork.title}
                style={{ width: '100%', maxHeight: '480px', objectFit: 'contain', borderRadius: '12px' }}
              />
            </div>
            <div style={lightboxStyles.mediumBadgeRow}>
              <span>{artwork.category}</span>
              <span>✦ {artwork.year}</span>
            </div>
          </div>

          <div style={lightboxStyles.detailsCol}>
            <div style={lightboxStyles.exhibitHeader}>
              <span style={lightboxStyles.exhibitTag}>{artwork.exhibitNo}</span>
            </div>

            <h2 style={lightboxStyles.modalTitle}>{artwork.title}</h2>
            <p style={lightboxStyles.modalSubtitle}>{artwork.subtitle}</p>

            <div style={lightboxStyles.sectionDivider} />

            <div style={lightboxStyles.curatorBox}>
              <div style={lightboxStyles.curatorTitleRow}>
                <Info size={16} style={{ color: '#111111' }} />
                <span>DESIGN INTENTION & CONCEPT</span>
              </div>
              <p style={lightboxStyles.curatorText}>{artwork.curatorNote}</p>
            </div>

            <div style={lightboxStyles.metricsBox}>
              <span style={lightboxStyles.metricsLabel}>SHIPPED IMPACT METRICS</span>
              <p style={lightboxStyles.metricsValue}>{artwork.metrics}</p>
            </div>

            <div style={lightboxStyles.tagRow}>
              {artwork.tags.map(t => (
                <span key={t} style={lightboxStyles.tagPill}>#{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Masonry Feed Styles (Bogdan Goncharenko Aesthetic)
const feedStyles = {
  section: {
    padding: '100px 0',
    background: '#FFFFFF',
    borderTop: '1px solid #EAEAEA',
  },
  headerBlock: {
    marginBottom: '48px',
  },
  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
  eyebrowTag: {
    fontSize: '0.78rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#111111',
    background: '#F4F4F6',
    padding: '5px 14px',
    borderRadius: '9999px',
    border: '1px solid #EAEAEA',
  },
  title: {
    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    color: '#0e0e0f',
    margin: 0,
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#787774',
    lineHeight: '1.6',
    marginTop: '6px',
    maxWidth: '700px',
  },
  masonryGrid: {
    columnCount: 3,
    columnGap: '24px',
    width: '100%',
  },
  feedCard: {
    position: 'relative',
    cursor: 'default',
    borderRadius: '20px',
    overflow: 'hidden',
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
    width: '100%',
    marginBottom: '24px',
    breakInside: 'avoid',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  cardMedia: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '20px',
  },
};

const lightboxStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(10px)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  modalCard: {
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '36px',
    maxWidth: '960px',
    width: '100%',
    position: 'relative',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: '#F4F4F6',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '32px',
  },
  artworkCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  frameModal: {
    background: '#F7F6F3',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumBadgeRow: {
    display: 'flex',
    gap: '12px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#5a5a5c',
  },
  detailsCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  exhibitHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  exhibitTag: {
    fontSize: '0.75rem',
    fontWeight: '700',
    background: '#F4F4F6',
    padding: '4px 12px',
    borderRadius: '9999px',
    color: '#111111',
  },
  modalTitle: {
    fontSize: '1.6rem',
    fontWeight: '600',
    color: '#0e0e0f',
    margin: 0,
  },
  modalSubtitle: {
    fontSize: '0.95rem',
    color: '#787774',
    margin: 0,
  },
  sectionDivider: {
    height: '1px',
    background: '#EAEAEA',
    margin: '8px 0',
  },
  curatorBox: {
    background: '#F9F9FB',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid #EAEAEA',
  },
  curatorTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#111111',
    letterSpacing: '0.05em',
    marginBottom: '6px',
  },
  curatorText: {
    fontSize: '0.88rem',
    color: '#5a5a5c',
    lineHeight: '1.5',
    margin: 0,
  },
  metricsBox: {
    padding: '12px 16px',
    background: '#F4F4F6',
    borderRadius: '12px',
  },
  metricsLabel: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#111111',
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '4px',
  },
  metricsValue: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#0e0e0f',
    margin: 0,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '8px',
  },
  tagPill: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#787774',
    background: '#F4F4F6',
    padding: '4px 10px',
    borderRadius: '9999px',
  },
};
