import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <motion.div
      style={styles.fullWidthCardContainer}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="rayoti-fullwidth-card"
    >
      {/* 1. Large Top Full-Width Visual Banner Canvas */}
      <div 
        style={{
          ...styles.fullWidthCanvas,
          background: project.gradient
        }}
      >
        {/* Top Canvas Meta Badges */}
        <div style={styles.topCanvasMeta}>
          <span style={styles.companyBadgeTop}>{project.company}</span>
          {project.metric && (
            <span style={styles.metricPillBadge}>{project.metric} {project.metricLabel}</span>
          )}
        </div>

        {/* Centered Phone/UI Showcase Mockup */}
        <div style={styles.mockupWrapperFullWidth}>
          <div style={styles.phoneFrameFullWidth}>
            <div style={styles.phoneNotch}></div>
            <div style={styles.phoneStatusBar}>
              <span style={styles.statusTime}>10:00</span>
              <div style={styles.statusIcons}>
                <span style={styles.iconWifi}>📶</span>
                <span style={styles.iconBattery}>🔋</span>
              </div>
            </div>
            <div style={styles.phoneScreen}>
              {renderPhoneContent(project.id)}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Text Content Block below Canvas */}
      <div style={styles.fullWidthContentArea}>
        {/* Title Headline (Rayoti Kar Lowercased Serif/Orbiter Aesthetic) */}
        <h3 style={styles.fullWidthTitle}>
          {project.title}
        </h3>

        {/* Narrative Description */}
        {project.summary && (
          <p style={styles.fullWidthSummary}>{project.summary}</p>
        )}

        {/* Rayoti Kar Style Pill Badges Row */}
        <div style={styles.fullWidthTagRow}>
          {project.tags && project.tags.map((tag) => (
            <span key={tag} style={styles.fullWidthTagPill}>{tag}</span>
          ))}
        </div>

        {/* Bottom Link Action */}
        <div style={styles.fullWidthFooterRow}>
          <span style={styles.yearTagMuted}>{project.type} · {project.year}</span>
          <div style={styles.ctaLinkInline}>
            <span>explore case study</span>
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Function to render custom UI screen templates depending on the project
function renderPhoneContent(id) {
switch (id) {
case 'zet-journey':
return (
<div style={{ ...screenStyles.screenContainer, background: '#fff' }}>
<div style={screenStyles.appHeader}>
<span>✕</span>
<span style={screenStyles.appTitle}>Application Journey</span>
<span>❓</span>
</div>
<p style={screenStyles.subtext}>Complete application in 10 mins</p>
<div style={screenStyles.stepList}>
<div style={{ ...screenStyles.stepCard, borderLeft: '4px solid var(--accent-green)' }}>
<div style={screenStyles.stepBulletDone}>✓</div>
<div>
<h5 style={screenStyles.stepHeading}>Personal Details</h5>
<p style={screenStyles.stepDesc}>Add your basic information</p>
</div>
</div>
<div style={{ ...screenStyles.stepCard, borderLeft: '4px solid var(--accent-green)' }}>
<div style={screenStyles.stepBulletDone}>✓</div>
<div>
<h5 style={screenStyles.stepHeading}>Contact Details</h5>
<p style={screenStyles.stepDesc}>Add your residential address</p>
</div>
</div>
<div style={{ ...screenStyles.stepCard, borderLeft: '4px solid var(--accent-purple)' }}>
<div style={screenStyles.stepBulletActive}>💼</div>
<div>
<h5 style={screenStyles.stepHeading}>Employment Details</h5>
<p style={screenStyles.stepDesc}>Add work details for eligibility</p>
</div>
</div>
<div style={{ ...screenStyles.stepCard, opacity: 0.6 }}>
<div style={screenStyles.stepBulletLocked}>🔒</div>
<div>
<h5 style={screenStyles.stepHeading}>Aadhaar Verification</h5>
<p style={screenStyles.stepDesc}>Quickly confirm your identity</p>
</div>
</div>
</div>
</div>
);

case 'zet-credit':
return (
<div style={{ ...screenStyles.screenContainer, background: '#fcfbfa' }}>
<div style={screenStyles.badgePurple}>CREDIT BUILDER MEMBERSHIP</div>
<h4 style={screenStyles.creditMainHeading}>BUILD 700+ CREDIT SCORE IN 30 DAYS</h4>

<div style={screenStyles.gaugeWrapper}>
<div style={screenStyles.circularGauge}>
<div style={screenStyles.gaugeInner}>
<span style={screenStyles.gaugeScore}>735</span>
<span style={screenStyles.gaugeLabel}>Excellent</span>
</div>
</div>
</div>

<div style={screenStyles.statsGrid}>
<div style={screenStyles.statBox}>
<span style={screenStyles.statNum}>30 Days</span>
<span style={screenStyles.statLabel}>Duration</span>
</div>
<div style={screenStyles.statBox}>
<span style={screenStyles.statNum}>₹99</span>
<span style={screenStyles.statLabel}>One-time Fee</span>
</div>
<div style={screenStyles.statBox}>
<span style={screenStyles.statNum}>100%</span>
<span style={screenStyles.statLabel}>Success Rate</span>
</div>
</div>

<button style={screenStyles.ctaButton}>How We Build Your Score</button>
</div>
);

case 'moneyview-uxr':
return (
<div style={{ ...screenStyles.screenContainer, background: '#fff', padding: '16px' }}>
<div style={screenStyles.backBtn}>←</div>
<div style={screenStyles.emojiHeader}>🥰</div>
<h4 style={screenStyles.uxrTitle}>I am happy, I will recommend!</h4>

<div style={screenStyles.ratingBar}>
<span style={screenStyles.ratingVal}>9/10</span>
</div>

<div style={screenStyles.starRow}>
{'★★★★★★★★★☆'.split('').map((char, i) => (
<span key={i} style={{ color: char === '★' ? '#ff9900' : '#ccc', fontSize: '1.1rem' }}>{char}</span>
))}
</div>

<div style={screenStyles.uxrCard}>
<p style={screenStyles.uxrQuestion}>Awesome! What did you like about us?</p>
<div style={screenStyles.inputBox}>Easy approval and paperless docs</div>
</div>
<button style={{ ...screenStyles.ctaButton, background: 'var(--accent-green)' }}>Submit Feedback</button>
</div>
);

case 'moneyview-data':
return (
<div style={{ ...screenStyles.screenContainer, background: '#f5f7f6', padding: '16px' }}>
<div style={screenStyles.appHeaderClean}>
<span>←</span>
<span style={{ fontWeight: '600' }}>Personal Data Control</span>
</div>

<div style={screenStyles.alertGreen}>
<span style={{ fontSize: '1.2rem' }}>✓</span>
<div>
<h6 style={{ margin: 0, fontWeight: '600' }}>Unsubscription Successful</h6>
<p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8 }}>No further promotional contacts in 24h.</p>
</div>
</div>

<div style={screenStyles.settingsBlock}>
<p style={screenStyles.settingsSectionTitle}>COMMUNICATION PREFERENCES</p>

<div style={screenStyles.settingRow}>
<div>
<span style={screenStyles.settingLabel}>Promotional Calls</span>
<p style={screenStyles.settingDesc}>Offers on loans & credit cards</p>
</div>
<div style={screenStyles.toggleInactive}></div>
</div>

<div style={screenStyles.settingRow}>
<div>
<span style={screenStyles.settingLabel}>WhatsApp Alerts</span>
<p style={screenStyles.settingDesc}>Realtime application updates</p>
</div>
<div style={screenStyles.toggleActive}></div>
</div>

<div style={screenStyles.settingRow}>
<div>
<span style={screenStyles.settingLabel}>Third Party Sharing</span>
<p style={screenStyles.settingDesc}>Share with partners for pre-approvals</p>
</div>
<div style={screenStyles.toggleInactive}></div>
</div>
</div>
</div>
);

