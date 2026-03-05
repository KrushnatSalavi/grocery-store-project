const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/register-admin", authController.registerAdmin);
router.post("/login", authController.loginAdmin);
router.post("/register", authController.registerUser);
router.post("/login-user", authController.loginUser);

module.exports = router;