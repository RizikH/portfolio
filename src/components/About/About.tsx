'use client';

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/components/about.module.scss';

import {
  skills,
} from '@/db/data';

gsap.registerPlugin(ScrollTrigger);

export default function About() {


  return (
    <section id="about" className={styles.about}>
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
                      <Icon size={30} />
                      <span>{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}
