import React from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { AvatarGroup } from '../../../components/ui/AvatarGroup';
import { IconButton } from '../../../components/ui/IconButton';
import { CLIENT_AVATARS, TESTIMONIALS } from '../data/landingData';
import { useCarousel } from '../../../hooks/useCarousel';
import { cn } from '../../../utils/cn';

export const TestimonialsSection: React.FC = () => {
  const { activeIndex, next, prev, goTo } = useCarousel(TESTIMONIALS.length, 0);

  const orderedTestimonials = [
    ...TESTIMONIALS.slice(activeIndex),
    ...TESTIMONIALS.slice(0, activeIndex),
  ];

  return (
    <section className="mx-auto max-w-6xl overflow-hidden px-6 py-20 sm:px-12">
      <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          What Our
          <br />
          Clients Say
        </h2>

        <div className="max-w-xs space-y-2">
          <AvatarGroup avatars={CLIENT_AVATARS} />
          <p className="text-xs leading-relaxed text-[#A1A1AA]">
            We create digital experiences that solve real business problems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {orderedTestimonials.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border border-[#FF5500]/25 bg-[radial-gradient(circle_at_bottom_right,#FF3B00_0%,#661400_42%,#111111_80%)] p-6 transition-all duration-300"
          >
            <div className="grid grid-cols-12 items-start gap-4">
              <div className="relative col-span-5 aspect-square overflow-hidden rounded-2xl border border-white/15">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className={cn('h-full w-full object-cover', item.tintClass)}
                />
                <div className="fluted-glass-overlay absolute inset-y-0 right-0 w-1/2 border-l border-white/20" />
              </div>

              <p className="col-span-7 text-xs leading-relaxed text-white/90">
                {item.quote}
              </p>
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="text-sm font-semibold text-white">
                  {item.name}
                </div>
                <div className="text-[10px] tracking-wider text-white/75">
                  {item.role}
                </div>
              </div>

              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <span>{item.rating}</span>
                <Star className="h-3 w-3 fill-white text-white" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconButton
            variant="darkRed"
            onClick={prev}
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </IconButton>
          <IconButton
            variant="darkRed"
            onClick={next}
            aria-label="Next Testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </IconButton>
        </div>

        <div className="flex items-center gap-1.5">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={'Go to slide ' + (idx + 1)}
              className={cn(
                'h-2 rounded-full transition-all',
                activeIndex === idx
                  ? 'w-6 bg-[#FF3B00]'
                  : 'w-2 bg-white/25 hover:bg-white/50'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
