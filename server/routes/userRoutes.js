const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const Order = require("../models/Order");

const { loginUser } = require("../controllers/userController");

router.post("/login", loginUser);

// GET ALL USERS (Admin Only)
router.get("/", protect, adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// DELETE USER
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});


// GET USER PROFILE
router.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    const orders = await Order.find({ user: req.user._id });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      orders,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// UPDATE PROFILE
router.put("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.get("/verify/:token", async (req, res) => {
  try {
    const user = await User.findOne({
      verificationToken: req.params.token,
    });

    if (!user) {
      return res.status(400).send("Invalid token");
    }

    user.isVerified = true;
    user.verificationToken = undefined;

    await user.save();

    res.send("Email verified successfully ✅");

  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;