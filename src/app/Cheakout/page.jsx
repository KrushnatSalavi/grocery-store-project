"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Button,
  Drawer,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, clearCart } = useCart();

  // =========================
  // ✅ Address State
  // =========================
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  const [openDrawer, setOpenDrawer] = useState(false);

  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!address.name || !address.street) {
      alert("Please add delivery address!");
      return;
    }

    alert("Payment Successful 🎉");
    clearCart();
    router.push("/");

    const handlePayment = async () => {
  await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      products: cart.map((item) => ({
        productId: item._id,
        quantity: item.qty,
      })),
      totalAmount: subtotal,
    }),
  });

  clearCart();
};
  };

  return (
    <section className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto bg-white border rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-6">
          Checkout
        </h2>

        {/* ===================== */}
        {/* ✅ ADDRESS SECTION */}
        {/* ===================== */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">
              Delivery Address
            </h3>
            <Button
              size="small"
              onClick={() => setOpenDrawer(true)}
            >
              Edit
            </Button>
          </div>

          {address.name ? (
            <div className="text-sm text-gray-700">
              <p>{address.name}</p>
              <p>{address.phone}</p>
              <p>{address.street}</p>
              <p>
                {address.city} - {address.pincode}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              No address added
            </p>
          )}
        </div>

        {/* ===================== */}
        {/* ✅ ORDER SUMMARY */}
        {/* ===================== */}
        <div className="mb-6">
          <h3 className="font-semibold mb-4">
            Order Summary
          </h3>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              No items in cart
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-2 text-sm"
              >
                <span>
                  {item.title} × {item.qty}
                </span>
                <span>
                  ₹{(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))
          )}

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-red-600">
              ₹{subtotal.toFixed(2)}
            </span>
          </div>
        </div>

        {/* ===================== */}
        {/* ✅ PAYMENT BUTTON */}
        {/* ===================== */}
        <Button
          onClick={handlePayment}
          disabled={cart.length === 0}
          className="!bg-green-600 !text-white !w-full !capitalize"
        >
          Pay Now
        </Button>
      </div>

      {/* ===================== */}
      {/* ✅ ADDRESS DRAWER */}
      {/* ===================== */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="w-80 p-6 space-y-4">
          <h3 className="font-semibold text-lg">
            Edit Address
          </h3>

          <TextField
            label="Full Name"
            fullWidth
            size="small"
            value={address.name}
            onChange={(e) =>
              setAddress({
                ...address,
                name: e.target.value,
              })
            }
          />

          <TextField
            label="Phone"
            fullWidth
            size="small"
            value={address.phone}
            onChange={(e) =>
              setAddress({
                ...address,
                phone: e.target.value,
              })
            }
          />

          <TextField
            label="Street Address"
            fullWidth
            size="small"
            value={address.street}
            onChange={(e) =>
              setAddress({
                ...address,
                street: e.target.value,
              })
            }
          />

          <TextField
            label="City"
            fullWidth
            size="small"
            value={address.city}
            onChange={(e) =>
              setAddress({
                ...address,
                city: e.target.value,
              })
            }
          />

          <TextField
            label="Pincode"
            fullWidth
            size="small"
            value={address.pincode}
            onChange={(e) =>
              setAddress({
                ...address,
                pincode: e.target.value,
              })
            }
          />

          <Button
            onClick={() => setOpenDrawer(false)}
            className="!bg-blue-600 !text-white !w-full !capitalize"
          >
            Save Address
          </Button>
        </div>
      </Drawer>
    </section>
  );
}