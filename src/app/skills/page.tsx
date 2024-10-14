'use client';
import React from 'react';
import { Code, Server, Smartphone, Cog } from 'lucide-react';

interface SkillsPageProps {
  theme: 'dark' | 'light';
}

interface Skill {
  name: string;
  iconUrl: string;
}

const skillsData = {
  Frontend: [
    {
      name: 'React Js',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Angular',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      name: 'HTML',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'Bootstrap',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Material UI',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    },
  ],
  Backend: [
    {
      name: 'Node.js',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express Js',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'Nest Js',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
    },
    {
      name: 'Python',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'Java',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'C#',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    },
    {
      name: 'Graph QL',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    },
    {
      name: 'MySQL',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'MongoDB',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Firebase',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    },
  ],
  Android: [
    {
      name: 'Java',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'Kotlin',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    },
    {
      name: 'XML',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    },
  ],
  Others: [
    {
      name: 'Git',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'Docker',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      name: 'AWS',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    },
    {
      name: 'Figma',
      iconUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
  ],
};

const SkillsPage: React.FC<SkillsPageProps | any> = ({ theme }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const cardBgColor = theme === 'dark' ? 'bg-[#16213e]' : 'bg-white';
  const cardBorderColor =
    theme === 'dark' ? 'border-[#815ac0]' : 'border-[#d2b7e5]';

  const renderSkillSection = (
    title: string,
    skills: Skill[],
    icon: React.ReactNode
  ) => (
    <div className={`p-6 rounded-lg ${cardBgColor} border ${cardBorderColor}`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-2">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.iconUrl}
              alt={skill.name}
              className="w-10 h-10 mb-2"
              onError={(e) => {
                e.currentTarget.src =
                  'https://via.placeholder.com/40?text=' + skill.name[0];
              }}
            />
            <span
              className={`px-2 py-1 text-xs rounded-full ${theme === 'dark' ? 'bg-[#7251b5] text-white' : 'bg-[#d2b7e5] text-black'}`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className={`min-h-screen py-20 ${textColor}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
        <p className="text-center mb-12">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderSkillSection(
            'Frontend',
            skillsData.Frontend,
            <Code className="w-6 h-6" />
          )}
          {renderSkillSection(
            'Backend',
            skillsData.Backend,
            <Server className="w-6 h-6" />
          )}
          {renderSkillSection(
            'Mobile App Development',
            skillsData.Android,
            <Smartphone className="w-6 h-6" />
          )}
          {renderSkillSection(
            'Others',
            skillsData.Others,
            <Cog className="w-6 h-6" />
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
