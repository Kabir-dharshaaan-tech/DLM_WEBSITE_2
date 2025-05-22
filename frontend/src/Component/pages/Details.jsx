import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/DLM Logo.png";


const Details = () => {
  return (
    <footer className="bg-white text-gray-700 pt-10 pb-6 px-6 md:px-20 border-t">
      <div className="flex flex-col md:flex-row justify-between gap-10">
   
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="DL Masters Logo" className="h-10" />
        
          </div>
          <p className="mb-4 text-sm text-gray-500">Words</p>
          <div className="flex space-x-3">
            <div className="bg-black rounded-full p-2 text-white">
              <FaFacebookF />
            </div>
            <div className="bg-black rounded-full p-2 text-white">
              <FaTwitter />
            </div>
            <div className="bg-black rounded-full p-2 text-white">
              <FaInstagram />
            </div>
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
          <p className="text-sm text-gray-500 mb-3">Signup for our latest news & articles. We won’t spam you.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-l-md px-3 py-2 text-sm w-full"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md text-white">
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
              88 Broklyn Golden Road Street New York, USA
            </li>
          </ul>
        </div>
      </div>

   
      <div className="text-center mt-10 text-xs text-gray-400">
        Copy Rights Terms and Conditions Privacy and Policy
      </div>
    </footer>
  );
};

export default Details;
