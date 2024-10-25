'use client';
import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';
import img from '../../components/ui/OIP.jpg';

interface Project {
  title: string;
  description: string;
  src: any;
  technologies: string[];
  link: string;
}

interface ProjectsProps {
  theme: 'dark' | 'light';
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    src: img,
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    src: img,
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    link: 'https://project2.com',
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 3.',
    src: img,
    technologies: ['Angular', 'Django', 'MySQL'],
    link: 'https://project3.com',
  },
];

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
                className={`flex flex-col  min-h-[400px] h-auto sm:h-[450px] md:h-[480px] w-full rounded-xl border-2 ${
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
                  className="text-sm sm:text-base mb-3 sm:mb-4 flex-grow p-1 sm:p-2"
                >
                  {project.description}
                </CardItem>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm rounded-full ${
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
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 px-4 py-2 bg-[#5a189a] text-white rounded text-sm transition duration-300"
                    >
                      View Project
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="p-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
                    >
                      More Info
                    </CardItem>
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