default:
return null;
}
}

const styles = {
  fullWidthCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    width: '100%',
  },
  fullWidthCanvas: {
    width: '100%',
    height: '460px',
    borderRadius: '24px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s ease',
  },
  topCanvasMeta: {
    position: 'absolute',
    top: '24px',
    left: '28px',
    right: '28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  companyBadgeTop: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#0e0e0f',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    padding: '6px 14px',
    borderRadius: '9999px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
  },
  metricPillBadge: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#0e0e0f',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    padding: '6px 14px',
    borderRadius: '9999px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
  },
  mockupWrapperFullWidth: {
    width: '320px',
    height: '380px',
    position: 'relative',
    bottom: '-30px',
    display: 'flex',
    justifyContent: 'center',
    perspective: '1000px',
  },
  phoneFrameFullWidth: {
    width: '100%',
    height: '520px',
    background: '#0e0e0e',
    borderRadius: '36px 36px 0 0',
    padding: '10px 10px 0 10px',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.18)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  phoneNotch: {
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '70px',
    height: '16px',
    background: '#000',
    borderRadius: '8px',
    zIndex: 10,
  },
  phoneStatusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 14px 6px 14px',
    zIndex: 9,
    color: '#000',
  },
  statusTime: {
    fontSize: '0.7rem',
    fontWeight: '600',
  },
  statusIcons: {
    display: 'flex',
    gap: '4px',
    fontSize: '0.7rem',
  },
  iconWifi: {},
  iconBattery: {},
  phoneScreen: {
    flex: 1,
    background: '#fff',
    borderRadius: '24px 24px 0 0',
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid #222',
  },
  fullWidthContentArea: {
    padding: '24px 4px 0 4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  fullWidthTitle: {
    fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
    fontWeight: '400',
    fontFamily: "'TASA Orbiter', var(--font-family-heading)",
    color: '#0e0e0f',
    lineHeight: '1.18',
    letterSpacing: '-0.02em',
    margin: 0,
    textTransform: 'lowercase',
  },
  fullWidthSummary: {
    fontSize: '1.05rem',
    color: '#5a5a5c',
    lineHeight: '1.6',
    fontWeight: '400',
    margin: 0,
    maxWidth: '900px',
  },
  fullWidthTagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '4px',
  },
  fullWidthTagPill: {
    fontSize: '0.78rem',
    fontWeight: '600',
    color: '#373737',
    background: '#F4F4F6',
    padding: '5px 14px',
    borderRadius: '9999px',
    border: '1px solid #EAEAEA',
  },
  fullWidthFooterRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '12px',
    borderTop: '1px solid #F0F0F0',
    marginTop: '4px',
  },
  yearTagMuted: {
    fontSize: '0.8rem',
    color: '#929296',
    fontWeight: '400',
  },
  ctaLinkInline: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#111111',
    textTransform: 'lowercase',
  },
  projectCategoryLabel: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#2F3437',
  },
  yearTagMuted: {
    fontSize: '0.75rem',
    color: '#929296',
    fontWeight: '400',
  },
};

