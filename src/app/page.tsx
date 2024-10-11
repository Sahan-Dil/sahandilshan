'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import About from './about/page';
import Navbar from '@/components/home/navbar';
import ThemeSwitch from '@/components/home/themeSwitch';
import Projects from './projects/page';
import { useTheme } from 'next-themes';

const Home = () => {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
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

  useEffect(() => {
    const handleThemeLoad = () => {
      const localTheme = window.localStorage.getItem('theme');
      setCurrentTheme(localTheme === 'dark' ? 'dark' : 'light');
      setTheme(localTheme === 'dark' ? 'dark' : 'light'); // Ensure that the theme is also set
    };

    handleThemeLoad();
  }, []);

  const navigateToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${section}`);
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${currentTheme === 'dark' ? 'from-[#0b0b0b] to-[#2a282e] via-[#261635] to-[#141414]' : 'from-[#d8cbfc] to-[#d8b1f0] via-[#e7d9f2] to-[#f0e6f7]'}`}
    >
      <ThemeSwitch onThemeChange={handleThemeChange} />
      <Navbar navigateToSection={navigateToSection} theme={currentTheme} />
      <div className="relative">
        <svg width="0" height="0">
          <defs>
            <clipPath id="wave-mask" clipPathUnits="objectBoundingBox">
              <path d="M0,0.96 C0.2,0.95 0.3,0.93 0.4,0.92 C0.5,0.91 0.6,0.88 0.7,0.90 C0.8,0.92 0.9,0.95 1,0.96 L1,0 V0 H0 V0.96 Z" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="relative"
          style={{
            clipPath: 'url(#wave-mask)',
            height: 'calc(100vh)',
          }}
        >
          <About theme={currentTheme} />
        </div>
      </div>

      <div className="relative z-20">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
