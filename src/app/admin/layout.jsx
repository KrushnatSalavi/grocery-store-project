"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <div className="flex flex-col gap-4">
          <Link href="/admin" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/admin/categories" className="hover:text-blue-600">Categories</Link>
          <Link href="/admin/products" className="hover:text-blue-600">Products</Link>
          <Link href="/admin/orders" className="hover:text-blue-600">Orders</Link>
          <Link href="/admin/users" className="hover:text-blue-600">Users</Link>

          <button
            onClick={logout}
            className="text-left text-red-500 mt-4"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}