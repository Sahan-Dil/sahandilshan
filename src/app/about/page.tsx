'use client';
import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import Image from 'next/image';
import img from '../../components/ui/OIP.jpg';

interface AboutProps {
  theme: 'dark' | 'light';
}

const About: React.FC<AboutProps | any> = ({ theme }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (vantaEffect) vantaEffect.destroy();

    setVantaEffect(
      FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: theme === 'dark' ? 0xd8cbfc : 0xd8cbfc,
        midtoneColor: theme === 'dark' ? 0xd8b1f0 : 0xd8b1f0,
        lowlightColor: theme === 'dark' ? 0xe7d9f2 : 0xe7d9f2,
        baseColor: theme === 'dark' ? 0x0 : 0xffffff,
        blurFactor: theme === 'dark' ? 0.15 : 0.2,
        speed: theme === 'dark' ? 0.1 : 0.3,
        zoom: 0.7,
        THREE,
      })
    );

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]);

  const description =
    // eslint-disable-next-line quotes
    'I am a self-motivated pursuit of a dynamic person, skilled in full-stack development with expertise in cloud technologies, including AWS and GCP. I thrive in Agile environments, delivering robust solutions using TypeScript, React.js, Node.js, .NET and Spring Boot. Passionate about continuous learning and innovation, I bring a proactive approach to solving complex technical challenges.';

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center relative overflow-hidden bg-transparent dark:bg-transparent"
      ref={vantaRef}
    >
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 relative order-1 md:order-2">
            <Image
              src={img}
              alt="Sahan Dilshan"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* Text section */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[3px] pb-4 font-bold">
              Hey there... It&apos;s Sahan Dilshan
            </h2>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex flex-col sm:flex-row items-center justify-center md:justify-start mb-5">
              <span className="whitespace-nowrap">I&apos;m a</span>
              <span className="text-violet-500 ml-0 sm:ml-2 overflow-hidden flex-shrink-0 whitespace-nowrap">
                <Typewriter
                  options={{
                    strings: ['Full-Stack Engineer', 'Mobile App Developer'],
                    delay: 150,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <h3 className="text-sm sm:text-base md:text-md lg:text-md">
              {description}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
