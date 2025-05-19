'use client';
import Link from 'next/link';
import TextReveal from '@/components/animations/TextAnimation';
import { useTransitionNavigate } from '@/app/hooks/useTransition';

const Nav = () => {
  const transitionNavigate = useTransitionNavigate();

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    transitionNavigate(path);
  };

  return (
    <div className="nav">
      <div className="col">
        <div className="nav-logo">
          <TextReveal delay={0.2}>
            <Link onClick={handleNavigation('/')} href="/">
              RizikH
            </Link>
          </TextReveal>
        </div>
      </div>

      <div className="col">
        <div className="nav-items">
          <div className="nav-item">
            <TextReveal delay={0.2}>
              <Link onClick={handleNavigation('/about')} href="/about">
                About
              </Link>
            </TextReveal>
          </div>
          <div className="nav-item">
            <TextReveal delay={0.2}>
              <Link onClick={handleNavigation('/studio')} href="/studio">
                Projects
              </Link>
            </TextReveal>
          </div>
          <div className="nav-item">
            <TextReveal delay={0.2}>
              <Link onClick={handleNavigation('/contact')} href="/contact">
                Contact
              </Link>
            </TextReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
