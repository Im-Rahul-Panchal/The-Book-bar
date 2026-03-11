import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import API from "../utils/api";
import { motion } from "framer-motion";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.get("/books");
        setBooks(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-10 py-20">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 text-pink-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Explore Our Books
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((item) => (
          <Cards item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Course;
