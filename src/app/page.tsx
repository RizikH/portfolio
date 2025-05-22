'use client';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import type { LottieRefCurrentProps } from 'lottie-react';
import styles from '@/styles/components/about.module.css';
import scrollAnimation from '@/components/assets/scroll.json';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';




const Lottie = dynamic(() => import('lottie-react').then(mod => mod.default), { ssr: false });
export default function Home() {
  const [showScrollHint, setShowScrollHint] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);


  lottieRef.current?.stop();

  useEffect(() => {
    lottieRef.current?.play();

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
  }, []);


  return (
    <>
      <Hero />
      <About />
      <Projects />

      {showScrollHint && (
        <div className={styles.scrollHint}>
          <Lottie
            lottieRef={lottieRef}
            animationData={scrollAnimation}
            loop={true}
            style={{ width: 100, height: 100 }}
          />
        </div>
      )}
    </>
  );
}