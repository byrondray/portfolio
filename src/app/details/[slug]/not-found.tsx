import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Not Found | Byron Dray Portfolio',
  description:
    'The project you are looking for could not be found. Browse other projects in my portfolio.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ProjectNotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4'>
      <div className='max-w-2xl mx-auto text-center'>
        {/* 404 Icon */}
        <div className='mb-8'>
          <div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-gray-700'>
            <FileQuestion className='w-12 h-12 text-indigo-400' />
          </div>
        </div>

        {/* Error Message */}
        <h1 className='text-6xl md:text-8xl font-bold text-white mb-4 font-inter'>
          404
        </h1>
        <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
          Project Not Found
        </h2>
        <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
          The project you're looking for doesn't exist or may have been moved.
          Check out my other projects or return home to explore my portfolio.
        </p>

        {/* Navigation Options */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
          <Link
            href='/'
            className='group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105'
          >
            <Home className='w-5 h-5' />
            Go Home
          </Link>

          <Link
            href='/#projects'
            className='group flex items-center justify-center gap-3 px-6 py-4 bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105'
          >
            <Search className='w-5 h-5' />
            Browse Projects
          </Link>
        </div>

        {/* Quick Links */}
        <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700'>
          <h3 className='text-white font-semibold mb-4'>Available Projects</h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>
            <Link
              href='/details/1'
              className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
            >
              Relay Rideshare
            </Link>
            <Link
              href='/details/2'
              className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
            >
              Recipe App
            </Link>
            <Link
              href='/details/3'
              className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
            >
              Flash Learn
            </Link>
            <Link
              href='/details/4'
              className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
            >
              Travel Planner
            </Link>
            <Link
              href='/details/5'
              className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
            >
              Warehouse CMS
            </Link>
            <Link
              href='/details/6'
              className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
            >
              CytoNET
            </Link>
            <Link
              href='/details/7'
              className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
            >
              Project 7
            </Link>
            <Link
              href='/details/8'
              className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
            >
              Project 8
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href='/'
          className='mt-6 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200'
        >
          <ArrowLeft className='w-4 h-4' />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
