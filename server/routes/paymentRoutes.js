const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const router = express.Router();

// ✅ INIT RAZORPAY
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


// ==============================
// ✅ CREATE ORDER
// ==============================
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const options = {
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (err) {
    console.log("CREATE ORDER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


// ==============================
// ✅ VERIFY PAYMENT
// ==============================
router.post("/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      cart,
      amount,
    } = req.body;

    // 🔐 CREATE SIGNATURE
    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    // ❌ INVALID PAYMENT
    if (razorpay_signature !== expectedSign) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // ✅ PAYMENT SUCCESS
    // (you can save order here later)
    console.log("Payment Verified:", razorpay_payment_id);

    res.json({
      success: true,
      message: "Payment verified successfully",
    });

  } catch (err) {
    console.log("VERIFY ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


// ==============================
module.exports = router;