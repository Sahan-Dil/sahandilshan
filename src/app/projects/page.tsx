'use client';
import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';
import thejobs from '../../components/ui/thejobs.png';
import skincarehub from '../../components/ui/skincarehub.png';
import skhubbackend from '../../components/ui/skhubbackend.png';

interface Project {
  title: string;
  description: string;
  src: any;
  technologies: string[];
  link?: string;
  codeLink?: string;
}

interface ProjectsProps {
  theme: 'dark' | 'light';
}

const projects: Project[] = [
  {
    title: 'SkinCare-Hub - frontend',
    description:
      'Skin Care Hub is an application using ML for analyse and identify skin annomalies, and provide better solutions for that.',
    src: skincarehub,
    technologies: [
      'Next js',
      'React',
      'MUI',
      'Type script',
      'Tailwind',
      'axios',
    ],
    link: 'https://skin-care-hub.vercel.app/',
    codeLink: 'https://github.com/Sahan-Dil/SkinCare-Hub',
  },
  {
    title: 'The jobs - frontend',
    description:
      'web application for job seeking and get councellation about jobs in various fields in abroad.',
    src: thejobs,
    technologies: ['React', 'MUI', 'javascript', 'axios'],
    link: 'https://the-jobs-five.vercel.app/',
    codeLink: 'https://github.com/Sahan-Dil/TheJobs_frontend',
  },
  {
    title: 'SkinCare-Hub - backend',
    description:
      'Backend for Skin Care Hub and trained model: https://github.com/Sahan-Dil/skinCare-Hub-model that deployed on GCP',
    src: skhubbackend,
    technologies: [
      'Node.js',
      'Express.js',
      'GCP',
      'MongoDB',
      'python',
      'typeScript',
      'flask',
      'tensorflow',
    ],
    codeLink: 'https://github.com/Sahan-Dil/skinCare-hub-backend',
  },
];

const MAX_DESCRIPTION_LENGTH = 120;

const truncateText = (text: string) => {
  if (text.length > MAX_DESCRIPTION_LENGTH) return text;

  const linkRegex = /(https?:\/\/\S+)/g;
  const parts = text.split(linkRegex);

  return parts.map((part, index) => {
    if (linkRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {part.length > 20 ? part.slice(0, 20).trim() + '...' : part}
        </a>
      );
    } else {
      return part.length > MAX_DESCRIPTION_LENGTH
        ? part.slice(0, MAX_DESCRIPTION_LENGTH).trim() + '...'
        : part;
    }
  });
};

const Projects: React.FC<ProjectsProps | any> = ({ theme }) => {
  return (
    <section
      id="projects"
      className={`py-8 sm:py-12 md:py-16 lg:py-20 ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}
    >
      <div className="max-w-full md:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 place-items-center">
          {projects.map((project, index) => (
            <CardContainer
              key={index}
              className="inter-var w-[80vw] sm:w-[400px] md:w-[350px] lg:w-[380px]"
            >
              <CardBody
                className={`flex flex-col  min-h-[460px]  sm:min-h-[520px] md:min-h-[580px] lg:min-h-[540px] w-full rounded-xl border-2 ${
                  theme === 'dark'
                    ? 'border-[#815ac0] bg-gray-800'
                    : 'border-[#d2b7e5] bg-white'
                } p-3 sm:p-4 md:p-6 shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                <CardItem translateZ="50" className="w-full mb-3 sm:mb-4">
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="w-full h-48 sm:h-52 object-cover rounded-lg"
                  />
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-xl sm:text-2xl font-bold p-1 sm:p-2"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="50"
                  className="text-xs sm:text-sm mb-3 sm:mb-4 flex-grow p-1 sm:p-2"
                >
                  {truncateText(project.description)}
                </CardItem>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs rounded-full ${
                          theme === 'dark'
                            ? 'bg-[#7251b5] text-white'
                            : 'bg-[#d2b7e5] text-black'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    {project.link ? (
                      <CardItem
                        translateZ={100}
                        as={Link}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 px-4 py-2 bg-[#5a189a] text-white  hover:bg-[#7251b5] rounded text-sm transition duration-300"
                      >
                        View Live Demo
                      </CardItem>
                    ) : (
                      <div></div>
                    )}

                    {project.codeLink && (
                      <CardItem
                        translateZ={100}
                        as={Link}
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
                      >
                        View Code
                      </CardItem>
                    )}
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
