import React from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import MyWork from '../components/MyWork';
import About from '../components/About';
import AboutEditorial from '../components/AboutEditorial';
import DesignShowcase from '../components/DesignShowcase';

export default function Home() {
  return (
    <main style={styles.homeContainer}>
      {/* Hero + Ticker combined: 100vh */}
      <div style={styles.heroWrapper}>
        <Hero />
        <Ticker />
      </div>

      {/* Section 2: My Work */}
      <MyWork />

      {/* Section 3: About Me (v1 Scrapbook & Trajectory - Hidden) */}
      {/* <About /> */}

      {/* Section 3: About Me (Clean Editorial Version) */}
      <AboutEditorial />

      {/* Section 4: All Designs Horizontal Auto-Scrolling Showcase */}
      <DesignShowcase />
    </main>
  );
}

const styles = {
  homeContainer: {
    width: '100%',
    position: 'relative',
    background: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  heroWrapper: {
    height: '100vh',
    minHeight: '620px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
};
