'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo / Name */}
            <Link
              href='/'
              className='text-lg font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
            >
              Byron Dray
            </Link>

            {/* Desktop Nav Links */}
            <div className='hidden md:flex items-center gap-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId='navbar-indicator'
                      className='absolute bottom-0 left-2 right-2 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full'
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className='hidden md:flex items-center gap-3'>
              <a
                href='mailto:byrondray8@gmail.com'
                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                aria-label='Email'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20' fill='none'>
                  <path
                    className='stroke-current'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
                  />
                  <path
                    className='stroke-current'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M22 6l-10 7L2 6'
                  />
                </svg>
              </a>
              <a
                href='https://github.com/byrondray'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                aria-label='GitHub'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'>
                  <path
                    className='fill-current'
                    d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.724-4.043-1.61-4.043-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.092-.747.082-.732.082-.732 1.205.084 1.84 1.237 1.84 1.237 1.072 1.836 2.81 1.306 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.933 0-1.31.468-2.383 1.236-3.224-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.914 1.233 3.224 0 4.61-2.805 5.63-5.477 5.924.43.37.824 1.102.824 2.222v3.293c0 .32.19.694.8.575C20.565 21.8 24 17.3 24 12c0-6.63-5.373-12-12-12z'
                  />
                </svg>
              </a>
              <a
                href='https://www.linkedin.com/in/byron-dray'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#0077B5] hover:text-[#005582] transition-colors'
                aria-label='LinkedIn'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'>
                  <path
                    className='fill-current'
                    d='M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.227.792 24 1.77 24h20.46c.978 0 1.77-.773 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.09 20.452H3.544V9.087H7.09v11.365zm-1.773-12.99c-1.12 0-1.98-.875-1.98-1.958C3.337 5.418 4.197 4.543 5.317 4.543c1.118 0 1.98.875 1.98 1.96 0 1.083-.862 1.958-1.98 1.958zM20.452 20.452h-3.544v-5.7c0-1.36-.027-3.107-1.894-3.107-1.897 0-2.187 1.40-2.187 3.007v5.8h-3.543V9.087h3.404v1.555h.05c.474-.9 1.634-1.85 3.366-1.85 3.596 0 4.26 2.367 4.26 5.45v6.21z'
                  />
                </svg>
              </a>
              <div className='w-px h-5 bg-gray-300 dark:bg-gray-600' />
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger */}
            <div className='flex md:hidden items-center gap-3'>
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className='p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                aria-label='Toggle menu'
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-x-0 top-16 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 md:hidden'
          >
            <div className='px-4 py-4 space-y-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className='pt-3 mt-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4 px-4'>
                <a
                  href='mailto:byrondray8@gmail.com'
                  className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                  aria-label='Email'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='22' height='22' fill='none'>
                    <path className='stroke-current' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                    <path className='stroke-current' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M22 6l-10 7L2 6' />
                  </svg>
                </a>
                <a
                  href='https://github.com/byrondray'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                  aria-label='GitHub'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='22' height='22'>
                    <path className='fill-current' d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.724-4.043-1.61-4.043-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.092-.747.082-.732.082-.732 1.205.084 1.84 1.237 1.84 1.237 1.072 1.836 2.81 1.306 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.933 0-1.31.468-2.383 1.236-3.224-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.914 1.233 3.224 0 4.61-2.805 5.63-5.477 5.924.43.37.824 1.102.824 2.222v3.293c0 .32.19.694.8.575C20.565 21.8 24 17.3 24 12c0-6.63-5.373-12-12-12z' />
                  </svg>
                </a>
                <a
                  href='https://www.linkedin.com/in/byron-dray'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#0077B5] hover:text-[#005582] transition-colors'
                  aria-label='LinkedIn'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='22' height='22'>
                    <path className='fill-current' d='M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.227.792 24 1.77 24h20.46c.978 0 1.77-.773 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.09 20.452H3.544V9.087H7.09v11.365zm-1.773-12.99c-1.12 0-1.98-.875-1.98-1.958C3.337 5.418 4.197 4.543 5.317 4.543c1.118 0 1.98.875 1.98 1.96 0 1.083-.862 1.958-1.98 1.958zM20.452 20.452h-3.544v-5.7c0-1.36-.027-3.107-1.894-3.107-1.897 0-2.187 1.40-2.187 3.007v5.8h-3.543V9.087h3.404v1.555h.05c.474-.9 1.634-1.85 3.366-1.85 3.596 0 4.26 2.367 4.26 5.45v6.21z' />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
