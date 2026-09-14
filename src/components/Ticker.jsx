import React from 'react';

export default function Ticker() {
  const highlights = [
    '3+ Years of Experience',
    'Product Designer',
    'Fintech & SaaS UX Specialist',
    'UX Designer at Pixela UX/UI Studio',
    'Ex-Codiotic Technologies',
    'Sarthi AI Trade System',
    'Scalable Design Systems Architect',
    '10,000+ Active Traders Served',
    'Google UX Certified',
    'Indore, India',
  ];

  // Quadruple highlights list so -50% translateX loop is 100% seamless on all screen sizes
  const marqueeItems = [...highlights, ...highlights, ...highlights, ...highlights];

  return (
    <div className="marquee-container" style={styles.container}>
      <div className="marquee-content">
        {marqueeItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>{item}</span>
            <span className="marquee-star">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    backgroundColor: 'var(--bg-primary)',
    userSelect: 'none'
  }
};
