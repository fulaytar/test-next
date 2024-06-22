'use client';

import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label='Tooggle Dark Mode'
      type='button'
      className='flex items-center justify-center rounded-lg p-2 transition-all hover:bg-aliceblue'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <MoonIcon className='h-5 w-5 text-slate-800 ' />
      ) : (
        <SunIcon className='h-5 w-5 text-orange-500' />
      )}
    </button>
  );
};

export default ThemeButton;
