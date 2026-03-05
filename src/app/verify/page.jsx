"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import OtpBox from '../components/OtpBox';


const Verify= () => {

  const [otp, setOtp] = useState("");


  const handleChangeOTP = (value) =>{
    setOtp(value)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden -mt-15">

      {/* Decorative background circles */}
      <div className="absolute right-[-150px] top-0 w-80 h-80 bg-green-50 rounded-full"></div>
      <div className="absolute left-[-150px] bottom-0 w-80 h-80 bg-green-50 rounded-full"></div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white border rounded-lg shadow-sm p-6 z-10">

        <div className="flex justify-center items-center">
          <div className="w-10">
            <img src="/verify.jpg" alt="Image" />
          </div>
        </div>


        <h2 className="text-center font-semibold text-lg ">
          Verify your OTP
        </h2>

        <span className='text-sm flex justify-center items-center m-5'>
          OTP send to <span className='text-primary font-bold'>Krushna@gmail.com</span>
        </span>

      

        <div className='flex items-center justify-center my-6'>
          <OtpBox length={6} onChange={handleChangeOTP}/>
        </div>

        



        {/* Login Button */}
        <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-blue-500 transition">
          Verify
        </button>
      <div className="flex justify-center mt-7 text-sm text-gray-500">
  <Link href="/login">Back to login</Link>
</div>




      </div>
    </section>
  );
}
export default Verify