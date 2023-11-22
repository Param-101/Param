"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Step into a world of innovation and creativity with my Next.js portfolio website! Immerse yourself in a visually stunning journey through my diverse projects and experiences, beautifully crafted to showcase my skills and passion. With seamless navigation and a modern aesthetic, this website not only reflects my dedication to excellence but also invites you to explore the boundless possibilities of web development. From dynamic user interfaces to captivating design, every click unveils a story of ingenuity. Join me on this digital adventure and discover how my expertise in Next.js can bring your ideas to life!",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Param-101/Param",
    previewUrl: "/",
    
  },
  {
    id: 2,
    title: "AI Summariser",
    description: "Say hello to my latest personal project: an AI Summarizer that simplifies your reading experience! Using OpenAI's powerful language model, this nifty tool takes article page links and condenses the content into two easy-to-digest paragraphs. It's like having a personal summarizing assistant, helping you cut through the noise and get to the heart of any article. Whether you're a news junkie or just want the highlights, my AI Summarizer is here to make information consumption a breeze. Check it out and see how it transforms the way you absorb content!",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Param-101/AI-Summariser",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Nike Clone Website",
    description: "Welcome to my latest personal project—a Nike-inspired clone website that showcases my skills in web development and design! Dive into a user-friendly interface that mirrors the sleek style of Nike. From trendy sneakers to high-performance sportswear, this project encapsulates my passion for clean, functional design. It's more than a clone; it's a testament to my proficiency in creating seamless online experiences. Explore the world of sporty elegance right here on my personal project, where my skills meet the spirit of Nike!",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Param-101/Nike",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;