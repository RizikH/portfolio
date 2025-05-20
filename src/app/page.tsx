'use client';
import React, { useEffect, useRef } from 'react';
import { useLenis } from '@/app/context/lenisContext';
import { useRevealer } from '@/app/hooks/useRevealer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { useTransitionNavigate } from '@/app/hooks/useTransition';

gsap.registerPlugin(SplitText);

export default function Home() {
  useRevealer();
  const { lenis } = useLenis();
  const transitionNavigate = useTransitionNavigate();

  const h1Ref = useRef(null);
  const pRef = useRef(null);

  // Start scroll
  useEffect(() => {
    lenis?.start();
  }, [lenis]);

  // GSAP SplitText animation
  useGSAP(() => {
    const splitText = SplitText.create(h1Ref.current, {
      type: 'chars',
      charsClass: 'letter',
      mask: 'chars',
    });
    const splitText2 = SplitText.create(pRef.current, {
      type: 'chars',
      charsClass: 'letter',
      mask: 'chars',
    });

    gsap.set(splitText.chars, { y: '110%' });
    gsap.set(splitText2.chars, { y: '110%' });

    gsap.to(splitText.chars, {
      y: '0%',
      duration: 0.8,
      stagger: 0.05,
      delay: 1.25,
      ease: 'power4.out',
    });

    gsap.to(splitText2.chars, {
      y: '0%',
      duration: 0.8,
      stagger: 0.03,
      delay: 1.25,
      ease: 'power4.out',
    });
  }, []);

  return (
    <>
      <div className="revealer"></div>
      <div className="home">
        <div className="header">
          <h1 ref={h1Ref}>I am Rizik Haddad</h1>
          <p ref={pRef}>Welcome To My Portfolio</p>

          <button className="continueBtn" onClick={() => transitionNavigate('/about')}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}