'use client';

import { Link } from 'react-scroll';
import styles from '@/styles/components/Navbar.module.css';

type Props = {
  mobile: boolean;
  menuOpen: boolean;
  closeMenu: () => void;
};

const Elements: React.FC<Props> = ({ mobile, menuOpen, closeMenu }) => {
  return (
    <>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link to="about" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="projects" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="contact" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li className={styles.navItem}>
          <a href="/Docs/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            Resume
          </a>
        </li>
      </ul>

      {mobile && menuOpen && (
        <div className={styles.navSocials}>
          <a href="https://github.com/yourusername" target="_blank" onClick={closeMenu}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" onClick={closeMenu}>
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com" onClick={closeMenu}>
            Email
          </a>
        </div>
      )}
    </>
  );
};

export default Elements;
