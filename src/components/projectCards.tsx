'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Relay Rideshare',
    description:
      'Description of your first project. What problem did it solve? What technologies did you use?',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    liveLink: 'https://project1.com',
    githubLink: 'https://github.com/username/project1',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Fairshare',
    description:
      'Description of your second project. Highlight the key features and your role in development.',
    technologies: ['TypeScript', 'Node.js', 'MongoDB'],
    liveLink: 'https://project2.com',
    githubLink: 'https://github.com/username/project2',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Flash Learn',
    description:
      'Description of your third project. What makes this project unique? What did you learn?',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    liveLink: 'https://project3.com',
    githubLink: 'https://github.com/username/project3',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Recipe App',
    description:
      'Description of your third project. What makes this project unique? What did you learn?',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    liveLink: 'https://project3.com',
    githubLink: 'https://github.com/username/project3',
    image: '/api/placeholder/600/400',
  },
];

const ProjectCards = () => {
  return (
    <div className='w-full px-8 py-16'>
      <h2 className='text-3xl font-bold mb-8 text-center text-white'>
        My Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <Card
            key={index}
            className='flex flex-col bg-black/40 backdrop-blur-md border-gray-800 hover:border-gray-700 transition-all duration-300'
          >
            <CardHeader>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover rounded-t-lg mb-4'
              />
              <CardTitle className='text-xl font-bold text-white'>
                {project.title}
              </CardTitle>
              <CardDescription className='text-gray-400'>
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className='px-2 py-1 bg-gray-800 rounded-full text-sm text-gray-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className='flex gap-4 mt-auto'>
              <Button
                variant='outline'
                className='flex-1 hover:bg-gray-300'
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                {project.title === 'Relay Rideshare'
                  ? 'Learn More'
                  : 'Live Demo'}
              </Button>
              <Button
                variant='outline'
                className='flex-1 hover:bg-gray-300'
                onClick={() => window.open(project.githubLink, '_blank')}
              >
                GitHub
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
