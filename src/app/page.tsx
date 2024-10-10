'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import About from './about/page';
import Navbar from '@/components/home/navbar';
import ThemeSwitch from '@/components/home/themeSwitch';
import Projects from './projects/page';

const Home = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const router = useRouter();

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router]);

  const navigateToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      router.push(`#${section}`, { shallow: true } as any);
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
      <ThemeSwitch onThemeChange={handleThemeChange} />

      <Navbar navigateToSection={navigateToSection} />

      <div className="">
        {/* SVG mask definition */}
        <svg width="0" height="0">
          <defs>
            <clipPath id="wave-mask" clipPathUnits="objectBoundingBox">
              <path d="M0,0.96 C0.2,0.95 0.3,0.93 0.4,0.92 C0.5,0.91 0.6,0.88 0.7,0.90 C0.8,0.92 0.9,0.95 1,0.96 L1,0 V0 H0 V0.96 Z" />
            </clipPath>
          </defs>
        </svg>
        {/* About section with clip-path applied */}
        <div
          className="relative"
          style={{
            clipPath: 'url(#wave-mask)',
            height: 'calc(100vh)',
          }}
        >
          <About theme={theme} />
        </div>
      </div>

      <div className="relative z-20">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
