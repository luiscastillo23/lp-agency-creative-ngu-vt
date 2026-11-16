import React from 'react';
import { BrandLogo } from '../../assets/BrandLogo';
import { IconButton } from '../ui/IconButton';
import { NAV_LINKS } from '../../features/landing/data/landingData';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  return (
    <header className="relative z-30 flex items-center justify-between px-6 pt-6 sm:px-12 sm:pt-8">
      <nav
        aria-label="Primary Navigation"
        className="flex items-center gap-1 rounded-full border border-white/15 bg-black/35 px-2 py-1.5 backdrop-blur-md sm:gap-2 sm:px-4"
      >
        {NAV_LINKS.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              'rounded-full px-3 py-1 text-xs font-medium transition-colors sm:text-sm',
              idx === 0
                ? 'bg-white/10 text-white'
                : 'text-white/80 hover:text-white'
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex md:items-center md:justify-center">
        <a href="#home" aria-label="Nguyan Home">
          <BrandLogo variant="white" className="h-6" />
        </a>
      </div>

      <div className="flex items-center gap-2.5">
        <IconButton aria-label="WhatsApp" className="h-9 w-9">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.67-.61-2.95-1.27-4.88-4.25-5.03-4.45-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4.01.57.01.18 0 .43-.07.67.51.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.72-.17 1.4z" />
          </svg>
        </IconButton>

        <IconButton aria-label="Instagram" className="h-9 w-9">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current"
            fill="none"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </IconButton>

        <IconButton aria-label="X" className="h-9 w-9">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </IconButton>
      </div>
    </header>
  );
};
