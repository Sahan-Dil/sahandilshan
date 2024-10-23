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
      className={`py-12 sm:py-20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody
                className={`flex flex-col h-full sm:h-[600px] sm:w-[380px]  w-full rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                <CardItem
                  translateZ="50"
                  className="w-full mb-4 text-xl font-bold p-2"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="w-full h-40 sm:h-48 object-cover rounded-lg"
                  />
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-xl sm:text-2xl font-bold p-2"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="50"
                  className="text-sm mb-4 flex-grow p-2"
                >
                  {project.description}
                </CardItem>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 text-xs rounded-full bg-gray-200 text-black"
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
                      className="p-2 inline-block px-3 sm:px-4 py-2 bg-[#5a189a] text-white rounded text-sm sm:text-base transition duration-300"
                    >
                      View Project
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="p-2 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
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
