'use client';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import type { LottieRefCurrentProps } from 'lottie-react';
import styles from '@/styles/components/hero.module.css';
import scrollAnimation from '@/components/Assets/scroll.json';
import Image from 'next/image';
import githubIcon from '../../../public/icons/contact/github.png';
import linkedinIcon from '../../../public/icons/contact/linkedin.png';
import emailIcon from '../../../public/icons/contact/email.png';

import {
    heroContent,
}
    from '@/db/data';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';



const Lottie = dynamic(() => import('lottie-react').then(mod => mod.default), { ssr: false });

export default function Hero() {
    const [showScrollHint, setShowScrollHint] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollHint(false);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                if (window.scrollY < 100) {
                    setShowScrollHint(true);
                }
            }, 5000);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (showScrollHint && lottieRef.current) {
            lottieRef.current.stop();
            lottieRef.current.play();
        }
    }, [showScrollHint]);


    useGSAP(() => {
        if (!imageContainerRef.current || !imageRef.current || !heroRef.current || !linksRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.fromTo(
            heroRef.current,
            { opacity: 0, },
            { opacity: 1, duration: 0.2, ease: 'power2.out' }
        )
            .fromTo(
                imageContainerRef.current,
                { opacity: 0 },
                { opacity: 1, delay: 2 },
                '-=0.5'
            )
            .fromTo(
                imageRef.current,
                { x: 0, y: 0 },
                { x: -15, y: -15, duration: 0.4, ease: 'power2.inOut' },
                '-=0.3'
            )
            .fromTo(
                heroRef.current.querySelectorAll('h2, h3, h4, p, button'),
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                }
            )
            .fromTo(
                linksRef.current.querySelector('div'),
                { width: 0 },
                { width: '5rem', duration: 0.5, ease: 'power2.out' },
            )

            .fromTo(
                linksRef.current.querySelectorAll('a'), {
                x: -40,
                opacity: 0,
            },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.1,
                    stagger: 0.25,
                }, '-=0.3'
            );
    }, { scope: heroRef });


    return (
        <>
            <section id='hero' className={styles.hero} ref={heroRef}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <div className={styles.header}>
                            <h2>{heroContent.title}</h2>
                            <div className={styles.links} ref={linksRef}>
                                <div className={styles.line}></div>
                                <a href="mailto:rizig.haddad.rh@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Github" className={styles.link}>
                                    <Image
                                        title='Email'
                                        src={emailIcon}
                                        alt="Email"
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </a>
                                <a href="https://github.com/RizikH" target="_blank" rel="noopener noreferrer" aria-label="Github" className={styles.link}>
                                    <Image
                                        title='Github'
                                        src={githubIcon}
                                        alt="Github"
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/rizik-haddad-075443266/" target="_blank" rel="noopener noreferrer" aria-label="Github" className={styles.link}>
                                    <Image
                                        title='LinkedIn'
                                        src={linkedinIcon}
                                        alt="linkedin"
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </a>
                            </div>
                            <h3>{heroContent.job + ' - ' + heroContent.focus}</h3>
                            <h4>{heroContent.location}</h4>
                        </div>
                        <p>{heroContent.description}</p>
                        <button>
                            <a href="/Docs/Full-Stack-Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume PDF">
                                My Resume
                            </a>
                        </button>
                    </div >

                    <div ref={imageContainerRef}>
                        <div className={`${styles.heroImage} ${styles.extra}`}></div>
                        <div className={styles.heroImage} ref={imageRef}>
                            <Image
                                src={heroContent.image}
                                alt="Hero Image"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {showScrollHint && (
                <div className={styles.scrollHint}>
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={scrollAnimation}
                        loop={true}
                        style={{ width: 100, height: 100 }}
                    />
                </div>
            )}
        </>
    )
};