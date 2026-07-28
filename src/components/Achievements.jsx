import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaMedal, FaCode } from "react-icons/fa";

const Achievements = () => {
  const achievementsList = [
    {
      title: "ICPC Asia Dhaka Regional",
      description: "Participated in the ICPC Asia Dhaka Regional 2022 (hosted by GUB) and the preliminary rounds in both 2022 and 2023.",
      icon: <FaTrophy className="text-3xl text-yellow-400" />,
      color: "from-yellow-500/20 to-amber-500/10 group-hover:border-yellow-500/40",
      accent: "from-yellow-400 to-amber-500",
    },
    {
      title: "Inter-University Programming Contests (IUPC)",
      description: "Represented Uttara University in major national contests: AUST IUPC 2022, SUST IUPC 2023, and IUT IUPC 2024.",
      icon: <FaAward className="text-3xl text-blue-400" />,
      color: "from-blue-500/20 to-indigo-500/10 group-hover:border-blue-500/40",
      accent: "from-blue-400 to-indigo-500",
    },
    {
      title: "UU Intra-University Contest 2024",
      description: "Secured 2nd Place out of all participating teams in the Uttara University Intra-University Programming Contest.",
      icon: <FaMedal className="text-3xl text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/10 group-hover:border-emerald-500/40",
      accent: "from-emerald-400 to-teal-500",
    },
    {
      title: "Meta Hacker Cup 2024",
      description: "Ranked 4,112 globally in Round 1 and advanced to secure a world rank of 2,048 in Round 2.",
      icon: <FaCode className="text-3xl text-purple-400" />,
      color: "from-purple-500/20 to-fuchsia-500/10 group-hover:border-purple-500/40",
      accent: "from-purple-400 to-fuchsia-500",
    },
  ];

  return (
    <section id="achievements" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Achievements
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-4 text-lg">
          Highlights from my competitive programming and academic contests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-start gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
          >
            {/* Top Border Gradient Accent */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-sm self-start group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors duration-200">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

