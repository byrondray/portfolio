'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

const AnimatedText: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const text = "Hi I'm Byron";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      className={`text-6xl font-extrabold whitespace-pre ${
        isDarkTheme ? 'text-white' : 'text-gray-900'
      } pb-2 transition-colors duration-300 font-inter inline-block`}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={child} className='inline-block'>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
