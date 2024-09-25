'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import About from './about/page';
import Navbar from '@/components/home/navbar';
import ThemeSwitch from '@/components/home/themeSwitch';

const Home = () => {
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

  return (
    <div>
      <ThemeSwitch />

      <Navbar navigateToSection={navigateToSection} />

      <div className="mt-20">
        <About />
        {/* Add more sections like Projects, Contact below */}
      </div>
    </div>
  );
};

export default Home;
