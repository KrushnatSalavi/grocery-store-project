const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");

dotenv.config();
connectDB();


const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// ================= ROUTES =================

// Auth Routes (Login/Register if inside authRoutes)
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Admin Routes
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

// Category Routes
const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/categories", categoryRoutes);

// Product Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Order Routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

// Cart Routes
const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);

// User Routes (Login/Profile etc.)
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.use("/uploads", express.static("uploads"));


// Static Folder for Uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});