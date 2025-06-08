import { Metadata } from 'next';
import {
  Search,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  Users,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

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

const processSteps = [
  {
    title: 'Discovery & Planning',
    icon: Search,
    description: 'Understanding your needs and defining project scope',
    details: [
      'Stakeholder interviews and requirements gathering',
      'Technical feasibility analysis and architecture planning',
      'User research and persona development',
      'Project timeline and milestone definition',
      'Technology stack selection and justification',
    ],
    duration: '1-2 weeks',
    deliverables: [
      'Project specification',
      'Technical architecture',
      'Timeline & milestones',
    ],
  },
  {
    title: 'Design & Prototyping',
    icon: Lightbulb,
    description: 'Creating user-centered designs and interactive prototypes',
    details: [
      'Wireframing and user flow mapping',
      'UI/UX design with accessibility considerations',
      'Interactive prototype development',
      'Design system creation for consistency',
      'Stakeholder feedback integration',
    ],
    duration: '1-3 weeks',
    deliverables: ['Design mockups', 'Interactive prototype', 'Design system'],
  },
  {
    title: 'Development',
    icon: Code,
    description: 'Building robust, scalable applications with clean code',
    details: [
      'Agile development with regular sprint cycles',
      'Test-driven development (TDD) approach',
      'Code reviews and pair programming sessions',
      'Continuous integration and automated testing',
      'Regular progress updates and demos',
    ],
    duration: '4-12 weeks',
    deliverables: ['Working application', 'Source code', 'Documentation'],
  },
  {
    title: 'Testing & Quality Assurance',
    icon: TestTube,
    description: 'Comprehensive testing to ensure reliability and performance',
    details: [
      'Unit testing for individual components',
      'Integration testing for system interactions',
      'End-to-end testing for user workflows',
      'Performance optimization and load testing',
      'Security auditing and vulnerability assessment',
    ],
    duration: '1-2 weeks',
    deliverables: [
      'Test reports',
      'Performance metrics',
      'Security assessment',
    ],
  },
  {
    title: 'Deployment & Launch',
    icon: Rocket,
    description: 'Smooth deployment with monitoring and optimization',
    details: [
      'Production environment setup and configuration',
      'Database migration and data validation',
      'Performance monitoring and error tracking',
      'SEO optimization and analytics setup',
      'User training and documentation delivery',
    ],
    duration: '1 week',
    deliverables: [
      'Live application',
      'Monitoring dashboard',
      'User documentation',
    ],
  },
  {
    title: 'Support & Maintenance',
    icon: Users,
    description: 'Ongoing support and continuous improvement',
    details: [
      'Bug fixes and performance optimizations',
      'Feature enhancements based on user feedback',
      'Security updates and dependency management',
      'Analytics review and optimization recommendations',
      'Regular health checks and system maintenance',
    ],
    duration: 'Ongoing',
    deliverables: [
      'Maintenance reports',
      'Feature updates',
      'Performance insights',
    ],
  },
];

const principles = [
  {
    title: 'User-Centered Design',
    description:
      'Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.',
  },
  {
    title: 'Agile Methodology',
    description:
      'Iterative development with regular feedback loops and adaptability to changing requirements.',
  },
  {
    title: 'Quality First',
    description:
      'Comprehensive testing, code reviews, and best practices ensure reliable, maintainable code.',
  },
  {
    title: 'Transparent Communication',
    description:
      'Regular updates, clear documentation, and open communication throughout the project lifecycle.',
  },
];

export default function ProcessPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        {/* Header */}
        <header className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 font-inter'>
            Development Process
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            A proven methodology for delivering high-quality software solutions,
            from initial concept to ongoing maintenance and support.
          </p>
        </header>

        {/* Process Steps */}
        <section className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            How I Work
          </h2>
          <div className='space-y-8'>
            {processSteps.map((step, index) => (
              <article key={step.title} className='relative'>
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className='absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-30 z-0' />
                )}

                <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 relative z-10'>
                  <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Step Header */}
                    <div className='lg:w-1/3'>
                      <div className='flex items-center gap-4 mb-4'>
                        <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center'>
                          <step.icon className='w-6 h-6 text-white' />
                        </div>
                        <div>
                          <span className='text-sm text-indigo-400 font-medium'>
                            Step {index + 1}
                          </span>
                          <h3 className='text-2xl font-bold text-white'>
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className='text-gray-300 mb-4'>{step.description}</p>
                      <div className='space-y-2'>
                        <div className='text-sm'>
                          <span className='text-gray-400'>Duration: </span>
                          <span className='text-white'>{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Step Details */}
                    <div className='lg:w-2/3'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                          <h4 className='text-lg font-semibold text-white mb-3'>
                            Key Activities
                          </h4>
                          <ul className='space-y-2'>
                            {step.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className='flex items-start gap-2 text-gray-300 text-sm'
                              >
                                <CheckCircle className='w-4 h-4 text-green-400 mt-0.5 flex-shrink-0' />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className='text-lg font-semibold text-white mb-3'>
                            Deliverables
                          </h4>
                          <ul className='space-y-2'>
                            {step.deliverables.map(
                              (deliverable, deliverableIndex) => (
                                <li
                                  key={deliverableIndex}
                                  className='flex items-center gap-2 text-gray-300 text-sm'
                                >
                                  <ArrowRight className='w-4 h-4 text-indigo-400' />
                                  {deliverable}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Core Principles
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700'
              >
                <h3 className='text-xl font-bold text-white mb-3'>
                  {principle.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className='text-center'>
          <div className='bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Start Your Project?
            </h2>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Let's discuss how this proven process can bring your ideas to life
              with quality, efficiency, and attention to detail.
            </p>
            <a
              href='mailto:byrondray8@gmail.com'
              className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105'
            >
              Get In Touch
              <ArrowRight className='w-5 h-5' />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
