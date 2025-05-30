
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const courses = [
  {
    title: 'UI/UX Design',
    description:
      'Explore the art and science of creating user-friendly and visually appealing digital interfaces. Our UI/UX Design course covers wireframing, prototyping, user research, and usability testing. Learn tools like Figma and Adobe XD while gaining insights into creating designs that enhance user engagement and experience.',
  },
  {
    title: 'Web Development',
    description:
      'Master HTML, CSS, JavaScript and full-stack frameworks like React, Node.js and MongoDB. Build and deploy powerful, scalable websites from scratch.',
  },
  {
    title: 'Data Science',
    description:
      'Learn Python, data analysis, machine learning, and data visualization. Build intelligent models and gain insights using tools like pandas, NumPy, and Tableau.',
  },
];

const Slide = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeTo = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + courses.length) % courses.length);
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.y;
    const velocity = info.velocity.y;

    if (offset < -100 || velocity < -500) swipeTo(-1);
    else if (offset > 100 || velocity > 500) swipeTo(1);
  };

  const cardVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      rotateX: direction > 0 ? -30 : 30,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (direction) => ({
      y: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      rotateX: direction < 0 ? -30 : 30,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
      <div className="relative w-full max-w-4xl h-[480px]">
        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] p-10 cursor-grab active:cursor-grabbing"
            style={{
              perspective: 1000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center mb-6">
              {courses[index].title}
            </h2>
            <p className="text-gray-700 text-lg md:text-xl text-center leading-relaxed max-w-2xl mx-auto">
              {courses[index].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slide;
