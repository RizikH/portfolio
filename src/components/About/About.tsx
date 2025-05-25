'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

import styles from '@/styles/components/about.module.css';
import FadeAnimation from '@/components/Animations/FadeAnimation';


import {
  aboutHeader,
  aboutFocus,
  coreSkills,
  additionalSkills,
} from '@/db/data';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

export default function About() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const coreSkillsRef = useRef<HTMLDivElement>(null);
  const additionalSkillsRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    gsap.fromTo(
      aboutMeRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -100,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutMeRef.current,
          start: 'bottom 20%',
          toggleActions: 'play none none reverse',
          scrub: true,
        },
      }
    );
  }, { scope: aboutMeRef });

  useGSAP(() => {
    if (!coreSkillsRef.current) return;

    const targets = coreSkillsRef.current.querySelectorAll<HTMLElement>('.' + styles.skills);
    console.log(targets);

    gsap.from(targets, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: coreSkillsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: coreSkillsRef });

  useGSAP(() => {
    if (!additionalSkillsRef.current) return;

    const targets = additionalSkillsRef.current.querySelectorAll<HTMLElement>('.' + styles.skills);
    console.log(targets);

    gsap.from(targets, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: additionalSkillsRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: additionalSkillsRef });


  return (
    <section id="about" className={styles.aboutme}>
      <section className={styles.aboutmeHeader}>
        <FadeAnimation>
          <h1>{aboutHeader.title}</h1>
        </FadeAnimation>
        <FadeAnimation>
          <div className={styles.divider}></div>
        </FadeAnimation>
        <FadeAnimation>
          <p>{aboutHeader.description}</p>
        </FadeAnimation>
      </section>

      <section className={styles.aboutmeContent} ref={aboutMeRef}>
        <section className={styles.left}>
          <FadeAnimation>
            <h2 className={styles.focusHeading}>{aboutFocus.heading}</h2>
          </FadeAnimation>
          <section className={styles.leftText}>
            {aboutFocus.paragraphs.map((text, i) => (
              <FadeAnimation key={i}>
                <p>{text}</p>
              </FadeAnimation>
            ))}
          </section>
        </section>

        <section className={styles.right}>
          <section className={styles.skillsWrapper}>
            <section className={styles.skillsSection}>
              <FadeAnimation>
                <h2 className={styles.focusHeading}>Core Skills</h2>
                <section className={styles.skillsList} ref={coreSkillsRef}>
                  {coreSkills.map((skill, i) => (
                    <div key={i} className={styles.skills}>
                      {skill}
                    </div>
                  ))}
                </section>
              </FadeAnimation>
            </section>

            <section className={styles.skillsSection} ref={additionalSkillsRef}>
              <FadeAnimation>
                <h2 className={styles.focusHeading}>Additional Skills</h2>
                <section className={styles.skillsList}>
                  {additionalSkills.map((skill, i) => (
                    <div key={i} className={`${styles.skills} ${styles.additionalSkills}`}>
                      {skill}
                    </div>
                  ))}
                </section>
              </FadeAnimation>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
