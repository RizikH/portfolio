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
        start: 'top 90%',
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
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 footer-item w-full">
            <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
              <h2 className="text-2xl font-semibold mb-2">Pages</h2>
              <ul className="space-y-2 flex flex-col justify-center items-center sm:items-start">
                <li>
                  <Link to="hero" smooth={true} duration={500} offset={-50} className="hover:text-[#00ff90] transition-colors cursor-pointer inline-block footer-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500} offset={-50} className="hover:text-[#00ff90] transition-colors cursor-pointer inline-block footer-item">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={500} offset={-50} className="hover:text-[#00ff90] transition-colors cursor-pointer inline-block footer-item">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-6xl font-bold text-center mb-4 sm:mb-0 footer-item">Rizik H</div>
            <div></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
