import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaBriefcase, FaProjectDiagram, FaDatabase } from "react-icons/fa";

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const stats = [
    {
      icon: <FaCode className="text-2xl" />,
      value: 1400,
      suffix: "+",
      label: "Problems Solved",
      color: "text-blue-400",
      borderColor: "border-blue-500/20",
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      value: 6,
      suffix: "+",
      label: "Months Experience",
      color: "text-indigo-400",
      borderColor: "border-indigo-500/20",
    },
    {
      icon: <FaProjectDiagram className="text-2xl" />,
      value: 3,
      suffix: "+",
      label: "Projects Built",
      color: "text-purple-400",
      borderColor: "border-purple-500/20",
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      value: 14,
      suffix: "+",
      label: "DB Entities Designed",
      color: "text-emerald-400",
      borderColor: "border-emerald-500/20",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`bg-white/5 border ${stat.borderColor} rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300`}
          >
            <div className={`${stat.color} mb-3 flex justify-center`}>
              {stat.icon}
            </div>
            <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-slate-400 text-sm font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
