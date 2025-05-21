'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProjectById } from '@/data/projectData';
import ProjectLayout from '@/components/projectLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/scrollAnimation';
import { PageWrapper } from '@/components/pageWrapper';
import { useTheme } from '@/components/theme-provider';
import React from 'react';

interface PageParams {
  id: string;
}

interface ProjectPageProps {
  params: PageParams | Promise<PageParams>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const unwrappedParams =
    params instanceof Promise ? React.use(params) : params;
  const id = unwrappedParams.id;
  const { theme } = useTheme();
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const details = project.details || {};

  // Check if videoUrl is a direct MP4 file or an embed URL
  const isDirectVideo = details.videoUrl?.endsWith('.mp4');

  return (
    <PageWrapper>
      <ProjectLayout title={project.title}>
        <motion.div
          className='mb-12 flex items-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.image && (
            <motion.div
              className='mr-6'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className='object-contain'
              />
            </motion.div>
          )}
          <div>
            <motion.h1
              className={`text-4xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } font-inter tracking-tight`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.title}
            </motion.h1>
            <motion.div
              className='flex flex-wrap gap-2 mt-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {' '}
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className='px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-100 font-medium'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <ScrollAnimation direction='up' delay={0.5}>
              {' '}
              <div className='bg-black/60 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-600'>
                <motion.h2
                  className='text-2xl font-semibold text-white mb-6'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Project Overview
                </motion.h2>
                <motion.p
                  className='text-gray-200 text-lg leading-relaxed mb-8 font-medium'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {details.longDescription || project.description}
                </motion.p>

                {(details.features || details.challenges) && (
                  <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {details.features && (
                      <div>
                        <motion.h3
                          className='text-xl font-semibold text-white mb-4'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          Key Features
                        </motion.h3>{' '}
                        <ul className='list-disc list-outside ml-6 text-gray-200 space-y-3 font-medium'>
                          {details.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className='pl-2'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.9 + idx * 0.1,
                              }}
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {details.challenges && (
                      <div>
                        <motion.h3
                          className='text-xl font-semibold text-white mb-4'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          Technical Challenges
                        </motion.h3>{' '}
                        <ul className='list-disc list-outside ml-6 text-gray-200 space-y-3 font-medium'>
                          {details.challenges.map((challenge, idx) => (
                            <motion.li
                              key={idx}
                              className='pl-2'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.9 + idx * 0.1,
                              }}
                            >
                              {challenge}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </ScrollAnimation>

            {details.videoUrl && (
              <ScrollAnimation direction='up' delay={0.3}>
                <div className='bg-black/60 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-600'>
                  <motion.h2
                    className='text-2xl font-semibold text-white mb-6'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Project Demo
                  </motion.h2>
                  <motion.div
                    className='aspect-video w-full rounded-lg overflow-hidden'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {isDirectVideo ? (
                      <video
                        src={details.videoUrl}
                        className='w-full h-full object-cover'
                        controls
                        poster={details.screenshots?.[0] || ''}
                      />
                    ) : (
                      <iframe
                        src={details.videoUrl}
                        className='w-full h-full'
                        title={`${project.title} demo video`}
                        allowFullScreen
                      ></iframe>
                    )}
                  </motion.div>
                </div>
              </ScrollAnimation>
            )}

            {details.techDetails && (
              <ScrollAnimation direction='up' delay={0.4}>
                <div className='bg-black/60 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-600'>
                  <motion.h2
                    className='text-2xl font-semibold text-white mb-6'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Technology Stack
                  </motion.h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {details.techDetails.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      >
                        {' '}
                        <Card className='bg-black/40 border-gray-600 hover:border-gray-500 transition-colors duration-300'>
                          <CardHeader>
                            <CardTitle className='text-lg text-white'>
                              {tech.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className='text-gray-200 font-medium'>
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

            {details.processSteps && (
              <ScrollAnimation direction='up' delay={0.5}>
                <div className='bg-black/60 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-600'>
                  <motion.h2
                    className='text-2xl font-semibold text-white mb-6'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Development Process
                  </motion.h2>
                  <div className='space-y-8'>
                    {details.processSteps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        className='flex items-start'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
                      >
                        <motion.div
                          className='flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-6'
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 + idx * 0.2 }}
                        >
                          <span className='text-white text-lg font-bold'>
                            {idx + 1}
                          </span>
                        </motion.div>
                        <div>
                          <motion.h3
                            className='text-xl font-medium text-white'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.8 + idx * 0.2,
                            }}
                          >
                            {step.title}
                          </motion.h3>
                          <motion.p
                            className='text-gray-300 mt-2 leading-relaxed'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.9 + idx * 0.2,
                            }}
                          >
                            {step.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>

          <div className='lg:col-span-1'>
            {' '}
            <motion.div
              className='bg-black/60 backdrop-blur-sm rounded-lg p-6 mb-8 sticky top-8 border border-gray-600'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className='flex flex-col space-y-6'>
                <div className='flex flex-col space-y-3'>
                  <motion.a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-center transition-colors flex items-center justify-center'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className='h-5 w-5 mr-2' />
                    {project.title === 'Relay Rideshare'
                      ? 'Learn More'
                      : 'Live Demo'}
                  </motion.a>

                  <motion.a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg text-center transition-colors flex items-center justify-center'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className='h-5 w-5 mr-2' />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {details.screenshots && details.screenshots.length > 0 && (
          <ScrollAnimation direction='up' delay={0.6}>
            <div className='bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-8'>
              <motion.h2
                className='text-2xl font-semibold text-white mb-6'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Screenshots
              </motion.h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {details.screenshots.map((screenshot, idx) => (
                  <motion.div
                    key={idx}
                    className='relative h-80 overflow-hidden rounded-lg bg-gray-800/50'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className='object-contain'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
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
