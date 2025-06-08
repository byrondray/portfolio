import './globals.css';
import { Inter } from 'next/font/google';
import { Geist, Geist_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Byron Dray - Full Stack Developer & AI Engineer',
    template: '%s | Byron Dray',
  },
  description:
    'Full Stack Developer & AI Engineer specializing in modern web technologies and intelligent solutions. Explore my portfolio of React, Next.js, Node.js, and AI-powered applications. Available for freelance work and collaboration.',
  keywords: [
    'Byron Dray',
    'Full Stack Developer',
    'AI Engineer',
    'Software Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Artificial Intelligence',
    'Machine Learning',
    'AI Integration',
    'Portfolio',
    'Web Development',
    'AI',
    'Byron',
    'Dray',
    'Freelance Developer',
    'Software Architect',
    'Frontend Developer',
    'Backend Developer',
    'React Native',
    'ASP.NET Core',
    'PostgreSQL',
    'LLM Integration',
    'Model Context Protocol',
    'MCP',
    'Fullstack',
  ],
  authors: [{ name: 'Byron Dray', url: 'https://byrondray.com' }],
  creator: 'Byron Dray',
  publisher: 'Byron Dray',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://byrondray.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://byrondray.com',
    siteName: "Byron Dray's Portfolio",
    title: 'Byron Dray - Full Stack Developer & AI Engineer',
    description:
      'Full Stack Developer & AI Engineer specializing in modern web technologies and intelligent solutions. Explore my portfolio of React, Next.js, Node.js, and AI-powered applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Byron Dray - Full Stack Developer & AI Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@byrondray',
    creator: '@byrondray',
    title: 'Byron Dray - Full Stack Developer & AI Engineer',
    description:
      'Full Stack Developer & AI Engineer specializing in modern web technologies and intelligent solutions. Explore my portfolio of React, Next.js, Node.js, and AI-powered applications.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Byron Dray - Full Stack Developer & AI Engineer Portfolio',
      },
    ],
  },
  category: 'technology',
};

// Enhanced Structured Data for SEO
const structuredData = [
  // Person schema
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://byrondray.com/#person',
    name: 'Byron Dray',
    jobTitle: 'Full Stack Developer & AI Engineer',
    description:
      'Full Stack Developer & AI Engineer specializing in modern web technologies and intelligent solutions.',
    url: 'https://byrondray.com',
    sameAs: [
      'https://github.com/byrondray',
      'https://www.linkedin.com/in/byron-dray',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'ASP.NET Core',
      'React Native',
      'PostgreSQL',
      'Artificial Intelligence',
      'Machine Learning',
      'LLM Integration',
      'Full Stack Development',
      'Software Engineering',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'United States',
      },
      skills: [
        'React Development',
        'AI Integration',
        'Full Stack Development',
        'Software Architecture',
        'Database Design',
        'API Development',
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'professional',
      email: 'byrondray8@gmail.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://byrondray.com',
    },
  },
  // WebSite schema with SearchAction
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://byrondray.com/#website',
    name: "Byron Dray's Portfolio",
    description: 'Full Stack Developer & AI Engineer Portfolio',
    url: 'https://byrondray.com',
    author: {
      '@id': 'https://byrondray.com/#person',
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://byrondray.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  // BreadcrumbList schema
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://byrondray.com/#breadcrumbs',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://byrondray.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://byrondray.com/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: 'https://byrondray.com/#projects',
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
        <meta name='theme-color' content='#6366f1' />
        <meta name='color-scheme' content='dark light' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Byron Dray' />
        <meta name='copyright' content='Byron Dray' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta name='revisit-after' content='7 days' />
        <meta property='og:site_name' content='Byron Dray Portfolio' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='me' href='https://github.com/byrondray' />
        <link rel='me' href='https://linkedin.com/in/byron-dray' />
        <link rel='sitemap' type='application/xml' href='/sitemap.xml' />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} font-inter antialiased`}
      >
        <ThemeProvider defaultTheme='dark' storageKey='portfolio-theme'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
