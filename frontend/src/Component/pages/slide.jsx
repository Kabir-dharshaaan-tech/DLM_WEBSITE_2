import React, { useState } from 'react';

const courses = [
  {
    title: 'UI/UX Design',
    description:
      'Explore the art and science of creating user-friendly and visually appealing digital interfaces. Our UI/UX Design course covers wireframing, prototyping, user research, and usability testing. Learn tools like Figma and Adobe XD while gaining insights into creating designs that enhance user engagement and experience.',
  },
  {
    title: 'Web Development',
    description:
      'Master the building blocks of the web — HTML, CSS, JavaScript, and modern frameworks like React. Learn backend with Node.js and databases like MongoDB to build full-stack applications and deploy them on the cloud.',
  },
  {
    title: 'Data Science',
    description:
      'Dive into data analysis, machine learning, and visualization. Learn Python, pandas, NumPy, and use tools like Jupyter and Tableau to uncover insights and build predictive models.',
  },
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 transition duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
          {courses[currentIndex].title}
        </h2>
        <p className="text-blue-700 text-center">{courses[currentIndex].description}</p>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-2xl text-gray-600 hover:bg-gray-100"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-2xl text-gray-600 hover:bg-gray-100"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slide;
