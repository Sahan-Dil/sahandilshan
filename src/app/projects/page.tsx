import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    imageUrl: '/path/to/project1-image.jpg', // Ensure this path is correct
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    imageUrl: '/path/to/project2-image.jpg', // Ensure this path is correct
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    link: 'https://project2.com',
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 3.',
    imageUrl: '/path/to/project3-image.jpg', // Ensure this path is correct
    technologies: ['Angular', 'Django', 'MySQL'],
    link: 'https://project3.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={'min-h-screen py-20'}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center mt-14">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
