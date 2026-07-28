import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Projects = () => {
  const projectsData = [
    {
      title: "Asset Management Admin Panel",
      description: "A comprehensive, role-based asset management dashboard supporting asset assignment workflows, status tracking, asset history log, and employee, department, designation, brand, and vendor management.",
      techStack: ["React", "Mantine UI", "Axios", "CSS"],
      githubLink: "https://github.com/SarifulSarker/asset-management-admin-panel",
      liveLink: "https://asset-management-admin-panel-gkv2.vercel.app/",
    },
    {
      title: "Asset Management Backend",
      description: "Robust REST APIs power the Asset Management System, offering dynamic RBAC, detailed audit logs, authentication, employee-wise tracking, and a fully normalized PostgreSQL schema design across 14+ entities.",
      techStack: ["Express.js", "PostgreSQL", "Prisma", "Docker", "Redis"],
      githubLink: "https://github.com/SarifulSarker/asset-management-backend",
    },
    {
      title: "Support Flow System",
      description: "An internal ticket tracking platform featuring dynamic custom field chaining with conditional visibility, issue categorization, automated distribution modules, and project-wise workflow management.",
      techStack: ["React", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    },
  ];

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Featured Projects
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
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
            className="flex flex-col bg-white/5 border border-white/10 rounded-3xl p-6 shadow-md hover:shadow-xl hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden group"
          >
            {/* Gradient top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-center justify-between mb-5">
              <div className="p-3 bg-white/5 border border-white/10 text-indigo-400 rounded-2xl">
                <FaCode className="text-xl" />
              </div>
              <div className="flex gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
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
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live Demo"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-200">
              {project.title}
            </h3>

            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-3 py-1 bg-indigo-950/40 text-indigo-300 text-xs font-bold rounded-full border border-indigo-900/30 hover:bg-indigo-900/40 hover:text-white transition-colors duration-200"
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
