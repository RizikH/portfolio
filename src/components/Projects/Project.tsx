import React, { useState } from "react";
import styles from "@/styles/components/projects.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Safari } from "@/components/magicui/safari";
import { useIsMobile } from "@/components/Hooks/useIsMobile";
import { ProjectModal } from "@/components/ProjectModal/ProjectModal";
import type { ProjectData } from "@/db/data";

type ProjectProps = {
  data: ProjectData;
  index: number;
};

const Project: React.FC<ProjectProps> = ({ data, index }) => {
  const projectRef = React.useRef<HTMLDivElement>(null);
  const projectImageRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    <>
      <div className={styles.project} key={index} ref={projectRef}>
        {/* Project Image - Clickable */}
        <div
          className={styles.projectImage}
          ref={projectImageRef}
          onMouseEnter={!isMobile ? handleMouseEnter : undefined}
          onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          onClick={handleOpenModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpenModal();
            }
          }}
          aria-label={`View details for ${data.name}`}
        >
          <Safari
            url={data.url}
            className={"size-full"}
            imageSrc={data.imageSrc}
          />
        </div>

        {/* Project Details */}
        <div className={styles.projectDetails}>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          
          {/* Stack Icons */}
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

          {/* Project Links */}
          <div className={styles.projectLinks}>
            <button
              onClick={handleOpenModal}
              className={styles.detailsButton}
            >
              View Details
            </button>
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

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={data}
      />
    </>
  );
};

export default Project;