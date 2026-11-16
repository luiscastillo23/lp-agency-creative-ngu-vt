const samuraiHeroSvg = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">',
  '  <defs>',
  '    <radialGradient id="glow" cx="55%" cy="40%" r="60%">',
  '      <stop offset="0%" stop-color="#FF5500" stop-opacity="0.95"/>',
  '      <stop offset="55%" stop-color="#CC2200" stop-opacity="0.55"/>',
  '      <stop offset="100%" stop-color="#050505" stop-opacity="0"/>',
  '    </radialGradient>',
  '    <linearGradient id="coat" x1="0%" y1="0%" x2="100%" y2="100%">',
  '      <stop offset="0%" stop-color="#FF5500"/>',
  '      <stop offset="45%" stop-color="#CC2200"/>',
  '      <stop offset="100%" stop-color="#1A0500"/>',
  '    </linearGradient>',
  '    <linearGradient id="hat" x1="0%" y1="0%" x2="100%" y2="100%">',
  '      <stop offset="0%" stop-color="#27272A"/>',
  '      <stop offset="65%" stop-color="#09090B"/>',
  '      <stop offset="100%" stop-color="#FF3B00"/>',
  '    </linearGradient>',
  '  </defs>',
  '  <rect width="800" height="1000" fill="url(#glow)"/>',
  '  <path d="M140 980 C150 670 230 500 370 460 L470 460 C630 500 710 680 730 980 Z" fill="url(#coat)"/>',
  '  <path d="M350 450 L420 670 L495 450 L450 430 L380 430 Z" fill="#0B0B0E"/>',
  '  <path d="M330 465 L415 710 L445 710 L365 455 Z" fill="#FF6A00" opacity="0.75"/>',
  '  <ellipse cx="415" cy="340" rx="78" ry="95" fill="#4A1708"/>',
  '  <path d="M345 310 Q415 350 485 310 L480 410 Q415 445 355 410 Z" fill="#180703"/>',
  '  <circle cx="382" cy="338" r="24" fill="#050505" stroke="#FF5500" stroke-width="3"/>',
  '  <circle cx="442" cy="338" r="24" fill="#050505" stroke="#FF5500" stroke-width="3"/>',
  '  <path d="M250 295 Q415 215 575 305 L525 205 Q415 170 305 205 Z" fill="url(#hat)"/>',
  '  <path d="M230 300 Q415 245 590 315 Q415 340 230 300 Z" fill="#09090B" stroke="#FF5500" stroke-width="2"/>',
  '  <rect x="115" y="755" width="380" height="24" rx="8" transform="rotate(10 115 755)" fill="#18181B" stroke="#FF5500" stroke-width="3"/>',
  '  <path d="M140 765 L165 780 L190 768 L215 785 L240 772 L265 789" stroke="#FF3B00" stroke-width="4" fill="none"/>',
  '  <rect x="330" y="745" width="115" height="90" rx="28" fill="#0A0A0D" stroke="#27272A" stroke-width="2"/>',
  '  <path d="M368 778 L392 802 M392 778 L368 802" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>',
  '  <rect x="435" y="752" width="28" height="48" rx="6" fill="#FF7A00" stroke="#FDE047" stroke-width="2"/>',
  '</svg>'
].join('\n');

const hoodedSideProfileSvg = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">',
  '  <defs>',
  '    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">',
  '      <stop offset="0%" stop-color="#FF4500"/>',
  '      <stop offset="70%" stop-color="#B81D00"/>',
  '      <stop offset="100%" stop-color="#120300"/>',
  '    </linearGradient>',
  '  </defs>',
  '  <rect width="600" height="600" fill="url(#bg)"/>',
  '  <path d="M120 600 C130 410 190 330 280 310 L380 330 C430 410 460 500 470 600 Z" fill="#0D0D11"/>',
  '  <path d="M175 335 C165 180 250 105 355 120 C435 130 475 200 490 255 C430 230 355 235 310 275 Z" fill="#141418" stroke="#FF5500" stroke-width="3"/>',
  '  <path d="M295 215 L445 245 L410 275 L290 255 Z" fill="#050505"/>',
  '  <path d="M295 245 Q385 265 375 335 L285 335 Z" fill="#7C2D12"/>',
  '</svg>'
].join('\n');

export const PORTRAITS = {
  heroSamurai: 'data:image/svg+xml;utf8,' + encodeURIComponent(samuraiHeroSvg),
  hoodedSide: 'data:image/svg+xml;utf8,' + encodeURIComponent(hoodedSideProfileSvg),
  avatar1:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
  avatar2:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
  avatar3:
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80',
  clientCyan:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  clientWarm:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  clientMono:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
};
