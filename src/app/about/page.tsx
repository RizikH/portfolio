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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import { useGSAP } from '@gsap/react';

import MyScene from '@/components/About/scene';
import styles from '@/styles/about.module.css';
import FadeAnimation from '@/components/animations/FadeAnimation';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

export default function About() {
  const revealed = useRevealer();
  const { lenis } = useLenis();

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

  const [showScrollHint, setShowScrollHint] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

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

  // 💡 useGSAP for ScrollTrigger pinning
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 0',
      end: 'bottom bottom',
      pin: canvasRef.current,
      scrub: true,
    });
  }, { scope: containerRef });

  // 💡 useGSAP for scrambleText animation
  useGSAP(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 4,
        scrambleText: {
          text: textRef.current.textContent ?? '',
          chars: 'lowerCase',
          revealDelay: 2,
          speed: 0.3,
        },
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        ease: 'none',
      });
    }
  }, { scope: textRef });


  useGSAP(() => {
    if (stickyRef.current && stickyContainerRef.current) {
      const scrollAmount = window.innerHeight * 10; // 3vh in pixels

      // Split the text inside the pinned container into words
      const split = new SplitText(stickyContainerRef.current, {
        type: 'words'
      });

      // Animate the color of each word during scroll
      gsap.fromTo(
        split.words,
        {
          color: 'white'
        }, // starting color (or whatever it currently is)
        {
          color: 'black',
          stagger: 1,
          scrollTrigger: {
            trigger: stickyRef.current,
            start: 'top top',
            end: `+=${scrollAmount}`,
            pin: stickyContainerRef.current,
            scrub: true,
            markers: true,
            pinSpacing: true,
          }
        }
      );

      // Clean up SplitText DOM manipulation on unmount
      return () => split.revert();
    }
  }, { scope: stickyRef });




  return (
    <>
      <div className={`revealer ${revealed ? 'revealer--hidden' : ''}`}></div>
      <section className={styles.about}>
        <h1 ref={textRef}>Let me start with a little story</h1>
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


      <section style={{ width: '100vw', overflow: 'hidden' }} ref={stickyRef}>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', textAlign: 'center', height: '100vh', width: '100vw' }} ref={stickyContainerRef}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        </section>
      </section>

      <section style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}></section>


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