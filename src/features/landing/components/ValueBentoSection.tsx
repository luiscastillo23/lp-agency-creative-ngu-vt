import React from 'react';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { GlassCard } from '../../../components/ui/GlassCard';
import { Button } from '../../../components/ui/Button';
import { BAR_CHART_HEIGHTS } from '../data/landingData';
import { PORTRAITS } from '../../../assets/portraits';

export const ValueBentoSection: React.FC = () => {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 sm:px-12">
      <SectionHeader
        titleLines={['Design that works', 'Simple. Effective.']}
        subtitleLines={[
          'We design simple and effective digital experiences',
          'Focused on usability, clarity, and real impact',
        ]}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <GlassCard className="flex min-h-[300px] flex-col justify-between p-7">
          <div className="flex items-center justify-between gap-4 pt-4">
            <div className="flex h-24 items-end gap-3">
              {BAR_CHART_HEIGHTS.map((height, idx) => (
                <div
                  key={idx}
                  style={{ height: height + '%' }}
                  className="w-3.5 rounded-full bg-gradient-to-t from-[#CC2200] to-[#FF5500]"
                />
              ))}
            </div>
            <div className="text-xs leading-relaxed text-[#A1A1AA]">
              <span className="font-semibold text-white">+53%</span> Experience
              <br />
              Performance
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">
              Measure real impact
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
              Track progress through meaningful metrics and user insights
            </p>
          </div>
        </GlassCard>

        <GlassCard className="relative min-h-[300px] overflow-hidden border-[#FF5500]/30 p-7">
          <img
            src={PORTRAITS.heroSamurai}
            alt="Human-centered experiences"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end">
            <h3 className="text-lg font-semibold leading-snug text-white">
              Human-centered
              <br />
              experiences
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/80">
              Designing clear, intuitive, and accessible digital products
            </p>
          </div>
        </GlassCard>

        <GlassCard className="relative flex min-h-[300px] flex-col justify-between overflow-hidden p-7">
          <div className="absolute inset-y-0 right-0 w-7 bg-gradient-to-b from-[#FF5500] to-[#CC2200]" />

          <div className="pt-2 text-4xl font-bold tracking-tight text-white">
            70%
          </div>

          <div className="pr-6">
            <h3 className="text-lg font-semibold text-white">
              Track Your Rewards
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
              Know when to book to get the lowest prices
            </p>
          </div>
        </GlassCard>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-start-2">
          <GlassCard className="flex flex-col items-center p-7 text-center">
            <h3 className="text-base font-semibold text-white">
              Start your next digital experience
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
              Elevate your brand with human-centered design that combines clarity
            </p>
            <div className="mt-6 w-full">
              <Button variant="gradient" withArrowCircle={false} fullWidth>
                Start a Project
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
