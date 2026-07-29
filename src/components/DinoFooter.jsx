import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DinoFooter() {
  const [isJumping, setIsJumping] = useState(false);
  const [isDucking, setIsDucking] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(1280);
  const [gameOver, setGameOver] = useState(false);
  const [runFrame, setRunFrame] = useState(0);
  const [obstacles, setObstacles] = useState([
    { id: 1, x: 800, type: 'cactus' },
    { id: 2, x: 1300, type: 'double-cactus' },
    { id: 3, x: 1800, type: 'bird' },
  ]);

  // Score timer
  useEffect(() => {
    if (gameOver) return;
    const scoreInterval = setInterval(() => {
      setScore((prev) => prev + 1);
    }, 100);
    return () => clearInterval(scoreInterval);
  }, [gameOver]);

  // T-Rex running leg stride animation
  useEffect(() => {
    if (gameOver) return;
    const frameInterval = setInterval(() => {
      setRunFrame((prev) => (prev + 1) % 2);
    }, 120);
    return () => clearInterval(frameInterval);
  }, [gameOver]);

  // Obstacle movement loop & collision detection
  useEffect(() => {
    if (gameOver) return;
    const gameLoop = setInterval(() => {
      setObstacles((prevObstacles) => {
        return prevObstacles.map((obs) => {
          let newX = obs.x - 7; // Obstacle speed
          if (newX < -60) {
            newX = 1100 + Math.random() * 400; // Reset obstacle to right
          }

          // Auto-jump assistance when obstacle gets close to Dino (x around 120-170px)
          if (newX > 110 && newX < 150 && !isJumping) {
            triggerJump();
          }

          return { ...obs, x: newX };
        });
      });
    }, 30);

    return () => clearInterval(gameLoop);
  }, [isJumping, gameOver]);

  // Keyboard controls listener (Spacebar or ArrowUp to jump)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameOver) {
          restartGame();
        } else {
          triggerJump();
        }
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        setIsDucking(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === 'ArrowDown') {
        setIsDucking(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isJumping, gameOver]);

  const triggerJump = () => {
    if (isJumping || isDucking) return;
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 550);
  };

  const restartGame = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
    setGameOver(false);
    setObstacles([
      { id: 1, x: 800, type: 'cactus' },
      { id: 2, x: 1300, type: 'double-cactus' },
      { id: 3, x: 1800, type: 'bird' },
    ]);
  };

  // Format score with leading zeros (e.g. 00341)
  const formatScore = (num) => String(num).padStart(5, '0');

  return (
    <footer 
      style={footerStyles.sectionWrapper}
      onClick={() => {
        if (gameOver) restartGame();
        else triggerJump();
      }}
      title="Click or press Spacebar to Jump!"
    >
      {/* Chrome Dino Game Canvas */}
      <div style={footerStyles.gameCanvas}>
        
        {/* Retro Arcade Scoreboard */}
        <div style={footerStyles.scoreBoard}>
          <span style={footerStyles.highScoreText}>HI {formatScore(highScore)}</span>
          <span style={footerStyles.currentScoreText}>{formatScore(score)}</span>
        </div>

        {/* Clouds floating in sky */}
        <div style={footerStyles.cloudTrack}>
          <div className="gallery-scroll-left" style={{ animationDuration: '40s', gap: '300px' }}>
            <PixelCloud />
            <PixelCloud />
            <PixelCloud />
          </div>
        </div>

        {/* Obstacles (Cacti & Pterodactyls) */}
        {obstacles.map((obs) => (
          <div
            key={obs.id}
            style={{
              position: 'absolute',
              bottom: obs.type === 'bird' ? '70px' : '26px',
              left: `${obs.x}px`,
              zIndex: 3,
            }}
          >
            {obs.type === 'cactus' && <PixelCactus />}
            {obs.type === 'double-cactus' && <PixelDoubleCactus />}
            {obs.type === 'bird' && <PixelPterodactyl runFrame={runFrame} />}
          </div>
        ))}

        {/* T-Rex Character */}
        <div style={footerStyles.dinoPosition}>
          <motion.div
            animate={{
              y: isJumping ? -70 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 600,
              damping: 26
            }}
          >
            <ChromeTRex runFrame={runFrame} isJumping={isJumping} isDucking={isDucking} gameOver={gameOver} />
          </motion.div>
        </div>

        {/* Game Over Modal / Prompt */}
        {gameOver && (
          <div style={footerStyles.gameOverBox}>
            <span style={footerStyles.gameOverTitle}>G A M E  O V E R</span>
            <div style={footerStyles.restartBtn} onClick={restartGame}>
              ↺
            </div>
          </div>
        )}

        {/* Dotted Pixel Ground Surface */}
        <div style={footerStyles.groundLine}>
          <div className="gallery-scroll-left" style={{ animationDuration: '10s', gap: 0 }}>
            <PixelGroundSurface />
            <PixelGroundSurface />
          </div>
        </div>

      </div>

      {/* Dark Bedrock Copyright Footer Bar */}
      <div style={footerStyles.darkBedrockBar}>
        <span style={footerStyles.copyrightText}>
          © 2026 all rights reserved by Anuj Joshi.
        </span>
      </div>
    </footer>
  );
}

