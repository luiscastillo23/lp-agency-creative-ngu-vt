import React from 'react';
import { cn } from '../../utils/cn';

interface AvatarGroupProps {
  avatars: string[];
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, className }) => (
  <div className={cn('flex items-center -space-x-2.5', className)}>
    {avatars.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={'Client avatar ' + (idx + 1)}
        className="h-9 w-9 rounded-full border-2 border-[#050505] object-cover"
      />
    ))}
  </div>
);
