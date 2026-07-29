import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');
  const [isVisible, setIsVisible] = useState(true);

  // Define nav links
  const navItems = [
    { name: 'Home', path: '/', isAnchor: true, targetId: 'home' },
    { name: 'Work', path: '/', isAnchor: true, targetId: 'work' },
    { name: 'Gallery', path: '/', isAnchor: true, targetId: 'gallery' },
    { name: 'About', path: '/', isAnchor: true, targetId: 'about' }
  ];

  // Monitor scroll direction (hide on scroll down, show on scroll up) and active tab
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 100) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }
      lastY = currentY;

      if (location.pathname !== '/') {
        setActiveTab('');
        return;
      }

      // Highlight active tab based on scroll section
      const scrollPos = currentY + 200;
      const homeSec = document.getElementById('home');
      const workSec = document.getElementById('work');
      const gallerySec = document.getElementById('gallery');
      const aboutSec = document.getElementById('about');

      if (aboutSec && scrollPos >= aboutSec.offsetTop) {
        setActiveTab('About');
      } else if (gallerySec && scrollPos >= gallerySec.offsetTop) {
        setActiveTab('Gallery');
      } else if (workSec && scrollPos >= workSec.offsetTop) {
        setActiveTab('Work');
      } else if (homeSec) {
        setActiveTab('Home');
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
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
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
                  layoutId="active-pill"
                  style={styles.activePill}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span style={styles.navText}>{item.name}</span>
            </button>
          );
        })}
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
    pointerEvents: 'none'
  },
  navBar: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(17, 16, 17, 0.05)',
    padding: '6px',
    borderRadius: '100px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)'
  },
  navButton: {
    position: 'relative',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: '10px 22px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    fontFamily: 'var(--font-family-heading)',
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
    backgroundColor: 'var(--state-joy-light)', // Soft blue-cyan tint matching the streamlined theme
    borderRadius: '100px',
    zIndex: 0
  },
  navText: {
    position: 'relative',
    zIndex: 1
  }
};
