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
import { Brain, ChefHat } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Relay Rideshare',
    description:
      'Relay rideshare app designed is for busy parents to schedule rides for their children who are traveling to the same destination at the same time.',
    technologies: ['React Native', 'Expo', 'GraphQL'],
    liveLink: 'https://relay.arspera.com/',
    githubLink: 'https://github.com/byrondray/relay',
    image: '/images/relay_logo.png',
  },
  {
    title: 'Fairshare',
    description:
      'FairShare is an innovative app designed to simplify group expense management and ensure financial fairness.',
    technologies: ['TypeScript', 'Bun', 'HTMX', 'Drizzle ORM'],
    liveLink: 'https://idsp.onrender.com/',
    githubLink: 'https://github.com/JustArmaan/FairShare',
    image: '/images/fs_logo.png',
  },
  {
    title: 'Flash Learn',
    description:
      'Flash Learn is a productivity-focused app designed to transform how users study and retain information.',
    technologies: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'Sqlite'],
    liveLink: 'https://flash-learn-f9pl.onrender.com/',
    githubLink: 'https://github.com/byrondray/flash-learn',
    image: '',
  },
  {
    title: 'Recipe App',
    description:
      'This app allows users to post their favorite recipes and browse recipes shared by others.',
    technologies: ['Next.js', 'Tailwind CSS', 'Amazon S3'],
    liveLink: 'https://recipe-tracker-pcw2.vercel.app/',
    githubLink: 'https://github.com/byrondray/recipe-tracker',
    image: '',
  },
];

const ProjectCards = () => {
  return (
    <div className='w-full sm:px-8 py-16 px-1'>
      <h2 className='text-3xl font-bold mb-8 text-center text-white'>
        My Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6'>
        {projects.map((project, index) => (
          <Card
            key={index}
            className='flex flex-col bg-black/40 backdrop-blur-md border-gray-800 hover:border-gray-700 transition-all duration-300 h-full'
          >
            <CardHeader>
              <div className='flex justify-center items-center h-48 w-full mb-2'>
                {project.title === 'Flash Learn' ? (
                  <Brain size={140} color='#818CF8' className='text-white' />
                ) : project.title === 'Recipe App' ? (
                  <ChefHat size={140} className='text-white' color='#F87171' />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={140}
                    height={140}
                    className='object-contain'
                  />
                )}
              </div>
              <div className='w-full'>
                <CardTitle className='text-xl font-bold text-white'>
                  {project.title}
                </CardTitle>
                <CardDescription className='text-gray-400 h-16 line-clamp-3 mt-2'>
                  {project.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className='px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-300'
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
