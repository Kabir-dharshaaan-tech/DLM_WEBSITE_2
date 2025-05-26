
import React from 'react';
import { motion } from 'framer-motion';
import onlinelearning from '../../assets/export-1.png';
import internship from '../../assets/export-2.png';
import bootcamps from '../../assets/export-3.png';
import offline from '../../assets/export-4.png';

const learningOptions = [
  {
    title: 'Online Learning',
    description:
      'Our online courses offer flexibility with live classes, recorded sessions, and self-paced modules. Access our platform from anywhere for interactive, virtual learning.',
    image: onlinelearning,
  },
  {
    title: 'Internships & Project Guidance',
    description:
      'Gain practical experience with our internships, featuring project guidance from industry experts. Apply your skills in real-world scenarios, build your portfolio, and boost your employability.',
    image: internship,
  },
  {
    title: 'Boot Camps',
    description:
      'Fast-track your skills with our intensive boot camps. These short-term programs cover core and advanced topics quickly, immersing you in your field.',
    image: bootcamps,
  },
  {
    title: 'Offline Learning',
    description:
      'Prefer in-person instruction? Our offline courses offer state-of-the-art classrooms and direct access to instructors and peers.',
    image: offline,
  },
];

const List = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
     <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-16 text-center transition-all duration-300 hover:text-orange-500 animate-pulse [text-shadow:_0_0_2px_orange,_1px_1px_0_orange,_-1px_-1px_0_orange,_1px_-1px_0_orange,_-1px_1px_0_orange]">
  Learning Options
</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {learningOptions.map((option, index) => (
          <motion.div
            key={index}
            className="flex items-start p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-orange-400 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={option.image}
              alt={option.title}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain mr-5 sm:mr-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {option.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default List;


















