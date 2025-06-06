'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProjectById } from '@/data/projectData';
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
} from 'lucide-react';
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
  const isDirectVideo = details.videoUrl?.endsWith('.mp4');

  const techIcons = [Code2, Layers, Zap, Rocket];

  return (
    <PageWrapper>
      <ProjectLayout title={project.title}>
        <motion.div
          className='relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-700 p-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50' />
          <div className='relative z-10 flex items-center'>
            {project.image && (
              <motion.div
                className='mr-8 flex-shrink-0'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className='relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-contain'
                  />
                </div>
              </motion.div>
            )}
            <div className='flex-1'>
              <motion.h1
                className='text-5xl font-bold text-white font-inter tracking-tight mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.title}
              </motion.h1>
              <motion.div
                className='flex flex-wrap gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className='px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm text-gray-100 font-medium border border-gray-600/50 hover:border-gray-500 transition-all duration-300'
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

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <ScrollAnimation direction='up' delay={0.5}>
              <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-gray-700 shadow-2xl'>
                <motion.h2
                  className='text-3xl font-bold text-white mb-6 flex items-center gap-3'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center'>
                    <Layers className='w-5 h-5 text-white' />
                  </div>
                  Project Overview
                </motion.h2>
                <motion.p
                  className='text-gray-300 text-lg leading-relaxed mb-8'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {details.longDescription || project.description}
                </motion.p>

                {(details.features || details.challenges) && (
                  <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {details.features && (
                      <div className='space-y-4'>
                        <motion.h3
                          className='text-xl font-bold text-white mb-4 flex items-center gap-2'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          <CheckCircle2 className='w-5 h-5 text-green-400' />
                          Key Features
                        </motion.h3>
                        <div className='space-y-3'>
                          {details.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className='flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.9 + idx * 0.1,
                              }}
                            >
                              <div className='w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0' />
                              <span className='text-gray-300 text-sm'>
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {details.challenges && (
                      <div className='space-y-4'>
                        <motion.h3
                          className='text-xl font-bold text-white mb-4 flex items-center gap-2'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          <Zap className='w-5 h-5 text-yellow-400' />
                          Technical Challenges
                        </motion.h3>
                        <div className='space-y-3'>
                          {details.challenges.map((challenge, idx) => (
                            <motion.div
                              key={idx}
                              className='flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.9 + idx * 0.1,
                              }}
                            >
                              <div className='w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0' />
                              <span className='text-gray-300 text-sm'>
                                {challenge}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </ScrollAnimation>

            {details.videoUrl && (
              <ScrollAnimation direction='up' delay={0.3}>
                <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-gray-700 shadow-2xl'>
                  <motion.h2
                    className='text-3xl font-bold text-white mb-6 flex items-center gap-3'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center'>
                      <Rocket className='w-5 h-5 text-white' />
                    </div>
                    Project Demo
                  </motion.h2>
                  <motion.div
                    className='aspect-video w-full rounded-xl overflow-hidden shadow-2xl'
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
                <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-gray-700 shadow-2xl'>
                  <motion.h2
                    className='text-3xl font-bold text-white mb-6 flex items-center gap-3'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center'>
                      <Code2 className='w-5 h-5 text-white' />
                    </div>
                    Technology Stack
                  </motion.h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {details.techDetails.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      >
                        <Card className='bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:shadow-xl'>
                          <CardHeader className='pb-3'>
                            <CardTitle className='text-lg text-white flex items-center gap-3'>
                              <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300'>
                                {React.createElement(
                                  techIcons[idx % techIcons.length],
                                  { className: 'w-4 h-4 text-indigo-400' }
                                )}
                              </div>
                              {tech.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className='text-gray-300 text-sm leading-relaxed'>
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
                <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-gray-700 shadow-2xl'>
                  <motion.h2
                    className='text-3xl font-bold text-white mb-8 flex items-center gap-3'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center'>
                      <Layers className='w-5 h-5 text-white' />
                    </div>
                    Development Process
                  </motion.h2>
                  <div className='relative'>
                    <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-20' />
                    <div className='space-y-8'>
                      {details.processSteps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          className='relative flex items-start gap-6'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                        >
                          <motion.div
                            className='relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg'
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.7 + idx * 0.1,
                            }}
                          >
                            <span className='text-white text-lg font-bold'>
                              {idx + 1}
                            </span>
                          </motion.div>
                          <div className='flex-1 p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300'>
                            <motion.h3
                              className='text-xl font-bold text-white mb-2'
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
                              className='text-gray-300 leading-relaxed'
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

          <div className='lg:col-span-1'>
            <motion.div
              className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-2xl p-6 mb-8 sticky top-8 border border-gray-700 shadow-2xl'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className='text-lg font-bold text-white mb-4'>
                Project Links
              </h3>
              <div className='flex flex-col space-y-3'>
                <motion.a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative overflow-hidden group w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl text-center transition-all duration-300 flex items-center justify-center shadow-lg'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className='relative z-10 flex items-center gap-2'>
                    <ExternalLink className='h-5 w-5' />
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
                    className='relative overflow-hidden group w-full py-3 px-4 bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium rounded-xl text-center transition-all duration-300 flex items-center justify-center border border-gray-700 hover:border-gray-600 shadow-lg'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className='h-5 w-5 mr-2' />
                    View Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {details.screenshots && details.screenshots.length > 0 && (
          <ScrollAnimation direction='up' delay={0.6}>
            <div className='bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-gray-700 shadow-2xl'>
              <motion.h2
                className='text-3xl font-bold text-white mb-8 flex items-center gap-3'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center'>
                  <Layers className='w-5 h-5 text-white' />
                </div>
                Gallery
              </motion.h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {details.screenshots.map((screenshot, idx) => (
                  <motion.div
                    key={idx}
                    className='group relative h-80 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-2xl'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className='object-contain group-hover:scale-105 transition-transform duration-300'
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
