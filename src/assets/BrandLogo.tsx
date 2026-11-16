import React from 'react';
import { cn } from '../utils/cn';

interface BrandLogoProps {
  variant?: 'white' | 'orange';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'white',
  className,
}) => {
  const fillClass = variant === 'orange' ? 'fill-[#FF3B00]' : 'fill-white';

  return (
    <svg
      viewBox="0 0 36 28"
      className={cn('h-6 w-auto select-none', className)}
      aria-label="Nguyan Brand Mark"
    >
      <rect x="2" y="2" width="11" height="24" rx="2" className={fillClass} />
      <path d="M15 14L33 2V26L15 14Z" className={fillClass} />
    </svg>
  );
};
