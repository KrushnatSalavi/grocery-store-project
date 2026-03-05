"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,

    
  });

 //

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");

      // If no token → redirect to login
      if (!token) {
        window.location.href = "/admin/login";
        return;
      }

      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/admin/dashboard-stats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(data);
      } catch (error) {
        // If token invalid → clear and redirect
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 shadow rounded">
          <p className="text-gray-500">Users</p>
          <h2 className="text-xl font-bold">{stats.totalUsers}</h2>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <p className="text-gray-500">Products</p>
          <h2 className="text-xl font-bold">{stats.totalProducts}</h2>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-xl font-bold">{stats.totalOrders}</h2>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-xl font-bold">₹ {stats.totalRevenue}</h2>
        </div>
      </div>
    </div>
  );
}