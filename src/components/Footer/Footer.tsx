'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.footer-item', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: footerRef });

  return (
    <>
      <section ref={triggerRef} className="h-1 bg-transparent" />
      <footer
        ref={footerRef}
        className="relative w-full text-white"
      >
        <div className="flex flex-col justify-between h-full w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 footer-item">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="home" smooth={true} duration={500} offset={-50} className="hover:text-[#00ff90] transition-colors cursor-pointer inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500} offset={-50} className="hover:text-[#00ff90] transition-colors cursor-pointer inline-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={500} offset={-50} className="hover:text-[#00ff90] transition-colors cursor-pointer inline-block">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500} offset={-50} className="hover:text-[#00ff90] transition-colors cursor-pointer inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="https://linkedin.com/in/rizik-haddad-075443266" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#00ff90] transition-colors inline-block">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/RizikH" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#00ff90] transition-colors inline-block">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="/Docs/Full-Stack-Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume PDF" className="hover:text-[#00ff90] transition-colors inline-block">
                    View Résumé
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-end mt-10 footer-item mb-5">
            <div className="text-6xl font-bold text-center mb-4 sm:mb-0">Rizik H</div>
            <div className="text-sm text-gray-300">&copy; 2025 RizikH. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
