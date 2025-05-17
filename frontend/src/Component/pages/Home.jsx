





import React from "react";
import bookIcon from "../../assets/Group.png";
import atomIcon from "../../assets/Group1.png";
import docIcon from "../../assets/Group3.png";
import bulbIcon from "../../assets/Group5.png";
import flaskIcon from "../../assets/Group6.png";
import monitorIcon from "../../assets/Vector 1.png";
import missionImage from "../../assets/Union.png";
import visionImage from "../../assets/Union-3.png";

const AboutSection = () => {
  return (
    <section className="relative bg-white w-full text-gray-800 px-6 py-16 overflow-hidden">

      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-orange-500">About Us!</h2>
      </div>

     
      <div className="relative flex justify-center items-start max-w-5xl mx-auto">
        <div className="relative w-24 hidden md:flex flex-col items-center mr-4">
          <img src={bookIcon} alt="Book" className="w-10 mb-4 translate-x-2" />
          <img src={atomIcon} alt="Atom" className="w-10 mb-4 translate-x-1" />
          <img src={docIcon} alt="Doc" className="w-10" />
        </div>

        <div className="text-center md:text-left max-w-3xl z-10">
          <p className="text-base leading-relaxed">
            DL Masters Academy is an IT training institute committed to delivering top-notch
            education for both students and professionals. Emphasizing hands-on learning and
            industry alignment, we provide well-rounded training programs tailored to the
            demands of today's technology-focused world.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Our offerings include both online and offline courses, catering to college students
            and working professionals alike. From immersive boot camps to internships with
            project-based guidance, our programs are designed to equip you with sought-after
            skills in areas such as UI/UX Design, Front-End Development, Full-Stack Development,
            Amazon Web Services (AWS), and Digital Marketing.
          </p>
        </div>

        <div className="relative w-24 hidden md:flex flex-col items-center ml-4">
          <img src={bulbIcon} alt="Bulb" className="w-10 mb-4 -translate-x-2" />
          <img src={flaskIcon} alt="Flask" className="w-10 mb-4 -translate-x-1" />
          <img src={monitorIcon} alt="Monitor" className="w-10" />
        </div>
      </div>

      
      <div className="mt-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h3>
          <p className="text-base leading-relaxed">
            Our mission is to bridge the gap between academic learning and real-world applications.
            We equip students with practical skills in the latest technologies, ensuring they are
            job-ready and prepared for the modern IT industry.
          </p>
        </div>
        <div className="flex-1 relative z-10">
          <img
            src={missionImage}
            alt="Mission"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            id="mission-img"
          />
        </div>
      </div>

    
      <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 relative z-10">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Vision</h3>
          <p className="text-base leading-relaxed">
            We envision a future where every student can reach their full potential in the tech industry.
            Through exceptional training and steadfast support, we aim to cultivate a community of
            skilled professionals prepared to innovate and lead.
          </p>
        </div>
        <div className="flex-1 relative z-10">
          <img
            src={visionImage}
            alt="Vision"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            id="vision-img"
          />
        </div>
      </div>

      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0071BC" />
              <stop offset="100%" stopColor="#004C97" />
            </linearGradient>
          </defs>
          <path
            d="
              M 1000 250
              C 950 350, 700 550, 450 600
            "
            stroke="url(#lineGradient)"
            strokeWidth="10"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
