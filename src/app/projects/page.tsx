'use client';
import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';
import thejobs from '../../components/ui/thejobs.png';
import skincarehub from '../../components/ui/skincarehub.png';
import skhubbackend from '../../components/ui/skhubbackend.png';
import nerdAi from '../../components/ui/nerd-ai.png';
import obesity from '../../components/ui/obesity.png';
import hello from '../../components/ui/hello.png';
import smartlearn from '../../components/ui/smartlearn.png';

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
      'Backend for Skin Care Hub and trained model: https://github.com/Sahan-Dil/skinCare-Hub-model that deployed on GCP.',
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
  {
    title: 'Nerd-Ai: Voice-Assisted Music Player',
    description:
      'Nerd-Ai is an AI-driven music player app built with Java in Android Studio, integrating Alan AI to enable hands-free, voice-controlled playback. Using Alan AIs advanced natural language processing, users can navigate their music library, play specific songs, skip tracks, pause, or stop playback—all with voice commands. The app features real-time voice feedback, displaying user commands on-screen as they’re recognized, ensuring a responsive and interactive experience. Nerd-Ai combines the power of Alan AI with Android robust Java framework to create an intelligent, voice-assisted music experience on mobile.',
    src: nerdAi,
    technologies: ['Java', 'Alan AI', 'XML', 'Gradle'],
    codeLink: 'https://github.com/Sahan-Dil/NerdAI',
  },
  {
    title: 'Obesity Risk Prediction App',
    description:
      'This web application predicts the risk of obesity based on input features such as age, gender, height, weight, and lifestyle factors. The prediction model is trained using machine learning algorithms and is accessible through a user-friendly interface.',
    src: obesity,
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'],
    link: 'https://obesity-risk-prediction.streamlit.app/',
    codeLink: 'https://github.com/Sahan-Dil/obesity-risk-prediction',
  },
  {
    title: 'Hello - social media web App',
    description:
      'Complete social media web application powered by react with chat, voice over search, gaming and like-comment and posting.',
    src: hello,
    technologies: ['React js', 'Express js', 'Firebase', 'MUI', 'socket.io'],
    codeLink: 'https://github.com/Sahan-Dil/Hello',
  },
  {
    title: 'Smart Learn - e learning mobile app',
    description:
      'A Complete Android E-learning Platform, including video conference, chat, live class, sharing matrials, Quizes and more.',
    src: smartlearn,
    technologies: ['java', 'Firebase', 'Jitsi'],
    codeLink: 'https://github.com/Sahan-Dil/SmartLearn',
  },
];

const MAX_DESCRIPTION_LENGTH = 100;

const truncateText = (text: string) => {
  const linkRegex = /(https?:\/\/\S+)/g;
  const parts = text.split(linkRegex) || [text];

  let usedLength = 0;

  const truncatedParts = parts.map((part, index) => {
    if (linkRegex.test(part)) {
      // Calculate the used length for the link
      usedLength += part.length;
      const truncatedLink =
        part.length > 20 ? part.slice(0, 20).trim() + '...' : part;
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {truncatedLink}
        </a>
      );
    } else {
      // For regular text, check remaining space after considering links
      const remainingLength = MAX_DESCRIPTION_LENGTH - usedLength;
      if (remainingLength > 0) {
        // If there's space remaining, show the part of the text within the limit
        usedLength += part.length;
        return (
          <span key={index}>
            {part.length <= remainingLength
              ? part
              : part.slice(0, remainingLength).trim() + '...'}
          </span>
        );
      } else {
        // If no space is left, show "..."
        return <span key={index}>...</span>;
      }
    }
  });

  return truncatedParts;
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
