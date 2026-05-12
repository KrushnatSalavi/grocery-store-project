"use client";

import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [showAddress, setShowAddress] = useState(false);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  // ✅ LOAD SAVED ADDRESS
  useEffect(() => {
    const saved = localStorage.getItem("address");
    if (saved) {
      setAddress(JSON.parse(saved));
    }
  }, []);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ✅ PAYMENT HANDLER
  const handlePayment = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: total }),
      });

      const order = await res.json();

      const options = {
        key: "rzp_test_Si8OtjCzylk8YR",
        amount: order.amount,
        currency: "INR",
        name: "LaxmiMall",
        description: "Order Payment",
        order_id: order.id,

        handler: async function (response) {
          const verifyRes = await fetch(
            "http://localhost:5000/api/payment/verify",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...response,
                cart,
                amount: total,
                address, // ✅ SEND ADDRESS
              }),
            }
          );

          const data = await verifyRes.json();

          if (data.success) {
            alert("Order Placed ✅");
          } else {
            alert("Payment Failed ❌");
          }
        },

        theme: {
          color: "#16a34a",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 relative">

      {/* MAIN BOX */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl font-semibold mb-4">Checkout</h2>

        {/* DELIVERY */}
        <div className="mb-6">
          <div className="flex justify-between">
            <h3 className="font-medium">Delivery Address</h3>
            <button
              onClick={() => setShowAddress(true)}
              className="text-blue-500 text-sm"
            >
              EDIT
            </button>
          </div>

          {/* ✅ SHOW ADDRESS */}
          {address.name ? (
            <p className="text-sm text-gray-700 mt-1">
              {address.name}, {address.phone} <br />
              {address.street}, {address.city} - {address.pincode}
            </p>
          ) : (
            <p className="text-gray-500 text-sm mt-1">
              No address added
            </p>
          )}
        </div>

        {/* ORDER SUMMARY */}
        <div>
          <h3 className="font-medium mb-2">Order Summary</h3>

          {cart.map((item) => (
            <div key={item._id} className="flex justify-between text-sm mb-1">
              <span>× {item.qty}</span>
              <span>₹{item.price}</span>
            </div>
          ))}

          <hr className="my-3" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-red-500">₹{total}</span>
          </div>
        </div>

        {/* PAY BUTTON */}
        <button
          onClick={handlePayment}
          className="w-full sm:w-52 mt-6 bg-primary hover:bg-blue-500 text-white py-2 rounded-lg"
        >
          Pay Now
        </button>
      </div>

      {/* 🔥 ADDRESS PANEL */}
      {showAddress && (
        <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg p-6 z-50">

          <h2 className="text-lg font-semibold mb-4">Edit Address</h2>

          <input
            className="w-full border p-2 mb-3 rounded"
            placeholder="Full Name"
            value={address.name}
            onChange={(e) =>
              setAddress({ ...address, name: e.target.value })
            }
          />

          <input
            className="w-full border p-2 mb-3 rounded"
            placeholder="Phone"
            value={address.phone}
            onChange={(e) =>
              setAddress({ ...address, phone: e.target.value })
            }
          />

          <input
            className="w-full border p-2 mb-3 rounded"
            placeholder="Street Address"
            value={address.street}
            onChange={(e) =>
              setAddress({ ...address, street: e.target.value })
            }
          />

          <input
            className="w-full border p-2 mb-3 rounded"
            placeholder="City"
            value={address.city}
            onChange={(e) =>
              setAddress({ ...address, city: e.target.value })
            }
          />

          <input
            className="w-full border p-2 mb-3 rounded"
            placeholder="Pincode"
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />

          {/* SAVE */}
          <button
            onClick={() => {
              localStorage.setItem("address", JSON.stringify(address));
              setShowAddress(false);
            }}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Save Address
          </button>

          {/* CLOSE */}
          <button
            onClick={() => setShowAddress(false)}
            className="absolute top-4 right-4 text-xl"
          >
            ✕
          </button>
        </div>
      )}

      {/* BACKDROP */}
      {showAddress && (
        <div
          onClick={() => setShowAddress(false)}
          className="fixed inset-0 bg-black bg-opacity-30"
        ></div>
      )}
    </div>
  );
}