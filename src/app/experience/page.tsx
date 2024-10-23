'use client';
import React from 'react';

interface ExperiencePageProps {
  theme: 'dark' | 'light';
}
const ExperiencePage: React.FC<ExperiencePageProps | any> = ({ theme }) => {
  return (
    <section id="experience" className={'min-h-screen py-20'}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center mt-14">
          Work Experience
        </h2>
      </div>
    </section>
  );
};

export default ExperiencePage;
