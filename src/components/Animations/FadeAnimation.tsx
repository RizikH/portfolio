'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export default function FadeInOnScroll({
  children,
  delay = 0,
  yOffset = 50,
  className = '',
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

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
    },
    { scope: ref, dependencies: [delay, yOffset] }
  );

  return (
    <div ref={ref} className={`${className}`}>
      {children}
    </div>
  );
}
