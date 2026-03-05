"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border px-4 py-2">
                <img
                  src={`http://localhost:5000/uploads/${product.image}`}
                  alt={product.name}
                  width="80"
                />
              </td>

              <td className="border px-4 py-2">{product.name}</td>

              <td className="border px-4 py-2">₹{product.price}</td>

              <td className="border px-4 py-2">
                <span className={product.stock <= 5 ? "text-red-500 font-bold" : ""}>
                  {product.stock}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}