"use client";

import React, { useRef, useState } from "react";
import styles from "@/styles/components/navbar.module.css";
import { Link } from "react-scroll";
import Elements from "./Elements";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    if (!lineRef.current || !circleRef.current || !navContainerRef.current || !navRef.current) return;
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
          width: navRef.current?.offsetWidth,
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

  function toggleMenu() {
    const newState = !menuOpen;
    setMenuOpen(newState);
    document.querySelector("main")?.style.setProperty("height", newState ? "100vh" : "auto");
    navRef.current?.classList.toggle(styles.menuActive);
  }

  function closeMenu() {
    if (menuOpen) {
      setMenuOpen(false);
      document.querySelector("main")?.style.setProperty("height", "auto");
      navRef.current?.classList.remove(styles.menuActive);
    }
  }

  return (
    <div ref={navContainerRef} className={styles.navContainer}>
      <div className={styles.landingAnimation}>
        <div className={styles.circle} ref={circleRef}></div>
        <div className={styles.line} ref={lineRef}></div>
      </div>
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles.navbarLogo}>
          <Link
            to="hero"
            smooth={true}
            duration={600}
            offset={50}
            onClick={closeMenu}
          >
            RizikH
          </Link>
        </div>

        <div className={styles.navbarLinks}>
          <Elements menuOpen={menuOpen} onLinkClick={closeMenu} />
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