// Iconic Chrome T-Rex Dino Pixel SVG
function ChromeTRex({ runFrame, isJumping, isDucking, gameOver }) {
  if (gameOver) {
    return (
      <svg width="44" height="47" viewBox="0 0 44 47" fill="none">
        {/* T-Rex Head with X_X eyes */}
        <rect x="22" y="0" width="22" height="16" fill="#535353" />
        <rect x="26" y="4" width="4" height="4" fill="#FFFFFF" /> {/* Eye Socket */}
        <path d="M26,4 L30,8 M30,4 L26,8" stroke="#000" strokeWidth="1.5" /> {/* X Eye */}
        <rect x="22" y="16" width="18" height="6" fill="#535353" />
        {/* Body & Arms */}
        <rect x="14" y="18" width="16" height="18" fill="#535353" />
        <rect x="30" y="24" width="4" height="4" fill="#535353" />
        {/* Tail */}
        <rect x="4" y="22" width="10" height="10" fill="#535353" />
        <rect x="0" y="20" width="6" height="6" fill="#535353" />
        {/* Legs standing */}
        <rect x="14" y="36" width="4" height="10" fill="#535353" />
        <rect x="24" y="36" width="4" height="10" fill="#535353" />
      </svg>
    );
  }

  return (
    <svg width="44" height="47" viewBox="0 0 44 47" fill="none">
      {/* Head & Eye */}
      <rect x="22" y="0" width="22" height="16" fill="#535353" />
      <rect x="26" y="4" width="4" height="4" fill="#FFFFFF" />
      <rect x="22" y="16" width="18" height="6" fill="#535353" />

      {/* Body & Tiny Arm */}
      <rect x="14" y="18" width="16" height="18" fill="#535353" />
      <rect x="30" y="24" width="4" height="4" fill="#535353" />

      {/* Tail */}
      <rect x="4" y="22" width="10" height="10" fill="#535353" />
      <rect x="0" y="20" width="6" height="6" fill="#535353" />

      {/* Moving Legs Animation */}
      {!isJumping ? (
        runFrame === 0 ? (
          <>
            <rect x="14" y="36" width="4" height="10" fill="#535353" />
            <rect x="24" y="36" width="6" height="4" fill="#535353" />
          </>
        ) : (
          <>
            <rect x="14" y="36" width="6" height="4" fill="#535353" />
            <rect x="24" y="36" width="4" height="10" fill="#535353" />
          </>
        )
      ) : (
        <>
          <rect x="14" y="36" width="4" height="6" fill="#535353" />
          <rect x="24" y="36" width="4" height="6" fill="#535353" />
        </>
      )}
    </svg>
  );
}

// Single Cactus Pixel SVG
function PixelCactus() {
  return (
    <svg width="17" height="35" viewBox="0 0 17 35" fill="none">
      {/* Main Stem */}
      <rect x="6" y="0" width="5" height="35" fill="#535353" />
      {/* Left Arm */}
      <rect x="0" y="10" width="6" height="4" fill="#535353" />
      <rect x="0" y="6" width="4" height="8" fill="#535353" />
      {/* Right Arm */}
      <rect x="11" y="14" width="6" height="4" fill="#535353" />
      <rect x="13" y="10" width="4" height="8" fill="#535353" />
    </svg>
  );
}

