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
import FadeAnimation from '@/components/animations/FadeAnimation';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useRevealer();

  const panels = [
    {
      title: '2011',
      description:
        "This is where it all began. My parents took me to a concert that had a gaming bus parked outside—basically a mobile arcade. That's where I first played Flash games... and used the internet. I didn’t know it then, but that moment sparked everything.",
    },
    {
      title: '2016',
      description:
        "I was completely hooked. I started teaching myself Visual Basic. Internet access where I lived wasn’t great, so I had to pre-download tutorials at a painful 675 KBps. It was frustrating, but I loved every second of it.",
    },
    {
      title: '2018',
      description:
        "Things picked up. The internet got faster, and so did my learning. Then my family moved to the U.S. Adapting to a new country and learning English was overwhelming. A month in, we moved again—this time to North Carolina. I enrolled in community college to chase a degree in science.",
    },
    {
      title: '2022',
      description:
        "After knocking out my prereqs, I joined the Computer Science program at UNCG. That's where everything leveled up. I built real-world projects in Java, C, and Assembly, and even led a team on a GitHub-inspired collaboration platform. That experience taught me how to lead, communicate, and actually build things that mattered.",
    },
    {
      title: '2025',
      description:
        "I made it. Graduated from UNCG with a CS degree and a math minor. Looking back, every challenge along the way pushed me closer to who I am today. A developer who loves solving problems and building stuff that matters.",
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

  useEffect(() => {

    ScrollTrigger.create({

    })
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
              <FadeAnimation>
                <h2>{panel.title}</h2>
                <p>{panel.description} </p>
              </FadeAnimation>
            </section>
          ))}
        </div>

        <div className={styles.canvasWrapper} ref={canvasRef}>
          <MyScene />
        </div>
      </section>

      <section className={styles.aboutme}>
        <section className={styles.aboutmeHeader}>
          <h1>About Me</h1>
          <div className={styles.divider}></div>
          <p>Over the past few years I&apos;ve dabaled in a bit of everything, from Assymbly and java to JavaScript and PHP.</p>
        </section>
        <section className={styles.aboutmeContent}>
          <section className={styles.left}>
            <FadeAnimation>
              <h2>Current Focus</h2>
              <section className={styles.leftText}>
                <p>
                  Lately, I&apos;ve been diving deep into React.js, Next.js, and React Three Fiber to craft visually rich, 3D-enhanced web experiences.
                  There&apos;s always more to learn and I&apos;m here for it.
                </p>

                <p>
                  My main interest lies in Full-Stack development. I&apos;m endlessly curious and driven to understand the fine details behind how things work.
                  I&apos;m the kind of person who will spend every day learning, exploring breakthroughs, and refining best practices because there&apos;s beauty in evolution.
                </p>

                <p>
                  I&apos;m currently seeking full-time Software Development opportunities where I can apply my skills, share my curiosity, and grow through collaboration.
                  I&apos;m excited to learn, build, and make something that matters.
                </p>
              </section>
            </FadeAnimation>
          </section>
          <section className={styles.right}>
            <section className={styles.SkillsWrapper}>
              <section className={styles.skillsSection}>
                <FadeAnimation>
                  <h2>Core Skills</h2>
                  <section className={styles.skillsList}>
                    <div className={styles.skills}>JavaScript</div>
                    <div className={styles.skills}>TypeScript</div>
                    <div className={styles.skills}>React.js</div>
                    <div className={styles.skills}>Next.Js</div>
                    <div className={styles.skills}>Node.js</div>
                    <div className={styles.skills}>Express.js</div>
                    <div className={styles.skills}>Java</div>
                    <div className={styles.skills}>Python</div>
                    <div className={styles.skills}>C</div>
                    <div className={styles.skills}>RESTful APIs</div>
                    <div className={styles.skills}>MVC Architecture</div>
                    <div className={styles.skills}>Git</div>
                    <div className={styles.skills}>GitHub</div>
                    <div className={styles.skills}>Docker</div>
                  </section>
                </FadeAnimation>
              </section>
              <section className={styles.skillsSection}>
                <FadeAnimation>
                  <h2>Additional Skills</h2>
                  <section className={styles.skillsList}>
                    <div className={styles.skills}>C++</div>
                    <div className={styles.skills}>Assembly (x86)</div>
                    <div className={styles.skills}>Firebase Realtime Database</div>
                    <div className={styles.skills}>Laravel</div>
                    <div className={styles.skills}>React Three Fiber (R3F)</div>
                    <div className={styles.skills}>Multithreading & Concurrency</div>
                  </section>
                </FadeAnimation>
              </section>
              <section className={styles.skillsSection}></section>
            </section>
          </section>
        </section>

      </section>




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