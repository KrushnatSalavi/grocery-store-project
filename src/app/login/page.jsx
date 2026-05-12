"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password }
    );

    localStorage.setItem("token", data.token);

    if (data.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }

  } catch (err) {
    // 🔥 SMART ERROR HANDLING
    if (err.response?.data?.message === "Please verify your email before login") {
      setError("⚠️ Please verify your email first");
    } else {
      setError("Invalid Email or Password");
    }
  }
};



  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">

      <div className="absolute right-[-150px] top-0 w-80 h-80 bg-green-50 rounded-full"></div>
      <div className="absolute left-[-150px] bottom-0 w-80 h-80 bg-green-50 rounded-full"></div>

      <div className="w-full max-w-md bg-white border rounded-lg shadow-sm p-6 z-10">

        <h2 className="text-center font-semibold text-lg mb-6">
          Login to your account
        </h2>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded px-4 py-2 mb-4 outline-none focus:border-primary"
          />

          {/* Password */}
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded px-4 py-2 pr-10 outline-none focus:border-primary"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          {/* Forgot Password */}
          <p className="text-sm text-right text-primary mb-4">
            <Link href="/forgot-password">Forgot Password?</Link>
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-green-700 transition"
          >
            LOGIN
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Not Registered?{" "}
          <Link href="/register" className="text-primary font-semibold">
            Sign Up
          </Link>
        </p>

        <p className="text-center text-sm text-gray-500 mt-4">
          Or continue with social account
        </p>

        
      </div>
    </section>
  );
}