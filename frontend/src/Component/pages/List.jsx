

import React from 'react';

const learningOptions = [
  {
    title: 'Online Learning',
    description:
      'Our online courses offer flexibility with live classes, recorded sessions, and self-paced modules. Access our platform from anywhere for interactive, virtual learning.',
    image: '/images/online-learning.svg', 
  },
  {
    title: 'Internships & Project Guidance',
    description:
      'Gain practical experience with our internships, featuring project guidance from industry experts. Apply your skills in real-world scenarios, build your portfolio, and boost your employability.',
    image: '/images/internships.svg',
  },
  {
    title: 'Boot Camps',
    description:
      'Fast-track your skills with our intensive boot camps. These short-term programs cover core and advanced topics quickly, immersing you in your field.',
    image: '/images/boot-camp.svg',
  },
  {
    title: 'Offline Learning',
    description:
      'Prefer in-person instruction? Our offline courses offer state-of-the-art classrooms and direct access to instructors and peers.',
    image: '/images/offline-learning.svg',
  },
];

const List = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-14">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-md">
          Learning Options
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {learningOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-start p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={option.image}
              alt={option.title}
              className="w-24 h-24 object-contain mr-6"
            />
            <div>
              <h3 className="text-2xl font-semibold text-orange-500 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
