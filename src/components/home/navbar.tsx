'use client';

import React, { useState } from 'react';

interface NavBarProps {
  navigateToSection: (section: string) => void;
  theme: 'light' | 'dark';
}

const NavBar: React.FC<NavBarProps> = ({ navigateToSection, theme }) => {
  const [selectedSection, setSelectedSection] = useState<string>('about');
  const isDarkTheme = theme === 'dark';

  const handleNavigation = (section: string) => {
    setSelectedSection(section);
    navigateToSection(section);
  };

  return (
    <div className="fixed top-5 left-0 right-0 z-50 mx-auto max-w-5xl px-6 lg:px-8">
      <div
        className={`flex justify-around items-center p-2 bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg rounded-full shadow-md border transition duration-300 ${
          isDarkTheme
            ? 'border-gray-700'
            : 'border-gray-300 hover:shadow-black/50'
        } hover:shadow-lg hover:shadow-white/50`}
      >
        {/* Navbar */}
        <div className="flex space-x-8 w-full justify-around">
          {['about', 'skills', 'experience', 'projects', 'contact'].map(
            (section) => (
              <span
                key={section}
                onClick={() => handleNavigation(section)}
                className={`cursor-pointer text-lg transition-transform duration-300  ${
                  selectedSection === section
                    ? isDarkTheme
                      ? 'text-[#c77dff]'
                      : 'text-[#915abb]'
                    : isDarkTheme
                      ? 'text-white hover:text-[#e0aaff]'
                      : 'text-gray-800 hover:text-[#7b2cbf]'
                } hover:scale-105`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
