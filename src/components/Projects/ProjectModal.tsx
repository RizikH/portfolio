'use client';

import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "@/styles/components/projectModal.module.css";
import Image from "next/image";
import StackIcon from "tech-stack-icons";
import gsap from "gsap";
import { useLenis } from "@/components/Context/lenisContext";
import Scrollbar from "smooth-scrollbar";

type ProjectType = {
    slug: string;
    name: string;
    imageSrc: string;
    stack: string[];
    description: string;
    liveDemo: string;
    sourceCode: string;
};

type ProjectModalProps = {
    project: ProjectType;
    onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const scrollbarRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const scrollbarInstanceRef = useRef<Scrollbar | null>(null);
    const lenis = useLenis();

    useEffect(() => {
        // Pause layout scroll
        lenis?.stop();
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        const container = scrollbarRef.current;

        if (container) {
            const instance = Scrollbar.init(container, {
                damping: 0.1,
                alwaysShowTracks: true,
            });
            scrollbarInstanceRef.current = instance;
        }

        return () => {
            scrollbarInstanceRef.current?.destroy();
            lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [lenis]);

    useEffect(() => {
        const target = modalRef.current;
        if (target) {
            gsap.fromTo(
                target,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
            );
        }
    }, []);

    return ReactDOM.createPortal(
        <div
            className={styles.projectOverlayContainer}
            onClick={onClose}
        >
            <div
                className={styles.projectOverlay}
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
            >
                <div className={styles.scrollContent} ref={scrollbarRef}>
                    <div className={styles.closeButtonDiv}>
                        <button onClick={onClose}>
                            <span className={styles.closeIcon}>&times;</span>
                        </button>
                    </div>
                    {/* <Image src={project.imageSrc} alt={project.name} /> */}
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={styles.stackIcons}>
                        {project.stack.map((skill, i) => (
                            <div key={i} className={styles.stackIcon}>
                                <StackIcon name={skill.toLowerCase().replace(/\s|\./g, "")} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.projectLinks}>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ProjectModal;
