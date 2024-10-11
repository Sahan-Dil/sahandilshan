'use client';

import React from 'react';

interface NavBarProps {
  navigateToSection: (section: string) => void;
  theme: 'light' | 'dark';
}

const NavBar: React.FC<NavBarProps> = ({ navigateToSection, theme }) => {
  const isDarkTheme = theme === 'dark';

  return (
    <div className="fixed top-5 left-0 right-0 z-50 mx-auto max-w-5xl px-6 lg:px-8">
      <div
        className={`flex justify-around items-center p-2 bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg rounded-full shadow-md border transition duration-300 ${
          isDarkTheme ? 'border-gray-700' : 'border-gray-300'
        } hover:shadow-lg hover:shadow-white/50`}
      >
        {/* Navbar */}
        <div className="flex space-x-8 w-full justify-around">
          <span
            onClick={() => navigateToSection('about')}
            className={`cursor-pointer text-lg transition-transform duration-300 ${
              isDarkTheme
                ? 'text-gray-100 hover:text-gray-200'
                : 'text-gray-800 hover:text-blue-600'
            } hover:scale-105`}
          >
            About
          </span>
          <span
            onClick={() => navigateToSection('projects')}
            className={`cursor-pointer text-lg transition-transform duration-300 ${
              isDarkTheme
                ? 'text-gray-200 hover:text-gray-400'
                : 'text-gray-800 hover:text-blue-600'
            } hover:scale-105`}
          >
            Projects
          </span>
          <span
            onClick={() => navigateToSection('contact')}
            className={`cursor-pointer text-lg transition-transform duration-300 ${
              isDarkTheme
                ? 'text-gray-200 hover:text-gray-400'
                : 'text-gray-800 hover:text-blue-600'
            } hover:scale-105`}
          >
            Contact
          </span>
          {/* Add more items if needed */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
