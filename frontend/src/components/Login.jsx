import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useForm } from "react-hook-form";
import API from "../utils/api";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { setAuthUser } = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/user/login", data);

      localStorage.setItem("Users", JSON.stringify(res.data.user));
      setAuthUser(res.data.user); // ⭐ IMPORTANT FIX

      toast.success("Login successful 🎉");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-slate-900 px-4">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white dark:bg-slate-800 shadow-2xl p-10 rounded-2xl space-y-6 relative"
      >
        <h2 className="text-4xl font-extrabold text-center text-pink-500 mb-4">
          Welcome Back
        </h2>

        {/* Email */}
        <div className="relative">
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg border 
              bg-white text-black placeholder-black
              dark:bg-slate-700 dark:text-white dark:placeholder-gray-400
              focus:ring-2 focus:ring-pink-500 outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Enter your password"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg border 
              bg-white text-black placeholder-black
              dark:bg-slate-700 dark:text-white dark:placeholder-gray-400
              focus:ring-2 focus:ring-pink-500 outline-none transition"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 hover:scale-[1.02] transition transform"
        >
          Login
        </button>

        {/* Redirect to Signup */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-500 hover:underline font-medium"
          >
            Signup
          </Link>
        </p>
      </motion.form>
    </div>
  );
}

export default Login;
