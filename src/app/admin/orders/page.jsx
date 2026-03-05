"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    // If no token → redirect
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/orders",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setOrders(data);
    } catch (error) {
      console.error(error);
      localStorage.removeItem("token");
      window.location.href = "/admin/login";
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `http://localhost:5000/api/orders/${orderId}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchOrders(); // Refresh
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-t hover:bg-gray-50">
              <td className="p-3">
                {order.user?.name || order.user?.email || order.user}
              </td>

              <td className="p-3 font-medium">
                ₹ {order.totalAmount}
              </td>

              <td className="p-3">
                <select
                  value={order.status}
                  onChange={(e) =>
                    updateStatus(order._id, e.target.value)
                  }
                  className="border p-1 rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}