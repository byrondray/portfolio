// app/page.tsx
'use client';

import AnimatedText from '@/components/animatedText';
import { BackgroundBeamsWithCollision } from '@/components/backgroundBeams';
import ProjectCards from '@/components/projectCards';
import { ScrollAnimation } from '@/components/scrollAnimation';
import { PageWrapper } from '@/components/pageWrapper';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <PageWrapper>
      <main className='relative min-h-screen bg-black'>
        <BackgroundBeamsWithCollision />
        <div className='relative min-h-screen w-full p-8'>
          {/* Top section */}
          <motion.div
            className='flex justify-center items-center mt-40'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AnimatedText />
          </motion.div>

          {/* Middle section */}
          <ScrollAnimation
            direction='up'
            delay={0.5}
            className='flex justify-center items-center mt-24'
          >
            <h1 className='text-2xl font-bold text-white text-center'>
              I&apos;m a fullstack web developer specializing in React, Next.js,
              ASP.NET, and Node.js. <br />
              I am passionate about creating innovative solutions that can help
              people in the real world, <br />
              with a focus on clean code, responsive design, and intuitive user
              experiences. <br />
              Check out some of the projects I&apos;ve built using modern
              frameworks and cloud technologies.
            </h1>
          </ScrollAnimation>

          <ProjectCards />

          <motion.div
            className='fixed right-20 top-12 flex gap-8'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href='https://github.com/byrondray'
              target='_blank'
              rel='noopener noreferrer'
              className='group'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='36'
                height='36'
                className='transition-transform duration-300 ease-in-out group-hover:scale-110'
              >
                <path
                  className='fill-white transition-colors duration-300 ease-in-out group-hover:fill-gray-400'
                  d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.724-4.043-1.61-4.043-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.092-.747.082-.732.082-.732 1.205.084 1.84 1.237 1.84 1.237 1.072 1.836 2.81 1.306 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.933 0-1.31.468-2.383 1.236-3.224-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.914 1.233 3.224 0 4.61-2.805 5.63-5.477 5.924.43.37.824 1.102.824 2.222v3.293c0 .32.19.694.8.575C20.565 21.8 24 17.3 24 12c0-6.63-5.373-12-12-12z'
                />
              </svg>
            </a>

            <a
              href='https://www.linkedin.com/in/byron-dray'
              target='_blank'
              rel='noopener noreferrer'
              className='group'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='36'
                height='36'
                className='transition-transform duration-300 ease-in-out group-hover:scale-110'
              >
                <path
                  className='fill-[#0077B5] transition-colors duration-300 ease-in-out group-hover:fill-[#005582]'
                  d='M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.227.792 24 1.77 24h20.46c.978 0 1.77-.773 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.09 20.452H3.544V9.087H7.09v11.365zm-1.773-12.99c-1.12 0-1.98-.875-1.98-1.958C3.337 5.418 4.197 4.543 5.317 4.543c1.118 0 1.98.875 1.98 1.96 0 1.083-.862 1.958-1.98 1.958zM20.452 20.452h-3.544v-5.7c0-1.36-.027-3.107-1.894-3.107-1.897 0-2.187 1.40-2.187 3.007v5.8h-3.543V9.087h3.404v1.555h.05c.474-.9 1.634-1.85 3.366-1.85 3.596 0 4.26 2.367 4.26 5.45v6.21z'
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </main>
    </PageWrapper>
  );
}
