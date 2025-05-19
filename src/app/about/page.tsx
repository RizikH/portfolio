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

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useRevealer();

  const panels = [
    {
      title: '2011',
      description:
        "This is where it all started. My parents took me to a concert that featured a gaming station bus. It was my first time playing Flash games — and my first time using the internet.",
    },
    {
      title: '2016',
      description:
        "By now, I was already hooked. I started teaching myself Visual Basic — not an easy feat. In my hometown, the internet wasn't nearly as accessible as in the United States. I had to pre-download videos and tutorials at approximately 675 KBps. It wasn't enjoyable, but I kept going.",
    },
    {
      title: '2018',
      description:
        "With improved internet access, I was learning faster and falling deeper in love with programming. Then, my family moved to the United States. Learning a new language and culture wasn't easy — I had to adapt quickly. A month later, we relocated from New York to North Carolina, where I enrolled in community college to pursue an Associate of Science.",
    },
    {
      title: '2022',
      description:
        "After completing my prerequisites, I joined the Computer Science program at UNCG. There, I gained real-world programming experience — from Java and OOP to C and Assembly. I led a team of four to build a Shark Tank–style GitHub-inspired collaboration platform. It was my first time in a leadership role, and it taught me how to work with others, communicate effectively, and grow as a leader and developer.",
    },
    {
      title: '2025',
      description:
        "I graduated from UNCG with a Bachelor’s in Computer Science and a minor in Mathematics. Through all the challenges, I persevered and found my path. My passion for programming only deepened, and I discovered who I am and what I want to build.",
    },
  ];


  const { lenis } = useLenis();

  const [showScrollHint, setShowScrollHint] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      start: 'top top',
      end: 'bottom bottom',
      pin: '.canvas-wrapper',
      scrub: true,
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      <div className="revealer"></div>

      <section className="about">
        <TextReveal delay={0.2}>
          <h1>Let me start with a little story</h1>
        </TextReveal>
      </section>

      <section className="aboutStory" ref={containerRef}>
        <div className="text-panels">
          {panels.map((panel, index) => (
            <section className="text-slide" key={index}>
              <TextReveal delay={0.2}>
                <h2>{panel.title}</h2>
                <p>{panel.description}</p>
              </TextReveal>
            </section>
          ))}
        </div>

        <div className="canvas-wrapper">
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
