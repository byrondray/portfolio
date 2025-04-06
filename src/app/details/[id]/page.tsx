import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProjectById } from '@/data/projectData';
import ProjectLayout from '@/components/projectLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const details = project.details || {};

  return (
    <ProjectLayout title={project.title}>
      <div className='mb-12 flex items-center'>
        {project.image && (
          <div className='mr-6'>
            <Image
              src={project.image}
              alt={project.title}
              width={100}
              height={100}
              className='object-contain'
            />
          </div>
        )}
        <div>
          <h1 className='text-4xl font-bold text-white'>{project.title}</h1>
          <div className='flex flex-wrap gap-2 mt-4'>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className='px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-300'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          <div className='bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-6'>
              Project Overview
            </h2>
            <p className='text-gray-300 text-lg leading-relaxed mb-8'>
              {details.longDescription || project.description}
            </p>

            {(details.features || details.challenges) && (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-8'>
                {details.features && (
                  <div>
                    <h3 className='text-xl font-semibold text-white mb-4'>
                      Key Features
                    </h3>
                    <ul className='list-disc list-outside ml-6 text-gray-300 space-y-3'>
                      {details.features.map((feature, idx) => (
                        <li key={idx} className='pl-2'>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.challenges && (
                  <div>
                    <h3 className='text-xl font-semibold text-white mb-4'>
                      Technical Challenges
                    </h3>
                    <ul className='list-disc list-outside ml-6 text-gray-300 space-y-3'>
                      {details.challenges.map((challenge, idx) => (
                        <li key={idx} className='pl-2'>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {details.videoUrl && (
            <div className='bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-8'>
              <h2 className='text-2xl font-semibold text-white mb-6'>
                Project Demo
              </h2>
              <div className='aspect-video w-full'>
                <iframe
                  src={details.videoUrl}
                  className='w-full h-full rounded-lg'
                  title={`${project.title} demo video`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {details.techDetails && (
            <div className='bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-8'>
              <h2 className='text-2xl font-semibold text-white mb-6'>
                Technology Stack
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {details.techDetails.map((tech, idx) => (
                  <Card key={idx} className='bg-black/20 border-gray-800'>
                    <CardHeader>
                      <CardTitle className='text-lg text-white'>
                        {tech.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-300'>{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {details.processSteps && (
            <div className='bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-8'>
              <h2 className='text-2xl font-semibold text-white mb-6'>
                Development Process
              </h2>
              <div className='space-y-8'>
                {details.processSteps.map((step, idx) => (
                  <div key={idx} className='flex items-start'>
                    <div className='flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-6'>
                      <span className='text-white text-lg font-bold'>
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className='text-xl font-medium text-white'>
                        {step.title}
                      </h3>
                      <p className='text-gray-300 mt-2 leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='lg:col-span-1'>
          <div className='bg-black/40 backdrop-blur-sm rounded-lg p-6 mb-8 sticky top-8'>
            <div className='flex flex-col space-y-6'>
              <div className='flex flex-col space-y-3'>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-center transition-colors flex items-center justify-center'
                >
                  <ExternalLink className='h-5 w-5 mr-2' />
                  {project.title === 'Relay Rideshare'
                    ? 'Learn More'
                    : 'Live Demo'}
                </a>

                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg text-center transition-colors flex items-center justify-center'
                >
                  <Github className='h-5 w-5 mr-2' />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {details.screenshots && details.screenshots.length > 0 && (
        <div className='bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-6'>
            Screenshots
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {details.screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className='relative aspect-video overflow-hidden rounded-lg bg-gray-800/50'
              >
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </ProjectLayout>
  );
}
