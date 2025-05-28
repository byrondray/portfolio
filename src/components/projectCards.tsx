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
import { Brain, ChefHat, Database } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/projectData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollAnimation } from './scrollAnimation';
import { useTheme } from '@/components/theme-provider';

const ForkliftIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='140'
    height='140'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#6366F1'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 12H5a2 2 0 0 0-2 2v5' />
    <circle cx='13' cy='19' r='2' />
    <circle cx='5' cy='19' r='2' />
    <path d='M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5' />
  </svg>
);

const ProjectCards = () => {
  const { theme } = useTheme();
  const isDarkTheme =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <ScrollAnimation
      direction='up'
      delay={0.7}
      className='w-full sm:px-8 py-8 px-1'
    >
      <motion.h2
        className={`text-3xl font-bold mb-8 text-center ${
          isDarkTheme ? 'text-white' : 'text-gray-900'
        } transition-colors duration-300 font-inter tracking-tight`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        My Projects
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6'>
        {projects.map((project, index) => (
          <ScrollAnimation
            key={index}
            direction='up'
            delay={0.3 + index * 0.1}
            className='h-full'
          >
            <motion.div
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
            >
              <Card className='flex flex-col bg-black/60 backdrop-blur-md border-gray-600 hover:border-gray-500 transition-all duration-300 h-full mb-3 mx-1'>
                <CardHeader>
                  <div className='flex justify-center items-center h-48 w-full mb-2'>
                    {project.title === 'Flash Learn' ? (
                      <Brain
                        size={140}
                        color='#818CF8'
                        className='text-white'
                      />
                    ) : project.title === 'Recipe App' ? (
                      <ChefHat
                        size={140}
                        className='text-white'
                        color='#F87171'
                      />
                    ) : project.title === 'Warehouse CMS' ? (
                      <ForkliftIcon />
                    ) : project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={140}
                        height={140}
                        className='object-contain'
                      />
                    ) : (
                      <Database
                        size={140}
                        color='#10B981'
                        className='text-white'
                      />
                    )}
                  </div>{' '}
                  <div className='w-full'>
                    {' '}
                    <CardTitle className='text-xl font-bold text-white'>
                      {project.title}
                    </CardTitle>
                    <CardDescription className='text-gray-200 h-16 line-clamp-3 mt-2 font-medium'>
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {' '}
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-100 font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='flex justify-center mt-auto'>
                  <Link href={`/details/${project.id}`} className='w-full'>
                    {' '}
                    <Button
                      variant='outline'
                      className={`w-full border-gray-500 ${
                        isDarkTheme ? 'text-white' : 'text-black'
                      } hover:bg-gray-700 hover:text-white font-medium`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCards;
