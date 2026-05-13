'use client';

import React from 'react';
import styles from '@/styles/components/about.module.scss';
import { skills } from '@/db/data';

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


    </section>
  );
}