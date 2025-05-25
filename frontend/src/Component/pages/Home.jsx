
import React from 'react';
import BookIcon from '../../assets/book.png';
import PlanetIcon from '../../assets/Group1.png';
import AtomIcon from '../../assets/Group.png';
import DocumentIcon from '../../assets/Group5.png';
import BulbIcon from '../../assets/Group3.png';
import FlaskIcon from '../../assets/chemical.png';
import MonitorIcon from '../../assets/Group6.png';

const AboutSection = () => {
  const bigIcon = "w-16 sm:w-20 md:w-24";
  const smallIcon = "w-12 sm:w-16 md:w-20";

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">

  
      <img src={BookIcon} alt="Book" className={`absolute top-[20%] left-[3%] ${bigIcon}`} />
      <img src={PlanetIcon} alt="Planet" className={`absolute top-[5%] left-[15%] ${smallIcon}`} />
      <img src={AtomIcon} alt="Atom" className={`absolute top-[45%] left-[6%] ${bigIcon}`} />
      <img src={DocumentIcon} alt="Document" className={`absolute top-[68%] left-[12%] ${smallIcon}`} />

     
      <img src={BulbIcon} alt="Bulb" className={`absolute top-[5%] right-[8%] ${smallIcon}`} />
      <img src={FlaskIcon} alt="Flask" className={`absolute top-[40%] right-[4%] ${bigIcon}`} />
      <img src={MonitorIcon} alt="Monitor" className={`absolute bottom-[8%] right-[12%] ${bigIcon}`} />

    
      <div className="relative max-w-4xl mx-auto text-center z-10">
   <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 transition-all duration-300 hover:text-orange-500 [text-shadow:_0_0_2px_orange,_1px_1px_0_orange,_-1px_-1px_0_orange,_1px_-1px_0_orange,_-1px_1px_0_orange]">
  About Us!
</h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4">
          DL Masters Academy is an IT training institute committed to delivering top-notch education for both students and professionals. Emphasizing hands-on learning and industry alignment, we provide well-rounded training programs tailored to the demands of today’s technology-focused world.
        </p>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          Our offerings include both online and offline courses, catering to college students and working professionals alike. From immersive boot camps to internships with project-based guidance, our programs are designed to equip you with sought-after skills in areas such as UI/UX Design, Front-End Development, Full-Stack Development, Amazon Web Services (AWS), and Digital Marketing.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;


















