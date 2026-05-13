'use client';

import styles from "@/styles/components/hero.module.scss";
import Image from "next/image";
import { heroContent } from "@/db/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlinePlace } from "react-icons/md";

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <section className={styles.heroContent}>
                <div className={styles.header}>
                    <Image
                        src={heroContent.image || "/placeholder.svg"}
                        alt="hero image"
                        width={80}
                        height={80}
                        className={styles.heroPic}
                    />
                    <div className={styles.headerText}>
                        <div className={styles.headerTitleContainer}>
                            <h1 className={styles.headerTitle}>{heroContent.title}</h1>
                            <div className="flex items-center justify-center gap-1 text-sm text-[var(--muted)]">
                                <MdOutlinePlace className={styles.locationIcon} />
                                <p>{heroContent.location}</p>
                            </div>
                            <div className={styles.headerFocus}>
                                <div className={styles.circle}></div>
                                <div className={styles.focusContent}>
                                    <p>{heroContent.job}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.heroText}>
                    <p>{heroContent.description}</p>
                </div>

                <div className={styles.heroLinks}>
                    <button>
                        <a
                            href="/Docs/RizikHaddad_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            View Resume
                        </a>
                    </button>
                    <a
                        href="https://www.github.com/rizikh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className={styles.heroIcon} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rizik-haddad-075443266/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className={styles.heroIcon} />
                    </a>
                    <a href="mailto:rizig.haddad.rh@gmail.com">
                        <MdEmail className={styles.heroIcon} />
                    </a>
                </div>
            </section>

            <section className={styles.counterDiv}>
                {heroContent.counters.map((counter, index) => (
                    <div className={styles.counter} key={index}>
                        <div className='flex gap-1 items-center'>
                            <span className={styles.counterNumber}>{counter.count}</span>
                            {counter.addition && <span className='text-2xl'>{counter.addition}</span>}
                        </div>
                        <span className={styles.counterLabel}>{counter.label}</span>
                    </div>
                ))}
            </section>
        </section>
    );
}
