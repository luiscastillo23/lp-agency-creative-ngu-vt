import React from 'react';
import { Button } from '../../../components/ui/Button';
import { PORTRAITS } from '../../../assets/portraits';

export const ConceptArcSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative mx-auto max-w-6xl">
        <svg
          viewBox="0 0 1200 170"
          className="w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <filter id="neon-glow-top" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur1" />
              <feGaussianBlur stdDeviation="18" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 20 15 Q 600 185 1180 15"
            fill="none"
            stroke="#FF5500"
            strokeWidth="6"
            filter="url(#neon-glow-top)"
          />
          <path
            d="M 20 15 Q 600 185 1180 15"
            fill="none"
            stroke="#FFF7ED"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-12 text-center sm:px-12">
        <div className="hidden md:block absolute -top-2 left-6 h-24 w-40 overflow-hidden rounded-2xl border border-[#FF3B00]/40 bg-gradient-to-r from-black via-[#990000] to-black shadow-orange-glow">
          <div className="flex h-full items-end justify-center gap-2 pb-2">
            <span className="h-12 w-2 rounded-t bg-black" />
            <span className="h-14 w-2.5 rounded-t bg-black" />
            <span className="h-11 w-2 rounded-t bg-black" />
            <span className="h-14 w-2.5 rounded-t bg-black" />
          </div>
        </div>

        <div className="hidden md:block absolute -top-2 right-6 h-24 w-40 overflow-hidden rounded-2xl border border-[#FF3B00]/40 bg-gradient-to-br from-[#FF3B00] via-[#660000] to-black shadow-orange-glow">
          <div className="flex h-full items-end justify-center">
            <div className="h-16 w-10 rounded-t-full bg-black/90" />
          </div>
        </div>

        <div className="hidden md:flex absolute -bottom-2 left-28 h-20 w-24 items-center justify-center overflow-hidden rounded-2xl border border-[#FF3B00]/40 bg-[#120200] shadow-orange-glow">
          <div className="h-14 w-14 rounded-full border-2 border-[#FF3B00] bg-black/80 shadow-[0_0_15px_#FF3B00]" />
        </div>

        <div className="hidden md:block absolute -bottom-2 right-24 h-20 w-28 overflow-hidden rounded-2xl border border-[#FF3B00]/40 bg-[#220500] shadow-orange-glow">
          <img
            src={PORTRAITS.heroSamurai}
            alt="Silhouette thumbnail"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-xl py-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.15]">
            From Concepts
            <br />
            Into Interaction
          </h2>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
            “Crafting intuitive digital interfaces through purposeful design and
            user-centered research.”
          </p>
          <div className="mt-7">
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <svg
          viewBox="0 0 1200 170"
          className="w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <filter id="neon-glow-bottom" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur1" />
              <feGaussianBlur stdDeviation="18" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 20 155 Q 600 -15 1180 155"
            fill="none"
            stroke="#FF5500"
            strokeWidth="6"
            filter="url(#neon-glow-bottom)"
          />
          <path
            d="M 20 155 Q 600 -15 1180 155"
            fill="none"
            stroke="#FFF7ED"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </section>
  );
};
