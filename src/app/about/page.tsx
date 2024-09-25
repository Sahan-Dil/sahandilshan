'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen grid content-center text-center"
    >
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,256L60,234.7C120,213,240,171,360,170.7C480,171,600,213,720,245.3C840,277,960,299,1080,288C1200,277,1320,245,1380,229.3L1440,213L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <h2 className="text-5xl font-semibold tracking-[3px] pb-2">
        {' '}
        ✋Hey there... Its Sahan Dilshan
      </h2>
      <div className="text-4xl text-yellow-500 pb-16">
        <Typewriter
          options={{
            strings: [
              'I am a Full-Stack Engineer🌐',
              'I love creating beautiful web experiences🌐',
            ],
            delay: 150,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </section>
  );
};

export default About;
