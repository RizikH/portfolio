'use client';

import React from 'react';
import styles from '@/styles/components/about.module.scss';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  skills,
  certification,
} from '@/db/data';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutSectionRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(aboutSectionRef.current, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: 'top 100%',
        toggleActions: 'play none none reverse',
      },
    });
    const targets = aboutSectionRef.current?.querySelectorAll(`h2, .${styles.skillsContainer}, .${styles.skillsSection}, .${styles.certificationBadge}`);
    if (!targets) return;

    targets.forEach((target) => {
      gsap.from(target, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: target,
          start: 'top 100%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, { scope: aboutSectionRef });

  return (
    <section id="about" className={styles.about} ref={aboutSectionRef}>
      <h2 className='text-xl'>My Tech Stack</h2>
      <section className={styles.skillsContainer}>
        {skills.map((skillset, index) => (
          <section key={index} className={styles.skillsSection}>
            <h3 className="text-md text-[var(--muted)]">{skillset.title}</h3>
            <section className={styles.skillsList}>
              {skillset.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div key={i} className={styles.skills}>
                    <div className={styles.skill} title={skill.description}>
                      <div className={styles.icon}>
                        <Icon size={30} />
                      </div>
                      <span>{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </section>
          </section>
        ))}
      </section>

      {/* Certification Badge */}
      <div className={styles.certificationBadge}>
        <div className={styles.certIcon}>{certification.icon}</div>
        <div className={styles.certContent}>
          <p className={styles.certText}>
            <span className={styles.certStatus}>Currently pursuing:</span>{' '}
            <strong>{certification.title}</strong>
          </p>
          <p className={styles.certMeta}>
            {certification.provider} • Expected {certification.expectedCompletion}
          </p>
        </div>
      </div>
    </section>
  );
}