// Double Cactus Group Pixel SVG
function PixelDoubleCactus() {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
      <PixelCactus />
      <svg width="22" height="42" viewBox="0 0 22 42" fill="none">
        <rect x="8" y="0" width="6" height="42" fill="#535353" />
        <rect x="0" y="12" width="8" height="5" fill="#535353" />
        <rect x="0" y="6" width="5" height="11" fill="#535353" />
        <rect x="14" y="16" width="8" height="5" fill="#535353" />
        <rect x="17" y="10" width="5" height="11" fill="#535353" />
      </svg>
    </div>
  );
}

// Flying Pterodactyl Pixel SVG
function PixelPterodactyl({ runFrame }) {
  return (
    <svg width="42" height="30" viewBox="0 0 42 30" fill="none">
      {/* Body & Head */}
      <rect x="12" y="10" width="18" height="8" fill="#535353" />
      <rect x="30" y="6" width="10" height="6" fill="#535353" />
      <rect x="36" y="10" width="6" height="2" fill="#535353" />
      {/* Wings Flapping */}
      {runFrame === 0 ? (
        <path d="M12,10 L0,0 L18,10 Z" fill="#535353" />
      ) : (
        <path d="M12,18 L0,28 L18,18 Z" fill="#535353" />
      )}
    </svg>
  );
}

// Cloud Component
function PixelCloud() {
  return (
    <svg width="46" height="14" viewBox="0 0 46 14" fill="none">
      <rect x="10" y="0" width="26" height="14" fill="#C6C6C6" />
      <rect x="0" y="4" width="46" height="6" fill="#C6C6C6" />
    </svg>
  );
}

// Pixel Ground Surface Line SVG
function PixelGroundSurface() {
  return (
    <svg width="1200" height="12" viewBox="0 0 1200 12" fill="none" style={{ display: 'block' }}>
      <line x1="0" y1="2" x2="1200" y2="2" stroke="#535353" strokeWidth="2" strokeDasharray="16 8 4 12 24 6" />
      {/* Random Speckle Dots */}
      <rect x="40" y="7" width="4" height="2" fill="#777" />
      <rect x="120" y="9" width="2" height="2" fill="#777" />
      <rect x="250" y="6" width="6" height="2" fill="#777" />
      <rect x="410" y="8" width="3" height="2" fill="#777" />
      <rect x="580" y="7" width="5" height="2" fill="#777" />
      <rect x="730" y="9" width="2" height="2" fill="#777" />
      <rect x="890" y="6" width="4" height="2" fill="#777" />
      <rect x="1050" y="8" width="3" height="2" fill="#777" />
    </svg>
  );
}

// Chrome Dino Footer Styles
const footerStyles = {
  sectionWrapper: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    background: '#FFFFFF', // Clean white background matching Chrome no-internet screen
    borderTop: '1px solid #EAEAEA',
    cursor: 'pointer',
    userSelect: 'none'
  },
  gameCanvas: {
    width: '100%',
    height: '175px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end'
  },
  scoreBoard: {
    position: 'absolute',
    top: '20px',
    right: '40px',
    zIndex: 10,
    fontFamily: '"Courier New", Courier, monospace',
    fontWeight: 'bold',
    fontSize: '1.05rem',
    letterSpacing: '0.12em',
    color: '#535353',
    display: 'flex',
    gap: '20px'
  },
  highScoreText: {
    color: '#757575'
  },
  currentScoreText: {
    color: '#202124'
  },
  cloudTrack: {
    position: 'absolute',
    top: '30px',
    left: 0,
    width: '100%',
    zIndex: 1
  },
  dinoPosition: {
    position: 'absolute',
    bottom: '26px',
    left: '100px',
    zIndex: 5
  },
  groundLine: {
    position: 'absolute',
    bottom: '16px',
    left: 0,
    width: '100%',
    height: '12px',
    zIndex: 4
  },
  gameOverBox: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  },
  gameOverTitle: {
    fontFamily: '"Courier New", Courier, monospace',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#535353',
    letterSpacing: '0.2em'
  },
  restartBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#535353',
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    cursor: 'pointer'
  },
  darkBedrockBar: {
    width: '100%',
    background: '#1F1F21', // Dark charcoal/black bedrock footer bar
    padding: '24px 0',
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
