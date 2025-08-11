import React from 'react';
import styles from '@/styles/components/contact.module.scss';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


export default function Contact() {
    const contactRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!contactRef.current) return;
        gsap.fromTo(contactRef.current, {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: contactRef.current,
                start: 'top 100%',
                toggleActions: 'play none none reverse',
            },
        });
    }, [contactRef]);
    

    return (
        <>
            <section className={styles.contactSection} id="contact" ref={contactRef}>
                <div className={styles.contactText}>
                    <h2 className={styles.contactTitle}>Connect with me</h2>
                    <p className={styles.contactDescription}>
                        I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <div className={styles.contactContainer}>
                    <a href="mailto:rizig.haddad.rh@gmail.com" className={styles.contactLink}>
                        <div className={styles.contactLinks}>
                            <MdEmail size={50} className={styles.icon} />
                        </div>
                        Email</a>
                    <a
                        href="https://github.com/RizikH"
                        className={styles.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className={styles.contactLinks}>
                            <FaGithub size={50} className={styles.icon} />
                        </div>
                        Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rizik-haddad-075443266/"
                        className={styles.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className={styles.contactLinks}>
                            <FaLinkedin size={50} className={styles.icon} />
                        </div>
                        LinkedIn
                    </a>
                    <a
                        href="/Docs/Full-Stack-Resume.pdf"
                        className={styles.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className={styles.contactLinks}>
                            <TiDocumentText size={50} className={styles.icon} />
                        </div>
                        Resume
                    </a>
                </div>
            </section>
        </>
    );
}
