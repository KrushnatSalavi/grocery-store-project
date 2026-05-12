"use client";

import { useCart } from "@/context/CartContext";
        import { useRouter } from "next/navigation";


export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();


  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">

      {/* LEFT - CART ITEMS */}
      <div className="md:col-span-2 bg-white p-5 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-1">Your Cart</h2>
        <p className="text-sm text-gray-500 mb-4">
          There are {cart.length} products in your cart
        </p>

        {cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border-b py-4"
          >
            {/* LEFT PART */}
            <div className="flex gap-4 items-center">

              {/* IMAGE */}
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                alt={item.name}
                className="w-16 h-16 object-contain bg-gray-100 rounded"
              />

              {/* DETAILS */}
              <div>
                <h3 className="font-medium text-sm">{item.name}</h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-red-500 font-semibold">
                    ₹{item.price}
                  </span>

                  <span className="text-gray-400 line-through text-sm">
                    ₹{item.price + 10}
                  </span>

                  <span className="text-green-600 text-xs">
                    14% OFF
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  Qty: {item.qty}
                </p>
              </div>
            </div>

            {/* REMOVE BUTTON */}
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="bg-white p-5 rounded-xl shadow h-fit">

        <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span className="text-red-500 font-semibold">₹{total}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Shipping</span>
          <span className="text-gray-500">Free</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Estimate for</span>
          <span>India</span>
        </div>

        <div className="flex justify-between font-bold text-lg mt-3 border-t pt-3">
          <span>Total</span>
          <span className="text-red-500">₹{total}</span>
        </div>



<button
  onClick={() => router.push("/Checkout")}
  className="w-full mt-5 bg-primary text-white py-2 rounded-lg"
>
  Next
</button>

      </div>

    </div>
  );
}