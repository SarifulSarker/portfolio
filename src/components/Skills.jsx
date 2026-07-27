import React from "react";
import Lottie from "lottie-react";
import skillsAnimation from "../assets/skills.json";

const Skills = () => {
  const technicalSkills = {
    languages: ["C++", "JavaScript", "TypeScript"],
    frontend: ["HTML", "CSS", "Tailwind CSS", "React.js", "Redux", "Mantine UI"],
    backend: ["Node.js", "Express.js", "NestJS"],
    database: ["PostgreSQL", "MySQL", "Prisma ORM", "SQL"],
    tools: ["Docker", "Redis", "Git", "GitHub", "Linux"],
  };

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-lg">
            <Lottie
              animationData={skillsAnimation}
              loop={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Right: Skills Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Technical Skills
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mb-8 rounded-full"></div>

          <div className="space-y-6">
            {/* Languages */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">💬 Languages</h3>
              <div className="flex flex-wrap gap-2.5">
                {technicalSkills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-2xl border border-blue-100 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">⚛️ Frontend</h3>
              <div className="flex flex-wrap gap-2.5">
                {technicalSkills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-2xl border border-indigo-100 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">🖥️ Backend</h3>
              <div className="flex flex-wrap gap-2.5">
                {technicalSkills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-semibold rounded-2xl border border-purple-100 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & ORM */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">🗄️ Database & ORM</h3>
              <div className="flex flex-wrap gap-2.5">
                {technicalSkills.database.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-2xl border border-emerald-100 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Devops */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">🛠️ Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2.5">
                {technicalSkills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-amber-50 text-amber-700 text-sm font-semibold rounded-2xl border border-amber-100 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
