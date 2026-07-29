import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import Pages
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Playground from './pages/Playground';

// Import Components
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

import { DemoOne } from './components/ui/demo';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence monitors components leaving the virtual DOM
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/demo" element={<DemoOne />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div style={styles.appWrapper}>
        <Navbar />
        <AnimatedRoutes />
        <Chatbot />
      </div>
    </Router>
  );
}

const styles = {
  appWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    background: 'var(--bg-primary)',
    overflowX: 'hidden'
  }
};
