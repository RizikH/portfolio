"use client";
import { projectsData } from "@/db/data";
import React from "react";
import styles from "@/styles/components/projects.module.css";
import Project from "@/components/Projects/Project";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
    return (
        <div id="projects" className={`${styles.projects}`}>
            <h2 className={`${styles.projectsTitle}`}>Selected Projects</h2>
            <div className={`${styles.projectsContainer}`}>
                {projectsData.Projects.map((project, i) => (
                    <Project key={i} index={i} data={project} />
                ))}
            </div>
        </div>
    );
};
export default Projects;