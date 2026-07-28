import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaTrophy, FaBolt } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const CPProfiles = () => {
  const profiles = [
    {
      platform: "Codeforces",
      handle: "FailX",
      stats: "Max Rating: 1600 (Expert)",
      solved: "1200+ Solved",
      icon: <SiCodeforces className="text-4xl text-[#1F8ACB]" />,
      url: "https://codeforces.com/profile/FailX",
      color: "border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/10",
      accent: "bg-blue-500/10 text-blue-400",
    },
    {
      platform: "LeetCode",
      handle: "sarifulsarker19",
      stats: "Algorithmic Practice",
      solved: "100+ Solved",
      icon: <SiLeetcode className="text-4xl text-[#FFA116]" />,
      url: "https://leetcode.com/u/sarifulsarker19/",
      color: "border-amber-500/20 hover:border-amber-500/50 hover:shadow-amber-500/10",
      accent: "bg-amber-500/10 text-amber-400",
    },
    {
      platform: "AtCoder",
      handle: "sariful",
      stats: "Regular Contests",
      solved: "100+ Solved",
      icon: <FaCode className="text-4xl text-[#000000] dark:text-white" />,
      url: "https://atcoder.jp/users/sariful",
      color: "border-rose-500/20 hover:border-rose-500/50 hover:shadow-rose-500/10",
      accent: "bg-rose-500/10 text-rose-400",
    },
  ];

  return (
    <section id="cp" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Competitive Programming
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-4 text-lg">
          My handles and statistics across top algorithmic problem-solving platforms.
        </p>
      </div>

      {/* Main Stats Summary Dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-slate-900/90 to-indigo-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(99,102,241,0.15)] mb-12 flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500 pointer-events-none" />
        
        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-indigo-400">
            <FaTrophy className="text-yellow-400" />
            Active Competitor
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            1,400+ Problems Solved
          </h3>
          <p className="text-slate-400 text-base max-w-lg leading-relaxed">
            Actively writing efficient, structured code in C++ to solve complex data structures, graph theory, mathematics, and dynamic programming challenges.
          </p>
        </div>

        <div className="flex gap-4 self-stretch md:self-center items-center justify-center relative z-10">
          <div className="px-6 py-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center flex flex-col justify-center min-w-[140px] shadow-lg">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">CF Rating</span>
            <span className="text-3xl font-black text-blue-400 mt-1">1600</span>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-0.5">Expert</span>
          </div>
          
          <div className="px-6 py-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center flex flex-col justify-center min-w-[140px] shadow-lg">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">Hacker Cup</span>
            <span className="text-3xl font-black text-purple-400 mt-1">2048</span>
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mt-0.5">Round 2</span>
          </div>
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
            className={`bg-white/5 border rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center ${profile.color}`}
          >
            <div className="h-16 flex items-center justify-center mb-6">
              {profile.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{profile.platform}</h3>
            <span className="text-xs font-semibold text-slate-400 mb-6 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Handle: {profile.handle}
            </span>

            <div className="space-y-2 mb-8">
              <p className="text-white font-bold text-lg">{profile.solved}</p>
              <p className="text-slate-400 text-sm font-medium">{profile.stats}</p>
            </div>

            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-indigo-600 text-slate-300 hover:text-white font-bold text-sm rounded-xl border border-white/10 hover:border-indigo-600 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300"
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