// Internal screen CSS layouts
const screenStyles = {
screenContainer: {
width: '100%',
height: '100%',
padding: '12px',
display: 'flex',
flexDirection: 'column',
fontFamily: 'system-ui, -apple-system, sans-serif',
userSelect: 'none',
},
appHeader: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: '12px',
paddingBottom: '8px',
borderBottom: '1px solid #f0f0f0',
fontSize: '0.85rem',
fontWeight: '500',
color: '#333',
},
appHeaderClean: {
display: 'flex',
gap: '12px',
alignItems: 'center',
marginTop: '12px',
fontSize: '0.85rem',
color: '#333',
},
appTitle: {
fontWeight: '600',
},
subtext: {
fontSize: '0.75rem',
color: '#888',
margin: '8px 0',
textAlign: 'center',
},
stepList: {
display: 'flex',
flexDirection: 'column',
gap: '8px',
marginTop: '4px',
},
stepCard: {
background: '#fafaf9',
border: '1px solid #f0eeec',
borderRadius: '8px',
padding: '8px 12px',
display: 'flex',
alignItems: 'center',
gap: '12px',
},
stepBulletDone: {
width: '18px',
height: '18px',
borderRadius: '50%',
background: '#eef5eb',
color: 'var(--accent-green)',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
fontSize: '0.65rem',
fontWeight: 'bold',
},
stepBulletActive: {
width: '18px',
height: '18px',
fontSize: '0.75rem',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
},
stepBulletLocked: {
width: '18px',
height: '18px',
fontSize: '0.75rem',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
},
stepHeading: {
fontSize: '0.8rem',
fontWeight: '600',
color: '#111',
margin: 0,
},
stepDesc: {
fontSize: '0.65rem',
color: '#666',
margin: 0,
},
// Credit Builder styles
badgePurple: {
alignSelf: 'center',
background: '#ece7f0',
color: '#6d4c7d',
padding: '4px 10px',
borderRadius: '100px',
fontSize: '0.6rem',
fontWeight: '700',
marginTop: '16px',
},
creditMainHeading: {
textAlign: 'center',
fontSize: '0.85rem',
fontWeight: '800',
margin: '10px 0 12px 0',
lineHeight: '1.2',
color: '#111',
},
gaugeWrapper: {
display: 'flex',
justifyContent: 'center',
margin: '4px 0 16px 0',
},
circularGauge: {
width: '100px',
height: '100px',
borderRadius: '50%',
background: 'conic-gradient(var(--accent-green) 75%, #f0eeec 75%)',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
},
gaugeInner: {
width: '84px',
height: '84px',
borderRadius: '50%',
background: '#fff',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
},
gaugeScore: {
fontSize: '1.3rem',
fontWeight: '800',
color: '#111',
lineHeight: '1',
},
gaugeLabel: {
fontSize: '0.65rem',
color: 'var(--accent-green)',
fontWeight: '600',
marginTop: '2px',
},
statsGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(3, 1fr)',
gap: '6px',
marginBottom: '16px',
},
statBox: {
background: '#fff',
border: '1px solid #f0eeec',
borderRadius: '8px',
padding: '6px 4px',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
},
statNum: {
fontSize: '0.75rem',
fontWeight: '700',
color: '#111',
},
statLabel: {
fontSize: '0.55rem',
color: '#666',
marginTop: '2px',
},
ctaButton: {
width: '100%',
background: '#ff680a',
color: '#fff',
border: 'none',
padding: '10px',
borderRadius: '8px',
fontSize: '0.75rem',
fontWeight: '600',
cursor: 'pointer',
},
// UX Research styles
backBtn: {
fontSize: '1rem',
cursor: 'pointer',
color: '#333',
alignSelf: 'flex-start',
marginTop: '10px',
},
emojiHeader: {
fontSize: '2.2rem',
textAlign: 'center',
margin: '12px 0 4px 0',
},
uxrTitle: {
textAlign: 'center',
fontSize: '0.9rem',
fontWeight: '700',
margin: '0 0 10px 0',
},
ratingBar: {
background: '#fcf6ef',
borderRadius: '100px',
alignSelf: 'center',
padding: '4px 10px',
marginBottom: '8px',
},
ratingVal: {
color: '#d46b08',
fontSize: '0.65rem',
fontWeight: '700',
},
starRow: {
display: 'flex',
justifyContent: 'center',
gap: '2px',
marginBottom: '16px',
},
uxrCard: {
background: '#fcfcfa',
border: '1px solid #eee',
borderRadius: '8px',
padding: '8px 10px',
marginBottom: '14px',
},
uxrQuestion: {
fontSize: '0.65rem',
fontWeight: '600',
color: '#444',
marginBottom: '6px',
},
inputBox: {
border: '1px solid #ddd',
background: '#fff',
borderRadius: '4px',
padding: '6px',
fontSize: '0.65rem',
color: '#888',
textAlign: 'left',
},
// Personal Data control styles
alertGreen: {
background: '#eef5eb',
border: '1px solid #d5e6ce',
borderRadius: '8px',
padding: '8px 10px',
display: 'flex',
gap: '8px',
alignItems: 'center',
color: 'var(--accent-green)',
marginTop: '12px',
},
settingsBlock: {
marginTop: '16px',
display: 'flex',
flexDirection: 'column',
gap: '10px',
},
settingsSectionTitle: {
fontSize: '0.55rem',
fontWeight: '700',
color: '#888',
letterSpacing: '0.05em',
marginBottom: '2px',
},
settingRow: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
paddingBottom: '8px',
borderBottom: '1px solid #eee',
},
settingLabel: {
fontSize: '0.75rem',
fontWeight: '600',
color: '#111',
},
settingDesc: {
fontSize: '0.6rem',
color: '#666',
margin: 0,
},
toggleActive: {
width: '28px',
height: '16px',
borderRadius: '100px',
background: 'var(--accent-green)',
position: 'relative',
cursor: 'pointer',
boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
},
toggleInactive: {
width: '28px',
height: '16px',
borderRadius: '100px',
background: '#ccc',
position: 'relative',
cursor: 'pointer',
}
};