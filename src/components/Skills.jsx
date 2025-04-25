
import Lottie from "lottie-react";
import skillsAnimation from "../assets/skills.json";
const Skills = () => {
  return (
    <section id="skills" className="mt-32 max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-start ">
        
        {/* Left: Animation */}
        <div className="w-full md:w-1/2 flex justify-start mb-6">
        <Lottie
            animationData={skillsAnimation}
            loop={true}
            style={{ width: "100%", maxWidth: "700px", height: "191%" }}
          />
        </div>

        {/* Right: Skills */}
        <div className="w-full md:w-1/2 ml-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>

          <div className="text-gray-700 text-[10px] md:text-[15px] space-y-2">
            {/* Frontend */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">⚛️ Frontend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>React, HTML, CSS, JavaScript, Tailwind CSS</li>
                
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h3 className=" text-gray-800 mb-2">🖥️ Backend</h3>
              <ul className="list-disc list-inside ">
                <li>Node.js, Express.js, PHP, MongoDB, MySQL</li>
               
              </ul>
            </div>

            {/* Other Skills */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🛠️ Other Tools & Languages</h3>
              <ul className="list-disc list-inside ">
                <li>C, C++, Java</li>
                <li>Git, GitHub, Linux</li>
              </ul>
            </div>
            {/* proficiant */}

                      <div className="text-gray-700 text-[10px] md:text-[15px] space-y-2">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Proficient in:</h2>
            
            <ul className="list-disc list-inside space-y-2">
              <li>⚡ C++</li>
           
              <li>⚡ JavaScript </li>
              <li>⚡ Algorithmic Problem Solving (1500+ problems solved)</li>
              <li>⚡ Data Structures and Algorithms</li>
              <li>⚡ Competitive Programming</li>
              <li>⚡ Backend Engineering</li>
              <li>⚡ Full Stack Development</li>
            </ul>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
