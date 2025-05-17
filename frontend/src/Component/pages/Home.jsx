
import React from "react";
import { motion } from "framer-motion";


import bookIcon from "../../assets/Group.png";
import atomIcon from "../../assets/Group1.png";
import docIcon from "../../assets/Group3.png";
import bulbIcon from "../../assets/Group6.png";
import flaskIcon from "../../assets/react.svg";
import monitorIcon from "../../assets/Vector.png";

const Home = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white relative flex justify-center items-center px-4"
    >
    
      <img
        src={bookIcon}
        alt="Book"
        className="absolute left-[6vw] top-[25%] w-12 rotate-[10deg]"
      />
      <img
        src={atomIcon}
        alt="Atom"
        className="absolute left-[5vw] top-[50%] w-12"
      />
      <img
        src={docIcon}
        alt="Document"
        className="absolute left-[6vw] bottom-[25%] w-12 -rotate-[10deg]"
      />

   
      <img
        src={bulbIcon}
        alt="Bulb"
        className="absolute right-[6vw] top-[25%] w-12 -rotate-[10deg]"
      />
      <img
        src={flaskIcon}
        alt="Flask"
        className="absolute right-[5vw] top-[50%] w-12"
      />
      <img
        src={monitorIcon}
        alt="Monitor"
        className="absolute right-[6vw] bottom-[25%] w-12 rotate-[10deg]"
      />

      <div className="max-w-3xl w-full text-center px-6 py-10 z-10">
      
        <motion.h1
          className="text-4xl font-extrabold text-orange-500 mb-8 border-b-4 border-orange-400 inline-block"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About Us!
        </motion.h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          DL Masters Academy is an IT training institute committed to delivering top-notch education
          for both students and professionals. Emphasizing hands-on learning and industry alignment,
          we provide well-rounded training programs tailored to the demands of today’s technology-focused world.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our offerings include both online and offline courses, catering to college students and working
          professionals alike. From immersive boot camps to internships with project-based guidance,
          our programs are designed to equip you with sought-after skills in areas such as UI/UX Design,
          Front-End Development, Full-Stack Development, Amazon Web Services (AWS), and Digital Marketing.
        </p>
      </div>
    </section>
  );
};

export default Home;
