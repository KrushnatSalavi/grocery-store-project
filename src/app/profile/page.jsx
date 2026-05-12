"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token");

if (!token) {
  throw new Error("No token");
}

const { data } = await axios.get(
  "http://localhost:5000/api/users/profile",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

    setUser(data);
    setName(data.name);
    setEmail(data.email);
  } catch (error) {
    alert("Please login first");
    window.location.href = "/login";
  }
};

const updateProfile = async () => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = await axios.put(
      "http://localhost:5000/api/users/profile",
      { name, email },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    setUser(data);
    setEditMode(false);
    alert("Profile updated successfully ✅");
  } catch (error) {
    alert("Update failed");
  }
};

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="min-h-screen flex justify-center items-start pt-20 bg-gray-50">
      <div className="w-full max-w-3xl bg-white shadow rounded p-6">

        <h2 className="text-2xl font-bold mb-6">My Profile</h2>

        <div className="space-y-4">

          <div>
            <label className="font-semibold">Name:</label>
            {editMode ? (
              <input
                className="border ml-2 px-2 py-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <span className="ml-2">{user.name}</span>
            )}
          </div>

          <div>
            <label className="font-semibold">Email:</label>
            {editMode ? (
              <input
                className="border ml-2 px-2 py-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span className="ml-2">{user.email}</span>
            )}
          </div>

          <div>
            <label className="font-semibold">Role:</label>
            <span className="ml-2 capitalize">{user.role}</span>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">My Orders</h3>

            {user.orders.length === 0 ? (
              <p>No orders yet</p>
            ) : (
              user.orders.map((order) => (
                <div
                  key={order._id}
                  className="border p-3 mb-2 rounded bg-gray-50"
                >
                  <p><strong>Order ID:</strong> {order._id}</p>
                  <p><strong>Total:</strong> ₹{order.totalPrice}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                </div>
              ))
            )}
          </div>

          <div className="mt-6">
            {editMode ? (
              <button
                onClick={updateProfile}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit Profile
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}