'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-scroll';

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
      <section ref={triggerRef} className="bg-transparent" />
      <footer
        className="relative p-8 w-full min-h-[300px] sm:min-h-[400px] md:min-h-[600px] bg-[#4E4E5A] overflow-hidden"
        style={{
          clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
        }}
        ref={footerRef}
      >
        <section className="flex flex-col h-full w-full">
          <div className="fixed h-[600px] w-full bottom-0">
            <section className="flex flex-col justify-between items-start w-full h-full max-w-full max-h-full">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-fit h-fit p-6 text-white footer-item">
                <h1 className="text-2xl p-2 rounded-md text-white">Pages</h1>
                <h1 className="text-2xl p-2 rounded-md text-white">Socials</h1>
                <Link className='text-2xl p-2 rounded-md' to="about" smooth={true} duration={500} offset={-50}>
                  Home
                </Link>
                <a className="text-2xl p-2 rounded-md" href="https://linkedin.com/in/rizik-haddad-075443266" target="_blank">
                  LinkedIn
                </a>
                <Link className="text-2xl p-2 rounded-md" to="about" smooth={true} duration={500} offset={-50}>
                  About
                </Link>
                <a className="text-2xl p-2 rounded-md" href="https://github.com/RizikH" target="_blank">
                  GitHub
                </a>
                <Link className="text-2xl p-2 rounded-md" to="projects" smooth={true} duration={500} offset={-50}>
                  Projects
                </Link>
                <a className="text-2xl p-2 rounded-md" href="/Docs/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
                <Link className="text-2xl p-2 rounded-md" to="contact" smooth={true} duration={500} offset={-50}>
                  Contact
                </Link>
              </div>

              <section className="flex justify-evenly items-end w-full">
                <div></div>
                <div className="text-center footer-item text-6xl">Rizik H</div>
                <div className="text-right footer-item">&copy; 2025 RizikH. All rights reserved.</div>
              </section>
            </section>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
