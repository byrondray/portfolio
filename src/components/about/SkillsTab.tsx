"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cloud, Brain } from "lucide-react";

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React Native" },
      { name: "Expo" },
      { name: "Tailwind CSS" },
      { name: "Shadcn/ui" },
      { name: "Zustand" },
      { name: "HTMX" },
      { name: "Tanstack" },
      { name: "Framer Motion" },
      { name: "SvelteKit" },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "ASP.NET Core" },
      { name: "Node.js" },
      { name: "Bun" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "tRPC" },
      { name: "Hono" },
      { name: "Zod" },
      { name: "Drizzle ORM" },
      { name: "Prisma" },
      { name: "Entity Framework" },
      { name: "WebSockets" },
      { name: "Python" },
      { name: "PHP/Laravel" },
    ],
  },
  {
    title: "Data & AI",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Redis" },
      { name: "LLM Integration" },
      { name: "MCP (Model Context Protocol)" },
      { name: "Firebase" },
      { name: "Machine Learning" },
      { name: "LangChain" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "Render" },
      { name: "Vercel" },
      { name: "Railway" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "Nginx" },
      { name: "Azure" },
      { name: "CI/CD" },
      { name: "GitHub Actions" },
      { name: "Playwright" },
      { name: "Vitest" },
      { name: "Jest" },
      { name: "Postman" },
    ],
  },
];

const SkillCard = ({ category }: { category: SkillCategory }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all h-full"
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="p-2 bg-gray-700/50 rounded-lg text-white">
        {category.icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
      {category.skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
          <span className="text-gray-200 text-sm font-medium">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const SkillsTab = () => {
  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
