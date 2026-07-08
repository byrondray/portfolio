import { Metadata } from 'next';
import { Search } from 'lucide-react';
import { NotFoundPage } from '@/components/NotFoundPage';

export const metadata: Metadata = {
  title: 'Page Not Found | Byron Dray Portfolio',
  description:
    'The page you are looking for could not be found. Explore my portfolio projects and learn about my work as a Full Stack Developer & AI Engineer.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <NotFoundPage
      heading='Page Not Found'
      description="The page you're looking for doesn't exist or has been moved. Let's get you back on track to explore my portfolio and projects."
      secondaryAction={{ href: '/about', label: 'About Me', icon: Search }}
      quickLinksTitle='Quick Links'
      quickLinks={[
        { key: 'projects', href: '/#projects', label: 'Projects' },
        { key: 'about', href: '/about', label: 'About' },
        {
          key: 'github',
          href: 'https://github.com/byrondray',
          label: 'GitHub',
          external: true,
        },
        {
          key: 'linkedin',
          href: 'https://linkedin.com/in/byron-dray',
          label: 'LinkedIn',
          external: true,
        },
      ]}
    />
  );
}
