

import React from 'react';
import logo from '../../assets/DLM Logo.png';

const Menubar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

    
        <ul className="flex gap-10 text-blue-600 font-semibold ml-auto mr-auto">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About Us</li>
          <li className="hover:text-orange-500 cursor-pointer">Courses</li>
          <li className="hover:text-orange-500 cursor-pointer">Blog</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;


