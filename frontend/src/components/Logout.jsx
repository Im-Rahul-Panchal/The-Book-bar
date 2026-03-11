import React from "react";
import { useAuth } from "../context/AuthProvider";
import { motion } from "framer-motion";

const Logout = () => {
  const { logout } = useAuth();

  return (
    <div className="flex justify-center">
      <motion.button
        onClick={logout}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          px-5 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg
          hover:bg-red-500 transition transform
          dark:bg-red-600 dark:hover:bg-red-500
          focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Logout
      </motion.button>
    </div>
  );
};

export default Logout;
