import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clipboard, RefreshCw, Trash2, Eye } from 'lucide-react';

export default function Playground() {
const location = useLocation();

// Scroll to selected widget if anchor hash exists
useEffect(() => {
if (location.hash) {
const el = document.getElementById(location.hash.substring(1));
if (el) el.scrollIntoView({ behavior: 'smooth' });
} else {
window.scrollTo(0, 0);
}
}, [location]);

// Widget 1 State: Contrast Checker
const [fgColor, setFgColor] = useState('#111011');
const [bgColor, setBgColor] = useState('#ffd4a5');
const [contrastRatio, setContrastRatio] = useState(1);
const [wcagResult, setWcagResult] = useState({ normalAA: false, normalAAA: false, largeAA: false, largeAAA: false });

// Widget 2 State: HSL Palette Generator
const [baseHue, setBaseHue] = useState(270);
const [baseSat, setBaseSat] = useState(40);
const [baseLight, setBaseLight] = useState(60);
const [shades, setShades] = useState([]);
const [copyStatus, setCopyStatus] = useState(null);

// Widget 3 State: Pixel Art Sketchpad
const [grid, setGrid] = useState(Array(144).fill('#ffffff'));
const [activeColor, setActiveColor] = useState('#987da5');
const sketchPalette = ['#987da5', '#6f9954', '#ff680a', '#111011', '#ffffff'];

// Calculate Color Contrast in real-time using relative luminance
useEffect(() => {
const parseHex = (hex) => {
let c = hex.substring(1);
if (c.length === 3) c = c.split('').map(x => x + x).join('');
const r = parseInt(c.substring(0, 2), 16) / 255;
const g = parseInt(c.substring(2, 4), 16) / 255;
const b = parseInt(c.substring(4, 6), 16) / 255;
return [r, g, b].map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
};

const getLuminance = (rgb) => 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];

try {
const lum1 = getLuminance(parseHex(fgColor));
const lum2 = getLuminance(parseHex(bgColor));
const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
const roundedRatio = Math.round(ratio * 100) / 100;
setContrastRatio(roundedRatio);

setWcagResult({
normalAA: roundedRatio >= 4.5,
normalAAA: roundedRatio >= 7.0,
largeAA: roundedRatio >= 3.0,
largeAAA: roundedRatio >= 4.5
});
} catch (e) {
// Catch invalid hexes
}
}, [fgColor, bgColor]);

// Generate HSL shades in real-time
useEffect(() => {
const generateShades = () => {
const generated = [];
for (let i = 1; i <= 9; i++) {
const lightVal = Math.min(Math.max(i * 10, 5), 95);
const hex = hslToHex(baseHue, baseSat, lightVal);
generated.push({ step: i * 100, hex, lightVal });
}
setShades(generated);
};
generateShades();
}, [baseHue, baseSat, baseLight]);

// Helper: HSL to hex converter
function hslToHex(h, s, l) {
s /= 100;
l /= 100;
const k = n => (n + h / 30) % 12;
const a = s * Math.min(l, 1 - l);
const f = n => {
const x = k(n);
const val = l - a * Math.max(-1, Math.min(x - 3, 9 - x, 1));
return Math.round(255 * val).toString(16).padStart(2, '0');
};
return `#${f(0)}${f(8)}${f(4)}`;
}

const copyToClipboard = (hex) => {
navigator.clipboard.writeText(hex);
setCopyStatus(hex);
setTimeout(() => setCopyStatus(null), 1500);
};

const handlePixelClick = (index) => {
const nextGrid = [...grid];
nextGrid[index] = activeColor;
setGrid(nextGrid);
};

const clearSketchpad = () => {
setGrid(Array(144).fill('#ffffff'));
};

