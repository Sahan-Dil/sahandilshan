'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import About from './about/page';
import Navbar from '@/components/home/navbar';
import ThemeSwitch from '@/components/home/themeSwitch';

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

      <div className="mt-20">
        <About theme={theme} />
        {/* Add more sections like Projects, Contact below */}
      </div>
    </div>
  );
};

export default Home;
