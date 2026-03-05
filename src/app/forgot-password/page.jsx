"use client";

import Link from 'next/link';
import React from 'react'


const ForgetPassword = () => {

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden -mt-15">

   
      <div className="absolute right-[-150px] top-0 w-80 h-80 bg-green-50 rounded-full"></div>
      <div className="absolute left-[-150px] bottom-0 w-80 h-80 bg-green-50 rounded-full"></div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white border rounded-lg shadow-sm p-6 z-10">

        <div className="flex justify-center items-center">
          <div className="w-10">
            <img src="/lock.jpg" alt="Image" />
          </div>
        </div>


        <h2 className="text-center font-semibold text-lg ">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-500 justify-center items-center ml-10 mb-5">
          Enter your registered email address and we'll send you<br />
          a One-time Password (OTP) to reset your password
        </p>

        
        <input
          type="email"
          placeholder="Email Id"
          className="w-full border rounded px-4 py-2 mb-4 outline-none focus:border-primary"
        />




        {/* Login Button */}
        <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-blue-500 transition">
          <Link href={"/verify"}>Submit</Link>
        </button>
      <div className="flex justify-center mt-7 text-sm text-gray-500">
  <Link href="/login">Back to login</Link>
</div>




      </div>
    </section>
  );
}
export default ForgetPassword