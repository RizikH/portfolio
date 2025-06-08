"use client";

import { projectsData } from "@/db/data";
import React, { useRef } from "react";
import styles from "@/styles/components/projects.module.scss";
import Project from "@/components/Projects/Project";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!projectsRef.current) return;

    gsap.fromTo(projectsRef.current, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });

    const target = projectsRef.current.querySelector(`.${styles.projectsTitle}`);
    gsap.from(target, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
  }, [projectsRef]);

  return (
    <div className={styles.projects} ref={projectsRef}>
      <h2 className='text-xl'>Selected Projects</h2>
      <div className={styles.projectsContainer}>
        {projectsData.Projects.map((project, i) => (
          <Project
            key={i}
            index={i}
            data={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
