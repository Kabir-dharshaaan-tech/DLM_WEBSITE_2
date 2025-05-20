




import React from "react";

const courses = [
  {
    title: "UI/UX Design",
    image: "/images/course1.avif",
  },
  {
    title: "Front-end Development",
    image: "/images/frontend.png",
  },
  {
    title: "Amazon Web Services (AWS)",
    image: "../../assets/amazon.png",
  },
  {
    title: "MERN Stack Development",
    image: "/images/mern.png",
  },
  {
    title: "Digital Marketing",
    image: "/images/digital.png",
  },
];

const Courses = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
        Our Courses
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-40 text-center"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-40 h-40 object-cover rounded-xl shadow-md"
            />
            <h3 className="mt-4 text-md font-medium text-gray-700">
              {course.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
