"use client";

import { useState } from "react";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration successful ✅");

      localStorage.setItem("token", data.token);

      window.location.href = "/";

    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden -mt-10 sm:-mt-15 px-4 py-8 sm:py-10">

      {/* Background circles */}
      <div className="absolute right-[-180px] sm:right-[-150px] top-[-40px] sm:top-0 w-64 h-64 sm:w-80 sm:h-80 bg-green-50 rounded-full"></div>

      <div className="absolute left-[-180px] sm:left-[-150px] bottom-[-40px] sm:bottom-0 w-64 h-64 sm:w-80 sm:h-80 bg-green-50 rounded-full"></div>


      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm p-5 sm:p-6 md:p-8">

        <h2 className="text-center font-semibold text-base sm:text-lg md:text-xl mb-5 sm:mb-6">
          Register with a new account
        </h2>


        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-11 sm:h-12 border rounded px-3 sm:px-4 text-sm sm:text-base mb-4 outline-none focus:border-green-500"
        />


        {/* Email */}
        <input
          type="email"
          placeholder="Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-11 sm:h-12 border rounded px-3 sm:px-4 text-sm sm:text-base mb-4 outline-none focus:border-green-500"
        />


        {/* Password */}
        <div className="relative mb-4">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-11 sm:h-12 border rounded px-3 sm:px-4 pr-11 text-sm sm:text-base outline-none focus:border-green-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
          >
            {showPassword ? (
              <VisibilityOff fontSize="small" />
            ) : (
              <Visibility fontSize="small" />
            )}
          </button>

        </div>


        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full h-11 sm:h-12 bg-primary text-white rounded font-semibold text-sm sm:text-base hover:bg-green-700 transition duration-200"
        >
          REGISTER
        </button>


        {/* Login */}
        <p className="text-center text-xs sm:text-sm mt-4">
          Already have an account?{" "}
          <span className="text-primary cursor-pointer font-semibold hover:underline">
            Login
          </span>
        </p>


        {/* Social Login Text */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-5">
          Or continue with social account
        </p>

      </div>

    </section>
  );
}