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
  title: `Byron's Portfolio`,
  description: 'Check out some of the projects I have built.',
  icons: {
    icon: '/favicon.svg',
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
