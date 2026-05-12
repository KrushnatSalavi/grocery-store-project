"use client"
import React from 'react'

import Image from "next/image";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useCart } from "../context/CartContext";





const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("desc");
   const { addToCart } = useCart();

  return (
   <section className=' bg-white'>
      <section className="container mx-auto py-10">
          <div className="grid grid-cols-12 gap-8">
    
            {/* LEFT – IMAGE */}
            <div className="col-span-4">
              <div className="border rounded-lg p-4 relative">
                <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
                  10%
                </span>
                <Image
                  src="/"
                  alt="Product"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
    
              <div className="flex gap-3 mt-4">
                <Image src="/" alt="Product" width={70} height={70} className="border p-1 rounded" />
                <Image src="/" alt="Product" width={70} height={70} className="border p-1 rounded" />
              </div>
            </div>
    
            {/* RIGHT – INFO */}
            <div className="col-span-8">
              <h1 className="text-2xl font-semibold">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </h1>
    
              <p className="text-sm text-gray-500 mt-1">
                Brand: <span className="text-primary">Lay's</span>
              </p>
    
              <div className="flex items-center gap-2 mt-2">
                <Rating value={5} readOnly size="small" />
                <span className="text-sm text-gray-400">(0 Reviews)</span>
              </div>
    
              <div className="flex items-center gap-3 mt-4">
                <span className="text-red-600 text-xl font-semibold">$25.99</span>
                <span className="line-through text-gray-400">$38.10</span>
                <span className="text-primary text-sm">
                  Available in Stock: <b>74,853 Items</b>
                </span>
              </div>
    
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
    
              {/* ADD TO CART */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex border rounded">
                  <button onClick={() => setQty(qty - 1)} className="px-3">-</button>
                  <span className="px-4 py-1">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="px-3">+</button>
                </div>
    
                <Button
                  className="btn-border-g"
                  onClick={() =>
                    addToCart({
                      id: 1000,
                      name: "100 Percent Apple Juice- 64 fl oz Bottel",
                      price: 25.99,
                      image: "/com.jpg",
                      brand: "Bingo",
                      qty: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>
    
                <button className="border p-2 rounded w-10">♡</button>
              </div>
            </div>
          </div>
    
          {/* TABS */}
          <div className="mt-10 border-b flex gap-6">
            <button
              onClick={() => setTab("desc")}
              className={`pb-2 ${tab === "desc" && "border-b-2 border-primary text-primary"}`}
            >
              Description
            </button>
    
            <button
              onClick={() => setTab("review")}
              className={`pb-2 ${tab === "review" && "border-b-2 border-primary text-primary"}`}
            >
              Reviews (0)
            </button>
          </div>
    
          {/* CONTENT */}
          {tab === "review" && (
            <div className="mt-6 space-y-6">
    
              {/* REVIEW */}
              <div className="p-4 rounded">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">MD MERAJ</p>
                    <p className="text-xs text-gray-400">2025-01-18</p>
                  </div>
                  <Rating value={4} readOnly size="small" />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing industry.
                </p>
              </div>
    
              {/* ADD REVIEW */}
              <div>
                <h3 className="font-semibold mb-2">Add a review</h3>
                <textarea
                  placeholder="Write a review..."
                  className="w-full border rounded p-3 h-24"
                />
                <Rating value={0} size="small" className="mt-2" />
                <Button className="!bg-green-600 !text-white !capitalize mt-3">
                  Submit Review
                </Button>
              </div>
    
            </div>
    
          )}
          {tab === "desc" && (
            <div className="mt-6 text-gray-700 text-sm leading-relaxed space-y-4">
              <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
    
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
    
              <ul className="list-disc pl-6">
                <li>Rich cream & onion flavor</li>
                <li>Crunchy texture</li>
                <li>Perfect for snacks & parties</li>
                <li>82g sealed freshness pack</li>
              </ul>
            </div>
          )}
    
          <div className="pt-10">
            <h1 className="text-gray-700 font-semibold text-2xl">
              Highly Recomanded
            </h1>
          </div>
        </section>
   </section>
  )
}


export default ProductDetails
