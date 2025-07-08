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
                <Card className='relative bg-black/60 backdrop-blur-sm border-gray-600 p-8 overflow-hidden'>
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
                        <div className='space-y-6 text-gray-200 leading-relaxed'>
                            <motion.p
                                className='text-lg font-medium'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Hi, I'm Byron! I'm currently working as a fullstack developer
                                at <a href="https://arkhet.com" target="_blank" rel="noopener noreferrer"
                                    className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
                                    Arkhet</a>, where we're building an innovative prototyping tool
                                that empowers product managers to rapidly ideate and iterate
                                using AI-powered generations. Our mission is to bridge the gap
                                between concept and creation, making product development more
                                intuitive and efficient.
                            </motion.p>

                            <motion.p
                                className='text-lg font-medium'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                What excites me most about this work is the intersection of
                                creativity and technology. We're not just building another design
                                tool, we're reimagining how product managers can go from a
                                rough idea to a tangible prototype in minutes rather than days.
                                By integrating advanced AI capabilities with intuitive user
                                interfaces, we're enabling teams to explore more possibilities,
                                validate concepts faster, and ultimately build better products.
                            </motion.p>

                            <motion.p
                                className='text-lg font-medium'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                I'm constantly exploring new ways to optimize performance, enhance user experience,
                                and maintain clean, scalable codebases that can evolve with our rapidly changing needs.
                                This hands-on experience at the forefront of AI technology has reinforced my belief
                                that the future of product development lies in tools that augment human creativity
                                rather than replace it.
                            </motion.p>

                            <motion.p
                                className='text-lg font-medium'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Beyond my work at Arkhet, I'm deeply invested in expanding my technical horizons.
                                I'm currently diving into machine learning fundamentals and building intelligent
                                agents using Model Context Protocol (MCP) to explore autonomous system design.
                                I'm also working on
                                <a href="https://rezengaming.com" target="_blank" rel="noopener noreferrer"
                                    className="text-indigo-400 hover:text-indigo-300 underline transition-colors mx-1">
                                    Rezen Gaming</a>, a passion project that combines my love for gaming and competition
                                with web development.
                            </motion.p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};
