"use client";

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Button } from "@mui/material";

const Productitem = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product._id} className="border p-4 shadow rounded">
          <img
            src={`http://localhost:5000/uploads/${product.image}`}
            className="h-40 object-cover mx-auto"
          />

          <h2 className="font-semibold mt-3">{product.name}</h2>
          <p className="text-red-600">₹{product.price}</p>

          <p className="text-sm">
            Stock:{" "}
            <span
              className={
                product.stock <= 5 ? "text-red-500 font-bold" : ""
              }
            >
              {product.stock}
            </span>
          </p>

          <Button
            disabled={product.stock === 0}
            onClick={() =>
              addToCart({
                _id: product._id,
                name: product.name,
                price: product.price,
                qty: 1,
              })
            }
          >
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Productitem;