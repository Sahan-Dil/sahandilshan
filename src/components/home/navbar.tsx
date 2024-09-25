'use client';

import React from 'react';

interface NavBarProps {
  navigateToSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ navigateToSection }) => {
  return (
    <div className="fixed top-5 left-40 right-40 z-50 items-center bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center p-4">
        {/* Navbar */}
        <div className="flex space-x-4">
          <button
            onClick={() => navigateToSection('about')}
            className="py-2 px-4 text-blue-500"
          >
            About
          </button>
          <button
            onClick={() => navigateToSection('projects')}
            className="py-2 px-4 text-blue-500"
          >
            Projects
          </button>
          <button
            onClick={() => navigateToSection('contact')}
            className="py-2 px-4 text-blue-500"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
