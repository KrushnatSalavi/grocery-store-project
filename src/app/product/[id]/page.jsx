"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

      {/* IMAGE */}
      <div className="bg-gray-100 flex items-center justify-center rounded-lg p-4">
        <img
          src={`http://localhost:5000/uploads/${product.image}`}
          alt={product.name}
          className="max-h-80 object-contain"
        />
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>

        <p className="text-red-500 text-xl mt-2">
          ₹{product.price}
        </p>

        <p className="mt-4 text-gray-600">
          {product.description}
        </p>

        <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-500">
          ADD TO CART
        </button>
      </div>

    </div>
  );
}