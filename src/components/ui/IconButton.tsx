import React from 'react';
import { cn } from '../../utils/cn';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solidWhite' | 'darkRed';
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant = 'outline',
  className,
  ...props
}) => (
  <button
    className={cn(
      'inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 active:scale-95',
      variant === 'outline' &&
        'border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white/15',
      variant === 'solidWhite' &&
        'bg-white text-[#050505] hover:bg-white/90',
      variant === 'darkRed' &&
        'border border-[#FF3B00]/25 bg-[#1F0905] text-white/90 hover:border-[#FF3B00] hover:bg-[#FF3B00]/20',
      className
    )}
    {...props}
  >
    {children}
  </button>
);
