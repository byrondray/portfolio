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
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { projects, createSlug } from "@/data/projectData";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollAnimation } from "./scrollAnimation";
import { getProjectGradient, getProjectIcon } from "./icons/project-accents";

const ProjectCards = () => {
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
        <Link href={`/details/${createSlug(project.title)}`} className="h-full block">
        <motion.div
          ref={cardRef}
          onMouseMove={handleCardMouseMove}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="h-full relative"
        >
          <Card className="relative flex flex-col bg-white/80 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 h-full overflow-hidden group">
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
                    : project.title === "Cookbook+"
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
                    : project.title === "Stock Earnings Analyzer"
                    ? "rgba(20, 184, 166, 0.3)"
                    : project.title === "Relay Rideshare" ||
                      project.title === "Rezen Gaming"
                    ? "rgba(239, 68, 68, 0.3)"
                    : "rgba(16, 185, 129, 0.3)"
                } 0%, transparent 70%)`,
                opacity: isCardHovered ? 1 : 0,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-900/50 dark:to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative z-10 flex-shrink-0">
              <div className="flex justify-center items-center mb-6">
                {project.image ? (
                  project.imageDark ? (
                    <>
                      <motion.div
                        className={`relative w-32 h-32 overflow-hidden dark:hidden ${project.imageBorderless ? '' : 'rounded-2xl shadow-2xl'}`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                          sizes="128px"
                        />
                      </motion.div>
                      <motion.div
                        className={`relative w-32 h-32 overflow-hidden hidden dark:block ${project.imageBorderless ? '' : 'rounded-2xl shadow-2xl'}`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src={project.imageDark}
                          alt={project.title}
                          fill
                          className="object-contain"
                          sizes="128px"
                        />
                      </motion.div>
                    </>
                  ) : (
                    <motion.div
                      className={`relative w-32 h-32 overflow-hidden ${project.imageBorderless ? '' : 'rounded-2xl shadow-2xl'}`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                        sizes="128px"
                      />
                    </motion.div>
                  )
                ) : (
                  <motion.div
                    className={`p-8 rounded-2xl bg-gradient-to-br ${getProjectGradient(
                      project.title
                    )} shadow-2xl`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getProjectIcon(project.title)}
                  </motion.div>
                )}
              </div>
              <div className="space-y-2">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                  {project.title}
                </CardTitle>
                {project.category && (
                  <div className="flex justify-center">
                    <span className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 font-medium">
                      {project.category}
                    </span>
                  </div>
                )}
                <CardDescription className="text-gray-600 dark:text-gray-300 text-center line-clamp-2 text-base">
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
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800/60 backdrop-blur-sm rounded-full text-xs text-gray-700 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800/60 backdrop-blur-sm rounded-full text-xs text-gray-500 dark:text-gray-400 font-medium border border-gray-200 dark:border-gray-700">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </CardContent>{" "}
            <CardFooter className="relative z-10 pt-4 pb-6">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 text-gray-900 dark:text-white font-semibold transition-all duration-300 group/btn"
                  tabIndex={-1}
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
            </CardFooter>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        </motion.div>
        </Link>
      </ScrollAnimation>
    );
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <ScrollAnimation
      direction="up"
      delay={0.7}
      className="w-full py-8"
      threshold={0.05}
      rootMargin="100px 0px 0px 0px"
    >
      {/* Featured Projects */}
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white transition-colors duration-300 font-inter tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* More Projects */}
      <motion.h2
        className="text-2xl font-bold mb-8 text-center text-gray-600 dark:text-gray-300 transition-colors duration-300 font-inter tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        More Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {otherProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCards;
