"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";

export default function ProfileLayout({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
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
    } catch (error) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 bg-white border rounded-lg p-4">
          <div className="text-center mb-6">
            <img src="/user.png" className="w-16 mx-auto mb-2" />
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-500">
              {user.email}
            </p>
          </div>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/profile" className="flex hover:text-primary">
                <CgProfile size={25} className="mr-3"/>My Profile
              </Link>
            </li>

            <li>
              <Link href="/profile/address" className="flex hover:text-primary">
                <IoLocationOutline size={25} className="mr-3"/>Address
              </Link>
            </li>

            <li>
              <Link href="/profile/orders" className="flex hover:text-primary">
                <IoBagHandleOutline size={25} className="mr-3"/>My Orders
              </Link>
            </li>

            <li>
              <Link href="/cart" className="flex hover:text-primary">
                <CiShoppingCart size={25} className="mr-3"/>Cart
              </Link>
            </li>

            <li
              onClick={handleLogout}
              className="text-red-500 cursor-pointer flex"
            >
              <TbLogout2 size={25} className="mr-3"/>Logout
            </li>

          </ul>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="col-span-12 md:col-span-9">
          {children}
        </main>

      </div>
    </section>
  );
}