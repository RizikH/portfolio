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
import MyScene from '@/components/About/scene';
import styles from '@/styles/about.module.css';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useRevealer();

  const panels = [
    {
      title: '2011',
      description:
        "This is where it all began. My parents took me to a concert that had a gaming bus parked outside—basically a mobile arcade. That’s where I first played Flash games... and used the internet. I didn’t know it then, but that moment sparked everything.",
    },
    {
      title: '2016',
      description:
        "I was completely hooked. I started teaching myself Visual Basic—hardly beginner-friendly. Internet access where I lived wasn’t great, so I had to pre-download tutorials at a painful 675 KBps. It was frustrating, but I loved every second of it.",
    },
    {
      title: '2018',
      description:
        "Things picked up. The internet got faster, and so did my learning. Then my family moved to the U.S. Adapting to a new country and learning English was overwhelming. A month in, we moved again—this time to North Carolina. I enrolled in community college to chase a degree in science.",
    },
    {
      title: '2022',
      description:
        "After knocking out my prereqs, I joined the Computer Science program at UNCG. That’s where everything leveled up. I built real-world projects in Java, C, and Assembly, and even led a team on a GitHub-inspired collaboration platform. That experience taught me how to lead, communicate, and actually build things that mattered.",
    },
    {
      title: '2025',
      description:
        "I made it. Graduated from UNCG with a CS degree and a math minor. Looking back, every challenge along the way pushed me closer to who I am today—a developer who loves solving problems and building stuff that matters.",
    },
  ];


  const { lenis } = useLenis();

  const [showScrollHint, setShowScrollHint] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  lottieRef.current?.stop();

  useEffect(() => {
    lenis?.start();
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
  }, [lenis]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 0',
      end: 'bottom bottom',
      pin: canvasRef.current,
      scrub: true,
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      <div className="revealer"></div>

      <section className={styles.about}>
        <TextReveal delay={0.2}>
          <h1>Let me start with a little story</h1>
        </TextReveal>
      </section>

      <section className={styles.aboutStory} ref={containerRef}>
        <div className={styles.textPanels}>
          {panels.map((panel, index) => (
            <section className={styles.textSlide} key={index}>
              <TextReveal delay={0.2}>
                <h2>{panel.title}</h2>
                <p>{panel.description}</p>
              </TextReveal>
            </section>
          ))}
        </div>

        <div className={styles.canvasWrapper} ref={canvasRef}>
          <MyScene />
        </div>
      </section>

      <section style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>After sticky section</h1>
      </section>




      {showScrollHint && (
        <div className="scroll-hint">
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