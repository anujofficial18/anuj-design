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
style={styles.cardContainer}
onClick={handleCardClick}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
whileHover={{ y: -8 }}
>
{/* Visual Canvas with Custom Gradient Backdrop */}
<div 
style={{
...styles.visualCanvas,
background: project.gradient
}}
>
<div style={styles.companyMeta}>
<span style={styles.companyLogo}>{project.company}</span>
<span style={styles.companyYear}>{project.type} - {project.year}</span>
</div>

{/* CSS-Engineered Phone Mockup */}
<div style={styles.mockupWrapper}>
<div style={styles.phoneFrame}>
<div style={styles.phoneNotch}></div>
<div style={styles.phoneStatusBar}>
<span style={styles.statusTime}>10:00</span>
<div style={styles.statusIcons}>
<span style={styles.iconWifi}>📶</span>
<span style={styles.iconBattery}>🔋</span>
</div>
</div>

{/* Embedded Live Web App Screen Content */}
<div style={styles.phoneScreen}>
{renderPhoneContent(project.id)}
</div>
</div>
</div>
</div>

{/* Card Info Text */}
<div style={styles.infoWrapper}>
<div style={styles.titleRow}>
<h3 style={styles.projectTitle}>{project.title}</h3>
<div style={styles.arrowIcon}>
<ArrowUpRight size={18} />
</div>
</div>
<p style={styles.projectTags}>{project.category} • {project.type} • {project.year}</p>
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
cardContainer: {
display: 'flex',
flexDirection: 'column',
cursor: 'pointer',
width: '100%',
},
visualCanvas: {
height: '420px',
borderRadius: '24px',
position: 'relative',
overflow: 'hidden',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'flex-end',
border: '1px solid var(--border-light)',
boxShadow: '0 8px 24px rgba(0, 0, 0, 0.01)',
},
companyMeta: {
position: 'absolute',
top: '24px',
left: '24px',
right: '24px',
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
zIndex: 2,
},
companyLogo: {
fontWeight: '800',
fontSize: '1.6rem',
color: 'var(--text-primary)',
letterSpacing: '-0.03em',
textTransform: 'uppercase',
},
companyYear: {
fontSize: '0.85rem',
fontWeight: '600',
color: 'rgba(17, 16, 17, 0.6)',
fontFamily: 'var(--font-family-heading)',
},
mockupWrapper: {
width: '260px',
height: '320px',
position: 'relative',
bottom: '-30px',
display: 'flex',
justifyContent: 'center',
perspective: '1000px',
},
phoneFrame: {
width: '100%',
height: '420px', // Hangs off bottom
background: '#0e0e0e',
borderRadius: '36px 36px 0 0',
padding: '10px 10px 0 10px',
boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
border: '1px solid rgba(255, 255, 255, 0.1)',
position: 'relative',
display: 'flex',
flexDirection: 'column',
},
phoneNotch: {
position: 'absolute',
top: '12px',
left: '50%',
transform: 'translateX(-50%)',
width: '80px',
height: '18px',
background: '#000',
borderRadius: '10px',
zIndex: 10,
},
phoneStatusBar: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
padding: '4px 16px 8px 16px',
zIndex: 9,
color: '#000',
},
statusTime: {
fontSize: '0.75rem',
fontWeight: '600',
},
statusIcons: {
display: 'flex',
gap: '4px',
fontSize: '0.75rem',
},
iconWifi: {},
iconBattery: {},
phoneScreen: {
flex: 1,
background: '#fff',
borderRadius: '26px 26px 0 0',
overflow: 'hidden',
position: 'relative',
border: '1px solid #222',
},
infoWrapper: {
padding: '20px 4px 10px 4px',
display: 'flex',
flexDirection: 'column',
gap: '6px',
},
titleRow: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
},
projectTitle: {
fontSize: '1.25rem',
fontWeight: '600',
fontFamily: 'var(--font-family-heading)',
},
arrowIcon: {
opacity: 0.3,
transition: 'opacity 0.3s ease, transform 0.3s ease',
display: 'flex',
alignItems: 'center',
},
projectTags: {
fontSize: '0.85rem',
color: 'var(--text-secondary)',
}
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