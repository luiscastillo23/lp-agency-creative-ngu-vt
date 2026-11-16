import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  titleLines: string[];
  subtitleLines?: string[];
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  titleLines,
  subtitleLines,
  align = 'center',
  className,
}) => (
  <div
    className={cn(
      'mb-12',
      align === 'center' ? 'mx-auto max-w-2xl text-center' : 'text-left',
      className
    )}
  >
    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[42px] md:leading-[1.15]">
      {titleLines.map((line, idx) => (
        <span key={idx} className="block">
          {line}
        </span>
      ))}
    </h2>
    {subtitleLines && subtitleLines.length > 0 && (
      <p className="mt-4 text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
        {subtitleLines.map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}
      </p>
    )}
  </div>
);
