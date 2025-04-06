import { BackgroundBeamsWithCollision } from '@/components/backgroundBeams';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProjectLayoutProps {
  children: React.ReactNode;
  title: string;
}

const ProjectLayout = ({ children, title }: ProjectLayoutProps) => {
  return (
    <div className='relative min-h-screen bg-black'>
      <BackgroundBeamsWithCollision />
      <div className='relative min-h-screen w-full p-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-8'>
            <Link
              href='/'
              className='flex items-center text-white hover:text-gray-300 transition-colors group w-fit'
            >
              <ArrowLeft className='mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform' />
              Back to Projects
            </Link>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
