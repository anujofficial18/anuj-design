import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';

// Import Mobile Screen Assets from Wall of design
import stockDetail1 from '../assets/Wall of design/Stock detail on click of holdings-1.png';
import stockDetail2 from '../assets/Wall of design/Stock detail on click of holdings-2.png';
import stockDetail3 from '../assets/Wall of design/Stock detail on click of holdings-3.png';
import stockDetail4 from '../assets/Wall of design/Stock detail on click of holdings-4.png';
import stockDetail5 from '../assets/Wall of design/Stock detail on click of holdings-9.png';

// Curated Unsplash UI & Interface Assets
const unsplashAssets = {
  dataVis: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  posTablet: 'https://images.unsplash.com/photo-1556742049-0a670fc80790?auto=format&fit=crop&w=800&q=80',
  deliveryApp: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  reservationUI: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  darkTrading: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
};

export default function ArtGalleryWall() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // All Exhibit Items formatted into a Bogdan Goncharenko Masonry Feed
  const feedItems = [
    {
      id: 'ex-01',
      exhibitNo: 'EXHIBIT 01',
      title: 'Stock Holdings — Technical Analysis',
      subtitle: 'Real-time chart indicators & price action flow for retail traders',
      category: 'Fintech Mobile UI',
      year: '2025',
      colSpan: 2,
      image: stockDetail1,
      curatorNote: 'Mobile interface layout for stock holdings detail. Clean typography hierarchy and color-coded gain/loss badges designed for active Indian retail investors.',
      metrics: '2.4M Daily Users | +38% Interaction Rate',
      tags: ['Fintech', 'Mobile UI', 'Trading']
    },
    {
      id: 'ex-02',
      exhibitNo: 'EXHIBIT 02',
      title: 'Analytics Dashboard Matrix',
      subtitle: 'Multi-device financial reporting dashboard',
      category: 'Web Interface UI',
      year: '2024',
      colSpan: 1,
      image: unsplashAssets.dataVis,
      curatorNote: 'Comprehensive web analytics interface with live data streams and interactive performance charts.',
      metrics: '45% Retention Lift | Tier-1 Enterprise',
      tags: ['Analytics', 'Web UI', 'Data Vis']
    },
    {
      id: 'ex-03',
      exhibitNo: 'EXHIBIT 03',
      title: 'Stock Holdings — Instant Order Execution',
      subtitle: 'Buy/sell limit order controls under high volatility',
      category: 'Fintech Micro-Flows',
      year: '2025',
      colSpan: 1,
      image: stockDetail2,
      curatorNote: 'Instant order execution interface with progressive disclosure modal. Reduces tap distance to complete stock purchases under volatility.',
      metrics: '<1.2s Order Time | 99.4% Order Accuracy',
      tags: ['Fintech', 'Micro-flows', 'Order Book']
    },
    {
      id: 'ex-04',
      exhibitNo: 'EXHIBIT 04',
      title: 'POS Terminal & Merchant Checkout',
      subtitle: 'Hardware-integrated point of sale register flow',
      category: 'POS & Retail UI',
      year: '2024',
      colSpan: 2,
      image: unsplashAssets.posTablet,
      curatorNote: 'Hardware-integrated point of sale system designed for high-throughput retail checkout environments.',
      metrics: '3.2s Average Scan | 99.9% Uptime',
      tags: ['POS', 'Retail', 'Hardware UI']
    },
    {
      id: 'ex-05',
      exhibitNo: 'EXHIBIT 05',
      title: 'Stock Holdings — Performance & Candlesticks',
      subtitle: 'Performance charting & depth view',
      category: 'Fintech Mobile UI',
      year: '2025',
      colSpan: 1,
      image: stockDetail3,
      curatorNote: 'Detailed portfolio performance breakdowns with interactive candlestick graphs and historical return toggles.',
      metrics: '4.8★ User Rating | 2.1M Active Portfolios',
      tags: ['Fintech', 'Data Vis', 'Mobile']
    },
    {
      id: 'ex-06',
      exhibitNo: 'EXHIBIT 06',
      title: 'Delivery & Logistics Dispatch App',
      subtitle: 'Real-time vehicle tracking & dispatch controls',
      category: 'Logistics Mobile UX',
      year: '2025',
      colSpan: 1,
      image: unsplashAssets.deliveryApp,
      curatorNote: 'On-demand delivery dispatch mobile app with live driver GPS tracking and automated route optimization.',
      metrics: '+28% Delivery Speed | 100K+ Daily Orders',
      tags: ['Logistics', 'Mobile App', 'GPS']
    },
    {
      id: 'ex-07',
      exhibitNo: 'EXHIBIT 07',
      title: 'Stock Holdings — Fundamental Metrics Matrix',
      subtitle: 'PE ratio, market cap & dividend yield',
      category: 'Information Architecture',
      year: '2025',
      colSpan: 1,
      image: stockDetail4,
      curatorNote: 'Financial matrix displaying essential company fundamentals without cluttering the primary chart interface.',
      metrics: '100% WCAG Compliant | 3 Accent Themes',
      tags: ['Fintech', 'Information Architecture']
    },
    {
      id: 'ex-08',
      exhibitNo: 'EXHIBIT 08',
      title: 'Dark Mode Trading Workstation Engine',
      subtitle: 'High-contrast candlestick & volume indicators',
      category: 'Trading Platform UI',
      year: '2026',
      colSpan: 2,
      image: unsplashAssets.darkTrading,
      curatorNote: 'Pro trader dark-themed interface engineered for low-eyestrain multi-monitor workstation setups.',
      metrics: '60fps Canvas Render | <15ms Latency',
      tags: ['Trading Engine', 'Dark Mode', 'Fintech']
    },
    {
      id: 'ex-09',
      exhibitNo: 'EXHIBIT 09',
      title: 'Stock Holdings — Full Screen Mobile Experience',
      subtitle: 'End-to-end mobile trader experience',
      category: 'Fintech Mobile UI',
      year: '2025',
      colSpan: 1,
      image: stockDetail5,
      curatorNote: 'Full-bleed mobile screen architectural view combining technical metrics, news feeds, and instant trade execution.',
      metrics: '10M+ Total Trades | Tier-2 Optimized',
      tags: ['Fintech', 'Mobile UX', 'App Architecture']
    }
  ];

  return (
    <>
      {/* Design Feed Section (Bogdan Goncharenko Masonry Style) */}
      <section id="gallery" style={feedStyles.section}>
        <div className="grid-container">
          {/* Header Block */}
          <div style={feedStyles.headerBlock}>
            <div style={feedStyles.eyebrowRow}>
              <span style={feedStyles.eyebrowTag}>bisonworkz studios ✦ design feed</span>
            </div>
            <h2 style={feedStyles.title}>
              design feed
            </h2>
            <p style={feedStyles.subtitle}>
              a curated showcase of interface explorations, brand identities, and mobile systems built with intention.
            </p>
          </div>

          {/* Masonry Feed Grid Layout */}
          <div style={feedStyles.masonryGrid}>
            {feedItems.map((item) => (
              <motion.div
                key={item.id}
                style={{
                  ...feedStyles.feedCard,
                  gridColumn: item.colSpan ? `span ${item.colSpan}` : 'span 1',
                }}
                onClick={() => setSelectedArtwork(item)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="feed-card-item"
              >
                <div style={feedStyles.cardMediaContainer}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={feedStyles.cardMedia}
                  />
                  <div style={feedStyles.cardBadgeTop}>
                    <span>{item.category}</span>
                  </div>
                </div>

                <div style={feedStyles.cardContentArea}>
                  <div style={feedStyles.cardMetaRow}>
                    <span style={feedStyles.exhibitTag}>{item.exhibitNo}</span>
                    <span style={feedStyles.yearText}>{item.year}</span>
                  </div>
                  <h4 style={feedStyles.cardTitle}>{item.title}</h4>
                  <p style={feedStyles.cardSubtitle}>{item.subtitle}</p>
                </div>
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
    textTransform: 'lowercase',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#787774',
    lineHeight: '1.6',
    marginTop: '6px',
    maxWidth: '700px',
  },
  masonryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    width: '100%',
  },
  feedCard: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
  },
  cardMediaContainer: {
    position: 'relative',
    height: '340px',
    width: '100%',
    overflow: 'hidden',
    background: '#F7F6F3',
  },
  cardMedia: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  cardBadgeTop: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    padding: '4px 12px',
    borderRadius: '9999px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#0e0e0f',
  },
  cardContentArea: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  cardMetaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exhibitTag: {
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#111111',
    letterSpacing: '0.05em',
  },
  yearText: {
    fontSize: '0.78rem',
    color: '#929296',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#0e0e0f',
    margin: 0,
    lineHeight: '1.3',
  },
  cardSubtitle: {
    fontSize: '0.88rem',
    color: '#787774',
    lineHeight: '1.5',
    margin: 0,
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
