"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // =========================
  // ✅ ADD TO CART
  // =========================
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      // If product already exists → increase quantity
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // If new product → add with qty 1
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // =========================
  // ✅ REMOVE FROM CART
  // =========================
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // =========================
  // ✅ CLEAR FULL CART
  // =========================
  const clearCart = () => {
    setCart([]);
  };

  // =========================
  // ✅ CALCULATE SUBTOTAL
  // =========================
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// =========================
// ✅ CUSTOM HOOK
// =========================
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};