import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTwitter, FaBook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-800 dark:text-gray-300 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-12 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 text-pink-500">
            <FaBook /> The Book Bar
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Discover amazing books, connect with readers and explore new stories
            every day. Your reading journey starts here.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Courses</li>
            <li className="hover:text-pink-500 cursor-pointer">About</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>
        </motion.div>

        {/* Newsletter + Social */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Subscribe to Updates</h3>

          <div className="flex mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              className="
              px-4 py-2 w-full rounded-l-lg border
              bg-white text-black placeholder-black
              dark:bg-slate-700 dark:text-white dark:placeholder-gray-400
              focus:ring-2 focus:ring-pink-500 outline-none transition"
            />
            <button className="bg-pink-500 text-white px-4 rounded-r-lg hover:bg-pink-600 transition">
              Join
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/im-rahul-panchal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer hover:text-pink-500 transition" />
            </a>

            <a
              href="https://instagram.com/ritikpaanchal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            </a>

            <a
              href="https://twitter.com/rahulasync"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="cursor-pointer hover:text-pink-500 transition" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-5 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">The Book Bar</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
