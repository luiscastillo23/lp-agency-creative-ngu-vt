import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { GlassCard } from '../../../components/ui/GlassCard';
import { Button } from '../../../components/ui/Button';
import { BrandLogo } from '../../../assets/BrandLogo';
import { INTERACTIVE_STEPS } from '../data/landingData';

export const StepContactSection: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const currentStep = INTERACTIVE_STEPS[stepIndex];

  const handlePrev = () => {
    setStepIndex((prev) =>
      prev === 0 ? INTERACTIVE_STEPS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setStepIndex((prev) => (prev + 1) % INTERACTIVE_STEPS.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:px-12">
      <SectionHeader
        titleLines={["Have a question or idea?", "We're here to help"]}
        subtitleLines={[
          "Tell us about your idea or project, and we'll carefully review your details to provide the",
          'best possible solution.',
        ]}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <GlassCard className="flex flex-col justify-between p-8 lg:col-span-5">
          <div>
            <span className="text-lg font-medium text-white/90">
              {currentStep.stepNumber}
            </span>

            <h3 className="mt-5 text-2xl font-bold leading-snug text-white">
              <span className="text-[#FF3B00]">
                {currentStep.highlightPrefix}
              </span>
              {currentStep.titleRemainder}
            </h3>

            <p className="mt-4 text-xs leading-relaxed text-[#A1A1AA]">
              {currentStep.description}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-8 pt-4 text-xs font-medium">
            <button
              type="button"
              onClick={handlePrev}
              className="text-white/75 transition-colors hover:text-white"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1 text-[#FF5500] transition-colors hover:text-[#FF3B00]"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </GlassCard>

        <GlassCard
          variant="orange"
          className="relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:col-span-7"
        >
          <div className="relative z-10 mb-6 lg:mb-0">
            <BrandLogo variant="white" className="h-5" />
          </div>

          <div className="pointer-events-none absolute -bottom-12 left-10 h-56 w-56 rounded-full border border-dashed border-white/60" />

          <form
            onSubmit={handleSubmit}
            className="relative z-10 ml-auto w-full max-w-md rounded-2xl border border-white/10 bg-[#0B0B0E]/95 p-5 shadow-2xl"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="First Name"
                className="w-full rounded-lg border border-white/10 bg-[#161616] px-3.5 py-2.5 text-xs text-white placeholder-[#A1A1AA] focus:border-[#FF5500] focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="w-full rounded-lg border border-white/10 bg-[#161616] px-3.5 py-2.5 text-xs text-white placeholder-[#A1A1AA] focus:border-[#FF5500] focus:outline-none"
              />
            </div>

            <div className="mt-3">
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-lg border border-white/10 bg-[#161616] px-3.5 py-2.5 text-xs text-white placeholder-[#A1A1AA] focus:border-[#FF5500] focus:outline-none"
              />
            </div>

            <div className="mt-3">
              <textarea
                rows={2}
                required
                placeholder="Message"
                className="w-full resize-none rounded-lg border border-white/10 bg-[#161616] px-3.5 py-2.5 text-xs text-white placeholder-[#A1A1AA] focus:border-[#FF5500] focus:outline-none"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <Button type="submit" variant="primary">
                {submitted ? 'Sent!' : 'Submit'}
              </Button>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};
