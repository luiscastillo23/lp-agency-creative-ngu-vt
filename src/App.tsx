import React from 'react';
import { PageContainer } from './components/layout/PageContainer';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './features/landing/components/HeroSection';
import { ValueBentoSection } from './features/landing/components/ValueBentoSection';
import { GrowthStatsSection } from './features/landing/components/GrowthStatsSection';
import { StepContactSection } from './features/landing/components/StepContactSection';
import { TestimonialsSection } from './features/landing/components/TestimonialsSection';
import { ConceptArcSection } from './features/landing/components/ConceptArcSection';

export const App: React.FC = () => {
  return (
    <PageContainer>
      <main>
        <HeroSection />
        <ValueBentoSection />
        <GrowthStatsSection />
        <StepContactSection />
        <TestimonialsSection />
        <ConceptArcSection />
      </main>
      <Footer />
    </PageContainer>
  );
};

export default App;
