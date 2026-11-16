import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'dark' | 'orange';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'dark',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-3xl transition-all duration-300',
        variant === 'glass' &&
          'border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-card-glow',
        variant === 'dark' &&
          'border border-white/[0.08] bg-[#111111] shadow-card-glow hover:border-white/15',
        variant === 'orange' &&
          'border border-[#FF5500]/40 bg-gradient-to-br from-[#FF3B00] via-[#CC2200] to-[#4A0E00]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
