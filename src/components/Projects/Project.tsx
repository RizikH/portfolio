import React from "react";
import styles from "@/styles/components/projects.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Safari } from "@/components/magicui/safari";
import { useIsMobile } from "@/components/Hooks/useIsMobile";

type StackItem = {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  description: string;
};

type ProjectProps = {
  data: {
    slug: string;
    name: string;
    url: string;
    imageSrc: string;
    stack: StackItem[];
    description: string;
    liveDemo: string;
    sourceCode: string;
  };
  index: number;
};

const Project: React.FC<ProjectProps> = ({ data, index }) => {
  const projectRef = React.useRef<HTMLDivElement>(null);
  const projectImageRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMouseEnter = (): void => {
    const svg = projectImageRef.current?.querySelector("svg");
    if (svg) {
      gsap.to(svg, {
        y: 0,
        duration: 0.01,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (): void => {
    const svg = projectImageRef.current?.querySelector("svg");
    if (svg) {
      gsap.to(svg, {
        y: 20,
        duration: 0.01,
        ease: "power2.out",
      });
    }
  };

  useGSAP(() => {
    if (!projectRef.current) return;

    const targets = projectRef.current.querySelectorAll(
      `.${styles.projectImage}, .${styles.projectDetails}`
    );

    targets.forEach((target) => {
      gsap.from(target, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: target,
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, [projectRef]);

  return (
    <div className={styles.project} key={index} ref={projectRef}>
      <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
        <div
          className={styles.projectImage}
          ref={projectImageRef}
          onMouseEnter={!isMobile ? handleMouseEnter : undefined}
          onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        >

          <Safari
            url={data.url}
            className={"size-full"}
            imageSrc={data.imageSrc}
          />
        </div>
      </a>
      <div className={styles.projectDetails}>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <div className={styles.stackIcons}>
          {data.stack.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={i} className={styles.skill} title={skill.name}>
                <div className={styles.icon}>
                  <Icon size={30} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.projectLinks}>
          {data.liveDemo && (
            <a href={data.liveDemo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {data.sourceCode && (
            <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
