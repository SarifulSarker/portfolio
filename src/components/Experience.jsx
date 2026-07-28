import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Manush Tech",
      period: "Nov 2025 – Apr 2026",
      contributions: [
        "Built a full-stack Asset Management System using React, Express.js, PostgreSQL, Prisma, Redis, and Docker to streamline asset tracking workflows.",
        "Designed a normalized relational schema across 14+ entities including users, roles, permissions, assets, and departments.",
        "Implemented RBAC with dynamic permission configuration for module-level access control across multiple user roles.",
        "Developed asset lifecycle management, assignment workflows, and audit logging for operational tracking and history management.",
        "Built an analytics dashboard with real-time asset valuation, status distribution, and department-wise insights.",
        "Contributed to a Support Flow System built with React, NestJS, PostgreSQL, and Prisma for issue and ticket management.",
        "Implemented dynamic custom field chaining with conditional visibility configuration to improve ticket creation usability.",
        "Developed issue categorization and automated distribution modules for structured ticket routing workflows."
      ],
      techStack: ["React", "Express.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Docker"]
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Professional Experience
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-4 text-lg">
          My career journey and industry experiences.
        </p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline dot with glowing effect */}
            <div className="absolute -left-3.5 top-1.5 bg-indigo-600 text-white rounded-full p-2 border-4 border-[#030014] shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:bg-purple-600 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300">
              <FaBriefcase className="text-xs" />
            </div>

            {/* Experience details container */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="text-lg font-semibold text-slate-400">{exp.company}</span>
                </div>
                <div className="flex items-center text-sm font-semibold text-slate-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 self-start md:self-center">
                  <FaCalendarAlt className="mr-2 text-indigo-400" />
                  {exp.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 mb-6 text-slate-400 list-disc list-outside pl-4 leading-relaxed">
                {exp.contributions.map((point, pointIdx) => (
                  <li key={pointIdx} className="hover:text-slate-200 transition-colors duration-200">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech Stack tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.techStack.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-indigo-950/40 text-indigo-300 text-xs font-bold rounded-full border border-indigo-900/30 hover:bg-indigo-900/40 hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
