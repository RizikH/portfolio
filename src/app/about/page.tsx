'use client';

import React, { useEffect, useRef, useState } from 'react';
import scrollAnimation from '@/app/assets/scroll.json';
import dynamic from 'next/dynamic';
import '@/app/globals.css';
import { useRevealer } from '@/app/hooks/useRevealer';
import { useLenis } from '@/app/context/lenisContext';

const Lottie = dynamic(() => import('lottie-react').then(mod => mod.default), { ssr: false });
import type { LottieRefCurrentProps } from 'lottie-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import TextReveal from '@/components/animations/TextAnimation';
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useRevealer();
  const { lenis } = useLenis(); // ✅ moved here — top level

  const [showScrollHint, setShowScrollHint] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    lenis?.start(); // ✅ safe to call here

    const handleScroll = () => {
      setShowScrollHint(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        if (window.scrollY < 30) {
          setShowScrollHint(true);
        }
      }, 5000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lenis]);

  return (
    <>
      <div className="revealer"></div>

      <section className="about">
        <TextReveal delay={2}>
          <h1>Hi, I&apos;m a designer and developer.</h1>
        </TextReveal>
      </section>

      <section className="projects"></section>

      {showScrollHint && (
        <div className="scroll-hint">
          <Lottie
            lottieRef={lottieRef}
            animationData={scrollAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 100, height: 100 }}
          />
        </div>
      )}
    </>
  );
}
