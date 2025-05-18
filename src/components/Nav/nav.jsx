"use client";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TextReveal from '@/components/animations/TextAnimation';
import { useLenis } from '@/app/context/lenisContext';

const Nav = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const { lenis } = useLenis();

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (path) => (e) => {
    lenis?.stop();
    if (path === pathname) {
      e.preventDefault();
      return;
    }

    router.push(path, {
      onTransitionReady: triggerPageTransition,
    });
  };

  return (
    <div className="nav">
      <div className="col">
        <div className="nav-logo">
          <TextReveal delay={2}>
            <Link onClick={handleNavigation("/")} href="/">
              RizikH
            </Link>
          </TextReveal>
        </div>
      </div>

      <div className="col">
        <div className="nav-items">
          <div className="nav-item">
            <TextReveal delay={2}>
              <Link onClick={handleNavigation("/about")} href="/about">
                About
              </Link>
            </TextReveal>
          </div>
          <div className="nav-item">
            <TextReveal delay={2}>
              <Link onClick={handleNavigation("/studio")} href="/#">
                Projects
              </Link>
            </TextReveal>
          </div>
          <div className="nav-item">
            <TextReveal delay={2}>
              <Link onClick={handleNavigation("/contact")} href="/#">
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
