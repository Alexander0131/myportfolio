"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Online video streaming streaming platform for educational purpose.",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Alexander0131/ipmc-docs",
    previewUrl: "https://ipmc-docs.vercel.app/",
  },
  {
    id: 2,
    title: "Fundwithpi",
    description: "Fundraising platform using the pi ecosystem",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alexander0131/Fundwithpi",
    previewUrl: "https://fundwithpi.vercel.app/",
  },
  {
    id: 3,
    title: "Defex Ltd",
    description: "Mining and construction company portfolio site",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alexander0131/Project",
    previewUrl: "https://defex-seven.vercel.app/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-8">
      <h2 className="text-center text-4xl font-bold text-textPrimary mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Project Tags */}
      <div className="flex flex-row justify-center items-center gap-4 py-6">
        {["All", "Web", "Mobile"].map((item) => (
          <ProjectTag
            key={item}
            onClick={handleTagChange}
            name={item}
            isSelected={tag === item}
          />
        ))}
      </div>

      {/* Project Grid */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <ProjectCard
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

export default ProjectsSection;
