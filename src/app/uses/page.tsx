import { Metadata } from 'next';
import { Code, Database, Cloud, Palette, Terminal, Zap } from 'lucide-react';

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

const toolCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    tools: [
      {
        name: 'React',
        description: 'Primary framework for building user interfaces',
        url: 'https://react.dev',
      },
      {
        name: 'Next.js',
        description: 'Full-stack React framework for production applications',
        url: 'https://nextjs.org',
      },
      {
        name: 'TypeScript',
        description: 'Type-safe JavaScript for better development experience',
        url: 'https://typescriptlang.org',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid UI development',
        url: 'https://tailwindcss.com',
      },
      {
        name: 'Framer Motion',
        description: 'Animation library for React applications',
        url: 'https://framer.com/motion',
      },
    ],
  },
  {
    title: 'Backend Development',
    icon: Database,
    tools: [
      {
        name: 'Node.js',
        description: 'JavaScript runtime for server-side development',
        url: 'https://nodejs.org',
      },
      {
        name: 'ASP.NET Core',
        description: 'Cross-platform framework for building web APIs',
        url: 'https://dotnet.microsoft.com',
      },
      {
        name: 'PostgreSQL',
        description: 'Advanced open-source relational database',
        url: 'https://postgresql.org',
      },
      {
        name: 'GraphQL',
        description: 'Query language for APIs with strong type system',
        url: 'https://graphql.org',
      },
      {
        name: 'Firebase',
        description: 'Backend-as-a-Service platform for rapid development',
        url: 'https://firebase.google.com',
      },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Zap,
    tools: [
      {
        name: 'OpenAI API',
        description: 'GPT models for natural language processing',
        url: 'https://openai.com',
      },
      {
        name: 'LangChain',
        description: 'Framework for developing LLM-powered applications',
        url: 'https://langchain.com',
      },
      {
        name: 'Anthropic Claude',
        description: 'AI assistant for complex reasoning tasks',
        url: 'https://anthropic.com',
      },
      {
        name: 'Hugging Face',
        description: 'Platform for machine learning models and datasets',
        url: 'https://huggingface.co',
      },
    ],
  },
  {
    title: 'Development Tools',
    icon: Terminal,
    tools: [
      {
        name: 'Visual Studio Code',
        description: 'Primary code editor with extensive extensions',
        url: 'https://code.visualstudio.com',
      },
      {
        name: 'Git',
        description: 'Version control system for tracking code changes',
        url: 'https://git-scm.com',
      },
      {
        name: 'GitHub',
        description: 'Platform for code hosting and collaboration',
        url: 'https://github.com',
      },
      {
        name: 'Cursor',
        description: 'AI-powered code editor for enhanced productivity',
        url: 'https://cursor.sh',
      },
      {
        name: 'Postman',
        description: 'API development and testing platform',
        url: 'https://postman.com',
      },
    ],
  },
  {
    title: 'Design & Productivity',
    icon: Palette,
    tools: [
      {
        name: 'Figma',
        description: 'Collaborative design tool for UI/UX design',
        url: 'https://figma.com',
      },
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes and project management',
        url: 'https://notion.so',
      },
      {
        name: 'Linear',
        description:
          'Issue tracking and project management for development teams',
        url: 'https://linear.app',
      },
      {
        name: 'Excalidraw',
        description: 'Virtual whiteboard for sketching diagrams and ideas',
        url: 'https://excalidraw.com',
      },
    ],
  },
  {
    title: 'Deployment & Infrastructure',
    icon: Cloud,
    tools: [
      {
        name: 'Vercel',
        description: 'Platform for deploying Next.js applications',
        url: 'https://vercel.com',
      },
      {
        name: 'Railway',
        description: 'Cloud platform for deploying full-stack applications',
        url: 'https://railway.app',
      },
      {
        name: 'AWS',
        description: 'Cloud computing services for scalable applications',
        url: 'https://aws.amazon.com',
      },
      {
        name: 'Docker',
        description: 'Containerization platform for consistent deployments',
        url: 'https://docker.com',
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        {/* Header */}
        <header className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 font-inter'>
            Tools & Technologies
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            A comprehensive overview of the development tools, frameworks, and
            technologies I use to build modern web applications and AI-powered
            solutions.
          </p>
        </header>

        {/* Tool Categories */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {toolCategories.map((category, categoryIndex) => (
            <article
              key={category.title}
              className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300'
            >
              <header className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center'>
                  <category.icon className='w-6 h-6 text-white' />
                </div>
                <h2 className='text-2xl font-bold text-white'>
                  {category.title}
                </h2>
              </header>

              <div className='space-y-4'>
                {category.tools.map((tool, toolIndex) => (
                  <div key={tool.name} className='group'>
                    <a
                      href={tool.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block p-4 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:border-gray-600 hover:bg-gray-900/70 transition-all duration-200'
                    >
                      <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors'>
                        {tool.name}
                      </h3>
                      <p className='text-gray-300 text-sm leading-relaxed'>
                        {tool.description}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <footer className='mt-16 text-center'>
          <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700'>
            <p className='text-gray-300'>
              This list is constantly evolving as I explore new technologies and
              tools. Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
