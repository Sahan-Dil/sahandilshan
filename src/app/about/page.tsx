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
    if (!vantaRef.current) return;
    if (vantaEffect) vantaEffect.destroy();

    setVantaEffect(
      FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xd8cbfc,
        midtoneColor: 0xd8b1f0,
        lowlightColor: 0xe7d9f2,
        baseColor: 0xffffff,
        blurFactor: 0.2,
        speed: 0.5,
        zoom: 0.7,
        THREE,
      })
    );

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const randomShape =
    'M 200 0 Q 300 100 200 200 Q 100 300 0 200 Q 100 100 200 0 Z';

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-between p-10 relative ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
    >
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[3px] pb-2">
          ✋ Hey there... It s Sahan Dilshan
        </h2>
        <div className="text-2xl md:text-4xl text-yellow-500 pb-16">
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

      <div className="w-full lg:w-1/2 relative">
        <svg viewBox="-100 -100 400 400" className="w-full h-full">
          <defs>
            <clipPath id="shape-clip">
              <path d={randomShape} />
            </clipPath>
          </defs>
          <g clipPath="url(#shape-clip)">
            <foreignObject x="-100" y="-100" width="600" height="600">
              <div>
                <Image
                  src={img}
                  alt="Sahan Dilshan"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>

      {/* Curved SVG Background */}
      <div className="absolute inset-x-0 bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={theme === 'dark' ? '#1c1b1f' : '#d5d5f4'}
            d="M0,256L60,234.7C120,213,240,171,360,170.7C480,171,600,213,720,245.3C840,277,960,299,1080,288C1200,277,1320,245,1380,229.3L1440,213L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
