"use client";

import React, { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  ChefHat,
  Database,
  Dna,
  Plane,
  ArrowRight,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import { projects, createSlug } from "@/data/projectData";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollAnimation } from "./scrollAnimation";
import { useTheme } from "@/components/theme-provider";

const ForkliftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-indigo-400"
  >
    <path d="M12 12H5a2 2 0 0 0-2 2v5" />
    <circle cx="13" cy="19" r="2" />
    <circle cx="5" cy="19" r="2" />
    <path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
  </svg>
);

const StockChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    className="text-white"
  >
    <defs>
      {/* Gradient for the chart area */}
      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>

      {/* Gradient for the line */}
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
        <stop offset="50%" stopColor="currentColor" stopOpacity="0.9" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
      </linearGradient>

      {/* Glow effect */}
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Shadow for background */}
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background circle with subtle shadow */}
    <circle
      cx="40"
      cy="40"
      r="36"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeOpacity="0.2"
      filter="url(#shadow)"
    />

    {/* Refined grid system */}
    <g stroke="currentColor" strokeWidth="0.3" opacity="0.15">
      {/* Horizontal lines */}
      <line x1="16" y1="24" x2="64" y2="24" />
      <line x1="16" y1="32" x2="64" y2="32" />
      <line x1="16" y1="40" x2="64" y2="40" />
      <line x1="16" y1="48" x2="64" y2="48" />
      <line x1="16" y1="56" x2="64" y2="56" />

      {/* Vertical lines */}
      <line x1="24" y1="20" x2="24" y2="60" />
      <line x1="32" y1="20" x2="32" y2="60" />
      <line x1="40" y1="20" x2="40" y2="60" />
      <line x1="48" y1="20" x2="48" y2="60" />
      <line x1="56" y1="20" x2="56" y2="60" />
    </g>

    {/* Chart axes */}
    <g stroke="currentColor" strokeWidth="0.8" opacity="0.4">
      <line x1="16" y1="60" x2="64" y2="60" /> {/* X-axis */}
      <line x1="16" y1="20" x2="16" y2="60" /> {/* Y-axis */}
    </g>

    {/* Chart area fill with gradient */}
    <path
      d="M 18 54 
         C 22 50, 26 46, 30 42
         C 34 38, 38 32, 42 28
         C 46 24, 50 22, 54 20
         C 58 18, 60 17, 62 16
         L 62 60 
         L 18 60 Z"
      fill="url(#chartGradient)"
    />

    {/* Main chart line with glow effect */}
    <path
      d="M 18 54 
         C 22 50, 26 46, 30 42
         C 34 38, 38 32, 42 28
         C 46 24, 50 22, 54 20
         C 58 18, 60 17, 62 16"
      stroke="url(#lineGradient)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#glow)"
    />

    {/* Enhanced data points */}
    <g fill="currentColor">
      <circle cx="18" cy="54" r="2" opacity="0.8" />
      <circle cx="30" cy="42" r="2" opacity="0.8" />
      <circle cx="42" cy="28" r="2" opacity="0.8" />
      <circle cx="54" cy="20" r="2" opacity="0.8" />
      <circle cx="62" cy="16" r="2" opacity="0.8" />

      {/* Inner dots for contrast */}
      <circle cx="18" cy="54" r="0.8" fill="white" opacity="0.9" />
      <circle cx="30" cy="42" r="0.8" fill="white" opacity="0.9" />
      <circle cx="42" cy="28" r="0.8" fill="white" opacity="0.9" />
      <circle cx="54" cy="20" r="0.8" fill="white" opacity="0.9" />
      <circle cx="62" cy="16" r="0.8" fill="white" opacity="0.9" />
    </g>

    {/* Modern dollar symbol with better typography */}
    <g transform="translate(10, 8)">
      <circle cx="4" cy="6" r="6" fill="currentColor" fillOpacity="0.1" />
      <text
        x="4"
        y="9"
        fontFamily="SF Pro Display, -apple-system, system-ui, sans-serif"
        fontSize="7"
        fontWeight="600"
        fill="currentColor"
        textAnchor="middle"
        opacity="0.8"
      >
        $
      </text>
    </g>

    {/* Subtle trend arrow for extra visual appeal */}
    <g transform="translate(58, 12)" opacity="0.6">
      <path
        d="M 0 4 L 4 0 L 4 2 L 8 2 L 8 4 L 4 4 L 4 6 Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const ProjectCards = () => {
  const { theme } = useTheme();
  const isDarkTheme =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const iconColors = {
    "Flash Learn": "from-purple-500 to-indigo-500",
    "Recipe App": "from-red-500 to-pink-500",
    "Cookbook+": "from-red-500 to-pink-500",
    "Warehouse CMS": "from-indigo-500 to-blue-500",
    CytoNET: "from-cyan-500 to-teal-500",
    "Travel Planner": "from-blue-500 to-sky-500",
    "AI Stock Tracker": "from-green-500 to-emerald-500",
    "Los Hermanos": "from-orange-500 to-amber-500",
    default: "from-emerald-500 to-green-500",
  };
  const getIconForProject = (title: string) => {
    switch (title) {
      case "Flash Learn":
        return <Brain size={80} className="text-white" />;
      case "Recipe App":
        return <ChefHat size={80} className="text-white" />;
      case "Cookbook+":
        return <ChefHat size={80} className="text-white" />;
      case "Warehouse CMS":
        return <ForkliftIcon />;
      case "CytoNET":
        return <Dna size={80} className="text-white" />;
      case "Travel Planner":
        return <Plane size={80} className="text-white" />;
      case "AI Stock Tracker":
        return <StockChartIcon />;
      case "Los Hermanos":
        return <Shirt size={80} className="text-white" />;
      default:
        return <Database size={80} className="text-white" />;
    }
  };

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isCardHovered, setIsCardHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    return (
      <ScrollAnimation
        key={index}
        direction="up"
        delay={0.1 + index * 0.05}
        className="h-full"
        threshold={0.1}
        rootMargin="50px 0px 0px 0px"
        distance={30}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleCardMouseMove}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="h-full relative"
        >
          <Card className="relative flex flex-col bg-black/30 backdrop-blur-lg border-gray-700 hover:border-gray-500 transition-all duration-300 h-full overflow-hidden group">
            {/* Mouse tracking glow effect */}
            <div
              className="absolute pointer-events-none transition-opacity duration-300 rounded-xl z-0"
              style={{
                left: mousePos.x - 150,
                top: mousePos.y - 150,
                width: "300px",
                height: "300px",
                background: `radial-gradient(circle, ${
                  project.title === "Flash Learn" || project.title === "Arkhet"
                    ? "rgba(139, 92, 246, 0.3)"
                    : project.title === "Recipe App" ||
                      project.title === "Cookbook+"
                    ? "rgba(236, 72, 33, 0.3)"
                    : project.title === "Warehouse CMS"
                    ? "rgba(99, 102, 241, 0.3)"
                    : project.title === "CytoNET"
                    ? "rgba(6, 182, 212, 0.3)"
                    : project.title === "Travel Planner"
                    ? "rgba(59, 130, 246, 0.3)"
                    : project.title === "AI Stock Tracker"
                    ? "rgba(16, 185, 129, 0.3)"
                    : project.title === "Los Hermanos"
                    ? "rgba(249, 115, 22, 0.3)"
                    : project.title === "Relay Rideshare" ||
                      project.title === "Rezen Gaming"
                    ? "rgba(239, 68, 68, 0.3)"
                    : "rgba(16, 185, 129, 0.3)"
                } 0%, transparent 70%)`,
                opacity: isCardHovered ? 1 : 0,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10 flex-shrink-0">
              <div className="flex justify-center items-center mb-6">
                {project.image ? (
                  <motion.div
                    className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    className={`p-8 rounded-2xl bg-gradient-to-br ${
                      iconColors[project.title as keyof typeof iconColors] ||
                      iconColors.default
                    } shadow-2xl`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getIconForProject(project.title)}
                  </motion.div>
                )}
              </div>
              <div className="space-y-2">
                <CardTitle className="text-2xl font-bold text-white text-center">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-center line-clamp-2 text-base">
                  {project.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 flex-1 pb-2">
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm rounded-full text-xs text-gray-200 font-medium border border-gray-700"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm rounded-full text-xs text-gray-400 font-medium border border-gray-700">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </CardContent>{" "}
            <CardFooter className="relative z-10 pt-4 pb-6">
              <Link
                href={`/details/${createSlug(project.title)}`}
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full border-gray-600 bg-transparent hover:bg-white hover:text-gray-900 text-white font-semibold transition-all duration-300 group/btn"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </CardFooter>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        </motion.div>
      </ScrollAnimation>
    );
  };

  return (
    <ScrollAnimation
      direction="up"
      delay={0.7}
      className="w-full py-8"
      threshold={0.05}
      rootMargin="100px 0px 0px 0px"
    >
      <motion.h2
        className={`text-3xl font-bold mb-12 text-center ${
          isDarkTheme ? "text-white" : "text-gray-900"
        } transition-colors duration-300 font-inter tracking-tight`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCards;
