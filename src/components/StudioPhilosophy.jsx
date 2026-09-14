import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ShieldCheck } from 'lucide-react';

export default function StudioPhilosophy() {
  const pillars = [
    {
      icon: <Sparkles size={24} style={{ color: '#0E0E0F' }} />,
      title: 'Intentionality over Decoration',
      description: 'Every layout, interaction, and typographic choice must serve a clear purpose. I design product interfaces grounded in core user needs and business rationale.'
    },
    {
      icon: <Eye size={24} style={{ color: '#0E0E0F' }} />,
      title: 'AI-Enhanced Design Pipeline',
      description: 'I combine generative AI tools for rapid ideation and prototyping with human UX judgment and cognitive psychology to ship products with speed and precision.'
    },
    {
      icon: <ShieldCheck size={24} style={{ color: '#0E0E0F' }} />,
      title: 'Systems & Interaction Focus',
      description: 'Building robust, accessible design token architectures and dynamic micro-interactions that feel responsive, cohesive, and effortless to use.'
    }
  ];

  return (
    <section id="philosophy" style={styles.section}>
      <div className="grid-container">
        <div style={styles.headerBlock}>
          <span style={styles.tag}>Design Philosophy</span>
          <h2 style={styles.title}>Designed with intention, not decoration</h2>
          <p style={styles.subtitle}>
            Crafting scalable digital products, SaaS platforms, and design systems focused on clarity, performance, and user delight.
          </p>
        </div>

        <div style={styles.grid}>
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              style={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={styles.iconCircle}>{p.icon}</div>
              <h3 style={styles.cardTitle}>{p.title}</h3>
              <p style={styles.cardDesc}>{p.description}</p>
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
    background: '#F9F9FB',
    borderTop: '1px solid #EAEAEA',
  },
  headerBlock: {
    marginBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '750px',
  },
  tag: {
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#0E0E0F',
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
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
  subtitle: {
    fontSize: '1.05rem',
    color: '#5A5A5C',
    lineHeight: '1.6',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
    gap: '32px',
  },
  card: {
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '40px 36px',
    border: '1px solid #EAEAEA',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  iconCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '16px',
    background: '#F4F4F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '1.35rem',
    fontWeight: '600',
    color: '#0E0E0F',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: '#5A5A5C',
    lineHeight: '1.6',
    margin: 0,
  },
};
