import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb } from 'react-icons/fa'; // Import icons for each club

function Club() {
  const clubs = [
    {
      name: 'Coding Club (CCC)',
      description: 'Empowering students with coding skills, organizing hackathons, and fostering collaborative projects to boost coding skills.',
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      icon: <FaCode className="w-12 h-12 mx-auto text-teal-500" />, // Use FaCode icon for Coding Club
    },
    {
      name: 'CSEA',
      description: 'Fostering innovation in Computer Science through seminars, coding competitions, and group projects in AI and ML.',
      quote: "Innovation is the ability to see change as an opportunity – not a threat.",
      icon: <FaLightbulb className="w-12 h-12 mx-auto text-teal-500" />, // Use FaLightbulb icon for CSEA
    },
  ];

  return (
    <section id="clubs" className="p-10 text-center bg-gray-100 font-sans">
      <h2 className="text-5xl font-extrabold mb-12 text-gray-900">
        <span className="text-teal-500">Our</span> Clubs
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {clubs.map((club, idx) => (
          <motion.div
            key={club.name}
            className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)' }}
          >
            <motion.div
              className="mb-4"
              whileHover={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {club.icon} {/* Render the icon directly */}
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              {club.name.split(' ').map((word, index) => (
                <span key={index} className={index % 2 === 0 ? 'text-teal-600' : 'text-gray-800'}>
                  {word}{' '}
                </span>
              ))}
            </h3>
            <p className="text-lg italic text-teal-700 font-semibold mb-4">"{club.quote}"</p>
            <p className="text-gray-700 text-base leading-relaxed">
              <span className="font-semibold text-gray-800">
                {club.description.slice(0, club.description.indexOf(' '))}
              </span>
              {club.description.slice(club.description.indexOf(' '))}
            </p>
            <motion.button
              className="px-6 py-2 mt-6 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Club;
