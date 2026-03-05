const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  deleteOrder
} = require("../controllers/orderController");

/* ===========================
   CREATE ORDER
=========================== */
router.post("/", protect, createOrder);

/* ===========================
   GET MY ORDERS
=========================== */
router.get("/my-orders", protect, getMyOrders);

/* ===========================
   GET ALL ORDERS (Admin)
=========================== */
router.get("/", protect, getAllOrders);

/* ===========================
   UPDATE ORDER STATUS
=========================== */
router.put("/:id", protect, updateOrderStatus);

/* ===========================
   DELETE ORDER
=========================== */
router.delete("/:id", protect, deleteOrder);

module.exports = router;