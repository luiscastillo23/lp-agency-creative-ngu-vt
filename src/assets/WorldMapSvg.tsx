import React from 'react';

export const WorldMapSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 1000 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g fill="#ffffff" fillOpacity="0.16">
      <path d="M95 75h85l35 35-15 55-45 35-20 40-35-25-25-60 20-80zM235 45h90l25 45-40 35-55-15-20-65z" />
      <path d="M225 255l55 20 30 60-35 95-35 25-20-65 5-135z" />
      <path d="M445 75l85-15 35 40-25 45-70 15-25-40V75z" />
      <path d="M435 175l90-10 45 55-20 115-45 45-45-55-25-95v-55z" />
      <path d="M565 65l195-10 85 45-20 95-95 45-110-15-55-75V65z" />
      <path d="M745 255l65 20 15 35-55 15-25-70zM785 335l90 10 20 55-65 30-45-40v-55z" />
    </g>
    <pattern id="world-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1.4" fill="#ffffff" fillOpacity="0.12" />
    </pattern>
    <rect width="1000" height="480" fill="url(#world-dots)" />
  </svg>
);