return (
<div style={styles.playgroundContainer}>
{/* Title */}
<div style={styles.header}>
<div className="grid-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
<span style={styles.sectionTag}>✦ Playground</span>
<h1 style={styles.title}>Minis & <span className="serif-italic">Widgets</span></h1>
<p style={styles.subtitle}>
A catalog of micro-tools designed to demonstrate state machinery, live canvas, and real-time computation in React.
</p>
</div>
</div>

<div className="grid-container" style={styles.widgetsGrid}>

{/* Widget 1: Contrast Checker */}
<section id="contrast" style={styles.widgetCard}>
<div style={styles.widgetHeader}>
<div>
<h3 style={styles.widgetTitle}>01 / WCAG Contrast Checker</h3>
<p style={styles.widgetDesc}>Validates background/foreground color ratios in real-time.</p>
</div>
</div>

<div style={styles.contrastLayout}>
{/* Input Controls */}
<div style={styles.controlPanel}>
<div style={styles.inputGroup}>
<label style={styles.inputLabel}>Foreground (Text)</label>
<div style={styles.pickerWrapper}>
<input 
type="color" 
value={fgColor} 
onChange={(e) => setFgColor(e.target.value)} 
style={styles.colorPicker}
/>
<input 
type="text" 
value={fgColor} 
onChange={(e) => setFgColor(e.target.value)} 
style={styles.textInput}
/>
</div>
</div>

<div style={styles.inputGroup}>
<label style={styles.inputLabel}>Background</label>
<div style={styles.pickerWrapper}>
<input 
type="color" 
value={bgColor} 
onChange={(e) => setBgColor(e.target.value)} 
style={styles.colorPicker}
/>
<input 
type="text" 
value={bgColor} 
onChange={(e) => setBgColor(e.target.value)} 
style={styles.textInput}
/>
</div>
</div>

<div style={styles.ratioCard}>
<span style={styles.ratioTitle}>Contrast Ratio</span>
<span style={{ 
...styles.ratioValue, 
color: contrastRatio >= 4.5 ? 'var(--accent-green)' : 'var(--accent-orange)' 
}}>
{contrastRatio} : 1
</span>
</div>
</div>

{/* Results Grid & Live Preview */}
<div style={styles.resultsPanel}>
<div style={{ ...styles.previewBox, background: bgColor, color: fgColor }}>
<span style={styles.previewHeading}>Preview</span>
<p style={styles.previewText}>This is a dynamic text sample using {fgColor} on a {bgColor} backdrop.</p>
</div>

<div style={styles.wcagResultsList}>
<div style={styles.wcagRow}>
<span>Normal Text (AA - 4.5:1)</span>
<span style={wcagResult.normalAA ? styles.passBadge : styles.failBadge}>
{wcagResult.normalAA ? 'PASS' : 'FAIL'}
</span>
</div>
<div style={styles.wcagRow}>
<span>Normal Text (AAA - 7.0:1)</span>
<span style={wcagResult.normalAAA ? styles.passBadge : styles.failBadge}>
{wcagResult.normalAAA ? 'PASS' : 'FAIL'}
</span>
</div>
<div style={styles.wcagRow}>
<span>Large Text (AA - 3.0:1)</span>
<span style={wcagResult.largeAA ? styles.passBadge : styles.failBadge}>
{wcagResult.largeAA ? 'PASS' : 'FAIL'}
</span>
</div>
<div style={styles.wcagRow}>
<span>Large Text (AAA - 4.5:1)</span>
<span style={wcagResult.largeAAA ? styles.passBadge : styles.failBadge}>
{wcagResult.largeAAA ? 'PASS' : 'FAIL'}
</span>
</div>
</div>
</div>
</div>
</section>

{/* Widget 2: Palette Generator */}
<section id="palette" style={styles.widgetCard}>
<div style={styles.widgetHeader}>
<div>
<h3 style={styles.widgetTitle}>02 / HSL Swatch Palette Generator</h3>
<p style={styles.widgetDesc}>Formulates harmonious CSS shades using HSL color dynamics.</p>
</div>
<button 
onClick={() => { setBaseHue(Math.floor(Math.random() * 360)); }}
style={styles.actionBtn}
>
<RefreshCw size={14} /> Randomize
</button>
</div>

<div style={styles.paletteLayout}>
{/* Range Sliders */}
<div style={styles.sliderPanel}>
<div style={styles.rangeGroup}>
<div style={styles.sliderLabelRow}>
<span>Hue ({baseHue}°)</span>
</div>
<input 
type="range" 
min="0" 
max="360" 
value={baseHue} 
onChange={(e) => setBaseHue(Number(e.target.value))} 
className="custom-range"
style={styles.rangeSlider}
/>
</div>

<div style={styles.rangeGroup}>
<div style={styles.sliderLabelRow}>
<span>Saturation ({baseSat}%)</span>
</div>
<input 
type="range" 
min="0" 
max="100" 
value={baseSat} 
onChange={(e) => setBaseSat(Number(e.target.value))} 
style={styles.rangeSlider}
/>
</div>

<div style={styles.rangeGroup}>
<div style={styles.sliderLabelRow}>
<span>Base Lightness ({baseLight}%)</span>
</div>
<input 
type="range" 
min="0" 
max="100" 
value={baseLight} 
onChange={(e) => setBaseLight(Number(e.target.value))} 
style={styles.rangeSlider}
/>
</div>
</div>

{/* Render Palette Swatches */}
<div style={styles.swatchesPanel}>
<div style={styles.swatchesRow}>
{shades.map((shade, i) => (
<div 
key={i} 
onClick={() => copyToClipboard(shade.hex)}
style={{ ...styles.swatchCard, background: shade.hex }}
>
<span style={styles.swatchStep}>{shade.step}</span>
<span style={styles.swatchHex}>
{copyStatus === shade.hex ? <Check size={12} /> : shade.hex}
</span>
</div>
))}
</div>
</div>
</div>
</section>

{/* Widget 3: Pixel Art Sketchpad */}
<section id="sketchpad" style={styles.widgetCard}>
<div style={styles.widgetHeader}>
<div>
<h3 style={styles.widgetTitle}>03 / Pixel Art Sketchpad</h3>
<p style={styles.widgetDesc}>An interactive 12x12 grid canvas representing cell triggers.</p>
</div>
<button onClick={clearSketchpad} style={styles.actionBtn}>
<Trash2 size={14} /> Clear Canvas
</button>
</div>

<div style={styles.sketchpadLayout}>
{/* Color Palette Selector */}
<div style={styles.sketchControls}>
<span style={styles.controlPanelHeading}>Pick Brush Color</span>
<div style={styles.colorPalette}>
{sketchPalette.map((col, idx) => (
<button
key={idx}
onClick={() => setActiveColor(col)}
style={{
...styles.paletteBtn,
background: col,
border: activeColor === col ? '3px solid var(--text-primary)' : '1px solid var(--border-light)'
}}
/>
))}
</div>
<div style={styles.brushPreview}>
<span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Brush:</span>
<div style={{ ...styles.brushBadge, background: activeColor }}></div>
</div>
</div>

{/* Pixel Grid Canvas */}
<div style={styles.gridCanvasWrapper}>
<div style={styles.pixelGrid}>
{grid.map((color, index) => (
<div
key={index}
onClick={() => handlePixelClick(index)}
onMouseEnter={(e) => {
if (e.buttons === 1) handlePixelClick(index); // Draw on drag click
}}
style={{ ...styles.pixelCell, backgroundColor: color }}
/>
))}
</div>
</div>
</div>
</section>

</div>
</div>
);
}

