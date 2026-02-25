'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ['Full-Stack Developer', 'AI Engineer', 'Problem Solver'];

const AnimatedText: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const text = "Hi, I'm Byron";

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
    <div className='flex flex-col items-center gap-3'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className="text-5xl sm:text-6xl font-extrabold whitespace-pre text-gray-900 dark:text-white pb-2 transition-colors duration-300 inline-block"
      >
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={child} className='inline-block'>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
      <div className='h-8 flex items-center'>
        <AnimatePresence mode='wait'>
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='text-lg sm:text-xl font-medium text-indigo-500 dark:text-indigo-400'
          >
            {roles[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedText;
