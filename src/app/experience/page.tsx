'use client';
import React from 'react';
import { Card, CardContent, Chip, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

interface ExperiencePageProps {
  theme: 'dark' | 'light';
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  logo: string;
}

const StyledChip = styled(Chip)<{ customtheme: 'dark' | 'light' }>(
  ({ customtheme }) => ({
    margin: '4px',
    backgroundColor:
      customtheme === 'dark'
        ? 'rgba(90, 24, 154, 0.15)'
        : 'rgba(114, 81, 181, 0.1)',
    color: customtheme === 'dark' ? '#7251b5' : '#5a189a',
    '&:hover': {
      backgroundColor:
        customtheme === 'dark'
          ? 'rgba(90, 24, 154, 0.25)'
          : 'rgba(114, 81, 181, 0.2)',
    },
  })
);

const TimelineLine = styled('div')(() => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '2px',
  height: '100%',
  background:
    'linear-gradient(to bottom, rgba(90, 24, 154, 0.3), rgba(114, 81, 181, 0.6))',
  '@media (max-width: 900px)': {
    left: '20px',
  },
}));

const TimelineDot = styled('div')<{ customtheme: 'dark' | 'light' }>(
  ({ customtheme }) => ({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#7251b5',
    border: `2px solid ${customtheme === 'dark' ? '#1E1E1E' : '#FFFFFF'}`,
    boxShadow: '0 0 0 4px rgba(90, 24, 154, 0.2)',
    '@media (max-width: 900px)': {
      left: '20px',
    },
  })
);

const ExperiencePage: React.FC<ExperiencePageProps | any> = ({ theme }) => {
  const experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'EvokeLabs (Pvt) Ltd',
      period: 'April 2025 - current',
      description:
        'Acting as a Team Lead in a fast-paced startup, leading full-stack development with TypeScript, React, Node.js, and Spring Boot. Focused on cloud-native architectures using AWS services, while driving Agile delivery and mentoring junior developers.',
      skills: [
        'React js',
        'Nextjs',
        'Node js',
        'Express js',
        'Spring Boot',
        'Typescript',
        'Tailwindcss',
        'MongoDB',
        'PostgreSQL',
        'Git',
        'Neo4j',
        'Redis',
        'Docker',
        'AWS',
        'Redux',
        'CI/CD',
      ],
      logo: '/evokelabs-logo.png',
    },
    {
      title: 'Associate Software Engineer',
      company: 'EvokeLabs (Pvt) Ltd',
      period: 'June 2023 - March 2025',
      description:
        'Working with TypeScript, Node.js, React, and AWS services, focusing on scalable, cloud-based solutions. Skilled in solution architecture, data streaming, and DevOps, I leverage tools like Docker, Kafka, Neo4j, and Redux to deliver responsive, high-performance systems.',
      skills: [
        'React js',
        'Nextjs',
        'Node js',
        'Express js',
        'Typescript',
        'Tailwindcss',
        'MongoDB',
        'TypeScript',
        'Git',
        'Jira',
        'Kafka',
        'Neo4j',
        'Redis',
        'Docker',
        'AWS',
        'Redux',
      ],
      logo: '/evokelabs-logo.png',
    },
    {
      title: 'Software Engineering Apprenticeship',
      company: 'eBuilder Technology Center Pvt Ltd.',
      period: 'Dec 2022 - Jun 2023',
      description:
        'Working on Web application using ReactJS, NodeJS, DynamoDB, and AWS. Following Agile Methodology',
      skills: [
        'AWS',
        'ReactJS',
        'Node Js',
        'DynamoDB',
        'Git',
        'Code Commit',
        'Agile',
        'Jira',
      ],
      logo: '/ebuilder-logo.png',
    },
    {
      title: 'Software Engineering Internship',
      company: 'eBuilder Technology Center Pvt Ltd.',
      period: 'Jun 2022 - Dec 2022',
      description:
        'Working on Web application using ReactJS, NodeJS, DynamoDB, and AWS. Following Agile Methodology',
      skills: [
        'AWS',
        'ReactJS',
        'Node Js',
        'DynamoDB',
        'Git',
        'Code Commit',
        'Agile',
        'Jira',
      ],
      logo: '/ebuilder-logo.png',
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            fontWeight: 'bold',
            mb: 8,
            mt: 4,
            color: theme === 'dark' ? '#FFFFFF' : '#000000',
            fontSize: { xs: '2.5rem', md: '3rem' },
          }}
        >
          Work Experience
        </Typography>

        <Box position="relative">
          <TimelineLine />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {experiences.map((exp, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  mb: 6,
                  mx: { xs: '20px', md: 0 },
                  position: 'relative',
                  '@media (max-width: 900px)': {
                    justifyContent: 'flex-start',
                    ml: '40px',
                    mr: '20px',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: '-20px', md: index % 2 === 0 ? 'auto' : '50%' },
                    right: { xs: 'auto', md: index % 2 === 0 ? '50%' : 'auto' },
                    top: '50%',
                    width: { xs: '20px', md: '40px' },
                    height: '2px',
                    backgroundColor: 'rgba(90, 24, 154, 0.4)',
                    transform: 'translateY(-50%)',
                  },
                }}
              >
                <TimelineDot customtheme={theme} sx={{ top: '50%' }} />

                <CardContainer className="inter-var">
                  <CardBody
                    className={`flex flex-col h-full w-full sm:w-[460px] rounded-xl border-2 ${
                      theme === 'dark'
                        ? 'border-[#815ac0] bg-gray-800'
                        : 'border-[#d2b7e5] bg-white'
                    } p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl`}
                  >
                    <CardItem
                      translateZ="50"
                      className="w-full mb-4 text-base sm:text-xl  p-2"
                    >
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Box
                          component="img"
                          // src={exp.logo || defaulticon}
                          alt={`${exp.company} logo`}
                          sx={{
                            width: { xs: 40, sm: 48 },
                            height: { xs: 40, sm: 48 },
                            objectFit: 'contain',
                            borderRadius: 1,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              color: theme === 'dark' ? '#FFFFFF' : '#000000',
                              fontWeight: 'bold',
                              fontSize: { xs: '1rem', sm: '1.25rem' },
                            }}
                          >
                            {exp.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: theme === 'dark' ? '#CCCCCC' : '#666666',
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                            }}
                          >
                            {exp.company}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme === 'dark' ? '#999999' : '#888888',
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            }}
                          >
                            {exp.period}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: theme === 'dark' ? '#CCCCCC' : '#444444',
                          mb: 2,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                        }}
                      >
                        {exp.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-2 py-1 text-xs rounded-full ${theme === 'dark' ? 'bg-[#7251b5] text-white' : 'bg-[#d2b7e5] text-black'}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </Box>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default ExperiencePage;
