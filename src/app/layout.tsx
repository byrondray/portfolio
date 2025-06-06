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
  ],
  authors: [{ name: 'Byron Dray' }],
  creator: 'Byron Dray',
  publisher: 'Byron Dray',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
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
        alt: 'Byron Dray - Full Stack Developer & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Byron Dray - Full Stack Developer & AI Engineer',
    description:
      'Full Stack Developer & AI Engineer specializing in modern web technologies and intelligent solutions. Explore my portfolio of React, Next.js, Node.js, and AI-powered applications.',
    creator: '@byrondray',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
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
