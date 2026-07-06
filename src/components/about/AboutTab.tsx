'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useRef, useState } from 'react';

export const AboutTab = () => {
    // Mouse tracking state for about section
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const aboutCardRef = useRef<HTMLDivElement>(null);

    const handleAboutMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (aboutCardRef.current) {
            const rect = aboutCardRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <motion.div
            key='about'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className='max-w-4xl mx-auto'
        >
            <div
                ref={aboutCardRef}
                onMouseMove={handleAboutMouseMove}
                onMouseEnter={() => setIsAboutHovered(true)}
                onMouseLeave={() => setIsAboutHovered(false)}
                className='relative'
            >
                <Card className='relative bg-white/80 dark:bg-black/60 backdrop-blur-sm border-gray-200 dark:border-gray-600 p-8 overflow-hidden'>
                    {/* Mouse tracking glow effect */}
                    <div
                        className='absolute pointer-events-none transition-opacity duration-300 rounded-xl z-0'
                        style={{
                            left: mousePos.x - 150,
                            top: mousePos.y - 150,
                            width: '300px',
                            height: '300px',
                            background: `radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)`,
                            opacity: isAboutHovered ? 1 : 0,
                        }}
                    />
                    <CardContent className='relative z-10 p-0'>
                        <div className='space-y-6 text-gray-700 dark:text-gray-200 leading-relaxed'>
                            <motion.p
                                className='text-lg font-medium'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Hi, I&apos;m Byron! I&apos;m currently working as a fullstack developer
                                at <a href="https://saferschoolstogether.com" target="_blank" rel="noopener noreferrer"
                                    className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
                                    Safer Schools Together</a>, where I help build a Digital Threat
                                Assessment and Management (DTAM) platform that helps schools
                                identify, assess, and respond to student safety concerns. Our
                                mission is to give educators and safety teams the tools they need
                                to keep students safe.
                            </motion.p>

                            <motion.p
                                className='text-lg font-medium'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                What excites me most about this work is building software that has
                                a direct, tangible impact on student wellbeing. We&apos;re not just
                                building another case management tool, we&apos;re giving school teams a
                                clearer, faster way to assess risk and coordinate a response when
                                it matters most. By combining thoughtful workflows with reliable
                                engineering, we&apos;re helping schools act with more confidence and
                                less friction.
                            </motion.p>

                            <motion.p
                                className='text-lg font-medium'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                I&apos;m constantly exploring new ways to optimize performance, enhance user experience,
                                and maintain clean, scalable codebases that can evolve with our rapidly changing needs.
                                This hands-on experience building safety-critical software has reinforced my belief
                                that great engineering matters most when the stakes are real.
                            </motion.p>

                            <motion.p
                                className='text-lg font-medium'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Beyond my work at Safer Schools Together, I&apos;m deeply invested in expanding my
                                technical horizons. I&apos;m currently diving into machine learning fundamentals and
                                building intelligent agents using Model Context Protocol (MCP) to explore
                                autonomous system design.
                            </motion.p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};
