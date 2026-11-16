import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { GlassCard } from '../../../components/ui/GlassCard';
import { BrandLogo } from '../../../assets/BrandLogo';
import { PORTRAITS } from '../../../assets/portraits';

export const GrowthStatsSection: React.FC = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:px-12">
      <SectionHeader
        titleLines={["Have a question or idea?", "We're here to help"]}
        subtitleLines={[
          "Tell us about your idea or project, and we'll carefully review your details to provide the",
          'best possible solution.',
        ]}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-[#FF5500]/30 bg-[#FF4500] lg:col-span-5">
          <img
            src={PORTRAITS.hoodedSide}
            alt="Growth Specialist"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-4 left-4 w-60 rounded-2xl border border-white/15 bg-[#111111]/90 p-4 backdrop-blur-md">
            <span className="text-[11px] text-[#A1A1AA]">Monthly</span>
            <div className="mt-0.5 flex items-center justify-between">
              <span className="text-base font-bold text-white">52% Growth</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#A1A1AA]">
                Mar-Apr <ChevronDown className="h-3 w-3" />
              </span>
            </div>

            <div className="relative mt-4 pt-3">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-black shadow">
                1800
              </div>
              <svg viewBox="0 0 200 55" className="h-12 w-full overflow-visible">
                <path
                  d="M 5 48 C 35 48, 45 25, 75 30 C 105 35, 115 12, 145 22 C 170 30, 180 42, 195 45"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="102"
                  cy="26"
                  r="4.5"
                  className="fill-[#111111] stroke-white stroke-[2.5]"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <GlassCard className="relative flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="absolute left-6 top-6">
              <BrandLogo variant="orange" className="h-5" />
            </div>
            <div className="absolute right-6 top-6 text-white/80">
              <ArrowUpRight className="h-5 w-5" />
            </div>

            <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              64K
            </div>
            <p className="mt-2 text-xs text-[#A1A1AA] sm:text-sm">
              240 Contributions in
              <br />
              the last year
            </p>
          </GlassCard>

          <GlassCard className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              65,000+
            </div>
            <p className="mt-1.5 text-xs text-[#A1A1AA] sm:text-sm">Clients</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
