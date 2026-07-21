import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function ServiceRow({ number, title, description, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.serviceRowContainer}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={styles.serviceHeader}
      >
        <div style={styles.leftCol}>
          <span style={styles.number}>{number}</span>
          <div style={styles.titleWrapper}>
            <h4 style={styles.title}>{title}</h4>
            <span style={styles.shortDesc}>{description}</span>
          </div>
        </div>
        <div style={styles.toggleIcon}>
          {isOpen ? (
            <Minus size={18} style={{ color: 'var(--accent-purple)' }} />
          ) : (
            <Plus size={18} style={{ color: 'var(--text-secondary)' }} />
          )}
        </div>
      </button>

      {/* Expandable details panel using Framer Motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={styles.detailsContainer}
          >
            <div style={styles.detailsContent}>
              <div style={styles.detailBlock}>
                <span style={styles.blockTitle}>Typical Deliverables</span>
                <p style={styles.blockText}>{details.deliverables}</p>
              </div>
              <div style={styles.detailBlock}>
                <span style={styles.blockTitle}>Core Tools & Method</span>
                <p style={styles.blockText}>{details.tools}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  serviceRowContainer: {
    borderBottom: '1px solid var(--border-light)',
    padding: '24px 0',
    width: '100%',
  },
  serviceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    padding: 0,
  },
  leftCol: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '32px',
  },
  number: {
    fontFamily: 'var(--font-family-heading)',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--accent-purple)',
    opacity: 0.8,
    marginTop: '4px',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    fontFamily: 'var(--font-family-heading)',
  },
  shortDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
  },
  toggleIcon: {
    padding: '6px',
    borderRadius: '50%',
    background: 'rgba(0, 0, 0, 0.02)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s ease',
  },
  detailsContainer: {
    overflow: 'hidden',
  },
  detailsContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    padding: '16px 0 8px 48px',
  },
  detailBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  blockTitle: {
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--text-tertiary)',
  },
  blockText: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  // Responsive layout logic is handled in global media queries
};
