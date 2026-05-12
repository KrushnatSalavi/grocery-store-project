"use client";

import React from "react";
import ProductSlider from "./ProductSlider";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";




const PopularProducts = () => {
  const [value, setValue] = React.useState(0);
  const [categories, setCategories] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/categories"
      );
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-5">

          {/* LEFT */}
          <div className="w-[30%]">
            <h2 className="text-2xl text-gray-800 font-semibold">
              Popular Products
            </h2>
            <p className="text-sm text-gray-500">
              Do not miss the current offers
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-[70%] flex items-center justify-end">
            <ul className="flex gap-6">
              {categories.map((cat) => (
                <li key={cat._id}>
                  <Link key={cat._id} href={`/category/${cat._id}`}
                    className="text-gray-700 ml-5  hover:text-primary transition"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <ProductSlider />

      </div>
    </section>
  );
};

export default PopularProducts;
