import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const CPProfiles = () => {
  const profiles = [
    {
      platform: "Codeforces",
      handle: "FailX",
      stats: "Max Rating: 1600 (Expert)",
      solved: "1200+ Problems Solved",
      url: "https://codeforces.com/profile/FailX",
      logo: "https://sta.codeforces.com/s/118885/images/codeforces-sponsored-by-ton.png",
      color: "border-blue-100 hover:shadow-blue-100/50",
    },
    {
      platform: "LeetCode",
      handle: "sarifulsarker19",
      stats: "Algorithmic Practice",
      solved: "100+ Problems Solved",
      url: "https://leetcode.com/u/sarifulsarker19/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_Logo_and_Wordmark.png",
      color: "border-amber-100 hover:shadow-amber-100/50",
    },
    {
      platform: "AtCoder",
      handle: "sariful",
      stats: "Regular Contests",
      solved: "100+ Problems Solved",
      url: "https://atcoder.jp/users/sariful",
      logo: "https://img.atcoder.jp/assets/logo.png",
      color: "border-red-100 hover:shadow-red-100/50",
    },
  ];

  return (
    <section id="cp" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Competitive Programming
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">
          My handles and statistics across top algorithmic problem-solving platforms.
        </p>
      </div>

      {/* Main Stats Summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto"
      >
        <div>
          <h3 className="text-3xl font-extrabold mb-2">1,400+ Problems Solved</h3>
          <p className="text-blue-100 text-lg max-w-lg leading-relaxed">
            Actively writing efficient, structured code to solve complex data structure, graph theory, and dynamic programming challenges.
          </p>
        </div>
        <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center self-stretch md:self-center flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-200">Max CF Rating</span>
          <span className="text-3xl font-black text-white mt-1">1600</span>
        </div>
      </motion.div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className={`bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center ${profile.color}`}
          >
            <div className="h-16 flex items-center justify-center mb-6">
              <img
                src={profile.logo}
                alt={profile.platform}
                className="max-h-12 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-xl font-bold text-gray-700">{profile.platform}</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-1">{profile.platform}</h3>
            <span className="text-sm font-medium text-gray-400 mb-4 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
              Handle: {profile.handle}
            </span>

            <div className="space-y-1 mb-8">
              <p className="text-gray-700 font-semibold">{profile.solved}</p>
              <p className="text-gray-500 text-sm">{profile.stats}</p>
            </div>

            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white font-semibold rounded-2xl border border-gray-100 hover:border-blue-600 transition-all duration-200"
            >
              View Profile
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CPProfiles;
