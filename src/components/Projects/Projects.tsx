"use client";

import { projectsData } from "@/db/data";
import React, { useState, useRef } from "react";
import styles from "@/styles/components/projects.module.css";
import Project from "@/components/Projects/Project";
import ProjectModal from "@/components/Projects/ProjectModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type ProjectType = {
  slug: string;
  name: string;
  imageSrc: string;
  stack: string[];
  description: string;
  liveDemo: string;
  sourceCode: string;
};

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);

  useGSAP(() => {
    if (!projectsRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 90%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        scrub: false,
        markers: false,
      },
      defaults: { ease: "sine.out", duration: 0.7 },
    });

    tl.fromTo(
      projectsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    ).fromTo(
      projectsRef.current.querySelector(`.${styles.projectsTitle}`),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 },
      "-=0.3"
    );
  }, []);

  return (
    <div className={styles.projects} ref={projectsRef}>
      <h2 className={styles.projectsTitle}>Selected Projects</h2>
      <div className={styles.projectsContainer}>
        {projectsData.Projects.map((project, i) => (
          <Project
            key={i}
            index={i}
            data={project}
            onOpenModal={() => setActiveProject(project)}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
