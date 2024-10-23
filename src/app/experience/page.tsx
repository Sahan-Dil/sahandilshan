'use client';
import React from 'react';
import { Card, CardContent, Chip, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

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

// Move styled components outside the component to prevent recreation on each render
const StyledCard = styled(Card)<{ customtheme: 'dark' | 'light' }>(
  ({ customtheme }) => ({
    transition: 'all 0.3s ease-in-out',
    backgroundColor: customtheme === 'dark' ? '#1E1E1E' : '#FFFFFF',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow:
        customtheme === 'dark'
          ? '0 8px 30px rgba(255, 0, 130, 0.2)'
          : '0 8px 30px rgba(255, 0, 130, 0.1)',
    },
  })
);

const StyledChip = styled(Chip)<{ customtheme: 'dark' | 'light' }>(
  ({ customtheme }) => ({
    margin: '4px',
    backgroundColor:
      customtheme === 'dark'
        ? 'rgba(255, 0, 130, 0.15)'
        : 'rgba(255, 0, 130, 0.1)',
    color: customtheme === 'dark' ? '#FF69B4' : '#FF1493',
    '&:hover': {
      backgroundColor:
        customtheme === 'dark'
          ? 'rgba(255, 0, 130, 0.25)'
          : 'rgba(255, 0, 130, 0.2)',
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
    'linear-gradient(to bottom, rgba(255, 0, 130, 0.3), rgba(255, 0, 130, 0.6))',
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
    backgroundColor: '#FF1493',
    border: `2px solid ${customtheme === 'dark' ? '#1E1E1E' : '#FFFFFF'}`,
    boxShadow: '0 0 0 4px rgba(255, 0, 130, 0.2)',
    '@media (max-width: 900px)': {
      left: '20px',
    },
  })
);

const ExperiencePage: React.FC<ExperiencePageProps | any> = ({ theme }) => {
  const experiences: Experience[] = [
    {
      title: 'Associate Software Engineer',
      company: 'EvokeLabs (Pvt) Ltd',
      period: 'June 2023 - current',
      description:
        'Working on Web application using Angular, NestJS, and MongoDB',
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
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: '-20px', md: index % 2 === 0 ? 'auto' : '50%' },
                    right: { xs: 'auto', md: index % 2 === 0 ? '50%' : 'auto' },
                    top: '50%',
                    width: { xs: '20px', md: '40px' },
                    height: '2px',
                    backgroundColor: 'rgba(255, 0, 130, 0.4)',
                    transform: 'translateY(-50%)',
                  },
                }}
              >
                <TimelineDot customtheme={theme} sx={{ top: '50%' }} />

                <StyledCard
                  customtheme={theme}
                  sx={{
                    width: { xs: '100%', md: '45%' },
                    ml: { xs: 4, md: index % 2 === 0 ? 0 : 'auto' },
                    mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Box
                        component="img"
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        sx={{
                          width: 48,
                          height: 48,
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
                          }}
                        >
                          {exp.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: theme === 'dark' ? '#CCCCCC' : '#666666',
                          }}
                        >
                          {exp.company}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme === 'dark' ? '#999999' : '#888888',
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
                      }}
                    >
                      {exp.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {exp.skills.map((skill, skillIndex) => (
                        <StyledChip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          customtheme={theme}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </StyledCard>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default ExperiencePage;
