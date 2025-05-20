'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}

export default function FadeInOnScroll({
  children,
  delay = 0,
  yOffset = 50,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: yOffset },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, yOffset]);

  return (
    <div ref={ref} style={{ opacity: 0, transform: `translateY(${yOffset}px)` }}>
      {children}
    </div>
  );
}
