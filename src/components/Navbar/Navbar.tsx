'use client';

import { useIsMobile } from '@/components/Hooks/useIsMobile';
import { useState } from 'react';
import { Link } from 'react-scroll';
import styles from '@/styles/components/navbar.module.css';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
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
                <a href="/Docs/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a>
              </li>
            </ul>

            <div className={styles.navSocials}>
              <a href="https://github.com/yourusername" target="_blank" onClick={closeMenu}>GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" onClick={closeMenu}>LinkedIn</a>
              <a href="mailto:youremail@example.com" onClick={closeMenu}>Email</a>
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
            <a href="/Docs/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
