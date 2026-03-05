const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3️⃣ Generate JWT Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      "your_secret_key",   // 🔥 change to env later
      { expiresIn: "1d" }
    );

    // 4️⃣ Send token + role
    res.json({
      token,
      role: user.role,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};