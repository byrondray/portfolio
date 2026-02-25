'use client';

import AnimatedText from '@/components/animatedText';
import { BackgroundBeamsWithCollision } from '@/components/backgroundBeams';
import ProjectCards from '@/components/projectCards';
import { PageWrapper } from '@/components/pageWrapper';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <PageWrapper>
      <main className='relative min-h-screen bg-transparent'>
        <BackgroundBeamsWithCollision />
        <div className='relative min-h-screen w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center space-y-6 sm:space-y-8'>
          <motion.div
            className='mt-24 sm:mt-28 md:mt-32 min-h-[5rem] py-4 w-full flex justify-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className='mt-6 sm:mt-0'>
              <AnimatedText />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className='w-full flex flex-col items-center space-y-6 sm:space-y-6 md:space-y-8'
          >
            <motion.h1
              className='text-lg sm:text-xl font-medium text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Building AI-powered products with React, Gleam &amp;&nbsp;Next.js — currently shipping features at Arkhet.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className='flex items-center gap-4'
            >
              <a
                href='#projects'
                className='px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors'
              >
                View My Work
              </a>
              <Link
                href='/about'
                className='px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors'
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>

          <div id='projects' className='w-full scroll-mt-20'>
            <ProjectCards />
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
