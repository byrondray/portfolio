import { Metadata } from 'next';
import { Search } from 'lucide-react';
import { projects, createSlug } from '@/data/projectData';
import { NotFoundPage } from '@/components/NotFoundPage';

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
    <NotFoundPage
      heading='Project Not Found'
      description="The project you're looking for doesn't exist or may have been moved. Check out my other projects or return home to explore my portfolio."
      secondaryAction={{
        href: '/#projects',
        label: 'Browse Projects',
        icon: Search,
      }}
      quickLinksTitle='Available Projects'
      quickLinks={projects.map((project) => ({
        key: project.id,
        href: `/details/${createSlug(project.title)}`,
        label: project.title,
      }))}
    />
  );
}
