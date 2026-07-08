import Link from 'next/link';
import { Home, ArrowLeft, FileQuestion, LucideIcon } from 'lucide-react';

type QuickLink = {
  key: string;
  href: string;
  label: string;
  external?: boolean;
};

type SecondaryAction = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export function NotFoundPage({
  heading,
  description,
  secondaryAction,
  quickLinksTitle,
  quickLinks,
}: {
  heading: string;
  description: string;
  secondaryAction: SecondaryAction;
  quickLinksTitle: string;
  quickLinks: QuickLink[];
}) {
  const SecondaryIcon = secondaryAction.icon;

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4'>
      <div className='max-w-2xl mx-auto text-center'>
        <div className='mb-8'>
          <div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-gray-700'>
            <FileQuestion className='w-12 h-12 text-indigo-400' />
          </div>
        </div>

        <h1 className='text-6xl md:text-8xl font-bold text-white mb-4 font-inter'>
          404
        </h1>
        <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
          {heading}
        </h2>
        <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
          {description}
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
          <Link
            href='/'
            className='group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105'
          >
            <Home className='w-5 h-5' />
            Go Home
          </Link>

          <Link
            href={secondaryAction.href}
            className='group flex items-center justify-center gap-3 px-6 py-4 bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105'
          >
            <SecondaryIcon className='w-5 h-5' />
            {secondaryAction.label}
          </Link>
        </div>

        <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700'>
          <h3 className='text-white font-semibold mb-4'>{quickLinksTitle}</h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>
            {quickLinks.map((link) =>
              link.external ? (
                <a
                  key={link.key}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  className='text-gray-300 hover:text-indigo-400 transition-colors duration-200'
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

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
