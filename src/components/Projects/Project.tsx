import React, { useState } from "react";
import styles from "@/styles/components/projects.module.scss";
import { Safari } from "@/components/magicui/safari";
import { Iphone } from "@/components/ui/iphone";
import { ProjectModal } from "@/components/ProjectModal/ProjectModal";
import type { ProjectData } from "@/db/data";

type ProjectProps = {
  data: ProjectData;
  index: number;
};

const Project: React.FC<ProjectProps> = ({ data, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.project} key={index}>
        {/* Project Image - Clickable */}
        <div
          className={styles.projectImage}
          style={data.wrapperType === "iphone" ? { width: "fit-content", margin: "0 auto" } : undefined}
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
          {data.wrapperType === "iphone" ? (
            <div data-phone-wrapper style={{ display: "inline-block" }}>
              <Iphone src={data.imageSrc} style={{ height: "60vh", maxHeight: "550px", width: "auto" }} />
            </div>
          ) : (
            <Safari url={data.url} className={"size-full"} imageSrc={data.imageSrc} />
          )}
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