const styles = {
playgroundContainer: {
paddingBottom: '120px',
background: 'var(--bg-primary)',
minHeight: '100vh',
},
header: {
paddingTop: '160px',
paddingBottom: '60px',
borderBottom: '1px solid var(--border-light)',
marginBottom: '60px',
},
sectionTag: {
fontSize: '0.85rem',
fontWeight: '700',
textTransform: 'uppercase',
color: 'var(--accent-purple)',
letterSpacing: '0.05em',
marginBottom: '12px',
display: 'block',
},
title: {
fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
fontWeight: '400',
fontFamily: "'TASA Orbiter', var(--font-family-heading)",
letterSpacing: '-0.01em',
marginBottom: '16px',
},
subtitle: {
fontSize: '1.15rem',
color: 'var(--text-secondary)',
maxWidth: '750px',
lineHeight: '1.5',
},
widgetsGrid: {
display: 'flex',
flexDirection: 'column',
gap: '60px',
},
widgetCard: {
background: 'var(--card-white)',
border: '1px solid var(--border-light)',
borderRadius: 0,
padding: '40px',
boxShadow: '0 8px 32px rgba(0,0,0,0.02)',
},
widgetHeader: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'flex-start',
borderBottom: '1px solid var(--border-light)',
paddingBottom: '24px',
marginBottom: '30px',
},
widgetTitle: {
fontSize: '1.4rem',
fontWeight: '400',
fontFamily: "'TASA Orbiter', var(--font-family-heading)",
letterSpacing: '-0.01em',
},
widgetDesc: {
fontSize: '0.9rem',
color: 'var(--text-secondary)',
marginTop: '4px',
},
actionBtn: {
display: 'inline-flex',
alignItems: 'center',
gap: '6px',
background: 'var(--bg-primary)',
border: '1px solid var(--border-light)',
padding: '8px 16px',
borderRadius: '100px',
fontSize: '0.8rem',
fontWeight: '600',
cursor: 'pointer',
color: 'var(--text-primary)',
},
contrastLayout: {
display: 'grid',
gridTemplateColumns: '0.9fr 1.1fr',
gap: '40px',
},
controlPanel: {
display: 'flex',
flexDirection: 'column',
gap: '24px',
},
inputGroup: {
display: 'flex',
flexDirection: 'column',
gap: '8px',
},
inputLabel: {
fontSize: '0.8rem',
fontWeight: '700',
color: 'var(--text-secondary)',
textTransform: 'uppercase',
},
pickerWrapper: {
display: 'flex',
gap: '12px',
alignItems: 'center',
},
colorPicker: {
border: 'none',
width: '44px',
height: '44px',
borderRadius: 0,
cursor: 'pointer',
outline: 'none',
background: 'none',
},
textInput: {
flex: 1,
padding: '10px 16px',
borderRadius: 0,
border: '1px solid var(--border-light)',
fontSize: '0.95rem',
fontFamily: 'monospace',
outline: 'none',
},
ratioCard: {
background: 'var(--bg-primary)',
padding: '20px',
borderRadius: 0,
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
gap: '4px',
marginTop: '10px',
},
ratioTitle: {
fontSize: '0.75rem',
fontWeight: '700',
color: 'var(--text-tertiary)',
textTransform: 'uppercase',
},
ratioValue: {
fontSize: '2.2rem',
fontWeight: '800',
fontFamily: 'var(--font-family-heading)',
},
resultsPanel: {
display: 'flex',
flexDirection: 'column',
gap: '20px',
},
previewBox: {
padding: '24px',
borderRadius: 0,
minHeight: '140px',
display: 'flex',
flexDirection: 'column',
gap: '8px',
border: '1px solid var(--border-light)',
},
previewHeading: {
fontSize: '0.75rem',
fontWeight: '700',
textTransform: 'uppercase',
opacity: 0.6,
},
previewText: {
fontSize: '1.1rem',
fontWeight: '500',
},
wcagResultsList: {
display: 'flex',
flexDirection: 'column',
gap: '12px',
},
wcagRow: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
fontSize: '0.9rem',
color: 'var(--text-secondary)',
borderBottom: '1px solid var(--bg-primary)',
paddingBottom: '8px',
},
passBadge: {
background: 'var(--accent-green-light)',
color: 'var(--accent-green)',
fontWeight: '700',
fontSize: '0.75rem',
padding: '4px 10px',
borderRadius: '100px',
},
failBadge: {
background: 'var(--accent-orange-light)',
color: 'var(--accent-orange)',
fontWeight: '700',
fontSize: '0.75rem',
padding: '4px 10px',
borderRadius: '100px',
},
paletteLayout: {
display: 'flex',
flexDirection: 'column',
gap: '30px',
},
sliderPanel: {
display: 'grid',
gridTemplateColumns: 'repeat(3, 1fr)',
gap: '24px',
},
rangeGroup: {
display: 'flex',
flexDirection: 'column',
gap: '8px',
},
sliderLabelRow: {
display: 'flex',
justifyContent: 'space-between',
fontSize: '0.85rem',
fontWeight: '600',
color: 'var(--text-secondary)',
},
rangeSlider: {
width: '100%',
accentColor: 'var(--accent-purple)',
cursor: 'pointer',
},
swatchesPanel: {
width: '100%',
},
swatchesRow: {
display: 'grid',
gridTemplateColumns: 'repeat(9, 1fr)',
gap: '10px',
width: '100%',
},
swatchCard: {
height: '110px',
borderRadius: 0,
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-between',
padding: '12px',
cursor: 'pointer',
color: 'rgba(255,255,255,0.85)',
boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
transition: 'var(--transition-smooth)',
border: '1px solid rgba(0, 0, 0, 0.04)',
'&:hover': {
transform: 'scale(1.04)',
boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
}
},
swatchStep: {
fontSize: '0.75rem',
fontWeight: '700',
textShadow: '0 1px 2px rgba(0,0,0,0.15)',
},
swatchHex: {
fontSize: '0.65rem',
fontFamily: 'monospace',
textShadow: '0 1px 2px rgba(0,0,0,0.15)',
display: 'flex',
alignItems: 'center',
gap: '2px',
},
sketchpadLayout: {
display: 'grid',
gridTemplateColumns: '0.8fr 1.2fr',
gap: '40px',
},
sketchControls: {
display: 'flex',
flexDirection: 'column',
gap: '20px',
},
controlPanelHeading: {
fontSize: '0.8rem',
fontWeight: '700',
color: 'var(--text-secondary)',
textTransform: 'uppercase',
},
colorPalette: {
display: 'flex',
gap: '12px',
},
paletteBtn: {
width: '40px',
height: '40px',
borderRadius: 0,
cursor: 'pointer',
outline: 'none',
transition: 'var(--transition-smooth)',
},
brushPreview: {
display: 'flex',
alignItems: 'center',
gap: '8px',
marginTop: '10px',
},
brushBadge: {
width: '20px',
height: '20px',
borderRadius: 0,
border: '1px solid var(--border-light)',
},
gridCanvasWrapper: {
display: 'flex',
justifyContent: 'center',
},
pixelGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(12, 1fr)',
gap: '1px',
background: '#e0e0e0',
padding: '2px',
borderRadius: 0,
width: '316px',
height: '316px',
boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
},
pixelCell: {
width: '25px',
height: '25px',
background: '#fff',
cursor: 'crosshair',
transition: 'background-color 0.1s ease',
}
};