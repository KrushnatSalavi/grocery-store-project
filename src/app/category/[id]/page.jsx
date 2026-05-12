"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CategoryPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/products?category=${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h2 className="text-lg sm:text-xl font-bold mb-4">
        Category Products
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div className="bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition cursor-pointer">

                {/* IMAGE */}
                <div className="w-full h-32 sm:h-40 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                  <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* NAME */}
                <h2 className="text-xs sm:text-sm font-medium mt-2 line-clamp-2">
                  {product.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-2">
                  {product.description}
                </p>

                {/* STOCK */}
                <p className="text-xs sm:text-sm text-gray-800 mt-1">
                  Available Stock <b>{product.stock}</b>
                </p>

                {/* PRICE */}
                <p className="text-red-500 text-sm sm:text-base font-bold mt-1">
                  ₹{product.price}/-
                </p>

                {/* BUTTON */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="mt-3 w-full border border-primary text-primary py-1.5 rounded-lg hover:bg-blue-500 hover:text-white transition text-xs sm:text-sm"
                >
                  ADD TO CART
                </button>

              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}