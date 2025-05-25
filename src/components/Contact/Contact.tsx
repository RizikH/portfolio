import React from 'react';
import styles from '@/styles/components/contact.module.css';
import Image from 'next/image';
import emailIcon from '../../../public/icons/contact/email.png';
import githubIcon from '../../../public/icons/contact/github.png';
import linkedinIcon from '../../../public/icons/contact/linkedin.png';
import resumeIcon from '../../../public/icons/contact/resume.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


export default function Contact() {
    const contactRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!contactRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.fromTo(
            contactRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
    }, []);

    return (
        <>
            <section className={styles.contactSection} id="contact">
                <div className={styles.contactText}>
                    <h2 className={styles.contactTitle}>Connect with me</h2>
                    <p className={styles.contactDescription}>
                        I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <div className={styles.contactContainer} ref={contactRef}>
                    <a href="mailto:rizig.haddad.rh@gmail.com" className={styles.contactLink}>
                        <div className={styles.contactLinks}>
                            <Image
                                src={emailIcon}
                                alt="Email"
                                className={styles.contactIcon}
                                width={50}
                                height={50}
                            />
                        </div>
                        Email</a>
                    <a href="https://github.com/RizikH" className={styles.contactLink}>
                        <div className={styles.contactLinks}>
                            <Image
                                src={githubIcon}
                                alt="Github"
                                className={styles.contactIcon}
                                width={50}
                                height={50}
                            />
                        </div>
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/rizik-haddad-075443266/" className={styles.contactLink}>
                        <div className={styles.contactLinks}>
                            <Image
                                src={linkedinIcon}
                                alt="LinkedIn"
                                className={styles.contactIcon}
                                width={50}
                                height={50}
                            />

                        </div>
                        LinkedIn
                    </a>
                    <a href="/Docs/Full-Stack-Resume.pdf" className={styles.contactLink}>
                        <div className={styles.contactLinks}>
                            <Image
                                src={resumeIcon}
                                alt="LinkedIn"
                                className={styles.contactIcon}
                                width={50}
                                height={50}
                            />

                        </div>
                        Resume
                    </a>
                </div >
            </section>
        </>
    );
}