import React from "react";
import uiux from '../../assets/UI UX.png';
import frontend from '../../assets/course1.avif';
import amazon from '../../assets/amazon.png';
import mern from '../../assets/MERNStack.png';
import digital from '../../assets/Digital.png';

const CoursesSection = () => {
  const courses = [
    { title: "UI/UX Design", image: uiux },
    { title: "Front-end Development", image: frontend },
    { title: "Amazon Web Services (AWS)", image: amazon },
    { title: "MERN Stack Development", image: mern },
    { title: "Digital Marketing", image: digital },
  ];

 
  const positions = [
    { top: "120px", left: "10%" },  
    { top: "60px", left: "30%" },   
    { top: "20px", left: "50%" },   
    { top: "60px", left: "70%" },   
    { top: "120px", left: "90%" },  
  ];

  return (
    <section className="py-24 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-16 text-center transition-all duration-300 hover:text-orange-500 [text-shadow:_0_0_2px_orange,_1px_1px_0_orange,_-1px_-1px_0_orange,_1px_-1px_0_orange,_-1px_1px_0_orange]">
        Our Courses
      </h2>

      <div className="relative w-full max-w-6xl mx-auto h-[320px]">
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
  <div className="bg-white shadow-md rounded-xl w-48 h-64 text-center border border-orange-200 flex flex-col transition-transform hover:scale-105 overflow-hidden">
 
    <div className="h-40 w-full">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover"
      />
    </div>

   
    <div className="flex-1 flex items-center justify-center p-2">
      <h3 className="text-base font-semibold text-gray-700">{course.title}</h3>
    </div>
  </div>
);

export default CoursesSection;
