'use client';

import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full pb-6 text-center bg-[var(--bg)] text-[var(--fg)] transition-colors duration-300">
      <div className="mb-2">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-50}
          className="flex items-center justify-center cursor-pointer"
        >
          <FaArrowUp
            size={30}
            className="transition-transform transform hover:scale-125"
          />
        </Link>
      </div>
      <p className="text-sm text-[var(--muted)] mt-8 transition-colors duration-300">
        &copy; {new Date().getFullYear()} Rizik Haddad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
