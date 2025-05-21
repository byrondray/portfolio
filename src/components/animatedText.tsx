'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText: React.FC = () => {
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
      y: 20,
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
      className='text-6xl font-bold whitespace-pre text-white overflow-hidden'
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
