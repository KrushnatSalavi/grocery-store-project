"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useCart } from "../context/CartContext";
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, subtotal } = useCart();

  return (
    <section className="container mx-auto py-10">
      <div className="grid lg:grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-8 bg-white border rounded-lg">
          <h2 className="text-lg font-semibold p-4 border-b">
            Your Cart
            <p className="text-sm text-gray-500">
              There are {cart.length} products in your cart
            </p>
          </h2>

          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border-b">
              <Image src={item.image} width={70} height={70} alt="Image" />

              <div className="flex-1">
                <p className="text-sm font-semibold">{item.title}</p>
                <Rating value={5} readOnly size="small" />

                <div className="flex gap-2 text-sm mt-1">
                  <span className="text-red-600">${item.price}</span>
                  <span className="line-through text-gray-400">$38.10</span>
                  <span className="text-green-600">14% OFF</span>
                </div>
              </div>

              <button onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 bg-white border rounded-lg p-6 h-fit">
          <h3 className="font-semibold mb-4">Cart Totals</h3>

          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span className="text-red-600">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span>Estimate for</span>
            <span>India</span>
          </div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-red-600">${subtotal.toFixed(2)}</span>
          </div>

          <Button className="!bg-green-600 !text-white !w-full !mt-5 !capitalize">
            <Link href={"/Cheakout"}>NEXT</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
