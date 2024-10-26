import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaLightbulb, FaUsers } from 'react-icons/fa';

// Import images from assets
import campus1 from '../assets/campus1.jpg';
import campus2 from '../assets/campus2.jpg';
import campus3 from '../assets/campus3.jpg';
import heroBackground from '../assets/image.jpeg'; // Import your background image

function Home() {
  const campusImages = [campus1, campus2, campus3]; // Array of imported images

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }} // Set background image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-8 md:px-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to Kongu Engineering College
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md mx-auto">
            Empowering future engineers through quality education and innovation.
          </p>
          <a
            href="#explore"
            className="px-6 py-3 bg-teal-500 rounded-full text-white font-semibold shadow-lg hover:bg-teal-600 transition transform hover:scale-105"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center px-4 md:px-12">
          <motion.div
            className="flex flex-col items-center bg-gray-50 shadow-lg p-8 rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FaUniversity className="text-teal-500 text-6xl mb-4 transform hover:rotate-3 transition duration-300" />
            <h3 className="text-2xl font-semibold mb-2">Top-Rated Facilities</h3>
            <p className="text-center text-gray-700 max-w-xs">
              State-of-the-art labs, libraries, and <span className="text-teal-600 font-semibold">classrooms</span> designed to support student learning and growth.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-50 shadow-lg p-8 rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <FaLightbulb className="text-teal-500 text-6xl mb-4 transform hover:rotate-3 transition duration-300" />
            <h3 className="text-2xl font-semibold mb-2">Innovative Programs</h3>
            <p className="text-center text-gray-700 max-w-xs">
              Programs tailored to provide <span className="text-teal-600 font-semibold">practical experience</span> and industry insights for modern engineering.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-50 shadow-lg p-8 rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <FaUsers className="text-teal-500 text-6xl mb-4 transform hover:rotate-3 transition duration-300" />
            <h3 className="text-2xl font-semibold mb-2">Experienced Faculty</h3>
            <p className="text-center text-gray-700 max-w-xs">
              Our faculty includes industry leaders and <span className="text-teal-600 font-semibold">dedicated educators</span> committed to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Explore Our Campus Section */}
      <section className="py-20 bg-gray-200" id="explore">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Explore Our Campus</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8">
          {campusImages.map((image, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64 transform hover:scale-105 transition duration-500"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeInOut" }}
              style={{ transformOrigin: idx % 2 === 0 ? "left" : "right" }}
            >
              <img
                src={image}
                alt="Campus View"
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Campus Life</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 bg-teal-600 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future!</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Discover a community dedicated to academic excellence, collaboration, and innovation. Apply today to become part of our journey.
        </p>
        <a
          href="#apply"
          className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-200 transition transform hover:scale-105 shadow-lg"
        >
          Apply Now
        </a>
      </motion.section>
    </div>
  );
}

export default Home;
