'use client';

import { BackgroundBeamsWithCollision } from '@/components/backgroundBeams';

interface ProjectLayoutProps {
  children: React.ReactNode;
  title: string;
}

const ProjectLayout = ({ children, title }: ProjectLayoutProps) => {
  return (
    <div className='relative min-h-screen bg-transparent'>
      <BackgroundBeamsWithCollision />
      <div className='relative min-h-screen w-full p-6 pt-20'>
        <div className='max-w-6xl mx-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
