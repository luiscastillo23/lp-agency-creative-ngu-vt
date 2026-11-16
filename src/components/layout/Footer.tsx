import React from 'react';
import { BrandLogo } from '../../assets/BrandLogo';
import { WorldMapSvg } from '../../assets/WorldMapSvg';
import { Button } from '../ui/Button';
import { FOOTER_MENU, FOOTER_SOCIALS } from '../../features/landing/data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden px-6 pb-16 pt-12 sm:px-14">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-85">
        <WorldMapSvg className="w-full max-w-4xl object-contain" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FF3B00]/20 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <BrandLogo variant="orange" className="h-6" />
            <span className="text-2xl font-bold tracking-tight text-white">
              Nguyan
            </span>
          </div>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
            Enjoy seamless booking, smarter flight predictions, and personalized
            rewards, powered by Flybacks for smoother journeys.
          </p>
          <div className="mt-7">
            <Button variant="primary">Read More</Button>
          </div>
        </div>

        <div className="md:col-span-4 md:pl-12">
          <h3 className="text-sm font-semibold text-[#FF5500]">Menu</h3>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_MENU.map((item) => (
              <li key={item}>
                <a
                  href="#menu"
                  className="text-xs text-white/85 transition-colors hover:text-[#FF5500] sm:text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 md:text-right">
          <h3 className="text-sm font-semibold text-[#FF5500]">Follow Us</h3>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_SOCIALS.map((social) => (
              <li key={social}>
                <a
                  href="#social"
                  className="text-xs text-white/85 transition-colors hover:text-[#FF5500] sm:text-sm"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
