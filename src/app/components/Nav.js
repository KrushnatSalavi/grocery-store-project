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
    <div className="shadow-sm border-b">

      {/* Top Header */}
      <div className="flex justify-between items-center px-10 py-4 bg-white">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          🛍 LaxmiMall
        </Link>

        {/* Search Bar */}
        <div className="w-1/3 relative">
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
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href={"/cart"} className='relative flex'>

            <HiOutlineShoppingBag size={30} />

          </Link>
          <Link href={"/profile"} className='relative flex'>

            <CgProfile size={30} />

          </Link>
        </div>



      </div>

      {/* Category Navbar */}
      <div className="bg-white border-t">
        <div className="flex gap-8 px-10 py-3 text-gray-700 font-medium overflow-x-auto whitespace-nowrap">

          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <Link href="/Fruits" className="hover:text-black">
            Fruits & Vegetables
          </Link>

          <Link href="/Meats" className="hover:text-black">
            Meats & Seafood
          </Link>

          <Link href="/Breaksfast" className="hover:text-black">
            Breakfast & Dairy
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/category/${cat._id}`}
              className="hover:text-black"
            >
              {cat.name}
            </Link>
          ))}

          <span className="cursor-pointer hover:text-black">
            More ▼
          </span>

        </div>
      </div>

    </div>
  );
}