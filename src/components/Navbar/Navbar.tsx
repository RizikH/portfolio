"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/components/navbar.module.scss";
import { Link } from "react-scroll";
import Elements from "./Elements";



const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector("main")?.style.setProperty("height", menuOpen ? "100vh" : "auto");
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link
            to="hero"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={closeMenu}
          >
            Rizik H
          </Link>
        </div>

        <div className={`${styles.navbarLinks} ${menuOpen ? styles.active : ""}`}>
          <Elements menuOpen={menuOpen} onLinkClick={closeMenu} />
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
