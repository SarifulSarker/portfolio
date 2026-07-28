import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import Lottie from "lottie-react";
import helloAnimation from "../assets/hello-animation.json";

const Home = () => {
  const roles = ["Full-Stack Engineer", "Competitive Programmer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { href: "https://github.com/SarifulSarker", icon: <FaGithub />, name: "GitHub" },
    { href: "https://linkedin.com/in/sariful-sarker-22961b210/", icon: <FaLinkedin />, name: "LinkedIn" },
    { href: "mailto:sarifulsarker19@gmail.com", icon: <FaEnvelope />, name: "Email" },
    { href: "https://codeforces.com/profile/FailX", icon: <FaCode />, name: "Codeforces" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* Left Side Info */}
        <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-blue-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Shariful Islam
              </span>
            </motion.h1>

            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-bold text-slate-300">
              <span className="mr-2">I am a</span>
              <div className="relative overflow-hidden inline-block h-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <motion.p
            className="text-[16px] sm:text-lg text-slate-400 max-w-xl leading-relaxed font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            B.Sc in Computer Science and Engineering graduate from Uttara University, specializing in building full-stack applications with a strong foundation in competitive programming and algorithmic problem-solving.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center text-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white rounded-full hover:bg-gradient-to-tr hover:from-blue-600/30 hover:to-purple-600/30 hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href={`${import.meta.env.BASE_URL}SharifulResume.pdf`}
              download="SharifulResume.pdf"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold tracking-wider uppercase text-xs rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(79,70,229,0.55)] transition-all duration-300 cursor-pointer"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side Animation */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-full max-w-lg">
            {/* Background decorative glow for animation */}
            <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <Lottie
              animationData={helloAnimation}
              loop={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
