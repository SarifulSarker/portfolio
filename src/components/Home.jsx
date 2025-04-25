import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import Lottie from "lottie-react";
import helloAnimation from "../assets/hello-animation.json";

const Home = () => {
  return (
    <section>
      <div id="home" className="flex flex-col md:flex-row mt-35 justify-between items-center gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-[20px] md:text-[80px] font-serif md:leading-[1.1] text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Shariful Islam
          </motion.h1>

          <motion.p
            className="text-[15px] md:text-[27px] text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Recent computer science graduate with a strong background in
            competitive programming and problem-solving...
          </motion.p>

          <motion.div
            className="flex gap-5 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a
              href="https://github.com/SarifulSarker"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#171515" }} // GitHub black
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sariful-sarker-22961b210/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0A66C2" }} // LinkedIn blue
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sarifulsarker19@gmail.com"
              style={{ color: "#D44638" }} // Gmail red
            >
              <FaEnvelope />
            </a>
            <a
              href="https://codeforces.com/profile/FailX"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1F8ACB" }} // Codeforces-themed blue
            >
              <FaCode />
            </a>
          </motion.div>

          <motion.a
            href="/Shariful CV.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD RESUME
          </motion.a>
        </div>

        {/* Right Side Animation */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Lottie
            animationData={helloAnimation}
            loop={true}
            style={{ width: "100%", maxWidth: "600px", height: "auto" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
