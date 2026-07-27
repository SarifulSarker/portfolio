import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Projects = () => {
  const projectsData = [
    {
      title: "Asset Management Admin Panel",
      description: "A comprehensive, role-based asset management dashboard supporting asset assignment workflows, status tracking, asset history log, and employee, department, designation, brand, and vendor management.",
      techStack: ["React", "Mantine UI", "Axios", "CSS"],
      githubLink: "https://github.com/SarifulSarker", // Update to exact link if available, otherwise general GitHub is fine
      liveLink: "https://github.com/SarifulSarker", // Update to exact live link if available
    },
    {
      title: "Asset Management Backend",
      description: "Robust REST APIs power the Asset Management System, offering dynamic RBAC, detailed audit logs, authentication, employee-wise tracking, and a fully normalized PostgreSQL schema design across 14+ entities.",
      techStack: ["Express.js", "PostgreSQL", "Prisma", "Docker", "Redis"],
      githubLink: "https://github.com/SarifulSarker",
    },
    {
      title: "Support Flow System",
      description: "An internal ticket tracking platform featuring dynamic custom field chaining with conditional visibility, issue categorization, automated distribution modules, and project-wise workflow management.",
      techStack: ["React", "NestJS", "PostgreSQL", "Prisma", "Docker"],
      githubLink: "https://github.com/SarifulSarker",
    },
  ];

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Featured Projects
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          A showcase of full-stack systems and tools I have engineered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Design accents */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <FaCode className="text-xl" />
              </div>
              <div className="flex gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source Code"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live Demo"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-semibold rounded-full border border-gray-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
