const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema(
  {
    user: String, // later replace with userId
    items: Array,
    amount: Number,
    paymentId: String,
    status: {
      type: String,
      default: "Paid",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

module.exports = mongoose.model("Order", orderSchema);
