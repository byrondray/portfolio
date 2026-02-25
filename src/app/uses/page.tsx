import { Metadata } from 'next';
import UsesClient from '@/components/UsesClient';

export const metadata: Metadata = {
  title: 'Tools & Technologies I Use | Byron Dray',
  description:
    'Discover the development tools, technologies, and software I use daily as a Full Stack Developer & AI Engineer. From React and Next.js to AI frameworks and development environments.',
  keywords: [
    'development tools',
    'programming languages',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'AI tools',
    'development environment',
    'software engineer tools',
    'full stack development',
    'Byron Dray',
  ],
  openGraph: {
    title: 'Tools & Technologies I Use | Byron Dray',
    description:
      'Discover the development tools, technologies, and software I use daily as a Full Stack Developer & AI Engineer.',
    type: 'article',
    url: 'https://byrondray.com/uses',
  },
  alternates: {
    canonical: 'https://byrondray.com/uses',
  },
};

export default function UsesPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900'>
      <div className='max-w-6xl mx-auto px-4 pt-24 pb-16'>
        <UsesClient />
      </div>
    </div>
  );
}
