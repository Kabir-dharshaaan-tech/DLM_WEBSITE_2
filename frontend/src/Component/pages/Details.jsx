
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/DLM Logo.png";

const Details = () => {
  return (
    <footer className="bg-white text-gray-700 pt-12 pb-6 px-4 sm:px-8 lg:px-20 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="DL Masters Logo" className="h-10" />
          </div>
          <p className="mb-4 text-sm text-gray-500">Words</p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
              <div key={index} className="bg-black rounded-full p-2 text-white hover:bg-orange-500 transition">
                <Icon />
              </div>
            ))}
          </div>
        </div>

   
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Quick View</h3>
          <div className="h-1 w-6 bg-orange-500 mb-3"></div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Newsletter</h3>
          <div className="h-1 w-6 bg-orange-500 mb-3"></div>
          <p className="text-sm text-gray-500 mb-3">
            Signup for our latest news & articles. We won’t spam you.
          </p>
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md text-white hover:bg-orange-600">
              <FaPaperPlane />
            </button>
          </div>
        </div>

       
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Contact</h3>
          <div className="h-1 w-6 bg-orange-500 mb-3"></div>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              0999909000
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              needhelp@company.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              88 Broklyn Golden Road Street, New York, USA
            </li>
          </ul>
        </div>
      </div>

  
      <div className="text-center mt-10 text-xs text-gray-400">
        © 2025 DL Masters | All Rights Reserved | Terms & Conditions | Privacy Policy
      </div>
    </footer>
  );
};

export default Details;
