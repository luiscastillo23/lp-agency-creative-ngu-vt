import React from 'react';

export const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#050505] p-2 sm:p-4">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] border border-[#FF3B00]/45 bg-[#050505] shadow-[0_0_50px_rgba(255,59,0,0.18)]">
        {children}
      </div>
    </div>
  );
};
