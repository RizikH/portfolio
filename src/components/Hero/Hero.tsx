'use client';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import type { LottieRefCurrentProps } from 'lottie-react';
import styles from '@/styles/components/hero.module.css';
import scrollAnimation from '@/components/Assets/scroll.json';
import Image from 'next/image';
import {
    heroContent,
}
    from '@/db/data';



const Lottie = dynamic(() => import('lottie-react').then(mod => mod.default), { ssr: false });

export default function Hero() {
    const [showScrollHint, setShowScrollHint] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

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

    return (
        <>

            <section id='hero' className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <div className={styles.header}>
                            <h2>{heroContent.title}</h2>
                            <h3>{heroContent.job}</h3>
                            <h4>{heroContent.location}</h4>
                        </div>
                        <p>{heroContent.description}</p>
                        <button>My resume</button>
                    </div>

                    <div className={`${styles.heroImage} ${styles.extra}`}></div>
                    <div className={styles.heroImage}>
                        <Image
                            src={heroContent.image}
                            alt="Hero Image"
                            width={300}
                            height={300}
                            priority
                        />
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