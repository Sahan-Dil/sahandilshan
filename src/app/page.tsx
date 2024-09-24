'use client';

import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import About from './about/page'; // Ensure this is the correct import

const Home = () => {
  // Scroll to section on page load if there is a hash in the URL
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const navigateToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Home Section */}
      <section className="min-h-screen grid content-center text-center">
        <h1 className="text-5xl font-semibold tracking-[3px] pb-2">Welcome</h1>
        <div className="text-4xl text-yellow-500 pb-16">
          <Typewriter
            options={{
              strings: [
                '✋Im Sahan Dilshan',
                'Im a Full-Stack 🌐 Developer',
                'I love creating beautiful web experiences',
              ],
              delay: 150,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* Navigation Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => navigateToSection('about')}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            About
          </button>
          <button
            onClick={() => navigateToSection('projects')}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Projects
          </button>
          <button
            onClick={() => navigateToSection('contact')}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Contact
          </button>
        </div>
      </section>

      {/* Section Components */}
      <About />
      {/* <Projects />
      <Contact /> */}
    </div>
  );
};

export default Home;
