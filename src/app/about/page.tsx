import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import Image from 'next/image';
import img from '../../components/ui/OIP.jpg';

const About = ({ theme }: { theme: 'dark' | 'light' }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

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

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center relative overflow-hidden bg-transparent dark:bg-transparent"
      ref={vantaRef}
    >
      <div className="max-w-5xl w-full mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
          {/* Image section (shown first on mobile) */}
          <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 relative order-1 md:order-2">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-[3px] pb-4 font-bold">
              ✋Hey there... It&apos;s Sahan Dilshan
            </h2>
            <div className="text-2xl sm:text-3xl md:text-4xl text-violet-500 pb-8 md:pb-16 font-bold">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
