import React from "react";
import Lottie from "lottie-react";
import mailAnimation from "../assets/contact-mail-animation.json";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaSpotify,
  FaTwitter,
  FaExternalLinkAlt,
  FaEnvelope,
  FaCode,
  FaBlogger,
} from "react-icons/fa";

const ContactForm = () => {
  const icons = [
    { icon: <FaCode />, color: "#333", url: "#" },
    { icon: <FaBlogger />, color: "#00aced", url: "#" },
    { icon: <FaGithub />, color: "#181717", url: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, color: "#0A66C2", url: "https://linkedin.com/in/yourusername" },
    { icon: <FaEnvelope />, color: "#EA4335", url: "mailto:shahjalalshohag2014@gmail.com" },
    { icon: <FaFacebook />, color: "#1877F2", url: "https://facebook.com/yourusername" },
    { icon: <FaInstagram />, color: "#C13584", url: "https://instagram.com/yourusername" },
    { icon: <FaDiscord />, color: "#5865F2", url: "https://discord.com/users/yourid" },
    { icon: <FaSpotify />, color: "#1DB954", url: "https://spotify.com" },
    { icon: <FaTwitter />, color: "#1DA1F2", url: "https://twitter.com/yourusername" },
    { icon: <FaExternalLinkAlt />, color: "#25D366", url: "#" },
  ];

  return (
    <div className="bg-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto min-h-screen">
      {/* Left Section */}
      <div className="md:w-3/5 space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Contact Me</h1>
        <p className="text-gray-500 uppercase text-sm tracking-widest">
          If you want to hire me or have other queries, then knock me anytime. I try to reply within 24 hours.
        </p>
        <p className="text-2xl text-gray-700 font-medium">
          sarifulsarker19<span className="text-indigo-600">@gmail.com</span>
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-6 pt-6 text-3xl">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125"
              style={{ color: item.color }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

{/* Right Section with Lottie Animation */}
<div className="md:w-2/5 mt-16 md:mt-0 flex justify-center">
  <div className="w-72 h-72 flex items-center justify-center bg-purple-50 rounded-3xl shadow-lg ">
    <Lottie
      animationData={mailAnimation}
      loop
      autoplay
      className="w-full h-full"
    />
  </div>
</div>


    </div>
  );
};

export default ContactForm;
