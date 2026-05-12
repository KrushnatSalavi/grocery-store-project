const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");


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
  if (!user.isVerified) {
  return res.status(401).json({
    message: "Please verify your email before login"
  });
}
};



exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const token = crypto.randomBytes(32).toString("hex");

    const user = new User({
      name,
      email,
      password,
      verificationToken: token,
      isVerified: false,
    });

    await user.save();

    const verifyURL = `http://localhost:3000/verify/${token}`;

    await sendEmail(
      email,
      "Verify Your Email",
      `<h3>Click below to verify your email</h3>
       <a href="${verifyURL}">Verify Email</a>`
    );

    res.json({
      message: "Registration successful. Please check your email."
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};