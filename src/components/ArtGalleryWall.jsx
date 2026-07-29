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

  // Row 1 (Scrolls Left)
  const row1Items = [
    {
      id: 'row1-01',
      exhibitNo: 'EXHIBIT 01',
      title: 'Stock Holdings — Technical Analysis',
      subtitle: 'Real-time chart indicators & price action',
      category: 'Fintech Mobile UI',
      year: '2025',
      image: stockDetail1,
      curatorNote: 'Mobile interface layout for stock holdings detail. Clean typography hierarchy and color-coded gain/loss badges designed for active Indian retail investors.',
      metrics: '2.4M Daily Users | +38% Interaction Rate',
      tags: ['Fintech', 'Mobile UI', 'Trading']
    },
    {
      id: 'row1-02',
      exhibitNo: 'EXHIBIT 02',
      title: 'Analytics Dashboard',
      subtitle: 'Multi-device financial reporting dashboard',
      category: 'Web Interface UI',
      year: '2024',
      image: unsplashAssets.dataVis,
      curatorNote: 'Comprehensive web analytics interface with live data streams and interactive performance charts.',
      metrics: '45% Retention Lift | Tier-1 Enterprise',
      tags: ['Analytics', 'Web UI', 'Data Vis']
    },
    {
      id: 'row1-03',
      exhibitNo: 'EXHIBIT 03',
      title: 'Stock Holdings — Order Execution',
      subtitle: 'Instant buy/sell limit order controls',
      category: 'Fintech Mobile UI',
      year: '2025',
      image: stockDetail2,
      curatorNote: 'Instant order execution interface with progressive disclosure modal. Reduces tap distance to complete stock purchases under volatility.',
      metrics: '<1.2s Order Time | 99.4% Order Accuracy',
      tags: ['Fintech', 'Micro-flows', 'Order Book']
    },
    {
      id: 'row1-04',
      exhibitNo: 'EXHIBIT 04',
      title: 'POS Terminal & Register System',
      subtitle: 'Dual-screen merchant checkout flow',
      category: 'POS & Retail UI',
      year: '2024',
      image: unsplashAssets.posTablet,
      curatorNote: 'Hardware-integrated point of sale system designed for high-throughput retail checkout environments.',
      metrics: '3.2s Average Scan | 99.9% Uptime',
      tags: ['POS', 'Retail', 'Hardware UI']
    },
    {
      id: 'row1-05',
      exhibitNo: 'EXHIBIT 05',
      title: 'Stock Holdings — Analytics & P&L',
      subtitle: 'Performance charting & depth view',
      category: 'Fintech Mobile UI',
      year: '2025',
      image: stockDetail3,
      curatorNote: 'Detailed portfolio performance breakdowns with interactive candlestick graphs and historical return toggles.',
      metrics: '4.8★ User Rating | 2.1M Active Portfolios',
      tags: ['Fintech', 'Data Vis', 'Mobile']
    }
  ];

  // Row 2 (Scrolls Right)
  const row2Items = [
    {
      id: 'row2-01',
      exhibitNo: 'EXHIBIT 06',
      title: 'Delivery & Logistics Mobile App',
      subtitle: 'Real-time vehicle tracking & dispatch',
      category: 'Logistics Mobile UI',
      year: '2025',
      image: unsplashAssets.deliveryApp,
      curatorNote: 'On-demand delivery dispatch mobile app with live driver GPS tracking and automated route optimization.',
      metrics: '+28% Delivery Speed | 100K+ Daily Orders',
      tags: ['Logistics', 'Mobile App', 'GPS']
    },
    {
      id: 'row2-02',
      exhibitNo: 'EXHIBIT 07',
      title: 'Stock Holdings — Fundamentals Matrix',
      subtitle: 'PE ratio, market cap & dividend yield',
      category: 'Fintech Mobile UI',
      year: '2025',
      image: stockDetail4,
      curatorNote: 'Financial matrix displaying essential company fundamentals without cluttering the primary chart interface.',
      metrics: '100% WCAG Compliant | 3 Accent Themes',
      tags: ['Fintech', 'Information Architecture']
    },
    {
      id: 'row2-03',
      exhibitNo: 'EXHIBIT 08',
      title: 'Reservation & Order Summary UI',
      subtitle: 'Table reservation & guest management',
      category: 'Hospitality Web UI',
      year: '2024',
      image: unsplashAssets.reservationUI,
      curatorNote: 'Streamlined booking summary modal designed to increase conversion rates for premium dining reservations.',
      metrics: '+34% Booking Rate | 0.8s Load Time',
      tags: ['Hospitality', 'Web UX', 'Booking']
    },
    {
      id: 'row2-04',
      exhibitNo: 'EXHIBIT 09',
      title: 'Stock Holdings — Comprehensive UX',
      subtitle: 'End-to-end mobile trader experience',
      category: 'Fintech Mobile UI',
      year: '2025',
      image: stockDetail5,
      curatorNote: 'Full-bleed mobile screen architectural view combining technical metrics, news feeds, and instant trade execution.',
      metrics: '10M+ Total Trades | Tier-2 Optimized',
      tags: ['Fintech', 'Mobile UX', 'App Architecture']
    },
    {
      id: 'row2-05',
      exhibitNo: 'EXHIBIT 10',
      title: 'Dark Mode Trading Engine',
      subtitle: 'High-contrast candlestick & volume indicators',
      category: 'Trading Platform UI',
      year: '2026',
      image: unsplashAssets.darkTrading,
      curatorNote: 'Pro trader dark-themed interface engineered for low-eyestrain multi-monitor workstation setups.',
      metrics: '60fps Canvas Render | <15ms Latency',
      tags: ['Trading Engine', 'Dark Mode', 'Fintech']
    }
  ];

  return (
    <section 
      id="gallery" 
      style={tickerStyles.sectionWrapper}
    >
      {/* Top Museum Spotlight Glow Effect */}
      <div style={tickerStyles.spotlightBeam} />

      {/* Staggered Crimson Brick Texture Overlay */}
      <div style={tickerStyles.brickPatternOverlay} />

      <div className="grid-container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Centered Section Header */}
        <div style={tickerStyles.headerBlock}>
          <h2 style={tickerStyles.displayTitle}>
            WALL OF DESIGN
          </h2>
          <p style={tickerStyles.subtitleSerif}>
            FROM CONCEPT TO INTERFACE CRAFT
          </p>
        </div>

      </div>

      {/* Bi-Directional Ticker Container */}
      <div style={tickerStyles.viewportWrapper}>
        
        {/* Top Row: Scrolls Left */}
        <div style={tickerStyles.rowMargin}>
          <div className="gallery-scroll-left">
            {[...row1Items, ...row1Items].map((item, idx) => (
              <SquareCard 
                key={`${item.id}-${idx}`}
                item={item}
                onSelect={() => setSelectedArtwork(item)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Row: Scrolls Right */}
        <div>
          <div className="gallery-scroll-right">
            {[...row2Items, ...row2Items].map((item, idx) => (
              <SquareCard 
                key={`${item.id}-${idx}`}
                item={item}
                onSelect={() => setSelectedArtwork(item)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Museum Wooden Gallery Floorboard */}
      <div style={tickerStyles.woodenFloorboard}>
        <div style={tickerStyles.floorPlanksPattern} />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <ExhibitionLightbox 
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}

// Square Card Component
function SquareCard({ item, onSelect }) {
  return (
    <motion.div
      style={tickerStyles.squareCard}
      whileHover={{ 
        y: -5,
        boxShadow: '0 16px 32px rgba(0, 0, 0, 0.25)',
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      onClick={onSelect}
    >
      <div style={tickerStyles.cardImageFrame}>
        <img 
          src={item.image} 
          alt={item.title}
          style={tickerStyles.cardImage}
        />
      </div>
    </motion.div>
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
                <Info size={16} style={{ color: '#D4AF37' }} />
                <span>EXHIBITION INSIGHT</span>
              </div>
              <p style={lightboxStyles.curatorText}>{artwork.curatorNote}</p>
            </div>

            <div style={lightboxStyles.metricsBox}>
              <span style={lightboxStyles.metricsLabel}>IMPACT METRICS</span>
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

// Deep Crimson Museum Wall & Square Ticker Style System
const tickerStyles = {
  sectionWrapper: {
    padding: '130px 0 110px 0',
    backgroundColor: '#431219', // Deep rich museum crimson maroon wall
    backgroundImage: `
      radial-gradient(ellipse 800px 400px at 50% 12%, rgba(255, 225, 200, 0.22) 0%, rgba(255, 200, 180, 0.05) 60%, transparent 80%),
      linear-gradient(to bottom, #4f151c 0%, #360d13 100%)
    `,
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottom: '1px solid #1f070b'
  },
  spotlightBeam: {
    position: 'absolute',
    top: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '650px',
    height: '380px',
    background: 'radial-gradient(ellipse at center top, rgba(255, 245, 225, 0.35) 0%, rgba(255, 200, 180, 0.12) 45%, transparent 75%)',
    pointerEvents: 'none',
    zIndex: 1
  },
  brickPatternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1,
    opacity: 0.7,
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='76' height='36' viewBox='0 0 76 36'><rect width='76' height='36' fill='none'/><path d='M 0 0 L 76 0 M 0 18 L 76 18 M 0 36 L 76 36 M 38 0 L 38 18 M 0 18 L 0 36 M 76 18 L 76 36' stroke='rgba(0,0,0,0.35)' stroke-width='1.5' fill='none'/><path d='M 0 1 L 76 1 M 0 19 L 76 19 M 38 1 L 38 18 M 0 19 L 0 36' stroke='rgba(255,220,200,0.06)' stroke-width='1' fill='none'/></svg>")`,
    backgroundSize: '76px 36px'
  },
  headerBlock: {
    marginBottom: '55px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  displayTitle: {
    fontSize: 'clamp(2.6rem, 5vw, 3.8rem)',
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    textShadow: '0 4px 30px rgba(255, 240, 220, 0.45), 0 0 50px rgba(212, 175, 55, 0.3)'
  },
  subtitleSerif: {
    fontFamily: 'var(--font-family-serif, Georgia, serif)',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
    color: '#F3E5AB', // Warm cream accent
    marginTop: '8px',
    letterSpacing: '0.08em',
    textAlign: 'center'
  },
  viewportWrapper: {
    width: '100%',
    overflowX: 'hidden',
    position: 'relative',
    zIndex: 3
  },
  rowMargin: {
    marginBottom: '24px'
  },
  squareCard: {
    width: '320px',
    height: '320px',
    borderRadius: '24px',
    background: '#FFFFFF',
    padding: '0',
    position: 'relative',
    flexShrink: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden'
  },
  cardImageFrame: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FFFFFF'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    borderRadius: '24px'
  },
  arrowBadge: {
    position: 'absolute',
    bottom: '24px',
    right: '24px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(212, 175, 55, 0.4)',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  },
  woodenFloorboard: {
    position: 'relative',
    width: '100%',
    height: '40px',
    background: 'linear-gradient(to bottom, #2b170c 0%, #1c0e07 100%)',
    borderTop: '2px solid #54331d',
    boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.6)',
    zIndex: 2,
    marginTop: '45px'
  },
  floorPlanksPattern: {
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)',
    backgroundSize: '120px 100%'
  }
};

const lightboxStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(10, 3, 5, 0.88)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px'
  },
  modalCard: {
    position: 'relative',
    width: '100%',
    maxWidth: '880px',
    background: '#3A1016',
    borderRadius: '24px',
    border: '1px solid rgba(212, 175, 55, 0.4)',
    boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
    overflow: 'hidden'
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#1A0B0E',
    color: '#D4AF37',
    border: '1px solid #D4AF37',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10
  },
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '480px'
  },
  artworkCol: {
    background: '#1A080C',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  frameModal: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '2px',
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.5) 0%, rgba(153, 122, 42, 0.2) 100%)',
    borderRadius: '16px',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
    overflow: 'hidden'
  },
  mediumBadgeRow: {
    marginTop: '16px',
    display: 'flex',
    gap: '16px',
    fontSize: '0.75rem',
    color: '#D4AF37',
    fontFamily: 'monospace'
  },
  detailsCol: {
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  exhibitHeader: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginBottom: '12px'
  },
  exhibitTag: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: 'monospace',
    color: '#D4AF37',
    background: 'rgba(212, 175, 55, 0.15)',
    padding: '2px 8px',
    borderRadius: '4px',
    border: '1px solid rgba(212, 175, 55, 0.3)'
  },
  modalTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: '6px',
    lineHeight: '1.2'
  },
  modalSubtitle: {
    fontSize: '0.95rem',
    color: '#E5C0C4',
    marginBottom: '20px'
  },
  sectionDivider: {
    height: '1px',
    background: 'rgba(212, 175, 55, 0.2)',
    marginBottom: '20px'
  },
  curatorBox: {
    background: 'rgba(20, 5, 8, 0.6)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '8px',
    padding: '14px',
    marginBottom: '20px'
  },
  curatorTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#D4AF37',
    letterSpacing: '0.08em',
    marginBottom: '6px'
  },
  curatorText: {
    fontSize: '0.85rem',
    color: '#F3E5AB',
    lineHeight: '1.5'
  },
  metricsBox: {
    marginBottom: '20px'
  },
  metricsLabel: {
    fontSize: '0.68rem',
    fontWeight: '700',
    color: '#A07077',
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '4px'
  },
  metricsValue: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#4ADE80'
  },
  tagRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  },
  tagPill: {
    fontSize: '0.72rem',
    color: '#F8EAEB',
    background: 'rgba(255,255,255,0.08)',
    padding: '4px 10px',
    borderRadius: '100px',
    border: '1px solid rgba(255,255,255,0.1)'
  }
};
