import { Metadata } from 'next';
import AboutPageClient from './about-client';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Byron Dray, a Full Stack Developer & AI Engineer with expertise in React, Next.js, Node.js, ASP.NET Core, and AI integration. Discover his background, skills, and current focus areas.',
  keywords: [
    'Byron Dray',
    'About',
    'Developer Background',
    'Skills',
    'Experience',
    'AI Engineer',
    'Full Stack Developer',
  ],
  openGraph: {
    title: 'About Byron Dray - Full Stack Developer & AI Engineer',
    description:
      'Learn more about Byron Dray, a Full Stack Developer & AI Engineer with expertise in React, Next.js, Node.js, ASP.NET Core, and AI integration.',
    url: 'https://byrondray.com/about',
  },
  twitter: {
    title: 'About Byron Dray - Full Stack Developer & AI Engineer',
    description:
      'Learn more about Byron Dray, a Full Stack Developer & AI Engineer with expertise in React, Next.js, Node.js, ASP.NET Core, and AI integration.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
