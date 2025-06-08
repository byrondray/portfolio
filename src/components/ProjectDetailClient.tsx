'use client';

import Image from 'next/image';
import { Project } from '@/data/projectData';
import ProjectLayout from '@/components/projectLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Zap,
  Code2,
  Layers,
  Rocket,
  Brain,
  ChefHat,
  Dna,
  Database,
  Plane,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/scrollAnimation';
import { PageWrapper } from '@/components/pageWrapper';
import React from 'react';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const details = project.details || {};

  // Support both single video (backward compatibility) and multiple videos
  const videos =
    details.videos ||
    (details.videoUrl
      ? [{ url: details.videoUrl, title: 'Project Demo' }]
      : []);

  const techIcons = [Code2, Layers, Zap, Rocket];

  return (
    <PageWrapper>
      <ProjectLayout title={project.title}>
        <motion.div
          className='relative mb-6 md:mb-12 overflow-hidden rounded-xl md:rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-700 p-4 md:p-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50' />
          <div className='relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8'>
            <motion.div
              className='flex-shrink-0'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.image ? (
                <div className='relative w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    fill
                    className='object-contain'
                  />
                </div>
              ) : (
                <motion.div
                  className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${
                    project.title === 'Flash Learn'
                      ? 'from-purple-500 to-indigo-500'
                      : project.title === 'Recipe App'
                      ? 'from-red-500 to-pink-500'
                      : project.title === 'Warehouse CMS'
                      ? 'from-indigo-500 to-blue-500'
                      : project.title === 'CytoNET'
                      ? 'from-cyan-500 to-teal-500'
                      : project.title === 'Travel Planner'
                      ? 'from-blue-500 to-sky-500'
                      : 'from-emerald-500 to-green-500'
                  } shadow-2xl`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.title === 'Flash Learn' ? (
                    <Brain size={40} className='text-white md:w-12 md:h-12' />
                  ) : project.title === 'Recipe App' ? (
                    <ChefHat size={40} className='text-white md:w-12 md:h-12' />
                  ) : project.title === 'Warehouse CMS' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='text-white md:w-12 md:h-12'
                    >
                      <path d='M12 12H5a2 2 0 0 0-2 2v5' />
                      <circle cx='13' cy='19' r='2' />
                      <circle cx='5' cy='19' r='2' />
                      <path d='M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5' />
                    </svg>
                  ) : project.title === 'CytoNET' ? (
                    <Dna size={40} className='text-white md:w-12 md:h-12' />
                  ) : project.title === 'Travel Planner' ? (
                    <Plane size={40} className='text-white md:w-12 md:h-12' />
                  ) : (
                    <Database
                      size={40}
                      className='text-white md:w-12 md:h-12'
                    />
                  )}
                </motion.div>
              )}
            </motion.div>
            <div className='flex-1 text-center md:text-left'>
              <motion.h1
                className='text-2xl sm:text-3xl md:text-5xl font-bold text-white font-inter tracking-tight mb-3 md:mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.title}
              </motion.h1>
              <motion.div
                className='flex flex-wrap gap-1.5 md:gap-2 justify-center md:justify-start'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className='px-2 py-1 md:px-4 md:py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-xs md:text-sm text-gray-100 font-medium border border-gray-600/50 hover:border-gray-500 transition-all duration-300'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8'>
          <div className='lg:col-span-2 order-2 lg:order-1 space-y-4 md:space-y-6'>
            <ScrollAnimation
              direction='up'
              delay={0.1}
              threshold={0.1}
              rootMargin='50px 0px 0px 0px'
              distance={30}
            >
              <article className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-700 shadow-2xl'>
                <motion.h2
                  className='text-xl md:text-3xl font-bold text-white mb-3 md:mb-6 flex items-center gap-2 md:gap-3'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className='w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center'>
                    <Layers className='w-3.5 h-3.5 md:w-5 md:h-5 text-white' />
                  </div>
                  Project Overview
                </motion.h2>
                <motion.p
                  className='text-gray-300 text-sm md:text-lg leading-relaxed'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {details.longDescription || project.description}
                </motion.p>

                {(details.features || details.challenges) && (
                  <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {details.features && (
                      <div className='space-y-3 md:space-y-4'>
                        <motion.h3
                          className='text-base md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          <CheckCircle2 className='w-4 h-4 md:w-5 md:h-5 text-green-400' />
                          Key Features
                        </motion.h3>
                        <div className='space-y-2 md:space-y-3'>
                          {details.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className='flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.9 + idx * 0.1,
                              }}
                            >
                              <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 mt-1.5 md:mt-2 flex-shrink-0' />
                              <span className='text-gray-300 text-xs md:text-sm'>
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {details.challenges && (
                      <div className='space-y-3 md:space-y-4'>
                        <motion.h3
                          className='text-base md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.0 }}
                        >
                          <Zap className='w-4 h-4 md:w-5 md:h-5 text-yellow-400' />
                          Challenges Solved
                        </motion.h3>
                        <div className='space-y-2 md:space-y-3'>
                          {details.challenges.map((challenge, idx) => (
                            <motion.div
                              key={idx}
                              className='flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 1.0 + idx * 0.1,
                              }}
                            >
                              <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400 mt-1.5 md:mt-2 flex-shrink-0' />
                              <span className='text-gray-300 text-xs md:text-sm'>
                                {challenge}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </article>
            </ScrollAnimation>

            {/* Videos Section */}
            {videos.length > 0 && (
              <ScrollAnimation
                direction='up'
                delay={0.12}
                threshold={0.1}
                rootMargin='50px 0px 0px 0px'
                distance={30}
              >
                <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-700 shadow-2xl'>
                  <motion.h2
                    className='text-xl md:text-3xl font-bold text-white mb-4 md:mb-8 flex items-center gap-2 md:gap-3'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className='w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center'>
                      <Rocket className='w-3.5 h-3.5 md:w-5 md:h-5 text-white' />
                    </div>
                    Project Demo
                  </motion.h2>
                  <div className='grid grid-cols-1 gap-4 md:gap-6'>
                    {videos.map((video, idx) => (
                      <motion.div
                        key={idx}
                        className='relative overflow-hidden rounded-lg md:rounded-xl bg-gray-800/50 border border-gray-700'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                      >
                        {video.title && (
                          <div className='p-3 md:p-4 border-b border-gray-700'>
                            <h3 className='text-base md:text-lg font-semibold text-white'>
                              {video.title}
                            </h3>
                            {video.description && (
                              <p className='text-gray-300 text-xs md:text-sm mt-1'>
                                {video.description}
                              </p>
                            )}
                          </div>
                        )}
                        <div className='aspect-video'>
                          <video
                            controls
                            className='w-full h-full object-cover'
                            preload='metadata'
                            poster={video.thumbnail}
                          >
                            <source src={video.url} type='video/mp4' />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            )}

            {/* Tech Details */}
            {details.techDetails && (
              <ScrollAnimation
                direction='up'
                delay={0.13}
                threshold={0.1}
                rootMargin='50px 0px 0px 0px'
                distance={30}
              >
                <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-700 shadow-2xl'>
                  <motion.h2
                    className='text-xl md:text-3xl font-bold text-white mb-4 md:mb-8 flex items-center gap-2 md:gap-3'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className='w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center'>
                      <Code2 className='w-3.5 h-3.5 md:w-5 md:h-5 text-white' />
                    </div>
                    Technologies Used
                  </motion.h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
                    {details.techDetails.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      >
                        <Card className='bg-gray-800/30 border-gray-700/50 hover:border-gray-600 transition-all duration-300 h-full'>
                          <CardHeader className='pb-2 md:pb-3'>
                            <CardTitle className='text-white text-sm md:text-lg flex items-center gap-2 md:gap-3'>
                              <div className='w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center'>
                                {techIcons[idx % techIcons.length] &&
                                  React.createElement(
                                    techIcons[idx % techIcons.length],
                                    {
                                      className:
                                        'w-3 h-3 md:w-4 md:h-4 text-white',
                                    }
                                  )}
                              </div>
                              {tech.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className='text-gray-300 text-xs md:text-sm leading-relaxed'>
                              {tech.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            )}

            {/* Process Steps */}
            {details.processSteps && (
              <ScrollAnimation
                direction='up'
                delay={0.15}
                threshold={0.1}
                rootMargin='50px 0px 0px 0px'
                distance={30}
              >
                <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-700 shadow-2xl'>
                  <motion.h2
                    className='text-xl md:text-3xl font-bold text-white mb-4 md:mb-8 flex items-center gap-2 md:gap-3'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className='w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center'>
                      <Layers className='w-3.5 h-3.5 md:w-5 md:h-5 text-white' />
                    </div>
                    Development Process
                  </motion.h2>
                  <div className='relative'>
                    <div className='absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-20' />
                    <div className='space-y-4 md:space-y-8'>
                      {details.processSteps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          className='relative flex items-start gap-3 md:gap-6'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.6 + idx * 0.1,
                          }}
                        >
                          <motion.div
                            className='relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg'
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.7 + idx * 0.1,
                            }}
                          >
                            <span className='text-white text-sm md:text-lg font-bold'>
                              {idx + 1}
                            </span>
                          </motion.div>
                          <div className='flex-1 p-3 md:p-6 rounded-lg md:rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300'>
                            <motion.h3
                              className='text-base md:text-xl font-bold text-white mb-1 md:mb-2'
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.8 + idx * 0.1,
                              }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p
                              className='text-gray-300 text-xs md:text-base leading-relaxed'
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.9 + idx * 0.1,
                              }}
                            >
                              {step.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1 order-1 lg:order-2 mb-4 lg:mb-0'>
            <motion.div
              className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 lg:sticky lg:top-8 border border-gray-700 shadow-2xl'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className='text-base md:text-lg font-bold text-white mb-3 md:mb-4'>
                Project Links
              </h3>
              <div className='flex flex-col space-y-2 md:space-y-3'>
                <motion.a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative overflow-hidden group w-full py-2 md:py-3 px-3 md:px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg md:rounded-xl text-center transition-all duration-300 flex items-center justify-center shadow-lg text-sm md:text-base'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className='relative z-10 flex items-center gap-2'>
                    <ExternalLink className='h-4 w-4 md:h-5 md:w-5' />
                    {project.title === 'Relay Rideshare'
                      ? 'Learn More'
                      : 'Live Demo'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </motion.a>
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative overflow-hidden group w-full py-2 md:py-3 px-3 md:px-4 bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium rounded-lg md:rounded-xl text-center transition-all duration-300 flex items-center justify-center border border-gray-700 hover:border-gray-600 shadow-lg text-sm md:text-base'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className='h-4 w-4 md:h-5 md:w-5 mr-2' />
                    View Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        {details.screenshots && details.screenshots.length > 0 && (
          <ScrollAnimation
            direction='up'
            delay={0.2}
            threshold={0.05}
            rootMargin='100px 0px 0px 0px'
            distance={30}
          >
            {/* Gallery Header - constrained container */}
            <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 mt-4 md:mt-6 border border-gray-700 shadow-2xl'>
              <motion.h2
                className='text-xl md:text-3xl font-bold text-white mb-4 md:mb-8 flex items-center gap-2 md:gap-3'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className='w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center'>
                  <Layers className='w-3.5 h-3.5 md:w-5 md:h-5 text-white' />
                </div>
                Gallery
              </motion.h2>
            </div>

            {/* Full-width image grid on mobile */}
            <div className='-mx-4 sm:mx-0 mt-4 md:mt-6'>
              <div className='grid grid-cols-1 gap-4 md:gap-6'>
                {details.screenshots.map((screenshot, idx) => (
                  <motion.div
                    key={idx}
                    className='group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-0 sm:border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-2xl sm:rounded-lg md:rounded-xl'
                    style={{
                      height: 'auto',
                      aspectRatio: 'auto',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
                    <div className='relative w-full flex items-center justify-center'>
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        width={800}
                        height={1200}
                        className='w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300 max-h-[60vh] sm:max-h-[70vh]'
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw'
                        priority={idx < 3}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        )}
      </ProjectLayout>
    </PageWrapper>
  );
}
