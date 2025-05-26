

import React from "react";
import uiux from '../../assets/export-1.png'
const CoursesSection = () => {
  const courses = [
    { title: "UI/UX Design", image: uiux },
    { title: "Front-end Development", image: "/images/frontend.png" },
    { title: "Amazon Web Services (AWS)", image: "/images/amazon.png" },
    { title: "MERN Stack Development", image: "/images/mern.png" },
    { title: "Digital Marketing", image: "/images/digital.png" },
  ];

  const positions = [
    { top: "90px", left: "10%" },
    { top: "40px", left: "35%" },
    { top: "10px", left: "50%" },
    { top: "40px", left: "65%" },
    { top: "90px", left: "90%" },
  ];

  return (
    <section className="py-24 bg-white">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-16 text-center transition-all duration-300 hover:text-orange-500 [text-shadow:_0_0_2px_orange,_1px_1px_0_orange,_-1px_-1px_0_orange,_1px_-1px_0_orange,_-1px_1px_0_orange]">
  Our Courses
</h2>


      <div className="relative w-full max-w-6xl mx-auto h-[280px]">
        {courses.map((course, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2"
            style={{
              top: positions[index].top,
              left: positions[index].left,
            }}
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
};

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-xl p-4 w-48 h-64 text-center border border-orange-200 flex flex-col items-center justify-between">
    <div className="h-40 flex items-center justify-center mb-3">
      <img
        src={course.image}
        alt={course.title}
        className="max-h-full max-w-full object-contain"
      />
    </div>
    <h3 className="text-base font-semibold text-gray-700">{course.title}</h3>
  </div>
);

export default CoursesSection;








