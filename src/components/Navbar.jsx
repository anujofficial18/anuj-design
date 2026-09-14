import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { name: 'Overview', path: '/', isAnchor: true, targetId: 'home' },
    { name: 'My Work', path: '/', isAnchor: true, targetId: 'work' },
    { name: 'About', path: '/', isAnchor: true, targetId: 'about' },
    { name: 'Experience', path: '/', isAnchor: true, targetId: 'experience' },
    { name: 'Designs', path: '/', isAnchor: true, targetId: 'designs' },
  ];

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastY = currentY;

      if (location.pathname !== '/') {
        setActiveTab('');
        return;
      }

      const scrollPos = currentY + 240;
      const homeSec = document.getElementById('home');
      const workSec = document.getElementById('work');
      const aboutSec = document.getElementById('about');
      const expSec = document.getElementById('experience');
      const designsSec = document.getElementById('designs');

      if (designsSec && scrollPos >= designsSec.offsetTop) {
        setActiveTab('Designs');
      } else if (expSec && scrollPos >= expSec.offsetTop) {
        setActiveTab('Experience');
      } else if (aboutSec && scrollPos >= aboutSec.offsetTop) {
        setActiveTab('About');
      } else if (workSec && scrollPos >= workSec.offsetTop) {
        setActiveTab('My Work');
      } else if (homeSec) {
        setActiveTab('Overview');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    if (item.isAnchor) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(item.targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(item.targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveTab(item.name);
    } else {
      navigate(item.path);
      setActiveTab(item.name);
    }
  };

  return (
    <motion.div 
      style={styles.navContainer}
      initial={{ x: '-50%', y: 0 }}
      animate={{ x: '-50%', y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav style={styles.navBar}>
        <div style={styles.brandBadge}>
          <span style={styles.bisonIcon}>✦</span>
          <span style={styles.brandName}>Anuj Joshi</span>
        </div>
        <div style={styles.navDivider} />
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              style={{
                ...styles.navButton,
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill-studio"
                  style={styles.activePill}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span style={styles.navText}>{item.name}</span>
            </button>
          );
        })}
        <div style={styles.navDivider} />
        <a 
          href="mailto:anujofficial18@gmail.com"
          style={styles.contactPill}
        >
          <span>Connect ↗</span>
        </a>
      </nav>
    </motion.div>
  );
}

const styles = {
  navContainer: {
    position: 'fixed',
    top: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  navBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(17, 16, 17, 0.08)',
    padding: '6px 10px',
    borderRadius: '100px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)'
  },
  brandBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
  },
  bisonIcon: {
    fontSize: '1rem',
  },
  brandName: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: '#0E0E0F',
    letterSpacing: '-0.01em',
  },
  navDivider: {
    width: '1px',
    height: '16px',
    background: '#EAEAEA',
    margin: '0 4px',
  },
  navButton: {
    position: 'relative',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: '8px 18px',
    cursor: 'pointer',
    fontSize: '0.88rem',
    fontWeight: '600',
    borderRadius: '100px',
    transition: 'color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activePill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F4F4F6',
    borderRadius: '100px',
    zIndex: 0
  },
  navText: {
    position: 'relative',
    zIndex: 1
  },
  contactPill: {
    fontSize: '0.84rem',
    fontWeight: '600',
    color: '#0E0E0F',
    background: '#F4F4F6',
    border: '1px solid #EAEAEA',
    padding: '6px 14px',
    borderRadius: '100px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all 0.2s ease',
  }
};
