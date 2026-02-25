import { Metadata } from 'next';
import ProcessClient from '@/components/ProcessClient';

export const metadata: Metadata = {
  title: 'Development Process | Byron Dray',
  description:
    'Learn about my comprehensive development process for building full-stack applications and AI-powered solutions. From discovery to deployment, see how I deliver quality software.',
  keywords: [
    'development process',
    'software development lifecycle',
    'agile development',
    'full stack development process',
    'AI development process',
    'web development methodology',
    'project management',
    'Byron Dray',
    'software engineering process',
  ],
  openGraph: {
    title: 'Development Process | Byron Dray',
    description:
      'Learn about my comprehensive development process for building full-stack applications and AI-powered solutions.',
    type: 'article',
    url: 'https://byrondray.com/process',
  },
  alternates: {
    canonical: 'https://byrondray.com/process',
  },
};

export default function ProcessPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900'>
      <div className='max-w-6xl mx-auto px-4 pt-24 pb-16'>
        <ProcessClient />
      </div>
    </div>
  );
}
