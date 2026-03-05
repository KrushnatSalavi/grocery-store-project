"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Banners from "./components/Banners";
import CatSlider from "./components/CatSlider";
import HomeSlider from "./components/HomeSlider";
import LatestP from "./components/LatestP";
import PopularProducts from "./components/PopularProducts";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If no login → go to login page
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="bg-[#f1f1f1]">
      <HomeSlider />
      <CatSlider />
      <PopularProducts />
      <Banners />

      <section className="bg-white py-5">
        <LatestP />
      </section>
    </div>
  );
}