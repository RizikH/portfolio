// components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ml-4 text-xl text-[var(--fg)] hover:opacity-85"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <MdOutlineWbSunny /> : <GoMoon />}
    </button>
  );
};

export default ThemeToggle;
