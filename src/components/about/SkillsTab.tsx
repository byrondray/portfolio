'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Brain } from 'lucide-react';

interface Skill {
    name: string;
    level: 'expert' | 'advanced' | 'intermediate';
}

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        icon: <Code2 className='w-5 h-5' />,
        skills: [
            { name: 'React', level: 'expert' },
            { name: 'Next.js', level: 'expert' },
            { name: 'TypeScript', level: 'expert' },
            { name: 'React Native', level: 'expert' },
            { name: 'Expo', level: 'expert' },
            { name: 'Tailwind CSS', level: 'expert' },
            { name: 'HTMX', level: 'expert' },
            { name: 'Tanstack', level: 'expert' },
            { name: 'Framer Motion', level: 'advanced' },
            { name: 'SvelteKit', level: 'intermediate' },
        ],
    },
    {
        title: 'Backend',
        icon: <Server className='w-5 h-5' />,
        skills: [
            { name: 'ASP.NET Core', level: 'expert' },
            { name: 'Node.js', level: 'expert' },
            { name: 'Bun', level: 'expert' },
            { name: 'GraphQL', level: 'expert' },
            { name: 'REST APIs', level: 'expert' },
            { name: 'Hono', level: 'expert' },
            { name: 'Drizzle ORM', level: 'expert' },
            { name: 'Entity Framework', level: 'advanced' },
            { name: 'Python', level: 'intermediate' },
            { name: 'PHP/Laravel', level: 'intermediate' },
        ],
    },
    {
        title: 'Data & AI',
        icon: <Brain className='w-5 h-5' />,
        skills: [
            { name: 'PostgreSQL', level: 'expert' },
            { name: 'MySQL', level: 'expert' },
            { name: 'SQLite', level: 'expert' },
            { name: 'LLM Integration', level: 'expert' },
            { name: 'MCP (Model Context Protocol)', level: 'advanced' },
            { name: 'Firebase', level: 'intermediate' },
            { name: 'Machine Learning', level: 'intermediate' },
            { name: 'LangChain', level: 'intermediate' },
        ],
    },
    {
        title: 'Cloud & DevOps',
        icon: <Cloud className='w-5 h-5' />,
        skills: [
            { name: 'Render', level: 'expert' },
            { name: 'Vercel', level: 'expert' },
            { name: 'Railway', level: 'expert' },
            { name: 'AWS', level: 'advanced' },
            { name: 'Docker', level: 'advanced' },
            { name: 'Azure', level: 'intermediate' },
            { name: 'CI/CD', level: 'intermediate' },
        ],
    },
];

const getLevelColor = (level: string) => {
    switch (level) {
        case 'expert':
            return 'bg-gradient-to-r from-purple-500 to-pink-500';
        case 'advanced':
            return 'bg-gradient-to-r from-blue-500 to-cyan-500';
        case 'intermediate':
            return 'bg-gradient-to-r from-green-500 to-emerald-500';
        default:
            return 'bg-gray-600';
    }
};

const SkillCard = ({ category }: { category: SkillCategory }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all'
    >
        <div className='flex items-center gap-3 mb-4'>
            <div className='p-2 bg-gray-700/50 rounded-lg text-white'>
                {category.icon}
            </div>
            <h3 className='text-xl font-semibold text-white'>{category.title}</h3>
        </div>
        <div className='space-y-3'>
            {category.skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className='flex items-center justify-between gap-4'
                >
                    <span className='text-gray-200 font-medium'>{skill.name}</span>
                    <div className='flex items-center gap-2'>
                        <div className='w-24 h-2 bg-gray-700 rounded-full overflow-hidden'>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{
                                    width:
                                        skill.level === 'expert'
                                            ? '100%'
                                            : skill.level === 'advanced'
                                                ? '75%'
                                                : '50%',
                                }}
                                transition={{ duration: 0.8, delay: index * 0.05 + 0.3 }}
                                className={`h-full ${getLevelColor(skill.level)}`}
                            />
                        </div>
                        <span className='text-xs text-gray-400 capitalize w-20'>
                            {skill.level}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

export const SkillsTab = () => {
    return (
        <motion.div
            key='skills'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <SkillCard category={category} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
