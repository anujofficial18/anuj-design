import React from 'react';

export default function Ticker() {
  const skills = [
    'Usability Testing',
    'Visual Design',
    'Design Systems',
    'UX Design',
    'User Research',
    'Interaction Design',
    'Rapid Prototyping',
    'Product Strategy'
  ];

  // Duplicate skills list once to ensure a seamless infinite marquee scroll
  const marqueeItems = [...skills, ...skills];

  return (
    <div className="marquee-container" style={styles.container}>
      <div className="marquee-content">
        {marqueeItems.map((skill, index) => (
          <div key={index} className="marquee-item">
            <span>{skill}</span>
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
