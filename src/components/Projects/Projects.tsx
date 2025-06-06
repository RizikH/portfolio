"use client";

import { projectsData } from "@/db/data";
import React, { useState, useRef } from "react";
import styles from "@/styles/components/projects.module.scss";
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
