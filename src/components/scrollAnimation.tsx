'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
}

const getDirectionOffset = (
  direction: ScrollAnimationProps['direction'],
  distance: number
) => {
  switch (direction) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: distance };
    case 'right':
      return { x: -distance };
    default:
      return { y: 0, x: 0 };
  }
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0.1,
  direction = 'up',
  duration = 0.5,
  className = '',
  once = true,
  distance = 50,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          ...getDirectionOffset(direction, distance),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
