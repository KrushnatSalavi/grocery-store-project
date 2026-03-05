const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const { protect } = require("../middleware/authMiddleware");


// ✅ CREATE Category (Protected - Optional)
router.post("/", protect, async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const existing = await Category.findOne({ name: req.body.name });
    if (existing) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = new Category({
      name: req.body.name,
    });

    const savedCategory = await category.save();
    res.status(201).json(savedCategory);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ✅ GET All Categories (Public)
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ✅ DELETE Category (Protected)
router.delete("/:id", protect, async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await category.deleteOne();

    res.json({ message: "Category deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;