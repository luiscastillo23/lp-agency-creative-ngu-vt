import { useState, useCallback } from 'react';

export function useCarousel(totalItems: number, initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return { activeIndex, next, prev, goTo };
}
