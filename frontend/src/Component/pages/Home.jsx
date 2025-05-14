


import React from "react";

import bookIcon from "../../assets/Group.png";
import atomIcon from "../../assets/Group1.png";
import docIcon from "../../assets/Group3.png";
import planetIcon from "../../assets/Group5.png";
import bulbIcon from "../../assets/Group6.png";
import flaskIcon from "../../assets/react.svg";
import monitorIcon from "../../assets/Vector.png";

const Home = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white relative flex justify-center items-center px-4"
    >
    
      <div className="absolute top-[30%] left-[10%] transform -rotate-12">
        <img src={bookIcon} alt="Book" className="w-16 mb-6" />
        <img src={atomIcon} alt="Atom" className="w-16 mb-6" />
        <img src={docIcon} alt="Document" className="w-16 mb-6" />
      </div>

      <div className="absolute top-[30%] right-[10%] transform rotate-12">
        <img src={bulbIcon} alt="Bulb" className="w-16 mb-6" />
        <img src={flaskIcon} alt="Flask" className="w-16 mb-6" />
        <img src={monitorIcon} alt="Monitor" className="w-16 mb-6" />
      </div>

      <div className="max-w-4xl w-full text-center px-6 py-10 z-10">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-8 border-b-4 border-orange-400 inline-block">
          About Us!
        </h1>
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
