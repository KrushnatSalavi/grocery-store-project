"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
  });

  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  // 🔥 Fetch categories
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach(key => {
      formData.append(key, form[key]);
    });

    formData.append("image", image);

    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_TOKEN`,
      },
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    alert("Product Added");
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl flex flex-col gap-4"
    >
      {/* NAME */}
      <input
        value={form.name}
        placeholder="Product Name"
        className="border px-3 py-2 rounded-lg"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      {/* PRICE */}
      <input
        type="number"
        value={form.price}
        placeholder="Price"
        className="border px-3 py-2 rounded-lg"
        onChange={e => setForm({ ...form, price: e.target.value })}
      />

      {/* STOCK */}
      <input
        type="number"
        value={form.stock}
        placeholder="Stock"
        className="border px-3 py-2 rounded-lg"
        onChange={e => setForm({ ...form, stock: e.target.value })}
      />

      {/* DESCRIPTION */}
      <textarea
        value={form.description}
        placeholder="Description"
        className="border px-3 py-2 rounded-lg h-24"
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      {/* CATEGORY */}
      <select
        value={form.category}
        className="border px-3 py-2 rounded-lg"
        onChange={e => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* IMAGE */}
      <input
        type="file"
        className="border px-3 py-2 rounded-lg"
        onChange={e => setImage(e.target.files[0])}
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Product
      </button>
    </form>



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