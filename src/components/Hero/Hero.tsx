'use client';

import { useRef } from "react";
import styles from "@/styles/components/hero.module.scss";
import Image from "next/image";
import { heroContent } from "@/db/data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlinePlace } from "react-icons/md";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headerFocusRef = useRef<HTMLDivElement>(null);
    const headerFocusContentRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const counterDivRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        gsap.to(headerFocusContentRef.current, {
            y: "-2rem",
            duration: 0.8,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(headerFocusContentRef.current, {
            y: "0rem",
            duration: 0.8,
            ease: "power2.out",
        });
    };

    useGSAP(() => {
        if (!heroRef.current || !linksRef.current || !counterDivRef.current) return;

        const tl = gsap.timeline({});
        const linksTargets = linksRef.current.querySelectorAll("button, a");

        tl.fromTo(
            heroRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
            }
        ).fromTo(
            linksTargets,
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.2,
            },
            "-=0.5"
        );

        const counterDivTargets = counterDivRef.current.querySelectorAll(
            `.${styles.counter} .${styles.counterNumber}`
        );

        counterDivTargets.forEach((target) => {
            const endValue = parseInt(target.textContent || "0", 10);

            // Reset to 0
            target.textContent = "0";

            const counterObj = { val: 0 };
            gsap.to(counterObj, {
                val: endValue,
                duration: 2,
                ease: "circ.out",
                onUpdate: () => {
                    target.textContent = Math.floor(counterObj.val).toString();
                },
            });
        });
    }, { scope: heroRef });

    return (
        <section id="hero" className={styles.hero} ref={heroRef}>
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
                            <div
                                className={styles.headerFocus}
                                ref={headerFocusRef}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={styles.circle}></div>
                                <div className={styles.focusContent} ref={headerFocusContentRef}>
                                    <p>{heroContent.job}</p>
                                    <p>{heroContent.focus}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.heroText}>
                    <p>{heroContent.description}</p>
                </div>

                <div className={styles.heroLinks} ref={linksRef}>
                    <button>
                        <a
                            href="/Docs/Full-Stack-Resume.pdf"
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

            <section className={styles.counterDiv} ref={counterDivRef}>
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
