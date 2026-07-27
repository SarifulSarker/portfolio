import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaMedal, FaCode } from "react-icons/fa";

const Achievements = () => {
  const achievementsList = [
    {
      title: "ICPC Asia Dhaka Regional",
      description: "Participated in the ICPC Asia Dhaka Regional 2022 (hosted by GUB) and the preliminary rounds in both 2022 and 2023.",
      icon: <FaTrophy className="text-3xl text-yellow-500" />,
      color: "from-yellow-500/10 to-amber-500/10 hover:border-yellow-200",
    },
    {
      title: "Inter-University Programming Contests (IUPC)",
      description: "Represented Uttara University in major national contests: AUST IUPC 2022, SUST IUPC 2023, and IUT IUPC 2024.",
      icon: <FaAward className="text-3xl text-blue-500" />,
      color: "from-blue-500/10 to-indigo-500/10 hover:border-blue-200",
    },
    {
      title: "UU Intra-University Contest 2024",
      description: "Secured 2nd Place out of all participating teams in the Uttara University Intra-University Programming Contest.",
      icon: <FaMedal className="text-3xl text-emerald-500" />,
      color: "from-emerald-500/10 to-teal-500/10 hover:border-emerald-200",
    },
    {
      title: "Meta Hacker Cup 2024",
      description: "Ranked 4,112 globally in Round 1 and advanced to secure a world rank of 2,048 in Round 2.",
      icon: <FaCode className="text-3xl text-purple-500" />,
      color: "from-purple-500/10 to-fuchsia-500/10 hover:border-purple-200",
    },
  ];

  return (
    <section id="achievements" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Achievements
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">
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
            className={`flex items-start gap-6 p-8 bg-gradient-to-br ${item.color} border border-transparent rounded-3xl shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <div className="p-4 bg-white rounded-2xl shadow-sm self-start">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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
