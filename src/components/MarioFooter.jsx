import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MarioFooter() {
  const [isJumping, setIsJumping] = useState(false);
  const [coinPops, setCoinPops] = useState([]);
  const [runFrame, setRunFrame] = useState(0);

  // Running leg animation frame toggle
  useEffect(() => {
    const frameInterval = setInterval(() => {
      setRunFrame((prev) => (prev + 1) % 4);
    }, 110);
    return () => clearInterval(frameInterval);
  }, []);

  // Automatic jump & interaction loop
  useEffect(() => {
    const jumpInterval = setInterval(() => {
      triggerJump();
    }, 3600);
    return () => clearInterval(jumpInterval);
  }, []);

  const triggerJump = () => {
    if (isJumping) return;
    setIsJumping(true);

    // Pop a pixel coin / star during jump arc
    setTimeout(() => {
      const newCoin = { id: Date.now(), x: Math.random() * 50 + 25 };
      setCoinPops((prev) => [...prev, newCoin]);
    }, 280);

    setTimeout(() => {
      setIsJumping(false);
    }, 650);
  };

  return (
    <footer 
      style={footerStyles.sectionWrapper}
      onClick={triggerJump}
      title="Click to jump!"
    >
      {/* Pixel Scene Canvas */}
      <div style={footerStyles.sceneCanvas}>
        
        {/* Flying Pixel Birds in Sky */}
        <div style={footerStyles.skyBirdsTrack}>
          <div className="gallery-scroll-left" style={{ animationDuration: '32s', gap: '320px' }}>
            <PixelBirdGroup />
            <PixelBirdGroup />
            <PixelBirdGroup />
          </div>
        </div>

        {/* Parallax Moving City Skyline (Background) */}
        <div style={footerStyles.skylineTrack}>
          <div className="gallery-scroll-left" style={{ animationDuration: '50s', gap: 0 }}>
            <CitySkylinePattern />
            <CitySkylinePattern />
          </div>
        </div>

        {/* Parallax Foreground Platforms & Obstacles Track */}
        <div style={footerStyles.foregroundTrack}>
          <div className="gallery-scroll-left" style={{ animationDuration: '20s', gap: '120px' }}>
            <PlatformScene1 />
            <PlatformScene2 />
            <PlatformScene1 />
            <PlatformScene2 />
          </div>
        </div>

        {/* Mario / Pixel Character Running on Ground */}
        <div style={footerStyles.characterPosition}>
          <motion.div
            animate={{
              y: isJumping ? -65 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 24
            }}
          >
            <PixelAvatar runFrame={runFrame} isJumping={isJumping} />
          </motion.div>
        </div>

        {/* Pop-up Pixel Coins on Block Hits */}
        <AnimatePresence>
          {coinPops.map((coin) => (
            <motion.div
              key={coin.id}
              style={{
                position: 'absolute',
                bottom: '125px',
                left: `${coin.x}%`,
                zIndex: 10,
                pointerEvents: 'none'
              }}
              initial={{ y: 0, opacity: 1, scale: 0.8 }}
              animate={{ y: -45, opacity: 0, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <PixelStarCoin />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Pixel Ground Surface Line */}
        <div style={footerStyles.groundLine}>
          <div className="gallery-scroll-left" style={{ animationDuration: '14s', gap: 0 }}>
            <GroundGrassPattern />
            <GroundGrassPattern />
          </div>
        </div>

      </div>

      {/* Dark Charcoal Bedrock Footer Bar */}
      <div style={footerStyles.darkBedrockBar}>
        <span style={footerStyles.copyrightText}>
          © 2026 all rights reserved by Anuj Joshi.
        </span>
      </div>
    </footer>
  );
}

// Refined Pixelated City Skyline Silhouette SVG
function CitySkylinePattern() {
  return (
    <svg width="1200" height="130" viewBox="0 0 1200 130" fill="none" style={{ display: 'block' }}>
      {/* Background Distant Tall Buildings */}
      <path d="
        M0,130 L0,50 L40,50 L40,130
        M45,130 L45,30 L90,30 L90,130
        M100,130 L100,65 L145,65 L145,130
        M155,130 L155,20 L210,20 L210,130
        M220,130 L220,70 L260,70 L260,130
        M270,130 L270,35 L330,35 L330,130
        M340,130 L340,55 L380,55 L380,130
        M390,130 L390,15 L450,15 L450,130
        M460,130 L460,45 L510,45 L510,130
        M520,130 L520,75 L570,75 L570,130
        M580,130 L580,25 L640,25 L640,130
        M650,130 L650,55 L700,55 L700,130
        M710,130 L710,35 L760,35 L760,130
        M770,130 L770,65 L810,65 L810,130
        M820,130 L820,20 L880,20 L880,130
        M890,130 L890,50 L940,50 L940,130
        M950,130 L950,38 L1000,38 L1000,130
        M1010,130 L1010,60 L1060,60 L1060,130
        M1070,130 L1070,15 L1140,15 L1140,130
        M1150,130 L1150,45 L1200,45 L1200,130
      " fill="rgba(0, 0, 0, 0.05)" />

      {/* Midground Shorter Buildings with Windows */}
      <path d="
        M20,130 L20,75 L65,75 L65,130
        M75,130 L75,60 L120,60 L120,130
        M130,130 L130,80 L175,80 L175,130
        M185,130 L185,55 L235,55 L235,130
        M245,130 L245,75 L290,75 L290,130
        M300,130 L300,65 L345,65 L345,130
        M355,130 L355,85 L400,85 L400,130
        M410,130 L410,55 L460,55 L460,130
        M470,130 L470,70 L515,70 L515,130
        M525,130 L525,50 L575,50 L575,130
        M585,130 L585,80 L630,80 L630,130
        M640,130 L640,60 L685,60 L685,130
        M695,130 L695,75 L745,75 L745,130
        M755,130 L755,55 L805,55 L805,130
        M815,130 L815,70 L865,70 L865,130
        M875,130 L875,80 L925,80 L925,130
        M935,130 L935,60 L985,60 L985,130
        M995,130 L995,75 L1045,75 L1045,130
        M1055,130 L1055,50 L1115,50 L1115,130
        M1125,130 L1125,70 L1195,70 L1195,130
      " fill="rgba(0, 0, 0, 0.09)" />
    </svg>
  );
}

// Ground Grass & Soil Surface Component
function GroundGrassPattern() {
  return (
    <svg width="1200" height="26" viewBox="0 0 1200 26" fill="none" style={{ display: 'block' }}>
      {/* Dark Top Floor Surface Bar */}
      <rect x="0" y="0" width="1200" height="26" fill="#3D3D3F" />
      <rect x="0" y="0" width="1200" height="4" fill="#29292B" />
      
      {/* Pixel Grass Tuft Accents */}
      <path d="
        M15,0 L17,-4 L19,0 M30,0 L32,-4 L34,0 M60,0 L62,-4 L64,0
        M110,0 L112,-4 L114,0 M160,0 L162,-4 L164,0 M210,0 L212,-4 L214,0
        M260,0 L262,-4 L264,0 M310,0 L312,-4 L314,0 M360,0 L362,-4 L364,0
        M410,0 L412,-4 L414,0 M460,0 L462,-4 L464,0 M510,0 L512,-4 L514,0
        M560,0 L562,-4 L564,0 M610,0 L612,-4 L614,0 M660,0 L662,-4 L664,0
        M710,0 L712,-4 L714,0 M760,0 L762,-4 L764,0 M810,0 L812,-4 L814,0
        M860,0 L862,-4 L864,0 M910,0 L912,-4 L914,0 M960,0 L962,-4 L964,0
        M1010,0 L1012,-4 L1014,0 M1060,0 L1062,-4 L1064,0 M1110,0 L1112,-4 L1114,0
        M1160,0 L1162,-4 L1164,0
      " stroke="#1F1F21" strokeWidth="2" fill="none" />
    </svg>
  );
}

// Platform Scene 1 (Tree, Floating Platform with Search Badge & Question Box)
function PlatformScene1() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '28px', height: '120px' }}>
      {/* Small Pixel Bush */}
      <div style={{ width: '22px', height: '16px', background: '#4A6B4C', borderRadius: '8px 8px 0 0' }} />

      {/* Pixel Tree */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '20px', height: '24px', background: '#356338', borderRadius: '4px' }} />
        <div style={{ width: '6px', height: '14px', background: '#5E3E26' }} />
      </div>

      {/* Floating Dark Platform with Search Magnifier Badge */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '46px' }}>
        <div style={footerStyles.platformBar}>
          <div style={footerStyles.iconBadge}>🔍</div>
        </div>
      </div>

      {/* Question Block */}
      <div style={{ marginBottom: '46px' }}>
        <div style={footerStyles.questionBlock}>?</div>
      </div>
    </div>
  );
}

