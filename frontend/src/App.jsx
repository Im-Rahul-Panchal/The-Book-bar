import React from "react";
import { useAuth } from "./context/AuthProvider";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useAuth();

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-white">
      <Navbar />
      <ScrollToTop />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/login" />}
          />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />

      <Toaster position="top-right" />
    </div>
  );
}

export default App;
