'use client';

import { useIsMobile } from '@/components/Hooks/useIsMobile';
import { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import styles from '@/styles/components/navbar.module.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useGSAP(() => {
    if (!lineRef.current || !circleRef.current || !navRef.current) return;
    const tl = gsap.timeline();

    tl.fromTo(
      circleRef.current,
      { opacity: 0, width: 0, height: 0 },
      {
        opacity: 1,
        width: '20px',
        height: '20px',
        duration: 0.4,
        ease: 'power2.out',
      }
    )
      .fromTo(
        lineRef.current,
        { width: 0, height: 0, opacity: 0 },
        {
          width: '100%',
          height: '2px',
          opacity: 1,
          duration: 1.4,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .to(
        circleRef.current,
        {
          width: 0,
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut',
        },
        '-=0.2'
      )
      .to(
        lineRef.current,
        {
          height: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (!navRef.current || !circleRef.current || !lineRef.current) return;
            const bounds = lineRef.current.getBoundingClientRect();
            const navHeight = navRef.current.offsetHeight || 1;
            const progress = bounds.height / navHeight;
            const inset = Math.max(50 - progress * 50, 0);

            gsap.set(navRef.current, {
              clipPath: `inset(${inset}% 0 ${inset}% 0)`,
            });
          },
        },
        '-=0.2'
      );
  }, [navContainerRef]);




  return (
    <div ref={navContainerRef} style={{ position: 'relative', height: '4rem', widows: '100%' }}>
      <div className={styles.landingAnimation}>
        <div className={styles.circle} ref={circleRef}></div>
        <div className={styles.line} ref={lineRef}></div>
      </div>

      <nav className={styles.nav} ref={navRef}>
        <div className={styles.navLogo}>
          <Link to="home" smooth duration={500} offset={-50} onClick={closeMenu}>
            RizikH {isMobile && <span className="mobile-indicator">/(Mobile)</span>}
          </Link>
        </div>

        {isMobile ? (
          <>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={`${styles.navItemsWrapper} ${menuOpen ? styles.open : ''}`}>
              <ul className={styles.navItems}>
                <li className={styles.navItem}>
                  <Link to="about" smooth duration={500} offset={-50} onClick={closeMenu}>About</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="projects" smooth duration={500} offset={-50} onClick={closeMenu}>Projects</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="contact" smooth duration={500} offset={-50} onClick={closeMenu}>Contact</Link>
                </li>
                <li className={styles.navItem}>
                  <a href="/Docs/Full-Stack-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>View Résumé</a>
                </li>
              </ul>

              <div className={styles.navSocials}>
                <a href="https://github.com/RizikH" target="_blank" onClick={closeMenu}>GitHub</a>
                <a href="https://linkedin.com/in/rizik-haddad-075443266" target="_blank" onClick={closeMenu}>LinkedIn</a>
                <a href="mailto:rizig.haddad.rh@gmail.com" onClick={closeMenu}>Email</a>
              </div>
            </div>
          </>
        ) : (
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link to="about" smooth duration={500} offset={-50}>About</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="projects" smooth duration={500} offset={-50}>Projects</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="contact" smooth duration={500} offset={-50}>Contact</Link>
            </li>
            <li className={styles.navItem}>
              <a href="/Docs/Full-Stack-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
