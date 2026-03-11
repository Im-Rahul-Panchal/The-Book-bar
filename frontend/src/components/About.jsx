import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaBookOpen, FaUsers, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
            About <span className="text-pink-500">Book Bar</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover a universe of stories and knowledge. Book Bar connects
            passionate readers with amazing books and a vibrant community.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-10 mb-16"
        >
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Our Mission</h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            At <span className="font-semibold text-pink-500">Book Bar</span>, we
            believe books have the power to inspire, educate and transform
            lives. Our mission is to make reading accessible and enjoyable for
            everyone while helping readers discover their next favorite book.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md text-center"
          >
            <FaBookOpen className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Huge Collection
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore books across many genres from classics to modern
              bestsellers.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.06 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md text-center"
          >
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Smart Recommendations
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get personalized suggestions based on your reading interests.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.06 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md text-center"
          >
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Reader Community
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with fellow readers, share reviews and discover hidden
              gems.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Start Your Reading Journey 📚
          </h2>

          <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-lg">
            Explore Books
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default About;
