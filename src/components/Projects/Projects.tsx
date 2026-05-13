"use client";

import { projectsData } from "@/db/data";
import React from "react";
import styles from "@/styles/components/projects.module.scss";
import Project from "@/components/Projects/Project";

const Projects: React.FC = () => {
  return (
    <div id="projects" className={styles.projects}>
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
