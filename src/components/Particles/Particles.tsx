'use client';

import { useTheme } from 'next-themes';
import { Particles } from '@/components/magicui/particles';

export default function LayoutParticles() {
  const { theme } = useTheme();

  const particleColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <Particles
      className="absolute inset-0 z-0"
      quantity={40}
      ease={80}
      color={particleColor}
      refresh
    />
  );
}
