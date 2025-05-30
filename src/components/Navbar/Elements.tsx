"use client";

import React from "react";
import { Link } from "react-scroll";
import styles from "@/styles/components/navbar.module.css";


const Right = ({ menuOpen, onLinkClick }: { menuOpen: boolean; onLinkClick: () => void }) => {
  return (
    <ul className={`${styles.navbarRightSide} ${menuOpen ? styles.active : ""}`}>
      <li className={styles.navbarItem}>
        <Link to="about" smooth={true} duration={600} offset={50} onClick={onLinkClick}>About</Link>
      </li>
      <li className={styles.navbarItem}>
        <Link to="projects" smooth={true} duration={600} offset={50} onClick={onLinkClick}>Projects</Link>
      </li>
      <li className={styles.navbarItem}>
        <Link to="contact" smooth={true} duration={600} offset={50} onClick={onLinkClick}>Contact</Link>
      </li>
      <li className={styles.navbarItem}>
        <a href="/Docs/Full-Stack-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={onLinkClick}>Resume</a>
      </li>
    </ul>
  );
};


export default Right;
