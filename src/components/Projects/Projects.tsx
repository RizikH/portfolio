"use client";
import { projectsData } from "@/db/data";
import React from "react";
import styles from "@/styles/components/projects.module.css";
import Project from "@/components/Projects/Project";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type ProjectsProps = Record<string, never>;


const Projects: React.FC<ProjectsProps> = () => {
    const projectsRef = React.useRef<HTMLDivElement>(null);

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
    }, [projectsRef]);

    return (
        <div id="projects" className={`${styles.projects}`} ref={projectsRef}>
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