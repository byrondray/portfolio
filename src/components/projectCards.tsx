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
import { Brain, ChefHat, Database, Dna, Plane, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/projectData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollAnimation } from './scrollAnimation';
import { useTheme } from '@/components/theme-provider';

const ForkliftIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='80'
    height='80'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='text-indigo-400'
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
  const iconColors = {
    'Flash Learn': 'from-purple-500 to-indigo-500',
    'Recipe App': 'from-red-500 to-pink-500',
    'Warehouse CMS': 'from-indigo-500 to-blue-500',
    CytoNET: 'from-cyan-500 to-teal-500',
    'Travel Planner': 'from-blue-500 to-sky-500',
    default: 'from-emerald-500 to-green-500',
  };
  const getIconForProject = (title: string) => {
    switch (title) {
      case 'Flash Learn':
        return <Brain size={80} className='text-white' />;
      case 'Recipe App':
        return <ChefHat size={80} className='text-white' />;
      case 'Warehouse CMS':
        return <ForkliftIcon />;
      case 'CytoNET':
        return <Dna size={80} className='text-white' />;
      case 'Travel Planner':
        return <Plane size={80} className='text-white' />;
      default:
        return <Database size={80} className='text-white' />;
    }
  };

  return (
    <ScrollAnimation
      direction='up'
      delay={0.7}
      className='w-full py-8'
      threshold={0.05}
      rootMargin='100px 0px 0px 0px'
    >
      <motion.h2
        className={`text-3xl font-bold mb-12 text-center ${
          isDarkTheme ? 'text-white' : 'text-gray-900'
        } transition-colors duration-300 font-inter tracking-tight`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        My Projects
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
        {projects.map((project, index) => (
          <ScrollAnimation
            key={index}
            direction='up'
            delay={0.1 + index * 0.05}
            className='h-full'
            threshold={0.1}
            rootMargin='50px 0px 0px 0px'
            distance={30}
          >
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className='h-full'
            >
              <Card className='relative flex flex-col bg-black/50 backdrop-blur-xl border-gray-700 hover:border-gray-500 transition-all duration-300 h-full overflow-hidden group'>
                <div className='absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <CardHeader className='relative z-10 flex-shrink-0'>
                  <div className='flex justify-center items-center mb-6'>
                    {project.image ? (
                      <motion.div
                        className='relative w-32 h-32 rounded-2xl overflow-hidden shadow-2xl'
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className='object-contain'
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        className={`p-8 rounded-2xl bg-gradient-to-br ${
                          iconColors[
                            project.title as keyof typeof iconColors
                          ] || iconColors.default
                        } shadow-2xl`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {getIconForProject(project.title)}
                      </motion.div>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <CardTitle className='text-2xl font-bold text-white text-center'>
                      {project.title}
                    </CardTitle>
                    <CardDescription className='text-gray-300 text-center line-clamp-2 text-base'>
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className='relative z-10 flex-1 pb-2'>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        className='px-3 py-1 bg-gray-800/60 backdrop-blur-sm rounded-full text-xs text-gray-200 font-medium border border-gray-700'
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className='px-3 py-1 bg-gray-800/60 backdrop-blur-sm rounded-full text-xs text-gray-400 font-medium border border-gray-700'>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className='relative z-10 pt-4 pb-6'>
                  <Link href={`/details/${project.id}`} className='w-full'>
                    <Button
                      variant='outline'
                      className='w-full border-gray-600 bg-transparent hover:bg-white hover:text-gray-900 text-white font-semibold transition-all duration-300 group/btn'
                    >
                      <span className='flex items-center gap-2'>
                        Learn More
                        <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
                      </span>
                    </Button>
                  </Link>
                </CardFooter>

                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </Card>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCards;
