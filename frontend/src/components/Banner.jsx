import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import book from "../assets/book.jpg";

function Banner() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    alert("Welcome to BookBar 🚀");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 pt-20 md:pt-28 flex flex-col md:flex-row items-center gap-12">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight dark:text-white">
          Welcome to <span className="text-pink-600">The Book Bar</span>
          <br />
          <span className="text-lg md:text-xl text-gray-500 dark:text-gray-300">
            Grasp Knowledge Every Day 📚
          </span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Discover a universe of books where every page opens a new adventure.
          Explore stories, gain knowledge, and find your next favorite read
          right here.
        </p>

        {/* Email Input */}
        <div className="space-y-2">
          <div className="flex w-full max-w-md shadow-md rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 outline-none bg-white dark:bg-slate-700 dark:text-white"
            />

            <button
              onClick={handleSubmit}
              className="bg-pink-600 text-white px-6 hover:bg-pink-700 transition"
            >
              Join
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        {/* CTA Button */}
        <Link to="/course">
          <button className="mt-4 px-8 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:scale-105 hover:bg-pink-700 transition">
            Explore Books
          </button>
        </Link>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <motion.img
          src={book}
          alt="Books"
          className="rounded-2xl shadow-2xl w-[90%] md:w-[80%]"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}

export default Banner;