// Platform Scene 2 (Trees, Bushes, Platform with Double Edit Badges)
function PlatformScene2() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '35px', height: '120px' }}>
      {/* Double Edit Badges Floating Platform */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}>
        <div style={footerStyles.platformBarWide}>
          <div style={footerStyles.iconBadge}>✏️</div>
          <div style={footerStyles.iconBadge}>✏️</div>
        </div>
      </div>

      {/* Cluster of Pixel Trees & Bushes */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
        <div style={{ width: '16px', height: '22px', background: '#356338', borderRadius: '4px' }} />
        <div style={{ width: '20px', height: '16px', background: '#4A6B4C', borderRadius: '8px 8px 0 0' }} />
        <div style={{ width: '18px', height: '26px', background: '#2C5430', borderRadius: '4px' }} />
      </div>
    </div>
  );
}

// Sleek Pixel Avatar / Running Character SVG Component
function PixelAvatar({ runFrame, isJumping }) {
  const legShift = runFrame % 2 === 0 ? 0 : 3;

  return (
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
      {/* Black Square Pixel Body with White Eyes (Matching Reference Image) */}
      <rect x="4" y="4" width="20" height="20" rx="3" fill="#1C1C1E" />
      
      {/* Glowing Pixel Eyes */}
      <rect x="8" y="10" width="3" height="5" fill="#FFFFFF" />
      <rect x="15" y="10" width="3" height="5" fill="#FFFFFF" />

      {/* Moving Pixel Legs */}
      {!isJumping ? (
        <>
          <rect x={6 + legShift} y="24" width="5" height="6" fill="#1C1C1E" />
          <rect x={16 - legShift} y="24" width="5" height="6" fill="#1C1C1E" />
        </>
      ) : (
        <>
          <rect x="4" y="22" width="6" height="5" fill="#1C1C1E" />
          <rect x="17" y="24" width="6" height="5" fill="#1C1C1E" />
        </>
      )}
    </svg>
  );
}

