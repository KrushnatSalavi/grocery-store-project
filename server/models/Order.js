const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        price: Number,
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
  address: {
      type: Object,
      required: true,
    },
    
    status: {
  type: String,
  enum: ["Pending", "Processing", "Shipped", "Delivered"],
  default: "Paid"
}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
