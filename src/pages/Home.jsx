import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import ProjectCard from '../components/ProjectCard';
import ServiceRow from '../components/ServiceRow';

export default function Home() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'zet-journey',
      company: 'ZET',
      title: 'ZET — Application Journey',
      category: 'Fintech product design',
      type: 'Full time',
      year: '2025',
      gradient: 'linear-gradient(135deg, #ffd4a5 0%, #ff680a 100%)',
    },
    {
      id: 'zet-credit',
      company: 'ZET',
      title: 'ZET — Credit Score Builder',
      category: 'Fintech product design',
      type: 'Full time',
      year: '2025',
      gradient: 'linear-gradient(135deg, #ece7f0 0%, #987da5 100%)',
    },
    {
      id: 'moneyview-uxr',
      company: 'moneyview',
      title: 'Moneyview — UX Research Study',
      category: 'Financial app design',
      type: 'Internship',
      year: '2024',
      gradient: 'linear-gradient(135deg, #eef5eb 0%, #b2d2a4 100%)',
    },
    {
      id: 'moneyview-data',
      company: 'moneyview',
      title: 'Moneyview — Personal Data Controls',
      category: 'Financial app design',
      type: 'Internship',
      year: '2024',
      gradient: 'linear-gradient(135deg, #e4f3f0 0%, #a2d6cc 100%)',
    }
  ];

  const services = [
    {
      number: '01',
      title: 'UX / UI Design',
      description: 'Interfaces that feel right from the very first tap.',
      details: {
        deliverables: 'User flows, wireframes, style guides, and pixel-perfect high-fidelity interface layouts.',
        tools: 'Figma, Figma Variables, components tokens, layout grids, usability principles.'
      }
    },
    {
      number: '02',
      title: 'Mobile App Design',
      description: 'End-to-end app design for iOS and Android, built to perform.',
      details: {
        deliverables: 'Native screen architectures, app store assets, and adaptive grid design exports.',
        tools: 'iOS Human Interface Guidelines, Android Material Design 3, micro-interactions.'
      }
    },
    {
      number: '03',
      title: 'Interaction & Prototyping',
      description: 'Prototypes that bring your product to life instantly.',
      details: {
        deliverables: 'Clickable interactive flows, dynamic micro-animations, and developer handoff videos.',
        tools: 'Principle, Protopie, Framer Motion, transition specs.'
      }
    },
    {
      number: '04',
      title: 'Design Systems',
      description: 'Component libraries that keep your product consistent.',
      details: {
        deliverables: 'Reusable button structures, input states, icon grids, and scalable typography scales.',
        tools: 'Atomic Design methodology, Figma library structures, token-driven designs.'
      }
    },
    {
      number: '05',
      title: 'User Research & Testing',
      description: 'Fast, clean sites built to convert visitors.',
      details: {
        deliverables: 'Moderated user tests, heatmaps audits, research insights logs, and feedback loops.',
        tools: 'Hotjar, Maze testing, user interview schedules, feedback categorization.'
      }
    },
    {
      number: '06',
      title: 'Creative Strategy',
      description: 'Positioning and messaging rooted in research.',
      details: {
        deliverables: 'Competitor auditing reports, target audience profiling, and content hierarchy structures.',
        tools: 'SWOT mapping, brand value props, content design architectures.'
      }
    }
  ];

  const minis = [
    {
      id: 'contrast',
      title: 'Contrast Checker',
      desc: 'Test color contrast against WCAG standards.',
      color: '#ece7f0'
    },
    {
      id: 'palette',
      title: 'HSL Palette Generator',
      desc: 'Generate gorgeous HSL colors instantly.',
      color: '#ffd4a5'
    },
    {
      id: 'sketchpad',
      title: 'Pixel Sketchpad',
      desc: 'A tiny canvas for drawings and designs.',
      color: '#eef5eb'
    }
  ];

  return (
    <div style={styles.homeContainer}>
      <div style={styles.heroAndTickerWrapper}>
        <Hero />
        <Ticker />
      </div>

      {/* Featured Projects Grid */}
      <section id="work" style={styles.sectionPadding}>
        <div className="grid-container">
          <motion.h2
            style={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            I help teams validate ideas through research & experimentation.
          </motion.h2>

          <div style={styles.projectsGrid}>
            {projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" style={{ ...styles.sectionPadding, borderTop: '1px dashed var(--border-light)' }}>
        <div className="grid-container" style={styles.aboutGrid}>
          {/* Left Column */}
          <div style={styles.aboutLeft}>
            <span style={styles.sectionTag}>✦ About me</span>
            <a
              href="mailto:anuj@example.com"
              style={styles.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              More about me ↗
            </a>
          </div>

          {/* Right Column */}
          <div style={styles.aboutRight}>
            <h3 style={styles.aboutHeading}>
              4+ years of fintech, AI, and products that actually make sense
            </h3>
            <p style={styles.aboutText}>
              Since 2021, I’ve designed across fintech, SaaS, fashion, and AI — first at Codiotic Technologies, now at Pixela UX Studio.
            </p>
            <p style={styles.aboutText}>
              My sharpest work lives at the intersection of financial complexity and everyday users: designing stock portfolios for Tier 2 Indian traders, building India’s first Voice-to-Visual trade recommendation UI, and creating AI chatbot experiences that actually build trust.
            </p>
            <p style={styles.aboutText}>
              I don’t just use AI to move faster — I design the AI products themselves.
            </p>

            {/* Stats Block */}
            <div style={styles.statsRow}>
              <div style={styles.statBox}>
                <span style={styles.statNumber}>4</span>
                <span style={styles.statLabel}>Years experience</span>
              </div>
              <div style={styles.statBox}>
                <span style={styles.statNumber}>91</span>
                <span style={styles.statLabel}>Projects completed</span>
              </div>
              <div style={styles.statBox}>
                <span style={styles.statNumber}>5+</span>
                <span style={styles.statLabel}>Industries designed for</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="contact" style={{ ...styles.sectionPadding, borderTop: '1px dashed var(--border-light)' }}>
        <div className="grid-container" style={styles.aboutGrid}>
          {/* Left Column */}
          <div style={styles.aboutLeft}>
            <span style={styles.sectionTag}>✦ Services</span>
            <p style={styles.sectionTagSub}>How I can help</p>
          </div>

          {/* Right Column */}
          <div style={styles.aboutRight}>
            <div style={styles.servicesList}>
              {services.map((service, index) => (
                <ServiceRow
                  key={index}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              ))}
            </div>

            {/* Start project CTA button bar */}
            <div style={styles.ctaContainer}>
              <a href="mailto:anuj@example.com" style={styles.ctaLeft}>
                Start your own project ↗
              </a>
              <div style={styles.ctaRight}>
                ✦ Available for Q3 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minis Section */}
      <section id="playground" style={{ ...styles.sectionPadding, borderTop: '1px dashed var(--border-light)', paddingBottom: '160px' }}>
        <div className="grid-container">
          <div style={styles.minisHeaderWrapper}>
            <span style={styles.sectionTag}>✦ Playground</span>
            <h3 style={styles.minisTitle}>Minis</h3>
          </div>

          <div style={styles.minisScrollRow}>
            {minis.map((mini) => (
              <motion.div
                key={mini.id}
                style={{ ...styles.miniCard, background: mini.color }}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => navigate(`/playground#${mini.id}`)}
              >
                <div>
                  <h4 style={styles.miniCardTitle}>{mini.title}</h4>
                  <p style={styles.miniCardDesc}>{mini.desc}</p>
                </div>
                <div style={styles.miniTryBtn}>
                  Try Widget ↗
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  homeContainer: {
    width: '100%',
    position: 'relative',
  },
  heroAndTickerWrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  sectionPadding: {
    padding: '100px 0',
  },
  sectionHeader: {
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    lineHeight: '1.2',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '60px',
    maxWidth: '850px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    width: '100%',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '0.6fr 1.4fr',
    gap: '60px',
  },
  aboutLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    minHeight: '160px',
  },
  sectionTag: {
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'var(--text-primary)',
    letterSpacing: '0.05em',
  },
  sectionTagSub: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginTop: '6px',
  },
  emailLink: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    borderBottom: '1px solid var(--border-light)',
    paddingBottom: '4px',
    width: 'max-content',
    '&:hover': {
      color: 'var(--text-primary)',
      borderColor: 'var(--text-primary)',
    }
  },
  aboutRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  aboutHeading: {
    fontSize: '2rem',
    lineHeight: '1.3',
    fontWeight: '600',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-family-heading)',
  },
  aboutText: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '40px',
    borderTop: '1px solid var(--border-light)',
    paddingTop: '30px',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    lineHeight: '1',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-family-heading)',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.3',
  },
  servicesList: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.03)',
    border: '1px solid var(--border-light)',
    padding: '24px 30px',
    borderRadius: '16px',
    marginTop: '40px',
    width: '100%',
  },
  ctaLeft: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateX(4px)',
    }
  },
  ctaRight: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  minisHeaderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '40px',
  },
  minisTitle: {
    fontSize: '2rem',
    fontWeight: '700',
  },
  minisScrollRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    width: '100%',
  },
  miniCard: {
    borderRadius: '20px',
    padding: '28px',
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    border: '1px solid var(--border-light)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.01)',
  },
  miniCardTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px',
    fontFamily: 'var(--font-family-heading)',
  },
  miniCardDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  miniTryBtn: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    alignSelf: 'flex-start',
  },
  // Media query states handled dynamically
};

