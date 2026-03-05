"use client";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 bg-white">
      <Image src={product.image} width={120} height={120} alt="" />
      <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
      <Rating value={5} readOnly size="small" />
      <div className="flex items-center gap-2 mt-2">
        <span className="text-red-600 font-semibold">${product.price}</span>
        <span className="line-through text-gray-400">$38.10</span>
        <span className="text-green-600 text-xs">14% OFF</span>
      </div>

      <Button
        onClick={() => addToCart(product)}
        className="!bg-green-600 !text-white !mt-3 !capitalize"
      >
        Add to Cart
      </Button>
    </div>
  );
}
