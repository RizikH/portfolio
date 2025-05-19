// hooks/useTransitionNavigate.ts
'use client';
import { usePathname } from 'next/navigation';
import { useTransitionRouter } from 'next-view-transitions';
import { useLenis } from '@/app/context/lenisContext';

export function useTransitionNavigate() {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const { lenis } = useLenis();

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)',
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 2000,
        easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  }

  function navigate(path: string) {
    if (path === pathname) return;
    lenis?.stop();
    router.push(path, {
      onTransitionReady: triggerPageTransition,
    });
  }

  return navigate;
}
