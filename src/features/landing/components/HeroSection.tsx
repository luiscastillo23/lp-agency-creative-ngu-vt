import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Navbar } from '../../../components/layout/Navbar';
import { Button } from '../../../components/ui/Button';
import { AvatarGroup } from '../../../components/ui/AvatarGroup';
import { Badge } from '../../../components/ui/Badge';
import { GlassCard } from '../../../components/ui/GlassCard';
import { IconButton } from '../../../components/ui/IconButton';
import { CLIENT_AVATARS } from '../data/landingData';
import { PORTRAITS } from '../../../assets/portraits';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="fluted-glass-hero relative min-h-[760px] overflow-hidden rounded-t-[26px] pb-16"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />

      <Navbar />

      <div className="relative z-20 mx-auto max-w-6xl px-6 pt-10 sm:px-12 sm:pt-14">
        <div className="relative mb-8">
          <div className="relative mx-auto flex w-fit items-center justify-center md:ml-[34%]">
            <span className="relative z-10 pr-4 text-lg font-medium tracking-wide text-white/90 sm:text-2xl">
              We are
            </span>
            <div className="h-16 w-16 rounded-full border border-dashed border-white/60 sm:h-20 sm:w-20" />
          </div>

          <h1 className="mt-1 text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-[84px] md:leading-[1.02]">
            Creative{' '}
            <span className="bg-gradient-to-r from-white via-white/90 to-white/30 bg-clip-text text-transparent">
              Agency
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-6">
            <div>
              <p className="max-w-sm text-lg font-normal leading-snug text-white/90 sm:text-2xl">
                Unlock Your Business
                <br />
                Potential With Our Experts
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Button variant="primary">Read More</Button>

                <div className="flex items-center gap-3">
                  <AvatarGroup avatars={CLIENT_AVATARS} />
                  <div className="text-xs leading-tight text-white/80">
                    <span className="font-semibold text-white">500+</span> Happy
                    Clients
                    <br />
                    Worldwide
                  </div>
                </div>
              </div>
            </div>

            <GlassCard
              variant="glass"
              className="flex max-w-md items-center gap-5 p-4 sm:p-5"
            >
              <div className="h-36 w-32 shrink-0 overflow-hidden rounded-2xl border border-[#FF5500]/30 bg-gradient-to-b from-[#FF5500] to-[#1A0500]">
                <img
                  src={PORTRAITS.heroSamurai}
                  alt="Hooded Specialist"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-between space-y-2.5">
                <Badge className="w-fit">
                  <TrendingUp className="h-3.5 w-3.5 text-white" />
                  <span>Business Growth</span>
                </Badge>

                <div>
                  <div className="text-3xl font-bold tracking-tight text-white">
                    567+
                  </div>
                  <div className="text-xs text-white/75">Expert Solutions</div>
                </div>

                <IconButton
                  variant="solidWhite"
                  aria-label="Explore Expert Solutions"
                  className="h-8 w-8"
                >
                  <ArrowRight className="h-4 w-4" />
                </IconButton>
              </div>
            </GlassCard>
          </div>

          <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
            <div className="relative -mt-12 h-[460px] w-full max-w-[460px] sm:h-[540px]">
              <img
                src={PORTRAITS.heroSamurai}
                alt="Creative Agency Streetwear Samurai"
                className="h-full w-full select-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
