"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const fetchCategories = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/categories"
    );
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ ADD CATEGORY
  const addCategory = async (e) => {
    e.preventDefault();

    if (!name) return alert("Enter category name");

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/categories",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName("");
      fetchCategories();

    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to add category");
    }
  };

  // ✅ DELETE CATEGORY
  const deleteCategory = async (id) => {
    if (!confirm("Are you sure you want to delete?"))
      return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/categories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCategories();

    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Manage Categories
      </h1>

      {/* ADD CATEGORY FORM */}
      <form
        onSubmit={addCategory}
        className="flex gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 rounded w-64"
        />

        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded"
        >
          Add Category
        </button>
      </form>

      {/* CATEGORY TABLE */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Category Name</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id}>
              <td className="p-3 border">{cat.name}</td>
              <td className="p-3 border">
                <button
                  onClick={() => deleteCategory(cat._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}