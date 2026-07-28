import React from "react";
import Lottie from "lottie-react";
import skillsAnimation from "../assets/skills.json";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaLinux 
} from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiRedux, SiMantine, SiExpress, SiNestjs, SiPostgresql, SiMysql, SiPrisma, SiRedis 
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { GrDatabase } from "react-icons/gr";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      icon: "💬",
      skills: [
        { name: "C++", icon: <TbBrandCpp className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }
      ]
    },
    {
      category: "Frontend",
      icon: "⚛️",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400 animate-[spin_10s_linear_infinite]" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Mantine UI", icon: <SiMantine className="text-blue-500" /> }
      ]
    },
    {
      category: "Backend",
      icon: "🖥️",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
        { name: "NestJS", icon: <SiNestjs className="text-red-500" /> }
      ]
    },
    {
      category: "Database & ORM",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-slate-300" /> },
        { name: "SQL", icon: <GrDatabase className="text-indigo-400" /> }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-slate-300" /> },
        { name: "Linux", icon: <FaLinux className="text-yellow-500" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Animation */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="w-full max-w-md relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <Lottie
              animationData={skillsAnimation}
              loop={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Right: Skills Info */}
        <div className="w-full lg:w-3/5">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Technical Skills
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <p className="text-slate-400 mt-4">
              A comprehensive toolkit of technologies I use to build robust full-stack applications.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillsData.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                    <span>{cat.icon}</span>
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 text-slate-300 text-sm font-medium rounded-xl hover:bg-white/10 hover:border-white/10 transition-colors duration-200"
                      >
                        <span className="text-base">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