// Flying Pixel Bird Group
function PixelBirdGroup() {
  return (
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
        <path d="M0,6 Q4.5,0 9,6 Q13.5,0 18,6" stroke="#8E8E93" strokeWidth="1.8" fill="none" />
      </svg>
      <svg width="14" height="7" viewBox="0 0 14 7" fill="none" style={{ marginTop: '-8px' }}>
        <path d="M0,5 Q3.5,0 7,5 Q10.5,0 14,5" stroke="#A2A2A7" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

// Pop-up Pixel Star Coin Component
function PixelStarCoin() {
  return (
    <div style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#FFE033',
      border: '2px solid #D4A000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '11px',
      color: '#4A3800',
      boxShadow: '0 0 10px rgba(255, 224, 51, 0.7)'
    }}>
      ✦
    </div>
  );
}

// Mario Platformer Footer Styles
const footerStyles = {
  sectionWrapper: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    background: '#FFFFFF', // Pure clean white sky background matching reference
    borderTop: '1px solid #EAEAEA',
    cursor: 'pointer',
    userSelect: 'none'
  },
  sceneCanvas: {
    width: '100%',
    height: '180px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end'
  },
  skyBirdsTrack: {
    position: 'absolute',
    top: '25px',
    left: 0,
    width: '100%',
    zIndex: 1
  },
  skylineTrack: {
    position: 'absolute',
    bottom: '26px',
    left: 0,
    width: '100%',
    zIndex: 2
  },
  foregroundTrack: {
    position: 'absolute',
    bottom: '26px',
    left: 0,
    width: '100%',
    zIndex: 3
  },
  characterPosition: {
    position: 'absolute',
    bottom: '26px',
    left: '14%',
    zIndex: 5
  },
  groundLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '26px',
    zIndex: 4
  },
  platformBar: {
    width: '60px',
    height: '12px',
    background: '#3A3A3C',
    borderRadius: '3px',
    border: '1px solid #5A5A5C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  },
  platformBarWide: {
    width: '80px',
    height: '12px',
    background: '#3A3A3C',
    borderRadius: '3px',
    border: '1px solid #5A5A5C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  },
  iconBadge: {
    fontSize: '9px',
    marginTop: '-1px'
  },
  questionBlock: {
    width: '22px',
    height: '22px',
    background: '#3A3A3C',
    border: '1px solid #6C6C6E',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  },
  darkBedrockBar: {
    width: '100%',
    background: '#1F1F21', // Dark charcoal/black bedrock footer bar
    padding: '28px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid #2C2C2E',
    position: 'relative',
    zIndex: 6
  },
  copyrightText: {
    fontSize: '0.82rem',
    color: '#8E8E93',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontWeight: '400',
    letterSpacing: '0.01em'
  }
};
