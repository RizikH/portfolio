'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex justify-center items-center text-xl text-[var(--fg)] hover:opacity-85"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === 'dark' ? <MdOutlineWbSunny /> : <GoMoon />}
    </button>
  );
};

export default ThemeToggle;
