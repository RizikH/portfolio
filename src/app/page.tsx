'use client';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from "@/components/Contact/Contact";
import { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';
import type { LottieRefCurrentProps } from 'lottie-react';
import scrollAnimation from '@/components/Assets/scroll.json';
import styles from '@/styles/components/hero.module.scss';


const Lottie = dynamic(() => import('lottie-react').then(mod => mod.default), { ssr: false });
export default function Home() {
  const [showScrollHint, setShowScrollHint] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (window.scrollY < 100) {
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
      <Contact />

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
