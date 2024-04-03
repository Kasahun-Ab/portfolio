import { useState, useEffect } from 'react';


export const useScrollAnimation = (offsetThreshold: number): boolean => {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      if (yOffset >= offsetThreshold && !hasAnimated) {
        setShouldAnimate(true);
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offsetThreshold, hasAnimated]);

  return shouldAnimate;
};
