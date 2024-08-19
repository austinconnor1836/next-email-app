'use client';

import React from 'react';
import './circle-animation.css';

const CircleAnimation: React.FC = () => {
  return (
    <div className="circle-container">
      <svg width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          className="circle-path"
        />
      </svg>
    </div>
  );
};

export default CircleAnimation;
