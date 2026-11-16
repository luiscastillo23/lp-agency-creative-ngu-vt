import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gradient' | 'ghost';
  withArrowCircle?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  withArrowCircle = true,
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'group inline-flex items-center justify-center gap-3 rounded-full font-medium transition-all duration-300 active:scale-95',
        variant === 'primary' &&
          'bg-gradient-to-r from-[#FF3B00] to-[#FF5500] px-5 py-2.5 text-sm text-white shadow-orange-glow hover:brightness-110',
        variant === 'gradient' &&
          'bg-gradient-to-r from-[#FF3B00] via-[#FF5500] to-[#CC2200] px-6 py-3.5 text-sm font-semibold text-white shadow-orange-glow hover:brightness-110',
        variant === 'ghost' &&
          'border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {withArrowCircle && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#FF3B00] transition-transform duration-300 group-hover:translate-x-0.5">
          <ArrowRight className="h-4 w-4 stroke-[2.5]" />
        </span>
      )}
    </button>
  );
};
