'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageWrapper } from '@/components/pageWrapper';
import { BackgroundBeamsWithCollision } from '@/components/backgroundBeams';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import Link from 'next/link';
import {
  ArrowLeft,
  User,
  Code2,
  Brain,
} from 'lucide-react';

// Import the new tab components
import { AboutTab } from '@/components/about/AboutTab';
import { SkillsTab } from '@/components/about/SkillsTab';
import { EducationTab } from '@/components/about/EducationTab';

const AboutPageClient = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'education'>('about');
  const { theme } = useTheme();
  const isDarkTheme =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <PageWrapper>
      <main className='relative min-h-screen bg-transparent mb-20'>
        <BackgroundBeamsWithCollision />
        <div className='relative min-h-screen w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12'>
          {/* Navigation */}
          <motion.div
            className='pt-8 mb-8'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href='/'
              className={`flex items-center ${isDarkTheme
                ? 'text-white hover:text-gray-300'
                : 'text-gray-900 hover:text-gray-600'
                } transition-colors group w-fit font-inter font-medium`}
            >
              <ArrowLeft className='mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform' />
              Back to Home
            </Link>
          </motion.div>

          {/* Top section with title */}
          <motion.div
            className='mb-12 text-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1
              className={`text-5xl font-extrabold ${isDarkTheme ? 'text-white' : 'text-gray-900'
                } pb-2 transition-colors duration-300 font-inter tracking-tight`}
            >
              About Me
            </h1>
            <p
              className={`text-xl mt-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                } font-medium`}
            >
              Get to know more about my background and expertise
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className='max-w-6xl mx-auto'
          >
            <div className='flex justify-center mb-8'>
              <div className='bg-black/60 backdrop-blur-sm rounded-lg p-2 border border-gray-600'>
                <div className='flex space-x-2'>
                  <Button
                    onClick={() => setActiveTab('about')}
                    variant={activeTab === 'about' ? 'default' : 'ghost'}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 font-inter font-medium ${activeTab === 'about'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      }`}
                  >
                    <User size={18} />
                    <span>About</span>
                  </Button>
                  <Button
                    onClick={() => setActiveTab('education')}
                    variant={activeTab === 'education' ? 'default' : 'ghost'}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 font-inter font-medium ${activeTab === 'education'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      }`}
                  >
                    <Brain size={18} />
                    <span>Education</span>
                  </Button>
                  <Button
                    onClick={() => setActiveTab('skills')}
                    variant={activeTab === 'skills' ? 'default' : 'ghost'}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 font-inter font-medium ${activeTab === 'skills'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      }`}
                  >
                    <Code2 size={18} />
                    <span>Skills</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className='max-w-6xl mx-auto'>
              <AnimatePresence mode='wait'>
                {activeTab === 'about' && <AboutTab />}
                {activeTab === 'skills' && <SkillsTab />}
                {activeTab === 'education' && <EducationTab />}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className='max-w-5xl mx-auto mt-12 px-6'
        >
          <div className='bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700'>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
              <div className='text-center sm:text-left'>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Let's Connect
                </h3>
                <p className='text-gray-300 text-sm'>
                  Ready to collaborate or have questions? I'd love to hear from
                  you.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row items-center gap-4'>
                <ThemeToggle />
                <div className='hidden sm:block w-px h-8 bg-gray-600'></div>
                <div className='flex items-center gap-3 flex-wrap justify-center'>
                  <a
                    href='mailto:byrondray8@gmail.com'
                    className='group flex items-center gap-2 px-3 py-2 bg-gray-800/60 hover:bg-gray-700/60 rounded-lg transition-all duration-300 text-sm text-gray-200 hover:text-white'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='18'
                      height='18'
                      className='transition-transform duration-300 ease-in-out group-hover:scale-110'
                      fill='none'
                    >
                      <path
                        className='stroke-current'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
                      />
                      <path
                        className='stroke-current'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M22 6l-10 7L2 6'
                      />
                    </svg>
                    <span className='hidden xs:inline'>Email</span>
                  </a>

                  <a
                    href='https://github.com/byrondray'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center gap-2 px-3 py-2 bg-gray-800/60 hover:bg-gray-700/60 rounded-lg transition-all duration-300 text-sm text-gray-200 hover:text-white'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='18'
                      height='18'
                      className='transition-transform duration-300 ease-in-out group-hover:scale-110'
                    >
                      <path
                        className='fill-current'
                        d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.724-4.043-1.61-4.043-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.092-.747.082-.732.082-.732 1.205.084 1.84 1.237 1.84 1.237 1.072 1.836 2.81 1.306 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.933 0-1.31.468-2.383 1.236-3.224-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.914 1.233 3.224 0 4.61-2.805 5.63-5.477 5.924.43.37.824 1.102.824 2.222v3.293c0 .32.19.694.8.575C20.565 21.8 24 17.3 24 12c0-6.63-5.373-12-12-12z'
                      />
                    </svg>
                    <span className='hidden xs:inline'>GitHub</span>
                  </a>

                  <a
                    href='https://www.linkedin.com/in/byron-dray'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center gap-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-all duration-300 text-sm text-blue-200 hover:text-blue-100 border border-blue-600/30'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='18'
                      height='18'
                      className='transition-transform duration-300 ease-in-out group-hover:scale-110'
                    >
                      <path
                        className='fill-current'
                        d='M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.227.792 24 1.77 24h20.46c.978 0 1.77-.773 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.09 20.452H3.544V9.087H7.09v11.365zm-1.773-12.99c-1.12 0-1.98-.875-1.98-1.958C3.337 5.418 4.197 4.543 5.317 4.543c1.118 0 1.98.875 1.98 1.96 0 1.083-.862 1.958-1.98 1.958zM20.452 20.452h-3.544v-5.7c0-1.36-.027-3.107-1.894-3.107-1.897 0-2.187 1.40-2.187 3.007v5.8h-3.543V9.087h3.404v1.555h.05c.474-.9 1.634-1.85 3.366-1.85 3.596 0 4.26 2.367 4.26 5.45v6.21z'
                      />
                    </svg>
                    <span className='hidden xs:inline'>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </PageWrapper>
  );
};

export default AboutPageClient;