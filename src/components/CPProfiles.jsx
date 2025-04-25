import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CPProfiles = () => {
  const [inView, setInView] = useState(false);
  const controls = useAnimation();

  // Detecting when the component is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const cardPosition = document.getElementById('cp').getBoundingClientRect();
      if (cardPosition.top < window.innerHeight && cardPosition.bottom > 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount to check if it's already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <section id="cp" className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6">Problem Solving Activities</h2>
      <p className="text-center text-gray-600 mb-12 text-lg">My Competitive Programming Journey</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Codeforces Card */}
        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-md rounded-2xl p-10 md:p-12 flex flex-col items-center text-center text-lg transition-transform duration-300 hover:scale-105 transform hover:shadow-xl"
        >
          <img
            src="https://sta.codeforces.com/s/118885/images/codeforces-sponsored-by-ton.png"
            alt="Codeforces"
            className="h-16 mb-6"
          />
          <h3 className="text-2xl font-semibold mb-3">Expert | Blue</h3>
          <p className="text-gray-600 text-base mb-6">
            Highest Rating: 1600, Top 15% among 600,000+ users
          </p>
          <a
            href="https://codeforces.com/profile/FailX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-5 py-2 rounded text-base hover:bg-blue-700 transition"
          >
            FailX
          </a>
        </motion.div>

        {/* Problem Solved Card */}
        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-md rounded-2xl p-10 md:p-12 flex flex-col items-center text-center text-lg transition-transform duration-300 hover:scale-105 transform hover:shadow-xl"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6155/6155994.png"
            alt="Competitive Programming"
            className="h-20 mb-6"
          />
          <h3 className="text-2xl font-semibold mb-3">1500+ Problems Solved</h3>
          <p className="text-gray-600 text-base mb-6">
            Algorithmic, Data Structure Based, and Other Problems
          </p>
          <a
            href="#"
            className="text-white bg-blue-600 px-5 py-2 rounded text-base hover:bg-blue-700 transition"
          >
            Link
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CPProfiles;
