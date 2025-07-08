'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const EducationTab = () => {
    return (
        <motion.div
            key='education'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className='max-w-4xl mx-auto'
        >
            <Card className='bg-black/60 backdrop-blur-sm border-gray-600 p-8'>
                <CardContent className='p-0'>
                    <div className='space-y-8'>
                        {/* Education Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='text-center'
                        >
                            <h2 className='text-3xl font-bold text-white mb-2'>
                                Full-Stack Web Development Diploma
                            </h2>
                            <p className='text-xl text-indigo-400'>
                                British Columbia Institute of Technology (BCIT)
                            </p>
                            <p className='text-gray-400 mt-1'>2023 - 2025</p>
                        </motion.div>

                        {/* Program Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='space-y-4'
                        >
                            <h3 className='text-xl font-semibold text-white'>Program Overview</h3>
                            <p className='text-gray-200 leading-relaxed'>
                                I completed BCIT's intensive 2-year Full-Stack Web Development Diploma program,
                                a comprehensive hands-on program that prepared me for the demands of modern web development.
                                The program featured <span className='text-indigo-400 font-semibold'>7 courses per term</span>,
                                requiring exceptional time management skills and the ability to balance multiple projects simultaneously.
                            </p>
                        </motion.div>

                        {/* Key Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='space-y-4'
                        >
                            <h3 className='text-xl font-semibold text-white'>Key Highlights</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='bg-gray-800/40 rounded-lg p-4 border border-gray-700'>
                                    <h4 className='text-indigo-400 font-semibold mb-2'>Comprehensive Curriculum</h4>
                                    <p className='text-gray-300 text-sm'>
                                        Covered full-stack development including front-end frameworks, back-end programming,
                                        database management, server configuration, and modern web architectures.
                                    </p>
                                </div>
                                <div className='bg-gray-800/40 rounded-lg p-4 border border-gray-700'>
                                    <h4 className='text-indigo-400 font-semibold mb-2'>Industry Collaboration</h4>
                                    <p className='text-gray-300 text-sm'>
                                        Worked with real clients on production-ready applications, gaining valuable experience
                                        in client communication and project delivery.
                                    </p>
                                </div>
                                <div className='bg-gray-800/40 rounded-lg p-4 border border-gray-700'>
                                    <h4 className='text-indigo-400 font-semibold mb-2'>Team-Based Learning</h4>
                                    <p className='text-gray-300 text-sm'>
                                        Collaborated extensively with designers and developers in interdisciplinary teams,
                                        honing communication and project management skills.
                                    </p>
                                </div>
                                <div className='bg-gray-800/40 rounded-lg p-4 border border-gray-700'>
                                    <h4 className='text-indigo-400 font-semibold mb-2'>Intensive Workload</h4>
                                    <p className='text-gray-300 text-sm'>
                                        Successfully managed 7 concurrent courses each term while maintaining a 93% average and delivering quality projects.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Skills Developed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='space-y-4'
                        >
                            <h3 className='text-xl font-semibold text-white'>Core Competencies Developed</h3>
                            <div className='space-y-3'>
                                <div className='flex items-start gap-3'>
                                    <div className='w-2 h-2 bg-indigo-400 rounded-full mt-2'></div>
                                    <p className='text-gray-200'>
                                        <span className='font-semibold'>Team Collaboration:</span> Developed strong communication
                                        skills working in diverse teams on end-to-end web applications.
                                    </p>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <div className='w-2 h-2 bg-indigo-400 rounded-full mt-2'></div>
                                    <p className='text-gray-200'>
                                        <span className='font-semibold'>Problem Solving:</span> Learned to quickly adapt to new
                                        technologies and solve complex technical challenges under pressure.
                                    </p>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <div className='w-2 h-2 bg-indigo-400 rounded-full mt-2'></div>
                                    <p className='text-gray-200'>
                                        <span className='font-semibold'>Project Management:</span> Gained experience in agile
                                        methodologies and delivering projects from conception to deployment.
                                    </p>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <div className='w-2 h-2 bg-indigo-400 rounded-full mt-2'></div>
                                    <p className='text-gray-200'>
                                        <span className='font-semibold'>Source Control & Version Management:</span> Mastered Git workflows,
                                        branching strategies, and collaborative development practices for team-based projects.
                                    </p>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <div className='w-2 h-2 bg-indigo-400 rounded-full mt-2'></div>
                                    <p className='text-gray-200'>
                                        <span className='font-semibold'>UX/UI Design Fundamentals:</span> Learned user-centered design
                                        principles, wireframing, prototyping, and design tools like Figma for creating intuitive interfaces.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};
