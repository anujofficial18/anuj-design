import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function StudioServices() {
  const services = [
    {
      number: '01',
      title: 'Cinematic Web Design & Engineering',
      industry: 'Real Estate & Luxury Brands',
      description: 'Immersive, full-bleed web experiences designed with filmic direction and micro-animations that turn visitors into high-value clients.'
    },
    {
      number: '02',
      title: 'AI-First Product & Application UX',
      industry: 'Fintech & SaaS Platforms',
      description: 'High-density analytics workstations, complex entitlement managers, and automated financial workflows built with speed and precision.'
    },
    {
      number: '03',
      title: 'Monochrome Luxury Brand Identity',
      industry: 'D2C & Boutique Studios',
      description: 'Reasoned visual identity systems, typographic hierarchy, and bespoke art direction that give your brand instant authority.'
    },
    {
      number: '04',
      title: 'Design Systems & Component Libraries',
      industry: 'Enterprise Scale Apps',
      description: 'Scalable UI token architectures, component matrices, and governance guidelines engineered for seamless multi-platform deployment.'
    }
  ];

  return (
    <section id="services" style={styles.section}>
      <div className="grid-container">
        <div style={styles.headerBlock}>
          <span style={styles.tag}>Capabilities & Focus</span>
          <h2 style={styles.title}>What I design & build</h2>
        </div>

        <div style={styles.list}>
          {services.map((service, idx) => (
            <motion.div
              key={service.number}
              style={styles.row}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={styles.rowLeft}>
                <span style={styles.number}>{service.number}</span>
                <div style={styles.titleGroup}>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <span style={styles.industryTag}>{service.industry}</span>
                </div>
              </div>

              <div style={styles.rowRight}>
                <p style={styles.desc}>{service.description}</p>
                <div style={styles.arrowIcon}>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    background: '#FFFFFF',
    borderTop: '1px solid #EAEAEA',
  },
  headerBlock: {
    marginBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  tag: {
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#0E0E0F',
    background: '#F4F4F6',
    padding: '4px 14px',
    borderRadius: '9999px',
    width: 'fit-content',
  },
  title: {
    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    color: '#0E0E0F',
    margin: 0,
    lineHeight: '1.15',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderTop: '1px solid #EAEAEA',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '36px 0',
    borderBottom: '1px solid #EAEAEA',
    flexWrap: 'wrap',
    gap: '24px',
  },
  rowLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    flex: '1.2',
    minWidth: '300px',
  },
  number: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#929296',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  serviceTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#0E0E0F',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
  },
  industryTag: {
    fontSize: '0.82rem',
    fontWeight: '600',
    color: '#10B981',
  },
  rowRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    flex: '1',
    minWidth: '300px',
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: '0.95rem',
    color: '#5A5A5C',
    lineHeight: '1.6',
    margin: 0,
  },
  arrowIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#F4F4F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#0E0E0F',
  },
};
