import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "@/styles/components/projects.module.css";
import StackIcon from 'tech-stack-icons';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


type ProjectProps = {
    data: {
        name: string;
        image: StaticImageData;
        stack: string[];
        description: string;
        liveDemo: string;
        sourceCode: string;
    };
    index: number;
};

const Project: React.FC<ProjectProps> = ({ data, index }) => {
    const projectRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!projectRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectRef.current,
                start: "top 80%",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                scrub: false,
                markers: false,
            },
            defaults: { ease: "power2.out", duration: 0.6 }, // 🔹 faster overall
        });

        const details = projectRef.current.querySelector(`.${styles.projectDetails}`);
        const children = details?.querySelectorAll("h3, p, .stackIcons, .projectLinks");
        const iconContainer = details?.querySelector(`.${styles.stackIcons}`);
        const icons = iconContainer?.querySelectorAll(`.${styles.stackIcon}`);

        tl.fromTo(
            projectRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 }
        ).fromTo(
            projectRef.current.querySelector(`.${styles.projectImage}`),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0 },
            "-=0.3"
        );

        if (children?.length && icons?.length) {
            tl.fromTo(
                children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, stagger: 0.07 },
                "-=0.3"
            ).fromTo(
                icons,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, stagger: 0.07, clearProps: "transform" },
                "-=0.3"
            );
        }

    }, [projectRef]);




    return (
        <>
            <div className={styles.project} key={index} ref={projectRef}>
                <div className={styles.projectImage}>
                    <Image src={data.image} alt={data.name} />
                </div>
                <div className={styles.projectDetails}>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                    <div className={styles.stackIcons}>
                        {data.stack.map((skill, i) => (
                            <div key={i} title={skill} className={styles.stackIcon}>
                                <StackIcon
                                    name={skill.toLowerCase().replace(/\s|\./g, '')}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.projectLinks}>
                        {data.liveDemo && data.liveDemo.trim() !== '' && (
                            <a href={data.liveDemo} target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        )}

                        {data.sourceCode && data.sourceCode.trim() !== '' && (
                            <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;