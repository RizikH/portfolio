'use client';

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { ProjectData } from '@/db/data';
import styles from '@/styles/components/project-modal.module.scss';
import { IoClose } from 'react-icons/io5';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.dialogWrapper} onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter={styles.backdropEnter}
          enterFrom={styles.backdropEnterFrom}
          enterTo={styles.backdropEnterTo}
          leave={styles.backdropLeave}
          leaveFrom={styles.backdropLeaveFrom}
          leaveTo={styles.backdropLeaveTo}
        >
          <div className={styles.backdrop} aria-hidden="true" />
        </Transition.Child>

        {/* Modal Container */}
        <div className={styles.modalContainer}>
          <div className={styles.modalCentering}>
            <Transition.Child
              as={Fragment}
              enter={styles.panelEnter}
              enterFrom={styles.panelEnterFrom}
              enterTo={styles.panelEnterTo}
              leave={styles.panelLeave}
              leaveFrom={styles.panelLeaveFrom}
              leaveTo={styles.panelLeaveTo}
            >
              <Dialog.Panel className={styles.modalPanel}>
                {/* Header - Sticky */}
                <div className={styles.modalHeader}>
                  <div className={styles.headerContent}>
                    <Dialog.Title className={styles.modalTitle}>
                      {project.name}
                    </Dialog.Title>
                    <p className={styles.modalTagline}>{project.tagline}</p>
                  </div>
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                {/* Content - Scrollable */}
                <div className={styles.modalContent}>
                  {/* Hero Image */}
                  <div className={styles.heroImageContainer}>
                    <Image
                      src={project.imageSrc}
                      alt={`${project.name} preview`}
                      width={1200}
                      height={675}
                      className={styles.heroImage}
                      priority
                    />
                  </div>

                  {/* Overview */}
                  <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Overview</h3>
                    <p className={styles.overview}>{project.overview}</p>
                  </section>

                  {/* Divider */}
                  <div className={styles.divider} />

                  {/* Key Features */}
                  <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Key Features</h3>
                    <ul className={styles.featureList}>
                      {project.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <span className={styles.featureBullet}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Divider */}
                  <div className={styles.divider} />

                  {/* Technical Challenges */}
                  <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Technical Challenges</h3>
                    <div className={styles.challengesList}>
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className={styles.challengeItem}>
                          <div className={styles.challengeHeader}>
                            <span className={styles.challengeIcon}>🔧</span>
                            <h4 className={styles.challengeTitle}>{challenge.title}</h4>
                          </div>
                          <div className={styles.challengeContent}>
                            <div className={styles.challengeBlock}>
                              <span className={styles.challengeLabel}>Problem:</span>
                              <p className={styles.challengeText}>{challenge.problem}</p>
                            </div>
                            <div className={styles.challengeBlock}>
                              <span className={styles.challengeLabel}>Solution:</span>
                              <p className={styles.challengeText}>{challenge.solution}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Divider */}
                  <div className={styles.divider} />

                  {/* Tech Stack */}
                  <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Tech Stack</h3>
                    <div className={styles.techStack}>
                      {project.stack.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <div key={index} className={styles.techItem} title={tech.description}>
                            <Icon size={32} />
                            <span className={styles.techName}>{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* CTA Buttons */}
                  <div className={styles.ctaContainer}>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.ctaButton} ${styles.secondaryButton}`}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.ctaButton} ${styles.secondaryButton}`}
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};