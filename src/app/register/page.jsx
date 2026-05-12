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

      // redirect to homepage
      window.location.href = "/";

    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden -mt-15">

      <div className="absolute right-[-150px] top-0 w-80 h-80 bg-green-50 rounded-full"></div>
      <div className="absolute left-[-150px] bottom-0 w-80 h-80 bg-green-50 rounded-full"></div>

      <div className="w-full max-w-md bg-white border rounded-lg shadow-sm p-6 z-10">

        <h2 className="text-center font-semibold text-lg mb-6">
          Register with a new account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4 outline-none focus:border-green-500"
        />

        <input
          type="email"
          placeholder="Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4 outline-none focus:border-green-500"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-4 py-2 pr-10 outline-none focus:border-green-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </button>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-green-700 transition"
        >
          REGISTER
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span className="text-primary cursor-pointer font-semibold">
            Login
          </span>
        </p>

        <p className="text-center text-sm text-gray-500 mt-4">
          Or continue with social account
        </p>

        

      </div>
    </section>
  );
}