import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import API from "../utils/api";
import toast from "react-hot-toast";

const Contact = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await API.post("/contact/submit", userInfo);

      if (res.data) {
        toast.success("Message sent successfully 🎉");
        reset();
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen pt-28 px-6 md:px-20 bg-white dark:bg-slate-900">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
          Contact <span className="text-pink-500">Us</span>
        </h1>

        <p className="text-gray-500 dark:text-gray-300 mt-4">
          Have a question or suggestion? We'd love to hear from you.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-slate-800">
            <FaEnvelope className="text-3xl text-pink-500 mb-3" />
            <h3 className="text-xl font-semibold dark:text-white">
              Email Support
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              thebookbar@gmail.com
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-slate-800">
            <FaUser className="text-3xl text-pink-500 mb-3" />
            <h3 className="text-xl font-semibold dark:text-white">Community</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Join our growing community of readers.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-slate-800">
            <FaCommentDots className="text-3xl text-pink-500 mb-3" />
            <h3 className="text-xl font-semibold dark:text-white">Feedback</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Your feedback helps us improve BookBar.
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-10 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 dark:text-white font-medium">
              Name
            </label>

            <input
              type="text"
              autoComplete="off"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border
              bg-white text-black placeholder-black
              dark:bg-slate-700 dark:text-white dark:placeholder-gray-400
              focus:ring-2 focus:ring-pink-500 outline-none"
              {...register("name", { required: "Name is required" })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 dark:text-white font-medium">
              Email
            </label>

            <input
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border
              bg-white text-black placeholder-black
              dark:bg-slate-700 dark:text-white dark:placeholder-gray-400
              focus:ring-2 focus:ring-pink-500 outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 dark:text-white font-medium">
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Write your message..."
              autoComplete="off"
              className="w-full px-4 py-3 rounded-lg border
              bg-white text-black placeholder-black
              dark:bg-slate-700 dark:text-white dark:placeholder-gray-400
              focus:ring-2 focus:ring-pink-500 outline-none"
              {...register("message", {
                required: "Message cannot be empty",
              })}
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
