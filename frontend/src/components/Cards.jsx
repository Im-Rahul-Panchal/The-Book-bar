import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Cards({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
            {item.name}
          </h2>
          <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded">
            {item.category}
          </span>
        </div>

        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
          {item.title}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-pink-600">${item.price}</span>
          <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 transition transform hover:scale-105">
            Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ✅ PropTypes validation
Cards.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Cards;
