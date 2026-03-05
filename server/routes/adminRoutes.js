const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const User = require("../models/User");
const Product = require("../models/Product");
const Category = require("../models/Category");
const Order = require("../models/Order");


// DASHBOARD STATS API
router.get("/dashboard-stats", protect, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalProducts = await Product.countDocuments();
    const totalCategories = await Category.countDocuments();
    const totalOrders = await Order.countDocuments();

    const revenueData = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalAmount" }
        }
      }
    ]);

    const totalRevenue = revenueData.length > 0 ? revenueData[0].totalRevenue : 0;

    res.json({
      totalUsers,
      totalProducts,
      totalCategories,
      totalOrders,
       totalRevenue
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }


});

// GET All Users (Admin Only)
router.get("/users", protect, async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// DELETE User
router.delete("/users/:id", protect, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// MONTHLY SALES GRAPH API
router.get("/sales-graph", protect, async (req, res) => {
  try {
    const salesData = await Order.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          totalSales: { $sum: "$totalAmount" }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    const formattedData = salesData.map(item => ({
      month: item._id,
      totalSales: item.totalSales
    }));

    res.json(formattedData);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// TOP SELLING PRODUCTS
router.get("/top-products", protect, async (req, res) => {
  try {
    const topProducts = await Order.aggregate([
      { $unwind: "$orderItems" },
      {
        $group: {
          _id: "$orderItems.product",
          totalSold: { $sum: "$orderItems.quantity" },
          totalRevenue: {
            $sum: {
              $multiply: ["$orderItems.quantity", "$orderItems.price"]
            }
          }
        }
      },
      { $sort: { totalSold: -1 } },
      { $limit: 5 }
    ]);

    const populatedProducts = await Order.populate(topProducts, {
      path: "_id",
      model: "Product",
      select: "name price"
    });

    const formattedData = populatedProducts.map(item => ({
      productName: item._id.name,
      price: item._id.price,
      totalSold: item.totalSold,
      totalRevenue: item.totalRevenue
    }));

    res.json(formattedData);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
