import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

function Navbar() {
  // ✅ Object destructuring (fix for authUser error)
  const { authUser } = useAuth();

  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Sticky navbar state
  const [sticky, setSticky] = useState(false);

  // Mobile menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);

  // Effect: Apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Sticky on scroll
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link className="hover:text-pink-500 transition duration-200" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-pink-500 transition duration-200"
          to="/course"
        >
          Books
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-pink-500 transition duration-200"
          to="/contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-pink-500 transition duration-200"
          to="/about"
        >
          About
        </Link>
      </li>
    </>
  );

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300
        ${sticky ? "shadow-md bg-white dark:bg-slate-800" : "bg-white dark:bg-slate-900"}
      `}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl md:text-4xl font-extrabold text-pink-500 animate-pulse"
          >
            The Book Bar
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-semibold text-gray-800 dark:text-gray-200">
            {navItems}
          </ul>

          {/* Right Side: Theme + Auth */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Auth */}
            {authUser ? (
              <Logout />
            ) : (
              <Link
                to="/login"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 transition"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    mobileMenu
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <ul className="lg:hidden flex flex-col gap-3 p-4 bg-white dark:bg-slate-800 rounded-b-lg shadow-md font-semibold">
            {navItems}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Navbar;
