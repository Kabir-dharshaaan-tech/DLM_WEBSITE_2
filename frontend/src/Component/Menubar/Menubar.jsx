
import React from 'react';
import logo from '../../assets/DLM Logo.png';

const Menubar = ({ scrollToSection, bannerRef, aboutRef, coursesRef , contactRef}) => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
      
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        <ul className="flex gap-10 text-blue-600 font-semibold ml-auto mr-auto">
          <li
            className="hover:text-orange-500 cursor-pointer"
            onClick={() => scrollToSection(bannerRef)}
          >
            Home
          </li>
          <li
            className="hover:text-orange-500 cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            About Us
          </li>
          <li
            className="hover:text-orange-500 cursor-pointer"
            onClick={() => scrollToSection(coursesRef)}
          >
            Courses
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Blog</li>
          <li className="hover:text-orange-500 cursor-pointer"
              onClick={()=>scrollToSection(contactRef)}
              >
                Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;

