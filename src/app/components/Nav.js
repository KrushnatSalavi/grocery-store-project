"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgProfile } from 'react-icons/cg';

export default function Nav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/categories"
      );
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="mb-7">

      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-10 py-4 bg-white">

        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-black">
          🛍 LaxmiMall
        </Link>

        {/* Search Bar */}
        <div className="w-full md:w-1/3 relative">
          <input
            type="text"
            placeholder="Search for product..."
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
          />
          <Search
            className="absolute right-3 top-2.5 text-gray-500"
            size={20}
          />
        </div>

        {/* Auth Links */}
        <div className="flex gap-4 md:gap-6 text-gray-700 font-medium items-center">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>

          <Link href={"/cart"} className='relative flex'>
            <HiOutlineShoppingBag size={26} />
          </Link>

          <Link href={"/profile"} className='relative flex'>
            <CgProfile size={26} />
          </Link>
        </div>
      </div>

      {/* Category Navbar */}
      <div className="overflow-x-auto">
        <ul className="flex gap-4 md:gap-6 px-4 md:px-5 py-2 whitespace-nowrap">
          <Link href="/">
            <div className="text-gray-700 hover:text-primary font-medium transition">
              Home
            </div>
          </Link>

          {categories.map((cat) => (
            <li key={cat._id}>
              <Link
                href={`/category/${cat._id}`}
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}