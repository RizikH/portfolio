import React from "react";
import styles from "@/styles/components/projects.module.scss";
import StackIcon from "tech-stack-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Safari } from "@/components/magicui/safari"

type ProjectProps = {
  data: {
    slug: string;
    name: string;
    imageSrc: string;
    stack: string[];
    description: string;
    liveDemo: string;
    sourceCode: string;
  };
  index: number;
  onOpenModal: () => void;
};

const Project: React.FC<ProjectProps> = ({ data, index, onOpenModal }) => {
  const projectRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!projectRef.current) return;

    const targets = projectRef.current.querySelectorAll(`.${styles.projectImage}, .${styles.projectDetails}`);

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
      <div className={styles.projectImage} onClick={onOpenModal}>
        <Safari
          url="ihive.vercel.app"
          className={"size-full"}
          imageSrc={data.imageSrc}
        />
        {/* <Image src={data.image} alt={data.name} /> */}
      </div>
      <div className={styles.projectDetails}>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <div className={styles.stackIcons}>
          {data.stack.map((skill, i) => (
            <div key={i} title={skill} className={styles.stackIcon}>
              <StackIcon name={skill.toLowerCase().replace(/\s|\./g, "")} />
            </div>
          ))}
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
