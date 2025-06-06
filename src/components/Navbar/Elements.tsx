"use client";

import React from "react";
import { Link } from "react-scroll";
import styles from "@/styles/components/navbar.module.scss";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const Elements = ({
  menuOpen,
  onLinkClick,
}: {
  menuOpen: boolean;
  onLinkClick: () => void;
}) => {
  return (
    <ul
      className={`${styles.navbarRightSide} ${menuOpen ? styles.active : ""}`}
    >
      <li className={styles.navbarItem}>
        <Link to="about" smooth duration={600} offset={50} onClick={onLinkClick}>
          About
        </Link>
      </li>
      <li className={styles.navbarItem}>
        <Link to="projects" smooth duration={600} offset={50} onClick={onLinkClick}>
          Projects
        </Link>
      </li>
      <li className={styles.navbarItem}>
        <Link to="contact" smooth duration={600} offset={50} onClick={onLinkClick}>
          Contact
        </Link>
      </li>
      <li className={styles.navbarItem}>
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default Elements;
