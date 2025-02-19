'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current.textContent || '';
    textRef.current.textContent = '';

    const letters = text.split('').map((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      return span;
    });

    letters.forEach((span) => textRef.current?.appendChild(span));

    const animation = anime.timeline({
      targets: letters,
      delay: anime.stagger(50),
      loop: true,
      easing: 'easeInOutQuad',
    });

    animation
      .add({
        translateY: -40,
        duration: 500,
      })
      .add({
        translateY: 0,
        duration: 500,
      });

    return () => {
      animation.pause();
      anime.remove(letters);
    };
  }, []);

  return (
    <div ref={textRef} className='text-6xl font-bold whitespace-pre text-white'>
      Hi I'm Byron
    </div>
  );
};

export default AnimatedText;
