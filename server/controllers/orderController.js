const Order = require("../models/Order");
const Product = require("../models/Product");

/* ===========================
   CREATE ORDER (User)
=========================== */
exports.createOrder = async (req, res) => {
  try {
    const { orderItems, totalAmount, address } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    // 🔥 STOCK REDUCTION LOGIC
    for (let item of orderItems) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Not enough stock for ${product.name}`,
        });
      }

      product.stock -= item.quantity;
      await product.save();
    }

    // ✅ CREATE ORDER
    const order = new Order({
      user: req.user._id,
      orderItems,
      totalAmount,
      address,
      status: "Paid",
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ===========================
   GET MY ORDERS (User)
=========================== */
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("orderItems.product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ===========================
   GET ALL ORDERS (Admin)
=========================== */
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("orderItems.product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ===========================
   UPDATE ORDER STATUS
=========================== */
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = req.body.status || order.status;

    const updatedOrder = await order.save();
    res.json(updatedOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ===========================
   DELETE ORDER
=========================== */
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.deleteOne();

    res.json({ message: "Order deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};