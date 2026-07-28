import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import mailAnimation from "../assets/contact-mail-animation.json";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaCopy,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "sarifulsarker19@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/SarifulSarker",
      hoverColor: "hover:border-slate-400 hover:text-white hover:shadow-[0_0_15px_rgba(148,163,184,0.25)]",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/sariful-sarker-22961b210/",
      hoverColor: "hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    },
    {
      icon: <FaCode />,
      name: "Codeforces",
      url: "https://codeforces.com/profile/FailX",
      hoverColor: "hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:sarifulsarker19@gmail.com",
      hoverColor: "hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]",
    },
  ];

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Get In Touch
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
          Have a project in mind or want to collaborate? I'm always open to new
          opportunities and conversations.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left — Content */}
        <motion.div
          className="lg:w-3/5 space-y-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Email card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Reach me at
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-2xl md:text-3xl font-bold text-white break-all">
                sarifulsarker19
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  @gmail.com
                </span>
              </p>

              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border transition-all duration-300 cursor-pointer shrink-0 ${
                  copied
                    ? "bg-emerald-600/20 border-emerald-500/40 text-emerald-400"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                }`}
              >
                {copied ? (
                  <>
                    <FaCheck /> Copied!
                  </>
                ) : (
                  <>
                    <FaCopy /> Copy Email
                  </>
                )}
              </button>
            </div>

            <p className="text-slate-500 text-sm mt-4 leading-relaxed">
              Whether you want to hire me, discuss a project, or just say hello
              — I typically reply within 24 hours.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white">Connect with me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-2xl text-sm font-semibold transition-all duration-300 ${social.hoverColor}`}
                >
                  <span className="text-lg">{social.icon}</span>
                  {social.name}
                  <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Lottie Animation */}
        <motion.div
          className="lg:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Decorative glow behind animation */}
            <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-full h-full flex items-center justify-center bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm shadow-xl">
              <Lottie
                animationData={mailAnimation}
                loop
                autoplay
                className="w-full h-full p-4"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
