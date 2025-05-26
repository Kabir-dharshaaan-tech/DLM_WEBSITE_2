
import React from 'react';
import { motion } from 'framer-motion';
import missionImage from '../../assets/Union.png';
import visionImage from '../../assets/Union-3.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Middle = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
    <div className="mt-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-white mb-4 transition-all duration-300 hover:text-orange-500 [text-shadow:_0_0_2px_orange,_1px_1px_0_orange,_-1px_-1px_0_orange,_1px_-1px_0_orange,_-1px_1px_0_orange]">
  Our Mission
</h3>

          <p className="text-gray-700 text-base leading-relaxed">
            Our mission is to bridge the gap between academic learning and real-world applications.
            We equip students with practical skills in the latest technologies, ensuring they are
            job-ready and prepared for the modern IT industry.
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeInUp}
        >
          <img
            src={missionImage}
            alt="Mission"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

   
      <div className="mt-20 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 relative z-10">
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-white mb-4 transition-all duration-300 hover:text-orange-500 [text-shadow:_0_0_2px_orange,_1px_1px_0_orange,_-1px_-1px_0_orange,_1px_-1px_0_orange,_-1px_1px_0_orange]">
  Our Vision
</h3>

          <p className="text-gray-700 text-base leading-relaxed">
            We envision a future where every student can reach their full potential in the tech industry.
            Through exceptional training and steadfast support, we aim to cultivate a community of
            skilled professionals prepared to innovate and lead.
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeInUp}
        >
          <img
            src={visionImage}
            alt="Vision"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

 
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0071BC" />
              <stop offset="100%" stopColor="#004C97" />
            </linearGradient>
          </defs>
          <path
            d="M 50 600 C 300 500, 450 550, 600 450 S 850 300, 1000 350 S 1200 420, 1400 370"
            stroke="url(#lineGradient)"
            strokeWidth="15"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Middle;






























