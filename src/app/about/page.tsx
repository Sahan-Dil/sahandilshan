'use client';
import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import Image from 'next/image';
import img from '../../components/ui/OIP.jpg';
import { Button, CircularProgress } from '@mui/material';

interface AboutProps {
  theme: 'dark' | 'light';
}

const About: React.FC<AboutProps | any> = ({ theme }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [downloading, setDownloading] = useState(false);

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
  const downloadFromGdrive = async (
    setDownloading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setDownloading(true);

    // Construct the direct download URL
    const fileId = '1Vbe-4fQMDALn0IC0or_FLc-TgeY5lWyZ';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a hidden anchor element to trigger the download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.click();

    // Reset downloading state after a delay (adjust as necessary)
    setTimeout(() => {
      setDownloading(false);
    }, 3000); // Simulate download time (adjust if needed)
  };

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

            <Button
              onClick={() => downloadFromGdrive(setDownloading)}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-[#822faf] to-indigo-500 text-white rounded-md hover:from-violet-600 hover:to-indigo-800 transition-colors duration-300"
              disabled={downloading}
              startIcon={
                downloading && (
                  <React.Fragment>
                    <svg width={0} height={0}>
                      <defs>
                        <linearGradient
                          id="my_gradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#e01cd5" />
                          <stop offset="100%" stopColor="#1CB5E0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <CircularProgress
                      size={20}
                      sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
                    />
                  </React.Fragment>
                )
              }
            >
              {downloading ? 'Downloading...' : 'Check Resume'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
