'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, RotateCw, TriangleAlert } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4'>
      <div className='max-w-2xl mx-auto text-center'>
        <div className='mb-8'>
          <div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-gray-700'>
            <TriangleAlert className='w-12 h-12 text-indigo-400' />
          </div>
        </div>

        <h1 className='text-2xl md:text-3xl font-bold text-white mb-4'>
          Something Went Wrong
        </h1>
        <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
          An unexpected error occurred while loading this page. You can try
          again or head back home.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <button
            onClick={reset}
            className='group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105'
          >
            <RotateCw className='w-5 h-5' />
            Try Again
          </button>

          <Link
            href='/'
            className='group flex items-center justify-center gap-3 px-6 py-4 bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105'
          >
            <Home className='w-5 h-5' />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
